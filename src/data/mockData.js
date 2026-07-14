// Mock data for Phoenix Court Hub

export const members = [
  { id: 1, name: 'Arjun Sharma', email: 'arjun.sharma@email.com', phone: '+91 98765 43210', role: 'Member', status: 'Active', plan: 'Premium', joinDate: '2024-01-15', avatar: null, emergencyContact: 'Priya Sharma - +91 98765 11111', attendance: 87, feesPaid: true },
  { id: 2, name: 'Sneha Patel', email: 'sneha.patel@email.com', phone: '+91 98765 43211', role: 'Member', status: 'Active', plan: 'Standard', joinDate: '2024-02-20', avatar: null, emergencyContact: 'Raj Patel - +91 98765 22222', attendance: 92, feesPaid: true },
  { id: 3, name: 'Rahul Verma', email: 'rahul.v@email.com', phone: '+91 98765 43212', role: 'Captain', status: 'Active', plan: 'Premium', joinDate: '2023-11-05', avatar: null, emergencyContact: 'Anita Verma - +91 98765 33333', attendance: 78, feesPaid: true },
  { id: 4, name: 'Priya Singh', email: 'priya.singh@email.com', phone: '+91 98765 43213', role: 'Member', status: 'Active', plan: 'Basic', joinDate: '2024-03-10', avatar: null, emergencyContact: 'Vikram Singh - +91 98765 44444', attendance: 65, feesPaid: false },
  { id: 5, name: 'Karthik Nair', email: 'karthik.n@email.com', phone: '+91 98765 43214', role: 'Member', status: 'Active', plan: 'Standard', joinDate: '2024-01-22', avatar: null, emergencyContact: 'Meera Nair - +91 98765 55555', attendance: 81, feesPaid: true },
  { id: 6, name: 'Ananya Das', email: 'ananya.das@email.com', phone: '+91 98765 43215', role: 'Member', status: 'Inactive', plan: 'Standard', joinDate: '2023-09-14', avatar: null, emergencyContact: 'Suman Das - +91 98765 66666', attendance: 45, feesPaid: false },
  { id: 7, name: 'Vikram Rao', email: 'vikram.rao@email.com', phone: '+91 98765 43216', role: 'Member', status: 'Active', plan: 'Premium', joinDate: '2024-04-01', avatar: null, emergencyContact: 'Lakshmi Rao - +91 98765 77777', attendance: 95, feesPaid: true },
  { id: 8, name: 'Meera Joshi', email: 'meera.j@email.com', phone: '+91 98765 43217', role: 'Member', status: 'Active', plan: 'Basic', joinDate: '2024-05-18', avatar: null, emergencyContact: 'Sanjay Joshi - +91 98765 88888', attendance: 72, feesPaid: false },
  { id: 9, name: 'Aditya Gupta', email: 'aditya.g@email.com', phone: '+91 98765 43218', role: 'Vice Captain', status: 'Active', plan: 'Premium', joinDate: '2023-08-20', avatar: null, emergencyContact: 'Kavita Gupta - +91 98765 99999', attendance: 88, feesPaid: true },
  { id: 10, name: 'Neha Reddy', email: 'neha.r@email.com', phone: '+91 98765 43219', role: 'Member', status: 'Active', plan: 'Standard', joinDate: '2024-06-05', avatar: null, emergencyContact: 'Suresh Reddy - +91 98765 00000', attendance: 69, feesPaid: true },
  { id: 11, name: 'Rohan Mehta', email: 'rohan.m@email.com', phone: '+91 98765 43220', role: 'Member', status: 'Active', plan: 'Basic', joinDate: '2024-02-14', avatar: null, emergencyContact: 'Pooja Mehta - +91 98765 12121', attendance: 58, feesPaid: false },
  { id: 12, name: 'Kavya Iyer', email: 'kavya.i@email.com', phone: '+91 98765 43221', role: 'Member', status: 'Active', plan: 'Standard', joinDate: '2024-03-28', avatar: null, emergencyContact: 'Ravi Iyer - +91 98765 13131', attendance: 84, feesPaid: true },
]

