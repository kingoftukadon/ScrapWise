const STORAGE_KEY = "junkshop-mvp-state-v1";

const roles = {
  admin: "Admin",
  staff: "Staff",
  payroll: "Payroll/Admin Staff",
};

const translations = {
  fil: {
    "ScrapWise": "ScrapWise",
    "Turn every kilo into clear business insight.": "Gawing malinaw na business insight ang bawat kilo.",
    "Dashboard": "Dashboard",
    "Attendance": "Attendance",
    "Review Attendance": "Review Attendance",
    "Transactions": "Transaksyon",
    "Cash Operation": "Cash Operation",
    "Inventory": "Imbentaryo",
    "Deliveries": "Delivery",
    "Customers/Suppliers": "Customer/Supplier",
    "Materials/Prices": "Materyales/Presyo",
    "Employee Maintenance": "Employee Maintenance",
    "Payroll": "Payroll",
    "Reports": "Reports",
    "Users": "Users",
    "Log out": "Mag-log out",
    "Reset demo data": "I-reset ang demo data",
    "Good day": "Magandang araw",
    "Here is today's operations summary": "Narito ang buod ng operasyon ngayong araw",
    "Operational summary for branches, stock, payments, deliveries, and fast-moving materials.": "Buod ng operasyon para sa branch, stock, bayad, delivery, at mabilis maubos na materyales.",
    "Clock in or clock out with a photo shot for attendance proof.": "Mag-clock in o clock out gamit ang litrato bilang attendance proof.",
    "Current list of employees who are on duty.": "Listahan ng mga empleyadong kasalukuyang naka-duty.",
    "Record purchases and sales. Use Edit transaction on any saved row to update a previous transaction.": "Mag-record ng purchases at sales. Gamitin ang Edit transaction para baguhin ang dating transaksyon.",
    "Current stock is calculated from all stock movement records.": "Ang kasalukuyang stock ay kinukuha mula sa lahat ng stock movement records.",
    "Searchable master list for transaction history.": "Searchable master list para sa transaction history.",
    "Admin-managed buying and selling prices. Transactions keep the price used at the time.": "Admin ang namamahala ng buying at selling prices. Naka-save sa transaction ang ginamit na presyo.",
    "Maintain employee payroll details, government numbers, benefits, start date, and years of service.": "I-maintain ang employee payroll details, government numbers, benefits, start date, at years of service.",
    "Manage employees, cash advances, and payroll net pay calculations.": "I-manage ang employees, cash advances, at payroll net pay calculations.",
    "Filter by date and branch, export operational reports, and restrict income reports to admin users.": "I-filter ayon sa date at branch, mag-export ng reports, at admin lang ang income reports.",
    "Total purchases today": "Purchases ngayong araw",
    "Total sales today": "Sales ngayong araw",
    "Current inventory value": "Halaga ng inventory",
    "Pending payments": "Pending na bayad",
    "Deliveries in progress": "Delivery na kasalukuyan",
    "Payroll summary": "Payroll summary",
    "Income summary": "Income summary",
    "Fast-moving scrap materials": "Mabilis gumalaw na scrap",
    "Capital for today": "Capital ngayong araw",
    "Opening cash": "Opening cash",
    "Close cash": "Close cash",
    "Expected cash": "Expected cash",
    "Cash variance": "Cash variance",
    "Cash spent on purchases": "Cash na ginastos sa purchases",
    "Cash received from sales": "Cash na natanggap sa sales",
    "Remaining operating cash": "Natitirang operating cash",
    "Initial amount": "Initial amount",
    "Action": "Aksyon",
    "Date": "Petsa",
    "Branch": "Branch",
    "Name": "Pangalan",
    "Email": "Email",
    "Email or username": "Email o username",
    "Password": "Password",
    "Role": "Role",
    "Status": "Status",
    "Active": "Active",
    "Inactive": "Inactive",
    "Customer": "Customer",
    "Supplier": "Supplier",
    "Type": "Uri",
    "Contact": "Contact",
    "Contact number": "Contact number",
    "Address": "Address",
    "Notes": "Notes",
    "Material": "Materyal",
    "Category": "Category",
    "Buy": "Buy",
    "Sell": "Sell",
    "Unit": "Unit",
    "Weight": "Timbang",
    "Total": "Total",
    "Paid": "Bayad",
    "Balance": "Balanse",
    "Payment": "Bayad",
    "Purchase": "Purchase",
    "Sale": "Sale",
    "Paid": "Paid",
    "Unpaid": "Unpaid",
    "Partial": "Partial",
    "Employee": "Employee",
    "Employee name": "Pangalan ng employee",
    "Position": "Position",
    "Salary Type": "Salary Type",
    "Rate": "Rate",
    "SSS No.": "SSS No.",
    "Pag-IBIG Number": "Pag-IBIG Number",
    "Other Benefits": "Iba pang Benefits",
    "Start Date": "Start Date",
    "Years of Service": "Years of Service",
    "Clock In": "Clock In",
    "Clock Out": "Clock Out",
    "Photo": "Litrato",
    "Source": "Source",
    "Destination": "Destination",
    "Truck": "Truck",
    "Driver": "Driver",
    "Loaded": "Loaded",
    "Delivered": "Delivered",
    "Current Stock": "Kasalukuyang Stock",
    "Estimated Value": "Tinatayang Halaga",
    "Material name": "Pangalan ng materyal",
    "Buying price/kilo": "Buying price/kilo",
    "Selling price/kilo": "Selling price/kilo",
    "Save material": "I-save ang materyal",
    "Save changes": "I-save ang pagbabago",
    "Save user": "I-save ang user",
    "Save": "I-save",
    "Edit": "I-edit",
    "Delete": "I-delete",
    "Edit transaction": "I-edit ang transaksyon",
    "Download Excel": "Download Excel",
    "Export CSV": "Export CSV",
  },
};

const navIcons = {
  dashboard: "grid",
  attendance: "camera",
  reviewAttendance: "clipboard",
  cashOperation: "wallet",
  transactions: "plus",
  inventory: "boxes",
  deliveries: "truck",
  parties: "users",
  materials: "tag",
  branches: "building",
  employees: "users",
  payroll: "wallet",
  reports: "chart",
  users: "userCog",
};

function t(key) {
  return state?.language === "fil" ? translations.fil[key] || key : key;
}

function icon(name) {
  const paths = {
    grid: `<rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect>`,
    camera: `<path d="M14.5 4l1.4 2H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4.1l1.4-2z"></path><circle cx="12" cy="13" r="3.5"></circle>`,
    clipboard: `<path d="M9 4h6l1 2h3v15H5V6h3z"></path><path d="M9 11h6"></path><path d="M9 15h4"></path>`,
    plus: `<circle cx="12" cy="12" r="9"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path>`,
    boxes: `<path d="M3 8l9-5 9 5-9 5z"></path><path d="M3 8v8l9 5 9-5V8"></path><path d="M12 13v8"></path>`,
    truck: `<path d="M3 6h11v10H3z"></path><path d="M14 10h4l3 3v3h-7z"></path><circle cx="7" cy="18" r="2"></circle><circle cx="17" cy="18" r="2"></circle>`,
    users: `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>`,
    tag: `<path d="M20 13l-7 7-10-10V3h7z"></path><circle cx="7.5" cy="7.5" r="1.5"></circle>`,
    building: `<path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16"></path><path d="M9 21v-5h3v5"></path><path d="M8 7h1"></path><path d="M12 7h1"></path><path d="M8 11h1"></path><path d="M12 11h1"></path>`,
    wallet: `<path d="M3 7h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="M3 7V6a2 2 0 0 1 2-2h12"></path><path d="M17 13h.01"></path>`,
    chart: `<path d="M4 19V5"></path><path d="M4 19h16"></path><path d="M8 16v-5"></path><path d="M12 16V8"></path><path d="M16 16v-3"></path>`,
    userCog: `<circle cx="9" cy="7" r="4"></circle><path d="M2 21v-2a4 4 0 0 1 4-4h4"></path><circle cx="18" cy="18" r="3"></circle><path d="M18 13v2"></path><path d="M18 21v2"></path><path d="M13 18h2"></path><path d="M21 18h2"></path>`,
    logout: `<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><path d="M16 17l5-5-5-5"></path><path d="M21 12H9"></path>`,
  };
  return `<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.grid}</svg>`;
}

const seedState = {
  sessionUserId: null,
  activeView: "dashboard",
  language: "en",
  reportFilters: { from: "", to: "", branchId: "all" },
  editingTransactionId: null,
  editingPartyId: null,
  editingDeliveryId: null,
  editingMaterialId: null,
  editingUserId: null,
  editingEmployeeId: null,
  editingPayrollId: null,
  repeatTransactionPartyId: "",
  repeatDeliveryId: "",
  attendanceRecords: [],
  dailyCapitals: [
    { id: "cap1", date: today(), branchId: "b1", amount: 10000, notes: "Opening capital for today", createdBy: "u1" },
  ],
  branches: [
    { id: "b1", name: "Main Yard", code: "MAIN", address: "National Road", contact: "0917 100 0001", status: "active" },
    { id: "b2", name: "North Branch", code: "NORTH", address: "North Market", contact: "0917 100 0002", status: "active" },
  ],
  users: [
    { id: "u1", name: "Admin User", email: "admin@junkshop.local", password: "admin123", role: "admin", branchId: "b1", status: "active" },
    { id: "u2", name: "Main Staff", email: "staff@junkshop.local", password: "staff123", role: "staff", branchId: "b1", status: "active" },
    { id: "u3", name: "Payroll Staff", email: "payroll@junkshop.local", password: "payroll123", role: "payroll", branchId: "b1", status: "active" },
  ],
  parties: [
    { id: "p1", type: "supplier", name: "Mang Jun Scrap", contact: "0918 200 0011", address: "Poblacion", notes: "Regular seller", status: "active" },
    { id: "p2", type: "customer", name: "Metro Recycling Buyer", contact: "0918 200 0012", address: "Industrial Zone", notes: "Bulk buyer", status: "active" },
  ],
  materials: [
    { id: "m1", name: "Plastic", category: "Light scrap", buyPrice: 8, sellPrice: 12, unit: "kilo", status: "active" },
    { id: "m2", name: "Copper", category: "Metal", buyPrice: 320, sellPrice: 370, unit: "kilo", status: "active" },
    { id: "m3", name: "Carton", category: "Paper", buyPrice: 5, sellPrice: 7, unit: "kilo", status: "active" },
    { id: "m4", name: "Iron", category: "Metal", buyPrice: 12, sellPrice: 17, unit: "kilo", status: "active" },
  ],
  priceHistory: [],
  transactions: [
    { id: "t1", number: "TRX-0001", date: today(), branchId: "b1", type: "purchase", partyId: "p1", materialId: "m1", weight: 120, price: 8, total: 960, paymentStatus: "paid", paid: 960, balance: 0, notes: "Morning intake", createdBy: "u2" },
    { id: "t2", number: "TRX-0002", date: today(), branchId: "b1", type: "sale", partyId: "p2", materialId: "m1", weight: 55, price: 12, total: 660, paymentStatus: "partial", paid: 400, balance: 260, notes: "Buyer pickup", createdBy: "u2" },
    { id: "t3", number: "TRX-0003", date: today(), branchId: "b2", type: "purchase", partyId: "p1", materialId: "m2", weight: 18, price: 320, total: 5760, paymentStatus: "unpaid", paid: 0, balance: 5760, notes: "For sorting", createdBy: "u1" },
  ],
  stockMovements: [
    { id: "s1", date: today(), branchId: "b1", materialId: "m1", type: "purchase_in", quantity: 120, reference: "TRX-0001", notes: "Auto from purchase", createdBy: "u2" },
    { id: "s2", date: today(), branchId: "b1", materialId: "m1", type: "sale_out", quantity: -55, reference: "TRX-0002", notes: "Auto from sale", createdBy: "u2" },
    { id: "s3", date: today(), branchId: "b2", materialId: "m2", type: "purchase_in", quantity: 18, reference: "TRX-0003", notes: "Auto from purchase", createdBy: "u1" },
    { id: "s4", date: today(), branchId: "b1", materialId: "m1", type: "delivery_out", quantity: -20, reference: "DLV-0001", notes: "Auto from delivery", createdBy: "u2" },
    { id: "s5", date: today(), branchId: "b1", materialId: "m3", type: "manual_adjustment", quantity: 40, reference: "OPENING", notes: "Opening stock", createdBy: "u1" },
    { id: "s6", date: today(), branchId: "b1", materialId: "m3", type: "delivery_out", quantity: -12, reference: "DLV-0001", notes: "Auto from delivery", createdBy: "u2" },
  ],
  deliveries: [
    { id: "d1", number: "DLV-0001", date: today(), sourceBranchId: "b1", destinationBranchId: "b2", destinationName: "", truck: "ABC 1234", driver: "R. Santos", status: "in_transit", notes: "Branch transfer", lines: [{ materialId: "m1", loadedWeight: 20, deliveredWeight: 0 }, { materialId: "m3", loadedWeight: 12, deliveredWeight: 0 }] },
  ],
  employees: [
    { id: "e1", name: "Pedro Reyes", branchId: "b1", position: "Sorter", salaryType: "daily", rate: 550, sssNo: "34-1234567-8", pagibigNo: "1212-3456-7890", benefits: "Rice allowance, meal allowance", startDate: "2023-03-15", status: "active" },
    { id: "e2", name: "Ana Cruz", branchId: "b2", position: "Cashier", salaryType: "monthly", rate: 18000, sssNo: "34-7654321-0", pagibigNo: "9876-5432-1011", benefits: "SSS, PhilHealth, Pag-IBIG", startDate: "2021-08-01", status: "active" },
  ],
  cashAdvances: [
    { id: "ca1", employeeId: "e1", date: today(), amount: 1000, reason: "Emergency", balance: 600, status: "active" },
  ],
  payrollRuns: [
    { id: "pr1", period: "2026-07-01 to 2026-07-15", employeeId: "e1", basicPay: 6600, benefits: 300, deductions: 200, cashAdvanceDeduction: 400, netPay: 6300, status: "approved" },
  ],
};

let state = loadState();

