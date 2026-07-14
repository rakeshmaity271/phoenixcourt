// Senior Group Fund & Shuttle Management — Mock Data

// ─── Senior Members ─────────────────────────────────────
export const seniorMembers = [
  { id: 1, name: 'Arjun Sharma', phone: '+91 98765 43210', joinDate: '2024-01-15', monthlyFee: 500, status: 'Active', totalPaid: 6000, totalDue: 0 },
  { id: 2, name: 'Sneha Patel', phone: '+91 98765 43211', joinDate: '2024-02-20', monthlyFee: 500, status: 'Active', totalPaid: 5500, totalDue: 500 },
  { id: 3, name: 'Rahul Verma', phone: '+91 98765 43212', joinDate: '2023-11-05', monthlyFee: 500, status: 'Active', totalPaid: 6000, totalDue: 0 },
  { id: 4, name: 'Priya Singh', phone: '+91 98765 43213', joinDate: '2024-03-10', monthlyFee: 500, status: 'Active', totalPaid: 4500, totalDue: 1000 },
  { id: 5, name: 'Karthik Nair', phone: '+91 98765 43214', joinDate: '2024-01-22', monthlyFee: 500, status: 'Active', totalPaid: 6000, totalDue: 0 },
  { id: 6, name: 'Ananya Das', phone: '+91 98765 43215', joinDate: '2023-09-14', monthlyFee: 500, status: 'Inactive', totalPaid: 3000, totalDue: 2000 },
  { id: 7, name: 'Vikram Rao', phone: '+91 98765 43216', joinDate: '2024-04-01', monthlyFee: 500, status: 'Active', totalPaid: 5500, totalDue: 500 },
  { id: 8, name: 'Meera Joshi', phone: '+91 98765 43217', joinDate: '2024-05-18', monthlyFee: 500, status: 'Active', totalPaid: 4000, totalDue: 1500 },
  { id: 9, name: 'Aditya Gupta', phone: '+91 98765 43218', joinDate: '2023-08-20', monthlyFee: 500, status: 'Active', totalPaid: 6000, totalDue: 0 },
  { id: 10, name: 'Neha Reddy', phone: '+91 98765 43219', joinDate: '2024-06-05', monthlyFee: 500, status: 'Active', totalPaid: 3500, totalDue: 1000 },
  { id: 11, name: 'Rohan Mehta', phone: '+91 98765 43220', joinDate: '2024-02-14', monthlyFee: 500, status: 'Active', totalPaid: 5000, totalDue: 1000 },
  { id: 12, name: 'Kavya Iyer', phone: '+91 98765 43221', joinDate: '2024-03-28', monthlyFee: 500, status: 'Active', totalPaid: 5500, totalDue: 0 },
  { id: 13, name: 'Sanjay Kumar', phone: '+91 98765 43222', joinDate: '2024-07-10', monthlyFee: 500, status: 'Active', totalPaid: 2500, totalDue: 1500 },
  { id: 14, name: 'Divya Nair', phone: '+91 98765 43223', joinDate: '2024-08-01', monthlyFee: 500, status: 'Active', totalPaid: 2000, totalDue: 1500 },
  { id: 15, name: 'Amit Patel', phone: '+91 98765 43224', joinDate: '2023-12-15', monthlyFee: 500, status: 'Active', totalPaid: 5500, totalDue: 500 },
]

