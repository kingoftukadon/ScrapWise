-- Jetplan Trading / ScrapWise production database baseline.
-- Target: Supabase PostgreSQL.
-- Run in Supabase SQL Editor before replacing the browser localStorage layer.

create extension if not exists "pgcrypto";

create schema if not exists app_private;

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
  unique (tenant_id, code),
  unique (id, tenant_id)
);

create table if not exists app_users (
  id uuid primary key references auth.users(id) on delete cascade,
  tenant_id uuid not null references tenants(id) on delete cascade,
  branch_id uuid,
  name text not null,
  email text not null unique,
  role text not null check (role in ('admin', 'staff', 'payroll')),
  status text not null default 'active' check (status in ('active', 'inactive')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (id, tenant_id),
  foreign key (branch_id, tenant_id) references branches(id, tenant_id) on delete set null (branch_id)
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
  updated_at timestamptz not null default now(),
  unique (id, tenant_id)
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
  unique (id, tenant_id)
);

create table if not exists price_history (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  material_id uuid not null,
  old_buy_price numeric(12, 2),
  new_buy_price numeric(12, 2),
  old_sell_price numeric(12, 2),
  new_sell_price numeric(12, 2),
  changed_by uuid,
  changed_at timestamptz not null default now(),
  foreign key (material_id, tenant_id) references materials(id, tenant_id) on delete cascade,
  foreign key (changed_by, tenant_id) references app_users(id, tenant_id) on delete set null (changed_by)
);

create table if not exists transactions (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  number text not null,
  receipt_number text not null check (length(trim(receipt_number)) > 0),
  receipt_group_id text not null check (length(trim(receipt_group_id)) > 0),
  date date not null,
  branch_id uuid not null,
  type text not null check (type in ('purchase', 'sale')),
  party_id uuid not null,
  material_id uuid not null,
  weight numeric(12, 3) not null check (weight > 0),
  base_price numeric(12, 2) not null default 0 check (base_price >= 0),
  demand_price numeric(12, 2) check (demand_price is null or demand_price >= 0),
  total numeric(12, 2) not null default 0 check (total >= 0),
  payment_status text not null check (payment_status in ('paid', 'partial', 'unpaid')),
  paid numeric(12, 2) not null default 0 check (paid >= 0),
  balance numeric(12, 2) not null default 0 check (balance >= 0),
  notes text,
  source_transaction_id uuid references transactions(id) on delete set null,
  created_by uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, number),
  unique (tenant_id, receipt_number, receipt_group_id, material_id),
  foreign key (branch_id, tenant_id) references branches(id, tenant_id) on delete restrict,
  foreign key (party_id, tenant_id) references parties(id, tenant_id) on delete restrict,
  foreign key (material_id, tenant_id) references materials(id, tenant_id) on delete restrict,
  foreign key (created_by, tenant_id) references app_users(id, tenant_id) on delete set null (created_by)
);

create table if not exists stock_movements (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  date date not null,
  branch_id uuid not null,
  material_id uuid not null,
  type text not null check (type in ('purchase_in', 'sale_out', 'delivery_out', 'delivery_in', 'manual_adjustment')),
  quantity numeric(12, 3) not null check (quantity <> 0),
  reference text not null,
  notes text,
  created_by uuid,
  created_at timestamptz not null default now(),
  foreign key (branch_id, tenant_id) references branches(id, tenant_id) on delete restrict,
  foreign key (material_id, tenant_id) references materials(id, tenant_id) on delete restrict,
  foreign key (created_by, tenant_id) references app_users(id, tenant_id) on delete set null (created_by)
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
  updated_at timestamptz not null default now(),
  unique (id, tenant_id)
);

create table if not exists deliveries (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  number text not null,
  date date not null,
  source_branch_id uuid not null,
  destination_branch_id uuid,
  destination_id uuid,
  destination_name text,
  truck text not null,
  driver text not null,
  status text not null default 'pending' check (status in ('pending', 'in_transit', 'completed', 'cancelled')),
  notes text,
  created_by uuid,
  updated_by uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, number),
  unique (id, tenant_id),
  foreign key (source_branch_id, tenant_id) references branches(id, tenant_id) on delete restrict,
  foreign key (destination_branch_id, tenant_id) references branches(id, tenant_id) on delete set null (destination_branch_id),
  foreign key (destination_id, tenant_id) references destinations(id, tenant_id) on delete set null (destination_id),
  foreign key (created_by, tenant_id) references app_users(id, tenant_id) on delete set null (created_by),
  foreign key (updated_by, tenant_id) references app_users(id, tenant_id) on delete set null (updated_by)
);