function today() {
  return new Date().toISOString().slice(0, 10);
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(seedState);
  const parsed = JSON.parse(saved);
  return {
    ...structuredClone(seedState),
    ...parsed,
    reportFilters: { ...seedState.reportFilters, ...(parsed.reportFilters || {}) },
    language: parsed.language || "en",
    attendanceRecords: parsed.attendanceRecords || [],
    dailyCapitals: parsed.dailyCapitals || [],
    employees: (parsed.employees || seedState.employees).map((employee) => ({
      sssNo: "",
      pagibigNo: "",
      benefits: "",
      startDate: "",
      ...employee,
    })),
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function id(prefix) {
  return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}

function money(value) {
  return `PHP ${Number(value || 0).toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function kg(value) {
  return `${Number(value || 0).toLocaleString("en-PH", { maximumFractionDigits: 2 })} kg`;
}

function currentUser() {
  return state.users.find((user) => user.id === state.sessionUserId) || null;
}

function isAdmin() {
  return currentUser()?.role === "admin";
}

function isPayroll() {
  return ["admin", "payroll"].includes(currentUser()?.role);
}

function visibleBranches() {
  const user = currentUser();
  const branchId = defaultBranchId();
  return state.branches.filter((branch) => branch.id === branchId || (!branchId && branch.status === "active")).slice(0, 1);
}

function defaultBranchId() {
  const user = currentUser();
  return user?.branchId || state.branches.find((branch) => branch.status === "active")?.id || state.branches[0]?.id || "";
}

function branchName(branchId) {
  return state.branches.find((branch) => branch.id === branchId)?.name || "Unknown branch";
}

function materialName(materialId) {
  return state.materials.find((material) => material.id === materialId)?.name || "Unknown material";
}

function partyName(partyId) {
  return state.parties.find((party) => party.id === partyId)?.name || "Walk-in";
}

function stockFor(branchId, materialId) {
  return state.stockMovements
    .filter((movement) => movement.branchId === branchId && movement.materialId === materialId)
    .reduce((total, movement) => total + Number(movement.quantity || 0), 0);
}

function branchFilter(records, field = "branchId") {
  const branchId = defaultBranchId();
  return records.filter((record) => record[field] === branchId);
}

function render() {
  const user = currentUser();
  document.getElementById("app").innerHTML = user ? shell(user) : loginView();
  bindEvents();
}

function loginView() {
  return `
    <section class="login-page">
      <div class="landing-shell">
        <section class="landing-copy">
          <div class="landing-brand"><span class="brand-logo hero-logo">SW</span><span>ScrapWise</span></div>
          <h1>Turn every kilo into clear business insight.</h1>
          <p>Manage buying, selling, inventory, deliveries, attendance, payroll, and reports from one clean green operations hub.</p>
          <div class="landing-actions">
            <a href="#login" class="btn hero-btn">Open operations</a>
            <span>Built for focused junkshop operations</span>
          </div>
          <div class="hero-metrics">
            ${metric("Stock", "Live")}
            ${metric("Receipt", "Ready")}
            ${metric("Attendance", "Photo")}
          </div>
        </section>
        <form class="login-panel" id="login" data-action="login">
          <h2>Sign in</h2>
          <p>Use a demo account to enter the ScrapWise workspace.</p>
          <label>Email or username<input name="email" value="admin@junkshop.local" autocomplete="username" required></label>
          <label>Password<input name="password" type="password" value="admin123" autocomplete="current-password" required></label>
          <button class="btn" type="submit">Log in</button>
          <div class="demo-logins">
            <button type="button" data-demo="admin@junkshop.local">Admin</button>
            <button type="button" data-demo="staff@junkshop.local">Staff</button>
            <button type="button" data-demo="payroll@junkshop.local">Payroll</button>
          </div>
        </form>
      </div>
    </section>
  `;
}

function shell(user) {
  const views = [
    ["dashboard", "Dashboard"],
    ["attendance", "Attendance"],
    ["reviewAttendance", "Review Attendance"],
    ["cashOperation", "Cash Operation"],
    ["transactions", "Transactions"],
    ["inventory", "Inventory"],
    ["deliveries", "Deliveries"],
    ["parties", "Customers/Suppliers"],
    ["materials", "Materials/Prices"],
    ["employees", "Employee Maintenance"],
    ["payroll", "Payroll"],
    ["reports", "Reports"],
    ["users", "Users"],
  ].filter(([view]) => {
    if (["users", "materials"].includes(view)) return isAdmin();
    if (["payroll", "employees"].includes(view)) return isPayroll();
    return true;
  });

  return `
    <section class="shell">
      <aside class="sidebar">
        <div class="brand">
          <span class="brand-logo">JS</span>
          <span><strong>${t("ScrapWise")}</strong><small>${t("Turn every kilo into clear business insight.")}</small></span>
        </div>
        <nav class="nav">
          ${views.map(([view, label]) => `<button data-view="${view}" class="${state.activeView === view ? "active" : ""}">${icon(navIcons[view])}<span>${t(label)}</span></button>`).join("")}
        </nav>
        <div class="sidebar-footer">
          <div class="language-row">
            <span>${state.language === "fil" ? "Wika" : "Language"}</span>
            <div class="language-toggle">
              <button class="${state.language === "en" ? "active" : ""}" data-language="en">EN</button>
              <button class="${state.language === "fil" ? "active" : ""}" data-language="fil">FIL</button>
            </div>
          </div>
          <div class="user-box">
            <span class="avatar">${user.name.slice(0, 1).toUpperCase()}</span>
            <span><strong>${user.name}</strong><small>${roles[user.role]}</small></span>
          </div>
          <button class="logout" data-action="logout">${icon("logout")}<span>${t("Log out")}</span></button>
        </div>
      </aside>
      <section class="content">${viewContent()}</section>
    </section>
  `;
}

function viewContent() {
  const viewMap = {
    dashboard: dashboardView,
    attendance: attendanceView,
    reviewAttendance: reviewAttendanceView,
    cashOperation: cashOperationView,
    transactions: transactionsView,
    inventory: inventoryView,
    deliveries: deliveriesView,
    parties: partiesView,
    materials: materialsView,
    employees: employeesView,
    payroll: payrollView,
    reports: reportsView,
    users: usersView,
  };
  return (viewMap[state.activeView] || dashboardView)();
}

function page(title, subtitle, body) {
  return `
    <div class="topbar">
      <div><h2>${state.activeView === "dashboard" ? `${t("Good day")}, ${currentUser().name}!` : t(title)}</h2><p>${state.activeView === "dashboard" ? t("Here is today's operations summary") : t(subtitle)}</p></div>
      <button class="btn secondary" data-action="reset-demo">${t("Reset demo data")}</button>
    </div>
    ${body}
  `;
}

function dashboardView() {
  const transactions = branchFilter(state.transactions);
  const todayTransactions = transactions.filter((tx) => tx.date === today());
  const purchases = todayTransactions.filter((tx) => tx.type === "purchase").reduce((sum, tx) => sum + tx.total, 0);
  const sales = todayTransactions.filter((tx) => tx.type === "sale").reduce((sum, tx) => sum + tx.total, 0);
  const pending = transactions.reduce((sum, tx) => sum + tx.balance, 0);
  const inventoryValue = visibleBranches().reduce((sum, branch) => {
    return sum + state.materials.reduce((inner, material) => inner + stockFor(branch.id, material.id) * material.sellPrice, 0);
  }, 0);
  const activeDeliveries = state.deliveries.filter((delivery) => delivery.status === "in_transit").length;
  const payroll = state.payrollRuns.reduce((sum, run) => sum + run.netPay, 0);
  const dashboardCash = cashPosition(currentCapitalBranchId());
  const profit = transactions.reduce((sum, tx) => {
    const material = state.materials.find((item) => item.id === tx.materialId);
    if (tx.type !== "sale" || !material) return sum;
    return sum + tx.weight * (tx.price - material.buyPrice);
  }, 0);

  return page("Dashboard", "Operational summary for stock, payments, deliveries, and fast-moving materials.", `
    <section class="grid cards">
      ${metric("Total purchases today", money(purchases))}
      ${metric("Total sales today", money(sales))}
      ${metric("Current inventory value", money(inventoryValue))}
      ${metric("Pending payments", money(pending))}
      ${metric("Remaining operating cash", money(dashboardCash.remaining))}
      ${metric("Deliveries in progress", activeDeliveries)}
      ${metric("Payroll summary", money(payroll))}
      ${isAdmin() ? metric("Income summary", money(profit)) : ""}
    </section>
    <section class="split" style="margin-top:14px">
      <div class="panel">
        <div class="panel-head"><h3>Fast-moving scrap materials</h3></div>
        ${barChart(materialMovement())}
      </div>
      <div class="panel">
        <div class="panel-head"><h3>Current stock</h3></div>
        ${stockTable()}
      </div>
    </section>
  `);
}

function metric(label, value) {
  return `<div class="card"><span class="label">${t(label)}</span><span class="value">${value}</span></div>`;
}

function materialMovement() {
  return state.materials.map((material) => {
    const total = branchFilter(state.transactions)
      .filter((tx) => tx.materialId === material.id)
      .reduce((sum, tx) => sum + tx.weight, 0);
    return { label: material.name, value: total };
  }).sort((a, b) => b.value - a.value);
}

function barChart(rows) {
  const max = Math.max(...rows.map((row) => row.value), 1);
  return `<div class="bars">${rows.map((row) => `
    <div class="bar-row">
      <strong>${row.label}</strong>
      <div class="bar"><span style="width:${Math.max(4, (row.value / max) * 100)}%"></span></div>
      <span class="num">${kg(row.value)}</span>
    </div>
  `).join("")}</div>`;
}

function stockTable() {
  const rows = [];
  visibleBranches().forEach((branch) => {
    state.materials.forEach((material) => {
      const currentStock = stockFor(branch.id, material.id);
      rows.push(`<tr><td>${material.name}</td><td class="num">${kg(currentStock)}</td><td class="amount">${money(currentStock * material.sellPrice)}</td><td>${branch.name}</td></tr>`);
    });
  });
  return table(["Material", "Current Stock", "Estimated Value", "Location"], rows);
}

function capitalFor(branchId, date = today()) {
  return state.dailyCapitals
    .filter((capital) => capital.branchId === branchId && capital.date === date)
    .reduce((sum, capital) => sum + Number(capital.openingCash ?? capital.amount ?? 0), 0);
}

function cashPosition(branchId, date = today()) {
  const transactions = state.transactions.filter((tx) => tx.branchId === branchId && tx.date === date);
  const cashRecord = cashOperationRecord(branchId, date);
  const capital = capitalFor(branchId, date);
  const cashSpent = transactions.filter((tx) => tx.type === "purchase").reduce((sum, tx) => sum + Number(tx.paid || 0), 0);
  const cashReceived = transactions.filter((tx) => tx.type === "sale").reduce((sum, tx) => sum + Number(tx.paid || 0), 0);
  const expectedCash = capital - cashSpent + cashReceived;
  const closeCash = cashRecord?.closeCash === "" || cashRecord?.closeCash == null ? null : Number(cashRecord.closeCash);
  return {
    capital,
    cashSpent,
    cashReceived,
    remaining: expectedCash,
    expectedCash,
    closeCash,
    variance: closeCash == null ? null : closeCash - expectedCash,
    record: cashRecord,
  };
}

function currentCapitalBranchId() {
  return defaultBranchId();
}

function cashOperationRecord(branchId, date = today()) {
  return state.dailyCapitals.find((capital) => capital.branchId === branchId && capital.date === date) || null;
}

function attendanceView() {
  const user = currentUser();
  const openRecord = activeAttendanceRecords().find((record) => record.userId === user.id);
  const action = openRecord ? "clock-out" : "clock-in";
  return page("Attendance", "Clock in or clock out with a photo shot for attendance proof.", `
    <section class="split">
      <form class="panel" data-action="${action}">
        <div class="panel-head"><h3>${openRecord ? "Clock out" : "Clock in"}</h3></div>
        <div class="grid cards">
          ${metric("User", user.name)}
          ${metric("Operation", "Today")}
          ${metric("Status", openRecord ? "On duty" : "Off duty")}
          ${openRecord ? metric("Clock in time", timeLabel(openRecord.clockInAt)) : ""}
        </div>
        <div class="camera-box">
          <video id="attendance-camera" autoplay playsinline></video>
          <canvas id="attendance-canvas" width="360" height="270" class="hidden"></canvas>
          <img id="attendance-preview" alt="Captured attendance photo" class="attendance-photo hidden">
        </div>
        <input type="hidden" name="photo" id="attendance-photo">
        ${openRecord ? `<input type="hidden" name="recordId" value="${openRecord.id}">` : ""}
        <div class="toolbar">
          <button class="btn secondary" type="button" data-action="start-camera">Start camera</button>
          <button class="btn secondary" type="button" data-action="capture-photo">Capture photo</button>
          <label class="file-capture">Photo shot<input type="file" accept="image/*" capture="user" data-photo-file></label>
          <button class="btn" type="submit">${openRecord ? "Clock out" : "Clock in"}</button>
        </div>
      </form>
      <div class="panel">
        <div class="panel-head"><h3>My attendance today</h3></div>
        ${attendanceTable(state.attendanceRecords.filter((record) => record.userId === user.id && record.date === today()))}
      </div>
    </section>
  `);
}

function cashOperationView() {
  const branchId = currentCapitalBranchId();
  const record = cashOperationRecord(branchId);
  const position = cashPosition(branchId);
  const openingStarted = position.capital > 0 || Boolean(record);
  const txRows = state.transactions
    .filter((tx) => tx.branchId === branchId && tx.date === today())
    .slice()
    .reverse()
    .map((tx) => `
      <tr><td>${tx.number}</td><td>${badge(tx.type)}</td><td>${partyName(tx.partyId)}</td><td>${materialName(tx.materialId)}</td><td class="amount">${money(tx.total)}</td><td class="amount">${money(tx.paid)}</td></tr>
    `);
  return page("Cash Operation", "Input opening cash before starting operations, close cash at end of day, and tally sales and expenses.", `
    <section class="grid">
      <section class="cash-shift">
        ${startingAmountForm(record, branchId)}
        ${closeOperationForm(record, branchId, position, openingStarted)}
      </section>
      <div class="panel">
        <div class="panel-head"><h3>Today transaction tally</h3></div>
        ${table(["No.", "Type", "Name", "Material", "Total", "Cash Paid"], txRows)}
      </div>
    </section>
  `);
}

function startingAmountForm(record, branchId) {
  const openingCash = record?.openingCash ?? record?.amount ?? "";
  return `
    <form class="panel shift-card starting-card" data-action="save-cash-operation">
      <div class="panel-head"><h3>Starting amount</h3><span class="shift-status">${record ? "Opened" : "Before operation"}</span></div>
      <p class="shift-copy">Specify cash amount at the beginning of operation.</p>
      <input type="hidden" name="date" value="${record?.date || today()}">
      ${branchSelect("branchId", "Branch", false, record?.branchId || branchId)}
      <input type="hidden" name="closeCash" value="${record?.closeCash ?? ""}">
      <label>Amount<input class="cash-amount-input" name="openingCash" type="number" value="${openingCash}" step="0.01" min="0" required></label>
      <label style="margin-top:10px">Notes<textarea name="notes" placeholder="Opening fund notes">${record?.notes || ""}</textarea></label>
      <button class="btn shift-action" type="submit">${record ? "Update starting amount" : "Open operation"}</button>
    </form>
  `;
}

function closeOperationForm(record, branchId, position, openingStarted) {
  return `
    <form class="panel shift-card" data-action="save-cash-operation">
      <div class="panel-head">
        <h3>Close operation</h3>
        <button class="btn secondary" type="button" data-print-cash-operation="${branchId}">Print receipt</button>
      </div>
      <input type="hidden" name="date" value="${record?.date || today()}">
      ${branchSelect("branchId", "Branch", false, record?.branchId || branchId)}
      <input type="hidden" name="openingCash" value="${record?.openingCash ?? record?.amount ?? 0}">
      <label>Close cash<input class="cash-amount-input" name="closeCash" type="number" value="${record?.closeCash ?? ""}" step="0.01" min="0" ${openingStarted ? "" : "disabled"}></label>
      <input type="hidden" name="notes" value="${escapeHtml(record?.notes || "")}">
      <div class="cash-lines">
        ${cashSummaryRows(position)}
      </div>
      <button class="btn shift-action" type="submit" ${openingStarted ? "" : "disabled"}>Close operation</button>
      ${openingStarted ? "" : `<div class="notice" style="margin-top:12px">Enter the starting amount first before closing the operation.</div>`}
    </form>
  `;
}

function cashSummaryRows(position) {
  return [
    ["Shift beginning", timeLabel(new Date().toISOString())],
    ["Starting cash", money(position.capital)],
    ["Cash payments", money(position.cashReceived)],
    ["Cash purchases", money(position.cashSpent)],
    ["Paid in", money(0)],
    ["Paid out", money(position.cashSpent)],
    ["Expected amount of cash", money(position.expectedCash), true],
    ["Ending balance", position.closeCash == null ? "Not closed" : money(position.closeCash), true],
    ["Variance", position.variance == null ? "Not closed" : money(position.variance)],
  ].map(([label, value, strong]) => `<div class="cash-line ${strong ? "strong" : ""}"><span>${label}</span><strong>${value}</strong></div>`).join("");
}

function reviewAttendanceView() {
  const records = activeAttendanceRecords().filter((record) => record.branchId === defaultBranchId());
  return page("Review Attendance", "Current list of employees who are on duty.", `
    <section class="panel">
      <div class="panel-head"><h3>On duty now</h3></div>
      ${attendanceTable(records)}
    </section>
  `);
}

function attendanceTable(records) {
  return table(["Employee", "Clock In", "Clock Out", "Status", "Photo"], records.slice().reverse().map((record) => `
    <tr><td>${record.userName}</td><td>${timeLabel(record.clockInAt)}</td><td>${record.clockOutAt ? timeLabel(record.clockOutAt) : ""}</td><td>${badge(record.clockOutAt ? "completed" : "active")}</td><td>${record.clockInPhoto ? `<img class="thumb" src="${record.clockOutPhoto || record.clockInPhoto}" alt="Attendance photo">` : ""}</td></tr>
  `));
}

function activeAttendanceRecords() {
  return state.attendanceRecords.filter((record) => !record.clockOutAt);
}

function timeLabel(value) {
  return value ? new Date(value).toLocaleString("en-PH", { dateStyle: "medium", timeStyle: "short" }) : "";
}

function printReceipt(transactionId) {
  const tx = state.transactions.find((item) => item.id === transactionId);
  if (!tx) return;
  printTransactionReceipt([tx], tx.number);
}

function printCustomerReceipt(partyId) {
  const transactions = branchFilter(state.transactions).filter((tx) => tx.partyId === partyId);
  if (!transactions.length) return;
  printTransactionReceipt(transactions, `CUSTOMER-${partyId}`);
}

function operatorName(userId) {
  return state.users.find((user) => user.id === userId)?.name || currentUser()?.name || "Unknown";
}

function printTransactionReceipt(transactions, receiptNumber) {
  const receiptWindow = window.open("", "_blank", "width=420,height=720");
  if (!receiptWindow) {
    alert("Please allow pop-ups to print the receipt.");
    return;
  }
  receiptWindow.document.write(receiptHtml(transactions, receiptNumber));
  receiptWindow.document.close();
  receiptWindow.focus();
}

function receiptHtml(transactions, receiptNumber = null) {
  const rows = Array.isArray(transactions) ? transactions : [transactions];
  const tx = rows[0];
  const branch = state.branches.find((item) => item.id === tx.branchId);
  const cashier = state.users.find((user) => user.id === tx.createdBy) || currentUser();
  const transactionType = rows.every((item) => item.type === tx.type) ? (tx.type === "purchase" ? "Purchase" : "Sale") : "Mixed";
  const total = rows.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const paid = rows.reduce((sum, item) => sum + Number(item.paid || 0), 0);
  const balance = rows.reduce((sum, item) => sum + Number(item.balance || 0), 0);
  const paymentStatus = balance <= 0 ? "paid" : paid <= 0 ? "unpaid" : "partial";
  const number = receiptNumber || tx.number;
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Receipt ${number}</title>
        <style>
          * { box-sizing: border-box; }
          body { margin: 0; background: #f3f4f6; color: #111827; font-family: Arial, sans-serif; }
          .receipt { width: 320px; margin: 18px auto; padding: 18px; background: #fff; border: 1px solid #d1d5db; }
          .center { text-align: center; }
          h1 { margin: 0; font-size: 24px; }
          .tagline { margin: 3px 0 12px; font-size: 11px; color: #4b5563; }
          .muted { color: #4b5563; font-size: 12px; }
          .line { border-top: 1px dashed #9ca3af; margin: 12px 0; }
          .row { display: flex; justify-content: space-between; gap: 12px; margin: 7px 0; font-size: 13px; }
          .row strong:last-child, .amount { text-align: right; }
          table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 13px; }
          th, td { padding: 6px 0; border-bottom: 1px solid #e5e7eb; text-align: left; }
          th:last-child, td:last-child { text-align: right; }
          .total { font-size: 16px; font-weight: 800; }
          .barcode { display: flex; justify-content: center; align-items: end; gap: 2px; height: 58px; margin-top: 12px; }
          .barcode span { display: block; height: 48px; background: #111827; }
          .code { margin-top: 6px; letter-spacing: 2px; font-size: 12px; }
          .receipt-actions { width: 320px; margin: 18px auto 0; display: flex; gap: 8px; }
          .receipt-actions button { flex: 1; min-height: 42px; border: 0; border-radius: 6px; font-size: 14px; font-weight: 800; cursor: pointer; }
          .print-btn { background: #1f73b7; color: #fff; }
          .close-btn { background: #e5e7eb; color: #111827; }
          @media print {
            body { background: #fff; }
            .receipt { width: 72mm; margin: 0; border: 0; }
            .receipt-actions { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="receipt-actions">
          <button class="print-btn" onclick="window.print()">Print receipt</button>
          <button class="close-btn" onclick="window.close()">Close</button>
        </div>
        <section class="receipt">
          <div class="center">
            <h1>ScrapWise</h1>
            <div class="tagline">Turn every kilo into clear business insight.</div>
            <div class="muted">${escapeHtml(branch?.name || "Unknown branch")}</div>
            <div class="muted">${escapeHtml(branch?.address || "")}</div>
            <div class="muted">${escapeHtml(branch?.contact || "")}</div>
          </div>
          <div class="line"></div>
          <div class="row"><span>Receipt No.</span><strong>${escapeHtml(number)}</strong></div>
          <div class="row"><span>Date</span><strong>${escapeHtml(tx.date)}</strong></div>
          <div class="row"><span>Cashier</span><strong>${escapeHtml(cashier?.name || "Unknown")}</strong></div>
          <div class="row"><span>Branch</span><strong>${escapeHtml(branch?.name || "Unknown")}</strong></div>
          <div class="row"><span>Type</span><strong>${transactionType}</strong></div>
          <div class="row"><span>Name</span><strong>${escapeHtml(partyName(tx.partyId))}</strong></div>
          <div class="line"></div>
          <table>
            <thead><tr><th>Material</th><th>Kg</th><th>Price</th><th>Total</th></tr></thead>
            <tbody>
              ${rows.map((item) => `
                <tr>
                  <td>${escapeHtml(materialName(item.materialId))}</td>
                  <td>${Number(item.weight).toLocaleString("en-PH", { maximumFractionDigits: 2 })}</td>
                  <td>${money(item.price)}</td>
                  <td>${money(item.total)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
          <div class="line"></div>
          <div class="row total"><span>Total</span><strong>${money(total)}</strong></div>
          <div class="row"><span>Amount paid</span><strong>${money(paid)}</strong></div>
          <div class="row"><span>Balance</span><strong>${money(balance)}</strong></div>
          <div class="row"><span>Payment status</span><strong>${escapeHtml(paymentStatus)}</strong></div>
          ${tx.notes ? `<div class="line"></div><div class="muted">Notes: ${escapeHtml(tx.notes)}</div>` : ""}
          <div class="line"></div>
          ${barcode(number)}
          <div class="center muted" style="margin-top:12px">Thank you.</div>
        </section>
      </body>
    </html>
  `;
}

function printCashOperation(branchId) {
  const receiptWindow = window.open("", "_blank", "width=460,height=760");
  if (!receiptWindow) {
    alert("Please allow pop-ups to print the cash operation receipt.");
    return;
  }
  receiptWindow.document.write(cashOperationReceiptHtml(branchId, today()));
  receiptWindow.document.close();
  receiptWindow.focus();
}

function printDelivery(deliveryId) {
  const delivery = state.deliveries.find((item) => item.id === deliveryId);
  if (!delivery) return;
  const receiptWindow = window.open("", "_blank", "width=460,height=760");
  if (!receiptWindow) {
    alert("Please allow pop-ups to print the delivery record.");
    return;
  }
  receiptWindow.document.write(deliveryReceiptHtml(delivery));
  receiptWindow.document.close();
  receiptWindow.focus();
}

function deliveryReceiptHtml(delivery) {
  const branch = state.branches.find((item) => item.id === delivery.sourceBranchId);
  const operator = operatorName(delivery.createdBy || delivery.updatedBy);
  const lines = deliveryLines(delivery);
  const loadedTotal = lines.reduce((sum, line) => sum + Number(line.loadedWeight || 0), 0);
  const deliveredTotal = lines.reduce((sum, line) => sum + Number(line.deliveredWeight || 0), 0);
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Delivery ${delivery.number}</title>
        <style>
          * { box-sizing: border-box; }
          body { margin: 0; background: #f3f4f6; color: #111827; font-family: Arial, sans-serif; }
          .receipt { width: 360px; margin: 18px auto; padding: 18px; background: #fff; border: 1px solid #d1d5db; }
          .center { text-align: center; }
          h1 { margin: 0; font-size: 24px; }
          .tagline { margin: 3px 0 12px; font-size: 11px; color: #4b5563; }
          .muted { color: #4b5563; font-size: 12px; }
          .line { border-top: 1px dashed #9ca3af; margin: 12px 0; }
          .row { display: flex; justify-content: space-between; gap: 12px; margin: 7px 0; font-size: 13px; }
          .row strong:last-child, .amount { text-align: right; }
          table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 13px; }
          th, td { padding: 6px 0; border-bottom: 1px solid #e5e7eb; text-align: left; }
          th:last-child, td:last-child { text-align: right; }
          .total { font-size: 16px; font-weight: 800; }
          .barcode { display: flex; justify-content: center; align-items: end; gap: 2px; height: 58px; margin-top: 12px; }
          .barcode span { display: block; height: 48px; background: #111827; }
          .code { margin-top: 6px; letter-spacing: 2px; font-size: 12px; }
          .receipt-actions { width: 360px; margin: 18px auto 0; display: flex; gap: 8px; }
          .receipt-actions button { flex: 1; min-height: 42px; border: 0; border-radius: 6px; font-size: 14px; font-weight: 800; cursor: pointer; }
          .print-btn { background: #16834f; color: #fff; }
          .close-btn { background: #e5e7eb; color: #111827; }
          @media print {
            body { background: #fff; }
            .receipt { width: 76mm; margin: 0; border: 0; }
            .receipt-actions { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="receipt-actions">
          <button class="print-btn" onclick="window.print()">Print delivery</button>
          <button class="close-btn" onclick="window.close()">Close</button>
        </div>
        <section class="receipt">
          <div class="center">
            <h1>ScrapWise</h1>
            <div class="tagline">Turn every kilo into clear business insight.</div>
            <div class="muted">${escapeHtml(branch?.name || "Main operation")}</div>
          </div>
          <div class="line"></div>
          <div class="row"><span>Delivery No.</span><strong>${escapeHtml(delivery.number)}</strong></div>
          <div class="row"><span>Date</span><strong>${escapeHtml(delivery.date)}</strong></div>
          <div class="row"><span>Operator</span><strong>${escapeHtml(operator)}</strong></div>
          <div class="row"><span>Truck plate</span><strong>${escapeHtml(delivery.truck)}</strong></div>
          <div class="row"><span>Driver</span><strong>${escapeHtml(delivery.driver)}</strong></div>
          <div class="row"><span>Destination</span><strong>${escapeHtml(delivery.destinationName || "External")}</strong></div>
          <div class="row"><span>Status</span><strong>${escapeHtml(delivery.status)}</strong></div>
          <div class="line"></div>
          <table>
            <thead><tr><th>Material</th><th>Loaded</th><th>Delivered</th></tr></thead>
            <tbody>
              ${lines.map((line) => `
                <tr><td>${escapeHtml(materialName(line.materialId))}</td><td>${kg(line.loadedWeight)}</td><td>${kg(line.deliveredWeight)}</td></tr>
              `).join("")}
            </tbody>
          </table>
          <div class="line"></div>
          <div class="row total"><span>Total loaded</span><strong>${kg(loadedTotal)}</strong></div>
          <div class="row"><span>Total delivered</span><strong>${kg(deliveredTotal)}</strong></div>
          ${delivery.notes ? `<div class="line"></div><div class="muted">Notes: ${escapeHtml(delivery.notes)}</div>` : ""}
          <div class="line"></div>
          ${barcode(delivery.number)}
        </section>
      </body>
    </html>
  `;
}

function printPayroll(payrollId) {
  const run = state.payrollRuns.find((item) => item.id === payrollId);
  if (!run) return;
  const receiptWindow = window.open("", "_blank", "width=760,height=840");
  if (!receiptWindow) {
    alert("Please allow pop-ups to print the payslip.");
    return;
  }
  receiptWindow.document.write(payrollReceiptHtml(run));
  receiptWindow.document.close();
  receiptWindow.focus();
}

function payrollReceiptHtml(run) {
  const employee = state.employees.find((item) => item.id === run.employeeId) || {};
  const totals = payrollTotals(run);
  const incomeRows = [
    ["Bi-monthly Salary", "", run.basicPay],
    ["Adjustment", "", run.adjustment],
    ["Night Differential", run.nightDiffHours, run.nightDiffAmount],
    ["Regular Overtime", run.overtimeHours, run.overtimeAmount],
    ["Rest Day", run.restDayHours, run.restDayAmount],
    ["Special Holiday", run.specialHolidayHours, run.specialHolidayAmount],
    ["Regular Holiday", run.regularHolidayHours, run.regularHolidayAmount],
    ["Taxable Allowance", "", run.taxableAllowance],
    ["Incentives", "", run.incentives],
    ["Commission", "", run.commission],
    ["Transpo Allowance", "", run.transpoAllowance],
    ["Clothing Allowance", "", run.clothingAllowance],
    ["Meal Allowance", "", run.mealAllowance],
    ["NTA", "", run.nta],
    ["Bonus", "", run.bonus],
  ].filter((row) => Number(row[2] || 0) !== 0 || Number(row[1] || 0) !== 0);
  const deductionRows = [
    ["Late (mins)", run.lateMins, run.lateDeduction],
    ["Absent (days)", run.absentDays, run.absentDeduction],
    ["HMO", "", run.hmo],
    ["SSS", "", run.sss],
    ["SSS MPF", "", run.sssMpf],
    ["PhilHealth", "", run.philHealth],
    ["HDMF", "", run.hdmf],
    ["SSS Salary Loan", "", run.sssSalaryLoan],
    ["SSS Calamity Loan", "", run.sssCalamityLoan],
    ["HDMF MPL", "", run.hdmfMpl],
    ["HDMF Calamity Loan", "", run.hdmfCalamityLoan],
    ["Company Loan", "", run.companyLoan],
    ["Tax Withheld/Refund", "", run.tax],
    ["Cash Advance", "", run.cashAdvanceDeduction],
  ].filter((row) => Number(row[2] || 0) !== 0 || Number(row[1] || 0) !== 0);
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Payslip ${employee.name || ""} ${run.period}</title>
        <style>
          * { box-sizing: border-box; }
          body { margin: 0; background: #f3f4f6; color: #111827; font-family: Arial, sans-serif; }
          .payslip { width: 720px; margin: 18px auto; background: #fff; border: 2px solid #111827; }
          .head { display: grid; grid-template-columns: 1fr auto; gap: 12px; padding: 12px 14px; border-bottom: 1px solid #111827; }
          h1, h2 { margin: 0; }
          h1 { font-size: 22px; }
          h2 { font-size: 30px; letter-spacing: .04em; }
          .muted { font-size: 12px; color: #374151; }
          .meta { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 28px; padding: 10px 14px; font-size: 13px; }
          .row { display: flex; justify-content: space-between; gap: 12px; }
          .grid2 { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid #111827; }
          .section:first-child { border-right: 1px solid #111827; }
          .section-title { background: #d9d9d9; text-align: center; font-weight: 800; padding: 4px; border-bottom: 1px solid #111827; }
          table { width: 100%; border-collapse: collapse; font-size: 13px; }
          th, td { padding: 4px 6px; text-align: left; }
          th { font-style: italic; font-weight: 500; }
          td.amount, th.amount { text-align: right; }
          .footer { display: grid; grid-template-columns: 1fr 1fr; border-top: 2px solid #111827; font-weight: 900; }
          .footer div { padding: 6px; border-right: 1px solid #111827; text-align: center; }
          .footer div:last-child { border-right: 0; }
          .receipt-actions { width: 720px; margin: 18px auto 0; display: flex; gap: 8px; }
          .receipt-actions button { flex: 1; min-height: 42px; border: 0; border-radius: 6px; font-size: 14px; font-weight: 800; cursor: pointer; }
          .print-btn { background: #16834f; color: #fff; }
          .close-btn { background: #e5e7eb; color: #111827; }
          @media print {
            body { background: #fff; }
            .payslip { width: 100%; margin: 0; }
            .receipt-actions { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="receipt-actions">
          <button class="print-btn" onclick="window.print()">Print payslip</button>
          <button class="close-btn" onclick="window.close()">Close</button>
        </div>
        <section class="payslip">
          <div class="head">
            <div>
              <h1>ScrapWise</h1>
              <div class="muted">Turn every kilo into clear business insight.</div>
              <div class="muted">Operator: ${escapeHtml(operatorName(run.createdBy || run.updatedBy))}</div>
            </div>
            <h2>PAYSLIP</h2>
          </div>
          <div class="meta">
            <div class="row"><span>Payroll Period:</span><strong>${escapeHtml(run.period || "")}</strong></div>
            <div class="row"><span>Pay Date:</span><strong>${escapeHtml(run.payDate || "")}</strong></div>
            <div class="row"><span>Employee ID:</span><strong>${escapeHtml(employee.id || "")}</strong></div>
            <div class="row"><span>Department:</span><strong>${escapeHtml(run.department || "")}</strong></div>
            <div class="row"><span>Employee Name:</span><strong>${escapeHtml(employee.name || "")}</strong></div>
            <div class="row"><span>Position:</span><strong>${escapeHtml(employee.position || "")}</strong></div>
            <div class="row"><span>Date Hired:</span><strong>${escapeHtml(employee.startDate || "")}</strong></div>
            <div class="row"><span>Basic Salary:</span><strong>${money(run.monthlySalary)}</strong></div>
          </div>
          <div class="grid2">
            <div class="section">
              <div class="section-title">Income</div>
              <table><thead><tr><th></th><th class="amount">Hours</th><th class="amount">Amount</th></tr></thead><tbody>
                ${incomeRows.map(([label, hours, amount]) => `<tr><td>${escapeHtml(label)}</td><td class="amount">${hours || ""}</td><td class="amount">${money(amount)}</td></tr>`).join("")}
              </tbody></table>
            </div>
            <div class="section">
              <div class="section-title">Deduction</div>
              <table><thead><tr><th></th><th class="amount"></th><th class="amount">Amount</th></tr></thead><tbody>
                ${deductionRows.map(([label, qty, amount]) => `<tr><td>${escapeHtml(label)}</td><td class="amount">${qty || ""}</td><td class="amount">${money(amount)}</td></tr>`).join("")}
              </tbody></table>
            </div>
          </div>
          <div class="footer">
            <div>Total Gross Pay: ${money(totals.grossPay)}</div>
            <div>Total Deduction: ${money(totals.totalDeduction)}</div>
          </div>
          <div class="footer">
            <div>NET PAY:</div>
            <div>${money(totals.netPay)}</div>
          </div>
        </section>
      </body>
    </html>
  `;
}

function cashOperationReceiptHtml(branchId, date) {
  const branch = state.branches.find((item) => item.id === branchId);
  const position = cashPosition(branchId, date);
  const record = cashOperationRecord(branchId, date);
  const cashier = currentUser();
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Cash Operation ${date}</title>
        <style>
          * { box-sizing: border-box; }
          body { margin: 0; background: #f3f4f6; color: #111827; font-family: Arial, sans-serif; }
          .receipt { width: 340px; margin: 18px auto; padding: 18px; background: #fff; border: 1px solid #d1d5db; }
          .center { text-align: center; }
          h1 { margin: 0; font-size: 24px; }
          .tagline { margin: 3px 0 12px; font-size: 11px; color: #4b5563; }
          .muted { color: #4b5563; font-size: 12px; }
          .line { border-top: 1px dashed #9ca3af; margin: 12px 0; }
          .row { display: flex; justify-content: space-between; gap: 12px; margin: 8px 0; font-size: 13px; }
          .row strong:last-child { text-align: right; }
          .total { font-size: 16px; font-weight: 800; }
          .receipt-actions { width: 340px; margin: 18px auto 0; display: flex; gap: 8px; }
          .receipt-actions button { flex: 1; min-height: 42px; border: 0; border-radius: 6px; font-size: 14px; font-weight: 800; cursor: pointer; }
          .print-btn { background: #16834f; color: #fff; }
          .close-btn { background: #e5e7eb; color: #111827; }
          @media print {
            body { background: #fff; }
            .receipt { width: 76mm; margin: 0; border: 0; }
            .receipt-actions { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="receipt-actions">
          <button class="print-btn" onclick="window.print()">Print receipt</button>
          <button class="close-btn" onclick="window.close()">Close</button>
        </div>
        <section class="receipt">
          <div class="center">
            <h1>ScrapWise</h1>
            <div class="tagline">Turn every kilo into clear business insight.</div>
            <div class="muted">${escapeHtml(branch?.name || "Unknown branch")}</div>
            <div class="muted">${escapeHtml(date)}</div>
          </div>
          <div class="line"></div>
          <div class="row"><span>Prepared by</span><strong>${escapeHtml(cashier?.name || "Unknown")}</strong></div>
          <div class="row"><span>Opening cash</span><strong>${money(position.capital)}</strong></div>
          <div class="row"><span>Sales cash received</span><strong>${money(position.cashReceived)}</strong></div>
          <div class="row"><span>Purchase cash expenses</span><strong>${money(position.cashSpent)}</strong></div>
          <div class="line"></div>
          <div class="row total"><span>Expected cash</span><strong>${money(position.expectedCash)}</strong></div>
          <div class="row total"><span>Ending balance</span><strong>${position.closeCash == null ? "Not closed" : money(position.closeCash)}</strong></div>
          <div class="row"><span>Variance</span><strong>${position.variance == null ? "Not closed" : money(position.variance)}</strong></div>
          ${record?.notes ? `<div class="line"></div><div class="muted">Notes: ${escapeHtml(record.notes)}</div>` : ""}
          <div class="line"></div>
          <div class="center muted">Cash operation receipt</div>
        </section>
      </body>
    </html>
  `;
}

function barcode(value) {
  const bars = Array.from(String(value)).flatMap((char) => {
    const code = char.charCodeAt(0);
    return [1 + (code % 3), 1 + ((code >> 2) % 3), 1 + ((code >> 4) % 3)];
  });
  return `<div class="barcode">${bars.map((width) => `<span style="width:${width}px"></span>`).join("")}</div><div class="center code">${escapeHtml(value)}</div>`;
}

function transactionsView() {
  const transactions = branchFilter(state.transactions);
  const editingTransaction = transactions.find((tx) => tx.id === state.editingTransactionId) || null;
  return page("Transactions", "Record purchases and sales. Use Edit transaction on any saved row to update a previous transaction.", `
    <section class="grid">
      ${transactionForm(editingTransaction)}
      <div class="panel">
        <div class="panel-head"><h3>Recent transactions</h3><button class="btn secondary" data-export="transactions">Export CSV</button></div>
        ${customerTransactionGroups(transactions)}
      </div>
    </section>
  `);
}

function transactionForm(tx = null) {
  const action = tx ? "update-transaction" : "add-transaction";
  const selectedPartyId = tx?.partyId || state.repeatTransactionPartyId || "";
  return `
    <form class="panel" data-action="${action}" data-transaction-form>
      <div class="panel-head">
        <h3>${tx ? `Edit ${tx.number}` : "New transaction"}</h3>
        ${tx ? `<button class="btn secondary" type="button" data-action="cancel-transaction-edit">Cancel edit</button>` : ""}
      </div>
      ${tx ? `<input type="hidden" name="id" value="${tx.id}">` : ""}
      <div class="form-grid">
        ${dateInput("date", tx?.date || today())}
        ${branchSelect("branchId", "Branch", false, tx?.branchId)}
        ${select("type", [["purchase", "Purchase"], ["sale", "Sale"]], tx?.type)}
        ${partySelect("partyId", selectedPartyId)}
        ${materialSelect("materialId", tx?.materialId)}
        ${input("weight", "Weight in kilos", "number", tx?.weight ?? "0", "0.01")}
        ${input("price", "Price per kilo", "number", tx?.price ?? "", "0.01")}
        ${select("paymentStatus", [["paid", "Paid"], ["unpaid", "Unpaid"], ["partial", "Partial"]], tx?.paymentStatus)}
        ${input("paid", "Amount paid", "number", tx?.paid ?? "0", "0.01")}
      </div>
      <div class="notice" data-transaction-summary style="margin-top:12px">Total: PHP 0.00 | Balance: PHP 0.00</div>
      <label style="margin-top:10px">Notes<textarea name="notes">${tx?.notes || ""}</textarea></label>
      ${tx ? "" : `<label class="check-row"><input type="checkbox" name="keepSameCustomer" value="yes" ${state.repeatTransactionPartyId ? "checked" : ""}> Process another transaction with the same customer</label>`}
      <button class="btn" type="submit" style="margin-top:12px">${tx ? "Save changes" : "Save transaction"}</button>
    </form>
  `;
}

function customerTransactionGroups(transactions) {
  const groups = transactions.slice().reverse().reduce((items, tx) => {
    if (!items[tx.partyId]) items[tx.partyId] = [];
    items[tx.partyId].push(tx);
    return items;
  }, {});
  const groupHtml = Object.entries(groups).map(([partyId, rows]) => {
    const total = rows.reduce((sum, tx) => sum + Number(tx.total || 0), 0);
    return `
      <section class="customer-group">
        <div class="customer-head">
          <div><h3>${escapeHtml(partyName(partyId))}</h3><small>${rows.length} transaction${rows.length === 1 ? "" : "s"} - ${money(total)}</small></div>
          <button class="btn secondary" data-print-customer-receipt="${partyId}">Print customer receipt</button>
        </div>
        ${table(["Action", "No.", "Date", "Type", "Material", "Weight", "Total", "Paid", "Balance"], rows.map((tx) => `
          <tr class="${state.editingTransactionId === tx.id ? "row-editing" : ""}"><td><button class="btn secondary" data-edit-transaction="${tx.id}">Edit</button></td><td>${tx.number}</td><td>${tx.date}</td><td>${badge(tx.type)}</td><td>${materialName(tx.materialId)}</td><td class="num">${kg(tx.weight)}</td><td class="amount">${money(tx.total)}</td><td class="amount">${money(tx.paid)}</td><td class="amount">${money(tx.balance)}</td></tr>
        `))}
      </section>
    `;
  }).join("");
  return groupHtml || `<div class="notice">No transactions found.</div>`;
}

function inventoryView() {
  const movements = branchFilter(state.stockMovements);
  return page("Inventory", "Current stock is calculated from all stock movement records.", `
    <section class="grid">
      <div class="panel">
        <div class="panel-head"><h3>Stock position</h3><button class="btn secondary" data-export-excel="inventory">Download Excel</button></div>
        ${stockTable()}
      </div>
      <div class="panel">
        <div class="panel-head">
          <h3>Stock movements</h3>
          ${isAdmin() ? `<button class="btn warning" data-modal="adjustment">Manual adjustment</button>` : ""}
        </div>
        ${table(["Date", "Material", "Movement", "Quantity", "Reference", "Truck Plate", "Driver", "Delivery Status", "Notes"], movements.slice().reverse().map((move) => {
          const delivery = deliveryByReference(move.reference);
          return `<tr><td>${move.date}</td><td>${materialName(move.materialId)}</td><td>${badge(move.type)}</td><td class="num">${kg(move.quantity)}</td><td>${move.reference}</td><td>${delivery?.truck || ""}</td><td>${delivery?.driver || ""}</td><td>${delivery ? badge(delivery.status) : ""}</td><td>${move.notes || ""}</td></tr>`;
        }))}
      </div>
      ${isAdmin() ? adjustmentForm() : ""}
    </section>
  `);
}

function deliveryByReference(reference) {
  return state.deliveries.find((delivery) => delivery.number === reference) || null;
}

function adjustmentForm() {
  return `
    <form class="panel hidden" id="adjustment-panel" data-action="add-adjustment">
      <div class="panel-head"><h3>Manual stock adjustment</h3></div>
      <div class="form-grid">
        ${dateInput("date", today())}
        ${branchSelect("branchId")}
        ${materialSelect("materialId")}
        ${input("quantity", "Quantity in kilos (+/-)", "number", "0", "0.01")}
        ${input("notes", "Reason", "text")}
      </div>
      <button class="btn warning" type="submit" style="margin-top:12px">Save adjustment</button>
    </form>
  `;
}

function deliveriesView() {
  const deliveries = state.deliveries.filter((delivery) => isAdmin() || delivery.sourceBranchId === defaultBranchId());
  const editingDelivery = deliveries.find((delivery) => delivery.id === state.editingDeliveryId) || null;
  return page("Deliveries", "Track truck loads, scrap materials, delivery destinations, and completion status.", `
    <section class="grid">
      ${deliveryForm(editingDelivery)}
      <div class="panel">
        <div class="panel-head"><h3>Delivery records</h3><button class="btn secondary" data-export-excel="deliveries">Download Excel</button></div>
        ${deliveryRecordGroups(deliveries)}
      </div>
    </section>
  `);
}

function deliveryRecordGroups(deliveries) {
  const groups = deliveries.slice().reverse().map((delivery) => {
    const lines = deliveryLines(delivery);
    const loadedTotal = lines.reduce((sum, line) => sum + Number(line.loadedWeight || 0), 0);
    const deliveredTotal = lines.reduce((sum, line) => sum + Number(line.deliveredWeight || 0), 0);
    return `
      <section class="customer-group ${state.editingDeliveryId === delivery.id ? "row-editing" : ""}">
        <div class="customer-head">
          <div>
            <h3>${escapeHtml(delivery.number)} - ${escapeHtml(delivery.truck)}</h3>
            <small>${escapeHtml(delivery.date)} - ${escapeHtml(delivery.destinationName || "External")} - ${escapeHtml(delivery.driver)} - Operator: ${escapeHtml(operatorName(delivery.createdBy || delivery.updatedBy))}</small>
          </div>
          <div class="toolbar" style="margin-bottom:0">
            <button class="btn secondary" data-edit-delivery="${delivery.id}">Edit</button>
            <button class="btn secondary" data-print-delivery="${delivery.id}">Print</button>
          </div>
        </div>
        ${table(["Material", "Loaded", "Delivered", "Status"], [
          ...lines.map((line) => `<tr><td>${materialName(line.materialId)}</td><td class="num">${kg(line.loadedWeight)}</td><td class="num">${kg(line.deliveredWeight)}</td><td>${badge(delivery.status)}</td></tr>`),
          `<tr><td><strong>Total</strong></td><td class="num"><strong>${kg(loadedTotal)}</strong></td><td class="num"><strong>${kg(deliveredTotal)}</strong></td><td></td></tr>`,
        ])}
      </section>
    `;
  }).join("");
  return groups || `<div class="notice">No delivery records found.</div>`;
}

function deliveryForm(delivery = null) {
  const action = delivery ? "update-delivery" : "add-delivery";
  const repeatDelivery = !delivery && state.repeatDeliveryId ? state.deliveries.find((item) => item.id === state.repeatDeliveryId) : null;
  const source = delivery || repeatDelivery;
  return `
    <form class="panel" data-action="${action}">
      <div class="panel-head">
        <h3>${delivery ? `Edit ${delivery.number}` : repeatDelivery ? `Add scrap to ${repeatDelivery.number}` : "New delivery"}</h3>
        ${delivery ? `<button class="btn secondary" type="button" data-action="cancel-delivery-edit">Cancel edit</button>` : ""}
      </div>
      ${delivery ? `<input type="hidden" name="id" value="${delivery.id}">` : ""}
      ${repeatDelivery ? `<input type="hidden" name="appendDeliveryId" value="${repeatDelivery.id}">` : ""}
      <div class="form-grid">
        ${dateInput("date", source?.date || today())}
        ${branchSelect("sourceBranchId", "Source branch", false, source?.sourceBranchId)}
        ${branchSelect("destinationBranchId", "Destination", true, "")}
        <label>Destination<input name="destinationName" type="text" value="${source?.destinationName || ""}"></label>
        ${input("truck", "Truck plate number", "text", source?.truck || "")}
        ${input("driver", "Driver name", "text", source?.driver || "")}
        ${select("status", [["pending", "Pending"], ["in_transit", "In transit"], ["completed", "Completed"], ["cancelled", "Cancelled"]], source?.status)}
      </div>
      <div class="panel-head" style="margin-top:14px"><h3>${delivery ? "Truck load scraps" : "Single scrap material"}</h3></div>
      ${deliveryLineInputs(delivery)}
      <label style="margin-top:10px">Notes<textarea name="notes">${source?.notes || ""}</textarea></label>
      ${delivery ? "" : `<label class="check-row"><input type="checkbox" name="keepSameTruck" value="yes" ${repeatDelivery ? "checked" : ""}> Process another scrap material with the same truck</label>`}
      <button class="btn" type="submit" style="margin-top:12px">${delivery ? "Save changes" : repeatDelivery ? "Add scrap load" : "Save delivery"}</button>
    </form>
  `;
}

function deliveryLines(delivery) {
  if (Array.isArray(delivery.lines) && delivery.lines.length) return delivery.lines;
  if (!delivery.materialId) return [];
  return [{ materialId: delivery.materialId, loadedWeight: Number(delivery.loadedWeight || 0), deliveredWeight: Number(delivery.deliveredWeight || 0) }];
}

function deliveryFormLines(data) {
  const lineNumbers = Object.keys(data)
    .map((key) => key.match(/^materialId(\d+)$/)?.[1])
    .filter(Boolean)
    .map(Number)
    .sort((a, b) => a - b);
  return lineNumbers.map((lineNo) => ({
    materialId: data[`materialId${lineNo}`],
    loadedWeight: Number(data[`loadedWeight${lineNo}`] || 0),
    deliveredWeight: Number(data[`deliveredWeight${lineNo}`] || 0),
  })).filter((line) => line.materialId && line.loadedWeight > 0);
}

function deliveryRecordRows() {
  return state.deliveries.flatMap((delivery) => deliveryLines(delivery).map((line) => ({
    deliveryNumber: delivery.number,
    date: delivery.date,
    destination: delivery.destinationName || "External",
    truck: delivery.truck,
    driver: delivery.driver,
    operator: operatorName(delivery.createdBy || delivery.updatedBy),
    material: materialName(line.materialId),
    loadedWeightKg: line.loadedWeight,
    deliveredWeightKg: line.deliveredWeight,
    status: delivery.status,
    notes: delivery.notes || "",
  })));
}

function deliveryLineInputs(delivery = null) {
  const lines = delivery ? deliveryLines(delivery) : [];
  const lineNumbers = delivery ? Array.from({ length: Math.max(lines.length, 1) }, (_, index) => index + 1) : [1];
  return lineNumbers.map((lineNo) => `
    <div class="form-grid" style="margin-bottom:10px">
      ${materialSelect(`materialId${lineNo}`, lines[lineNo - 1]?.materialId || "", lineNo === 1)}
      ${numberInput(`loadedWeight${lineNo}`, `Loaded weight ${lineNo}`, lines[lineNo - 1]?.loadedWeight ?? (lineNo === 1 ? "0" : ""), "0.01", lineNo === 1)}
      ${numberInput(`deliveredWeight${lineNo}`, `Delivered weight ${lineNo}`, lines[lineNo - 1]?.deliveredWeight ?? "", "0.01", false)}
    </div>
  `).join("");
}

function partiesView() {
  const editingParty = state.parties.find((party) => party.id === state.editingPartyId) || null;
  return page("Customers/Suppliers", "Searchable master list for transaction history.", `
    <section class="split">
      ${partyForm(editingParty)}
      <div class="panel">
        <div class="toolbar"><input data-filter="party-search" placeholder="Search by name or contact"></div>
        <div id="party-list">${partyTable(state.parties)}</div>
      </div>
    </section>
  `);
}

function partyForm(party = null) {
  const action = party ? "update-party" : "add-party";
  return `
    <form class="panel" data-action="${action}">
      <div class="panel-head">
        <h3>${party ? `Edit ${party.name}` : "Add record"}</h3>
        ${party ? `<button class="btn secondary" type="button" data-action="cancel-party-edit">Cancel edit</button>` : ""}
      </div>
      ${party ? `<input type="hidden" name="id" value="${party.id}">` : ""}
      <div class="form-grid">
        ${select("type", [["customer", "Customer"], ["supplier", "Supplier"]], party?.type)}
        ${input("name", "Name", "text", party?.name || "")}
        ${input("contact", "Contact number", "text", party?.contact || "")}
        ${select("status", [["active", "Active"], ["inactive", "Inactive"]], party?.status)}
      </div>
      <label style="margin-top:10px">Address<textarea name="address" required>${party?.address || ""}</textarea></label>
      <label style="margin-top:10px">Notes<textarea name="notes">${party?.notes || ""}</textarea></label>
      <button class="btn" type="submit" style="margin-top:12px">${party ? "Save changes" : "Save"}</button>
    </form>
  `;
}

function partyTable(parties) {
  return table(["Action", "Type", "Name", "Contact", "Address", "Notes", "Status"], parties.map((party) => `
    <tr class="${state.editingPartyId === party.id ? "row-editing" : ""}"><td><button class="btn secondary" data-edit-party="${party.id}">Edit</button></td><td>${badge(party.type)}</td><td>${party.name}</td><td>${party.contact}</td><td>${party.address}</td><td>${party.notes || ""}</td><td>${badge(party.status)}</td></tr>
  `));
}

function materialsView() {
  const editingMaterial = state.materials.find((material) => material.id === state.editingMaterialId) || null;
  return page("Materials/Prices", "Admin-managed buying and selling prices. Transactions keep the price used at the time.", `
    <section class="split">
      ${materialForm(editingMaterial)}
      <div class="panel">
        <div class="panel-head"><h3>Material price list</h3></div>
        ${table(["Action", "Material", "Category", "Buy", "Sell", "Unit", "Status"], state.materials.map((material) => `
          <tr class="${state.editingMaterialId === material.id ? "row-editing" : ""}"><td><button class="btn secondary" data-edit-material="${material.id}">Edit</button></td><td>${material.name}</td><td>${material.category}</td><td class="amount">${money(material.buyPrice)}</td><td class="amount">${money(material.sellPrice)}</td><td>${material.unit}</td><td>${badge(material.status)}</td></tr>
        `))}
      </div>
    </section>
  `);
}

function materialForm(material = null) {
  const action = material ? "update-material" : "add-material";
  return `
    <form class="panel" data-action="${action}">
      <div class="panel-head">
        <h3>${material ? `Edit ${material.name}` : "Add material"}</h3>
        ${material ? `<button class="btn secondary" type="button" data-action="cancel-material-edit">Cancel edit</button>` : ""}
      </div>
      ${material ? `<input type="hidden" name="id" value="${material.id}">` : ""}
      <div class="form-grid">
        ${input("name", "Material name", "text", material?.name || "")}
        ${input("category", "Category", "text", material?.category || "")}
        ${input("buyPrice", "Buying price/kilo", "number", material?.buyPrice ?? "0", "0.01")}
        ${input("sellPrice", "Selling price/kilo", "number", material?.sellPrice ?? "0", "0.01")}
        ${input("unit", "Unit", "text", material?.unit || "kilo")}
        ${select("status", [["active", "Active"], ["inactive", "Inactive"]], material?.status)}
      </div>
      <button class="btn" type="submit" style="margin-top:12px">${material ? "Save changes" : "Save material"}</button>
    </form>
  `;
}

function employeesView() {
  const editingEmployee = state.employees.find((employee) => employee.id === state.editingEmployeeId) || null;
  return page("Employee Maintenance", "Maintain employee payroll details, government numbers, benefits, start date, and years of service.", `
    <section class="split">
      ${employeeForm(editingEmployee)}
      <div class="panel">
        <div class="panel-head"><h3>Employee records</h3></div>
        ${employeeMaintenanceTable()}
      </div>
    </section>
  `);
}

function employeeForm(employee = null) {
  const action = employee ? "update-employee" : "add-employee";
  return `
    <form class="panel" data-action="${action}">
      <div class="panel-head">
        <h3>${employee ? `Edit ${employee.name}` : "Add employee"}</h3>
        ${employee ? `<button class="btn secondary" type="button" data-action="cancel-employee-edit">Cancel edit</button>` : ""}
      </div>
      ${employee ? `<input type="hidden" name="id" value="${employee.id}">` : ""}
      <div class="form-grid">
        ${input("name", "Employee name", "text", employee?.name || "")}
        ${branchSelect("branchId", "Branch", false, employee?.branchId)}
        ${input("position", "Position", "text", employee?.position || "")}
        ${select("salaryType", [["daily", "Daily rate"], ["monthly", "Monthly salary"]], employee?.salaryType)}
        ${input("rate", "Rate", "number", employee?.rate ?? "0", "0.01")}
        ${input("sssNo", "SSS No.", "text", employee?.sssNo || "")}
        ${input("pagibigNo", "Pag-IBIG Number", "text", employee?.pagibigNo || "")}
        ${dateInput("startDate", employee?.startDate || today(), "Start Date")}
        ${select("status", [["active", "Active"], ["inactive", "Inactive"]], employee?.status)}
      </div>
      <label style="margin-top:10px">${t("Other Benefits")}<textarea name="benefits">${employee?.benefits || ""}</textarea></label>
      <button class="btn" type="submit" style="margin-top:12px">${employee ? "Save changes" : "Save employee"}</button>
    </form>
  `;
}

function employeeMaintenanceTable() {
  return table(["Action", "Name", "Position", "Salary Type", "Rate", "SSS No.", "Pag-IBIG Number", "Other Benefits", "Start Date", "Years of Service", "Status"], state.employees.map((employee) => `
    <tr class="${state.editingEmployeeId === employee.id ? "row-editing" : ""}"><td><button class="btn secondary" data-edit-employee="${employee.id}">Edit</button> <button class="btn danger" data-delete-employee="${employee.id}">Delete</button></td><td>${employee.name}</td><td>${employee.position}</td><td>${badge(employee.salaryType)}</td><td class="amount">${money(employee.rate)}</td><td>${employee.sssNo || ""}</td><td>${employee.pagibigNo || ""}</td><td>${employee.benefits || ""}</td><td>${employee.startDate || ""}</td><td>${yearsOfService(employee.startDate)}</td><td>${badge(employee.status)}</td></tr>
  `));
}

function payrollView() {
  const editingPayroll = state.payrollRuns.find((run) => run.id === state.editingPayrollId) || null;
  return page("Payroll", "Manage employees, cash advances, and payroll net pay calculations.", `
    <section class="grid">
      ${payrollForm(editingPayroll)}
      <div class="panel">
        <div class="panel-head"><h3>Payroll summary</h3><button class="btn secondary" data-export="payroll">Download all payrolls</button></div>
        ${payrollSummaryTable()}
      </div>
      <div class="split">
        <div class="panel">
          <div class="panel-head"><h3>Employee payroll details</h3><button class="btn secondary" data-view="employees">Maintain employees</button></div>
          ${table(["Name", "Position", "Rate", "SSS No.", "Pag-IBIG Number", "Other Benefits", "Years of Service"], state.employees.map((employee) => `
            <tr><td>${employee.name}</td><td>${employee.position}</td><td class="amount">${money(employee.rate)}</td><td>${employee.sssNo || ""}</td><td>${employee.pagibigNo || ""}</td><td>${employee.benefits || ""}</td><td>${yearsOfService(employee.startDate)}</td></tr>
          `))}
        </div>
        <div class="panel">
          <div class="panel-head"><h3>Cash advances</h3></div>
          ${table(["Employee", "Date", "Amount", "Reason", "Balance", "Status"], state.cashAdvances.map((advance) => `
            <tr><td>${employeeName(advance.employeeId)}</td><td>${advance.date}</td><td class="amount">${money(advance.amount)}</td><td>${advance.reason}</td><td class="amount">${money(advance.balance)}</td><td>${badge(advance.status)}</td></tr>
          `))}
        </div>
      </div>
      <form class="panel" data-action="add-cash-advance">
        <div class="panel-head"><h3>Cash advance</h3></div>
        <div class="form-grid">
          ${employeeSelect("employeeId")}
          ${dateInput("date", today())}
          ${input("amount", "Amount", "number", "0", "0.01")}
          ${input("reason", "Reason", "text")}
          ${input("balance", "Balance", "number", "0", "0.01")}
          ${select("status", [["active", "Active"], ["fully_deducted", "Fully deducted"], ["cancelled", "Cancelled"]])}
        </div>
        <button class="btn" type="submit" style="margin-top:12px">Save cash advance</button>
      </form>
    </section>
  `);
}

function payrollForm(run = null) {
  const action = run ? "update-payroll" : "add-payroll";
  const employee = state.employees.find((item) => item.id === run?.employeeId) || state.employees[0] || {};
  const monthlySalary = run?.monthlySalary ?? (employee.salaryType === "monthly" ? employee.rate : employee.rate * 26) ?? 0;
  return `
    <form class="panel" data-action="${action}" data-payroll-form>
      <div class="panel-head">
        <h3>${run ? `Edit payslip - ${employeeName(run.employeeId)}` : "New payslip"}</h3>
        ${run ? `<button class="btn secondary" type="button" data-action="cancel-payroll-edit">Cancel edit</button>` : ""}
      </div>
      ${run ? `<input type="hidden" name="id" value="${run.id}">` : ""}
      <div class="form-grid">
        ${input("period", "Payroll period", "text", run?.period || "2026-07-16 to 2026-07-31")}
        ${dateInput("payDate", run?.payDate || today(), "Pay date")}
        ${employeeSelect("employeeId", run?.employeeId)}
        ${input("department", "Department", "text", run?.department || "Operations")}
        ${input("monthlySalary", "Basic salary", "number", monthlySalary, "0.01")}
        ${select("status", [["draft", "Draft"], ["approved", "Approved"], ["paid", "Paid"]], run?.status)}
      </div>
      <section class="payslip-grid">
        <div>
          <h3>Income</h3>
          <div class="form-grid">
            ${payrollNumber("basicPay", "Bi-monthly salary", run?.basicPay ?? Number(monthlySalary || 0) / 2)}
            ${payrollNumber("adjustment", "Adjustment", run?.adjustment)}
            ${payrollNumber("nightDiffHours", "Night diff hours", run?.nightDiffHours)}
            ${payrollNumber("nightDiffAmount", "Night diff amount", run?.nightDiffAmount)}
            ${payrollNumber("overtimeHours", "Overtime hours", run?.overtimeHours)}
            ${payrollNumber("overtimeAmount", "Overtime amount", run?.overtimeAmount)}
            ${payrollNumber("restDayHours", "Rest day hours", run?.restDayHours)}
            ${payrollNumber("restDayAmount", "Rest day amount", run?.restDayAmount)}
            ${payrollNumber("specialHolidayHours", "Special holiday hours", run?.specialHolidayHours)}
            ${payrollNumber("specialHolidayAmount", "Special holiday amount", run?.specialHolidayAmount)}
            ${payrollNumber("regularHolidayHours", "Regular holiday hours", run?.regularHolidayHours)}
            ${payrollNumber("regularHolidayAmount", "Regular holiday amount", run?.regularHolidayAmount)}
            ${payrollNumber("taxableAllowance", "Taxable allowance", run?.taxableAllowance)}
            ${payrollNumber("incentives", "Incentives", run?.incentives ?? run?.benefits)}
            ${payrollNumber("commission", "Commission", run?.commission)}
            ${payrollNumber("transpoAllowance", "Transpo allowance", run?.transpoAllowance)}
            ${payrollNumber("clothingAllowance", "Clothing allowance", run?.clothingAllowance)}
            ${payrollNumber("mealAllowance", "Meal allowance", run?.mealAllowance)}
            ${payrollNumber("nta", "NTA", run?.nta)}
            ${payrollNumber("bonus", "Bonus", run?.bonus)}
          </div>
        </div>
        <div>
          <h3>Deductions</h3>
          <div class="form-grid">
            ${payrollNumber("lateMins", "Late mins", run?.lateMins)}
            ${payrollNumber("lateDeduction", "Late deduction", run?.lateDeduction)}
            ${payrollNumber("absentDays", "Absent days", run?.absentDays)}
            ${payrollNumber("absentDeduction", "Absent deduction", run?.absentDeduction)}
            ${payrollNumber("hmo", "HMO", run?.hmo)}
            ${payrollNumber("sss", "SSS", run?.sss)}
            ${payrollNumber("sssMpf", "SSS MPF", run?.sssMpf)}
            ${payrollNumber("philHealth", "PhilHealth", run?.philHealth)}
            ${payrollNumber("hdmf", "HDMF", run?.hdmf)}
            ${payrollNumber("sssSalaryLoan", "SSS salary loan", run?.sssSalaryLoan)}
            ${payrollNumber("sssCalamityLoan", "SSS calamity loan", run?.sssCalamityLoan)}
            ${payrollNumber("hdmfMpl", "HDMF MPL", run?.hdmfMpl)}
            ${payrollNumber("hdmfCalamityLoan", "HDMF calamity loan", run?.hdmfCalamityLoan)}
            ${payrollNumber("companyLoan", "Company loan", run?.companyLoan)}
            ${payrollNumber("tax", "Tax withheld/refund", run?.tax)}
            ${payrollNumber("cashAdvanceDeduction", "Cash advance deduction", run?.cashAdvanceDeduction)}
          </div>
        </div>
      </section>
      <div class="notice payroll-total" data-payroll-summary>Gross Pay: PHP 0.00 | Deductions: PHP 0.00 | Net Pay: PHP 0.00</div>
      <button class="btn" type="submit" style="margin-top:12px">${run ? "Save changes" : "Calculate and save"}</button>
    </form>
  `;
}

function payrollNumber(name, labelText, value = 0) {
  return numberInput(name, labelText, value ?? 0, "0.01", false);
}

function payrollSummaryTable() {
  return table(["Action", "Period", "Pay Date", "Employee", "Gross Pay", "Deductions", "Net Pay", "Status"], state.payrollRuns.map((run) => `
    <tr class="${state.editingPayrollId === run.id ? "row-editing" : ""}"><td><button class="btn secondary" data-edit-payroll="${run.id}">Edit</button> <button class="btn secondary" data-print-payroll="${run.id}">Print payslip</button></td><td>${run.period}</td><td>${run.payDate || ""}</td><td>${employeeName(run.employeeId)}</td><td class="amount">${money(payrollTotals(run).grossPay)}</td><td class="amount">${money(payrollTotals(run).totalDeduction)}</td><td class="amount">${money(payrollTotals(run).netPay)}</td><td>${badge(run.status)}</td></tr>
  `));
}

const payrollIncomeFields = ["basicPay", "adjustment", "nightDiffAmount", "overtimeAmount", "restDayAmount", "specialHolidayAmount", "regularHolidayAmount", "taxableAllowance", "incentives", "commission", "transpoAllowance", "clothingAllowance", "mealAllowance", "nta", "bonus"];
const payrollDeductionFields = ["lateDeduction", "absentDeduction", "hmo", "sss", "sssMpf", "philHealth", "hdmf", "sssSalaryLoan", "sssCalamityLoan", "hdmfMpl", "hdmfCalamityLoan", "companyLoan", "tax", "cashAdvanceDeduction"];

function payrollTotals(run) {
  const legacyBenefits = run?.incentives == null && run?.benefits != null ? Number(run.benefits || 0) : 0;
  const grossPay = payrollIncomeFields.reduce((sum, field) => sum + Number(run?.[field] || 0), 0) + legacyBenefits;
  const legacyDeductions = run?.lateDeduction == null && run?.deductions != null ? Number(run.deductions || 0) : 0;
  const totalDeduction = payrollDeductionFields.reduce((sum, field) => sum + Number(run?.[field] || 0), 0) + legacyDeductions;
  return { grossPay, totalDeduction, netPay: grossPay - totalDeduction };
}

function payrollFormData(data, existing = null) {
  const values = {
    id: existing?.id || id("pr"),
    period: data.period,
    payDate: data.payDate,
    employeeId: data.employeeId,
    department: data.department,
    monthlySalary: Number(data.monthlySalary || 0),
    status: data.status,
    createdBy: existing?.createdBy || currentUser().id,
    updatedBy: currentUser().id,
  };
  [...payrollIncomeFields, ...payrollDeductionFields, "nightDiffHours", "overtimeHours", "restDayHours", "specialHolidayHours", "regularHolidayHours", "lateMins", "absentDays"].forEach((field) => {
    values[field] = Number(data[field] || 0);
  });
  const totals = payrollTotals(values);
  return { ...values, benefits: values.incentives, deductions: totals.totalDeduction - values.cashAdvanceDeduction, grossPay: totals.grossPay, totalDeduction: totals.totalDeduction, netPay: totals.netPay };
}

function payrollExportRows() {
  return state.payrollRuns.map((run) => {
    const employee = state.employees.find((item) => item.id === run.employeeId) || {};
    const totals = payrollTotals(run);
    return {
      period: run.period,
      payDate: run.payDate || "",
      employee: employee.name || "",
      department: run.department || "",
      position: employee.position || "",
      basicSalary: run.monthlySalary || "",
      grossPay: totals.grossPay,
      totalDeduction: totals.totalDeduction,
      netPay: totals.netPay,
      status: run.status,
    };
  });
}

function reportsView() {
  const filters = state.reportFilters || { from: "", to: "", branchId: "all" };
  const transactions = filteredReportTransactions();
  const sales = transactions.filter((tx) => tx.type === "sale");
  const purchases = transactions.filter((tx) => tx.type === "purchase");
  const profitRows = sales.map((tx) => {
    const material = state.materials.find((item) => item.id === tx.materialId);
    const cost = tx.weight * (material?.buyPrice || 0);
    return { ...tx, cost, profit: tx.total - cost };
  });

  return page("Reports", "Filter by date, export operational reports, and restrict income reports to admin users.", `
    <section class="grid">
      <div class="panel">
        <div class="panel-head"><h3>Filters</h3></div>
        <div class="form-grid">
          <label>From date<input data-report-filter="from" type="date" value="${filters.from}"></label>
          <label>To date<input data-report-filter="to" type="date" value="${filters.to}"></label>
          <input type="hidden" data-report-filter="branchId" value="${defaultBranchId()}">
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><h3>Daily purchase report</h3><button class="btn secondary" data-export="purchases">Export CSV</button></div>
        ${transactionReportTable(purchases)}
      </div>
      <div class="panel">
        <div class="panel-head"><h3>Daily sales report</h3><button class="btn secondary" data-export="sales">Export CSV</button></div>
        ${transactionReportTable(sales)}
      </div>
      <div class="panel">
        <div class="panel-head"><h3>Inventory report</h3><button class="btn secondary" data-export="inventory">Export CSV</button></div>
        ${stockTable()}
      </div>
      ${isAdmin() ? `
        <div class="panel">
          <div class="panel-head"><h3>Income and profit report</h3><button class="btn secondary" data-export="income">Export CSV</button></div>
          ${table(["Date", "Material", "Sales", "Estimated Cost", "Profit"], profitRows.map((tx) => `
            <tr><td>${tx.date}</td><td>${materialName(tx.materialId)}</td><td class="amount">${money(tx.total)}</td><td class="amount">${money(tx.cost)}</td><td class="amount">${money(tx.profit)}</td></tr>
          `))}
        </div>` : `<div class="notice">Income and profit reports are visible only to admin users.</div>`}
    </section>
  `);
}

function transactionReportTable(rows) {
  return table(["Date", "Name", "Material", "Weight", "Price", "Total", "Payment"], rows.map((tx) => `
    <tr><td>${tx.date}</td><td>${partyName(tx.partyId)}</td><td>${materialName(tx.materialId)}</td><td class="num">${kg(tx.weight)}</td><td class="amount">${money(tx.price)}</td><td class="amount">${money(tx.total)}</td><td>${badge(tx.paymentStatus)}</td></tr>
  `));
}

function filteredReportTransactions() {
  const filters = state.reportFilters || { from: "", to: "", branchId: defaultBranchId() };
  return branchFilter(state.transactions).filter((tx) => {
    const afterFrom = !filters.from || tx.date >= filters.from;
    const beforeTo = !filters.to || tx.date <= filters.to;
    const inBranch = tx.branchId === defaultBranchId();
    return afterFrom && beforeTo && inBranch;
  });
}

function inventoryRows() {
  return visibleBranches().flatMap((branch) => state.materials.map((material) => {
    const currentStockKg = stockFor(branch.id, material.id);
    return {
      material: material.name,
      category: material.category,
      unit: material.unit,
      currentStockKg,
      buyingPricePerKilo: material.buyPrice,
      sellingPricePerKilo: material.sellPrice,
      estimatedValue: currentStockKg * material.sellPrice,
      location: branch.name,
    };
  }));
}

function usersView() {
  const editingUser = state.users.find((user) => user.id === state.editingUserId) || null;
  return page("Users", "Admin user management for role-based access.", `
    <section class="split">
      ${userForm(editingUser)}
      <div class="panel">
        ${table(["Action", "Name", "Email", "Role", "Status"], state.users.map((user) => `
          <tr class="${state.editingUserId === user.id ? "row-editing" : ""}"><td><button class="btn secondary" data-edit-user="${user.id}">Edit</button> <button class="btn danger" data-delete-user="${user.id}">Delete</button></td><td>${user.name}</td><td>${user.email}</td><td>${roles[user.role]}</td><td>${badge(user.status)}</td></tr>
        `))}
      </div>
    </section>
  `);
}

function userForm(user = null) {
  const action = user ? "update-user" : "add-user";
  return `
    <form class="panel" data-action="${action}">
      <div class="panel-head">
        <h3>${user ? `Edit ${user.name}` : "Add user"}</h3>
        ${user ? `<button class="btn secondary" type="button" data-action="cancel-user-edit">Cancel edit</button>` : ""}
      </div>
      ${user ? `<input type="hidden" name="id" value="${user.id}">` : ""}
      <div class="form-grid">
        ${input("name", "Name", "text", user?.name || "")}
        ${input("email", "Email or username", "email", user?.email || "")}
        ${input("password", "Password", "password", user?.password || "")}
        ${select("role", [["staff", "Staff"], ["payroll", "Payroll/Admin Staff"], ["admin", "Admin"]], user?.role)}
        ${branchSelect("branchId", "Branch", false, user?.branchId)}
        ${select("status", [["active", "Active"], ["inactive", "Inactive"]], user?.status)}
      </div>
      <button class="btn" type="submit" style="margin-top:12px">${user ? "Save changes" : "Save user"}</button>
    </form>
  `;
}

function table(headers, rows) {
  return `<div class="table-wrap"><table><thead><tr>${headers.map((header) => `<th>${t(header)}</th>`).join("")}</tr></thead><tbody>${rows.join("") || `<tr><td colspan="${headers.length}">${state.language === "fil" ? "Walang record." : "No records found."}</td></tr>`}</tbody></table></div>`;
}

function badge(text) {
  const safe = String(text || "").replaceAll("_", " ");
  const className = ["paid", "active", "completed", "approved"].includes(text) ? "good" : ["partial", "pending", "draft", "in_transit"].includes(text) ? "warn" : ["unpaid", "inactive", "cancelled"].includes(text) ? "danger" : "";
  return `<span class="badge ${className}">${safe}</span>`;
}

function input(name, labelText, type = "text", value = "", step = "") {
  return `<label>${t(labelText)}<input name="${name}" type="${type}" value="${value}" ${step ? `step="${step}"` : ""} required></label>`;
}

function numberInput(name, labelText, value = "", step = "0.01", required = true) {
  return `<label>${t(labelText)}<input name="${name}" type="number" value="${value}" step="${step}" ${required ? "required" : ""}></label>`;
}

function dateInput(name, value, labelText = "Date") {
  return `<label>${t(labelText)}<input name="${name}" type="date" value="${value}" required></label>`;
}

function select(name, options, selectedValue = "") {
  return `<label>${t(labelFromName(name))}<select name="${name}">${options.map(([value, text]) => `<option value="${value}" ${selectedValue === value ? "selected" : ""}>${t(text)}</option>`).join("")}</select></label>`;
}

function branchSelect(name, labelText = "Branch", includeBlank = false, selectedValue = "") {
  const value = includeBlank ? "" : defaultBranchId();
  return `<input type="hidden" name="${name}" value="${value}">`;
}

function partySelect(name, selectedValue = "") {
  return `<label>Customer or supplier<select name="${name}">${state.parties.filter((party) => party.status === "active").map((party) => `<option value="${party.id}" ${selectedValue === party.id ? "selected" : ""}>${party.name} (${party.type})</option>`).join("")}</select></label>`;
}

function materialSelect(name, selectedValue = "", required = true) {
  const blank = required ? "" : `<option value="">No material</option>`;
  return `<label>Scrap material<select name="${name}" ${required ? "required" : ""}>${blank}${state.materials.filter((material) => material.status === "active").map((material) => `<option value="${material.id}" ${selectedValue === material.id ? "selected" : ""}>${material.name}</option>`).join("")}</select></label>`;
}

function employeeSelect(name, selectedValue = "") {
  return `<label>Employee<select name="${name}">${state.employees.map((employee) => `<option value="${employee.id}" ${selectedValue === employee.id ? "selected" : ""}>${employee.name}</option>`).join("")}</select></label>`;
}

function employeeName(employeeId) {
  return state.employees.find((employee) => employee.id === employeeId)?.name || "Unknown employee";
}

function labelFromName(name) {
  return name.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
}

function bindEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeView = button.dataset.view;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      state.language = button.dataset.language;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-demo]").forEach((button) => {
    button.addEventListener("click", () => {
      const form = button.closest("form");
      form.email.value = button.dataset.demo;
      form.password.value = state.users.find((user) => user.email === button.dataset.demo).password;
    });
  });

  document.querySelectorAll("form[data-action]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      handleForm(form.dataset.action, Object.fromEntries(new FormData(form)));
    });
  });

  document.querySelectorAll("[data-action='logout']").forEach((button) => button.addEventListener("click", () => {
    state.sessionUserId = null;
    saveState();
    render();
  }));

  document.querySelectorAll("[data-action='reset-demo']").forEach((button) => button.addEventListener("click", () => {
    const keepUser = state.sessionUserId;
    state = structuredClone(seedState);
    state.sessionUserId = keepUser;
    saveState();
    render();
  }));

  document.querySelectorAll("[data-modal='adjustment']").forEach((button) => button.addEventListener("click", () => {
    document.getElementById("adjustment-panel")?.classList.toggle("hidden");
  }));

  document.querySelectorAll("[data-export]").forEach((button) => button.addEventListener("click", () => exportCsv(button.dataset.export)));

  document.querySelectorAll("[data-export-excel]").forEach((button) => button.addEventListener("click", () => exportExcel(button.dataset.exportExcel)));

  document.querySelectorAll("[data-edit-transaction]").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingTransactionId = button.dataset.editTransaction;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-print-receipt]").forEach((button) => {
    button.addEventListener("click", () => printReceipt(button.dataset.printReceipt));
  });

  document.querySelectorAll("[data-print-customer-receipt]").forEach((button) => {
    button.addEventListener("click", () => printCustomerReceipt(button.dataset.printCustomerReceipt));
  });

  document.querySelectorAll("[data-action='cancel-transaction-edit']").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingTransactionId = null;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-edit-party]").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingPartyId = button.dataset.editParty;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-action='cancel-party-edit']").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingPartyId = null;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-edit-delivery]").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingDeliveryId = button.dataset.editDelivery;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-print-delivery]").forEach((button) => {
    button.addEventListener("click", () => printDelivery(button.dataset.printDelivery));
  });

  document.querySelectorAll("[data-action='cancel-delivery-edit']").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingDeliveryId = null;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-edit-material]").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingMaterialId = button.dataset.editMaterial;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-action='cancel-material-edit']").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingMaterialId = null;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-edit-user]").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingUserId = button.dataset.editUser;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-action='cancel-user-edit']").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingUserId = null;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-delete-user]").forEach((button) => {
    button.addEventListener("click", () => deleteUser(button.dataset.deleteUser));
  });

  document.querySelectorAll("[data-edit-employee]").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingEmployeeId = button.dataset.editEmployee;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-action='cancel-employee-edit']").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingEmployeeId = null;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-delete-employee]").forEach((button) => {
    button.addEventListener("click", () => deleteEmployee(button.dataset.deleteEmployee));
  });

  document.querySelectorAll("[data-edit-payroll]").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingPayrollId = button.dataset.editPayroll;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-print-payroll]").forEach((button) => {
    button.addEventListener("click", () => printPayroll(button.dataset.printPayroll));
  });

  document.querySelectorAll("[data-action='cancel-payroll-edit']").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingPayrollId = null;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-action='start-camera']").forEach((button) => {
    button.addEventListener("click", () => startAttendanceCamera());
  });

  document.querySelectorAll("[data-action='capture-photo']").forEach((button) => {
    button.addEventListener("click", () => captureAttendancePhoto());
  });

  document.querySelectorAll("[data-photo-file]").forEach((inputEl) => {
    inputEl.addEventListener("change", () => loadAttendancePhotoFile(inputEl));
  });

  document.querySelectorAll("[data-print-cash-operation]").forEach((button) => {
    button.addEventListener("click", () => printCashOperation(button.dataset.printCashOperation));
  });

  document.querySelectorAll("[data-transaction-form]").forEach((form) => {
    const update = (event) => updateTransactionAmounts(form, event?.target);
    form.querySelectorAll("input, select").forEach((field) => field.addEventListener("input", update));
    form.querySelectorAll("select").forEach((field) => field.addEventListener("change", update));
    updateTransactionAmounts(form);
  });

  document.querySelectorAll("[data-payroll-form]").forEach((form) => {
    const update = () => updatePayrollSummary(form);
    form.querySelectorAll("input, select").forEach((field) => field.addEventListener("input", update));
    form.querySelectorAll("select").forEach((field) => field.addEventListener("change", update));
    updatePayrollSummary(form);
  });

  document.querySelector("[data-filter='party-search']")?.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = state.parties.filter((party) => `${party.name} ${party.contact}`.toLowerCase().includes(query));
    document.getElementById("party-list").innerHTML = partyTable(filtered);
  });

  document.querySelectorAll("[data-report-filter]").forEach((field) => {
    field.addEventListener("change", () => {
      state.reportFilters = state.reportFilters || { from: "", to: "", branchId: "all" };
      state.reportFilters[field.dataset.reportFilter] = field.value;
      saveState();
      render();
    });
  });
}

