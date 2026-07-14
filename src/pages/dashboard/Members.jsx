import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Plus, Filter, MoreVertical, Mail, Phone, ChevronLeft, ChevronRight } from 'lucide-react'
import { members } from '../../data/mockData'

export default function Members() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [showAddModal, setShowAddModal] = useState(false)

  const filtered = members.filter(m => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.email.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'All' || m.status === statusFilter
    return matchSearch && matchStatus
  })

  const getInitials = (name) => name.split(' ').map(n => n[0]).join('')
  const colors = ['bg-primary-100 text-primary-700', 'bg-green-100 text-green-700', 'bg-purple-100 text-purple-700', 'bg-amber-100 text-amber-700', 'bg-pink-100 text-pink-700', 'bg-cyan-100 text-cyan-700']

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="page-title">Members</h1>
          <p className="page-subtitle">{members.length} total members</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="btn-primary text-sm">
          <Plus className="w-4 h-4 mr-1.5" /> Add Member
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field pl-10"
          />
        </div>
        <div className="flex gap-2">
          {['All', 'Active', 'Inactive'].map(status => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                statusFilter === status ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
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
                <th className="table-header px-4 py-3 hidden md:table-cell">Contact</th>
                <th className="table-header px-4 py-3 hidden sm:table-cell">Role</th>
                <th className="table-header px-4 py-3">Status</th>
                <th className="table-header px-4 py-3 hidden lg:table-cell">Plan</th>
                <th className="table-header px-4 py-3 hidden lg:table-cell">Attendance</th>
                <th className="table-header px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((member, i) => (
                <tr key={member.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="table-cell">
                    <Link to={`/dashboard/members/${member.id}`} className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold ${colors[i % colors.length]}`}>
                        {getInitials(member.name)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 hover:text-primary-600 transition-colors">{member.name}</p>
                        <p className="text-xs text-gray-500">Joined {member.joinDate}</p>
                      </div>
                    </Link>
                  </td>
                  <td className="table-cell hidden md:table-cell">
                    <div className="flex flex-col gap-0.5">
                      <span className="flex items-center gap-1.5 text-xs text-gray-500"><Mail className="w-3 h-3" />{member.email}</span>
                      <span className="flex items-center gap-1.5 text-xs text-gray-500"><Phone className="w-3 h-3" />{member.phone}</span>
                    </div>
                  </td>
                  <td className="table-cell hidden sm:table-cell">
                    <span className="badge-blue">{member.role}</span>
                  </td>
                  <td className="table-cell">
                    <span className={member.status === 'Active' ? 'badge-green' : 'badge-red'}>{member.status}</span>
                  </td>
                  <td className="table-cell hidden lg:table-cell">
                    <span className="text-sm text-gray-600">{member.plan}</span>
                  </td>
                  <td className="table-cell hidden lg:table-cell">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${member.attendance >= 80 ? 'bg-accent-green' : member.attendance >= 60 ? 'bg-accent-orange' : 'bg-accent-red'}`} style={{ width: `${member.attendance}%` }} />
                      </div>
                      <span className="text-xs text-gray-500">{member.attendance}%</span>
                    </div>
                  </td>
                  <td className="table-cell">
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
          <p className="text-sm text-gray-500">Showing {filtered.length} of {members.length} members</p>
          <div className="flex items-center gap-1">
            <button className="p-1.5 hover:bg-gray-100 rounded-lg"><ChevronLeft className="w-4 h-4 text-gray-400" /></button>
            <button className="w-8 h-8 bg-primary-600 text-white text-sm rounded-lg">1</button>
            <button className="w-8 h-8 hover:bg-gray-100 text-sm text-gray-600 rounded-lg">2</button>
            <button className="p-1.5 hover:bg-gray-100 rounded-lg"><ChevronRight className="w-4 h-4 text-gray-400" /></button>
          </div>
        </div>
      </div>

      {/* Add Member Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowAddModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-soft w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Add New Member</h2>
              <button onClick={() => setShowAddModal(false)} className="p-1.5 hover:bg-gray-100 rounded-lg">
                <span className="text-gray-400 text-lg">&times;</span>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
                  <input className="input-field" placeholder="Enter first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                  <input className="input-field" placeholder="Enter last name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input className="input-field" type="email" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                <input className="input-field" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Role</label>
                  <select className="input-field">
                    <option>Member</option>
                    <option>Captain</option>
                    <option>Vice Captain</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Plan</label>
                  <select className="input-field">
                    <option>Basic</option>
                    <option>Standard</option>
                    <option>Premium</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Emergency Contact</label>
                <input className="input-field" placeholder="Name - Phone number" />
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
