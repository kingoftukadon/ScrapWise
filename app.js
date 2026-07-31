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
  attendance: "clipboard",
  reviewAttendance: "clipboard",
  cashOperation: "wallet",
  transactions: "plus",
  inventory: "boxes",
  deliveries: "truck",
  parties: "users",
  materials: "tag",
  branches: "building",
  destinations: "truck",
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
  reportTab: "summary",
  transactionTab: "walk_in",
  inventoryFilters: { materialId: "all", branchId: "all" },
  inventoryTab: "position",
  deliveryFilters: { status: "all", driver: "all", truck: "all", sourceBranchId: "all" },
  cashOperationTab: "starting",
  payrollTab: "summary",
  editingTransactionId: null,
  editingReceiptGroupId: null,
  editingPartyId: null,
  editingDeliveryId: null,
  editingMaterialId: null,
  editingUserId: null,
  editingBranchId: null,
  editingDestinationId: null,
  editingAttendanceId: null,
  editingEmployeeId: null,
  editingPayrollId: null,
  editingCashAdvanceId: null,
  repeatTransactionPartyId: "",
  repeatTransactionReceiptNumber: "",
  repeatTransactionReceiptGroupId: "",
  selectedTransactionPartyId: "",
  repeatDeliveryId: "",
  cashOperationDate: today(),
  cashOperationBranchId: "",
  attendanceDate: today(),
  attendanceBranchId: "",
  reviewAttendanceFilters: { branchId: "all", from: monthStart(), to: today() },
  attendanceRecords: [],
  cashMovements: [],
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
    { id: "walk-in", type: "supplier", name: "Walk In", contact: "", address: "", notes: "Default walk-in transaction contact", status: "active" },
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
    { id: "t1", number: "TRX-0001", date: today(), branchId: "b1", type: "purchase", partyId: "p1", materialId: "m1", weight: 120, price: 8, basePrice: 8, demandPrice: "", total: 960, paymentStatus: "paid", paid: 960, balance: 0, notes: "Morning intake", createdBy: "u2" },
    { id: "t2", number: "TRX-0002", date: today(), branchId: "b1", type: "sale", partyId: "p2", materialId: "m1", weight: 55, price: 12, basePrice: 12, demandPrice: "", total: 660, paymentStatus: "partial", paid: 400, balance: 260, notes: "Buyer pickup", createdBy: "u2" },
    { id: "t3", number: "TRX-0003", date: today(), branchId: "b2", type: "purchase", partyId: "p1", materialId: "m2", weight: 18, price: 320, basePrice: 320, demandPrice: "", total: 5760, paymentStatus: "unpaid", paid: 0, balance: 5760, notes: "For sorting", createdBy: "u1" },
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
  destinations: [
    { id: "dst1", name: "Metro Recycling Buyer", type: "buyer", contact: "0918 200 0012", address: "Industrial Zone", notes: "External scrap buyer", status: "active" },
    { id: "dst2", name: "Central Warehouse", type: "warehouse", contact: "0917 300 0001", address: "Central Processing Yard", notes: "Bulk delivery point", status: "active" },
  ],
  employees: [
    { id: "e1", name: "Pedro Reyes", branchId: "b1", position: "Sorter", salaryType: "daily", rate: 550, sssNo: "34-1234567-8", pagibigNo: "1212-3456-7890", benefits: "Rice allowance, meal allowance", startDate: "2023-03-15", status: "active" },
    { id: "e2", name: "Ana Cruz", branchId: "b2", position: "Cashier", salaryType: "monthly", rate: 18000, sssNo: "34-7654321-0", pagibigNo: "9876-5432-1011", benefits: "SSS, PhilHealth, Pag-IBIG", startDate: "2021-08-01", status: "active" },
  ],
  cashAdvances: [
    { id: "ca1", employeeId: "e1", date: today(), amount: 1000, reason: "Emergency", totalDeduction: 400, balance: 600, status: "active" },
  ],
  payrollRuns: [
    { id: "pr1", period: "2026-07-01 to 2026-07-15", employeeId: "e1", basicPay: 6600, benefits: 300, deductions: 200, cashAdvanceDeduction: 400, netPay: 6300, status: "approved" },
  ],
};

let state = loadState();

function today() {
  return new Date().toISOString().slice(0, 10);
}

function monthStart(dateValue = today()) {
  return `${dateValue.slice(0, 7)}-01`;
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return normalizeState(structuredClone(seedState));
  const parsed = JSON.parse(saved);
  return normalizeState({
    ...structuredClone(seedState),
    ...parsed,
    reportFilters: { ...seedState.reportFilters, ...(parsed.reportFilters || {}) },
    inventoryFilters: { ...seedState.inventoryFilters, ...(parsed.inventoryFilters || {}) },
    language: parsed.language || "en",
    cashOperationDate: parsed.cashOperationDate || today(),
    cashOperationBranchId: parsed.cashOperationBranchId || "",
    attendanceDate: parsed.attendanceDate || today(),
    attendanceBranchId: parsed.attendanceBranchId || "",
    reviewAttendanceFilters: { branchId: "all", from: monthStart(), to: today(), ...(parsed.reviewAttendanceFilters || {}) },
    attendanceRecords: parsed.attendanceRecords || [],
    cashMovements: parsed.cashMovements || [],
    dailyCapitals: parsed.dailyCapitals || [],
    destinations: parsed.destinations || seedState.destinations,
    cashAdvances: (parsed.cashAdvances || seedState.cashAdvances).map((advance) => {
      const amount = Number(advance.amount || 0);
      const inferredDeduction = Math.max(amount - Number(advance.balance || 0), 0);
      const totalDeduction = advance.totalDeduction == null ? inferredDeduction : Number(advance.totalDeduction || 0);
      return {
        ...advance,
        totalDeduction,
        balance: Math.max(amount - totalDeduction, 0),
      };
    }),
    parties: parsed.parties || seedState.parties,
    transactions: parsed.transactions || seedState.transactions,
    employees: (parsed.employees || seedState.employees).map((employee) => ({
      sssNo: "",
      pagibigNo: "",
      benefits: "",
      startDate: "",
      ...employee,
    })),
  });
}

function normalizeState(nextState) {
  const parties = ensureWalkInParty(nextState.parties || []);
  const walkInPartyId = parties.find((party) => party.status === "active" && party.name?.trim().toLowerCase() === "walk in")?.id || "";
  const receiptGroups = {};
  return {
    ...nextState,
    parties,
    editingReceiptGroupId: nextState.editingReceiptGroupId || null,
    selectedTransactionPartyId: nextState.repeatTransactionPartyId ? nextState.selectedTransactionPartyId : walkInPartyId,
    repeatTransactionReceiptNumber: nextState.repeatTransactionReceiptNumber || "",
    repeatTransactionReceiptGroupId: nextState.repeatTransactionReceiptGroupId || "",
    transactionTab: nextState.transactionTab || "walk_in",
    deliveries: (nextState.deliveries || []).map((delivery) => ({
      ...delivery,
      lines: deliveryLines(delivery).map((line) => ({
        ...line,
        actualSoldCost: Number(line.actualSoldCost || 0),
      })),
    })),
    transactions: (nextState.transactions || []).map((transaction) => {
      const receiptNumber = transaction.receiptNumber || "";
      const receiptKey = `${transaction.date || ""}|${receiptNumber.trim().toLowerCase()}`;
      const receiptGroupId = receiptKey
        ? receiptGroups[receiptKey] || `${transaction.date || "no-date"}:${transaction.receiptGroupId || receiptNumber}`
        : transaction.receiptGroupId || transaction.number;
      if (receiptKey) receiptGroups[receiptKey] = receiptGroupId;
      return {
        ...transaction,
        basePrice: transaction.basePrice ?? transaction.price ?? 0,
        demandPrice: transaction.demandPrice ?? "",
        receiptNumber,
        receiptGroupId,
      };
    }),
  };
}

