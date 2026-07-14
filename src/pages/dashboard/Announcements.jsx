import { useState } from 'react'
import { Plus, Megaphone, AlertCircle, Edit, Trash2 } from 'lucide-react'
import { announcements } from '../../data/mockData'

export default function Announcements() {
  const [showCreateModal, setShowCreateModal] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="page-title">Announcements</h1>
          <p className="page-subtitle">Publish and manage club notices</p>
        </div>
        <button onClick={() => setShowCreateModal(true)} className="btn-primary text-sm"><Plus className="w-4 h-4 mr-1.5" /> New Announcement</button>
      </div>

      <div className="space-y-4">
        {announcements.map(ann => (
          <div key={ann.id} className="card-hover">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${ann.priority === 'High' ? 'bg-accent-red/10' : 'bg-primary-50'}`}>
                  {ann.priority === 'High' ? <AlertCircle className="w-5 h-5 text-accent-red" /> : <Megaphone className="w-5 h-5 text-primary-600" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-gray-900">{ann.title}</h3>
                    {ann.priority === 'High' && <span className="badge-red">High Priority</span>}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{ann.content}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>By {ann.author}</span>
                    <span>•</span>
                    <span>{ann.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0 ml-4">
                <button className="p-1.5 hover:bg-gray-100 rounded-lg"><Edit className="w-4 h-4 text-gray-400" /></button>
                <button className="p-1.5 hover:bg-gray-100 rounded-lg"><Trash2 className="w-4 h-4 text-gray-400" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowCreateModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-soft w-full max-w-lg">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">New Announcement</h2>
              <button onClick={() => setShowCreateModal(false)} className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Title</label>
                <input className="input-field" placeholder="Announcement title" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Content</label>
                <textarea className="input-field h-32 resize-none" placeholder="Write your announcement..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Priority</label>
                <select className="input-field"><option>Normal</option><option>High</option></select>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
              <button onClick={() => setShowCreateModal(false)} className="btn-secondary text-sm">Cancel</button>
              <button onClick={() => setShowCreateModal(false)} className="btn-primary text-sm">Publish</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
