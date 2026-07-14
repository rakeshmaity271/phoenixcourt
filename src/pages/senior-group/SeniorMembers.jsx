import { useState } from 'react'
import { Search, Plus, Edit, ToggleLeft, ToggleRight, UserCheck, UserX } from 'lucide-react'
import { seniorMembers } from '../../data/seniorGroupData'

export default function SeniorMembers() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [showAddModal, setShowAddModal] = useState(false)
  const [members, setMembers] = useState(seniorMembers)

  const filtered = members.filter(m => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'All' || m.status === statusFilter
    return matchSearch && matchStatus
  })

  const toggleStatus = (id) => {
    setMembers(prev => prev.map(m => m.id === id ? { ...m, status: m.status === 'Active' ? 'Inactive' : 'Active' } : m))
  }

  const activeCount = members.filter(m => m.status === 'Active').length
  const totalDue = members.reduce((s, m) => s + m.totalDue, 0)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="page-title">Senior Members</h1>
          <p className="page-subtitle">Manage senior group (9:30 PM) members</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="btn-primary text-sm"><Plus className="w-4 h-4 mr-1.5" /> Add Member</button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="stat-card">
          <UserCheck className="w-5 h-5 text-primary-600" />
          <p className="text-xl font-bold text-gray-900">{activeCount}</p>
          <p className="text-xs text-gray-500">Active Members</p>
        </div>
        <div className="stat-card">
          <UserX className="w-5 h-5 text-gray-400" />
          <p className="text-xl font-bold text-gray-900">{members.length - activeCount}</p>
          <p className="text-xs text-gray-500">Inactive Members</p>
        </div>
        <div className="stat-card">
          <Plus className="w-5 h-5 text-accent-green" />
          <p className="text-xl font-bold text-gray-900">₹{members.reduce((s, m) => s + m.totalPaid, 0).toLocaleString()}</p>
          <p className="text-xs text-gray-500">Total Collected</p>
        </div>
        <div className="stat-card">
          <p className="text-xl font-bold text-accent-orange">₹{totalDue.toLocaleString()}</p>
          <p className="text-xs text-gray-500">Outstanding Dues</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search members..." value={search} onChange={(e) => setSearch(e.target.value)} className="input-field pl-10" />
        </div>
        <div className="flex gap-2">
          {['All', 'Active', 'Inactive'].map(s => (
            <button key={s} onClick={() => setStatusFilter(s)} className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${statusFilter === s ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>
              {s}
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
                <th className="table-header px-4 py-3 hidden sm:table-cell">Phone</th>
                <th className="table-header px-4 py-3 hidden md:table-cell">Join Date</th>
                <th className="table-header px-4 py-3">Monthly Fee</th>
                <th className="table-header px-4 py-3">Status</th>
                <th className="table-header px-4 py-3 hidden md:table-cell">Total Due</th>
                <th className="table-header px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(m => (
                <tr key={m.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="table-cell">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${m.status === 'Active' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-500'}`}>
                        {m.name.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-900">{m.name}</span>
                    </div>
                  </td>
                  <td className="table-cell hidden sm:table-cell text-gray-500">{m.phone}</td>
                  <td className="table-cell hidden md:table-cell text-gray-500">{m.joinDate}</td>
                  <td className="table-cell">₹{m.monthlyFee}</td>
                  <td className="table-cell">
                    <span className={m.status === 'Active' ? 'badge-green' : 'badge-gray'}>{m.status}</span>
                  </td>
                  <td className="table-cell hidden md:table-cell">
                    <span className={m.totalDue > 0 ? 'text-accent-orange font-medium' : 'text-gray-400'}>
                      {m.totalDue > 0 ? `₹${m.totalDue.toLocaleString()}` : '—'}
                    </span>
                  </td>
                  <td className="table-cell">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg" title="Edit"><Edit className="w-4 h-4 text-gray-400" /></button>
                      <button onClick={() => toggleStatus(m.id)} className="p-1.5 hover:bg-gray-100 rounded-lg" title={m.status === 'Active' ? 'Deactivate' : 'Activate'}>
                        {m.status === 'Active'
                          ? <ToggleRight className="w-5 h-5 text-accent-green" />
                          : <ToggleLeft className="w-5 h-5 text-gray-400" />
                        }
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Member Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowAddModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-soft w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Add Senior Member</h2>
              <button onClick={() => setShowAddModal(false)} className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                <input className="input-field" placeholder="Enter member name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                <input className="input-field" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Join Date</label>
                  <input className="input-field" type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Monthly Fee</label>
                  <input className="input-field" type="number" defaultValue="500" placeholder="₹" />
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
              <button onClick={() => setShowAddModal(false)} className="btn-secondary text-sm">Cancel</button>
              <button onClick={() => setShowAddModal(false)} className="btn-primary text-sm">Add Member</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