function handleForm(action, data) {
  const handlers = {
    login: login,
    "clock-in": clockIn,
    "clock-out": clockOut,
    "save-cash-operation": saveCashOperation,
    "add-transaction": addTransaction,
    "update-transaction": updateTransaction,
    "add-adjustment": addAdjustment,
    "add-delivery": addDelivery,
    "update-delivery": updateDelivery,
    "add-party": addParty,
    "update-party": updateParty,
    "add-material": addMaterial,
    "update-material": updateMaterial,
    "add-payroll": addPayroll,
    "update-payroll": updatePayroll,
    "add-employee": addEmployee,
    "update-employee": updateEmployee,
    "add-cash-advance": addCashAdvance,
    "add-user": addUser,
    "update-user": updateUser,
  };
  handlers[action]?.(data);
}

function login(data) {
  const user = state.users.find((item) => item.email === data.email && item.password === data.password && item.status === "active");
  if (!user) {
    alert("Invalid login or inactive user.");
    return;
  }
  state.sessionUserId = user.id;
  state.activeView = "dashboard";
  saveState();
  render();
}

function clockIn(data) {
  if (!data.photo) {
    alert("Capture a photo before clocking in.");
    return;
  }
  const user = currentUser();
  if (activeAttendanceRecords().some((record) => record.userId === user.id)) {
    alert("You are already clocked in.");
    return;
  }
  state.attendanceRecords.push({
    id: id("att"),
    userId: user.id,
    userName: user.name,
    branchId: user.branchId,
    date: today(),
    clockInAt: new Date().toISOString(),
    clockInPhoto: data.photo,
    clockOutAt: "",
    clockOutPhoto: "",
  });
  stopAttendanceCamera();
  saveState();
  render();
}

