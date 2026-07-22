# ScrapWise

Turn every kilo into clear business insight.

This is a local browser MVP for a multi-branch junkshop operation. It includes demo authentication, role-based screens, transactions, inventory movements, truck deliveries, payroll, reports, CSV export, and admin-only income/profit reporting.

## Run

Open `index.html` in a browser. The app stores demo edits in `localStorage`.

Demo logins:

- Admin: `admin@junkshop.local` / `admin123`
- Branch staff: `staff@junkshop.local` / `staff123`
- Payroll staff: `payroll@junkshop.local` / `payroll123`

## Included Files

- `index.html` - app entry point
- `styles.css` - responsive operational UI
- `app.js` - static single-page app logic and sample data
- `schema.sql` - PostgreSQL/Supabase-ready MVP database schema

## Notes

The local login is for MVP demonstration only. For production, move authentication to Supabase Auth or a server-side auth flow, store password hashes only, and enforce branch and role restrictions with Row Level Security.