export const fees = [
  { id: 1, memberId: 1, memberName: 'Arjun Sharma', amount: 1500, month: 'July 2026', status: 'Paid', paidDate: '2026-07-02', method: 'UPI' },
  { id: 2, memberId: 2, memberName: 'Sneha Patel', amount: 1000, month: 'July 2026', status: 'Paid', paidDate: '2026-07-05', method: 'Bank Transfer' },
  { id: 3, memberId: 3, memberName: 'Rahul Verma', amount: 1500, month: 'July 2026', status: 'Paid', paidDate: '2026-07-01', method: 'Cash' },
  { id: 4, memberId: 4, memberName: 'Priya Singh', amount: 800, month: 'July 2026', status: 'Overdue', paidDate: null, method: null },
  { id: 5, memberId: 5, memberName: 'Karthik Nair', amount: 1000, month: 'July 2026', status: 'Paid', paidDate: '2026-07-08', method: 'UPI' },
  { id: 6, memberId: 6, memberName: 'Ananya Das', amount: 1000, month: 'July 2026', status: 'Overdue', paidDate: null, method: null },
  { id: 7, memberId: 7, memberName: 'Vikram Rao', amount: 1500, month: 'July 2026', status: 'Paid', paidDate: '2026-07-03', method: 'UPI' },
  { id: 8, memberId: 8, memberName: 'Meera Joshi', amount: 800, month: 'July 2026', status: 'Pending', paidDate: null, method: null },
  { id: 9, memberId: 9, memberName: 'Aditya Gupta', amount: 1500, month: 'July 2026', status: 'Paid', paidDate: '2026-07-04', method: 'Bank Transfer' },
  { id: 10, memberId: 10, memberName: 'Neha Reddy', amount: 1000, month: 'July 2026', status: 'Paid', paidDate: '2026-07-06', method: 'Cash' },
  { id: 11, memberId: 11, memberName: 'Rohan Mehta', amount: 800, month: 'July 2026', status: 'Pending', paidDate: null, method: null },
  { id: 12, memberId: 12, memberName: 'Kavya Iyer', amount: 1000, month: 'July 2026', status: 'Paid', paidDate: '2026-07-07', method: 'UPI' },
]

export const courts = [
  { id: 1, name: 'Court 1', status: 'Available' },
  { id: 2, name: 'Court 2', status: 'Available' },
  { id: 3, name: 'Court 3', status: 'Maintenance' },
  { id: 4, name: 'Court 4', status: 'Available' },
]

export const bookings = [
  { id: 1, courtId: 1, courtName: 'Court 1', memberName: 'Arjun Sharma', date: '2026-07-14', startTime: '06:00', endTime: '08:00', status: 'Confirmed' },
  { id: 2, courtId: 2, courtName: 'Court 2', memberName: 'Sneha Patel', date: '2026-07-14', startTime: '07:00', endTime: '09:00', status: 'Confirmed' },
  { id: 3, courtId: 1, courtName: 'Court 1', memberName: 'Rahul Verma', date: '2026-07-14', startTime: '09:00', endTime: '11:00', status: 'Confirmed' },
  { id: 4, courtId: 4, courtName: 'Court 4', memberName: 'Karthik Nair', date: '2026-07-14', startTime: '17:00', endTime: '19:00', status: 'Confirmed' },
  { id: 5, courtId: 2, courtName: 'Court 2', memberName: 'Vikram Rao', date: '2026-07-14', startTime: '18:00', endTime: '20:00', status: 'Pending' },
  { id: 6, courtId: 1, courtName: 'Court 1', memberName: 'Aditya Gupta', date: '2026-07-15', startTime: '06:00', endTime: '08:00', status: 'Confirmed' },
  { id: 7, courtId: 4, courtName: 'Court 4', memberName: 'Neha Reddy', date: '2026-07-15', startTime: '17:00', endTime: '19:00', status: 'Confirmed' },
]