function clockOut(data) {
  if (!data.photo) {
    alert("Capture a photo before clocking out.");
    return;
  }
  const record = state.attendanceRecords.find((item) => item.id === data.recordId);
  if (!record) return;
  record.clockOutAt = new Date().toISOString();
  record.clockOutPhoto = data.photo;
  stopAttendanceCamera();
  saveState();
  render();
}

async function startAttendanceCamera() {
  const video = document.getElementById("attendance-camera");
  if (!video || !navigator.mediaDevices?.getUserMedia) {
    alert("Camera is not available in this browser. Use the Photo shot file button instead.");
    return;
  }
  try {
    stopAttendanceCamera();
    window.attendanceStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    video.srcObject = window.attendanceStream;
  } catch (error) {
    alert("Camera could not start. Use the Photo shot file button instead.");
  }
}

function captureAttendancePhoto() {
  const video = document.getElementById("attendance-camera");
  const canvas = document.getElementById("attendance-canvas");
  const photoInput = document.getElementById("attendance-photo");
  const preview = document.getElementById("attendance-preview");
  if (!video || !canvas || !photoInput || !preview || !video.videoWidth) {
    alert("Start the camera first, then capture photo.");
    return;
  }
  const context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const photo = canvas.toDataURL("image/jpeg", 0.76);
  photoInput.value = photo;
  preview.src = photo;
  preview.classList.remove("hidden");
}

