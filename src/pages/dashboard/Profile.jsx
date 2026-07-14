import { User, Mail, Phone, Calendar, CreditCard, CalendarCheck, Trophy, Edit, Camera } from 'lucide-react'

export default function Profile() {
  return (
    <div className="space-y-6">
      <h1 className="page-title">My Profile</h1>

      {/* Profile Card */}
      <div className="card">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-primary-600 flex items-center justify-center text-white font-bold text-2xl">A</div>
            <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
              <Camera className="w-3.5 h-3.5 text-gray-500" />
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">Admin User</h2>
            <p className="text-sm text-gray-500">Administrator</p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-600">
              <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-gray-400" /> admin@phoenixcourt.com</span>
              <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-gray-400" /> +91 98765 00000</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-gray-400" /> Member since Jan 2024</span>
            </div>
          </div>
          <button className="btn-secondary text-sm"><Edit className="w-4 h-4 mr-1.5" /> Edit Profile</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="stat-card">
          <CreditCard className="w-5 h-5 text-accent-green" />
          <p className="text-xl font-bold text-gray-900">₹18,000</p>
          <p className="text-xs text-gray-500">Total Paid (YTD)</p>
        </div>
        <div className="stat-card">
          <CalendarCheck className="w-5 h-5 text-primary-600" />
          <p className="text-xl font-bold text-gray-900">87%</p>
          <p className="text-xs text-gray-500">Attendance Rate</p>
        </div>
        <div className="stat-card">
          <Calendar className="w-5 h-5 text-purple-600" />
          <p className="text-xl font-bold text-gray-900">23</p>
          <p className="text-xs text-gray-500">Court Bookings</p>
        </div>
        <div className="stat-card">
          <Trophy className="w-5 h-5 text-amber-600" />
          <p className="text-xl font-bold text-gray-900">5</p>
          <p className="text-xs text-gray-500">Tournaments</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="card">
        <div className="flex gap-1 mb-6 border-b border-gray-100">
          {['Payment History', 'Attendance', 'Bookings', 'Tournaments'].map((tab, i) => (
            <button key={tab} className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${i === 0 ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Payment History */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="table-header px-4 py-3">Month</th>
                <th className="table-header px-4 py-3">Amount</th>
                <th className="table-header px-4 py-3">Status</th>
                <th className="table-header px-4 py-3 hidden sm:table-cell">Date</th>
                <th className="table-header px-4 py-3 hidden sm:table-cell">Method</th>
              </tr>
            </thead>
            <tbody>
              {[
                { month: 'July 2026', amount: 1500, status: 'Paid', date: '2026-07-02', method: 'UPI' },
                { month: 'June 2026', amount: 1500, status: 'Paid', date: '2026-06-03', method: 'UPI' },
                { month: 'May 2026', amount: 1500, status: 'Paid', date: '2026-05-05', method: 'Bank Transfer' },
                { month: 'April 2026', amount: 1500, status: 'Paid', date: '2026-04-01', method: 'Cash' },
                { month: 'March 2026', amount: 1500, status: 'Paid', date: '2026-03-04', method: 'UPI' },
              ].map((p, i) => (
                <tr key={i} className="border-b border-gray-50">
                  <td className="table-cell font-medium">{p.month}</td>
                  <td className="table-cell">₹{p.amount.toLocaleString()}</td>
                  <td className="table-cell"><span className="badge-green">{p.status}</span></td>
                  <td className="table-cell hidden sm:table-cell text-gray-500">{p.date}</td>
                  <td className="table-cell hidden sm:table-cell text-gray-500">{p.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