create table if not exists delivery_lines (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  delivery_id uuid not null,
  material_id uuid not null,
  loaded_weight numeric(12, 3) not null check (loaded_weight > 0),
  delivered_weight numeric(12, 3) not null default 0 check (delivered_weight >= 0),
  actual_sold_cost numeric(12, 2) not null default 0 check (actual_sold_cost >= 0),
  foreign key (delivery_id, tenant_id) references deliveries(id, tenant_id) on delete cascade,
  foreign key (material_id, tenant_id) references materials(id, tenant_id) on delete restrict
);

create table if not exists daily_capitals (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  date date not null,
  branch_id uuid not null,
  amount numeric(12, 2) not null check (amount >= 0),
  close_cash numeric(12, 2) check (close_cash is null or close_cash >= 0),
  status text not null default 'open' check (status in ('open', 'closed')),
  notes text,
  created_by uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, date, branch_id),
  foreign key (branch_id, tenant_id) references branches(id, tenant_id) on delete restrict,
  foreign key (created_by, tenant_id) references app_users(id, tenant_id) on delete set null (created_by)
);

create table if not exists cash_movements (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  date date not null,
  branch_id uuid not null,
  type text not null check (type in ('paid_in', 'paid_out')),
  amount numeric(12, 2) not null check (amount > 0),
  notes text not null,
  created_by uuid,
  created_at timestamptz not null default now(),
  foreign key (branch_id, tenant_id) references branches(id, tenant_id) on delete restrict,
  foreign key (created_by, tenant_id) references app_users(id, tenant_id) on delete set null (created_by)
);

create table if not exists employees (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  branch_id uuid,
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
  updated_at timestamptz not null default now(),
  unique (id, tenant_id),
  foreign key (branch_id, tenant_id) references branches(id, tenant_id) on delete set null (branch_id)
);

create table if not exists attendance_records (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  employee_id uuid not null,
  branch_id uuid not null,
  date date not null,
  clock_in_at timestamptz not null,
  clock_out_at timestamptz,
  regular_hours numeric(8, 2) not null default 0 check (regular_hours >= 0),
  overtime_hours numeric(8, 2) not null default 0 check (overtime_hours >= 0),
  late_minutes numeric(8, 2) not null default 0 check (late_minutes >= 0),
  absent_days numeric(8, 2) not null default 0 check (absent_days >= 0),
  notes text,
  created_by uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, employee_id, date),
  check (clock_out_at is null or clock_out_at >= clock_in_at),
  foreign key (employee_id, tenant_id) references employees(id, tenant_id) on delete cascade,
  foreign key (branch_id, tenant_id) references branches(id, tenant_id) on delete restrict,
  foreign key (created_by, tenant_id) references app_users(id, tenant_id) on delete set null (created_by)
);

create table if not exists cash_advances (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  employee_id uuid not null,
  date date not null,
  amount numeric(12, 2) not null check (amount > 0),
  reason text,
  total_deduction numeric(12, 2) not null default 0 check (total_deduction >= 0),
  balance numeric(12, 2) not null default 0 check (balance >= 0),
  status text not null default 'active' check (status in ('active', 'fully_deducted', 'cancelled')),
  created_by uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  foreign key (employee_id, tenant_id) references employees(id, tenant_id) on delete cascade,
  unique (id, tenant_id),
  foreign key (created_by, tenant_id) references app_users(id, tenant_id) on delete set null (created_by)
);

create table if not exists payroll_runs (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  employee_id uuid not null,
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
  status text not null default 'draft' check (status in ('draft', 'approved', 'paid')),
  created_by uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, employee_id, period_start, period_end),
  unique (id, tenant_id),
  check (period_end >= period_start),
  foreign key (employee_id, tenant_id) references employees(id, tenant_id) on delete restrict,
  foreign key (created_by, tenant_id) references app_users(id, tenant_id) on delete set null (created_by)
);