export const inventory = [
  { id: 1, item: 'Yonex Aerosensa 10', category: 'Feather', quantity: 24, status: 'In Stock', vendor: 'Yonex India', lastPurchase: '2026-06-20', unitPrice: 1200 },
  { id: 2, item: 'Yonex Aerosensa 30', category: 'Feather', quantity: 12, status: 'Low Stock', vendor: 'Yonex India', lastPurchase: '2026-06-15', unitPrice: 1800 },
  { id: 3, item: 'Li-Ning A+ 60', category: 'Feather', quantity: 18, status: 'In Stock', vendor: 'Li-Ning Store', lastPurchase: '2026-06-25', unitPrice: 1400 },
  { id: 4, item: 'Mavis 350', category: 'Nylon', quantity: 48, status: 'In Stock', vendor: 'Decathlon', lastPurchase: '2026-07-01', unitPrice: 650 },
  { id: 5, item: 'Mavis 250', category: 'Nylon', quantity: 6, status: 'Low Stock', vendor: 'Decathlon', lastPurchase: '2026-05-28', unitPrice: 550 },
  { id: 6, item: 'Yonex BG65 String', category: 'Strings', quantity: 15, status: 'In Stock', vendor: 'Badminton Warehouse', lastPurchase: '2026-06-10', unitPrice: 350 },
  { id: 7, item: 'Yonex BG80 String', category: 'Strings', quantity: 8, status: 'In Stock', vendor: 'Badminton Warehouse', lastPurchase: '2026-06-10', unitPrice: 420 },
  { id: 8, item: 'Grip Tape (Overgrip)', category: 'Accessories', quantity: 30, status: 'In Stock', vendor: 'Decathlon', lastPurchase: '2026-06-30', unitPrice: 120 },
]

export const expenses = [
  { id: 1, category: 'Equipment', description: 'Shuttlecocks - Yonex AS10 (2 dozen)', amount: 28800, date: '2026-07-01', paidBy: 'Treasurer' },
  { id: 2, category: 'Court Maintenance', description: 'Net replacement - Court 2', amount: 3500, date: '2026-07-03', paidBy: 'Admin' },
  { id: 3, category: 'Utilities', description: 'Electricity bill - June', amount: 12000, date: '2026-07-05', paidBy: 'Treasurer' },
  { id: 4, category: 'Tournament', description: 'Prize money - Summer Open', amount: 15000, date: '2026-07-08', paidBy: 'Treasurer' },
  { id: 5, category: 'Equipment', description: 'Nylon shuttles - Mavis 350 (4 dozen)', amount: 2600, date: '2026-07-10', paidBy: 'Admin' },
  { id: 6, category: 'Maintenance', description: 'Court flooring repair - Court 3', amount: 8500, date: '2026-07-12', paidBy: 'Admin' },
  { id: 7, category: 'Utilities', description: 'Water supply - June', amount: 2500, date: '2026-07-05', paidBy: 'Treasurer' },
  { id: 8, category: 'Miscellaneous', description: 'First aid kit replenishment', amount: 1200, date: '2026-07-11', paidBy: 'Admin' },
]

export const tournaments = [
  { id: 1, name: 'Phoenix Summer Open 2026', type: 'Singles & Doubles', status: 'Completed', startDate: '2026-06-15', endDate: '2026-06-18', participants: 32, prize: 25000, venue: 'Phoenix Court Hub' },
  { id: 2, name: 'Monsoon Challenge Cup', type: 'Doubles', status: 'Upcoming', startDate: '2026-08-10', endDate: '2026-08-12', participants: 24, prize: 15000, venue: 'Phoenix Court Hub' },
  { id: 3, name: 'Inter-Club Friendly', type: 'Team', status: 'Upcoming', startDate: '2026-07-28', endDate: '2026-07-28', participants: 16, prize: 0, venue: 'City Sports Complex' },
  { id: 4, name: 'Annual Championship 2025', type: 'Singles & Doubles', status: 'Completed', startDate: '2025-12-20', endDate: '2025-12-23', participants: 48, prize: 50000, venue: 'Phoenix Court Hub' },
  { id: 5, name: 'Weekend Round Robin', type: 'Singles', status: 'Ongoing', startDate: '2026-07-12', endDate: '2026-07-20', participants: 12, prize: 5000, venue: 'Phoenix Court Hub' },
]

