import { Link } from 'react-router-dom'
import {
  Users, CreditCard, AlertTriangle, Package, Wallet, TrendingUp,
  ArrowUpRight, ArrowDownRight, ChevronRight, ShoppingCart, Receipt
} from 'lucide-react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts'
import { seniorMembers, ballFees, shuttleStock, seniorExpenses, seniorExpenseBreakdown, seniorCollectionTrend, seniorNotifications } from '../../data/seniorGroupData'
import { useSession } from '../../context/SessionContext'

export default function SeniorGroup() {
  const { activeSession } = useSession()
  const activeMembers = seniorMembers.filter(m => m.status === 'Active')
  const currentFees = ballFees.filter(f => f.month === 'July 2026')
  const paidMembers = currentFees.filter(f => f.status === 'Paid')
  const dueMembers = currentFees.filter(f => f.status === 'Due')
  const collectionAmount = paidMembers.reduce((s, f) => s + f.amount, 0)
  const outstandingBalance = dueMembers.reduce((s, f) => s + f.amount, 0)
  const totalStock = shuttleStock.reduce((s, i) => s + i.quantity, 0)
  const lowStockItems = shuttleStock.filter(i => i.quantity <= i.lowStockThreshold)
  const totalExpenses = seniorExpenses.reduce((s, e) => s + e.amount, 0)
  const collectionData = seniorCollectionTrend[activeSession] || seniorCollectionTrend['2026-2027']

  const widgets = [
    { label: 'Active Members', value: activeMembers.length, icon: Users, color: 'bg-primary-50 text-primary-600', change: '+2', up: true },
    { label: 'Collection (Jul)', value: `₹${collectionAmount.toLocaleString()}`, icon: CreditCard, color: 'bg-accent-green/10 text-accent-green', change: `${paidMembers.length} paid`, up: true },
    { label: 'Outstanding Dues', value: `₹${outstandingBalance.toLocaleString()}`, icon: AlertTriangle, color: 'bg-accent-orange/10 text-accent-orange', change: `${dueMembers.length} due`, up: false },
    { label: 'Shuttle Stock', value: `${totalStock} units`, icon: Package, color: 'bg-purple-50 text-purple-600', change: `${lowStockItems.length} low`, up: lowStockItems.length === 0 },
    { label: 'Monthly Expenses', value: `₹${totalExpenses.toLocaleString()}`, icon: Receipt, color: 'bg-accent-red/10 text-accent-red', change: '+5.2%', up: true },
    { label: 'Fund Balance', value: '₹15,000', icon: Wallet, color: 'bg-cyan-50 text-cyan-600', change: 'Opening', up: true },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="page-title">Senior Group Fund</h1>
          <p className="page-subtitle">9:30 PM Group — Fund & shuttle management overview</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 text-xs font-semibold bg-primary-50 text-primary-700 rounded-lg">{activeSession}</span>
        </div>
      </div>

      {/* Stat Widgets */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {widgets.map((w, i) => (
          <div key={i} className="card-hover">
            <div className="flex items-start justify-between">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${w.color}`}>
                <w.icon className="w-5 h-5" />
              </div>
              <span className={`flex items-center gap-0.5 text-xs font-medium ${w.up ? 'text-accent-green' : 'text-accent-orange'}`}>
                {w.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {w.change}
              </span>
            </div>
            <div className="mt-3">
              <p className="text-xl font-bold text-gray-900">{w.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{w.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-semibold text-gray-900">Collection vs Dues</h3>
              <p className="text-sm text-gray-500">Monthly trend for {activeSession}</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-primary-500" /> Collected</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-accent-orange" /> Due</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={collectionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} tickFormatter={(v) => `₹${v / 1000}K`} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #E2E8F0' }} formatter={(value) => [`₹${value.toLocaleString()}`, '']} />
              <Bar dataKey="collected" fill="#2563EB" radius={[6, 6, 0, 0]} name="Collected" />
              <Bar dataKey="due" fill="#F97316" radius={[6, 6, 0, 0]} name="Due" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-base font-semibold text-gray-900 mb-1">Expense Breakdown</h3>
          <p className="text-sm text-gray-500 mb-4">This session by category</p>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={seniorExpenseBreakdown} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={3} dataKey="value">
                {seniorExpenseBreakdown.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, '']} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {seniorExpenseBreakdown.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-gray-600">{item.name}</span>
                </span>
                <span className="font-medium text-gray-900">₹{item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-base font-semibold text-gray-900">Recent Transactions</h3>
            <Link to="/dashboard/senior-group/fund-summary" className="text-xs text-primary-600 font-medium">View all</Link>
          </div>
          <div className="space-y-3">
            {seniorExpenses.slice(0, 5).map(exp => (
              <div key={exp.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${exp.category === 'Shuttle Purchase' ? 'bg-primary-50' : exp.category === 'Court Charges' ? 'bg-green-50' : 'bg-gray-50'}`}>
                    {exp.category === 'Shuttle Purchase' ? <ShoppingCart className="w-4 h-4 text-primary-600" /> : <Receipt className="w-4 h-4 text-gray-500" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{exp.description}</p>
                    <p className="text-xs text-gray-400">{exp.date} · {exp.category}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-accent-red">-₹{exp.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts & Quick Links */}
        <div className="space-y-6">
          {/* Low Stock Alerts */}
          {lowStockItems.length > 0 && (
            <div className="card border border-accent-orange/20 bg-accent-orange/5">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-accent-orange" /> Low Stock Alerts
              </h3>
              <div className="space-y-2">
                {lowStockItems.map(item => (
                  <div key={item.id} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{item.brand} {item.model}</span>
                    <span className="font-medium text-accent-orange">{item.quantity} left</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="card">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/dashboard/senior-group/ball-fees" className="flex flex-col items-center gap-2 p-3 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
                <CreditCard className="w-5 h-5 text-accent-green" />
                <span className="text-xs font-medium text-green-700">Collect Fees</span>
              </Link>
              <Link to="/dashboard/senior-group/shuttle-stock" className="flex flex-col items-center gap-2 p-3 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
                <Package className="w-5 h-5 text-purple-600" />
                <span className="text-xs font-medium text-purple-700">Add Stock</span>
              </Link>
              <Link to="/dashboard/senior-group/expenses" className="flex flex-col items-center gap-2 p-3 rounded-xl bg-red-50 hover:bg-red-100 transition-colors">
                <Receipt className="w-5 h-5 text-accent-red" />
                <span className="text-xs font-medium text-red-700">Add Expense</span>
              </Link>
              <Link to="/dashboard/senior-group/members" className="flex flex-col items-center gap-2 p-3 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors">
                <Users className="w-5 h-5 text-primary-600" />
                <span className="text-xs font-medium text-primary-700">Members</span>
              </Link>
            </div>
          </div>

          {/* Notifications */}
          <div className="card">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Notifications</h3>
            <div className="space-y-2">
              {seniorNotifications.filter(n => !n.read).map(n => (
                <div key={n.id} className="flex items-start gap-2 text-sm">
                  <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${n.type === 'fee' ? 'bg-accent-orange' : n.type === 'stock' ? 'bg-accent-red' : 'bg-primary-500'}`} />
                  <div>
                    <p className="text-gray-700">{n.message}</p>
                    <p className="text-xs text-gray-400">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