function loadAttendancePhotoFile(inputEl) {
  const file = inputEl.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const photoInput = document.getElementById("attendance-photo");
    const preview = document.getElementById("attendance-preview");
    photoInput.value = reader.result;
    preview.src = reader.result;
    preview.classList.remove("hidden");
  };
  reader.readAsDataURL(file);
}

function stopAttendanceCamera() {
  window.attendanceStream?.getTracks?.().forEach((track) => track.stop());
  window.attendanceStream = null;
}

function updateTransactionAmounts(form, sourceField = null) {
  const material = state.materials.find((item) => item.id === form.materialId?.value);
  if (material && (!form.price.value || ["type", "materialId"].includes(sourceField?.name))) {
    form.price.value = form.type.value === "sale" ? material.sellPrice : material.buyPrice;
  }
  const weight = Number(form.weight?.value || 0);
  const price = Number(form.price?.value || 0);
  const total = weight * price;
  if (form.paymentStatus.value === "paid") {
    form.paid.value = total.toFixed(2);
    form.paid.readOnly = true;
  } else if (form.paymentStatus.value === "unpaid") {
    form.paid.value = "0.00";
    form.paid.readOnly = true;
  } else {
    form.paid.readOnly = false;
    if (Number(form.paid.value || 0) > total) form.paid.value = total.toFixed(2);
  }
  const paid = Number(form.paid.value || 0);
  const balance = Math.max(total - paid, 0);
  const summary = form.querySelector("[data-transaction-summary]");
  if (summary) summary.textContent = `Total: ${money(total)} | Balance: ${money(balance)}`;
}