create table if not exists payroll_cash_advance_applications (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  payroll_run_id uuid not null,
  cash_advance_id uuid not null,
  amount numeric(12, 2) not null check (amount > 0),
  created_at timestamptz not null default now(),
  unique (payroll_run_id, cash_advance_id),
  foreign key (payroll_run_id, tenant_id) references payroll_runs(id, tenant_id) on delete cascade,
  foreign key (cash_advance_id, tenant_id) references cash_advances(id, tenant_id) on delete restrict
);

create index if not exists idx_app_users_tenant_role on app_users(tenant_id, role, status);
create index if not exists idx_branches_tenant on branches(tenant_id, status);
create unique index if not exists idx_parties_tenant_type_name_ci on parties(tenant_id, type, lower(name));
create unique index if not exists idx_materials_tenant_name_ci on materials(tenant_id, lower(name));
create unique index if not exists idx_destinations_tenant_name_ci on destinations(tenant_id, lower(name));
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

create or replace function app_private.current_tenant_id()
returns uuid
language sql
security definer
set search_path = public, auth
stable
as $$
  select tenant_id
  from public.app_users
  where id = (select auth.uid())
    and status = 'active'
  limit 1
$$;

create or replace function app_private.current_role()
returns text
language sql
security definer
set search_path = public, auth
stable
as $$
  select role
  from public.app_users
  where id = (select auth.uid())
    and status = 'active'
  limit 1
$$;

create or replace function app_private.current_branch_id()
returns uuid
language sql
security definer
set search_path = public, auth
stable
as $$
  select branch_id
  from public.app_users
  where id = (select auth.uid())
    and status = 'active'
  limit 1
$$;

create or replace function app_private.is_admin()
returns boolean
language sql
security definer
set search_path = public, auth
stable
as $$
  select coalesce(app_private.current_role() = 'admin', false)
$$;

create or replace function app_private.is_payroll()
returns boolean
language sql
security definer
set search_path = public, auth
stable
as $$
  select coalesce(app_private.current_role() in ('admin', 'payroll'), false)
$$;

create or replace function app_private.can_access_branch(target_branch_id uuid)
returns boolean
language sql
security definer
set search_path = public, auth
stable
as $$
  select app_private.is_admin()
    or target_branch_id = app_private.current_branch_id()
$$;

revoke all on schema app_private from public;
grant usage on schema app_private to authenticated;
revoke all on all functions in schema app_private from public;
grant execute on all functions in schema app_private to authenticated;

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
alter table payroll_cash_advance_applications enable row level security;

grant usage on schema public to authenticated;
grant select, insert, update, delete on
  tenants, branches, app_users, parties, materials, price_history, transactions,
  stock_movements, destinations, deliveries, delivery_lines, daily_capitals,
  cash_movements, employees, attendance_records, cash_advances, payroll_runs,
  payroll_cash_advance_applications
to authenticated;

create policy tenants_select on tenants for select to authenticated
  using (id = app_private.current_tenant_id());
create policy tenants_update_admin on tenants for update to authenticated
  using (id = app_private.current_tenant_id() and app_private.is_admin())
  with check (id = app_private.current_tenant_id() and app_private.is_admin());

create policy branches_select on branches for select to authenticated
  using (tenant_id = app_private.current_tenant_id());
create policy branches_insert_admin on branches for insert to authenticated
  with check (tenant_id = app_private.current_tenant_id() and app_private.is_admin());
create policy branches_update_admin on branches for update to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_admin())
  with check (tenant_id = app_private.current_tenant_id() and app_private.is_admin());
create policy branches_delete_admin on branches for delete to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_admin());

create policy app_users_select on app_users for select to authenticated
  using (tenant_id = app_private.current_tenant_id());
create policy app_users_insert_admin on app_users for insert to authenticated
  with check (tenant_id = app_private.current_tenant_id() and app_private.is_admin());
create policy app_users_update_admin on app_users for update to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_admin())
  with check (tenant_id = app_private.current_tenant_id() and app_private.is_admin());
create policy app_users_delete_admin on app_users for delete to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_admin());

