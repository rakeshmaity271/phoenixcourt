import { Link } from 'react-router-dom'
import {
  Users, CreditCard, AlertCircle, Receipt, Package, Trophy,
  CalendarDays, TrendingUp, ArrowUpRight, ArrowDownRight,
  Plus, UserPlus, CalendarPlus, ChevronRight
} from 'lucide-react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar
} from 'recharts'
import { revenueData, recentActivity, tournaments, bookings } from '../../data/mockData'

const stats = [
  { label: 'Active Members', value: '148', change: '+12', up: true, icon: Users, color: 'bg-primary-50 text-primary-600' },
  { label: 'Monthly Collections', value: '₹1,47,000', change: '+8.2%', up: true, icon: CreditCard, color: 'bg-accent-green/10 text-accent-green' },
  { label: 'Outstanding Dues', value: '₹12,400', change: '-3.1%', up: false, icon: AlertCircle, color: 'bg-accent-orange/10 text-accent-orange' },
  { label: 'Expenses', value: '₹74,100', change: '+2.4%', up: true, icon: Receipt, color: 'bg-purple-50 text-purple-600' },
  { label: 'Stock Available', value: '161 units', change: '-5', up: false, icon: Package, color: 'bg-amber-50 text-amber-600' },
  { label: 'Tournaments', value: '5', change: '+1', up: true, icon: Trophy, color: 'bg-pink-50 text-pink-600' },
  { label: 'Court Bookings', value: '23', change: '+15%', up: true, icon: CalendarDays, color: 'bg-cyan-50 text-cyan-600' },
  { label: 'Attendance Rate', value: '87%', change: '+2%', up: true, icon: TrendingUp, color: 'bg-emerald-50 text-emerald-600' },
]

const expenseBreakdown = [
  { name: 'Equipment', value: 31400, color: '#2563EB' },
  { name: 'Utilities', value: 14500, color: '#10B981' },
  { name: 'Tournament', value: 15000, color: '#F97316' },
  { name: 'Maintenance', value: 12000, color: '#8B5CF6' },
  { name: 'Misc', value: 1200, color: '#EC4899' },
]

const upcomingEvents = [
  { title: 'Weekend Round Robin - Match 5', time: 'Today, 5:00 PM', type: 'Tournament' },
  { title: 'Court 1 - Arjun Sharma', time: 'Today, 6:00 AM', type: 'Booking' },
  { title: 'Monsoon Challenge Cup', time: 'Aug 10-12', type: 'Tournament' },
  { title: 'Inter-Club Friendly', time: 'Jul 28', type: 'Tournament' },
]

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Welcome back! Here's what's happening at Phoenix Court Hub.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-secondary text-sm">
            <CalendarDays className="w-4 h-4 mr-1.5" /> This Month
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="card-hover">
            <div className="flex items-start justify-between">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className={`flex items-center gap-0.5 text-xs font-medium ${stat.up ? 'text-accent-green' : 'text-accent-red'}`}>
                {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </span>
            </div>
            <div className="mt-3">
              <p className="text-xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-semibold text-gray-900">Revenue & Expenses</h3>
              <p className="text-sm text-gray-500">Monthly trends for the last 7 months</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-primary-500" /> Revenue</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-accent-green" /> Expenses</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} tickFormatter={(v) => `₹${v / 1000}K`} />
              <Tooltip
                contentStyle={{ borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                formatter={(value) => [`₹${value.toLocaleString()}`, '']}
              />
              <Line type="monotone" dataKey="revenue" stroke="#2563EB" strokeWidth={2.5} dot={false} />
              <Line type="monotone" dataKey="expenses" stroke="#10B981" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Expense Breakdown */}
        <div className="card">
          <h3 className="text-base font-semibold text-gray-900 mb-1">Expense Breakdown</h3>
          <p className="text-sm text-gray-500 mb-4">This month by category</p>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={expenseBreakdown} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={3} dataKey="value">
                {expenseBreakdown.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, '']} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {expenseBreakdown.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-gray-600">{item.name}</span>
                </span>
                <span className="font-medium text-gray-900">₹{item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-base font-semibold text-gray-900">Recent Activity</h3>
            <button className="text-xs text-primary-600 font-medium hover:text-primary-700">View all</button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 mt-0.5">
                  {activity.icon === 'payment' && <CreditCard className="w-4 h-4 text-accent-green" />}
                  {activity.icon === 'calendar' && <CalendarDays className="w-4 h-4 text-primary-600" />}
                  {activity.icon === 'user' && <UserPlus className="w-4 h-4 text-purple-600" />}
                  {activity.icon === 'trophy' && <Trophy className="w-4 h-4 text-amber-600" />}
                  {activity.icon === 'package' && <Package className="w-4 h-4 text-cyan-600" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.detail}</p>
                </div>
                <span className="text-xs text-gray-400 shrink-0">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions + Upcoming */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="card">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/dashboard/members" className="flex flex-col items-center gap-2 p-3 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors">
                <UserPlus className="w-5 h-5 text-primary-600" />
                <span className="text-xs font-medium text-primary-700">Add Member</span>
              </Link>
              <Link to="/dashboard/fees" className="flex flex-col items-center gap-2 p-3 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
                <CreditCard className="w-5 h-5 text-accent-green" />
                <span className="text-xs font-medium text-green-700">Collect Fee</span>
              </Link>
              <Link to="/dashboard/court-booking" className="flex flex-col items-center gap-2 p-3 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
                <CalendarPlus className="w-5 h-5 text-purple-600" />
                <span className="text-xs font-medium text-purple-700">Book Court</span>
              </Link>
              <Link to="/dashboard/tournaments" className="flex flex-col items-center gap-2 p-3 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors">
                <Trophy className="w-5 h-5 text-amber-600" />
                <span className="text-xs font-medium text-amber-700">Tournament</span>
              </Link>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-900">Upcoming</h3>
              <Link to="/dashboard/tournaments" className="text-xs text-primary-600 font-medium">View all</Link>
            </div>
            <div className="space-y-3">
              {upcomingEvents.map((event, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${event.type === 'Tournament' ? 'bg-accent-orange' : 'bg-primary-500'}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{event.title}</p>
                    <p className="text-xs text-gray-500">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
