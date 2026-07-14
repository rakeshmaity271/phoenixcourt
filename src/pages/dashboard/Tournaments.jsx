import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Trophy, Users, Calendar, MapPin, ChevronRight } from 'lucide-react'
import { tournaments } from '../../data/mockData'

export default function Tournaments() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [filter, setFilter] = useState('All')

  const filtered = tournaments.filter(t => filter === 'All' || t.status === filter)

  const statusColor = (status) => {
    if (status === 'Completed') return 'badge-blue'
    if (status === 'Ongoing') return 'badge-green'
    return 'badge-orange'
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="page-title">Tournaments</h1>
          <p className="page-subtitle">Organize and manage club tournaments</p>
        </div>
        <button onClick={() => setShowCreateModal(true)} className="btn-primary text-sm"><Plus className="w-4 h-4 mr-1.5" /> Create Tournament</button>
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        {['All', 'Upcoming', 'Ongoing', 'Completed'].map(s => (
          <button key={s} onClick={() => setFilter(s)} className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${filter === s ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>
            {s}
          </button>
        ))}
      </div>

      {/* Tournament Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(t => (
          <Link key={t.id} to={`/dashboard/tournaments/${t.id}`} className="card-hover group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${t.status === 'Completed' ? 'bg-primary-50' : t.status === 'Ongoing' ? 'bg-accent-green/10' : 'bg-accent-orange/10'}`}>
                  <Trophy className={`w-5 h-5 ${t.status === 'Completed' ? 'text-primary-600' : t.status === 'Ongoing' ? 'text-accent-green' : 'text-accent-orange'}`} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{t.name}</h3>
                  <span className={statusColor(t.status)}>{t.status}</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600" />
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar className="w-3.5 h-3.5" /> {t.startDate} - {t.endDate}
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Users className="w-3.5 h-3.5" /> {t.participants} players
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-3.5 h-3.5" /> {t.venue}
              </div>
              <div className="text-gray-500">
                <span className="text-xs">{t.type}</span>
                {t.prize > 0 && <span className="ml-2 text-accent-green font-medium">₹{t.prize.toLocaleString()}</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowCreateModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-soft w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Create Tournament</h2>
              <button onClick={() => setShowCreateModal(false)} className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Tournament Name</label>
                <input className="input-field" placeholder="e.g., Summer Open 2026" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Type</label>
                  <select className="input-field"><option>Singles</option><option>Doubles</option><option>Singles & Doubles</option><option>Team</option></select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Venue</label>
                  <input className="input-field" placeholder="Venue name" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Start Date</label>
                  <input className="input-field" type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">End Date</label>
                  <input className="input-field" type="date" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Prize Pool</label>
                <input className="input-field" type="number" placeholder="₹" />
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
              <button onClick={() => setShowCreateModal(false)} className="btn-secondary text-sm">Cancel</button>
              <button onClick={() => setShowCreateModal(false)} className="btn-primary text-sm">Create Tournament</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