create policy parties_select on parties for select to authenticated
  using (tenant_id = app_private.current_tenant_id());
create policy parties_insert on parties for insert to authenticated
  with check (tenant_id = app_private.current_tenant_id());
create policy parties_update_admin on parties for update to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_admin())
  with check (tenant_id = app_private.current_tenant_id() and app_private.is_admin());
create policy parties_delete_admin on parties for delete to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_admin());

create policy materials_select on materials for select to authenticated
  using (tenant_id = app_private.current_tenant_id());
create policy materials_insert on materials for insert to authenticated
  with check (tenant_id = app_private.current_tenant_id());
create policy materials_update_admin on materials for update to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_admin())
  with check (tenant_id = app_private.current_tenant_id() and app_private.is_admin());
create policy materials_delete_admin on materials for delete to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_admin());

create policy price_history_select on price_history for select to authenticated
  using (tenant_id = app_private.current_tenant_id());
create policy price_history_insert on price_history for insert to authenticated
  with check (tenant_id = app_private.current_tenant_id());

create policy destinations_select on destinations for select to authenticated
  using (tenant_id = app_private.current_tenant_id());
create policy destinations_insert on destinations for insert to authenticated
  with check (tenant_id = app_private.current_tenant_id());
create policy destinations_update_admin on destinations for update to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_admin())
  with check (tenant_id = app_private.current_tenant_id() and app_private.is_admin());
create policy destinations_delete_admin on destinations for delete to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_admin());

create policy transactions_select on transactions for select to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(branch_id));
create policy transactions_insert on transactions for insert to authenticated
  with check (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(branch_id));
create policy transactions_update on transactions for update to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(branch_id))
  with check (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(branch_id));
create policy transactions_delete on transactions for delete to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(branch_id));

create policy stock_movements_select on stock_movements for select to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(branch_id));
create policy stock_movements_insert on stock_movements for insert to authenticated
  with check (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(branch_id));
create policy stock_movements_update on stock_movements for update to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(branch_id))
  with check (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(branch_id));
create policy stock_movements_delete on stock_movements for delete to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(branch_id));

create policy deliveries_select on deliveries for select to authenticated
  using (tenant_id = app_private.current_tenant_id()
    and (app_private.can_access_branch(source_branch_id) or app_private.can_access_branch(destination_branch_id)));
create policy deliveries_insert on deliveries for insert to authenticated
  with check (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(source_branch_id));
create policy deliveries_update on deliveries for update to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(source_branch_id))
  with check (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(source_branch_id));
create policy deliveries_delete on deliveries for delete to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(source_branch_id));

create policy delivery_lines_select on delivery_lines for select to authenticated
  using (tenant_id = app_private.current_tenant_id()
    and exists (
      select 1 from deliveries d
      where d.id = delivery_id
        and d.tenant_id = delivery_lines.tenant_id
        and (app_private.can_access_branch(d.source_branch_id) or app_private.can_access_branch(d.destination_branch_id))
    ));
create policy delivery_lines_insert on delivery_lines for insert to authenticated
  with check (tenant_id = app_private.current_tenant_id()
    and exists (
      select 1 from deliveries d
      where d.id = delivery_id
        and d.tenant_id = delivery_lines.tenant_id
        and app_private.can_access_branch(d.source_branch_id)
    ));
create policy delivery_lines_update on delivery_lines for update to authenticated
  using (tenant_id = app_private.current_tenant_id()
    and exists (
      select 1 from deliveries d
      where d.id = delivery_id
        and d.tenant_id = delivery_lines.tenant_id
        and app_private.can_access_branch(d.source_branch_id)
    ))
  with check (tenant_id = app_private.current_tenant_id()
    and exists (
      select 1 from deliveries d
      where d.id = delivery_id
        and d.tenant_id = delivery_lines.tenant_id
        and app_private.can_access_branch(d.source_branch_id)
    ));
create policy delivery_lines_delete on delivery_lines for delete to authenticated
  using (tenant_id = app_private.current_tenant_id()
    and exists (
      select 1 from deliveries d
      where d.id = delivery_id
        and d.tenant_id = delivery_lines.tenant_id
        and app_private.can_access_branch(d.source_branch_id)
    ));

