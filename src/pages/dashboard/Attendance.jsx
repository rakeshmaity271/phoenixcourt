import { useState } from 'react'
import { Calendar, Users, TrendingUp, CheckCircle, XCircle } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { members, attendanceData, monthlyAttendanceTrend } from '../../data/mockData'

export default function Attendance() {
  const [view, setView] = useState('daily')

  const todayAttendance = members.map(m => ({
    ...m,
    present: Math.random() > 0.15,
    checkIn: '06:' + String(Math.floor(Math.random() * 50 + 10)).padStart(2, '0'),
    checkOut: m.present ? '08:' + String(Math.floor(Math.random() * 50 + 10)).padStart(2, '0') : null,
  }))

  const totalPresent = todayAttendance.filter(a => a.present).length
  const totalAbsent = todayAttendance.filter(a => !a.present).length

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="page-title">Attendance</h1>
          <p className="page-subtitle">Track daily member attendance and trends</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-gray-100 rounded-xl p-1">
            {['daily', 'monthly'].map(v => (
              <button key={v} onClick={() => setView(v)} className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all ${view === v ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}>
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>
          <button className="btn-secondary text-sm"><Calendar className="w-4 h-4 mr-1.5" /> Jul 14, 2026</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="stat-card">
          <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center"><Users className="w-5 h-5 text-primary-600" /></div>
          <p className="text-xl font-bold text-gray-900">{members.length}</p>
          <p className="text-xs text-gray-500">Total Members</p>
        </div>
        <div className="stat-card">
          <div className="w-10 h-10 bg-accent-green/10 rounded-xl flex items-center justify-center"><CheckCircle className="w-5 h-5 text-accent-green" /></div>
          <p className="text-xl font-bold text-gray-900">{totalPresent}</p>
          <p className="text-xs text-gray-500">Present Today</p>
        </div>
        <div className="stat-card">
          <div className="w-10 h-10 bg-accent-red/10 rounded-xl flex items-center justify-center"><XCircle className="w-5 h-5 text-accent-red" /></div>
          <p className="text-xl font-bold text-gray-900">{totalAbsent}</p>
          <p className="text-xs text-gray-500">Absent Today</p>
        </div>
        <div className="stat-card">
          <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center"><TrendingUp className="w-5 h-5 text-purple-600" /></div>
          <p className="text-xl font-bold text-gray-900">{Math.round(totalPresent / members.length * 100)}%</p>
          <p className="text-xs text-gray-500">Attendance Rate</p>
        </div>
      </div>

      {/* Trend Chart */}
      <div className="card">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Monthly Attendance Trend</h3>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={monthlyAttendanceTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} domain={[60, 100]} tickFormatter={(v) => `${v}%`} />
            <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #E2E8F0' }} formatter={(value) => [`${value}%`, 'Attendance']} />
            <Area type="monotone" dataKey="rate" stroke="#2563EB" fill="#DBEAFE" strokeWidth={2.5} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Daily View - Attendance Table */}
      <div className="card p-0 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-base font-semibold text-gray-900">Today's Attendance — July 14, 2026</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="table-header px-4 py-3">Member</th>
                <th className="table-header px-4 py-3">Status</th>
                <th className="table-header px-4 py-3 hidden sm:table-cell">Check In</th>
                <th className="table-header px-4 py-3 hidden sm:table-cell">Check Out</th>
                <th className="table-header px-4 py-3 hidden lg:table-cell">Rate</th>
                <th className="table-header px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {todayAttendance.map((member) => (
                <tr key={member.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="table-cell">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-xs font-semibold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-medium text-gray-900">{member.name}</span>
                    </div>
                  </td>
                  <td className="table-cell">
                    <span className={member.present ? 'badge-green' : 'badge-red'}>{member.present ? 'Present' : 'Absent'}</span>
                  </td>
                  <td className="table-cell hidden sm:table-cell text-gray-500">{member.present ? member.checkIn : '-'}</td>
                  <td className="table-cell hidden sm:table-cell text-gray-500">{member.checkOut || '-'}</td>
                  <td className="table-cell hidden lg:table-cell">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${member.attendance >= 80 ? 'bg-accent-green' : member.attendance >= 60 ? 'bg-accent-orange' : 'bg-accent-red'}`} style={{ width: `${member.attendance}%` }} />
                      </div>
                      <span className="text-xs text-gray-500">{member.attendance}%</span>
                    </div>
                  </td>
                  <td className="table-cell">
                    <button className={`text-xs font-medium ${member.present ? 'text-accent-red hover:text-red-700' : 'text-accent-green hover:text-green-700'}`}>
                      {member.present ? 'Mark Absent' : 'Mark Present'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Weekly Summary */}
      <div className="card">
        <h3 className="text-base font-semibold text-gray-900 mb-4">This Week</h3>
        <div className="grid grid-cols-7 gap-3">
          {attendanceData.map((day) => {
            const rate = Math.round(day.present / day.total * 100)
            return (
              <div key={day.date} className="text-center">
                <p className="text-xs text-gray-500 mb-2">{new Date(day.date).toLocaleDateString('en', { weekday: 'short' })}</p>
                <div className="relative w-full aspect-square bg-gray-50 rounded-xl flex items-center justify-center mb-1">
                  <span className={`text-sm font-bold ${rate >= 85 ? 'text-accent-green' : rate >= 70 ? 'text-accent-orange' : 'text-accent-red'}`}>{rate}%</span>
                </div>
                <p className="text-[11px] text-gray-400">{day.present}/{day.total}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
