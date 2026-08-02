-- ScrapWise production database starter schema.
-- Target: PostgreSQL / Supabase.
-- Run this in a new database before replacing localStorage with API calls.

create extension if not exists "pgcrypto";

create table if not exists tenants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  status text not null default 'active' check (status in ('active', 'inactive')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists branches (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  name text not null,
  code text not null,
  address text,
  contact text,
  status text not null default 'active' check (status in ('active', 'inactive')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, code)
);

create table if not exists app_users (
  id uuid primary key,
  tenant_id uuid not null references tenants(id) on delete cascade,
  branch_id uuid references branches(id) on delete set null,
  name text not null,
  email text not null unique,
  role text not null check (role in ('admin', 'staff', 'payroll')),
  status text not null default 'active' check (status in ('active', 'inactive')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists parties (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  type text not null check (type in ('supplier', 'customer')),
  name text not null,
  contact text,
  address text,
  notes text,
  status text not null default 'active' check (status in ('active', 'inactive')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists materials (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  name text not null,
  category text,
  buy_price numeric(12, 2) not null default 0 check (buy_price >= 0),
  sell_price numeric(12, 2) not null default 0 check (sell_price >= 0),
  unit text not null default 'kilo',
  status text not null default 'active' check (status in ('active', 'inactive')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, name)
);

create table if not exists price_history (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  material_id uuid not null references materials(id) on delete cascade,
  old_buy_price numeric(12, 2),
  new_buy_price numeric(12, 2),
  old_sell_price numeric(12, 2),
  new_sell_price numeric(12, 2),
  changed_by uuid references app_users(id) on delete set null,
  changed_at timestamptz not null default now()
);

create table if not exists transactions (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  number text not null,
  receipt_number text not null check (length(trim(receipt_number)) > 0),
  receipt_group_id text not null check (length(trim(receipt_group_id)) > 0),
  date date not null,
  branch_id uuid not null references branches(id) on delete restrict,
  type text not null check (type in ('purchase', 'sale')),
  party_id uuid not null references parties(id) on delete restrict,
  material_id uuid not null references materials(id) on delete restrict,
  weight numeric(12, 3) not null check (weight > 0),
  base_price numeric(12, 2) not null default 0 check (base_price >= 0),
  demand_price numeric(12, 2) check (demand_price is null or demand_price >= 0),
  total numeric(12, 2) not null default 0 check (total >= 0),
  payment_status text not null check (payment_status in ('paid', 'partial', 'unpaid')),
  paid numeric(12, 2) not null default 0 check (paid >= 0),
  balance numeric(12, 2) not null default 0 check (balance >= 0),
  notes text,
  source_transaction_id uuid references transactions(id) on delete set null,
  created_by uuid references app_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, number)
);

create table if not exists stock_movements (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  date date not null,
  branch_id uuid not null references branches(id) on delete restrict,
  material_id uuid not null references materials(id) on delete restrict,
  type text not null check (type in ('purchase_in', 'sale_out', 'delivery_out', 'delivery_in', 'manual_adjustment')),
  quantity numeric(12, 3) not null check (quantity <> 0),
  reference text not null,
  notes text,
  created_by uuid references app_users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists destinations (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  name text not null,
  type text not null check (type in ('buyer', 'warehouse', 'branch', 'other')),
  contact text,
  address text,
  notes text,
  status text not null default 'active' check (status in ('active', 'inactive')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists deliveries (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  number text not null,
  date date not null,
  source_branch_id uuid not null references branches(id) on delete restrict,
  destination_branch_id uuid references branches(id) on delete set null,
  destination_id uuid references destinations(id) on delete set null,
  destination_name text,
  truck text,
  driver text,
  status text not null default 'in_transit' check (status in ('draft', 'in_transit', 'received', 'cancelled')),
  notes text,
  created_by uuid references app_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, number)
);

create table if not exists delivery_lines (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  delivery_id uuid not null references deliveries(id) on delete cascade,
  material_id uuid not null references materials(id) on delete restrict,
  loaded_weight numeric(12, 3) not null check (loaded_weight > 0),
  delivered_weight numeric(12, 3) not null default 0 check (delivered_weight >= 0),
  actual_sold_cost numeric(12, 2) not null default 0 check (actual_sold_cost >= 0)
);

create table if not exists daily_capitals (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  date date not null,
  branch_id uuid not null references branches(id) on delete restrict,
  amount numeric(12, 2) not null check (amount >= 0),
  close_cash numeric(12, 2) check (close_cash is null or close_cash >= 0),
  notes text,
  created_by uuid references app_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, date, branch_id)
);

create table if not exists cash_movements (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  date date not null,
  branch_id uuid not null references branches(id) on delete restrict,
  type text not null check (type in ('paid_in', 'paid_out')),
  amount numeric(12, 2) not null check (amount > 0),
  notes text not null,
  created_by uuid references app_users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists employees (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  branch_id uuid references branches(id) on delete set null,
  name text not null,
  position text,
  salary_type text not null check (salary_type in ('daily', 'monthly')),
  rate numeric(12, 2) not null default 0 check (rate >= 0),
  sss_no text,
  pagibig_no text,
  benefits text,
  start_date date,
  status text not null default 'active' check (status in ('active', 'inactive')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists attendance_records (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  employee_id uuid not null references employees(id) on delete cascade,
  branch_id uuid not null references branches(id) on delete restrict,
  date date not null,
  regular_hours numeric(8, 2) not null default 0 check (regular_hours >= 0),
  overtime_hours numeric(8, 2) not null default 0 check (overtime_hours >= 0),
  late_minutes numeric(8, 2) not null default 0 check (late_minutes >= 0),
  absent_days numeric(8, 2) not null default 0 check (absent_days >= 0),
  notes text,
  created_by uuid references app_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, employee_id, date)
);

create table if not exists cash_advances (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  employee_id uuid not null references employees(id) on delete cascade,
  date date not null,
  amount numeric(12, 2) not null check (amount > 0),
  reason text,
  total_deduction numeric(12, 2) not null default 0 check (total_deduction >= 0),
  balance numeric(12, 2) not null default 0 check (balance >= 0),
  status text not null default 'active' check (status in ('active', 'paid', 'cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists payroll_runs (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  employee_id uuid not null references employees(id) on delete restrict,
  period_start date not null,
  period_end date not null,
  pay_date date,
  basic_pay numeric(12, 2) not null default 0,
  adjustment numeric(12, 2) not null default 0,
  taxable_allowance numeric(12, 2) not null default 0,
  incentives numeric(12, 2) not null default 0,
  commission numeric(12, 2) not null default 0,
  transpo_allowance numeric(12, 2) not null default 0,
  clothing_allowance numeric(12, 2) not null default 0,
  meal_allowance numeric(12, 2) not null default 0,
  nta numeric(12, 2) not null default 0,
  bonus numeric(12, 2) not null default 0,
  overtime_hours numeric(8, 2) not null default 0,
  overtime_amount numeric(12, 2) not null default 0,
  night_diff_hours numeric(8, 2) not null default 0,
  night_diff_amount numeric(12, 2) not null default 0,
  rest_day_hours numeric(8, 2) not null default 0,
  rest_day_amount numeric(12, 2) not null default 0,
  special_holiday_hours numeric(8, 2) not null default 0,
  special_holiday_amount numeric(12, 2) not null default 0,
  regular_holiday_hours numeric(8, 2) not null default 0,
  regular_holiday_amount numeric(12, 2) not null default 0,
  late_minutes numeric(8, 2) not null default 0,
  late_deduction numeric(12, 2) not null default 0,
  absent_days numeric(8, 2) not null default 0,
  absent_deduction numeric(12, 2) not null default 0,
  hmo numeric(12, 2) not null default 0,
  sss numeric(12, 2) not null default 0,
  sss_mpf numeric(12, 2) not null default 0,
  phil_health numeric(12, 2) not null default 0,
  hdmf numeric(12, 2) not null default 0,
  sss_salary_loan numeric(12, 2) not null default 0,
  sss_calamity_loan numeric(12, 2) not null default 0,
  hdmf_mpl numeric(12, 2) not null default 0,
  hdmf_calamity_loan numeric(12, 2) not null default 0,
  company_loan numeric(12, 2) not null default 0,
  tax numeric(12, 2) not null default 0,
  cash_advance_deduction numeric(12, 2) not null default 0,
  gross_pay numeric(12, 2) not null default 0,
  total_deduction numeric(12, 2) not null default 0,
  net_pay numeric(12, 2) not null default 0,
  status text not null default 'draft' check (status in ('draft', 'approved', 'paid', 'cancelled')),
  created_by uuid references app_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (period_end >= period_start)
);

create index if not exists idx_branches_tenant on branches(tenant_id);
create index if not exists idx_transactions_tenant_date on transactions(tenant_id, date desc);
create index if not exists idx_transactions_branch_date on transactions(branch_id, date desc);
create index if not exists idx_transactions_receipt on transactions(tenant_id, receipt_number, receipt_group_id);
create index if not exists idx_stock_movements_branch_material on stock_movements(branch_id, material_id, date desc);
create index if not exists idx_deliveries_tenant_date on deliveries(tenant_id, date desc);
create index if not exists idx_delivery_lines_tenant_delivery on delivery_lines(tenant_id, delivery_id);
create index if not exists idx_cash_movements_branch_date on cash_movements(branch_id, date desc);
create index if not exists idx_attendance_employee_date on attendance_records(employee_id, date desc);
create index if not exists idx_payroll_employee_period on payroll_runs(employee_id, period_start, period_end);

create or replace function set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_tenants_updated_at on tenants;
create trigger set_tenants_updated_at before update on tenants for each row execute function set_updated_at();

drop trigger if exists set_branches_updated_at on branches;
create trigger set_branches_updated_at before update on branches for each row execute function set_updated_at();

drop trigger if exists set_app_users_updated_at on app_users;
create trigger set_app_users_updated_at before update on app_users for each row execute function set_updated_at();

drop trigger if exists set_parties_updated_at on parties;
create trigger set_parties_updated_at before update on parties for each row execute function set_updated_at();

drop trigger if exists set_materials_updated_at on materials;
create trigger set_materials_updated_at before update on materials for each row execute function set_updated_at();

drop trigger if exists set_destinations_updated_at on destinations;
create trigger set_destinations_updated_at before update on destinations for each row execute function set_updated_at();

drop trigger if exists set_deliveries_updated_at on deliveries;
create trigger set_deliveries_updated_at before update on deliveries for each row execute function set_updated_at();

drop trigger if exists set_daily_capitals_updated_at on daily_capitals;
create trigger set_daily_capitals_updated_at before update on daily_capitals for each row execute function set_updated_at();

drop trigger if exists set_employees_updated_at on employees;
create trigger set_employees_updated_at before update on employees for each row execute function set_updated_at();

drop trigger if exists set_attendance_records_updated_at on attendance_records;
create trigger set_attendance_records_updated_at before update on attendance_records for each row execute function set_updated_at();

drop trigger if exists set_cash_advances_updated_at on cash_advances;
create trigger set_cash_advances_updated_at before update on cash_advances for each row execute function set_updated_at();

drop trigger if exists set_payroll_runs_updated_at on payroll_runs;
create trigger set_payroll_runs_updated_at before update on payroll_runs for each row execute function set_updated_at();

-- Supabase note:
-- app_users.id should match auth.users.id. Enable Row Level Security before exposing
-- this database to real users, then restrict rows by tenant_id and branch_id.
alter table tenants enable row level security;
alter table branches enable row level security;
alter table app_users enable row level security;
alter table parties enable row level security;
alter table materials enable row level security;
alter table price_history enable row level security;
alter table transactions enable row level security;
alter table stock_movements enable row level security;
alter table destinations enable row level security;
alter table deliveries enable row level security;
alter table delivery_lines enable row level security;
alter table daily_capitals enable row level security;
alter table cash_movements enable row level security;
alter table employees enable row level security;
alter table attendance_records enable row level security;
alter table cash_advances enable row level security;
alter table payroll_runs enable row level security;