function updatePayrollSummary(form) {
  const data = Object.fromEntries(new FormData(form));
  const totals = payrollTotals(payrollFormData(data, state.payrollRuns.find((run) => run.id === data.id)));
  const summary = form.querySelector("[data-payroll-summary]");
  if (summary) summary.textContent = `Gross Pay: ${money(totals.grossPay)} | Deductions: ${money(totals.totalDeduction)} | Net Pay: ${money(totals.netPay)}`;
}

function transactionValues(data, existingNumber = null) {
  const material = state.materials.find((item) => item.id === data.materialId);
  const weight = Number(data.weight);
  const price = Number(data.price || (data.type === "sale" ? material.sellPrice : material.buyPrice));
  const total = weight * price;
  const paid = data.paymentStatus === "paid" ? total : data.paymentStatus === "unpaid" ? 0 : Math.min(Number(data.paid || 0), total);
  return {
    number: existingNumber || `TRX-${String(state.transactions.length + 1).padStart(4, "0")}`,
    date: data.date,
    branchId: data.branchId,
    type: data.type,
    partyId: data.partyId,
    materialId: data.materialId,
    weight,
    price,
    total,
    paymentStatus: data.paymentStatus,
    paid,
    balance: Math.max(total - paid, 0),
    notes: data.notes,
  };
}

