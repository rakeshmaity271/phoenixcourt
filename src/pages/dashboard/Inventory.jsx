import { useState } from 'react'
import { Plus, Package, AlertTriangle, TrendingDown } from 'lucide-react'
import { inventory } from '../../data/mockData'

export default function Inventory() {
  const [showAddModal, setShowAddModal] = useState(false)
  const totalItems = inventory.reduce((sum, i) => sum + i.quantity, 0)
  const lowStock = inventory.filter(i => i.status === 'Low Stock')
  const totalValue = inventory.reduce((sum, i) => sum + (i.quantity * i.unitPrice), 0)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="page-title">Shuttle Inventory</h1>
          <p className="page-subtitle">Manage shuttlecock stock and supplies</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="btn-primary text-sm"><Plus className="w-4 h-4 mr-1.5" /> Add Stock</button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="stat-card">
          <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center"><Package className="w-5 h-5 text-primary-600" /></div>
          <p className="text-xl font-bold text-gray-900">{totalItems}</p>
          <p className="text-xs text-gray-500">Total Units</p>
        </div>
        <div className="stat-card">
          <div className="w-10 h-10 bg-accent-green/10 rounded-xl flex items-center justify-center"><Package className="w-5 h-5 text-accent-green" /></div>
          <p className="text-xl font-bold text-gray-900">{inventory.filter(i => i.status === 'In Stock').length}</p>
          <p className="text-xs text-gray-500">Items In Stock</p>
        </div>
        <div className="stat-card">
          <div className="w-10 h-10 bg-accent-orange/10 rounded-xl flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-accent-orange" /></div>
          <p className="text-xl font-bold text-gray-900">{lowStock.length}</p>
          <p className="text-xs text-gray-500">Low Stock Alerts</p>
        </div>
        <div className="stat-card">
          <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center"><TrendingDown className="w-5 h-5 text-purple-600" /></div>
          <p className="text-xl font-bold text-gray-900">₹{totalValue.toLocaleString()}</p>
          <p className="text-xs text-gray-500">Total Value</p>
        </div>
      </div>

      {/* Low Stock Alerts */}
      {lowStock.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-accent-orange" />
            <h3 className="text-sm font-semibold text-amber-800">Low Stock Alerts</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {lowStock.map(item => (
              <span key={item.id} className="text-sm text-amber-700 bg-amber-100 px-3 py-1 rounded-lg">{item.item} ({item.quantity} left)</span>
            ))}
          </div>
        </div>
      )}

      {/* Inventory Table */}
      <div className="card p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="table-header px-4 py-3">Item</th>
                <th className="table-header px-4 py-3 hidden sm:table-cell">Category</th>
                <th className="table-header px-4 py-3">Qty</th>
                <th className="table-header px-4 py-3">Status</th>
                <th className="table-header px-4 py-3 hidden md:table-cell">Vendor</th>
                <th className="table-header px-4 py-3 hidden md:table-cell">Unit Price</th>
                <th className="table-header px-4 py-3 hidden lg:table-cell">Last Purchase</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map(item => (
                <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="table-cell font-medium text-gray-900">{item.item}</td>
                  <td className="table-cell hidden sm:table-cell"><span className="badge-blue">{item.category}</span></td>
                  <td className="table-cell font-medium">{item.quantity}</td>
                  <td className="table-cell">
                    <span className={item.status === 'In Stock' ? 'badge-green' : 'badge-orange'}>{item.status}</span>
                  </td>
                  <td className="table-cell hidden md:table-cell text-gray-500">{item.vendor}</td>
                  <td className="table-cell hidden md:table-cell">₹{item.unitPrice.toLocaleString()}</td>
                  <td className="table-cell hidden lg:table-cell text-gray-500">{item.lastPurchase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Stock Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowAddModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-soft w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Add Stock</h2>
              <button onClick={() => setShowAddModal(false)} className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Item Name</label>
                <input className="input-field" placeholder="e.g., Yonex Aerosensa 10" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                  <select className="input-field"><option>Feather</option><option>Nylon</option><option>Strings</option><option>Accessories</option></select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Quantity</label>
                  <input className="input-field" type="number" placeholder="0" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Vendor</label>
                  <input className="input-field" placeholder="Vendor name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Unit Price</label>
                  <input className="input-field" type="number" placeholder="₹" />
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
              <button onClick={() => setShowAddModal(false)} className="btn-secondary text-sm">Cancel</button>
              <button onClick={() => setShowAddModal(false)} className="btn-primary text-sm">Add Stock</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
