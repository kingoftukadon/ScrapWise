# Jetplan Trading

Turn every kilo into clear business insight.

This is a local browser MVP for a junkshop operation. It includes demo authentication, role-based screens, transactions, inventory movements, truck deliveries, payroll, reports, CSV export, and admin-only income/profit reporting.

## Run

Open `index.html` in a browser. The current static build stores edits in `localStorage` until the Supabase database connection is wired in.

Local test logins:

- Admin: `admin@junkshop.local` / `admin123`
- Staff: `staff@junkshop.local` / `staff123`
- Payroll staff: `payroll@junkshop.local` / `payroll123`

## Included Files

- `index.html` - app entry point
- `styles.css` - responsive operational UI
- `app.js` - static single-page app logic and sample data
- `schema.sql` - Supabase production database baseline with tenant tables, constraints, indexes, grants, and Row Level Security policies

## Database Finalization

`schema.sql` is ready as the production database baseline for Supabase. It includes:

- tenant/company isolation on every business table
- branch-aware access for staff records
- admin-only maintenance for users, branches, and protected master data
- payroll/admin access for employees, attendance, cash advances, and payroll
- required receipt numbers and positive transaction weights at the database level
- delivery status values that match the app: `pending`, `in_transit`, `completed`, `cancelled`
- explicit `authenticated` grants for Supabase Data API projects where new tables are not auto-exposed
- RLS enabled on every public table
- fresh initial setup that keeps only the Jetplan Trading tenant and default users

For the default users, create these accounts in Supabase Authentication first:

- `admin@junkshop.local` / `admin123`
- `staff@junkshop.local` / `staff123`
- `payroll@junkshop.local` / `payroll123`

Then run `schema.sql` in Supabase SQL Editor. The initial setup section will create matching `app_users` rows for those Auth users under the default tenant. No branches, materials, customers/suppliers, transactions, inventory, deliveries, employees, cash records, or payroll records are seeded. If you run the SQL before creating the Auth users, create the Auth users and rerun the initial setup section at the bottom of `schema.sql`.

Never place the Supabase secret/service-role key in `app.js` or any browser code.

## Notes

The local login is for MVP demonstration only. For production, move authentication to Supabase Auth or a server-side auth flow, store password hashes only, and enforce role restrictions with Row Level Security.

Domain and hosting make the app reachable online, but they do not automatically
replace the browser `localStorage` data. For production, create a PostgreSQL
database using `schema.sql`, connect the app through a secure backend or
Supabase client, then migrate the current read/write functions in `app.js` from
`localStorage` to database calls.
