import { useState } from 'react'
import { Download, FileText, Calendar } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { revenueData, monthlyAttendanceTrend } from '../../data/mockData'

const reportTypes = [
  { id: 'collection', label: 'Collection Report', icon: '💰' },
  { id: 'dues', label: 'Outstanding Dues', icon: '📋' },
  { id: 'attendance', label: 'Attendance Report', icon: '📊' },
  { id: 'expense', label: 'Expense Report', icon: '💳' },
  { id: 'inventory', label: 'Inventory Report', icon: '📦' },
  { id: 'tournament', label: 'Tournament Summary', icon: '🏆' },
]

const collectionData = [
  { month: 'Jan', amount: 42000 }, { month: 'Feb', amount: 38000 }, { month: 'Mar', amount: 45000 },
  { month: 'Apr', amount: 41000 }, { month: 'May', amount: 48000 }, { month: 'Jun', amount: 52000 }, { month: 'Jul', amount: 47000 },
]

const expenseTrend = [
  { month: 'Jan', amount: 28000 }, { month: 'Feb', amount: 25000 }, { month: 'Mar', amount: 32000 },
  { month: 'Apr', amount: 27000 }, { month: 'May', amount: 35000 }, { month: 'Jun', amount: 38000 }, { month: 'Jul', amount: 30000 },
]

const duesData = [
  { name: 'Paid', value: 11800, color: '#10B981' },
  { name: 'Pending', value: 1600, color: '#F97316' },
  { name: 'Overdue', value: 1800, color: '#EF4444' },
]

export default function Reports() {
  const [activeReport, setActiveReport] = useState('collection')

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="page-title">Reports & Analytics</h1>
          <p className="page-subtitle">Generate and download club reports</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-secondary text-sm"><Calendar className="w-4 h-4 mr-1.5" /> Jul 2026</button>
          <button className="btn-primary text-sm"><Download className="w-4 h-4 mr-1.5" /> Download PDF</button>
        </div>
      </div>

      {/* Report Type Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {reportTypes.map(rt => (
          <button
            key={rt.id}
            onClick={() => setActiveReport(rt.id)}
            className={`p-4 rounded-2xl text-center transition-all ${activeReport === rt.id ? 'bg-primary-600 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-sm'}`}
          >
            <span className="text-2xl block mb-2">{rt.icon}</span>
            <span className="text-xs font-medium">{rt.label}</span>
          </button>
        ))}
      </div>

      {/* Report Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-semibold text-gray-900">
              {activeReport === 'collection' && 'Monthly Collection'}
              {activeReport === 'dues' && 'Dues Overview'}
              {activeReport === 'attendance' && 'Attendance Trend'}
              {activeReport === 'expense' && 'Expense Trend'}
              {activeReport === 'inventory' && 'Stock Levels'}
              {activeReport === 'tournament' && 'Tournament Stats'}
            </h3>
            <button className="text-xs text-primary-600 font-medium flex items-center gap-1"><FileText className="w-3 h-3" /> Details</button>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            {activeReport === 'collection' ? (
              <BarChart data={collectionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} tickFormatter={(v) => `₹${v / 1000}K`} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #E2E8F0' }} formatter={(value) => [`₹${value.toLocaleString()}`, 'Collected']} />
                <Bar dataKey="amount" fill="#2563EB" radius={[6, 6, 0, 0]} />
              </BarChart>
            ) : activeReport === 'attendance' ? (
              <AreaChart data={monthlyAttendanceTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} domain={[60, 100]} tickFormatter={(v) => `${v}%`} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #E2E8F0' }} formatter={(value) => [`${value}%`, 'Rate']} />
                <Area type="monotone" dataKey="rate" stroke="#2563EB" fill="#DBEAFE" strokeWidth={2.5} />
              </AreaChart>
            ) : activeReport === 'expense' ? (
              <LineChart data={expenseTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} tickFormatter={(v) => `₹${v / 1000}K`} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #E2E8F0' }} formatter={(value) => [`₹${value.toLocaleString()}`, 'Expenses']} />
                <Line type="monotone" dataKey="amount" stroke="#EF4444" strokeWidth={2.5} dot={false} />
              </LineChart>
            ) : (
              <PieChart>
                <Pie data={duesData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={3} dataKey="value">
                  {duesData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                </Pie>
                <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, '']} />
              </PieChart>
            )}
          </ResponsiveContainer>
        </div>

        {/* Summary Stats */}
        <div className="space-y-4">
          <div className="card">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm"><span className="text-gray-500">Total Revenue</span><span className="font-semibold text-gray-900">₹3,13,000</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Total Expenses</span><span className="font-semibold text-gray-900">₹2,15,000</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Net Income</span><span className="font-semibold text-accent-green">₹98,000</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Outstanding</span><span className="font-semibold text-accent-orange">₹3,400</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Avg. Attendance</span><span className="font-semibold text-gray-900">84.3%</span></div>
            </div>
          </div>
          <div className="card">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm"><span className="text-gray-500">Active Members</span><span className="font-semibold">148</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Courts Available</span><span className="font-semibold">4</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Tournaments (YTD)</span><span className="font-semibold">5</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Stock Items</span><span className="font-semibold">161 units</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
