import { Wallet, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts'
import { fundSummary } from '../../data/seniorGroupData'
import { useSession } from '../../context/SessionContext'

export default function FundSummary() {
  const { activeSession } = useSession()
  const data = fundSummary[activeSession] || fundSummary['2026-2027']
  const latest = data[data.length - 1]
  const prev = data.length > 1 ? data[data.length - 2] : null

  const totalCollection = data.reduce((s, d) => s + d.collection, 0)
  const totalExpenses = data.reduce((s, d) => s + d.expenses, 0)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="page-title">Fund Summary</h1>
          <p className="page-subtitle">Monthly financial overview — <span className="font-medium text-primary-600">{activeSession}</span></p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="stat-card">
          <Wallet className="w-5 h-5 text-primary-600" />
          <p className={`text-xl font-bold ${latest.openingBalance >= 0 ? 'text-gray-900' : 'text-accent-red'}`}>₹{latest.openingBalance.toLocaleString()}</p>
          <p className="text-xs text-gray-500">Opening Balance</p>
        </div>
        <div className="stat-card">
          <TrendingUp className="w-5 h-5 text-accent-green" />
          <p className="text-xl font-bold text-accent-green">₹{latest.collection.toLocaleString()}</p>
          <p className="text-xs text-gray-500">Monthly Collection</p>
        </div>
        <div className="stat-card">
          <TrendingDown className="w-5 h-5 text-accent-red" />
          <p className="text-xl font-bold text-accent-red">₹{latest.expenses.toLocaleString()}</p>
          <p className="text-xs text-gray-500">Monthly Expenses</p>
        </div>
        <div className="stat-card">
          <Wallet className="w-5 h-5 text-purple-600" />
          <p className={`text-xl font-bold ${latest.closingBalance >= 0 ? 'text-gray-900' : 'text-accent-red'}`}>₹{latest.closingBalance.toLocaleString()}</p>
          <p className="text-xs text-gray-500">Closing Balance</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Collection vs Expenses</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94A3B8' }} tickFormatter={(v) => v.substring(0, 3)} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94A3B8' }} tickFormatter={(v) => `₹${Math.abs(v) / 1000}K`} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #E2E8F0' }} formatter={(value) => [`₹${value.toLocaleString()}`, '']} />
              <Legend />
              <Bar dataKey="collection" fill="#2563EB" radius={[6, 6, 0, 0]} name="Collection" />
              <Bar dataKey="expenses" fill="#EF4444" radius={[6, 6, 0, 0]} name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Fund Balance Trend</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94A3B8' }} tickFormatter={(v) => v.substring(0, 3)} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94A3B8' }} tickFormatter={(v) => `₹${Math.abs(v) / 1000}K`} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #E2E8F0' }} formatter={(value) => [`₹${value.toLocaleString()}`, '']} />
              <Line type="monotone" dataKey="closingBalance" stroke="#8B5CF6" strokeWidth={2.5} dot={{ r: 4 }} name="Closing Balance" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Breakdown Table */}
      <div className="card p-0 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-base font-semibold text-gray-900">Monthly Breakdown</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="table-header px-4 py-3">Month</th>
                <th className="table-header px-4 py-3">Opening Balance</th>
                <th className="table-header px-4 py-3">Collection</th>
                <th className="table-header px-4 py-3">Expenses</th>
                <th className="table-header px-4 py-3">Closing Balance</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="table-cell font-medium text-gray-900">{row.month}</td>
                  <td className="table-cell">
                    <span className={row.openingBalance >= 0 ? 'text-gray-900' : 'text-accent-red'}>₹{row.openingBalance.toLocaleString()}</span>
                  </td>
                  <td className="table-cell text-accent-green font-medium">₹{row.collection.toLocaleString()}</td>
                  <td className="table-cell text-accent-red font-medium">₹{row.expenses.toLocaleString()}</td>
                  <td className="table-cell">
                    <span className={`font-semibold ${row.closingBalance >= 0 ? 'text-gray-900' : 'text-accent-red'}`}>
                      ₹{row.closingBalance.toLocaleString()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50 font-semibold">
                <td className="table-cell px-4 py-3 text-gray-900">Total</td>
                <td className="table-cell px-4 py-3">—</td>
                <td className="table-cell px-4 py-3 text-accent-green">₹{totalCollection.toLocaleString()}</td>
                <td className="table-cell px-4 py-3 text-accent-red">₹{totalExpenses.toLocaleString()}</td>
                <td className="table-cell px-4 py-3">
                  <span className={latest.closingBalance >= 0 ? 'text-gray-900' : 'text-accent-red'}>
                    ₹{latest.closingBalance.toLocaleString()}
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}