function ensureWalkInParty(parties = []) {
  const hasWalkIn = parties.some((party) => party.id === "walk-in" || party.name?.trim().toLowerCase() === "walk in");
  if (hasWalkIn) return parties;
  return [
    { id: "walk-in", type: "supplier", name: "Walk In", contact: "", address: "", notes: "Default walk-in transaction contact", status: "active" },
    ...parties,
  ];
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

function hasDemandPrice(value) {
  return String(value ?? "").trim() !== "";
}

function transactionPrice(tx) {
  return hasDemandPrice(tx?.demandPrice) ? Number(tx.demandPrice || 0) : Number(tx?.price ?? tx?.basePrice ?? 0);
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
  if (user?.role === "admin") return state.branches.filter((branch) => branch.status === "active");
  return state.branches.filter((branch) => branch.id === branchId && branch.status === "active");
}

function defaultBranchId() {
  const user = currentUser();
  return user?.branchId || state.branches.find((branch) => branch.status === "active")?.id || state.branches[0]?.id || "";
}

function branchName(branchId) {
  return state.branches.find((branch) => branch.id === branchId)?.name || "Unknown branch";
}

function destinationContactName(destinationId) {
  return state.destinations?.find((destination) => destination.id === destinationId)?.name || "";
}

function deliveryDestinationName(delivery) {
  if (delivery.destinationContactId) return destinationContactName(delivery.destinationContactId) || delivery.destinationName || "External";
  if (delivery.destinationBranchId) return branchName(delivery.destinationBranchId);
  return delivery.destinationName || "External";
}

function materialName(materialId) {
  return state.materials.find((material) => material.id === materialId)?.name || "Unknown material";
}

function materialPrice(materialId, field = "sellPrice") {
  return Number(state.materials.find((material) => material.id === materialId)?.[field] || 0);
}

function deliveryLineEstimatedValue(line) {
  return Number(line.loadedWeight || 0) * materialPrice(line.materialId, "sellPrice");
}

function deliveryLineActualSoldCost(line) {
  return Number(line.actualSoldCost || 0);
}

function deliveryLineDiscrepancy(line) {
  return Number(line.deliveredWeight || 0) - Number(line.loadedWeight || 0);
}

function deliveryLineCalculatedLoss(line) {
  return Math.max(-deliveryLineDiscrepancy(line), 0) * materialPrice(line.materialId, "sellPrice");
}

function deliveryIsCompleted(delivery) {
  return delivery?.status === "completed";
}

function deliveryDiscrepancyDisplay(delivery, line) {
  return deliveryIsCompleted(delivery) ? kg(deliveryLineDiscrepancy(line)) : "-";
}

function deliveryTotalDiscrepancyDisplay(delivery, totals) {
  return deliveryIsCompleted(delivery) ? kg(totals.discrepancyWeight) : "-";
}

function deliveryCalculatedLossDisplay(delivery, line) {
  return deliveryIsCompleted(delivery) ? money(deliveryLineCalculatedLoss(line)) : "-";
}

function deliveryTotalCalculatedLossDisplay(delivery, totals) {
  return deliveryIsCompleted(delivery) ? money(totals.calculatedLoss) : "-";
}

function deliveryLoadTotals(lines) {
  return lines.reduce((totals, line) => ({
    loadedWeight: totals.loadedWeight + Number(line.loadedWeight || 0),
    deliveredWeight: totals.deliveredWeight + Number(line.deliveredWeight || 0),
    discrepancyWeight: totals.discrepancyWeight + deliveryLineDiscrepancy(line),
    estimatedValue: totals.estimatedValue + deliveryLineEstimatedValue(line),
    actualSoldCost: totals.actualSoldCost + deliveryLineActualSoldCost(line),
    calculatedLoss: totals.calculatedLoss + deliveryLineCalculatedLoss(line),
  }), { loadedWeight: 0, deliveredWeight: 0, discrepancyWeight: 0, estimatedValue: 0, actualSoldCost: 0, calculatedLoss: 0 });
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
  const branchIds = visibleBranches().map((branch) => branch.id);
  return records.filter((record) => branchIds.includes(record[field]));
}

function render() {
  const user = currentUser();
  document.getElementById("app").innerHTML = user ? shell(user) : loginView();
  bindEvents();
}

function loginView() {
  return `
    <section class="login-page">
      <div class="landing-wrap">
        <header class="landing-nav">
          <div class="landing-brand"><span class="brand-logo hero-logo">SW</span><span><strong>ScrapWise</strong><small>Turn every kilo into clear business insight.</small></span></div>
          <nav>
            <a href="#workflow">Workflow</a>
            <a href="#login">Login</a>
          </nav>
        </header>
        <div class="landing-shell">
          <section class="landing-copy">
            <span class="landing-kicker">Scraps inventory management</span>
            <h1>Control scrap buying, stock, deliveries, and payroll in one green workspace.</h1>
            <p>ScrapWise gives junkshop teams a clear daily view of materials, cash, customers, branch movement, and employee records without jumping between spreadsheets.</p>
            <div class="landing-actions">
              <a href="#login" class="btn hero-btn">Open operations</a>
              <span>Built for focused junkshop operations</span>
            </div>
            <div class="hero-metrics">
              ${metric("Inventory", "Live")}
              ${metric("Receipts", "Printable")}
              ${metric("Payroll", "Linked")}
            </div>
          </section>
          <div class="landing-visual" aria-hidden="true">
            <div class="visual-card visual-main">
              <div class="visual-head"><span></span><span></span><span></span></div>
              <h3>Scrap Operations Snapshot</h3>
              <div class="visual-row"><span>Plastic</span><strong>138 kg</strong></div>
              <div class="visual-row"><span>Copper</span><strong>PHP 6,720</strong></div>
              <div class="visual-row"><span>Truck load</span><strong>In transit</strong></div>
              <div class="visual-bars"><i></i><i></i><i></i><i></i></div>
            </div>
            <div class="visual-card visual-bin">
              <strong>SCRAP BIN</strong>
              <span>tracked</span>
            </div>
          </div>
          <form class="login-panel" id="login" data-action="login">
            <span class="login-eyebrow">Secure access</span>
            <h2>Welcome back</h2>
            <p>Sign in and ScrapWise will open the correct role access for admin, staff, or payroll users.</p>
            <label>Email or username<input name="email" value="admin@junkshop.local" autocomplete="username" required></label>
            <label>Password<input name="password" type="password" value="admin123" autocomplete="current-password" required></label>
            <button class="btn" type="submit">Log in</button>
          </form>
        </div>
        <section class="landing-workflow" id="workflow">
          <article><span>01</span><h3>Log scrap</h3><p>Record seller, material, kilo, price per demand, payment, and printable receipts.</p></article>
          <article><span>02</span><h3>Track value</h3><p>Monitor stock quantity, estimated value, locations, and material movement in real time.</p></article>
          <article><span>03</span><h3>Move loads</h3><p>Validate truck loads against available stock and review delivered weight discrepancies.</p></article>
          <article><span>04</span><h3>Close payroll</h3><p>Connect attendance and cash advances to payroll period calculations.</p></article>
        </section>
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
    ["branches", "Location Maintenance"],
    ["destinations", "Destination Maintenance"],
    ["employees", "Employee Maintenance"],
    ["payroll", "Payroll"],
    ["reports", "Reports"],
    ["users", "Users"],
  ].filter(([view]) => {
    if (["users", "materials", "branches", "destinations"].includes(view)) return isAdmin();
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
    branches: branchesView,
    destinations: destinationsView,
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
  const monthRange = currentMonthRange();
  const monthlyTransactions = transactions.filter((tx) => tx.date >= monthRange.start && tx.date <= monthRange.end);
  const stockRows = stockPositionRows();
  const inventoryValue = stockRows.reduce((sum, row) => sum + row.estimatedValue, 0);
  const monthlyPurchases = totalByType(monthlyTransactions, "purchase");
  const monthlySales = totalByType(monthlyTransactions, "sale");
  const pending = transactions.reduce((sum, tx) => sum + Number(tx.balance || 0), 0);
  const monthlyProfit = profitFor(monthlyTransactions);

  return page("Dashboard", "Monthly and weekly KPI view for buying, selling, stock, deliveries, and cash.", `
    <section class="dashboard-hero inventory-hero">
      <div>
        <span class="dash-eyebrow">ScrapWise inventory command center</span>
        <h1>Scraps Inventory Management</h1>
        <p>Generated from buying, selling, stock movement, and truck delivery records.</p>
        <div class="hero-flow">
          <span>Maintenance & operation</span>
          <strong></strong>
          <span>Asset-level scrap tracking</span>
        </div>
      </div>
      <div class="scrap-scene" aria-hidden="true">
        <div class="robot-arm"><span></span></div>
        <div class="scrap-parts">
          <i></i><i></i><i></i><i></i><i></i>
        </div>
        <div class="scrap-bin">
          <strong>SCRAP BIN</strong>
          <span>recycle</span>
        </div>
      </div>
    </section>

    <section class="scrap-pipeline">
      <div class="pipeline-title"><span></span><h3>Operations Snapshot</h3><span></span></div>
      <div class="pipeline-grid">
        ${pipelineCard("Purchases", "blue", [["Total purchases", money(monthlyPurchases)], ["Weight bought", kg(weightByType(monthlyTransactions, "purchase"))], ["Purchase lines", `${monthlyTransactions.filter((tx) => tx.type === "purchase").length} records`]])}
        ${pipelineCard("Sales", "orange", [["Total sales", money(monthlySales)], ["Weight sold", kg(weightByType(monthlyTransactions, "sale"))], ["Sale lines", `${monthlyTransactions.filter((tx) => tx.type === "sale").length} records`]])}
        ${pipelineCard("Gross profit", "green", [["Amount", money(monthlyProfit)], ["View", isAdmin() ? "Admin-visible income view" : "Estimated income"], ["Period", monthRange.label]])}
        ${pipelineCard("Inventory value", "navy", [["Value", money(inventoryValue)], ["Stock rows", `${stockRows.length} stock rows`], ["Location", "All visible branches"]])}
        ${pipelineCard("Pending payments", "orange", [["Balance", money(pending)], ["Status", "Open balances"], ["Records", `${transactions.filter((tx) => Number(tx.balance || 0) > 0).length} pending`]])}
      </div>
    </section>

    <section class="dash-chart-row">
      <div class="dash-panel funnel-panel">
        <div class="panel-head"><h3>Material movement funnel</h3><span class="mini-label">This month</span></div>
        ${materialFunnel(materialMovement(monthlyTransactions))}
      </div>
      <div class="dash-panel">
        <div class="panel-head"><h3>Stock value by material</h3><span class="mini-label">Current</span></div>
        ${stockValueChart()}
      </div>
    </section>
  `);
}

function pipelineCard(title, tone, rows) {
  return `
    <article class="pipeline-card ${tone}">
      <h4>${title}</h4>
      <div>${rows.map(([label, value]) => `<p><span>${label}</span><strong>${value}</strong></p>`).join("")}</div>
    </article>
  `;
}

function metric(label, value) {
  return `<div class="card"><span class="label">${t(label)}</span><span class="value">${value}</span></div>`;
}

function materialMovement(transactions = branchFilter(state.transactions)) {
  return state.materials.map((material) => {
    const total = transactions
      .filter((tx) => tx.materialId === material.id)
      .reduce((sum, tx) => sum + tx.weight, 0);
    return { label: material.name, value: total };
  }).sort((a, b) => b.value - a.value);
}

function currentMonthRange() {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return {
    start: isoDate(start),
    end: isoDate(end),
    label: now.toLocaleString("en-PH", { month: "long", year: "numeric" }),
  };
}

function lastNDates(count) {
  const dates = [];
  const base = new Date(today());
  for (let index = count - 1; index >= 0; index -= 1) {
    const date = new Date(base);
    date.setDate(base.getDate() - index);
    dates.push(isoDate(date));
  }
  return dates;
}

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

function totalByType(transactions, type) {
  return transactions.filter((tx) => tx.type === type).reduce((sum, tx) => sum + Number(tx.total || 0), 0);
}

function weightByType(transactions, type) {
  return transactions.filter((tx) => tx.type === type).reduce((sum, tx) => sum + Number(tx.weight || 0), 0);
}

function profitFor(transactions) {
  return transactions.reduce((sum, tx) => {
    const material = state.materials.find((item) => item.id === tx.materialId);
    if (tx.type !== "sale" || !material) return sum;
    return sum + Number(tx.weight || 0) * (Number(tx.price || 0) - Number(material.buyPrice || 0));
  }, 0);
}

function materialFunnel(rows) {
  const filtered = rows.filter((row) => row.value > 0).slice(0, 5);
  const source = filtered.length ? filtered : rows.slice(0, 4);
  const max = Math.max(...source.map((row) => row.value), 1);
  return `<div class="funnel">${source.map((row, index) => `
    <div class="funnel-row" style="--w:${Math.max(34, (row.value / max) * 100)}%;--c:${index}">
      <strong>${kg(row.value)}</strong><span>${row.label}</span>
    </div>
  `).join("")}</div>`;
}

function weeklyPurchaseSalesChart(dates, transactions) {
  const rows = dates.map((date) => ({
    date,
    purchases: totalByType(transactions.filter((tx) => tx.date === date), "purchase"),
    sales: totalByType(transactions.filter((tx) => tx.date === date), "sale"),
  }));
  const max = Math.max(...rows.flatMap((row) => [row.purchases, row.sales]), 1);
  return `<div class="combo-chart">${rows.map((row) => `
    <div class="combo-day">
      <div class="combo-bars">
        <span class="purchase" style="height:${Math.max(4, (row.purchases / max) * 100)}%"></span>
        <span class="sale" style="height:${Math.max(4, (row.sales / max) * 100)}%"></span>
      </div>
      <small>${row.date.slice(5)}</small>
    </div>
  `).join("")}</div><div class="chart-legend"><span class="purchase"></span> Purchases <span class="sale"></span> Sales</div>`;
}

function weeklyCountChart(dates, transactions) {
  const rows = dates.map((date) => ({
    date,
    value: transactions.filter((tx) => tx.date === date).length,
  }));
  const max = Math.max(...rows.map((row) => row.value), 1);
  return `<div class="line-bars">${rows.map((row) => `
    <div><span style="height:${Math.max(8, (row.value / max) * 100)}%"></span><strong>${row.value}</strong><small>${row.date.slice(5)}</small></div>
  `).join("")}</div>`;
}

function stockValueChart() {
  const rows = state.materials.map((material) => {
    const value = visibleBranches().reduce((sum, branch) => sum + stockFor(branch.id, material.id) * material.sellPrice, 0);
    return { label: material.name, value };
  }).sort((a, b) => b.value - a.value);
  const max = Math.max(...rows.map((row) => row.value), 1);
  return `<div class="stock-value-chart">${rows.map((row) => `
    <div class="stock-value-row"><strong>${row.label}</strong><div><span style="width:${Math.max(4, (row.value / max) * 100)}%"></span></div><em>${money(row.value)}</em></div>
  `).join("")}</div>`;
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
  const rows = stockPositionRows().map((row) => `<tr><td>${row.material}</td><td class="num">${kg(row.currentStockKg)}</td><td class="amount">${money(row.estimatedValue)}</td><td>${row.location}</td></tr>`);
  return table(["Material", "Current Stock", "Estimated Value", "Location"], rows);
}

function stockPositionRows(filters = null) {
  const filterValues = filters || { materialId: "all", branchId: "visible" };
  const branches = filterValues.branchId === "all"
    ? state.branches
    : filterValues.branchId === "visible"
      ? visibleBranches()
      : state.branches.filter((branch) => branch.id === filterValues.branchId);
  const materials = filterValues.materialId === "all"
    ? state.materials
    : state.materials.filter((material) => material.id === filterValues.materialId);
  return branches.flatMap((branch) => materials.map((material) => {
    const currentStockKg = stockFor(branch.id, material.id);
    return {
      branchId: branch.id,
      materialId: material.id,
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

function capitalFor(branchId, date = today()) {
  return state.dailyCapitals
    .filter((capital) => capital.branchId === branchId && capital.date === date)
    .reduce((sum, capital) => sum + Number(capital.openingCash ?? capital.amount ?? 0), 0);
}

function cashPosition(branchId, date = today()) {
  const transactions = state.transactions.filter((tx) => tx.branchId === branchId && tx.date === date);
  const cashRecord = cashOperationRecord(branchId, date);
  const capital = capitalFor(branchId, date);
  const paidIn = cashMovementTotal(branchId, date, "paid_in") + Number(cashRecord?.paidIn || 0);
  const paidOut = cashMovementTotal(branchId, date, "paid_out") + Number(cashRecord?.paidOut || 0);
  const cashSpent = transactions.filter((tx) => tx.type === "purchase").reduce((sum, tx) => sum + Number(tx.paid || 0), 0);
  const cashReceived = transactions.filter((tx) => tx.type === "sale").reduce((sum, tx) => sum + Number(tx.paid || 0), 0);
  const expectedCash = capital + paidIn - paidOut - cashSpent + cashReceived;
  const closeCash = cashRecord?.closeCash === "" || cashRecord?.closeCash == null ? null : Number(cashRecord.closeCash);
  return {
    capital,
    paidIn,
    paidOut,
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
  const selected = state.cashOperationBranchId;
  const visible = visibleBranches();
  return visible.some((branch) => branch.id === selected) ? selected : defaultBranchId();
}

function cashOperationRecord(branchId, date = today()) {
  return state.dailyCapitals.find((capital) => capital.branchId === branchId && capital.date === date) || null;
}

function isCashOperationClosed(record) {
  return Boolean(record?.status === "closed" || (record?.closeCash !== "" && record?.closeCash != null));
}

function cashMovementTotal(branchId, date, type) {
  return state.cashMovements
    .filter((movement) => movement.branchId === branchId && movement.date === date && movement.type === type)
    .reduce((sum, movement) => sum + Number(movement.amount || 0), 0);
}

function cashMovementsFor(branchId, date = today()) {
  return state.cashMovements.filter((movement) => movement.branchId === branchId && movement.date === date);
}

function attendanceView() {
  const branchId = currentAttendanceBranchId();
  const date = state.attendanceDate || today();
  const employees = employeesForBranch(branchId);
  const records = attendanceRecordsFor(branchId, date);
  const editingRecord = state.attendanceRecords.find((record) => record.id === state.editingAttendanceId) || null;
  return page("Attendance", "Admin-managed employee time in and time out by branch location.", `
    <section class="grid">
      ${attendanceForm(branchId, date, employees, editingRecord)}
      ${attendanceCashAdvancePanel(branchId, date, employees)}
      <div class="panel">
        <div class="panel-head"><h3>Employees in this branch</h3><span class="mini-label">${branchName(branchId)}</span></div>
        ${table(["Employee", "Position", "Rate", "Status"], employees.map((employee) => `
          <tr><td>${employee.name}</td><td>${employee.position}</td><td class="amount">${money(employee.rate)}</td><td>${attendanceStatusFor(employee.id, records)}</td></tr>
        `))}
      </div>
      <div class="panel">
        <div class="panel-head"><h3>Attendance records</h3><span class="mini-label">${date}</span></div>
        ${attendanceTable(records)}
      </div>
    </section>
  `);
}

function currentAttendanceBranchId() {
  const selected = state.attendanceBranchId;
  const visible = visibleBranches();
  return visible.some((branch) => branch.id === selected) ? selected : defaultBranchId();
}

function employeesForBranch(branchId) {
  return state.employees.filter((employee) => employee.branchId === branchId && employee.status === "active");
}

function attendanceRecordsFor(branchId, date) {
  return state.attendanceRecords.filter((record) => record.branchId === branchId && record.date === date);
}

function attendanceStatusFor(employeeId, records) {
  const record = records.find((item) => item.employeeId === employeeId || item.userId === employeeId);
  if (!record) return badge("off duty");
  return badge(record.clockOutAt ? "completed" : "active");
}

function attendanceForm(branchId, date, employees, record = null) {
  const formBranchId = record?.branchId || branchId;
  const formDate = record?.date || date;
  const formEmployees = employeesForBranch(formBranchId);
  return `
    <form class="panel" data-action="save-attendance">
      <div class="panel-head">
        <h3>${record ? `Edit attendance - ${employeeName(record.employeeId)}` : "Add attendance"}</h3>
        ${record ? `<button class="btn secondary" type="button" data-action="cancel-attendance-edit">Cancel edit</button>` : ""}
      </div>
      ${record ? `<input type="hidden" name="id" value="${record.id}">` : ""}
      <div class="form-grid">
        <label>Date<input type="date" name="date" value="${formDate}" required data-attendance-date></label>
        ${attendanceBranchSelect(formBranchId)}
        ${attendanceEmployeeSelect(formEmployees, record?.employeeId)}
        <label>Time in<input name="timeIn" type="time" value="${timeInputValue(record?.clockInAt)}" required></label>
        <label>Time out<input name="timeOut" type="time" value="${timeInputValue(record?.clockOutAt)}"></label>
        ${select("status", [["active", "On duty"], ["completed", "Completed"]], record?.clockOutAt ? "completed" : "active")}
      </div>
      <label style="margin-top:10px">Notes<textarea name="notes" placeholder="Optional attendance notes">${record?.notes || ""}</textarea></label>
      <button class="btn" type="submit" style="margin-top:12px">${record ? "Save changes" : "Save attendance"}</button>
    </form>
  `;
}

function attendanceCashAdvancePanel(branchId, date, employees) {
  const employeeIds = employees.map((employee) => employee.id);
  const advances = state.cashAdvances
    .filter((advance) => employeeIds.includes(advance.employeeId) && advance.date === date)
    .slice()
    .reverse();
  return `
    <form class="panel" data-action="add-cash-advance">
      <div class="panel-head">
        <h3>Cash advance before time out</h3>
        <span class="mini-label">${branchName(branchId)} - ${date}</span>
      </div>
      <div class="form-grid">
        ${attendanceEmployeeSelect(employees)}
        ${dateInput("date", date)}
        ${input("amount", "Amount", "number", "", "0.01")}
        ${input("reason", "Reason", "text")}
        ${select("status", [["active", "Active"], ["fully_deducted", "Fully deducted"], ["cancelled", "Cancelled"]], "active")}
      </div>
      <button class="btn" type="submit" style="margin-top:12px">Save cash advance</button>
      <div style="margin-top:14px">
        <div class="mini-label">Cash advances recorded today</div>
        ${advances.length ? table(["Employee", "Amount", "Reason", "Status"], advances.map((advance) => `
          <tr><td>${employeeName(advance.employeeId)}</td><td class="amount">${money(advance.amount)}</td><td>${advance.reason || ""}</td><td>${badge(advance.status)}</td></tr>
        `)) : `<div class="notice">No cash advances recorded for this branch date.</div>`}
      </div>
    </form>
  `;
}

function attendanceEmployeeSelect(employees, selectedValue = "") {
  const options = employees.length
    ? employees.map((employee) => `<option value="${employee.id}" ${selectedValue === employee.id ? "selected" : ""}>${employee.name} - ${employee.position}</option>`).join("")
    : `<option value="">No active employees in this branch</option>`;
  return `<label>Employee<select name="employeeId" required>${options}</select></label>`;
}

function attendanceBranchSelect(selectedValue = "") {
  const branches = visibleBranches();
  if (branches.length <= 1 && !isAdmin()) {
    return `<input type="hidden" name="branchId" value="${selectedValue || defaultBranchId()}">`;
  }
  return `<label>Branch<select name="branchId" required data-attendance-branch>${branches.map((branch) => `<option value="${branch.id}" ${(selectedValue || defaultBranchId()) === branch.id ? "selected" : ""}>${branch.name}</option>`).join("")}</select></label>`;
}

function cashOperationView() {
  const branchId = currentCapitalBranchId();
  const selectedDate = state.cashOperationDate || today();
  const savedRecord = cashOperationRecord(branchId, selectedDate);
  const operationClosed = isCashOperationClosed(savedRecord);
  const record = operationClosed ? null : savedRecord;
  const position = record ? cashPosition(branchId, selectedDate) : emptyCashPosition();
  const openingStarted = position.capital > 0 || Boolean(record);
  const cashMovementEnabled = openingStarted && !operationClosed;
  const cashMovements = record ? cashMovementsFor(branchId, selectedDate) : [];
  const activeTab = state.cashOperationTab || "starting";
  return page("Cash Operation", "Input opening cash, add paid in/out cash movements, close cash at end of day, and tally sales and expenses.", `
    <section class="grid">
      <div class="panel">
        <div class="panel-head"><h3>Cash Operation workspace</h3><span class="mini-label">${branchName(branchId)} - ${selectedDate}</span></div>
        <div class="tab-row">
          ${cashOperationTabButton("starting", "Starting amount", activeTab)}
          ${cashOperationTabButton("paid_in", "Paid in", activeTab)}
          ${cashOperationTabButton("paid_out", "Paid out", activeTab)}
          ${cashOperationTabButton("movement_history", "Paid in / paid out history", activeTab)}
          ${cashOperationTabButton("operational_history", "Operational history", activeTab)}
        </div>
        ${activeTab === "starting" ? `
          <section class="cash-tab-grid">
            ${startingAmountForm(record, branchId, selectedDate, operationClosed)}
            ${closeOperationForm(record, branchId, selectedDate, position, openingStarted, operationClosed)}
          </section>
        ` : ""}
        ${activeTab === "paid_in" ? cashMovementForm("paid_in", branchId, selectedDate, cashMovementEnabled, operationClosed) : ""}
        ${activeTab === "paid_out" ? cashMovementForm("paid_out", branchId, selectedDate, cashMovementEnabled, operationClosed) : ""}
        ${activeTab === "movement_history" ? cashMovementHistoryTable(cashMovements) : ""}
        ${activeTab === "operational_history" ? cashOperationalHistory(branchId) : ""}
      </div>
    </section>
  `);
}

function cashOperationTabButton(tab, label, activeTab) {
  return `<button class="${activeTab === tab ? "active" : ""}" data-cash-operation-tab="${tab}">${label}</button>`;
}

function cashMovementHistoryTable(cashMovements) {
  return table(["Date", "Type", "Amount", "Notes", "User"], cashMovements.slice().reverse().map((movement) => `
    <tr><td>${movement.date}</td><td>${badge(movement.type)}</td><td class="amount">${money(movement.amount)}</td><td>${movement.notes || ""}</td><td>${operatorName(movement.createdBy)}</td></tr>
  `));
}

function emptyCashPosition() {
  return {
    capital: 0,
    paidIn: 0,
    paidOut: 0,
    cashSpent: 0,
    cashReceived: 0,
    remaining: 0,
    expectedCash: 0,
    closeCash: null,
    variance: null,
    record: null,
  };
}

function cashOperationDateInput(selectedDate) {
  return `<label>Operation date<input type="date" name="date" value="${selectedDate}" required data-cash-operation-date></label>`;
}

function startingAmountForm(record, branchId, selectedDate, operationClosed = false) {
  const openingCash = record?.openingCash ?? record?.amount ?? "";
  return `
    <form class="panel shift-card starting-card" data-action="save-cash-operation">
      <div class="panel-head"><h3>Starting amount</h3><span class="shift-status">${operationClosed ? "Closed" : record ? "Opened" : "Before operation"}</span></div>
      <p class="shift-copy">Specify cash amount at the beginning of operation.</p>
      ${cashOperationDateInput(selectedDate)}
      ${branchSelect("branchId", "Branch", false, record?.branchId || branchId)}
      <input type="hidden" name="closeCash" value="${record?.closeCash ?? ""}">
      <label>Amount<input class="cash-amount-input" name="openingCash" type="number" value="${openingCash}" step="0.01" min="0" required></label>
      <label style="margin-top:10px">Notes<textarea name="notes" placeholder="Opening fund notes">${record?.notes || ""}</textarea></label>
      <button class="btn shift-action" type="submit">${record ? "Update starting amount" : "Open operation"}</button>
      ${operationClosed ? `<div class="notice" style="margin-top:12px">This operation is closed. Start a new record on the next operating day.</div>` : ""}
    </form>
  `;
}

function closeOperationForm(record, branchId, selectedDate, position, openingStarted, operationClosed = false) {
  return `
    <form class="panel shift-card" data-action="close-cash-operation">
      <div class="panel-head">
        <h3>Close operation</h3>
        <button class="btn secondary" type="button" data-print-cash-operation="${branchId}" data-print-cash-date="${selectedDate}">Print receipt</button>
      </div>
      ${cashOperationDateInput(selectedDate)}
      ${branchSelect("branchId", "Branch", false, record?.branchId || branchId)}
      <input type="hidden" name="openingCash" value="${record?.openingCash ?? record?.amount ?? 0}">
      <label style="margin-bottom:10px">Notes<textarea name="notes" placeholder="Add notes before saving this cash transaction" ${operationClosed ? "disabled" : ""}>${record?.notes || ""}</textarea></label>
      <label>Close cash<input class="cash-amount-input" name="closeCash" type="number" value="${record?.closeCash ?? ""}" step="0.01" min="0" required ${openingStarted && !operationClosed ? "" : "disabled"}></label>
      <div class="cash-lines">
        ${cashSummaryRows(position)}
      </div>
      <button class="btn shift-action" type="submit" ${openingStarted && !operationClosed ? "" : "disabled"}>${operationClosed ? "Operation closed" : "Close operation"}</button>
      ${openingStarted ? "" : `<div class="notice" style="margin-top:12px">Enter the starting amount first before closing the operation.</div>`}
      ${operationClosed ? `<div class="notice" style="margin-top:12px">Closed record saved for ${record?.date || today()}.</div>` : ""}
    </form>
  `;
}

function cashMovementForm(type, branchId, selectedDate, openingStarted, operationClosed = false) {
  const isPaidIn = type === "paid_in";
  return `
    <form class="panel" data-action="add-cash-movement">
      <div class="panel-head"><h3>${isPaidIn ? "Paid in" : "Paid out"}</h3></div>
      <input type="hidden" name="type" value="${type}">
      ${cashOperationDateInput(selectedDate)}
      ${branchSelect("branchId", "Branch", false, branchId)}
      ${numberInput("amount", "Amount", "0", "0.01", true)}
      <label style="margin-top:10px">Notes<textarea name="notes" placeholder="${isPaidIn ? "Example: additional fund" : "Example: cash expense"}" required ${operationClosed ? "disabled" : ""}></textarea></label>
      <button class="btn ${isPaidIn ? "" : "warning"}" type="submit" style="margin-top:12px" ${openingStarted ? "" : "disabled"}>${isPaidIn ? "Save paid in" : "Save paid out"}</button>
      ${operationClosed ? `<div class="notice" style="margin-top:12px">This operation is already closed.</div>` : openingStarted ? "" : `<div class="notice" style="margin-top:12px">Enter the starting amount first before adding cash movements.</div>`}
    </form>
  `;
}

function cashSummaryRows(position) {
  return [
    ["Shift beginning", timeLabel(new Date().toISOString())],
    ["Starting cash", money(position.capital)],
    ["Cash payments", money(position.cashReceived)],
    ["Cash purchases", money(position.cashSpent)],
    ["Paid in", money(position.paidIn)],
    ["Paid out", money(position.paidOut)],
    ["Expected amount of cash", money(position.expectedCash), true],
    ["Ending balance", position.closeCash == null ? "Not closed" : money(position.closeCash), true],
    ["Variance", position.variance == null ? "Not closed" : money(position.variance)],
  ].map(([label, value, strong]) => `<div class="cash-line ${strong ? "strong" : ""}"><span>${label}</span><strong>${value}</strong></div>`).join("");
}

function cashOperationalHistory(branchId) {
  const rows = state.dailyCapitals
    .filter((record) => record.branchId === branchId)
    .slice()
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
    .map((record) => {
      const position = cashPosition(record.branchId, record.date);
      const status = record.status === "closed" || position.closeCash != null ? "closed" : "open";
      return `
        <tr>
          <td><button class="btn secondary" data-print-cash-operation="${record.branchId}" data-print-cash-date="${record.date}">Print</button></td>
          <td>${record.date}</td>
          <td>${badge(status)}</td>
          <td class="amount">${money(position.capital)}</td>
          <td class="amount">${money(position.paidIn)}</td>
          <td class="amount">${money(position.paidOut)}</td>
          <td class="amount">${money(position.cashReceived)}</td>
          <td class="amount">${money(position.cashSpent)}</td>
          <td class="amount">${money(position.expectedCash)}</td>
          <td class="amount">${position.closeCash == null ? "" : money(position.closeCash)}</td>
          <td class="amount">${position.variance == null ? "" : money(position.variance)}</td>
          <td>${operatorName(record.closedBy || record.updatedBy || record.createdBy)}</td>
        </tr>
      `;
    });
  return table(["Action", "Date", "Status", "Starting", "Paid in", "Paid out", "Sales cash", "Purchase cash", "Expected", "Ending", "Variance", "User"], rows);
}

function reviewAttendanceView() {
  const filters = reviewAttendanceFilterValues();
  const records = reviewAttendanceRecords(filters);
  const branchLabel = filters.branchId === "all" ? "All branches" : branchName(filters.branchId);
  return page("Review Attendance", "List of employees on duty by branch and date range.", `
    <section class="grid">
      <div class="panel">
        <div class="panel-head"><h3>Filters</h3></div>
        <div class="form-grid">
          ${reviewAttendanceBranchSelect(filters.branchId)}
          <label>Date from<input type="date" value="${filters.from}" data-review-attendance-filter="from"></label>
          <label>Date to<input type="date" value="${filters.to}" data-review-attendance-filter="to"></label>
        </div>
      </div>
      <div class="panel">
      <div class="panel-head"><div><h3 class="danger-text">Employees on duty</h3><span class="mini-label">${branchLabel} | ${filters.from} to ${filters.to}</span></div><button class="btn secondary" data-export-excel="review-attendance">Download Excel</button></div>
      ${attendanceTable(records)}
      </div>
    </section>
  `);
}

function reviewAttendanceFilterValues() {
  const filters = state.reviewAttendanceFilters || { branchId: "all", from: monthStart(), to: today() };
  const branchIds = visibleBranches().map((branch) => branch.id);
  const branchId = filters.branchId === "all" || branchIds.includes(filters.branchId) ? filters.branchId : "all";
  return {
    branchId,
    from: filters.from || monthStart(),
    to: filters.to || today(),
  };
}

function reviewAttendanceBranchSelect(selectedValue = "all") {
  const branches = visibleBranches();
  return `<label>Branch<select data-review-attendance-filter="branchId"><option value="all" ${selectedValue === "all" ? "selected" : ""}>All branches</option>${branches.map((branch) => `<option value="${branch.id}" ${selectedValue === branch.id ? "selected" : ""}>${branch.name}</option>`).join("")}</select></label>`;
}

function reviewAttendanceRecords(filters) {
  const branchIds = visibleBranches().map((branch) => branch.id);
  return state.attendanceRecords
    .filter((record) => branchIds.includes(record.branchId))
    .filter((record) => filters.branchId === "all" || record.branchId === filters.branchId)
    .filter((record) => (!filters.from || record.date >= filters.from) && (!filters.to || record.date <= filters.to))
    .sort((a, b) => `${b.date}${b.clockInAt}`.localeCompare(`${a.date}${a.clockInAt}`));
}

function reviewAttendanceRows() {
  return reviewAttendanceRecords(reviewAttendanceFilterValues()).map((record) => {
    const hours = attendanceHours(record);
    return {
      date: record.date,
      employee: record.employeeName || employeeName(record.employeeId) || record.userName,
      branch: branchName(record.branchId),
      timeIn: timeOnlyLabel(record.clockInAt),
      timeOut: record.clockOutAt ? timeOnlyLabel(record.clockOutAt) : "",
      regularHours: hours.regular.toFixed(2),
      overtimeHours: hours.overtime.toFixed(2),
      status: record.clockOutAt ? "completed" : "on duty",
      notes: record.notes || "",
    };
  });
}

function attendanceTable(records) {
  return table(["Action", "Employee", "Branch", "Date", "Time In", "Time Out", "Regular Hours", "O.T Hours", "Status", "Notes"], records.slice().reverse().map((record) => {
    const hours = attendanceHours(record);
    return `
      <tr class="${state.editingAttendanceId === record.id ? "row-editing" : ""}">
        <td><button class="btn secondary" data-edit-attendance="${record.id}">Edit</button></td>
        <td>${record.employeeName || employeeName(record.employeeId) || record.userName}</td>
        <td>${branchName(record.branchId)}</td>
        <td>${record.date}</td>
        <td>${timeOnlyLabel(record.clockInAt)}</td>
        <td>${record.clockOutAt ? timeOnlyLabel(record.clockOutAt) : ""}</td>
        <td class="num">${hours.regular.toFixed(2)}</td>
        <td class="num">${hours.overtime.toFixed(2)}</td>
        <td>${badge(record.clockOutAt ? "completed" : "active")}</td>
        <td>${record.notes || ""}</td>
      </tr>
    `;
  }));
}

function activeAttendanceRecords() {
  return state.attendanceRecords.filter((record) => !record.clockOutAt);
}

function attendanceDateTime(date, time) {
  return time ? `${date}T${time}:00` : "";
}

function attendanceHours(record) {
  if (!record?.clockInAt || !record?.clockOutAt) return { gross: 0, paid: 0, regular: 0, overtime: 0 };
  const gross = Math.max((new Date(record.clockOutAt) - new Date(record.clockInAt)) / 36e5, 0);
  const paid = Math.max(gross - 1, 0);
  return {
    gross,
    paid,
    regular: Math.min(paid, 8),
    overtime: Math.max(paid - 8, 0),
  };
}

function timeLabel(value) {
  return value ? new Date(value).toLocaleString("en-PH", { dateStyle: "medium", timeStyle: "short" }) : "";
}

function timeOnlyLabel(value) {
  return value ? new Date(value).toLocaleTimeString("en-PH", { hour: "2-digit", minute: "2-digit" }) : "";
}

function timeInputValue(value) {
  if (!value) return "";
  const date = new Date(value);
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function printReceipt(transactionId) {
  const tx = state.transactions.find((item) => item.id === transactionId);
  if (!tx) return;
  const rows = tx.receiptGroupId ? branchFilter(state.transactions).filter((item) => item.receiptGroupId === tx.receiptGroupId) : [tx];
  printTransactionReceipt(rows, tx.receiptNumber || tx.number);
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
                  <td>${money(transactionPrice(item))}${hasDemandPrice(item.demandPrice) ? " demand" : ""}</td>
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

function printCashOperation(branchId, date = today()) {
  const receiptWindow = window.open("", "_blank", "width=460,height=760");
  if (!receiptWindow) {
    alert("Please allow pop-ups to print the cash operation receipt.");
    return;
  }
  receiptWindow.document.write(cashOperationReceiptHtml(branchId, date));
  receiptWindow.document.close();
  receiptWindow.focus();
}

function printDelivery(deliveryId) {
  const delivery = state.deliveries.find((item) => item.id === deliveryId);
  if (!delivery) return;
  const receiptWindow = window.open("", "_blank", "width=560,height=760");
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
  const totals = deliveryLoadTotals(lines);
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Delivery ${delivery.number}</title>
        <style>
          * { box-sizing: border-box; }
          body { margin: 0; background: #f3f4f6; color: #111827; font-family: Arial, sans-serif; }
          .receipt { width: 500px; margin: 18px auto; padding: 18px; background: #fff; border: 1px solid #d1d5db; }
          .center { text-align: center; }
          h1 { margin: 0; font-size: 24px; }
          .tagline { margin: 3px 0 12px; font-size: 11px; color: #4b5563; }
          .muted { color: #4b5563; font-size: 12px; }
          .line { border-top: 1px dashed #9ca3af; margin: 12px 0; }
          .row { display: flex; justify-content: space-between; gap: 12px; margin: 7px 0; font-size: 13px; }
          .row strong:last-child, .amount { text-align: right; }
          table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 12px; }
          th, td { padding: 6px 0; border-bottom: 1px solid #e5e7eb; text-align: left; }
          th:last-child, td:last-child { text-align: right; }
          .total { font-size: 16px; font-weight: 800; }
          .barcode { display: flex; justify-content: center; align-items: end; gap: 2px; height: 58px; margin-top: 12px; }
          .barcode span { display: block; height: 48px; background: #111827; }
          .code { margin-top: 6px; letter-spacing: 2px; font-size: 12px; }
          .receipt-actions { width: 500px; margin: 18px auto 0; display: flex; gap: 8px; }
          .receipt-actions button { flex: 1; min-height: 42px; border: 0; border-radius: 6px; font-size: 14px; font-weight: 800; cursor: pointer; }
          .print-btn { background: #16834f; color: #fff; }
          .close-btn { background: #e5e7eb; color: #111827; }
          @media print {
            body { background: #fff; }
            .receipt { width: 100%; margin: 0; border: 0; }
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
          <div class="row"><span>Destination</span><strong>${escapeHtml(deliveryDestinationName(delivery))}</strong></div>
          <div class="row"><span>Status</span><strong>${escapeHtml(delivery.status)}</strong></div>
          <div class="line"></div>
          <table>
            <thead><tr><th>Material</th><th>Loaded</th><th>Delivered</th><th>Gap</th><th>Loss</th><th>Estimated</th><th>Actual sold</th></tr></thead>
            <tbody>
              ${lines.map((line) => `
                <tr><td>${escapeHtml(materialName(line.materialId))}</td><td>${kg(line.loadedWeight)}</td><td>${kg(line.deliveredWeight)}</td><td>${deliveryDiscrepancyDisplay(delivery, line)}</td><td>${deliveryCalculatedLossDisplay(delivery, line)}</td><td>${money(deliveryLineEstimatedValue(line))}</td><td>${money(deliveryLineActualSoldCost(line))}</td></tr>
              `).join("")}
            </tbody>
          </table>
          <div class="line"></div>
          <div class="row total"><span>Total loaded</span><strong>${kg(totals.loadedWeight)}</strong></div>
          <div class="row"><span>Total delivered</span><strong>${kg(totals.deliveredWeight)}</strong></div>
          <div class="row"><span>Discrepancy</span><strong>${deliveryTotalDiscrepancyDisplay(delivery, totals)}</strong></div>
          <div class="row"><span>Calculated loss</span><strong>${deliveryTotalCalculatedLossDisplay(delivery, totals)}</strong></div>
          <div class="row"><span>Estimated value</span><strong>${money(totals.estimatedValue)}</strong></div>
          <div class="row"><span>Actual sold</span><strong>${money(totals.actualSoldCost)}</strong></div>
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
  const movements = cashMovementsFor(branchId, date);
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
          <div class="row"><span>Paid in</span><strong>${money(position.paidIn)}</strong></div>
          <div class="row"><span>Paid out</span><strong>${money(position.paidOut)}</strong></div>
          <div class="row"><span>Sales cash received</span><strong>${money(position.cashReceived)}</strong></div>
          <div class="row"><span>Purchase cash expenses</span><strong>${money(position.cashSpent)}</strong></div>
          ${movements.length ? `
            <div class="line"></div>
            ${movements.map((movement) => `<div class="row"><span>${movement.type === "paid_in" ? "Paid in" : "Paid out"} - ${escapeHtml(movement.notes || "")}</span><strong>${money(movement.amount)}</strong></div>`).join("")}
          ` : ""}
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
  const editingReceiptRows = state.editingReceiptGroupId
    ? transactions.filter((tx) => tx.receiptGroupId === state.editingReceiptGroupId)
    : [];
  const activeTab = state.transactionTab || "walk_in";
  const walkInPartyId = defaultWalkInPartyId();
  const walkInTransactions = walkInPartyId ? transactions.filter((tx) => tx.partyId === walkInPartyId) : [];
  return page("Transactions", "Record purchases and sales. Use Edit transaction on any saved row to update a previous transaction.", `
    <section class="grid">
      ${editingReceiptRows.length ? receiptEditForm(editingReceiptRows) : transactionForm(editingTransaction)}
      <div class="panel">
        <div class="panel-head"><h3>${activeTab === "walk_in" ? "Walk In transactions" : "Recent transactions"}</h3><button class="btn secondary" data-export="transactions">Export CSV</button></div>
        <div class="tab-row">
          ${transactionTabButton("walk_in", "Walk In transactions", activeTab)}
          ${transactionTabButton("recent", "Recent transactions", activeTab)}
        </div>
        ${activeTab === "walk_in" ? customerTransactionGroups(walkInTransactions) : customerTransactionGroups(transactions)}
      </div>
    </section>
  `);
}

function transactionTabButton(tab, label, activeTab) {
  return `<button class="${activeTab === tab ? "active" : ""}" data-transaction-tab="${tab}">${label}</button>`;
}

function receiptEditForm(rows) {
  const first = rows[0];
  const total = rows.reduce((sum, tx) => sum + Number(tx.total || 0), 0);
  return `
    <form class="panel" data-action="update-receipt-transactions" data-receipt-edit-form>
      <div class="panel-head">
        <h3>Edit receipt ${escapeHtml(first.receiptNumber || first.number)}</h3>
        <button class="btn secondary" type="button" data-action="cancel-receipt-edit">Cancel edit</button>
      </div>
      <input type="hidden" name="receiptGroupId" value="${first.receiptGroupId || ""}">
      <input type="hidden" name="lineCount" value="${rows.length}">
      <div class="form-grid">
        ${dateInput("date", first.date)}
        ${branchSelect("branchId", "Branch", false, first.branchId)}
        ${partySelect("partyId", first.partyId)}
        ${input("receiptNumber", "Receipt number", "text", first.receiptNumber || "")}
      </div>
      <div class="notice" style="margin-top:12px">${rows.length} transaction${rows.length === 1 ? "" : "s"} in this receipt - Current total ${money(total)}</div>
      <div class="table-wrap" style="margin-top:12px">
        <table>
          <thead><tr><th>No.</th><th>Type</th><th>Material</th><th>Weight</th><th>Price</th><th>Demand Price</th><th>Payment</th><th>Paid</th><th>Notes</th></tr></thead>
          <tbody>
            ${rows.map((tx, index) => receiptEditLine(tx, index)).join("")}
            ${receiptEditNewLine()}
          </tbody>
        </table>
      </div>
      <button class="btn" type="submit" style="margin-top:12px">Save receipt changes</button>
    </form>
  `;
}

function receiptEditLine(tx, index) {
  return `
    <tr>
      <td>${escapeHtml(tx.number)}<input type="hidden" name="line${index}_id" value="${tx.id}"><input type="hidden" name="line${index}_number" value="${tx.number}"></td>
      <td>${inlineSelect(`line${index}_type`, [["purchase", "Purchase"], ["sale", "Sale"]], tx.type)}</td>
      <td>${inlineMaterialSelect(`line${index}_materialId`, tx.materialId)}</td>
      <td><input name="line${index}_weight" type="number" value="${tx.weight}" step="0.01" min="0.01" required></td>
      <td><input name="line${index}_price" type="number" value="${tx.basePrice ?? tx.price}" step="0.01" required></td>
      <td><input name="line${index}_demandPrice" type="number" value="${tx.demandPrice ?? ""}" step="0.01"></td>
      <td>${inlineSelect(`line${index}_paymentStatus`, [["paid", "Paid"], ["unpaid", "Unpaid"], ["partial", "Partial"]], tx.paymentStatus)}</td>
      <td><input name="line${index}_paid" type="number" value="${tx.paid ?? 0}" step="0.01"></td>
      <td><textarea name="line${index}_notes">${escapeHtml(tx.notes || "")}</textarea></td>
    </tr>
  `;
}

function receiptEditNewLine() {
  return `
    <tr>
      <td>New item</td>
      <td>${inlineSelect("new_type", [["purchase", "Purchase"], ["sale", "Sale"]], "purchase")}</td>
      <td>${inlineMaterialSelect("new_materialId", "")}</td>
      <td><input name="new_weight" type="number" value="" step="0.01" min="0.01" placeholder="0.00"></td>
      <td><input name="new_price" type="number" value="" step="0.01" placeholder="Auto"></td>
      <td><input name="new_demandPrice" type="number" value="" step="0.01"></td>
      <td>${inlineSelect("new_paymentStatus", [["paid", "Paid"], ["unpaid", "Unpaid"], ["partial", "Partial"]], "paid")}</td>
      <td><input name="new_paid" type="number" value="" step="0.01"></td>
      <td><textarea name="new_notes" placeholder="Optional"></textarea></td>
    </tr>
  `;
}

function transactionForm(tx = null) {
  const action = tx ? "update-transaction" : "add-transaction";
  const selectedPartyId = tx?.partyId || state.repeatTransactionPartyId || state.selectedTransactionPartyId || defaultWalkInPartyId();
  const receiptNumber = tx?.receiptNumber || state.repeatTransactionReceiptNumber || "";
  const originalDate = tx?.date || "";
  return `
    <form class="panel" data-action="${action}" data-transaction-form>
      <div class="panel-head">
        <h3>${tx ? `Edit ${tx.number}` : "New transaction"}</h3>
        ${tx ? `<button class="btn secondary" type="button" data-action="cancel-transaction-edit">Cancel edit</button>` : ""}
      </div>
      ${tx ? `<input type="hidden" name="id" value="${tx.id}"><input type="hidden" name="originalDate" value="${originalDate}"><input type="hidden" name="receiptGroupId" value="${tx.receiptGroupId || ""}">` : ""}
      <div class="form-grid">
        ${dateInput("date", tx?.date || today())}
        ${branchSelect("branchId", "Branch", false, tx?.branchId)}
        ${select("type", [["purchase", "Purchase"], ["sale", "Sale"]], tx?.type)}
        ${partySelect("partyId", selectedPartyId)}
        ${input("receiptNumber", "Receipt number", "text", receiptNumber)}
        ${materialSelect("materialId", tx?.materialId)}
        <label>${t("Weight in kilos")}<input name="weight" type="number" value="${tx?.weight ?? ""}" step="0.01" min="0.01" required></label>
        ${input("price", "Price per kilo", "number", tx?.basePrice ?? tx?.price ?? "", "0.01")}
        ${numberInput("demandPrice", "Price per demand", tx?.demandPrice ?? "", "0.01", false)}
        ${select("paymentStatus", [["paid", "Paid"], ["unpaid", "Unpaid"], ["partial", "Partial"]], tx?.paymentStatus)}
        ${input("paid", "Amount paid", "number", tx?.paid ?? "0", "0.01")}
      </div>
      <div class="notice" data-transaction-summary style="margin-top:12px">Total: PHP 0.00 | Balance: PHP 0.00</div>
      <label style="margin-top:10px">Notes<textarea name="notes">${tx?.notes || ""}</textarea></label>
      <label class="check-row" data-save-as-repeat-row><input type="checkbox" name="keepSameCustomer" value="yes" ${state.repeatTransactionPartyId ? "checked" : ""}> Process another transaction with the same customer and receipt number</label>
      <button class="btn" type="submit" style="margin-top:12px" data-transaction-submit>${tx ? "Save changes" : "Save transaction"}</button>
    </form>
  `;
}

function selectedPartyTransactionHistory(partyId) {
  const rows = state.transactions
    .filter((tx) => tx.partyId === partyId)
    .slice()
    .sort((a, b) => `${b.date} ${b.number}`.localeCompare(`${a.date} ${a.number}`));
  return `
    <div class="panel">
      <div class="panel-head">
        <h3 class="danger-text">${escapeHtml(partyName(partyId))} transactions</h3>
        <span class="mini-label danger-text">All records, no branch filter</span>
      </div>
      ${table(["Action", "No.", "Receipt No.", "Date", "Branch", "Type", "Material", "Weight", "Price", "Total", "Paid", "Balance"], rows.map((tx) => `
        <tr class="${state.editingTransactionId === tx.id ? "row-editing" : ""}"><td><button class="btn secondary" data-edit-transaction="${tx.id}">Edit</button> <button class="btn danger" data-delete-transaction="${tx.id}">Delete</button></td><td>${tx.number}</td><td>${escapeHtml(tx.receiptNumber || "-")}</td><td>${tx.date}</td><td>${branchName(tx.branchId)}</td><td>${badge(tx.type)}</td><td>${materialName(tx.materialId)}</td><td class="num">${kg(tx.weight)}</td><td class="amount">${money(transactionPrice(tx))}</td><td class="amount">${money(tx.total)}</td><td class="amount">${money(tx.paid)}</td><td class="amount">${money(tx.balance)}</td></tr>
      `))}
    </div>
  `;
}

function customerTransactionGroups(transactions) {
  const dateGroups = transactions.slice().reverse().reduce((items, tx) => {
    if (!items[tx.date]) items[tx.date] = [];
    items[tx.date].push(tx);
    return items;
  }, {});
  const groupHtml = Object.entries(dateGroups).map(([date, dateRows]) => {
    const receiptGroups = dateRows.reduce((items, tx) => {
      const receiptKey = tx.receiptGroupId || tx.receiptNumber || tx.number;
      if (!items[receiptKey]) items[receiptKey] = [];
      items[receiptKey].push(tx);
      return items;
    }, {});
    return `
      <section class="customer-group">
        <div class="material-day-head"><strong>${escapeHtml(date)}</strong><span>${dateRows.length} transaction${dateRows.length === 1 ? "" : "s"}</span></div>
        ${Object.entries(receiptGroups).map(([, rows]) => receiptTransactionGroup(rows)).join("")}
      </section>
    `;
  }).join("");
  return groupHtml || `<div class="notice">No transactions found.</div>`;
}

function receiptTransactionGroup(rows) {
  const first = rows[0];
  const total = rows.reduce((sum, tx) => sum + Number(tx.total || 0), 0);
  const paid = rows.reduce((sum, tx) => sum + Number(tx.paid || 0), 0);
  const balance = rows.reduce((sum, tx) => sum + Number(tx.balance || 0), 0);
  return `
    <section class="customer-group">
      <div class="customer-head">
        <div>
          <h3>Receipt ${escapeHtml(first.receiptNumber || first.number)}</h3>
          <small>${escapeHtml(partyName(first.partyId))} - ${rows.length} transaction${rows.length === 1 ? "" : "s"} - Total ${money(total)} - Paid ${money(paid)} - Balance ${money(balance)}</small>
        </div>
        <div>
          <button class="btn secondary" data-edit-receipt="${first.receiptGroupId || first.receiptNumber || first.number}">Edit receipt</button>
          <button class="btn secondary" data-print-receipt="${first.id}">Print receipt</button>
        </div>
      </div>
      ${table(["Action", "No.", "Type", "Material", "Weight", "Price", "Demand Price", "Total", "Paid", "Balance"], rows.map((tx) => `
        <tr class="${state.editingReceiptGroupId === tx.receiptGroupId ? "row-editing" : ""}"><td><button class="btn secondary" data-edit-receipt="${tx.receiptGroupId || tx.receiptNumber || tx.number}">Edit</button> <button class="btn secondary" data-print-receipt="${tx.id}">Print</button> <button class="btn danger" data-delete-transaction="${tx.id}">Delete</button></td><td>${tx.number}</td><td>${badge(tx.type)}</td><td>${materialName(tx.materialId)}</td><td class="num">${kg(tx.weight)}</td><td class="amount">${money(tx.basePrice ?? tx.price)}</td><td class="amount">${hasDemandPrice(tx.demandPrice) ? money(tx.demandPrice) : "-"}</td><td class="amount">${money(tx.total)}</td><td class="amount">${money(tx.paid)}</td><td class="amount">${money(tx.balance)}</td></tr>
      `))}
    </section>
  `;
}

function inventoryView() {
  const filters = state.inventoryFilters || { materialId: "all", branchId: "all" };
  const movements = inventoryFilteredMovements(branchFilter(state.stockMovements), filters);
  const activeTab = state.inventoryTab || "position";
  return page("Inventory", "Current stock is calculated from all stock movement records.", `
    <section class="grid">
      <div class="panel">
        <div class="panel-head"><h3>Inventory workspace</h3><button class="btn secondary" data-export-excel="inventory">Download Excel</button></div>
        <div class="tab-row">
          ${inventoryTabButton("position", "Stock position", activeTab)}
          ${inventoryTabButton("movements", "Stock movements", activeTab)}
          ${inventoryTabButton("materials", "List of materials", activeTab)}
        </div>
        <div class="form-grid" style="margin-bottom:12px">
          <label>Material<select data-inventory-filter="materialId">
            <option value="all" ${filters.materialId === "all" ? "selected" : ""}>All materials</option>
            ${state.materials.map((material) => `<option value="${material.id}" ${filters.materialId === material.id ? "selected" : ""}>${material.name}</option>`).join("")}
          </select></label>
          <label>Location<select data-inventory-filter="branchId">
            <option value="all" ${filters.branchId === "all" ? "selected" : ""}>All locations</option>
            ${state.branches.map((branch) => `<option value="${branch.id}" ${filters.branchId === branch.id ? "selected" : ""}>${branch.name}</option>`).join("")}
          </select></label>
        </div>
        ${activeTab === "position" ? inventoryStockPositionTab(filters) : ""}
        ${activeTab === "movements" ? inventoryMovementsTab(movements) : ""}
        ${activeTab === "materials" ? inventoryMaterialsTab(filters) : ""}
      </div>
      ${isAdmin() ? adjustmentForm() : ""}
    </section>
  `);
}

function inventoryTabButton(tab, label, activeTab) {
  return `<button class="${activeTab === tab ? "active" : ""}" data-inventory-tab="${tab}">${label}</button>`;
}

function inventoryStockPositionTab(filters) {
  return table(["Material", "Current Stock", "Estimated Value", "Location"], stockPositionRows(filters).map((row) => `<tr><td>${row.material}</td><td class="num">${kg(row.currentStockKg)}</td><td class="amount">${money(row.estimatedValue)}</td><td>${row.location}</td></tr>`));
}

function inventoryFilteredMovements(movements, filters) {
  return movements
    .filter((move) => filters.materialId === "all" || move.materialId === filters.materialId)
    .filter((move) => filters.branchId === "all" || move.branchId === filters.branchId);
}

function inventoryMovementsTab(movements) {
  return `
    <div class="panel-head inner-head">
      <h3>Stock movements</h3>
      ${isAdmin() ? `<button class="btn warning" data-modal="adjustment">Manual adjustment</button>` : ""}
    </div>
    ${table(["Date", "Material", "Movement", "Quantity", "Reference", "Truck Plate", "Driver", "Delivery Status", "Notes"], movements.slice().reverse().map((move) => {
      const delivery = deliveryByReference(move.reference);
      return `<tr><td>${move.date}</td><td>${materialName(move.materialId)}</td><td>${badge(move.type)}</td><td class="num">${kg(move.quantity)}</td><td>${move.reference}</td><td>${delivery?.truck || ""}</td><td>${delivery?.driver || ""}</td><td>${delivery ? badge(delivery.status) : ""}</td><td>${move.notes || ""}</td></tr>`;
    }))}
  `;
}

function inventoryMaterialsTab(filters) {
  const rows = stockPositionRows(filters).filter((row) => row.currentStockKg !== 0 || filters.materialId !== "all" || filters.branchId !== "all");
  if (!rows.length) return `<div class="notice">No material stock rows found for the selected filters.</div>`;
  return `<div class="material-day-list">${rows.map((row) => inventoryMaterialDayCard(row)).join("")}</div>`;
}

function inventoryMaterialDayCard(row) {
  const transactions = state.transactions
    .filter((tx) => tx.materialId === row.materialId && tx.branchId === row.branchId)
    .sort((a, b) => `${b.date} ${b.number}`.localeCompare(`${a.date} ${a.number}`));
  const groups = transactions.reduce((items, tx) => {
    if (!items[tx.date]) items[tx.date] = [];
    items[tx.date].push(tx);
    return items;
  }, {});
  const daySections = Object.entries(groups).map(([date, items]) => `
    <div class="material-day">
      <div class="material-day-head"><strong>${date}</strong><span>${items.length} transaction${items.length === 1 ? "" : "s"}</span></div>
      ${table(["No.", "Type", "Customer/Supplier", "Kilo", "Estimated Value"], items.map((tx) => `
        <tr><td>${tx.number}</td><td>${badge(tx.type)}</td><td>${partyName(tx.partyId)}</td><td class="num">${kg(tx.weight)}</td><td class="amount">${money(tx.total)}</td></tr>
      `))}
    </div>
  `).join("");
  return `
    <article class="material-stock-card">
      <div class="material-stock-head">
        <div><h3>${row.material}</h3><span>${row.location}</span></div>
        <div class="material-stock-summary"><strong>${kg(row.currentStockKg)}</strong><span>${money(row.estimatedValue)}</span></div>
      </div>
      ${daySections || `<div class="notice">No transaction lines recorded for this material/location yet.</div>`}
    </article>
  `;
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
  const filters = deliveryFilterValues();
  const filteredDeliveries = filteredDeliveryRecords(deliveries, filters);
  const editingDelivery = deliveries.find((delivery) => delivery.id === state.editingDeliveryId) || null;
  return page("Deliveries", "Track truck loads, scrap materials, delivery destinations, and completion status.", `
    <section class="grid">
      ${deliveryForm(editingDelivery)}
      <div class="panel">
        <div class="panel-head"><h3>Delivery records</h3><button class="btn secondary" data-export-excel="deliveries">Download Excel</button></div>
        ${deliveryFilterPanel(deliveries, filters)}
        ${deliveryRecordGroups(filteredDeliveries)}
      </div>
    </section>
  `);
}

function deliveryFilterValues() {
  return { status: "all", driver: "all", truck: "all", sourceBranchId: "all", ...(state.deliveryFilters || {}) };
}

function filteredDeliveryRecords(deliveries, filters) {
  return deliveries
    .filter((delivery) => filters.status === "all" || delivery.status === filters.status)
    .filter((delivery) => filters.driver === "all" || delivery.driver === filters.driver)
    .filter((delivery) => filters.truck === "all" || delivery.truck === filters.truck)
    .filter((delivery) => filters.sourceBranchId === "all" || delivery.sourceBranchId === filters.sourceBranchId);
}

function deliveryFilterPanel(deliveries, filters) {
  const drivers = uniqueDeliveryOptions(deliveries.map((delivery) => delivery.driver));
  const trucks = uniqueDeliveryOptions(deliveries.map((delivery) => delivery.truck));
  const branchIds = [...new Set(deliveries.map((delivery) => delivery.sourceBranchId).filter(Boolean))];
  return `
    <div class="form-grid filter-grid">
      <label>Status<select data-delivery-filter="status">
        <option value="all" ${filters.status === "all" ? "selected" : ""}>All status</option>
        ${[["pending", "Pending"], ["in_transit", "In transit"], ["completed", "Completed"], ["cancelled", "Cancelled"]].map(([value, label]) => `<option value="${value}" ${filters.status === value ? "selected" : ""}>${label}</option>`).join("")}
      </select></label>
      <label>Driver<select data-delivery-filter="driver">
        <option value="all" ${filters.driver === "all" ? "selected" : ""}>All drivers</option>
        ${drivers.map((driver) => `<option value="${escapeHtml(driver)}" ${filters.driver === driver ? "selected" : ""}>${escapeHtml(driver)}</option>`).join("")}
      </select></label>
      <label>Plate number<select data-delivery-filter="truck">
        <option value="all" ${filters.truck === "all" ? "selected" : ""}>All plates</option>
        ${trucks.map((truck) => `<option value="${escapeHtml(truck)}" ${filters.truck === truck ? "selected" : ""}>${escapeHtml(truck)}</option>`).join("")}
      </select></label>
      <label>Location<select data-delivery-filter="sourceBranchId">
        <option value="all" ${filters.sourceBranchId === "all" ? "selected" : ""}>All locations</option>
        ${branchIds.map((branchId) => `<option value="${branchId}" ${filters.sourceBranchId === branchId ? "selected" : ""}>${branchName(branchId)}</option>`).join("")}
      </select></label>
    </div>
  `;
}

function uniqueDeliveryOptions(values) {
  return [...new Set(values.map((value) => String(value || "").trim()).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function deliveryRecordGroups(deliveries) {
  const groups = deliveries.slice().reverse().map((delivery) => {
    const lines = deliveryLines(delivery);
    const totals = deliveryLoadTotals(lines);
    return `
      <section class="customer-group ${state.editingDeliveryId === delivery.id ? "row-editing" : ""}">
        <div class="customer-head">
          <div>
            <h3>${escapeHtml(delivery.number)} - ${escapeHtml(delivery.truck)}</h3>
            <small>${escapeHtml(delivery.date)} - ${escapeHtml(deliveryDestinationName(delivery))} - ${escapeHtml(delivery.driver)} - Operator: ${escapeHtml(operatorName(delivery.createdBy || delivery.updatedBy))}</small>
          </div>
          <div class="toolbar" style="margin-bottom:0">
            <button class="btn secondary" data-edit-delivery="${delivery.id}">Edit</button>
            <button class="btn secondary" data-print-delivery="${delivery.id}">Print</button>
          </div>
        </div>
        ${table(["Material", "Loaded", "Delivered", "Discrepancy", "Calculated Loss", "Estimated Value", "Actual Sold Cost", "Status"], [
          ...lines.map((line) => `<tr><td>${materialName(line.materialId)}</td><td class="num">${kg(line.loadedWeight)}</td><td class="num">${kg(line.deliveredWeight)}</td><td class="num">${deliveryDiscrepancyDisplay(delivery, line)}</td><td class="amount">${deliveryCalculatedLossDisplay(delivery, line)}</td><td class="amount">${money(deliveryLineEstimatedValue(line))}</td><td class="amount">${money(deliveryLineActualSoldCost(line))}</td><td>${badge(delivery.status)}</td></tr>`),
          `<tr><td><strong>Truck load total</strong></td><td class="num"><strong>${kg(totals.loadedWeight)}</strong></td><td class="num"><strong>${kg(totals.deliveredWeight)}</strong></td><td class="num"><strong>${deliveryTotalDiscrepancyDisplay(delivery, totals)}</strong></td><td class="amount"><strong>${deliveryTotalCalculatedLossDisplay(delivery, totals)}</strong></td><td class="amount"><strong>${money(totals.estimatedValue)}</strong></td><td class="amount"><strong>${money(totals.actualSoldCost)}</strong></td><td></td></tr>`,
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
  const destinationKey = source?.destinationContactId ? `contact:${source.destinationContactId}` : source?.destinationBranchId ? `branch:${source.destinationBranchId}` : "";
  return `
    <form class="panel" data-action="${action}" data-delivery-form>
      <div class="panel-head">
        <h3>${delivery ? `Edit ${delivery.number}` : repeatDelivery ? `Add scrap to ${repeatDelivery.number}` : "New delivery"}</h3>
        ${delivery ? `<button class="btn secondary" type="button" data-action="cancel-delivery-edit">Cancel edit</button>` : ""}
      </div>
      ${delivery ? `<input type="hidden" name="id" value="${delivery.id}">` : ""}
      ${repeatDelivery ? `<input type="hidden" name="appendDeliveryId" value="${repeatDelivery.id}">` : ""}
      <div class="form-grid">
        ${dateInput("date", source?.date || today())}
        ${branchSelect("sourceBranchId", "Source branch", false, source?.sourceBranchId)}
        ${destinationSelect(destinationKey)}
        ${input("truck", "Truck plate number", "text", source?.truck || "")}
        ${input("driver", "Driver name", "text", source?.driver || "")}
        ${select("status", [["pending", "Pending"], ["in_transit", "In transit"], ["completed", "Completed"], ["cancelled", "Cancelled"]], source?.status)}
      </div>
      <div class="panel-head" style="margin-top:14px"><h3>${delivery ? "Truck load scraps" : "Single scrap material"}</h3></div>
      ${deliveryLineInputs(delivery)}
      <div class="notice" data-delivery-summary style="margin-top:12px">Truck load total: 0 kg | Delivered: 0 kg | Estimated value: PHP 0.00 | Actual sold: PHP 0.00</div>
      <label style="margin-top:10px">Notes<textarea name="notes">${source?.notes || ""}</textarea></label>
      ${delivery ? "" : `<label class="check-row"><input type="checkbox" name="keepSameTruck" value="yes" ${repeatDelivery ? "checked" : ""}> Process another scrap material with the same truck</label>`}
      <button class="btn" type="submit" style="margin-top:12px">${delivery ? "Save changes" : repeatDelivery ? "Add scrap load" : "Save delivery"}</button>
    </form>
  `;
}

function deliveryLines(delivery) {
  if (Array.isArray(delivery.lines) && delivery.lines.length) return delivery.lines;
  if (!delivery.materialId) return [];
  return [{ materialId: delivery.materialId, loadedWeight: Number(delivery.loadedWeight || 0), deliveredWeight: Number(delivery.deliveredWeight || 0), actualSoldCost: Number(delivery.actualSoldCost || 0) }];
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
    actualSoldCost: Number(data[`actualSoldCost${lineNo}`] || 0),
  })).filter((line) => line.materialId && line.loadedWeight > 0);
}

function deliveryRecordRows() {
  return state.deliveries.flatMap((delivery) => {
    const lines = deliveryLines(delivery);
    const totals = deliveryLoadTotals(lines);
    return lines.map((line) => ({
      deliveryNumber: delivery.number,
      date: delivery.date,
      destination: deliveryDestinationName(delivery),
      truck: delivery.truck,
      driver: delivery.driver,
      operator: operatorName(delivery.createdBy || delivery.updatedBy),
      material: materialName(line.materialId),
      loadedWeightKg: line.loadedWeight,
      deliveredWeightKg: line.deliveredWeight,
      discrepancyKg: deliveryIsCompleted(delivery) ? deliveryLineDiscrepancy(line) : "",
      calculatedLoss: deliveryIsCompleted(delivery) ? deliveryLineCalculatedLoss(line) : "",
      estimatedValue: deliveryLineEstimatedValue(line),
      actualSoldCost: deliveryLineActualSoldCost(line),
      totalTruckLoadedKg: totals.loadedWeight,
      totalTruckDeliveredKg: totals.deliveredWeight,
      totalTruckDiscrepancyKg: deliveryIsCompleted(delivery) ? totals.discrepancyWeight : "",
      totalTruckCalculatedLoss: deliveryIsCompleted(delivery) ? totals.calculatedLoss : "",
      totalTruckEstimatedValue: totals.estimatedValue,
      totalTruckActualSoldCost: totals.actualSoldCost,
      status: delivery.status,
      notes: delivery.notes || "",
    }));
  });
}

function deliveryLineInputs(delivery = null) {
  const lines = delivery ? deliveryLines(delivery) : [];
  const lineNumbers = delivery ? Array.from({ length: Math.max(lines.length, 1) }, (_, index) => index + 1) : [1];
  return lineNumbers.map((lineNo) => `
    <div class="form-grid" style="margin-bottom:10px">
      ${materialSelect(`materialId${lineNo}`, lines[lineNo - 1]?.materialId || "", lineNo === 1)}
      <label><span class="label-line">Loaded weight ${lineNo} <span data-stock-hint="${lineNo}">- Available stock: --</span></span>
        <input name="loadedWeight${lineNo}" type="number" value="${lines[lineNo - 1]?.loadedWeight ?? (lineNo === 1 ? "0" : "")}" step="0.01" min="0" ${lineNo === 1 ? "required" : ""} data-loaded-weight-line="${lineNo}">
      </label>
      <label>Delivered weight ${lineNo}
        <input name="deliveredWeight${lineNo}" type="number" value="${lines[lineNo - 1]?.deliveredWeight ?? ""}" step="0.01" min="0" data-delivered-weight-line="${lineNo}">
      </label>
      <label>Actual sold cost ${lineNo}
        <input name="actualSoldCost${lineNo}" type="number" value="${lines[lineNo - 1]?.actualSoldCost ?? ""}" step="0.01" min="0" data-actual-sold-cost-line="${lineNo}">
      </label>
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
        ${optionalInput("contact", "Contact number", "text", party?.contact || "")}
        ${select("status", [["active", "Active"], ["inactive", "Inactive"]], party?.status)}
      </div>
      <label style="margin-top:10px">Address<textarea name="address">${party?.address || ""}</textarea></label>
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
  const editingCashAdvance = state.cashAdvances.find((advance) => advance.id === state.editingCashAdvanceId) || null;
  const activeTab = state.payrollTab || "summary";
  return page("Payroll", "Manage employees, cash advances, and payroll net pay calculations.", `
    <section class="grid">
      ${payrollForm(editingPayroll)}
      <div class="panel">
        <div class="panel-head"><h3>Payroll results</h3><span class="mini-label">${state.payrollRuns.length} payslip${state.payrollRuns.length === 1 ? "" : "s"}</span></div>
        <div class="tab-row">
          ${payrollTabButton("summary", "Payroll summary", activeTab)}
          ${payrollTabButton("cash_advances", "Cash advance records", activeTab)}
          ${payrollTabButton("attendance", "Attendance payroll tracker", activeTab)}
        </div>
        ${activeTab === "summary" ? payrollSummaryTab() : ""}
        ${activeTab === "cash_advances" ? payrollCashAdvanceTab() : ""}
        ${activeTab === "attendance" ? payrollAttendanceTrackerTab() : ""}
      </div>
      ${cashAdvanceForm(editingCashAdvance)}
    </section>
  `);
}

function payrollTabButton(tab, label, activeTab) {
  return `<button class="${activeTab === tab ? "active" : ""}" data-payroll-tab="${tab}">${label}</button>`;
}

function payrollSummaryTab() {
  return `
    <div class="panel-head inner-head"><h3>Payroll summary</h3><button class="btn secondary" data-export="payroll">Download all payrolls</button></div>
    ${payrollSummaryTable()}
  `;
}

function payrollCashAdvanceTab() {
  return `
    <div class="panel-head inner-head"><h3>Cash advance records</h3></div>
    ${cashAdvanceTable()}
  `;
}

function payrollAttendanceTrackerTab() {
  return `
    <div class="panel-head inner-head"><h3>Attendance payroll tracker</h3><span class="mini-label">Regular and O.T hours</span></div>
    ${attendancePayrollTracker()}
  `;
}

function cashAdvanceForm(advance = null) {
  const action = advance ? "update-cash-advance" : "add-cash-advance";
  return `
    <form class="panel" data-action="${action}">
      <div class="panel-head">
        <h3>${advance ? `Edit cash advance - ${employeeName(advance.employeeId)}` : "New cash advance"}</h3>
        ${advance ? `<button class="btn secondary" type="button" data-action="cancel-cash-advance-edit">Cancel edit</button>` : ""}
      </div>
      ${advance ? `<input type="hidden" name="id" value="${advance.id}">` : ""}
      <div class="form-grid">
        ${employeeSelect("employeeId", advance?.employeeId)}
        ${dateInput("date", advance?.date || today())}
        ${input("amount", "Amount", "number", advance?.amount ?? "0", "0.01")}
        ${input("reason", "Reason", "text", advance?.reason || "")}
        ${select("status", [["active", "Active"], ["fully_deducted", "Fully deducted"], ["cancelled", "Cancelled"]], advance?.status)}
      </div>
      <button class="btn" type="submit" style="margin-top:12px">${advance ? "Save changes" : "Save cash advance"}</button>
    </form>
  `;
}

function cashAdvanceTable() {
  return table(["Action", "Employee", "Date", "Amount", "Reason", "Status"], state.cashAdvances.map((advance) => `
    <tr class="${state.editingCashAdvanceId === advance.id ? "row-editing" : ""}"><td><button class="btn secondary" data-edit-cash-advance="${advance.id}">Edit</button></td><td>${employeeName(advance.employeeId)}</td><td>${advance.date}</td><td class="amount">${money(advance.amount)}</td><td>${advance.reason}</td><td>${badge(advance.status)}</td></tr>
  `));
}

function payrollForm(run = null) {
  const action = run ? "update-payroll" : "add-payroll";
  const employee = state.employees.find((item) => item.id === run?.employeeId) || state.employees[0] || {};
  const monthlySalary = run?.monthlySalary ?? Number(employee.rate || 0);
  const periodRange = payrollPeriodRange(run);
  return `
    <form class="panel" data-action="${action}" data-payroll-form>
      <div class="panel-head">
        <h3>${run ? `Edit payslip - ${employeeName(run.employeeId)}` : "New payslip"}</h3>
        ${run ? `<button class="btn secondary" type="button" data-action="cancel-payroll-edit">Cancel edit</button>` : ""}
      </div>
      ${run ? `<input type="hidden" name="id" value="${run.id}">` : ""}
      <div class="form-grid">
        ${payrollPeriodInputs(periodRange)}
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
            ${payrollNumber("basicPay", "Bi-monthly salary", run?.basicPay ?? Number(monthlySalary || 0))}
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
      <div class="notice" data-payroll-attendance-summary style="margin-top:10px">Attendance payroll: select employee and payroll period.</div>
      <button class="btn" type="submit" style="margin-top:12px">${run ? "Save changes" : "Calculate and save"}</button>
    </form>
  `;
}

function payrollPeriodRange(run = null) {
  const period = String(run?.period || "");
  const match = period.match(/(\d{4}-\d{2}-\d{2})\s+to\s+(\d{4}-\d{2}-\d{2})/);
  if (run?.periodStart || run?.periodEnd) return { start: run.periodStart || match?.[1] || today(), end: run.periodEnd || match?.[2] || today() };
  if (match) return { start: match[1], end: match[2] };
  return { start: today(), end: today() };
}

function payrollPeriodInputs(range) {
  return `
    <label>Payroll period from<input name="periodStart" type="date" value="${range.start}" required></label>
    <label>Payroll period to<input name="periodEnd" type="date" value="${range.end}" required></label>
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

function attendancePayrollTracker() {
  const records = branchFilter(state.attendanceRecords).slice().sort((a, b) => `${b.date}${b.clockInAt}`.localeCompare(`${a.date}${a.clockInAt}`));
  return table(["Date", "Employee", "Branch", "Time In", "Time Out", "Regular Hours", "O.T Hours", "Status"], records.map((record) => {
    const hours = attendanceHours(record);
    return `
      <tr>
        <td>${record.date}</td>
        <td>${record.employeeName || employeeName(record.employeeId) || record.userName}</td>
        <td>${branchName(record.branchId)}</td>
        <td>${timeOnlyLabel(record.clockInAt)}</td>
        <td>${record.clockOutAt ? timeOnlyLabel(record.clockOutAt) : ""}</td>
        <td class="num">${hours.regular.toFixed(2)}</td>
        <td class="num">${hours.overtime.toFixed(2)}</td>
        <td>${badge(record.clockOutAt ? "completed" : "active")}</td>
      </tr>
    `;
  }));
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

function payrollHourlyRate(employee) {
  const rate = Number(employee?.rate || 0);
  return rate / 8;
}

function cashAdvanceDeductionFor(employeeId, periodStart, periodEnd) {
  return state.cashAdvances
    .filter((advance) => (
      advance.employeeId === employeeId
      && advance.status === "active"
      && (!periodStart || advance.date >= periodStart)
      && (!periodEnd || advance.date <= periodEnd)
    ))
    .reduce((sum, advance) => sum + Math.max(Number(advance.totalDeduction || 0), 0), 0);
}

function attendancePayrollTotals(employeeId, periodStart, periodEnd) {
  const employee = state.employees.find((item) => item.id === employeeId);
  const records = state.attendanceRecords.filter((record) => (
    record.employeeId === employeeId
    && record.clockOutAt
    && (!periodStart || record.date >= periodStart)
    && (!periodEnd || record.date <= periodEnd)
  ));
  const hours = records.reduce((totals, record) => {
    const recordHours = attendanceHours(record);
    totals.regular += recordHours.regular;
    totals.overtime += recordHours.overtime;
    return totals;
  }, { regular: 0, overtime: 0 });
  const hourlyRate = payrollHourlyRate(employee);
  return {
    records,
    regularHours: hours.regular,
    overtimeHours: hours.overtime,
    hourlyRate,
    basicPay: hours.regular * hourlyRate,
    overtimeAmount: hours.overtime * hourlyRate * 1.25,
  };
}

function applyAttendancePayrollCalculation(form) {
  const employeeId = form.elements.namedItem("employeeId")?.value || "";
  const employee = state.employees.find((item) => item.id === employeeId);
  const employeeRate = Number(employee?.rate || 0);
  const periodStart = form.elements.namedItem("periodStart")?.value || "";
  const periodEnd = form.elements.namedItem("periodEnd")?.value || "";
  const totals = attendancePayrollTotals(employeeId, periodStart, periodEnd);
  const cashAdvanceDeduction = cashAdvanceDeductionFor(employeeId, periodStart, periodEnd);
  const monthlySalary = form.elements.namedItem("monthlySalary");
  const basicPay = form.elements.namedItem("basicPay");
  const overtimeHours = form.elements.namedItem("overtimeHours");
  const overtimeAmount = form.elements.namedItem("overtimeAmount");
  const cashAdvanceDeductionField = form.elements.namedItem("cashAdvanceDeduction");
  if (monthlySalary) monthlySalary.value = employeeRate.toFixed(2);
  if (totals.records.length) {
    if (basicPay) basicPay.value = totals.basicPay.toFixed(2);
  } else if (basicPay) {
    basicPay.value = employeeRate.toFixed(2);
  }
  if (overtimeHours) overtimeHours.value = totals.overtimeHours.toFixed(2);
  if (overtimeAmount) overtimeAmount.value = totals.overtimeAmount.toFixed(2);
  if (cashAdvanceDeductionField) cashAdvanceDeductionField.value = cashAdvanceDeduction.toFixed(2);
  const summary = form.querySelector("[data-payroll-attendance-summary]");
  if (summary) {
    summary.textContent = `Attendance payroll: ${totals.records.length} record${totals.records.length === 1 ? "" : "s"} | Regular ${totals.regularHours.toFixed(2)} hrs | Basic salary ${money(totals.basicPay)} | O.T ${totals.overtimeHours.toFixed(2)} hrs | O.T pay ${money(totals.overtimeAmount)} | Cash advance ${money(cashAdvanceDeduction)}`;
  }
}

function payrollFormData(data, existing = null) {
  const periodStart = data.periodStart || "";
  const periodEnd = data.periodEnd || "";
  const values = {
    id: existing?.id || id("pr"),
    period: periodStart && periodEnd ? `${periodStart} to ${periodEnd}` : data.period,
    periodStart,
    periodEnd,
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
  const activeTab = state.reportTab || "summary";

  return page("Reports", "Filter by date, export operational reports, and restrict income reports to admin users.", `
    <section class="grid">
      <div class="panel">
        <div class="panel-head"><h3>Filters</h3></div>
        <div class="form-grid">
          <label>From date<input data-report-filter="from" type="date" value="${filters.from}"></label>
          <label>To date<input data-report-filter="to" type="date" value="${filters.to}"></label>
          <label>Branch<select data-report-filter="branchId">
            <option value="all" ${filters.branchId === "all" ? "selected" : ""}>All branches</option>
            ${visibleBranches().map((branch) => `<option value="${branch.id}" ${filters.branchId === branch.id ? "selected" : ""}>${branch.name}</option>`).join("")}
          </select></label>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><h3>Report results</h3><span class="mini-label">${transactions.length} filtered transaction${transactions.length === 1 ? "" : "s"}</span></div>
        <div class="tab-row">
          ${reportTabButton("summary", "Summary", activeTab)}
          ${reportTabButton("purchases", "Purchases", activeTab)}
          ${reportTabButton("sales", "Sales", activeTab)}
          ${reportTabButton("inventory", "Inventory", activeTab)}
          ${reportTabButton("income", "Income / Profit", activeTab)}
        </div>
        ${activeTab === "summary" ? reportSummaryTab(transactions, purchases, sales, profitRows) : ""}
        ${activeTab === "purchases" ? reportPurchasesTab(purchases) : ""}
        ${activeTab === "sales" ? reportSalesTab(sales) : ""}
        ${activeTab === "inventory" ? reportInventoryTab() : ""}
        ${activeTab === "income" ? reportIncomeTab(profitRows) : ""}
      </div>
    </section>
  `);
}

function reportTabButton(tab, label, activeTab) {
  return `<button class="${activeTab === tab ? "active" : ""}" data-report-tab="${tab}">${label}</button>`;
}

function reportSummaryTab(transactions, purchases, sales, profitRows) {
  const totalPurchases = totalByType(purchases, "purchase");
  const totalSales = totalByType(sales, "sale");
  const totalProfit = profitRows.reduce((sum, row) => sum + Number(row.profit || 0), 0);
  const pending = transactions.reduce((sum, tx) => sum + Number(tx.balance || 0), 0);
  return `
    <div class="report-summary-grid">
      ${reportSummaryCard("Transactions", transactions.length, "Filtered records")}
      ${reportSummaryCard("Purchases", money(totalPurchases), `${kg(weightByType(purchases, "purchase"))} bought`)}
      ${reportSummaryCard("Sales", money(totalSales), `${kg(weightByType(sales, "sale"))} sold`)}
      ${reportSummaryCard("Pending", money(pending), "Open balances")}
      ${isAdmin() ? reportSummaryCard("Profit", money(totalProfit), "Admin income view") : reportSummaryCard("Profit", "Restricted", "Admin only")}
    </div>
  `;
}

function reportSummaryCard(label, value, detail) {
  return `<article class="report-summary-card"><span>${label}</span><strong>${value}</strong><small>${detail}</small></article>`;
}

function reportPurchasesTab(purchases) {
  return `
    <div class="panel-head inner-head"><h3>Daily purchase report</h3><button class="btn secondary" data-export="purchases">Export CSV</button></div>
    ${transactionReportTable(purchases)}
  `;
}

function reportSalesTab(sales) {
  return `
    <div class="panel-head inner-head"><h3>Daily sales report</h3><button class="btn secondary" data-export="sales">Export CSV</button></div>
    ${transactionReportTable(sales)}
  `;
}

function reportInventoryTab() {
  return `
    <div class="panel-head inner-head"><h3>Inventory report</h3><button class="btn secondary" data-export="inventory">Export CSV</button></div>
    ${stockTable()}
  `;
}

function reportIncomeTab(profitRows) {
  if (!isAdmin()) return `<div class="notice">Income and profit reports are visible only to admin users.</div>`;
  return `
    <div class="panel-head inner-head"><h3>Income and profit report</h3><button class="btn secondary" data-export="income">Export CSV</button></div>
    ${table(["Date", "Material", "Sales", "Estimated Cost", "Profit"], profitRows.map((tx) => `
      <tr><td>${tx.date}</td><td>${materialName(tx.materialId)}</td><td class="amount">${money(tx.total)}</td><td class="amount">${money(tx.cost)}</td><td class="amount">${money(tx.profit)}</td></tr>
    `))}
  `;
}

function transactionReportTable(rows) {
  return table(["Date", "Receipt No.", "Name", "Material", "Weight", "Price", "Demand Price", "Total", "Payment"], rows.map((tx) => `
    <tr><td>${tx.date}</td><td>${escapeHtml(tx.receiptNumber || "-")}</td><td>${partyName(tx.partyId)}</td><td>${materialName(tx.materialId)}</td><td class="num">${kg(tx.weight)}</td><td class="amount">${money(tx.basePrice ?? tx.price)}</td><td class="amount">${hasDemandPrice(tx.demandPrice) ? money(tx.demandPrice) : "-"}</td><td class="amount">${money(tx.total)}</td><td>${badge(tx.paymentStatus)}</td></tr>
  `));
}

function filteredReportTransactions() {
  const filters = state.reportFilters || { from: "", to: "", branchId: defaultBranchId() };
  return branchFilter(state.transactions).filter((tx) => {
    const afterFrom = !filters.from || tx.date >= filters.from;
    const beforeTo = !filters.to || tx.date <= filters.to;
    const inBranch = filters.branchId === "all" || tx.branchId === filters.branchId;
    return afterFrom && beforeTo && inBranch;
  });
}

function inventoryRows() {
  return stockPositionRows(state.inventoryFilters || { materialId: "all", branchId: "all" }).map(({ branchId, materialId, ...row }) => row);
}

function branchesView() {
  const editingBranch = state.branches.find((branch) => branch.id === state.editingBranchId) || null;
  return page("Location Maintenance", "Maintain branches and operating locations for multi-branch ScrapWise setup.", `
    <section class="split">
      ${branchForm(editingBranch)}
      <div class="panel">
        <div class="panel-head"><h3>Locations</h3></div>
        ${table(["Action", "Code", "Location", "Address", "Contact", "Status"], state.branches.map((branch) => `
          <tr class="${state.editingBranchId === branch.id ? "row-editing" : ""}">
            <td><button class="btn secondary" data-edit-branch="${branch.id}">Edit</button> <button class="btn danger" data-delete-branch="${branch.id}">Delete</button></td>
            <td>${branch.code}</td>
            <td>${branch.name}</td>
            <td>${branch.address || ""}</td>
            <td>${branch.contact || ""}</td>
            <td>${badge(branch.status)}</td>
          </tr>
        `))}
      </div>
    </section>
  `);
}

function branchForm(branch = null) {
  const action = branch ? "update-branch" : "add-branch";
  return `
    <form class="panel" data-action="${action}">
      <div class="panel-head">
        <h3>${branch ? `Edit ${branch.name}` : "Add location"}</h3>
        ${branch ? `<button class="btn secondary" type="button" data-action="cancel-branch-edit">Cancel edit</button>` : ""}
      </div>
      ${branch ? `<input type="hidden" name="id" value="${branch.id}">` : ""}
      <div class="form-grid">
        ${input("code", "Code", "text", branch?.code || "")}
        ${input("name", "Location name", "text", branch?.name || "")}
        ${optionalInput("contact", "Contact number", "text", branch?.contact || "")}
        ${select("status", [["active", "Active"], ["inactive", "Inactive"]], branch?.status || "active")}
      </div>
      <label style="margin-top:10px">Address<textarea name="address" placeholder="Full branch address">${branch?.address || ""}</textarea></label>
      <button class="btn" type="submit" style="margin-top:12px">${branch ? "Save changes" : "Save location"}</button>
    </form>
  `;
}

function destinationsView() {
  const editingDestination = (state.destinations || []).find((destination) => destination.id === state.editingDestinationId) || null;
  return page("Destination Maintenance", "Maintain delivery and buyer contacts where scrap can be delivered or sold.", `
    <section class="split">
      ${destinationForm(editingDestination)}
      <div class="panel">
        <div class="panel-head"><h3>Destinations</h3></div>
        ${table(["Action", "Type", "Destination", "Contact", "Address", "Notes", "Status"], (state.destinations || []).map((destination) => `
          <tr class="${state.editingDestinationId === destination.id ? "row-editing" : ""}">
            <td><button class="btn secondary" data-edit-destination="${destination.id}">Edit</button> <button class="btn danger" data-delete-destination="${destination.id}">Delete</button></td>
            <td>${badge(destination.type)}</td>
            <td>${destination.name}</td>
            <td>${destination.contact || ""}</td>
            <td>${destination.address || ""}</td>
            <td>${destination.notes || ""}</td>
            <td>${badge(destination.status)}</td>
          </tr>
        `))}
      </div>
    </section>
  `);
}

function destinationForm(destination = null) {
  const action = destination ? "update-destination" : "add-destination";
  return `
    <form class="panel" data-action="${action}">
      <div class="panel-head">
        <h3>${destination ? `Edit ${destination.name}` : "Add destination"}</h3>
        ${destination ? `<button class="btn secondary" type="button" data-action="cancel-destination-edit">Cancel edit</button>` : ""}
      </div>
      ${destination ? `<input type="hidden" name="id" value="${destination.id}">` : ""}
      <div class="form-grid">
        ${select("type", [["buyer", "Buyer"], ["warehouse", "Warehouse"], ["processor", "Processor"], ["other", "Other"]], destination?.type || "buyer")}
        ${input("name", "Destination name", "text", destination?.name || "")}
        ${optionalInput("contact", "Contact number", "text", destination?.contact || "")}
        ${select("status", [["active", "Active"], ["inactive", "Inactive"]], destination?.status || "active")}
      </div>
      <label style="margin-top:10px">Address<textarea name="address" placeholder="Delivery or buyer address">${destination?.address || ""}</textarea></label>
      <label style="margin-top:10px">Notes<textarea name="notes" placeholder="Terms, contact person, delivery instruction">${destination?.notes || ""}</textarea></label>
      <button class="btn" type="submit" style="margin-top:12px">${destination ? "Save changes" : "Save destination"}</button>
    </form>
  `;
}

function usersView() {
  const editingUser = state.users.find((user) => user.id === state.editingUserId) || null;
  return page("Users", "Admin user management for role-based access.", `
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
  const raw = String(text || "").trim();
  const key = raw.toLowerCase().replace(/\s+/g, "_");
  const safe = raw.replaceAll("_", " ");
  return `<span class="badge status-${key || "unknown"}">${safe}</span>`;
}

function input(name, labelText, type = "text", value = "", step = "") {
  return `<label>${t(labelText)}<input name="${name}" type="${type}" value="${value}" ${step ? `step="${step}"` : ""} required></label>`;
}

function optionalInput(name, labelText, type = "text", value = "", step = "") {
  return `<label>${t(labelText)}<input name="${name}" type="${type}" value="${value}" ${step ? `step="${step}"` : ""}></label>`;
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

function inlineSelect(name, options, selectedValue = "") {
  return `<select name="${name}">${options.map(([value, text]) => `<option value="${value}" ${selectedValue === value ? "selected" : ""}>${t(text)}</option>`).join("")}</select>`;
}

function branchSelect(name, labelText = "Branch", includeBlank = false, selectedValue = "") {
  const branches = includeBlank ? state.branches.filter((branch) => branch.status === "active") : visibleBranches();
  const fallbackValue = includeBlank ? "" : selectedValue || defaultBranchId();
  if (!includeBlank && branches.length <= 1 && !isAdmin()) {
    return `<input type="hidden" name="${name}" value="${fallbackValue}">`;
  }
  const blank = includeBlank ? `<option value="">Select ${labelText.toLowerCase()}</option>` : "";
  return `<label>${t(labelText)}<select name="${name}" ${includeBlank ? "" : "required"}>${blank}${branches.map((branch) => `<option value="${branch.id}" ${(selectedValue || fallbackValue) === branch.id ? "selected" : ""}>${branch.name}</option>`).join("")}</select></label>`;
}

function partySelect(name, selectedValue = "") {
  return `<label>Customer or supplier<select name="${name}">${state.parties.filter((party) => party.status === "active").map((party) => `<option value="${party.id}" ${selectedValue === party.id ? "selected" : ""}>${party.name} (${party.type})</option>`).join("")}</select></label>`;
}

function defaultWalkInPartyId() {
  return state.parties.find((party) => party.status === "active" && party.name?.trim().toLowerCase() === "walk in")?.id || "";
}

function destinationSelect(selectedValue = "") {
  const branchOptions = state.branches
    .filter((branch) => branch.status === "active")
    .map((branch) => [`branch:${branch.id}`, `${branch.name} (branch)`]);
  const contactOptions = (state.destinations || [])
    .filter((destination) => destination.status === "active")
    .map((destination) => [`contact:${destination.id}`, `${destination.name} (${destination.type})`]);
  const options = [...branchOptions, ...contactOptions];
  return `<label>Destination<select name="destinationKey" required><option value="">Select destination</option>${options.map(([value, text]) => `<option value="${value}" ${selectedValue === value ? "selected" : ""}>${text}</option>`).join("")}</select></label>`;
}

function materialSelect(name, selectedValue = "", required = true) {
  const blank = required ? "" : `<option value="">No material</option>`;
  return `<label>Scrap material<select name="${name}" ${required ? "required" : ""}>${blank}${state.materials.filter((material) => material.status === "active").map((material) => `<option value="${material.id}" ${selectedValue === material.id ? "selected" : ""}>${material.name}</option>`).join("")}</select></label>`;
}

function inlineMaterialSelect(name, selectedValue = "") {
  return `<select name="${name}" required>${state.materials.filter((material) => material.status === "active").map((material) => `<option value="${material.id}" ${selectedValue === material.id ? "selected" : ""}>${material.name}</option>`).join("")}</select>`;
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

  document.querySelectorAll("form[data-action]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (form.dataset.submitting === "yes") return;
      if (form.matches("[data-delivery-form]") && !updateDeliveryStockLimits(form, true)) return;
      if (form.reportValidity && !form.reportValidity()) return;
      form.dataset.submitting = "yes";
      form.querySelectorAll("button[type='submit']").forEach((button) => {
        button.disabled = true;
        button.dataset.originalText = button.textContent;
        button.textContent = "Saving...";
      });
      handleForm(form.dataset.action, Object.fromEntries(new FormData(form)));
      setTimeout(() => {
        if (!document.body.contains(form)) return;
        form.dataset.submitting = "";
        form.querySelectorAll("button[type='submit']").forEach((button) => {
          button.disabled = false;
          button.textContent = button.dataset.originalText || button.textContent;
        });
      }, 300);
    });
  });

  document.querySelectorAll("input[type='number']").forEach((field) => {
    field.addEventListener("input", () => highlightPositiveNumberFields());
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
      state.editingReceiptGroupId = null;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-edit-receipt]").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingReceiptGroupId = button.dataset.editReceipt;
      state.editingTransactionId = null;
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

  document.querySelectorAll("[data-delete-transaction]").forEach((button) => {
    button.addEventListener("click", () => deleteTransaction(button.dataset.deleteTransaction));
  });

  document.querySelectorAll("[data-action='cancel-transaction-edit']").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingTransactionId = null;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-action='cancel-receipt-edit']").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingReceiptGroupId = null;
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

  document.querySelectorAll("[data-edit-branch]").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingBranchId = button.dataset.editBranch;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-action='cancel-branch-edit']").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingBranchId = null;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-delete-branch]").forEach((button) => {
    button.addEventListener("click", () => deleteBranch(button.dataset.deleteBranch));
  });

  document.querySelectorAll("[data-edit-destination]").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingDestinationId = button.dataset.editDestination;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-action='cancel-destination-edit']").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingDestinationId = null;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-delete-destination]").forEach((button) => {
    button.addEventListener("click", () => deleteDestination(button.dataset.deleteDestination));
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

  document.querySelectorAll("[data-edit-attendance]").forEach((button) => {
    button.addEventListener("click", () => {
      const record = state.attendanceRecords.find((item) => item.id === button.dataset.editAttendance);
      if (!record) return;
      state.editingAttendanceId = record.id;
      state.attendanceDate = record.date;
      state.attendanceBranchId = record.branchId;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-action='cancel-attendance-edit']").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingAttendanceId = null;
      saveState();
      render();
    });
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

  document.querySelectorAll("[data-edit-cash-advance]").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingCashAdvanceId = button.dataset.editCashAdvance;
      state.payrollTab = "cash_advances";
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-action='cancel-cash-advance-edit']").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingCashAdvanceId = null;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-attendance-date]").forEach((field) => {
    field.addEventListener("change", () => {
      state.attendanceDate = field.value || today();
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-attendance-branch]").forEach((field) => {
    field.addEventListener("change", () => {
      state.attendanceBranchId = field.value || defaultBranchId();
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-review-attendance-filter]").forEach((field) => {
    field.addEventListener("change", () => {
      state.reviewAttendanceFilters = state.reviewAttendanceFilters || { branchId: "all", from: monthStart(), to: today() };
      state.reviewAttendanceFilters[field.dataset.reviewAttendanceFilter] = field.value;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-print-cash-operation]").forEach((button) => {
    button.addEventListener("click", () => printCashOperation(button.dataset.printCashOperation, button.dataset.printCashDate || today()));
  });

  document.querySelectorAll("[data-cash-operation-date]").forEach((field) => {
    field.addEventListener("change", () => {
      state.cashOperationDate = field.value || today();
      saveState();
      render();
    });
  });

  document.querySelectorAll("form[data-action='save-cash-operation'] select[name='branchId'], form[data-action='close-cash-operation'] select[name='branchId'], form[data-action='add-cash-movement'] select[name='branchId']").forEach((field) => {
    field.addEventListener("change", () => {
      state.cashOperationBranchId = field.value || defaultBranchId();
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-cash-operation-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.cashOperationTab = button.dataset.cashOperationTab;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-transaction-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.transactionTab = button.dataset.transactionTab;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-transaction-form]").forEach((form) => {
    const update = (event) => {
      updateTransactionAmounts(form, event?.target);
      updateTransactionSubmitLabel(form);
    };
    form.querySelectorAll("input, select").forEach((field) => field.addEventListener("input", update));
    form.querySelectorAll("select").forEach((field) => field.addEventListener("change", update));
    form.elements.namedItem("partyId")?.addEventListener("change", () => {
      state.selectedTransactionPartyId = form.elements.namedItem("partyId")?.value || "";
      saveState();
      render();
    });
    updateTransactionAmounts(form);
    updateTransactionSubmitLabel(form);
  });

  document.querySelectorAll("[data-delivery-form]").forEach((form) => {
    const update = (event) => updateDeliveryStockLimits(form, event?.target?.matches("[data-loaded-weight-line]"));
    form.querySelectorAll("input, select").forEach((field) => field.addEventListener("input", update));
    form.querySelectorAll("select").forEach((field) => field.addEventListener("change", update));
    updateDeliveryStockLimits(form);
  });

  document.querySelectorAll("[data-delivery-filter]").forEach((field) => {
    field.addEventListener("change", () => {
      state.deliveryFilters = deliveryFilterValues();
      state.deliveryFilters[field.dataset.deliveryFilter] = field.value;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-payroll-form]").forEach((form) => {
    const update = () => updatePayrollSummary(form);
    form.querySelectorAll("input, select").forEach((field) => field.addEventListener("input", update));
    form.querySelectorAll("select").forEach((field) => field.addEventListener("change", update));
    updatePayrollSummary(form);
  });

  document.querySelectorAll("[data-payroll-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.payrollTab = button.dataset.payrollTab;
      saveState();
      render();
    });
  });

  highlightPositiveNumberFields();

  document.querySelector("[data-filter='party-search']")?.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = state.parties.filter((party) => `${party.name} ${party.contact}`.toLowerCase().includes(query));
    document.getElementById("party-list").innerHTML = partyTable(filtered);
  });

  document.querySelectorAll("[data-inventory-filter]").forEach((field) => {
    field.addEventListener("change", () => {
      state.inventoryFilters = state.inventoryFilters || { materialId: "all", branchId: "all" };
      state.inventoryFilters[field.dataset.inventoryFilter] = field.value;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-inventory-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.inventoryTab = button.dataset.inventoryTab;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-report-filter]").forEach((field) => {
    field.addEventListener("change", () => {
      state.reportFilters = state.reportFilters || { from: "", to: "", branchId: "all" };
      state.reportFilters[field.dataset.reportFilter] = field.value;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-report-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.reportTab = button.dataset.reportTab;
      saveState();
      render();
    });
  });
}

function handleForm(action, data) {
  const handlers = {
    login: login,
    "save-attendance": saveAttendance,
    "save-cash-operation": saveCashOperation,
    "close-cash-operation": closeCashOperation,
    "add-cash-movement": addCashMovement,
    "add-transaction": addTransaction,
    "update-transaction": updateTransaction,
    "update-receipt-transactions": updateReceiptTransactions,
    "add-adjustment": addAdjustment,
    "add-delivery": addDelivery,
    "update-delivery": updateDelivery,
    "add-party": addParty,
    "update-party": updateParty,
    "add-material": addMaterial,
    "update-material": updateMaterial,
    "add-branch": addBranch,
    "update-branch": updateBranch,
    "add-destination": addDestination,
    "update-destination": updateDestination,
    "add-payroll": addPayroll,
    "update-payroll": updatePayroll,
    "add-employee": addEmployee,
    "update-employee": updateEmployee,
    "add-cash-advance": addCashAdvance,
    "update-cash-advance": updateCashAdvance,
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

function saveAttendance(data) {
  const employee = state.employees.find((item) => item.id === data.employeeId);
  if (!employee) {
    alert("Select an employee.");
    return;
  }
  if (employee.branchId !== data.branchId) {
    alert("Selected employee does not belong to this branch.");
    return;
  }
  if (data.status === "completed" && !data.timeOut) {
    alert("Enter time out when status is completed.");
    return;
  }
  const clockInAt = attendanceDateTime(data.date, data.timeIn);
  const clockOutAt = data.timeOut ? attendanceDateTime(data.date, data.timeOut) : "";
  if (clockOutAt && new Date(clockOutAt) < new Date(clockInAt)) {
    alert("Time out cannot be earlier than time in.");
    return;
  }
  const existing = data.id
    ? state.attendanceRecords.find((record) => record.id === data.id)
    : state.attendanceRecords.find((record) => record.employeeId === data.employeeId && record.branchId === data.branchId && record.date === data.date);
  const hourValues = attendanceHours({ clockInAt, clockOutAt: data.status === "completed" ? clockOutAt : "" });
  const record = {
    id: existing?.id || id("att"),
    employeeId: employee.id,
    employeeName: employee.name,
    branchId: data.branchId,
    date: data.date,
    clockInAt,
    clockOutAt: data.status === "completed" ? clockOutAt : "",
    grossHours: hourValues.gross,
    paidHours: hourValues.paid,
    regularHours: hourValues.regular,
    overtimeHours: hourValues.overtime,
    notes: data.notes,
    createdBy: existing?.createdBy || currentUser().id,
    updatedBy: currentUser().id,
  };
  if (existing) {
    const index = state.attendanceRecords.findIndex((item) => item.id === existing.id);
    state.attendanceRecords[index] = record;
  } else {
    state.attendanceRecords.push(record);
  }
  state.attendanceDate = data.date || today();
  state.attendanceBranchId = data.branchId || defaultBranchId();
  state.editingAttendanceId = null;
  saveState();
  render();
}

function updateTransactionAmounts(form, sourceField = null) {
  const material = state.materials.find((item) => item.id === form.materialId?.value);
  if (material && (!form.price.value || ["type", "materialId"].includes(sourceField?.name))) {
    form.price.value = form.type.value === "sale" ? material.sellPrice : material.buyPrice;
  }
  const weight = Number(form.weight?.value || 0);
  const price = hasDemandPrice(form.demandPrice?.value) ? Number(form.demandPrice.value || 0) : Number(form.price?.value || 0);
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
  highlightPositiveNumberFields(form);
}

function transactionDateChanged(form) {
  const originalDate = form.elements.namedItem("originalDate")?.value || "";
  const currentDate = form.elements.namedItem("date")?.value || "";
  return Boolean(originalDate && currentDate && originalDate !== currentDate);
}

function updateTransactionSubmitLabel(form) {
  const button = form.querySelector("[data-transaction-submit]");
  if (!button) return;
  if (form.dataset.action === "update-transaction") {
    const saveAs = transactionDateChanged(form);
    button.textContent = saveAs ? "Save as" : "Save changes";
  }
}

function deliveryExistingNumberForForm(form) {
  const existingId = form.elements.namedItem("id")?.value || form.elements.namedItem("appendDeliveryId")?.value || "";
  return state.deliveries.find((delivery) => delivery.id === existingId)?.number || null;
}

function updateDeliveryStockLimits(form, showAlert = false) {
  const sourceBranchId = form.elements.namedItem("sourceBranchId")?.value || defaultBranchId();
  const existingNumber = deliveryExistingNumberForForm(form);
  const loadedFields = Array.from(form.querySelectorAll("[data-loaded-weight-line]"));
  const formLines = loadedFields.map((field) => {
    const lineNo = field.dataset.loadedWeightLine;
    return {
      lineNo,
      materialId: form.elements.namedItem(`materialId${lineNo}`)?.value,
      loadedWeight: Number(field.value || 0),
      deliveredWeight: Number(form.elements.namedItem(`deliveredWeight${lineNo}`)?.value || 0),
      actualSoldCost: Number(form.elements.namedItem(`actualSoldCost${lineNo}`)?.value || 0),
    };
  });
  const totalsByMaterial = loadedFields.reduce((totals, field) => {
    const lineNo = field.dataset.loadedWeightLine;
    const materialId = form.elements.namedItem(`materialId${lineNo}`)?.value;
    if (materialId) totals[materialId] = (totals[materialId] || 0) + Number(field.value || 0);
    return totals;
  }, {});
  const truckTotals = deliveryLoadTotals(formLines.filter((line) => line.materialId));
  let firstShortage = null;
  loadedFields.forEach((field) => {
    const lineNo = field.dataset.loadedWeightLine;
    const line = formLines.find((item) => item.lineNo === lineNo) || {};
    const materialId = line.materialId;
    const hint = form.querySelector(`[data-stock-hint="${lineNo}"]`);
    field.setCustomValidity("");
    if (!materialId) {
      if (hint) hint.textContent = "- Available stock: --";
      return;
    }
    const availableStock = stockForDeliveryEdit(sourceBranchId, materialId, existingNumber);
    field.max = String(Math.max(availableStock, 0));
    if (hint) hint.textContent = `- Available stock: ${kg(availableStock)}`;
    const loadedTotal = Number(totalsByMaterial[materialId] || 0);
    if (loadedTotal > availableStock) {
      const message = `${materialName(materialId)} loaded weight exceeds inventory. Available stock: ${kg(availableStock)}. Loaded weight: ${kg(loadedTotal)}.`;
      field.setCustomValidity(message);
      firstShortage = firstShortage || { materialId, availableStock, loadedWeight: loadedTotal };
    }
  });
  const summary = form.querySelector("[data-delivery-summary]");
  if (summary) {
    summary.textContent = `Truck load total: ${kg(truckTotals.loadedWeight)} | Delivered: ${kg(truckTotals.deliveredWeight)} | Estimated value: ${money(truckTotals.estimatedValue)} | Actual sold: ${money(truckTotals.actualSoldCost)}`;
  }
  if (firstShortage && showAlert) {
    alert(`Delivery blocked: ${materialName(firstShortage.materialId)} loaded weight exceeds inventory.\n\nAvailable stock: ${kg(firstShortage.availableStock)}\nLoaded weight: ${kg(firstShortage.loadedWeight)}`);
  }
  highlightPositiveNumberFields(form);
  return !firstShortage;
}

function updatePayrollSummary(form) {
  applyAttendancePayrollCalculation(form);
  const data = Object.fromEntries(new FormData(form));
  const totals = payrollTotals(payrollFormData(data, state.payrollRuns.find((run) => run.id === data.id)));
  const summary = form.querySelector("[data-payroll-summary]");
  if (summary) summary.textContent = `Gross Pay: ${money(totals.grossPay)} | Deductions: ${money(totals.totalDeduction)} | Net Pay: ${money(totals.netPay)}`;
  highlightPositiveNumberFields(form);
}

function highlightPositiveNumberFields(scope = document) {
  scope.querySelectorAll("input[type='number']").forEach((field) => {
    const value = Number(field.value || 0);
    field.classList.toggle("positive-value", Number.isFinite(value) && value > 0);
  });
}

function transactionValues(data, existingNumber = null, receiptGroupId = null) {
  const material = state.materials.find((item) => item.id === data.materialId);
  const weight = Number(data.weight);
  const basePrice = Number(data.price || (data.type === "sale" ? material.sellPrice : material.buyPrice));
  const demandPrice = hasDemandPrice(data.demandPrice) ? Number(data.demandPrice || 0) : "";
  const price = demandPrice === "" ? basePrice : demandPrice;
  const total = weight * price;
  const paid = data.paymentStatus === "paid" ? total : data.paymentStatus === "unpaid" ? 0 : Math.min(Number(data.paid || 0), total);
  return {
    number: existingNumber || `TRX-${String(state.transactions.length + 1).padStart(4, "0")}`,
    receiptNumber: data.receiptNumber?.trim() || "",
    receiptGroupId,
    date: data.date,
    branchId: data.branchId,
    type: data.type,
    partyId: data.partyId,
    materialId: data.materialId,
    weight,
    price,
    basePrice,
    demandPrice,
    total,
    paymentStatus: data.paymentStatus,
    paid,
    balance: Math.max(total - paid, 0),
    notes: data.notes,
  };
}

function validTransactionWeight(data) {
  const weight = Number(data.weight || 0);
  if (!Number.isFinite(weight) || weight <= 0) {
    alert("Transaction blocked: weight must be greater than 0 kg.");
    return false;
  }
  return true;
}

function validReceiptNumber(data, allowedReceiptGroupId = null, excludedTransactionId = null, enforceGroupDate = true) {
  const receiptNumber = data.receiptNumber?.trim() || "";
  if (!receiptNumber) {
    alert("Transaction blocked: receipt number is required.");
    return false;
  }
  if (enforceGroupDate && allowedReceiptGroupId) {
    const mismatchedDate = state.transactions.find((tx) => tx.receiptGroupId === allowedReceiptGroupId && tx.date !== data.date);
    if (mismatchedDate) {
      alert(`Transaction blocked: receipt number ${receiptNumber} is already assigned to ${mismatchedDate.date}. Use that same date or enter a new receipt number.`);
      return false;
    }
  }
  const duplicate = state.transactions.find((tx) => {
    if (excludedTransactionId && tx.id === excludedTransactionId) return false;
    if ((tx.receiptNumber || "").trim().toLowerCase() !== receiptNumber.toLowerCase()) return false;
    return !allowedReceiptGroupId || tx.receiptGroupId !== allowedReceiptGroupId;
  });
  if (duplicate) {
    alert(`Transaction blocked: receipt number ${receiptNumber} is already used. Edit the existing receipt or continue the active receipt before starting a new one.`);
    return false;
  }
  return true;
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

function stockForReceiptEdit(branchId, materialId, transactionNumbers = []) {
  return state.stockMovements
    .filter((movement) => !transactionNumbers.includes(movement.reference))
    .filter((movement) => movement.branchId === branchId && movement.materialId === materialId)
    .reduce((total, movement) => total + Number(movement.quantity || 0), 0);
}

function receiptGroupForTransaction(data, existingGroupId = null) {
  const receiptNumber = data.receiptNumber?.trim() || "";
  if (existingGroupId && state.transactions.some((tx) => tx.receiptGroupId === existingGroupId)) return existingGroupId;
  if (data.keepSameCustomer === "yes" && state.repeatTransactionReceiptGroupId && state.repeatTransactionReceiptNumber.trim().toLowerCase() === receiptNumber.toLowerCase()) {
    return state.repeatTransactionReceiptGroupId;
  }
  return id("rg");
}

function setRepeatTransactionState(data, receiptGroupId = "") {
  const repeat = data.keepSameCustomer === "yes";
  state.repeatTransactionPartyId = repeat ? data.partyId : "";
  state.repeatTransactionReceiptNumber = repeat ? data.receiptNumber?.trim() || "" : "";
  state.repeatTransactionReceiptGroupId = repeat ? receiptGroupId : "";
  state.selectedTransactionPartyId = repeat ? data.partyId : defaultWalkInPartyId();
}

function syncReceiptGroupNumber(receiptGroupId, receiptNumber) {
  if (!receiptGroupId || !receiptNumber) return;
  state.transactions = state.transactions.map((tx) => (
    tx.receiptGroupId === receiptGroupId ? { ...tx, receiptNumber } : tx
  ));
}

function addTransaction(data) {
  if (!validTransactionWeight(data)) return;
  const receiptGroupId = receiptGroupForTransaction(data);
  if (!validReceiptNumber(data, receiptGroupId)) return;
  const tx = transactionValues(data, null, receiptGroupId);
  if (tx.type === "sale" && stockFor(tx.branchId, tx.materialId) < tx.weight && !isAdmin()) {
    alert("Sale blocked: stock is lower than the requested sale weight. Ask admin to adjust or override.");
    return;
  }
  state.transactions.push({ id: id("t"), ...tx, createdBy: currentUser().id });
  state.stockMovements.push(autoStockMovement(tx));
  setRepeatTransactionState(data, tx.receiptGroupId);
  saveState();
  render();
}

function receiptLineData(data, index) {
  return {
    date: data.date,
    branchId: data.branchId,
    partyId: data.partyId,
    receiptNumber: data.receiptNumber,
    type: data[`line${index}_type`],
    materialId: data[`line${index}_materialId`],
    weight: data[`line${index}_weight`],
    price: data[`line${index}_price`],
    demandPrice: data[`line${index}_demandPrice`],
    paymentStatus: data[`line${index}_paymentStatus`],
    paid: data[`line${index}_paid`],
    notes: data[`line${index}_notes`],
  };
}

function receiptNewLineData(data) {
  return {
    date: data.date,
    branchId: data.branchId,
    partyId: data.partyId,
    receiptNumber: data.receiptNumber,
    type: data.new_type,
    materialId: data.new_materialId,
    weight: data.new_weight,
    price: data.new_price,
    demandPrice: data.new_demandPrice,
    paymentStatus: data.new_paymentStatus,
    paid: data.new_paid,
    notes: data.new_notes,
  };
}

function hasNewReceiptLine(data) {
  return Boolean(data.new_weight && Number(data.new_weight) > 0);
}

function validReceiptStock(rows, existingNumbers) {
  const saleGroups = rows.reduce((groups, tx) => {
    if (tx.type !== "sale") return groups;
    const key = `${tx.branchId}|${tx.materialId}`;
    groups[key] = (groups[key] || 0) + Number(tx.weight || 0);
    return groups;
  }, {});
  const blocked = Object.entries(saleGroups).find(([key, weight]) => {
    const [branchId, materialId] = key.split("|");
    return stockForReceiptEdit(branchId, materialId, existingNumbers) < weight;
  });
  if (blocked && !isAdmin()) {
    alert("Sale blocked: stock is lower than the requested sale weight. Ask admin to adjust or override.");
    return false;
  }
  return true;
}

function updateReceiptTransactions(data) {
  const receiptGroupId = data.receiptGroupId;
  const existingRows = state.transactions.filter((tx) => tx.receiptGroupId === receiptGroupId);
  if (!receiptGroupId || !existingRows.length) return;
  if (!validReceiptNumber(data, receiptGroupId, null, false)) return;

  const lineCount = Number(data.lineCount || 0);
  const nextRows = [];
  for (let index = 0; index < lineCount; index += 1) {
    const existing = existingRows.find((tx) => tx.id === data[`line${index}_id`]);
    if (!existing) continue;
    const lineData = receiptLineData(data, index);
    if (!validTransactionWeight(lineData)) return;
    const tx = transactionValues(lineData, existing.number, receiptGroupId);
    nextRows.push({ ...existing, ...tx, updatedBy: currentUser().id });
  }
  if (nextRows.length !== existingRows.length) {
    alert("Receipt update blocked: one or more receipt lines could not be found.");
    return;
  }
  const newRows = [];
  if (hasNewReceiptLine(data)) {
    const newLineData = receiptNewLineData(data);
    if (!validTransactionWeight(newLineData)) return;
    const tx = transactionValues(newLineData, null, receiptGroupId);
    newRows.push({ id: id("t"), ...tx, createdBy: currentUser().id });
  }
  const existingNumbers = existingRows.map((tx) => tx.number);
  const receiptRows = [...nextRows, ...newRows];
  if (!validReceiptStock(receiptRows, existingNumbers)) return;

  state.transactions = state.transactions.map((tx) => nextRows.find((row) => row.id === tx.id) || tx);
  state.transactions.push(...newRows);
  state.stockMovements = state.stockMovements.filter((movement) => !existingNumbers.includes(movement.reference));
  state.stockMovements.push(...receiptRows.map(autoStockMovement));
  state.editingReceiptGroupId = null;
  state.selectedTransactionPartyId = data.partyId;
  saveState();
  render();
}

function saveCashOperation(data) {
  const existing = cashOperationRecord(data.branchId, data.date);
  if (isCashOperationClosed(existing)) {
    alert("This cash operation is already closed.");
    return;
  }
  state.cashOperationDate = data.date || today();
  state.cashOperationBranchId = data.branchId || defaultBranchId();
  const record = {
    id: existing?.id || id("cap"),
    date: data.date,
    branchId: data.branchId,
    openingCash: Number(data.openingCash || 0),
    amount: Number(data.openingCash || 0),
    paidIn: Number(existing?.paidIn || 0),
    paidOut: Number(existing?.paidOut || 0),
    closeCash: data.closeCash === "" ? "" : Number(data.closeCash || 0),
    notes: data.notes,
    status: existing?.status || "open",
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

function closeCashOperation(data) {
  const existing = cashOperationRecord(data.branchId, data.date);
  if (!existing) {
    alert("Enter the starting amount first before closing the operation.");
    return;
  }
  if (isCashOperationClosed(existing)) {
    alert("This cash operation is already closed.");
    return;
  }
  const closeCash = Number(data.closeCash || 0);
  if (closeCash < 0) {
    alert("Close cash cannot be negative.");
    return;
  }
  const position = cashPosition(data.branchId, data.date);
  const confirmed = confirm(`Close cash operation for ${data.date}?\n\nExpected cash: ${money(position.expectedCash)}\nEnding balance: ${money(closeCash)}\nVariance: ${money(closeCash - position.expectedCash)}\n\nThis will save the record for the day and lock further cash changes.`);
  if (!confirmed) return;
  const index = state.dailyCapitals.findIndex((capital) => capital.id === existing.id);
  state.dailyCapitals[index] = {
    ...existing,
    closeCash,
    notes: data.notes,
    status: "closed",
    closedAt: new Date().toISOString(),
    closedBy: currentUser().id,
    updatedBy: currentUser().id,
  };
  state.cashOperationDate = data.date || today();
  state.cashOperationBranchId = data.branchId || defaultBranchId();
  saveState();
  render();
}

function addCashMovement(data) {
  const amount = Number(data.amount || 0);
  if (amount <= 0) {
    alert("Enter an amount greater than zero.");
    return;
  }
  const existing = cashOperationRecord(data.branchId, data.date);
  if (!existing) {
    alert("Enter the starting amount first before adding cash movements.");
    return;
  }
  if (isCashOperationClosed(existing)) {
    alert("This cash operation is already closed.");
    return;
  }
  state.cashOperationDate = data.date || today();
  state.cashOperationBranchId = data.branchId || defaultBranchId();
  state.cashMovements.push({
    id: id("cm"),
    date: data.date,
    branchId: data.branchId,
    type: data.type,
    amount,
    notes: data.notes,
    createdBy: currentUser().id,
    createdAt: new Date().toISOString(),
  });
  saveState();
  render();
}

function updateTransaction(data) {
  const index = state.transactions.findIndex((tx) => tx.id === data.id);
  if (index === -1) return;
  const existing = state.transactions[index];
  const existingReceiptGroupId = existing.receiptGroupId || data.receiptGroupId || existing.receiptNumber || existing.number;
  if (!validTransactionWeight(data)) return;
  if (data.originalDate && data.date !== data.originalDate) {
    const receiptGroupId = data.keepSameCustomer === "yes" ? receiptGroupForTransaction(data, existingReceiptGroupId) : receiptGroupForTransaction(data);
    if (!validReceiptNumber(data, receiptGroupId)) return;
    const tx = transactionValues(data, null, receiptGroupId);
    if (tx.type === "sale" && stockFor(tx.branchId, tx.materialId) < tx.weight && !isAdmin()) {
      alert("Sale blocked: stock is lower than the requested sale weight. Ask admin to adjust or override.");
      return;
    }
    state.transactions.push({ id: id("t"), ...tx, createdBy: currentUser().id, sourceTransactionId: existing.id });
    state.stockMovements.push(autoStockMovement(tx));
    state.editingTransactionId = null;
    setRepeatTransactionState(data, tx.receiptGroupId);
    saveState();
    render();
    return;
  }
  const receiptGroupId = receiptGroupForTransaction(data, existingReceiptGroupId);
  if (!validReceiptNumber(data, receiptGroupId, existing.id)) return;
  const tx = transactionValues(data, existing.number, receiptGroupId);
  if (tx.type === "sale" && stockForEdit(tx.branchId, tx.materialId, existing.number) < tx.weight && !isAdmin()) {
    alert("Sale blocked: stock is lower than the requested sale weight. Ask admin to adjust or override.");
    return;
  }
  state.transactions[index] = { ...existing, ...tx };
  syncReceiptGroupNumber(tx.receiptGroupId, tx.receiptNumber);
  state.stockMovements = state.stockMovements.filter((movement) => movement.reference !== existing.number);
  state.stockMovements.push(autoStockMovement(tx));
  state.editingTransactionId = null;
  setRepeatTransactionState(data, tx.receiptGroupId);
  saveState();
  render();
}

function deleteTransaction(transactionId) {
  const tx = state.transactions.find((item) => item.id === transactionId);
  if (!tx) return;
  if (!confirm(`Delete transaction ${tx.number}? This will also remove its inventory movement.`)) return;
  state.transactions = state.transactions.filter((item) => item.id !== transactionId);
  state.stockMovements = state.stockMovements.filter((movement) => movement.reference !== tx.number);
  if (state.editingTransactionId === transactionId) state.editingTransactionId = null;
  if (state.selectedTransactionPartyId === tx.partyId && !state.transactions.some((item) => item.partyId === tx.partyId)) {
    state.selectedTransactionPartyId = "";
  }
  if (state.repeatTransactionPartyId === tx.partyId && !state.transactions.some((item) => item.partyId === tx.partyId)) {
    state.repeatTransactionPartyId = "";
    state.repeatTransactionReceiptNumber = "";
    state.repeatTransactionReceiptGroupId = "";
  }
  if (state.repeatTransactionReceiptGroupId === tx.receiptGroupId && !state.transactions.some((item) => item.receiptGroupId === tx.receiptGroupId)) {
    state.repeatTransactionPartyId = "";
    state.repeatTransactionReceiptNumber = "";
    state.repeatTransactionReceiptGroupId = "";
  }
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
  if (shortage) {
    const [materialId, loadedWeight] = shortage;
    const availableStock = stockForDeliveryEdit(data.sourceBranchId, materialId, existing?.number);
    alert(`Delivery blocked: ${materialName(materialId)} loaded weight exceeds inventory.\n\nAvailable stock: ${kg(availableStock)}\nLoaded weight: ${kg(loadedWeight)}`);
    return null;
  }
  const destination = parseDestinationKey(data.destinationKey);
  if (!destination) {
    alert("Select a delivery destination.");
    return null;
  }
  return {
    id: existing?.id || id("d"),
    number: existing?.number || `DLV-${String(state.deliveries.length + 1).padStart(4, "0")}`,
    date: data.date,
    sourceBranchId: data.sourceBranchId,
    destinationBranchId: destination.branchId,
    destinationContactId: destination.contactId,
    destinationName: destination.name,
    truck: data.truck,
    driver: data.driver,
    status: data.status,
    notes: data.notes,
    createdBy: existing?.createdBy || currentUser().id,
    updatedBy: currentUser().id,
    lines,
  };
}

function parseDestinationKey(destinationKey) {
  const [type, destinationId] = String(destinationKey || "").split(":");
  if (type === "branch") {
    const branch = state.branches.find((item) => item.id === destinationId && item.status === "active");
    return branch ? { branchId: branch.id, contactId: "", name: branch.name } : null;
  }
  if (type === "contact") {
    const destination = (state.destinations || []).find((item) => item.id === destinationId && item.status === "active");
    return destination ? { branchId: "", contactId: destination.id, name: destination.name } : null;
  }
  return null;
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

function branchValues(data, existing = null) {
  return {
    id: existing?.id || id("b"),
    code: String(data.code || "").trim().toUpperCase(),
    name: String(data.name || "").trim(),
    address: data.address,
    contact: data.contact,
    status: data.status,
  };
}

function validateBranch(data, existingId = "") {
  const code = String(data.code || "").trim().toUpperCase();
  const name = String(data.name || "").trim();
  if (!code || !name) {
    alert("Location code and name are required.");
    return false;
  }
  const duplicate = state.branches.find((branch) => branch.id !== existingId && (branch.code.toUpperCase() === code || branch.name.toLowerCase() === name.toLowerCase()));
  if (duplicate) {
    alert("Location code or name already exists.");
    return false;
  }
  return true;
}

function addBranch(data) {
  if (!validateBranch(data)) return;
  state.branches.push(branchValues(data));
  saveState();
  render();
}

function updateBranch(data) {
  const index = state.branches.findIndex((branch) => branch.id === data.id);
  if (index === -1 || !validateBranch(data, data.id)) return;
  state.branches[index] = branchValues(data, state.branches[index]);
  state.editingBranchId = null;
  saveState();
  render();
}

function branchInUse(branchId) {
  return state.users.some((user) => user.branchId === branchId)
    || state.employees.some((employee) => employee.branchId === branchId)
    || state.transactions.some((tx) => tx.branchId === branchId)
    || state.stockMovements.some((movement) => movement.branchId === branchId)
    || state.dailyCapitals.some((capital) => capital.branchId === branchId)
    || state.deliveries.some((delivery) => delivery.sourceBranchId === branchId || delivery.destinationBranchId === branchId);
}

function deleteBranch(branchId) {
  const branch = state.branches.find((item) => item.id === branchId);
  if (!branch) return;
  if (branchInUse(branchId)) {
    alert("This location is already used in records. Set it to inactive instead of deleting it.");
    return;
  }
  if (!confirm(`Delete location ${branch.name}?`)) return;
  state.branches = state.branches.filter((item) => item.id !== branchId);
  if (state.editingBranchId === branchId) state.editingBranchId = null;
  saveState();
  render();
}

function destinationValues(data, existing = null) {
  return {
    id: existing?.id || id("dst"),
    type: data.type,
    name: String(data.name || "").trim(),
    contact: data.contact,
    address: data.address,
    notes: data.notes,
    status: data.status,
  };
}

function validateDestination(data, existingId = "") {
  const name = String(data.name || "").trim();
  if (!name) {
    alert("Destination name is required.");
    return false;
  }
  const duplicate = (state.destinations || []).find((destination) => destination.id !== existingId && destination.name.toLowerCase() === name.toLowerCase());
  if (duplicate) {
    alert("Destination name already exists.");
    return false;
  }
  return true;
}

function addDestination(data) {
  if (!validateDestination(data)) return;
  state.destinations = state.destinations || [];
  state.destinations.push(destinationValues(data));
  saveState();
  render();
}

function updateDestination(data) {
  state.destinations = state.destinations || [];
  const index = state.destinations.findIndex((destination) => destination.id === data.id);
  if (index === -1 || !validateDestination(data, data.id)) return;
  state.destinations[index] = destinationValues(data, state.destinations[index]);
  state.editingDestinationId = null;
  saveState();
  render();
}

function deleteDestination(destinationId) {
  const destination = (state.destinations || []).find((item) => item.id === destinationId);
  if (!destination) return;
  if (state.deliveries.some((delivery) => delivery.destinationContactId === destinationId)) {
    alert("This destination is already used in delivery records. Set it to inactive instead of deleting it.");
    return;
  }
  if (!confirm(`Delete destination ${destination.name}?`)) return;
  state.destinations = (state.destinations || []).filter((item) => item.id !== destinationId);
  if (state.editingDestinationId === destinationId) state.editingDestinationId = null;
  saveState();
  render();
}

function addPayroll(data) {
  const existingIndex = state.payrollRuns.findIndex((run) => (
    run.employeeId === data.employeeId
    && (run.periodStart || "") === (data.periodStart || "")
    && (run.periodEnd || "") === (data.periodEnd || "")
  ));
  if (existingIndex >= 0) {
    state.payrollRuns[existingIndex] = payrollFormData(data, state.payrollRuns[existingIndex]);
  } else {
    state.payrollRuns.push(payrollFormData(data));
  }
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
  const advance = cashAdvanceValues(data);
  if (!advance) return;
  state.cashAdvances.push({ id: id("ca"), ...advance });
  saveState();
  render();
}

function updateCashAdvance(data) {
  const index = state.cashAdvances.findIndex((advance) => advance.id === data.id);
  if (index === -1) return;
  const values = cashAdvanceValues(data);
  if (!values) return;
  state.cashAdvances[index] = { ...state.cashAdvances[index], ...values };
  state.editingCashAdvanceId = null;
  state.payrollTab = "cash_advances";
  saveState();
  render();
}

function cashAdvanceValues(data) {
  const amount = Number(data.amount || 0);
  if (!Number.isFinite(amount) || amount <= 0) {
    alert("Cash advance blocked: amount must be greater than 0.");
    return null;
  }
  const totalDeduction = amount;
  return { employeeId: data.employeeId, date: data.date, amount, reason: data.reason, totalDeduction, balance: Math.max(amount - totalDeduction, 0), status: data.status };
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
    "review-attendance": reviewAttendanceRows(),
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
    deliveries: ["deliveryNumber", "date", "destination", "truck", "driver", "operator", "material", "loadedWeightKg", "deliveredWeightKg", "discrepancyKg", "calculatedLoss", "estimatedValue", "actualSoldCost", "totalTruckLoadedKg", "totalTruckDeliveredKg", "totalTruckDiscrepancyKg", "totalTruckCalculatedLoss", "totalTruckEstimatedValue", "totalTruckActualSoldCost", "status", "notes"],
    "review-attendance": ["date", "employee", "branch", "timeIn", "timeOut", "regularHours", "overtimeHours", "status", "notes"],
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
