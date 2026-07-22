create table branches (
  id uuid primary key default gen_random_uuid(),
  branch_name text not null,
  branch_code text not null unique,
  address text,
  contact_number text,
  status text not null check (status in ('active', 'inactive')),
  created_at timestamptz not null default now()
);

create table users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  password_hash text not null,
  role text not null check (role in ('admin', 'staff', 'payroll')),
  assigned_branch_id uuid references branches(id),
  status text not null check (status in ('active', 'inactive')),
  created_at timestamptz not null default now()
);

create table customers_suppliers (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('customer', 'supplier')),
  name text not null,
  contact_number text,
  address text,
  notes text,
  status text not null check (status in ('active', 'inactive')),
  created_at timestamptz not null default now()
);

create table scrap_materials (
  id uuid primary key default gen_random_uuid(),
  material_name text not null,
  category text,
  buying_price_per_kilo numeric(12, 2) not null default 0,
  selling_price_per_kilo numeric(12, 2) not null default 0,
  unit_of_measure text not null default 'kilo',
  status text not null check (status in ('active', 'inactive')),
  created_at timestamptz not null default now()
);

create table scrap_price_history (
  id uuid primary key default gen_random_uuid(),
  scrap_material_id uuid not null references scrap_materials(id),
  buying_price_per_kilo numeric(12, 2) not null,
  selling_price_per_kilo numeric(12, 2) not null,
  changed_by uuid references users(id),
  changed_at timestamptz not null default now()
);

create table transactions (
  id uuid primary key default gen_random_uuid(),
  transaction_number text not null unique,
  transaction_date date not null,
  branch_id uuid not null references branches(id),
  transaction_type text not null check (transaction_type in ('purchase', 'sale')),
  customer_supplier_id uuid references customers_suppliers(id),
  payment_status text not null check (payment_status in ('paid', 'unpaid', 'partial')),
  amount_paid numeric(12, 2) not null default 0,
  balance numeric(12, 2) not null default 0,
  notes text,
  created_by uuid references users(id),
  created_at timestamptz not null default now()
);

create table transaction_lines (
  id uuid primary key default gen_random_uuid(),
  transaction_id uuid not null references transactions(id) on delete cascade,
  scrap_material_id uuid not null references scrap_materials(id),
  weight_kilos numeric(12, 2) not null check (weight_kilos > 0),
  price_per_kilo numeric(12, 2) not null,
  total_amount numeric(12, 2) generated always as (weight_kilos * price_per_kilo) stored
);

create table stock_movements (
  id uuid primary key default gen_random_uuid(),
  movement_date date not null,
  branch_id uuid not null references branches(id),
  scrap_material_id uuid not null references scrap_materials(id),
  movement_type text not null check (movement_type in ('purchase_in', 'sale_out', 'delivery_out', 'delivery_in', 'manual_adjustment')),
  quantity_kilos numeric(12, 2) not null,
  reference_type text,
  reference_id uuid,
  notes text,
  created_by uuid references users(id),
  created_at timestamptz not null default now()
);

create table deliveries (
  id uuid primary key default gen_random_uuid(),
  delivery_number text not null unique,
  delivery_date date not null,
  source_branch_id uuid not null references branches(id),
  destination_branch_id uuid references branches(id),
  destination_name text,
  truck_plate_number text,
  driver_name text,
  status text not null check (status in ('pending', 'in_transit', 'completed', 'cancelled')),
  notes text,
  created_at timestamptz not null default now()
);

create table delivery_lines (
  id uuid primary key default gen_random_uuid(),
  delivery_id uuid not null references deliveries(id) on delete cascade,
  scrap_material_id uuid not null references scrap_materials(id),
  loaded_weight_kilos numeric(12, 2) not null default 0,
  delivered_weight_kilos numeric(12, 2) not null default 0
);

create table employees (
  id uuid primary key default gen_random_uuid(),
  employee_name text not null,
  branch_id uuid references branches(id),
  position text,
  salary_type text not null check (salary_type in ('daily', 'monthly')),
  rate_amount numeric(12, 2) not null default 0,
  status text not null check (status in ('active', 'inactive')),
  created_at timestamptz not null default now()
);

create table cash_advances (
  id uuid primary key default gen_random_uuid(),
  employee_id uuid not null references employees(id),
  advance_date date not null,
  amount numeric(12, 2) not null,
  reason text,
  balance numeric(12, 2) not null,
  status text not null check (status in ('active', 'fully_deducted', 'cancelled')),
  created_at timestamptz not null default now()
);

create table payroll_runs (
  id uuid primary key default gen_random_uuid(),
  payroll_period text not null,
  status text not null check (status in ('draft', 'approved', 'paid')),
  created_by uuid references users(id),
  created_at timestamptz not null default now()
);

create table payroll_lines (
  id uuid primary key default gen_random_uuid(),
  payroll_run_id uuid not null references payroll_runs(id) on delete cascade,
  employee_id uuid not null references employees(id),
  basic_pay numeric(12, 2) not null default 0,
  benefits numeric(12, 2) not null default 0,
  deductions numeric(12, 2) not null default 0,
  cash_advance_deduction numeric(12, 2) not null default 0,
  net_pay numeric(12, 2) generated always as (basic_pay + benefits - deductions - cash_advance_deduction) stored
);

create index idx_transactions_branch_date on transactions(branch_id, transaction_date);
create index idx_stock_movements_branch_material on stock_movements(branch_id, scrap_material_id);
create index idx_deliveries_source_date on deliveries(source_branch_id, delivery_date);
create index idx_payroll_lines_employee on payroll_lines(employee_id);
