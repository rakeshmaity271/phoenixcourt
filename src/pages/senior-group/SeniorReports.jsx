import { useState } from 'react'
import { Download, FileText, Calendar } from 'lucide-react'
import { BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ballFees, seniorExpenses, shuttleStock, seniorExpenseBreakdown, seniorCollectionTrend } from '../../data/seniorGroupData'
import { useSession } from '../../context/SessionContext'

const reportTypes = [
  { id: 'collection', label: 'Monthly Collection', icon: '💰' },
  { id: 'dues', label: 'Due Members', icon: '📋' },
  { id: 'payment-history', label: 'Payment History', icon: '📊' },
  { id: 'expense-summary', label: 'Expense Summary', icon: '💳' },
  { id: 'shuttle-purchase', label: 'Shuttle Purchases', icon: '🏸' },
  { id: 'stock-report', label: 'Current Stock', icon: '📦' },
  { id: 'fund-statement', label: 'Fund Statement', icon: '🏦' },
]

const duesData = [
  { name: 'Paid', value: 10, color: '#10B981' },
  { name: 'Due', value: 5, color: '#F97316' },
]

export default function SeniorReports() {
  const { activeSession } = useSession()
  const [activeReport, setActiveReport] = useState('collection')
  const sessionTrend = seniorCollectionTrend[activeSession] || seniorCollectionTrend['2026-2027']
  const collectionData = sessionTrend.map(d => ({ month: d.month, amount: d.collected }))

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="page-title">Senior Group Reports</h1>
          <p className="page-subtitle">Generate reports for the 9:30 PM group — <span className="font-medium text-primary-600">{activeSession}</span></p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-secondary text-sm"><Calendar className="w-4 h-4 mr-1.5" /> {activeSession}</button>
          <button className="btn-primary text-sm"><Download className="w-4 h-4 mr-1.5" /> Export PDF</button>
        </div>
      </div>

      {/* Report Type Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {reportTypes.map(rt => (
          <button
            key={rt.id}
            onClick={() => setActiveReport(rt.id)}
            className={`p-3 rounded-2xl text-center transition-all ${activeReport === rt.id ? 'bg-primary-600 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-sm'}`}
          >
            <span className="text-xl block mb-1.5">{rt.icon}</span>
            <span className="text-[11px] font-medium leading-tight">{rt.label}</span>
          </button>
        ))}
      </div>

      {/* Report Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card">
          <h3 className="text-base font-semibold text-gray-900 mb-4">
            {activeReport === 'collection' && 'Monthly Collection'}
            {activeReport === 'dues' && 'Due Members Overview'}
            {activeReport === 'payment-history' && 'Payment History'}
            {activeReport === 'expense-summary' && 'Expense Summary'}
            {activeReport === 'shuttle-purchase' && 'Shuttle Purchase History'}
            {activeReport === 'stock-report' && 'Current Stock Report'}
            {activeReport === 'fund-statement' && 'Monthly Fund Statement'}
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            {activeReport === 'collection' ? (
              <BarChart data={collectionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} tickFormatter={(v) => `₹${v / 1000}K`} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #E2E8F0' }} formatter={(value) => [`₹${value.toLocaleString()}`, 'Collected']} />
                <Bar dataKey="amount" fill="#2563EB" radius={[6, 6, 0, 0]} />
              </BarChart>
            ) : activeReport === 'expense-summary' ? (
              <BarChart data={seniorExpenseBreakdown}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94A3B8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} tickFormatter={(v) => `₹${v / 1000}K`} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #E2E8F0' }} formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']} />
                <Bar dataKey="value" fill="#EF4444" radius={[6, 6, 0, 0]} />
              </BarChart>
            ) : activeReport === 'dues' ? (
              <PieChart>
                <Pie data={duesData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={3} dataKey="value">
                  {duesData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                </Pie>
                <Tooltip formatter={(value) => [`${value} members`, '']} />
              </PieChart>
            ) : (
              <AreaChart data={sessionTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} tickFormatter={(v) => `₹${v / 1000}K`} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #E2E8F0' }} formatter={(value) => [`₹${value.toLocaleString()}`, '']} />
                <Area type="monotone" dataKey="collected" stroke="#2563EB" fill="#DBEAFE" strokeWidth={2.5} name="Collected" />
                <Area type="monotone" dataKey="due" stroke="#F97316" fill="#FFF7ED" strokeWidth={2.5} name="Due" />
              </AreaChart>
            )}
          </ResponsiveContainer>
        </div>

        {/* Summary */}
        <div className="space-y-4">
          <div className="card">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm"><span className="text-gray-500">Total Collection</span><span className="font-semibold text-accent-green">₹{sessionTrend.reduce((s, d) => s + d.collected, 0).toLocaleString()}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Total Dues</span><span className="font-semibold text-accent-orange">₹{sessionTrend.reduce((s, d) => s + d.due, 0).toLocaleString()}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Total Expenses</span><span className="font-semibold text-accent-red">₹{seniorExpenses.reduce((s, e) => s + e.amount, 0).toLocaleString()}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Active Members</span><span className="font-semibold">14</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Shuttle Stock</span><span className="font-semibold">{shuttleStock.reduce((s, i) => s + i.quantity, 0)} units</span></div>
            </div>
          </div>
          <div className="card">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Export Options</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                <FileText className="w-4 h-4 text-accent-red" /> Download as PDF
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                <Download className="w-4 h-4 text-accent-green" /> Download as Excel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