// ─── Monthly Ball Fees (per session) ────────────────────
export const ballFees = [
  // July 2026
  { id: 1, memberId: 1, memberName: 'Arjun Sharma', month: 'July 2026', amount: 500, status: 'Paid', paidDate: '2026-07-02', prevDue: 0, notes: '' },
  { id: 2, memberId: 2, memberName: 'Sneha Patel', month: 'July 2026', amount: 500, status: 'Paid', paidDate: '2026-07-05', prevDue: 500, notes: 'Paid June due too' },
  { id: 3, memberId: 3, memberName: 'Rahul Verma', month: 'July 2026', amount: 500, status: 'Paid', paidDate: '2026-07-01', prevDue: 0, notes: '' },
  { id: 4, memberId: 4, memberName: 'Priya Singh', month: 'July 2026', amount: 500, status: 'Due', paidDate: null, prevDue: 1000, notes: '' },
  { id: 5, memberId: 5, memberName: 'Karthik Nair', month: 'July 2026', amount: 500, status: 'Paid', paidDate: '2026-07-08', prevDue: 0, notes: '' },
  { id: 6, memberId: 6, memberName: 'Ananya Das', month: 'July 2026', amount: 500, status: 'Due', paidDate: null, prevDue: 2000, notes: 'Member inactive' },
  { id: 7, memberId: 7, memberName: 'Vikram Rao', month: 'July 2026', amount: 500, status: 'Paid', paidDate: '2026-07-03', prevDue: 500, notes: '' },
  { id: 8, memberId: 8, memberName: 'Meera Joshi', month: 'July 2026', amount: 500, status: 'Due', paidDate: null, prevDue: 1500, notes: '' },
  { id: 9, memberId: 9, memberName: 'Aditya Gupta', month: 'July 2026', amount: 500, status: 'Paid', paidDate: '2026-07-04', prevDue: 0, notes: '' },
  { id: 10, memberId: 10, memberName: 'Neha Reddy', month: 'July 2026', amount: 500, status: 'Paid', paidDate: '2026-07-06', prevDue: 1000, notes: '' },
  { id: 11, memberId: 11, memberName: 'Rohan Mehta', month: 'July 2026', amount: 500, status: 'Due', paidDate: null, prevDue: 1000, notes: '' },
  { id: 12, memberId: 12, memberName: 'Kavya Iyer', month: 'July 2026', amount: 500, status: 'Paid', paidDate: '2026-07-07', prevDue: 0, notes: '' },
  { id: 13, memberId: 13, memberName: 'Sanjay Kumar', month: 'July 2026', amount: 500, status: 'Due', paidDate: null, prevDue: 1500, notes: '' },
  { id: 14, memberId: 14, memberName: 'Divya Nair', month: 'July 2026', amount: 500, status: 'Paid', paidDate: '2026-07-10', prevDue: 1500, notes: '' },
  { id: 15, memberId: 15, memberName: 'Amit Patel', month: 'July 2026', amount: 500, status: 'Paid', paidDate: '2026-07-09', prevDue: 500, notes: '' },
  // June 2026
  { id: 16, memberId: 1, memberName: 'Arjun Sharma', month: 'June 2026', amount: 500, status: 'Paid', paidDate: '2026-06-03', prevDue: 0, notes: '' },
  { id: 17, memberId: 2, memberName: 'Sneha Patel', month: 'June 2026', amount: 500, status: 'Due', paidDate: null, prevDue: 0, notes: 'Paid in July' },
  { id: 18, memberId: 3, memberName: 'Rahul Verma', month: 'June 2026', amount: 500, status: 'Paid', paidDate: '2026-06-02', prevDue: 0, notes: '' },
  { id: 19, memberId: 4, memberName: 'Priya Singh', month: 'June 2026', amount: 500, status: 'Due', paidDate: null, prevDue: 500, notes: '' },
  { id: 20, memberId: 5, memberName: 'Karthik Nair', month: 'June 2026', amount: 500, status: 'Paid', paidDate: '2026-06-05', prevDue: 0, notes: '' },
  { id: 21, memberId: 9, memberName: 'Aditya Gupta', month: 'June 2026', amount: 500, status: 'Paid', paidDate: '2026-06-04', prevDue: 0, notes: '' },
  { id: 22, memberId: 12, memberName: 'Kavya Iyer', month: 'June 2026', amount: 500, status: 'Paid', paidDate: '2026-06-06', prevDue: 0, notes: '' },
]

// ─── Shuttle Stock ──────────────────────────────────────
export const shuttleBrands = ['Yonex', 'Li-Ning', 'RSL', 'Victor', 'Dino', 'Other']

