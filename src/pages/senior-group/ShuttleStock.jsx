import { useState } from 'react'
import { Plus, Package, AlertTriangle, ArrowDownCircle, ArrowUpCircle, Download } from 'lucide-react'
import { shuttleStock, shuttleTransactions, shuttleBrands } from '../../data/seniorGroupData'

export default function ShuttleStock() {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)
  const [showStockOutModal, setShowStockOutModal] = useState(false)
  const [brandFilter, setBrandFilter] = useState('All')

  const filtered = brandFilter === 'All' ? shuttleStock : shuttleStock.filter(s => s.brand === brandFilter)
  const totalStock = shuttleStock.reduce((s, i) => s + i.quantity, 0)
  const lowStockItems = shuttleStock.filter(i => i.quantity <= i.lowStockThreshold)
  const totalValue = shuttleStock.reduce((s, i) => s + i.quantity * i.unitPrice, 0)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="page-title">Shuttle Stock</h1>
          <p className="page-subtitle">Manage shuttlecock inventory for senior group</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-secondary text-sm"><Download className="w-4 h-4 mr-1.5" /> Export</button>
          <button onClick={() => setShowStockOutModal(true)} className="btn-secondary text-sm"><ArrowUpCircle className="w-4 h-4 mr-1.5" /> Stock Out</button>
          <button onClick={() => setShowPurchaseModal(true)} className="btn-primary text-sm"><Plus className="w-4 h-4 mr-1.5" /> New Purchase</button>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="stat-card">
          <Package className="w-5 h-5 text-primary-600" />
          <p className="text-xl font-bold text-gray-900">{totalStock}</p>
          <p className="text-xs text-gray-500">Total Units</p>
        </div>
        <div className="stat-card">
          <p className="text-xl font-bold text-gray-900">₹{totalValue.toLocaleString()}</p>
          <p className="text-xs text-gray-500">Stock Value</p>
        </div>
        <div className="stat-card">
          <AlertTriangle className="w-5 h-5 text-accent-orange" />
          <p className="text-xl font-bold text-accent-orange">{lowStockItems.length}</p>
          <p className="text-xs text-gray-500">Low Stock Items</p>
        </div>
        <div className="stat-card">
          <p className="text-xl font-bold text-gray-900">{shuttleStock.length}</p>
          <p className="text-xs text-gray-500">Brands Tracked</p>
        </div>
      </div>

      {/* Low Stock Alerts */}
      {lowStockItems.length > 0 && (
        <div className="card border border-accent-orange/20 bg-accent-orange/5">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-accent-orange" /> Low Stock Alerts
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {lowStockItems.map(item => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-white rounded-xl border border-accent-orange/10">
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.brand} {item.model}</p>
                  <p className="text-xs text-gray-500">Threshold: {item.lowStockThreshold}</p>
                </div>
                <span className="text-lg font-bold text-accent-orange">{item.quantity}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stock Table */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex gap-2 flex-wrap">
          {['All', ...shuttleBrands].map(b => (
            <button key={b} onClick={() => setBrandFilter(b)} className={`px-3 py-2 text-xs font-medium rounded-xl transition-all ${brandFilter === b ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>
              {b}
            </button>
          ))}
        </div>
      </div>

      <div className="card p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="table-header px-4 py-3">Brand / Model</th>
                <th className="table-header px-4 py-3">Quantity</th>
                <th className="table-header px-4 py-3 hidden sm:table-cell">Unit Price</th>
                <th className="table-header px-4 py-3 hidden md:table-cell">Stock Value</th>
                <th className="table-header px-4 py-3 hidden md:table-cell">Last Purchase</th>
                <th className="table-header px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(item => {
                const isLow = item.quantity <= item.lowStockThreshold
                return (
                  <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="table-cell">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isLow ? 'bg-accent-orange/10' : 'bg-primary-50'}`}>
                          <Package className={`w-4 h-4 ${isLow ? 'text-accent-orange' : 'text-primary-600'}`} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{item.brand}</p>
                          <p className="text-xs text-gray-500">{item.model}</p>
                        </div>
                      </div>
                    </td>
                    <td className="table-cell">
                      <span className={`text-lg font-bold ${isLow ? 'text-accent-orange' : 'text-gray-900'}`}>{item.quantity}</span>
                    </td>
                    <td className="table-cell hidden sm:table-cell">₹{item.unitPrice.toLocaleString()}</td>
                    <td className="table-cell hidden md:table-cell font-medium">₹{(item.quantity * item.unitPrice).toLocaleString()}</td>
                    <td className="table-cell hidden md:table-cell text-gray-500">{item.lastPurchase}</td>
                    <td className="table-cell">
                      {isLow ? <span className="badge-orange">Low Stock</span> : <span className="badge-green">In Stock</span>}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="card">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {shuttleTransactions.map(tx => (
            <div key={tx.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${tx.type === 'Stock In' ? 'bg-accent-green/10' : 'bg-accent-orange/10'}`}>
                  {tx.type === 'Stock In' ? <ArrowDownCircle className="w-4 h-4 text-accent-green" /> : <ArrowUpCircle className="w-4 h-4 text-accent-orange" />}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{tx.brand} {tx.model}</p>
                  <p className="text-xs text-gray-400">{tx.date} · {tx.note}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-semibold ${tx.type === 'Stock In' ? 'text-accent-green' : 'text-accent-orange'}`}>
                  {tx.type === 'Stock In' ? '+' : '-'}{tx.quantity}
                </p>
                {tx.cost > 0 && <p className="text-xs text-gray-400">₹{tx.cost.toLocaleString()}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Purchase Modal */}
      {showPurchaseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowPurchaseModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-soft w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">New Shuttle Purchase</h2>
              <button onClick={() => setShowPurchaseModal(false)} className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Brand</label>
                <select className="input-field">{shuttleBrands.map(b => <option key={b}>{b}</option>)}</select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Model</label>
                <input className="input-field" placeholder="e.g., Aerosensa 10" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Quantity</label>
                  <input className="input-field" type="number" placeholder="Dozens" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Purchase Cost</label>
                  <input className="input-field" type="number" placeholder="₹" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Date</label>
                <input className="input-field" type="date" defaultValue="2026-07-14" />
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
              <button onClick={() => setShowPurchaseModal(false)} className="btn-secondary text-sm">Cancel</button>
              <button onClick={() => setShowPurchaseModal(false)} className="btn-primary text-sm">Add Purchase</button>
            </div>
          </div>
        </div>
      )}

      {/* Stock Out Modal */}
      {showStockOutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowStockOutModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-soft w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Stock Out</h2>
              <button onClick={() => setShowStockOutModal(false)} className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Select Shuttle</label>
                <select className="input-field">
                  {shuttleStock.map(s => <option key={s.id}>{s.brand} {s.model} ({s.quantity} left)</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Quantity Out</label>
                <input className="input-field" type="number" placeholder="Number of shuttles" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Note</label>
                <input className="input-field" placeholder="e.g., Used in practice session" />
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
              <button onClick={() => setShowStockOutModal(false)} className="btn-secondary text-sm">Cancel</button>
              <button onClick={() => setShowStockOutModal(false)} className="btn-primary text-sm">Record Stock Out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
