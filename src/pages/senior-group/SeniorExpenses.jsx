import { useState } from 'react'
import { Plus, Download, Receipt, FileText } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { seniorExpenses, seniorExpenseBreakdown } from '../../data/seniorGroupData'

const categories = ['Shuttle Purchase', 'Court Charges', 'Refreshments', 'Equipment', 'Miscellaneous']

export default function SeniorExpenses() {
  const [showAddModal, setShowAddModal] = useState(false)
  const [catFilter, setCatFilter] = useState('All')

  const filtered = catFilter === 'All' ? seniorExpenses : seniorExpenses.filter(e => e.category === catFilter)
  const total = filtered.reduce((s, e) => s + e.amount, 0)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="page-title">Senior Group Expenses</h1>
          <p className="page-subtitle">Track expenditures for the 9:30 PM group</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-secondary text-sm"><Download className="w-4 h-4 mr-1.5" /> Export</button>
          <button onClick={() => setShowAddModal(true)} className="btn-primary text-sm"><Plus className="w-4 h-4 mr-1.5" /> Add Expense</button>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="stat-card">
          <Receipt className="w-5 h-5 text-accent-red" />
          <p className="text-xl font-bold text-gray-900">₹{seniorExpenses.reduce((s, e) => s + e.amount, 0).toLocaleString()}</p>
          <p className="text-xs text-gray-500">Total Expenses</p>
        </div>
        {seniorExpenseBreakdown.slice(0, 3).map((cat, i) => (
          <div key={i} className="stat-card">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: cat.color + '15' }}>
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: cat.color }} />
            </div>
            <p className="text-xl font-bold text-gray-900">₹{cat.value.toLocaleString()}</p>
            <p className="text-xs text-gray-500">{cat.name}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Expense Table */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex gap-2 flex-wrap">
            {['All', ...categories].map(c => (
              <button key={c} onClick={() => setCatFilter(c)} className={`px-3 py-2 text-xs font-medium rounded-xl transition-all ${catFilter === c ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="card p-0 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="table-header px-4 py-3">Description</th>
                    <th className="table-header px-4 py-3 hidden sm:table-cell">Category</th>
                    <th className="table-header px-4 py-3">Amount</th>
                    <th className="table-header px-4 py-3 hidden md:table-cell">Date</th>
                    <th className="table-header px-4 py-3 hidden md:table-cell">Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(exp => (
                    <tr key={exp.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="table-cell font-medium text-gray-900">{exp.description}</td>
                      <td className="table-cell hidden sm:table-cell"><span className="badge-blue">{exp.category}</span></td>
                      <td className="table-cell font-medium text-accent-red">₹{exp.amount.toLocaleString()}</td>
                      <td className="table-cell hidden md:table-cell text-gray-500">{exp.date}</td>
                      <td className="table-cell hidden md:table-cell">
                        {exp.receipt ? <FileText className="w-4 h-4 text-primary-600" /> : <span className="text-gray-300">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="card">
          <h3 className="text-base font-semibold text-gray-900 mb-4">By Category</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={seniorExpenseBreakdown} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={3} dataKey="value">
                {seniorExpenseBreakdown.map((entry, index) => <Cell key={index} fill={entry.color} />)}
              </Pie>
              <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, '']} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {seniorExpenseBreakdown.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} /><span className="text-gray-600">{item.name}</span></span>
                <span className="font-medium text-gray-900">₹{item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Expense Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowAddModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-soft w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Add Expense</h2>
              <button onClick={() => setShowAddModal(false)} className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
                <input className="input-field" placeholder="Expense description" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                  <select className="input-field">{categories.map(c => <option key={c}>{c}</option>)}</select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Amount</label>
                  <input className="input-field" type="number" placeholder="₹" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Date</label>
                <input className="input-field" type="date" defaultValue="2026-07-14" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Upload Receipt (Optional)</label>
                <input className="input-field" type="file" accept="image/*,.pdf" />
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
              <button onClick={() => setShowAddModal(false)} className="btn-secondary text-sm">Cancel</button>
              <button onClick={() => setShowAddModal(false)} className="btn-primary text-sm">Add Expense</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