export const shuttleStock = [
  { id: 1, brand: 'Yonex', model: 'Aerosensa 10', quantity: 24, unitPrice: 1200, lastPurchase: '2026-07-01', lowStockThreshold: 10 },
  { id: 2, brand: 'Yonex', model: 'Aerosensa 30', quantity: 8, unitPrice: 1800, lastPurchase: '2026-06-20', lowStockThreshold: 10 },
  { id: 3, brand: 'Li-Ning', model: 'A+ 60', quantity: 18, unitPrice: 1400, lastPurchase: '2026-06-25', lowStockThreshold: 10 },
  { id: 4, brand: 'RSL', model: 'RSL Tourney', quantity: 36, unitPrice: 900, lastPurchase: '2026-07-05', lowStockThreshold: 12 },
  { id: 5, brand: 'Victor', model: 'Gold Champion', quantity: 5, unitPrice: 1600, lastPurchase: '2026-05-28', lowStockThreshold: 8 },
  { id: 6, brand: 'Dino', model: 'Dino Tournament', quantity: 42, unitPrice: 650, lastPurchase: '2026-07-08', lowStockThreshold: 15 },
  { id: 7, brand: 'Other', model: 'Practice Shuttles', quantity: 30, unitPrice: 400, lastPurchase: '2026-06-30', lowStockThreshold: 10 },
]

export const shuttleTransactions = [
  { id: 1, type: 'Stock In', brand: 'Yonex', model: 'Aerosensa 10', quantity: 24, date: '2026-07-01', cost: 28800, note: 'Monthly purchase' },
  { id: 2, type: 'Stock Out', brand: 'Yonex', model: 'Aerosensa 10', quantity: 6, date: '2026-07-14', cost: 0, note: 'Used in sessions' },
  { id: 3, type: 'Stock In', brand: 'RSL', model: 'RSL Tourney', quantity: 36, date: '2026-07-05', cost: 32400, note: 'Bulk order' },
  { id: 4, type: 'Stock Out', brand: 'Li-Ning', model: 'A+ 60', quantity: 4, date: '2026-07-12', cost: 0, note: 'Used in sessions' },
  { id: 5, type: 'Stock In', brand: 'Dino', model: 'Dino Tournament', quantity: 42, date: '2026-07-08', cost: 27300, note: 'Practice stock' },
  { id: 6, type: 'Stock Out', brand: 'RSL', model: 'RSL Tourney', quantity: 8, date: '2026-07-13', cost: 0, note: 'Used in sessions' },
  { id: 7, type: 'Stock In', brand: 'Yonex', model: 'Aerosensa 30', quantity: 12, date: '2026-06-20', cost: 21600, note: '' },
  { id: 8, type: 'Stock Out', brand: 'Dino', model: 'Dino Tournament', quantity: 10, date: '2026-07-11', cost: 0, note: 'Practice session' },
]

// ─── Senior Group Expenses ──────────────────────────────
export const seniorExpenses = [
  { id: 1, category: 'Shuttle Purchase', description: 'Yonex AS10 — 2 dozen', amount: 28800, date: '2026-07-01', receipt: false },
  { id: 2, category: 'Court Charges', description: 'Court 1 booking — July (12 sessions)', amount: 18000, date: '2026-07-01', receipt: true },
  { id: 3, category: 'Shuttle Purchase', description: 'RSL Tourney — 3 dozen', amount: 32400, date: '2026-07-05', receipt: false },
  { id: 4, category: 'Refreshments', description: 'Water bottles & energy drinks', amount: 2500, date: '2026-07-08', receipt: true },
  { id: 5, category: 'Equipment', description: 'New nets for Court 2', amount: 3500, date: '2026-07-10', receipt: true },
  { id: 6, category: 'Shuttle Purchase', description: 'Dino Tournament — 4 dozen', amount: 27300, date: '2026-07-08', receipt: false },
  { id: 7, category: 'Court Charges', description: 'Court 3 booking — July (8 sessions)', amount: 12000, date: '2026-07-01', receipt: true },
  { id: 8, category: 'Miscellaneous', description: 'First aid supplies', amount: 800, date: '2026-07-12', receipt: true },
  { id: 9, category: 'Refreshments', description: 'Post-match snacks', amount: 1500, date: '2026-07-13', receipt: false },
]