create policy daily_capitals_all on daily_capitals for all to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(branch_id))
  with check (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(branch_id));
create policy cash_movements_all on cash_movements for all to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(branch_id))
  with check (tenant_id = app_private.current_tenant_id() and app_private.can_access_branch(branch_id));

create policy employees_select on employees for select to authenticated
  using (tenant_id = app_private.current_tenant_id()
    and (app_private.is_payroll() or app_private.can_access_branch(branch_id)));
create policy employees_insert_payroll on employees for insert to authenticated
  with check (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());
create policy employees_update_payroll on employees for update to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_payroll())
  with check (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());
create policy employees_delete_payroll on employees for delete to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());

create policy attendance_records_select on attendance_records for select to authenticated
  using (tenant_id = app_private.current_tenant_id()
    and (app_private.is_payroll() or app_private.can_access_branch(branch_id)));
create policy attendance_records_insert_payroll on attendance_records for insert to authenticated
  with check (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());
create policy attendance_records_update_payroll on attendance_records for update to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_payroll())
  with check (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());
create policy attendance_records_delete_payroll on attendance_records for delete to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());

create policy cash_advances_select_payroll on cash_advances for select to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());
create policy cash_advances_insert_payroll on cash_advances for insert to authenticated
  with check (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());
create policy cash_advances_update_payroll on cash_advances for update to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_payroll())
  with check (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());
create policy cash_advances_delete_payroll on cash_advances for delete to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());

create policy payroll_runs_select_payroll on payroll_runs for select to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());
create policy payroll_runs_insert_payroll on payroll_runs for insert to authenticated
  with check (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());
create policy payroll_runs_update_payroll on payroll_runs for update to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_payroll())
  with check (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());
create policy payroll_runs_delete_payroll on payroll_runs for delete to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());

create policy payroll_cash_advance_applications_select_payroll on payroll_cash_advance_applications for select to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());
create policy payroll_cash_advance_applications_insert_payroll on payroll_cash_advance_applications for insert to authenticated
  with check (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());
create policy payroll_cash_advance_applications_update_payroll on payroll_cash_advance_applications for update to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_payroll())
  with check (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());
create policy payroll_cash_advance_applications_delete_payroll on payroll_cash_advance_applications for delete to authenticated
  using (tenant_id = app_private.current_tenant_id() and app_private.is_payroll());

-- Initial setup seed data.
-- Before running live login, create these Supabase Auth users from the Dashboard
-- or a trusted server script using auth.admin.createUser:
--
--   admin@junkshop.local   / admin123     / Admin User
--   staff@junkshop.local   / staff123     / Main Staff
--   payroll@junkshop.local / payroll123   / Payroll Staff
--
-- This SQL keeps only the default users as app profiles when the matching Auth
-- accounts exist. Passwords are intentionally not stored in public.app_users.

insert into tenants (id, name, slug, status)
values ('00000000-0000-4000-8000-000000000001', 'Jetplan Trading', 'jetplan-trading', 'active')
on conflict (slug) do update
  set name = excluded.name,
      status = excluded.status;

with tenant_row as (
  select id from tenants where slug = 'jetplan-trading'
),
auth_profiles as (
  select lower(email) as email, id
  from auth.users
  where lower(email) in ('admin@junkshop.local', 'staff@junkshop.local', 'payroll@junkshop.local')
)
insert into app_users (id, tenant_id, branch_id, name, email, role, status)
select auth_profiles.id,
       tenant_row.id,
       null,
       profile_seed.name,
       profile_seed.email,
       profile_seed.role,
       'active'
from tenant_row
join (
  values
    ('admin@junkshop.local', 'Admin User', 'admin'),
    ('staff@junkshop.local', 'Main Staff', 'staff'),
    ('payroll@junkshop.local', 'Payroll Staff', 'payroll')
) as profile_seed(email, name, role) on true
join auth_profiles on auth_profiles.email = profile_seed.email
on conflict (id) do update
  set tenant_id = excluded.tenant_id,
      branch_id = excluded.branch_id,
      name = excluded.name,
      email = excluded.email,
      role = excluded.role,
      status = excluded.status;

-- If the app_users insert affects 0 rows, create the Auth users first, then
-- rerun this initial setup section.
