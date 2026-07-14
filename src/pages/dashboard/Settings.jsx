import { useState } from 'react'
import { Save, Bell, Shield, Globe, Palette } from 'lucide-react'

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general')

  const tabs = [
    { id: 'general', label: 'General', icon: Globe },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'roles', label: 'Roles & Permissions', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">Settings</h1>
          <p className="page-subtitle">Manage your club preferences</p>
        </div>
        <button className="btn-primary text-sm"><Save className="w-4 h-4 mr-1.5" /> Save Changes</button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:w-56 shrink-0">
          <div className="card p-2 space-y-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 w-full px-3 py-2.5 text-sm font-medium rounded-xl transition-all ${activeTab === tab.id ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === 'general' && (
            <div className="card space-y-6">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Club Information</h3>
                <p className="text-sm text-gray-500">Basic details about your club</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Club Name</label>
                  <input className="input-field" defaultValue="Phoenix Court Hub" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input className="input-field" defaultValue="admin@phoenixcourt.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                  <input className="input-field" defaultValue="+91 98765 00000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Address</label>
                  <input className="input-field" defaultValue="123 Sports Complex, Mumbai" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Courts</label>
                  <input className="input-field" type="number" defaultValue="4" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Operating Hours</label>
                  <input className="input-field" defaultValue="6:00 AM - 10:00 PM" />
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Fee Structure</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Basic Plan</label>
                    <input className="input-field" type="number" defaultValue="800" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Standard Plan</label>
                    <input className="input-field" type="number" defaultValue="1000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Premium Plan</label>
                    <input className="input-field" type="number" defaultValue="1500" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="card space-y-6">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Notification Preferences</h3>
                <p className="text-sm text-gray-500">Choose what notifications you receive</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Fee Payment Reminders', desc: 'Send reminders for overdue fees', enabled: true },
                  { label: 'Booking Confirmations', desc: 'Notify on court booking confirmations', enabled: true },
                  { label: 'Tournament Updates', desc: 'Updates on tournament registrations and results', enabled: true },
                  { label: 'Stock Alerts', desc: 'Alert when shuttle stock is running low', enabled: true },
                  { label: 'New Member Notifications', desc: 'Notify when a new member joins', enabled: false },
                  { label: 'Expense Approvals', desc: 'Notify on expense submissions', enabled: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{item.label}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                    <div className={`w-11 h-6 rounded-full cursor-pointer transition-colors ${item.enabled ? 'bg-primary-600' : 'bg-gray-200'}`}>
                      <div className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform mt-0.5 ${item.enabled ? 'translate-x-5.5 ml-[22px]' : 'translate-x-0.5 ml-[2px]'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'roles' && (
            <div className="card space-y-6">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Roles & Permissions</h3>
                <p className="text-sm text-gray-500">Manage user roles and their access levels</p>
              </div>
              <div className="space-y-3">
                {[
                  { role: 'Administrator', desc: 'Full access to all features', members: 1, color: 'bg-primary-50 text-primary-700' },
                  { role: 'Treasurer', desc: 'Manage fees, expenses, and reports', members: 1, color: 'bg-green-50 text-green-700' },
                  { role: 'Coach', desc: 'Manage attendance and tournaments', members: 2, color: 'bg-purple-50 text-purple-700' },
                  { role: 'Member', desc: 'View own profile, bookings, and payments', members: 148, color: 'bg-gray-100 text-gray-700' },
                ].map((r, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 text-xs font-medium rounded-lg ${r.color}`}>{r.role}</span>
                      <span className="text-sm text-gray-500">{r.desc}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{r.members} {r.members === 1 ? 'user' : 'users'}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="card space-y-6">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Appearance</h3>
                <p className="text-sm text-gray-500">Customize the look and feel</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Theme</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Light', 'Dark', 'System'].map(theme => (
                    <button key={theme} className={`p-4 rounded-xl border-2 text-sm font-medium transition-all ${theme === 'Light' ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                      {theme}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Accent Color</label>
                <div className="flex gap-3">
                  {['bg-primary-600', 'bg-purple-600', 'bg-accent-green', 'bg-accent-orange', 'bg-pink-600', 'bg-cyan-600'].map((color, i) => (
                    <button key={i} className={`w-8 h-8 rounded-full ${color} ${i === 0 ? 'ring-2 ring-offset-2 ring-primary-600' : ''} transition-all hover:scale-110`} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