// ─── Fund Summary ───────────────────────────────────────
export const fundSummary = {
  '2026-2027': [
    { month: 'April 2026', openingBalance: 15000, collection: 7000, expenses: 42000, closingBalance: -20000 },
    { month: 'May 2026', openingBalance: -20000, collection: 7200, expenses: 35000, closingBalance: -47800 },
    { month: 'June 2026', openingBalance: -47800, collection: 6500, expenses: 52400, closingBalance: -93700 },
    { month: 'July 2026', openingBalance: -93700, collection: 5000, expenses: 106800, closingBalance: -195500 },
  ],
  '2025-2026': [
    { month: 'April 2025', openingBalance: 0, collection: 6500, expenses: 38000, closingBalance: -31500 },
    { month: 'May 2025', openingBalance: -31500, collection: 6800, expenses: 34000, closingBalance: -58700 },
    { month: 'June 2025', openingBalance: -58700, collection: 7000, expenses: 40000, closingBalance: -91700 },
    { month: 'July 2025', openingBalance: -91700, collection: 6200, expenses: 36000, closingBalance: -121500 },
    { month: 'August 2025', openingBalance: -121500, collection: 7100, expenses: 39000, closingBalance: -153400 },
    { month: 'September 2025', openingBalance: -153400, collection: 6900, expenses: 35000, closingBalance: -181500 },
    { month: 'October 2025', openingBalance: -181500, collection: 7200, expenses: 41000, closingBalance: -215300 },
    { month: 'November 2025', openingBalance: -215300, collection: 7000, expenses: 37000, closingBalance: -245300 },
    { month: 'December 2025', openingBalance: -245300, collection: 7500, expenses: 45000, closingBalance: -282800 },
    { month: 'January 2026', openingBalance: -282800, collection: 6800, expenses: 36000, closingBalance: -312000 },
    { month: 'February 2026', openingBalance: -312000, collection: 7000, expenses: 33000, closingBalance: -338000 },
    { month: 'March 2026', openingBalance: -338000, collection: 7200, expenses: 40000, closingBalance: -370800 },
  ],
}

// ─── Monthly Collection Trend ───────────────────────────
export const seniorCollectionTrend = {
  '2026-2027': [
    { month: 'Apr', collected: 7000, due: 500 },
    { month: 'May', collected: 7200, due: 300 },
    { month: 'Jun', collected: 6500, due: 1000 },
    { month: 'Jul', collected: 5000, due: 2500 },
  ],
  '2025-2026': [
    { month: 'Apr', collected: 6500, due: 500 }, { month: 'May', collected: 6800, due: 200 },
    { month: 'Jun', collected: 7000, due: 0 }, { month: 'Jul', collected: 6200, due: 800 },
    { month: 'Aug', collected: 7100, due: 400 }, { month: 'Sep', collected: 6900, due: 600 },
    { month: 'Oct', collected: 7200, due: 300 }, { month: 'Nov', collected: 7000, due: 500 },
    { month: 'Dec', collected: 7500, due: 0 }, { month: 'Jan', collected: 6800, due: 700 },
    { month: 'Feb', collected: 7000, due: 500 }, { month: 'Mar', collected: 7200, due: 300 },
  ],
}

// ─── Expense Category Breakdown ─────────────────────────
export const seniorExpenseBreakdown = [
  { name: 'Shuttle Purchase', value: 88500, color: '#2563EB' },
  { name: 'Court Charges', value: 30000, color: '#10B981' },
  { name: 'Refreshments', value: 4000, color: '#F97316' },
  { name: 'Equipment', value: 3500, color: '#8B5CF6' },
  { name: 'Miscellaneous', value: 800, color: '#EC4899' },
]

// ─── Notifications ──────────────────────────────────────
export const seniorNotifications = [
  { id: 1, type: 'fee', message: '5 members have pending ball fees for July', time: '2 hours ago', read: false },
  { id: 2, type: 'stock', message: 'Victor Gold Champion stock is low (5 remaining)', time: '1 day ago', read: false },
  { id: 3, type: 'stock', message: 'Yonex Aerosensa 30 stock is low (8 remaining)', time: '1 day ago', read: true },
  { id: 4, type: 'fund', message: 'July fund statement is ready for review', time: '2 days ago', read: true },
  { id: 5, type: 'fee', message: 'Ananya Das has been inactive — dues outstanding', time: '3 days ago', read: true },
]