function autoStockMovement(tx) {
  return {
    id: id("s"),
    date: tx.date,
    branchId: tx.branchId,
    materialId: tx.materialId,
    type: tx.type === "purchase" ? "purchase_in" : "sale_out",
    quantity: tx.type === "purchase" ? tx.weight : -tx.weight,
    reference: tx.number,
    notes: `Auto from ${tx.type}`,
    createdBy: currentUser().id,
  };
}

function stockForEdit(branchId, materialId, transactionNumber = null) {
  return state.stockMovements
    .filter((movement) => movement.reference !== transactionNumber)
    .filter((movement) => movement.branchId === branchId && movement.materialId === materialId)
    .reduce((total, movement) => total + Number(movement.quantity || 0), 0);
}

function addTransaction(data) {
  const tx = transactionValues(data);
  if (tx.type === "sale" && stockFor(tx.branchId, tx.materialId) < tx.weight && !isAdmin()) {
    alert("Sale blocked: stock is lower than the requested sale weight. Ask admin to adjust or override.");
    return;
  }
  state.transactions.push({ id: id("t"), ...tx, createdBy: currentUser().id });
  state.stockMovements.push(autoStockMovement(tx));
  state.repeatTransactionPartyId = data.keepSameCustomer === "yes" ? data.partyId : "";
  saveState();
  render();
}

