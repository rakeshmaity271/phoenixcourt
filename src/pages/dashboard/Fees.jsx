import { useState } from 'react'
import { Search, Plus, Download, Bell, CreditCard, AlertTriangle, CheckCircle, Clock } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { fees } from '../../data/mockData'
import { useSession } from '../../context/SessionContext'

const monthlyData = [
  { month: 'Jan', collected: 42000, pending: 5000 },
  { month: 'Feb', collected: 38000, pending: 8000 },
  { month: 'Mar', collected: 45000, pending: 3000 },
  { month: 'Apr', collected: 41000, pending: 6000 },
  { month: 'May', collected: 48000, pending: 4000 },
  { month: 'Jun', collected: 52000, pending: 2000 },
  { month: 'Jul', collected: 11800, pending: 3400 },
]

export default function Fees() {
  const { activeSession } = useSession()
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [showRecordModal, setShowRecordModal] = useState(false)

  const sessionFees = fees.filter(f => f.session === activeSession)

  const paid = sessionFees.filter(f => f.status === 'Paid')
  const pending = sessionFees.filter(f => f.status === 'Pending')
  const overdue = sessionFees.filter(f => f.status === 'Overdue')

  const filtered = sessionFees.filter(f => {
    const matchSearch = f.memberName.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'All' || f.status === statusFilter
    return matchSearch && matchStatus
  })

  const totalCollected = paid.reduce((sum, f) => sum + f.amount, 0)
  const totalPending = pending.reduce((sum, f) => sum + f.amount, 0)
  const totalOverdue = overdue.reduce((sum, f) => sum + f.amount, 0)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="page-title">Monthly Fees</h1>
          <p className="page-subtitle">Manage and track member fee payments — <span className="font-medium text-primary-600">{activeSession}</span></p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-secondary text-sm"><Download className="w-4 h-4 mr-1.5" /> Export</button>
          <button className="btn-secondary text-sm"><Bell className="w-4 h-4 mr-1.5" /> Send Reminders</button>
          <button onClick={() => setShowRecordModal(true)} className="btn-primary text-sm"><Plus className="w-4 h-4 mr-1.5" /> Record Payment</button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card flex items-center gap-4">
          <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-accent-green" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">₹{totalCollected.toLocaleString()}</p>
            <p className="text-sm text-gray-500">{paid.length} Paid</p>
          </div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center">
            <Clock className="w-6 h-6 text-accent-orange" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">₹{totalPending.toLocaleString()}</p>
            <p className="text-sm text-gray-500">{pending.length} Pending</p>
          </div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="w-12 h-12 bg-accent-red/10 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-accent-red" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">₹{totalOverdue.toLocaleString()}</p>
            <p className="text-sm text-gray-500">{overdue.length} Overdue</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="card">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Monthly Collection Trend</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} tickFormatter={(v) => `₹${v / 1000}K`} />
            <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #E2E8F0' }} formatter={(value) => [`₹${value.toLocaleString()}`, '']} />
            <Bar dataKey="collected" fill="#2563EB" radius={[6, 6, 0, 0]} name="Collected" />
            <Bar dataKey="pending" fill="#F97316" radius={[6, 6, 0, 0]} name="Pending" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search by member name..." value={search} onChange={(e) => setSearch(e.target.value)} className="input-field pl-10" />
        </div>
        <div className="flex gap-2">
          {['All', 'Paid', 'Pending', 'Overdue'].map(status => (
            <button key={status} onClick={() => setStatusFilter(status)} className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${statusFilter === status ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="card p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="table-header px-4 py-3">Member</th>
                <th className="table-header px-4 py-3">Amount</th>
                <th className="table-header px-4 py-3">Month</th>
                <th className="table-header px-4 py-3">Status</th>
                <th className="table-header px-4 py-3 hidden md:table-cell">Paid Date</th>
                <th className="table-header px-4 py-3 hidden md:table-cell">Method</th>
                <th className="table-header px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(fee => (
                <tr key={fee.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="table-cell font-medium text-gray-900">{fee.memberName}</td>
                  <td className="table-cell">₹{fee.amount.toLocaleString()}</td>
                  <td className="table-cell text-gray-500">{fee.month}</td>
                  <td className="table-cell">
                    <span className={fee.status === 'Paid' ? 'badge-green' : fee.status === 'Overdue' ? 'badge-red' : 'badge-orange'}>{fee.status}</span>
                  </td>
                  <td className="table-cell hidden md:table-cell text-gray-500">{fee.paidDate || '-'}</td>
                  <td className="table-cell hidden md:table-cell text-gray-500">{fee.method || '-'}</td>
                  <td className="table-cell">
                    {fee.status !== 'Paid' ? (
                      <button onClick={() => setShowRecordModal(true)} className="text-xs text-primary-600 font-medium hover:text-primary-700">Record</button>
                    ) : (
                      <button className="text-xs text-gray-500 hover:text-gray-700">Receipt</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Record Payment Modal */}
      {showRecordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowRecordModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-soft w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Record Payment</h2>
              <button onClick={() => setShowRecordModal(false)} className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Member</label>
                <select className="input-field">
                  <option>Select member...</option>
                  {fees.filter(f => f.status !== 'Paid' && f.session === activeSession).map(f => (
                    <option key={f.id}>{f.memberName}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Amount</label>
                <input className="input-field" placeholder="₹ Enter amount" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Payment Method</label>
                <select className="input-field">
                  <option>UPI</option>
                  <option>Bank Transfer</option>
                  <option>Cash</option>
                  <option>Cheque</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Date</label>
                <input className="input-field" type="date" defaultValue="2026-07-14" />
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
              <button onClick={() => setShowRecordModal(false)} className="btn-secondary text-sm">Cancel</button>
              <button onClick={() => setShowRecordModal(false)} className="btn-primary text-sm">Record Payment</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