export const announcements = [
  { id: 1, title: 'Court 3 Maintenance Scheduled', content: 'Court 3 will be under maintenance from July 20-22. Please book other courts during this period.', date: '2026-07-13', author: 'Admin', priority: 'High' },
  { id: 2, title: 'Monsoon Challenge Cup Registration Open', content: 'Registrations are now open for the Monsoon Challenge Cup (Aug 10-12). Register before Aug 5 to secure your spot.', date: '2026-07-12', author: 'Admin', priority: 'Normal' },
  { id: 3, title: 'New Shuttle Stock Arrived', content: 'We have received new Yonex Aerosensa 30 shuttlecocks. They are available for practice sessions.', date: '2026-07-10', author: 'Treasurer', priority: 'Normal' },
  { id: 4, title: 'Monthly Fee Reminder', content: 'This is a reminder that July fees are due by July 15. Please make your payments on time to avoid late fees.', date: '2026-07-08', author: 'Treasurer', priority: 'High' },
  { id: 5, title: 'Summer Open Results Published', content: 'Congratulations to all winners of the Phoenix Summer Open 2026! Check the tournament page for full results.', date: '2026-06-20', author: 'Admin', priority: 'Normal' },
]

export const attendanceData = [
  { date: '2026-07-14', present: 28, absent: 4, total: 32 },
  { date: '2026-07-13', present: 25, absent: 7, total: 32 },
  { date: '2026-07-12', present: 30, absent: 2, total: 32 },
  { date: '2026-07-11', present: 22, absent: 10, total: 32 },
  { date: '2026-07-10', present: 27, absent: 5, total: 32 },
  { date: '2026-07-09', present: 29, absent: 3, total: 32 },
  { date: '2026-07-08', present: 26, absent: 6, total: 32 },
]

export const revenueData = [
  { month: 'Jan', revenue: 42000, expenses: 28000 },
  { month: 'Feb', revenue: 38000, expenses: 25000 },
  { month: 'Mar', revenue: 45000, expenses: 32000 },
  { month: 'Apr', revenue: 41000, expenses: 27000 },
  { month: 'May', revenue: 48000, expenses: 35000 },
  { month: 'Jun', revenue: 52000, expenses: 38000 },
  { month: 'Jul', revenue: 47000, expenses: 30000 },
]

export const monthlyAttendanceTrend = [
  { month: 'Jan', rate: 78 },
  { month: 'Feb', rate: 82 },
  { month: 'Mar', rate: 85 },
  { month: 'Apr', rate: 79 },
  { month: 'May', rate: 88 },
  { month: 'Jun', rate: 91 },
  { month: 'Jul', rate: 87 },
]

export const notifications = [
  { id: 1, type: 'fee', message: 'Priya Singh fee is overdue', time: '2 hours ago', read: false },
  { id: 2, type: 'booking', message: 'New court booking by Arjun Sharma', time: '3 hours ago', read: false },
  { id: 3, type: 'tournament', message: 'Monsoon Challenge Cup registrations opened', time: '1 day ago', read: true },
  { id: 4, type: 'inventory', message: 'Yonex AS30 stock is running low', time: '1 day ago', read: true },
  { id: 5, type: 'announcement', message: 'Court 3 maintenance scheduled', time: '2 days ago', read: true },
]

export const recentActivity = [
  { id: 1, action: 'Payment received', detail: 'Arjun Sharma paid ₹1,500', time: '2 hours ago', icon: 'payment' },
  { id: 2, action: 'New booking', detail: 'Court 1 booked by Rahul Verma', time: '3 hours ago', icon: 'calendar' },
  { id: 3, action: 'Member added', detail: 'Neha Reddy joined the club', time: '1 day ago', icon: 'user' },
  { id: 4, action: 'Tournament updated', detail: 'Weekend Round Robin scores updated', time: '1 day ago', icon: 'trophy' },
  { id: 5, action: 'Stock updated', detail: '24 shuttles added to inventory', time: '2 days ago', icon: 'package' },
]