function saveCashOperation(data) {
  const existing = cashOperationRecord(data.branchId, data.date);
  const record = {
    id: existing?.id || id("cap"),
    date: data.date,
    branchId: data.branchId,
    openingCash: Number(data.openingCash || 0),
    amount: Number(data.openingCash || 0),
    closeCash: data.closeCash === "" ? "" : Number(data.closeCash || 0),
    notes: data.notes,
    createdBy: existing?.createdBy || currentUser().id,
    updatedBy: currentUser().id,
  };
  if (existing) {
    const index = state.dailyCapitals.findIndex((capital) => capital.id === existing.id);
    state.dailyCapitals[index] = record;
  } else {
    state.dailyCapitals.push(record);
  }
  saveState();
  render();
}

function updateTransaction(data) {
  const index = state.transactions.findIndex((tx) => tx.id === data.id);
  if (index === -1) return;
  const existing = state.transactions[index];
  const tx = transactionValues(data, existing.number);
  if (tx.type === "sale" && stockForEdit(tx.branchId, tx.materialId, existing.number) < tx.weight && !isAdmin()) {
    alert("Sale blocked: stock is lower than the requested sale weight. Ask admin to adjust or override.");
    return;
  }
  state.transactions[index] = { ...existing, ...tx };
  state.stockMovements = state.stockMovements.filter((movement) => movement.reference !== existing.number);
  state.stockMovements.push(autoStockMovement(tx));
  state.editingTransactionId = null;
  saveState();
  render();
}

function addAdjustment(data) {
  state.stockMovements.push({ id: id("s"), date: data.date, branchId: data.branchId, materialId: data.materialId, type: "manual_adjustment", quantity: Number(data.quantity), reference: "ADJUSTMENT", notes: data.notes, createdBy: currentUser().id });
  saveState();
  render();
}

function addDelivery(data) {
  const existing = data.appendDeliveryId ? state.deliveries.find((delivery) => delivery.id === data.appendDeliveryId) : null;
  const delivery = deliveryValues(data, existing, Boolean(existing));
  if (!delivery) return;
  if (existing) {
    const index = state.deliveries.findIndex((item) => item.id === existing.id);
    state.deliveries[index] = delivery;
    state.stockMovements = state.stockMovements.filter((movement) => movement.reference !== existing.number);
  } else {
    state.deliveries.push(delivery);
  }
  applyDeliveryStockMovements(delivery);
  state.repeatDeliveryId = data.keepSameTruck === "yes" ? delivery.id : "";
  saveState();
  render();
}

function updateDelivery(data) {
  const index = state.deliveries.findIndex((delivery) => delivery.id === data.id);
  if (index === -1) return;
  const existing = state.deliveries[index];
  const delivery = deliveryValues(data, existing);
  if (!delivery) return;
  state.deliveries[index] = delivery;
  state.stockMovements = state.stockMovements.filter((movement) => movement.reference !== existing.number);
  applyDeliveryStockMovements(delivery);
  state.editingDeliveryId = null;
  saveState();
  render();
}

function deliveryValues(data, existing = null, appendLine = false) {
  const formLines = deliveryFormLines(data);
  if (appendLine && !formLines.length) {
    alert("Add one scrap material with loaded weight.");
    return null;
  }
  const lines = appendLine ? [...deliveryLines(existing), ...formLines] : formLines;
  if (!lines.length) {
    alert("Add at least one scrap material with loaded weight.");
    return null;
  }
  const totalsByMaterial = lines.reduce((totals, line) => {
    totals[line.materialId] = (totals[line.materialId] || 0) + line.loadedWeight;
    return totals;
  }, {});
  const shortage = Object.entries(totalsByMaterial).find(([materialId, loadedWeight]) => stockForDeliveryEdit(data.sourceBranchId, materialId, existing?.number) < loadedWeight);
  if (shortage && !isAdmin()) {
    alert(`Delivery blocked: ${materialName(shortage[0])} stock is lower than loaded weight.`);
    return null;
  }
  return {
    id: existing?.id || id("d"),
    number: existing?.number || `DLV-${String(state.deliveries.length + 1).padStart(4, "0")}`,
    date: data.date,
    sourceBranchId: data.sourceBranchId,
    destinationBranchId: data.destinationBranchId,
    destinationName: data.destinationName,
    truck: data.truck,
    driver: data.driver,
    status: data.status,
    notes: data.notes,
    createdBy: existing?.createdBy || currentUser().id,
    updatedBy: currentUser().id,
    lines,
  };
}

function stockForDeliveryEdit(branchId, materialId, deliveryNumber = null) {
  return state.stockMovements
    .filter((movement) => movement.reference !== deliveryNumber)
    .filter((movement) => movement.branchId === branchId && movement.materialId === materialId)
    .reduce((total, movement) => total + Number(movement.quantity || 0), 0);
}

function applyDeliveryStockMovements(delivery) {
  if (!["cancelled", "pending"].includes(delivery.status)) {
    delivery.lines.forEach((line) => {
      state.stockMovements.push({ id: id("s"), date: delivery.date, branchId: delivery.sourceBranchId, materialId: line.materialId, type: "delivery_out", quantity: -line.loadedWeight, reference: delivery.number, notes: "Auto from delivery", createdBy: currentUser().id });
    });
  }
  if (delivery.status === "completed" && delivery.destinationBranchId) {
    delivery.lines.forEach((line) => {
      state.stockMovements.push({ id: id("s"), date: delivery.date, branchId: delivery.destinationBranchId, materialId: line.materialId, type: "delivery_in", quantity: Number(line.deliveredWeight || line.loadedWeight), reference: delivery.number, notes: "Auto received delivery", createdBy: currentUser().id });
    });
  }
}

function addParty(data) {
  state.parties.push({ id: id("p"), ...data });
  saveState();
  render();
}

function updateParty(data) {
  const index = state.parties.findIndex((party) => party.id === data.id);
  if (index === -1) return;
  state.parties[index] = { ...state.parties[index], type: data.type, name: data.name, contact: data.contact, address: data.address, notes: data.notes, status: data.status };
  state.editingPartyId = null;
  saveState();
  render();
}

function addMaterial(data) {
  state.materials.push({ id: id("m"), ...data, buyPrice: Number(data.buyPrice), sellPrice: Number(data.sellPrice) });
  state.priceHistory.push({ id: id("ph"), materialId: state.materials.at(-1).id, date: today(), buyPrice: Number(data.buyPrice), sellPrice: Number(data.sellPrice), changedBy: currentUser().id });
  saveState();
  render();
}

function updateMaterial(data) {
  const index = state.materials.findIndex((material) => material.id === data.id);
  if (index === -1) return;
  const existing = state.materials[index];
  const buyPrice = Number(data.buyPrice);
  const sellPrice = Number(data.sellPrice);
  const priceChanged = existing.buyPrice !== buyPrice || existing.sellPrice !== sellPrice;
  state.materials[index] = { ...existing, name: data.name, category: data.category, buyPrice, sellPrice, unit: data.unit, status: data.status };
  if (priceChanged) {
    state.priceHistory.push({ id: id("ph"), materialId: existing.id, date: today(), buyPrice, sellPrice, changedBy: currentUser().id });
  }
  state.editingMaterialId = null;
  saveState();
  render();
}

function addPayroll(data) {
  state.payrollRuns.push(payrollFormData(data));
  saveState();
  render();
}

function updatePayroll(data) {
  const index = state.payrollRuns.findIndex((run) => run.id === data.id);
  if (index === -1) return;
  state.payrollRuns[index] = payrollFormData(data, state.payrollRuns[index]);
  state.editingPayrollId = null;
  saveState();
  render();
}

function addEmployee(data) {
  state.employees.push(employeeValues(data));
  saveState();
  render();
}

function updateEmployee(data) {
  const index = state.employees.findIndex((employee) => employee.id === data.id);
  if (index === -1) return;
  state.employees[index] = employeeValues(data, state.employees[index]);
  state.editingEmployeeId = null;
  saveState();
  render();
}

function employeeValues(data, existing = null) {
  return {
    id: existing?.id || id("e"),
    name: data.name,
    branchId: data.branchId,
    position: data.position,
    salaryType: data.salaryType,
    rate: Number(data.rate),
    sssNo: data.sssNo,
    pagibigNo: data.pagibigNo,
    benefits: data.benefits,
    startDate: data.startDate,
    status: data.status,
  };
}

function deleteEmployee(employeeId) {
  const usedInPayroll = state.payrollRuns.some((run) => run.employeeId === employeeId);
  const usedInCashAdvance = state.cashAdvances.some((advance) => advance.employeeId === employeeId);
  if (usedInPayroll || usedInCashAdvance) {
    alert("This employee is connected to payroll or cash advances. Set status to inactive instead.");
    return;
  }
  const employee = state.employees.find((item) => item.id === employeeId);
  if (!employee) return;
  if (!confirm(`Delete employee ${employee.name}?`)) return;
  state.employees = state.employees.filter((item) => item.id !== employeeId);
  if (state.editingEmployeeId === employeeId) state.editingEmployeeId = null;
  saveState();
  render();
}

function yearsOfService(startDate) {
  if (!startDate) return "";
  const start = new Date(`${startDate}T00:00:00`);
  if (Number.isNaN(start.getTime())) return "";
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const monthDiff = now.getMonth() - start.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) years -= 1;
  const serviceYears = Math.max(years, 0);
  return `${serviceYears} ${serviceYears === 1 ? "year" : "years"}`;
}

function addCashAdvance(data) {
  state.cashAdvances.push({ id: id("ca"), employeeId: data.employeeId, date: data.date, amount: Number(data.amount), reason: data.reason, balance: Number(data.balance), status: data.status });
  saveState();
  render();
}

function addUser(data) {
  state.users.push({ id: id("u"), ...data });
  saveState();
  render();
}

function updateUser(data) {
  const index = state.users.findIndex((user) => user.id === data.id);
  if (index === -1) return;
  state.users[index] = { ...state.users[index], name: data.name, email: data.email, password: data.password, role: data.role, branchId: data.branchId, status: data.status };
  state.editingUserId = null;
  saveState();
  render();
}

function deleteUser(userId) {
  if (userId === state.sessionUserId) {
    alert("You cannot delete the user currently logged in.");
    return;
  }
  const user = state.users.find((item) => item.id === userId);
  if (!user) return;
  if (!confirm(`Delete user ${user.name}?`)) return;
  state.users = state.users.filter((item) => item.id !== userId);
  if (state.editingUserId === userId) state.editingUserId = null;
  saveState();
  render();
}

function exportCsv(type) {
  const reportTransactions = filteredReportTransactions();
  const datasets = {
    transactions: branchFilter(state.transactions),
    purchases: reportTransactions.filter((tx) => tx.type === "purchase"),
    sales: reportTransactions.filter((tx) => tx.type === "sale"),
    deliveries: deliveryRecordRows(),
    payroll: payrollExportRows(),
    inventory: inventoryRows(),
    income: reportTransactions.filter((tx) => tx.type === "sale").map((tx) => {
      const material = state.materials.find((item) => item.id === tx.materialId);
      return { date: tx.date, material: materialName(tx.materialId), sales: tx.total, cost: tx.weight * (material?.buyPrice || 0), profit: tx.total - tx.weight * (material?.buyPrice || 0) };
    }),
  };
  if (type === "income" && !isAdmin()) return;
  const rows = datasets[type] || [];
  const csv = toCsv(rows);
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `junkshop-${type}-${today()}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function toCsv(rows) {
  if (!rows.length) return "";
  const headers = Object.keys(rows[0]);
  return [headers.join(","), ...rows.map((row) => headers.map((header) => `"${String(row[header] ?? "").replaceAll('"', '""')}"`).join(","))].join("\n");
}

function exportExcel(type) {
  const datasets = {
    inventory: inventoryRows(),
    deliveries: deliveryRecordRows(),
  };
  const rows = datasets[type] || [];
  const workbook = excelWorkbook(type, rows);
  const blob = new Blob([workbook], { type: "application/vnd.ms-excel" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `junkshop-${type}-${today()}.xls`;
  link.click();
  URL.revokeObjectURL(url);
}

function excelWorkbook(sheetName, rows) {
  const defaultHeaders = {
    inventory: ["material", "category", "unit", "currentStockKg", "buyingPricePerKilo", "sellingPricePerKilo", "estimatedValue", "location"],
    deliveries: ["deliveryNumber", "date", "destination", "truck", "driver", "operator", "material", "loadedWeightKg", "deliveredWeightKg", "status", "notes"],
  };
  const headers = rows.length ? Object.keys(rows[0]) : defaultHeaders[sheetName] || [];
  const headerCells = headers.map((header) => `<th>${escapeHtml(labelFromName(header))}</th>`).join("");
  const bodyRows = rows.map((row) => `<tr>${headers.map((header) => `<td>${escapeHtml(row[header])}</td>`).join("")}</tr>`).join("");
  return `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="UTF-8">
        <!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${escapeHtml(sheetName)}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
      </head>
      <body>
        <table>
          <thead><tr>${headerCells}</tr></thead>
          <tbody>${bodyRows}</tbody>
        </table>
      </body>
    </html>
  `;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

render();
