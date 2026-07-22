const STORAGE_KEY = "junkshop-mvp-state-v1";

const roles = {
  admin: "Admin",
  staff: "Branch Staff",
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
    "Inventory": "Imbentaryo",
    "Deliveries": "Delivery",
    "Customers/Suppliers": "Customer/Supplier",
    "Materials/Prices": "Materyales/Presyo",
    "Branches": "Mga Branch",
    "Employee Maintenance": "Employee Maintenance",
    "Payroll": "Payroll",
    "Reports": "Reports",
    "Users": "Users",
    "Log out": "Mag-log out",
    "Reset demo data": "I-reset ang demo data",
    "Good day": "Magandang araw",
    "Here is today's branch summary": "Narito ang buod ng branch ngayong araw",
    "Operational summary for branches, stock, payments, deliveries, and fast-moving materials.": "Buod ng operasyon para sa branch, stock, bayad, delivery, at mabilis maubos na materyales.",
    "Clock in or clock out with a photo shot for attendance proof.": "Mag-clock in o clock out gamit ang litrato bilang attendance proof.",
    "Current list of employees who are on duty.": "Listahan ng mga empleyadong kasalukuyang naka-duty.",
    "Record purchases and sales. Use Edit transaction on any saved row to update a previous transaction.": "Mag-record ng purchases at sales. Gamitin ang Edit transaction para baguhin ang dating transaksyon.",
    "Current stock is calculated from all stock movement records.": "Ang kasalukuyang stock ay kinukuha mula sa lahat ng stock movement records.",
    "Track truck loads, source branch stock out, receiving branch stock in, and completion status.": "I-monitor ang karga ng truck, bawas stock sa source branch, dagdag stock sa receiving branch, at status.",
    "Searchable master list for transaction history.": "Searchable master list para sa transaction history.",
    "Admin-managed buying and selling prices. Transactions keep the price used at the time.": "Admin ang namamahala ng buying at selling prices. Naka-save sa transaction ang ginamit na presyo.",
    "Admin setup for multi-branch tracking and consolidated reporting.": "Admin setup para sa multi-branch tracking at consolidated reports.",
    "Maintain employee payroll details, government numbers, benefits, start date, and years of service.": "I-maintain ang employee payroll details, government numbers, benefits, start date, at years of service.",
    "Manage employees, cash advances, and payroll net pay calculations.": "I-manage ang employees, cash advances, at payroll net pay calculations.",
    "Filter by date and branch, export operational reports, and restrict income reports to admin users.": "I-filter ayon sa date at branch, mag-export ng reports, at admin lang ang income reports.",
    "Admin user management for role-based access and branch assignment.": "Admin user management para sa role-based access at branch assignment.",
    "Total purchases today": "Purchases ngayong araw",
    "Total sales today": "Sales ngayong araw",
    "Current inventory value": "Halaga ng inventory",
    "Pending payments": "Pending na bayad",
    "Deliveries in progress": "Delivery na kasalukuyan",
    "Payroll summary": "Payroll summary",
    "Income summary": "Income summary",
    "Fast-moving scrap materials": "Mabilis gumalaw na scrap",
    "Current stock per branch": "Stock bawat branch",
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
  attendanceRecords: [],
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
  return isAdmin() ? state.branches : state.branches.filter((branch) => branch.id === user.branchId);
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
  if (isAdmin()) return records;
  const user = currentUser();
  return records.filter((record) => record[field] === user.branchId);
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
            <span>Built for multi-branch junkshop teams</span>
          </div>
          <div class="hero-metrics">
            ${metric("Branch stock", "Live")}
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
    ["transactions", "Transactions"],
    ["inventory", "Inventory"],
    ["deliveries", "Deliveries"],
    ["parties", "Customers/Suppliers"],
    ["materials", "Materials/Prices"],
    ["branches", "Branches"],
    ["employees", "Employee Maintenance"],
    ["payroll", "Payroll"],
    ["reports", "Reports"],
    ["users", "Users"],
  ].filter(([view]) => {
    if (["users", "branches", "materials"].includes(view)) return isAdmin();
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
            <span><strong>${user.name}</strong><small>${roles[user.role]} - ${branchName(user.branchId)}</small></span>
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
    transactions: transactionsView,
    inventory: inventoryView,
    deliveries: deliveriesView,
    parties: partiesView,
    materials: materialsView,
    branches: branchesView,
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
      <div><h2>${state.activeView === "dashboard" ? `${t("Good day")}, ${currentUser().name}!` : t(title)}</h2><p>${state.activeView === "dashboard" ? t("Here is today's branch summary") : t(subtitle)}</p></div>
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
  const profit = transactions.reduce((sum, tx) => {
    const material = state.materials.find((item) => item.id === tx.materialId);
    if (tx.type !== "sale" || !material) return sum;
    return sum + tx.weight * (tx.price - material.buyPrice);
  }, 0);

  return page("Dashboard", "Operational summary for branches, stock, payments, deliveries, and fast-moving materials.", `
    <section class="grid cards">
      ${metric("Total purchases today", money(purchases))}
      ${metric("Total sales today", money(sales))}
      ${metric("Current inventory value", money(inventoryValue))}
      ${metric("Pending payments", money(pending))}
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
        <div class="panel-head"><h3>Current stock per branch</h3></div>
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
      rows.push(`<tr><td>${branch.name}</td><td>${material.name}</td><td class="num">${kg(stockFor(branch.id, material.id))}</td><td class="amount">${money(stockFor(branch.id, material.id) * material.sellPrice)}</td></tr>`);
    });
  });
  return table(["Branch", "Material", "Current Stock", "Estimated Value"], rows);
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
          ${metric("Branch", branchName(user.branchId))}
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

function reviewAttendanceView() {
  const records = activeAttendanceRecords().filter((record) => isAdmin() || isPayroll() || record.branchId === currentUser().branchId);
  return page("Review Attendance", "Current list of employees who are on duty.", `
    <section class="panel">
      <div class="panel-head"><h3>On duty now</h3></div>
      ${attendanceTable(records)}
    </section>
  `);
}

function attendanceTable(records) {
  return table(["Employee", "Branch", "Clock In", "Clock Out", "Status", "Photo"], records.slice().reverse().map((record) => `
    <tr><td>${record.userName}</td><td>${branchName(record.branchId)}</td><td>${timeLabel(record.clockInAt)}</td><td>${record.clockOutAt ? timeLabel(record.clockOutAt) : ""}</td><td>${badge(record.clockOutAt ? "completed" : "active")}</td><td>${record.clockInPhoto ? `<img class="thumb" src="${record.clockOutPhoto || record.clockInPhoto}" alt="Attendance photo">` : ""}</td></tr>
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
  const receiptWindow = window.open("", "_blank", "width=420,height=720");
  if (!receiptWindow) {
    alert("Please allow pop-ups to print the receipt.");
    return;
  }
  receiptWindow.document.write(receiptHtml(tx));
  receiptWindow.document.close();
  receiptWindow.focus();
}

function receiptHtml(tx) {
  const branch = state.branches.find((item) => item.id === tx.branchId);
  const cashier = state.users.find((user) => user.id === tx.createdBy) || currentUser();
  const transactionType = tx.type === "purchase" ? "Purchase" : "Sale";
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Receipt ${tx.number}</title>
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
          <div class="row"><span>Receipt No.</span><strong>${escapeHtml(tx.number)}</strong></div>
          <div class="row"><span>Date</span><strong>${escapeHtml(tx.date)}</strong></div>
          <div class="row"><span>Cashier</span><strong>${escapeHtml(cashier?.name || "Unknown")}</strong></div>
          <div class="row"><span>Branch</span><strong>${escapeHtml(branch?.name || "Unknown")}</strong></div>
          <div class="row"><span>Type</span><strong>${transactionType}</strong></div>
          <div class="row"><span>Name</span><strong>${escapeHtml(partyName(tx.partyId))}</strong></div>
          <div class="line"></div>
          <table>
            <thead><tr><th>Material</th><th>Kg</th><th>Price</th><th>Total</th></tr></thead>
            <tbody>
              <tr>
                <td>${escapeHtml(materialName(tx.materialId))}</td>
                <td>${Number(tx.weight).toLocaleString("en-PH", { maximumFractionDigits: 2 })}</td>
                <td>${money(tx.price)}</td>
                <td>${money(tx.total)}</td>
              </tr>
            </tbody>
          </table>
          <div class="line"></div>
          <div class="row total"><span>Total</span><strong>${money(tx.total)}</strong></div>
          <div class="row"><span>Amount paid</span><strong>${money(tx.paid)}</strong></div>
          <div class="row"><span>Balance</span><strong>${money(tx.balance)}</strong></div>
          <div class="row"><span>Payment status</span><strong>${escapeHtml(tx.paymentStatus)}</strong></div>
          ${tx.notes ? `<div class="line"></div><div class="muted">Notes: ${escapeHtml(tx.notes)}</div>` : ""}
          <div class="line"></div>
          ${barcode(tx.number)}
          <div class="center muted" style="margin-top:12px">Thank you.</div>
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
    <section class="split">
      ${transactionForm(editingTransaction)}
      <div class="panel">
        <div class="panel-head"><h3>Recent transactions</h3><button class="btn secondary" data-export="transactions">Export CSV</button></div>
        ${table(["Action", "No.", "Date", "Branch", "Type", "Name", "Material", "Weight", "Total", "Paid", "Balance"], transactions.slice().reverse().map((tx) => `
          <tr class="${state.editingTransactionId === tx.id ? "row-editing" : ""}"><td><button class="btn secondary" data-edit-transaction="${tx.id}">Edit transaction</button> <button class="btn secondary" data-print-receipt="${tx.id}">Print receipt</button></td><td>${tx.number}</td><td>${tx.date}</td><td>${branchName(tx.branchId)}</td><td>${badge(tx.type)}</td><td>${partyName(tx.partyId)}</td><td>${materialName(tx.materialId)}</td><td class="num">${kg(tx.weight)}</td><td class="amount">${money(tx.total)}</td><td class="amount">${money(tx.paid)}</td><td class="amount">${money(tx.balance)}</td></tr>
        `))}
      </div>
    </section>
  `);
}

function transactionForm(tx = null) {
  const action = tx ? "update-transaction" : "add-transaction";
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
        ${partySelect("partyId", tx?.partyId)}
        ${materialSelect("materialId", tx?.materialId)}
        ${input("weight", "Weight in kilos", "number", tx?.weight ?? "0", "0.01")}
        ${input("price", "Price per kilo", "number", tx?.price ?? "", "0.01")}
        ${select("paymentStatus", [["paid", "Paid"], ["unpaid", "Unpaid"], ["partial", "Partial"]], tx?.paymentStatus)}
        ${input("paid", "Amount paid", "number", tx?.paid ?? "0", "0.01")}
      </div>
      <div class="notice" data-transaction-summary style="margin-top:12px">Total: PHP 0.00 | Balance: PHP 0.00</div>
      <label style="margin-top:10px">Notes<textarea name="notes">${tx?.notes || ""}</textarea></label>
      <button class="btn" type="submit" style="margin-top:12px">${tx ? "Save changes" : "Save transaction"}</button>
    </form>
  `;
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
        ${table(["Date", "Branch", "Material", "Movement", "Quantity", "Reference", "Notes"], movements.slice().reverse().map((move) => `
          <tr><td>${move.date}</td><td>${branchName(move.branchId)}</td><td>${materialName(move.materialId)}</td><td>${badge(move.type)}</td><td class="num">${kg(move.quantity)}</td><td>${move.reference}</td><td>${move.notes || ""}</td></tr>
        `))}
      </div>
      ${isAdmin() ? adjustmentForm() : ""}
    </section>
  `);
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
  const deliveries = state.deliveries.filter((delivery) => isAdmin() || delivery.sourceBranchId === currentUser().branchId || delivery.destinationBranchId === currentUser().branchId);
  const editingDelivery = deliveries.find((delivery) => delivery.id === state.editingDeliveryId) || null;
  const rows = deliveries.slice().reverse().flatMap((delivery) => deliveryLines(delivery).map((line) => `
    <tr class="${state.editingDeliveryId === delivery.id ? "row-editing" : ""}"><td><button class="btn secondary" data-edit-delivery="${delivery.id}">Edit</button></td><td>${delivery.number}</td><td>${delivery.date}</td><td>${branchName(delivery.sourceBranchId)}</td><td>${delivery.destinationBranchId ? branchName(delivery.destinationBranchId) : delivery.destinationName}</td><td>${delivery.truck}</td><td>${delivery.driver}</td><td>${materialName(line.materialId)}</td><td class="num">${kg(line.loadedWeight)}</td><td class="num">${kg(line.deliveredWeight)}</td><td>${badge(delivery.status)}</td></tr>
  `));
  return page("Deliveries", "Track truck loads, source branch stock out, receiving branch stock in, and completion status.", `
    <section class="split">
      ${deliveryForm(editingDelivery)}
      <div class="panel">
        <div class="panel-head"><h3>Delivery records</h3><button class="btn secondary" data-export-excel="deliveries">Download Excel</button></div>
        ${table(["Action", "No.", "Date", "Source", "Destination", "Truck", "Driver", "Material", "Loaded", "Delivered", "Status"], rows)}
      </div>
    </section>
  `);
}

function deliveryForm(delivery = null) {
  const action = delivery ? "update-delivery" : "add-delivery";
  return `
    <form class="panel" data-action="${action}">
      <div class="panel-head">
        <h3>${delivery ? `Edit ${delivery.number}` : "New delivery"}</h3>
        ${delivery ? `<button class="btn secondary" type="button" data-action="cancel-delivery-edit">Cancel edit</button>` : ""}
      </div>
      ${delivery ? `<input type="hidden" name="id" value="${delivery.id}">` : ""}
      <div class="form-grid">
        ${dateInput("date", delivery?.date || today())}
        ${branchSelect("sourceBranchId", "Source branch", false, delivery?.sourceBranchId)}
        ${branchSelect("destinationBranchId", "Destination branch", true, delivery?.destinationBranchId || "")}
        <label>External destination<input name="destinationName" type="text" value="${delivery?.destinationName || ""}"></label>
        ${input("truck", "Truck plate number", "text", delivery?.truck || "")}
        ${input("driver", "Driver name", "text", delivery?.driver || "")}
        ${select("status", [["pending", "Pending"], ["in_transit", "In transit"], ["completed", "Completed"], ["cancelled", "Cancelled"]], delivery?.status)}
      </div>
      <div class="panel-head" style="margin-top:14px"><h3>Truck load scraps</h3></div>
      ${deliveryLineInputs(delivery)}
      <label style="margin-top:10px">Notes<textarea name="notes">${delivery?.notes || ""}</textarea></label>
      <button class="btn" type="submit" style="margin-top:12px">${delivery ? "Save changes" : "Save delivery"}</button>
    </form>
  `;
}

function deliveryLines(delivery) {
  if (Array.isArray(delivery.lines) && delivery.lines.length) return delivery.lines;
  if (!delivery.materialId) return [];
  return [{ materialId: delivery.materialId, loadedWeight: Number(delivery.loadedWeight || 0), deliveredWeight: Number(delivery.deliveredWeight || 0) }];
}

function deliveryFormLines(data) {
  return [1, 2, 3, 4].map((lineNo) => ({
    materialId: data[`materialId${lineNo}`],
    loadedWeight: Number(data[`loadedWeight${lineNo}`] || 0),
    deliveredWeight: Number(data[`deliveredWeight${lineNo}`] || 0),
  })).filter((line) => line.materialId && line.loadedWeight > 0);
}

function deliveryRecordRows() {
  return state.deliveries.flatMap((delivery) => deliveryLines(delivery).map((line) => ({
    deliveryNumber: delivery.number,
    date: delivery.date,
    sourceBranch: branchName(delivery.sourceBranchId),
    destination: delivery.destinationBranchId ? branchName(delivery.destinationBranchId) : delivery.destinationName,
    truck: delivery.truck,
    driver: delivery.driver,
    material: materialName(line.materialId),
    loadedWeightKg: line.loadedWeight,
    deliveredWeightKg: line.deliveredWeight,
    status: delivery.status,
    notes: delivery.notes || "",
  })));
}

function deliveryLineInputs(delivery = null) {
  const lines = delivery ? deliveryLines(delivery) : [];
  return [1, 2, 3, 4].map((lineNo) => `
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

function branchesView() {
  return page("Branches", "Admin setup for multi-branch tracking and consolidated reporting.", `
    <section class="split">
      <form class="panel" data-action="add-branch">
        <div class="panel-head"><h3>Add branch</h3></div>
        <div class="form-grid">
          ${input("name", "Branch name", "text")}
          ${input("code", "Branch code", "text")}
          ${input("address", "Address", "text")}
          ${input("contact", "Contact number", "text")}
          ${select("status", [["active", "Active"], ["inactive", "Inactive"]])}
        </div>
        <button class="btn" type="submit" style="margin-top:12px">Save branch</button>
      </form>
      <div class="panel">
        ${table(["Code", "Name", "Address", "Contact", "Status"], state.branches.map((branch) => `
          <tr><td>${branch.code}</td><td>${branch.name}</td><td>${branch.address}</td><td>${branch.contact}</td><td>${badge(branch.status)}</td></tr>
        `))}
      </div>
    </section>
  `);
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
  return table(["Action", "Name", "Branch", "Position", "Salary Type", "Rate", "SSS No.", "Pag-IBIG Number", "Other Benefits", "Start Date", "Years of Service", "Status"], state.employees.map((employee) => `
    <tr class="${state.editingEmployeeId === employee.id ? "row-editing" : ""}"><td><button class="btn secondary" data-edit-employee="${employee.id}">Edit</button> <button class="btn danger" data-delete-employee="${employee.id}">Delete</button></td><td>${employee.name}</td><td>${branchName(employee.branchId)}</td><td>${employee.position}</td><td>${badge(employee.salaryType)}</td><td class="amount">${money(employee.rate)}</td><td>${employee.sssNo || ""}</td><td>${employee.pagibigNo || ""}</td><td>${employee.benefits || ""}</td><td>${employee.startDate || ""}</td><td>${yearsOfService(employee.startDate)}</td><td>${badge(employee.status)}</td></tr>
  `));
}

function payrollView() {
  return page("Payroll", "Manage employees, cash advances, and payroll net pay calculations.", `
    <section class="grid">
      <div class="split">
        <div class="panel">
          <div class="panel-head"><h3>Employee payroll details</h3><button class="btn secondary" data-view="employees">Maintain employees</button></div>
          ${table(["Name", "Branch", "Position", "Rate", "SSS No.", "Pag-IBIG Number", "Other Benefits", "Years of Service"], state.employees.map((employee) => `
            <tr><td>${employee.name}</td><td>${branchName(employee.branchId)}</td><td>${employee.position}</td><td class="amount">${money(employee.rate)}</td><td>${employee.sssNo || ""}</td><td>${employee.pagibigNo || ""}</td><td>${employee.benefits || ""}</td><td>${yearsOfService(employee.startDate)}</td></tr>
          `))}
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
      </div>
      <div class="split">
        <form class="panel" data-action="add-payroll">
          <div class="panel-head"><h3>New payroll line</h3></div>
          <div class="form-grid">
            ${input("period", "Payroll period", "text", "2026-07-16 to 2026-07-31")}
            ${employeeSelect("employeeId")}
            ${input("basicPay", "Basic pay", "number", "0", "0.01")}
            ${input("benefits", "Benefits", "number", "0", "0.01")}
            ${input("deductions", "Deductions", "number", "0", "0.01")}
            ${input("cashAdvanceDeduction", "Cash advance deduction", "number", "0", "0.01")}
            ${select("status", [["draft", "Draft"], ["approved", "Approved"], ["paid", "Paid"]])}
          </div>
          <button class="btn" type="submit" style="margin-top:12px">Calculate and save</button>
        </form>
        <div class="panel">
          <div class="panel-head"><h3>Payroll summary</h3><button class="btn secondary" data-export="payroll">Export CSV</button></div>
          ${table(["Period", "Employee", "Basic", "Benefits", "Deductions", "CA Deduction", "Net Pay", "Status"], state.payrollRuns.map((run) => `
            <tr><td>${run.period}</td><td>${employeeName(run.employeeId)}</td><td class="amount">${money(run.basicPay)}</td><td class="amount">${money(run.benefits)}</td><td class="amount">${money(run.deductions)}</td><td class="amount">${money(run.cashAdvanceDeduction)}</td><td class="amount">${money(run.netPay)}</td><td>${badge(run.status)}</td></tr>
          `))}
        </div>
      </div>
      <div class="split">
        <div class="panel">
          <div class="panel-head"><h3>Cash advances</h3></div>
          ${table(["Employee", "Date", "Amount", "Reason", "Balance", "Status"], state.cashAdvances.map((advance) => `
            <tr><td>${employeeName(advance.employeeId)}</td><td>${advance.date}</td><td class="amount">${money(advance.amount)}</td><td>${advance.reason}</td><td class="amount">${money(advance.balance)}</td><td>${badge(advance.status)}</td></tr>
          `))}
        </div>
      </div>
    </section>
  `);
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

  return page("Reports", "Filter by date and branch, export operational reports, and restrict income reports to admin users.", `
    <section class="grid">
      <div class="panel">
        <div class="panel-head"><h3>Filters</h3></div>
        <div class="form-grid">
          <label>From date<input data-report-filter="from" type="date" value="${filters.from}"></label>
          <label>To date<input data-report-filter="to" type="date" value="${filters.to}"></label>
          <label>Branch<select data-report-filter="branchId">
            ${isAdmin() ? `<option value="all" ${filters.branchId === "all" ? "selected" : ""}>All branches</option>` : ""}
            ${visibleBranches().map((branch) => `<option value="${branch.id}" ${filters.branchId === branch.id ? "selected" : ""}>${branch.name}</option>`).join("")}
          </select></label>
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
          ${table(["Date", "Branch", "Material", "Sales", "Estimated Cost", "Profit"], profitRows.map((tx) => `
            <tr><td>${tx.date}</td><td>${branchName(tx.branchId)}</td><td>${materialName(tx.materialId)}</td><td class="amount">${money(tx.total)}</td><td class="amount">${money(tx.cost)}</td><td class="amount">${money(tx.profit)}</td></tr>
          `))}
        </div>` : `<div class="notice">Income and profit reports are visible only to admin users.</div>`}
    </section>
  `);
}

function transactionReportTable(rows) {
  return table(["Date", "Branch", "Name", "Material", "Weight", "Price", "Total", "Payment"], rows.map((tx) => `
    <tr><td>${tx.date}</td><td>${branchName(tx.branchId)}</td><td>${partyName(tx.partyId)}</td><td>${materialName(tx.materialId)}</td><td class="num">${kg(tx.weight)}</td><td class="amount">${money(tx.price)}</td><td class="amount">${money(tx.total)}</td><td>${badge(tx.paymentStatus)}</td></tr>
  `));
}

function filteredReportTransactions() {
  const filters = state.reportFilters || { from: "", to: "", branchId: "all" };
  return branchFilter(state.transactions).filter((tx) => {
    const afterFrom = !filters.from || tx.date >= filters.from;
    const beforeTo = !filters.to || tx.date <= filters.to;
    const inBranch = filters.branchId === "all" || tx.branchId === filters.branchId;
    return afterFrom && beforeTo && inBranch;
  });
}

function inventoryRows() {
  return visibleBranches().flatMap((branch) => state.materials.map((material) => {
    const currentStockKg = stockFor(branch.id, material.id);
    return {
      branch: branch.name,
      material: material.name,
      category: material.category,
      unit: material.unit,
      currentStockKg,
      buyingPricePerKilo: material.buyPrice,
      sellingPricePerKilo: material.sellPrice,
      estimatedValue: currentStockKg * material.sellPrice,
    };
  }));
}

function usersView() {
  const editingUser = state.users.find((user) => user.id === state.editingUserId) || null;
  return page("Users", "Admin user management for role-based access and branch assignment.", `
    <section class="split">
      ${userForm(editingUser)}
      <div class="panel">
        ${table(["Action", "Name", "Email", "Role", "Branch", "Status"], state.users.map((user) => `
          <tr class="${state.editingUserId === user.id ? "row-editing" : ""}"><td><button class="btn secondary" data-edit-user="${user.id}">Edit</button> <button class="btn danger" data-delete-user="${user.id}">Delete</button></td><td>${user.name}</td><td>${user.email}</td><td>${roles[user.role]}</td><td>${branchName(user.branchId)}</td><td>${badge(user.status)}</td></tr>
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
        ${select("role", [["staff", "Branch Staff"], ["payroll", "Payroll/Admin Staff"], ["admin", "Admin"]], user?.role)}
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
  const options = `${includeBlank ? `<option value="" ${selectedValue === "" ? "selected" : ""}>External/no receiving branch</option>` : ""}${visibleBranches().map((branch) => `<option value="${branch.id}" ${selectedValue === branch.id ? "selected" : ""}>${branch.name}</option>`).join("")}`;
  return `<label>${labelText}<select name="${name}">${options}</select></label>`;
}

function partySelect(name, selectedValue = "") {
  return `<label>Customer or supplier<select name="${name}">${state.parties.filter((party) => party.status === "active").map((party) => `<option value="${party.id}" ${selectedValue === party.id ? "selected" : ""}>${party.name} (${party.type})</option>`).join("")}</select></label>`;
}

function materialSelect(name, selectedValue = "", required = true) {
  const blank = required ? "" : `<option value="">No material</option>`;
  return `<label>Scrap material<select name="${name}" ${required ? "required" : ""}>${blank}${state.materials.filter((material) => material.status === "active").map((material) => `<option value="${material.id}" ${selectedValue === material.id ? "selected" : ""}>${material.name}</option>`).join("")}</select></label>`;
}

function employeeSelect(name) {
  return `<label>Employee<select name="${name}">${state.employees.map((employee) => `<option value="${employee.id}">${employee.name}</option>`).join("")}</select></label>`;
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

  document.querySelectorAll("[data-action='start-camera']").forEach((button) => {
    button.addEventListener("click", () => startAttendanceCamera());
  });

  document.querySelectorAll("[data-action='capture-photo']").forEach((button) => {
    button.addEventListener("click", () => captureAttendancePhoto());
  });

  document.querySelectorAll("[data-photo-file]").forEach((inputEl) => {
    inputEl.addEventListener("change", () => loadAttendancePhotoFile(inputEl));
  });

  document.querySelectorAll("[data-transaction-form]").forEach((form) => {
    const update = (event) => updateTransactionAmounts(form, event?.target);
    form.querySelectorAll("input, select").forEach((field) => field.addEventListener("input", update));
    form.querySelectorAll("select").forEach((field) => field.addEventListener("change", update));
    updateTransactionAmounts(form);
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
    "add-transaction": addTransaction,
    "update-transaction": updateTransaction,
    "add-adjustment": addAdjustment,
    "add-delivery": addDelivery,
    "update-delivery": updateDelivery,
    "add-party": addParty,
    "update-party": updateParty,
    "add-material": addMaterial,
    "update-material": updateMaterial,
    "add-branch": addBranch,
    "add-payroll": addPayroll,
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
  const delivery = deliveryValues(data);
  if (!delivery) return;
  state.deliveries.push(delivery);
  applyDeliveryStockMovements(delivery);
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

function deliveryValues(data, existing = null) {
  const lines = deliveryFormLines(data);
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

function addBranch(data) {
  state.branches.push({ id: id("b"), ...data });
  saveState();
  render();
}

function addPayroll(data) {
  const basicPay = Number(data.basicPay);
  const benefits = Number(data.benefits);
  const deductions = Number(data.deductions);
  const cashAdvanceDeduction = Number(data.cashAdvanceDeduction);
  state.payrollRuns.push({ id: id("pr"), period: data.period, employeeId: data.employeeId, basicPay, benefits, deductions, cashAdvanceDeduction, netPay: basicPay + benefits - deductions - cashAdvanceDeduction, status: data.status });
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
    transactions: state.transactions,
    purchases: reportTransactions.filter((tx) => tx.type === "purchase"),
    sales: reportTransactions.filter((tx) => tx.type === "sale"),
    deliveries: deliveryRecordRows(),
    payroll: state.payrollRuns,
    inventory: inventoryRows(),
    income: reportTransactions.filter((tx) => tx.type === "sale").map((tx) => {
      const material = state.materials.find((item) => item.id === tx.materialId);
      return { date: tx.date, branch: branchName(tx.branchId), material: materialName(tx.materialId), sales: tx.total, cost: tx.weight * (material?.buyPrice || 0), profit: tx.total - tx.weight * (material?.buyPrice || 0) };
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
    inventory: ["branch", "material", "category", "unit", "currentStockKg", "buyingPricePerKilo", "sellingPricePerKilo", "estimatedValue"],
    deliveries: ["deliveryNumber", "date", "sourceBranch", "destination", "truck", "driver", "material", "loadedWeightKg", "deliveredWeightKg", "status", "notes"],
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
