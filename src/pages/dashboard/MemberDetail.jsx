import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Mail, Phone, Calendar, MapPin, CreditCard, CalendarCheck, Trophy, Edit } from 'lucide-react'
import { members, fees } from '../../data/mockData'

export default function MemberDetail() {
  const { id } = useParams()
  const member = members.find(m => m.id === parseInt(id)) || members[0]
  const memberFees = fees.filter(f => f.memberId === member.id)

  const getInitials = (name) => name.split(' ').map(n => n[0]).join('')

  return (
    <div className="space-y-6">
      {/* Back */}
      <Link to="/dashboard/members" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft className="w-4 h-4" /> Back to Members
      </Link>

      {/* Profile Header */}
      <div className="card">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xl">
            {getInitials(member.name)}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-xl font-bold text-gray-900">{member.name}</h1>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="badge-blue">{member.role}</span>
                  <span className={member.status === 'Active' ? 'badge-green' : 'badge-red'}>{member.status}</span>
                  <span className="text-sm text-gray-500">{member.plan} Plan</span>
                </div>
              </div>
              <button className="btn-secondary text-sm"><Edit className="w-4 h-4 mr-1.5" /> Edit</button>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Mail className="w-4 h-4 text-gray-400" /> {member.email}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Phone className="w-4 h-4 text-gray-400" /> {member.phone}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-gray-400" /> Joined {member.joinDate}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-gray-400" /> {member.emergencyContact}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="stat-card">
          <div className="w-10 h-10 bg-accent-green/10 rounded-xl flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-accent-green" />
          </div>
          <p className="text-xl font-bold text-gray-900">{member.feesPaid ? '₹1,500' : '₹0'}</p>
          <p className="text-xs text-gray-500">Fees Paid (July)</p>
        </div>
        <div className="stat-card">
          <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
            <CalendarCheck className="w-5 h-5 text-primary-600" />
          </div>
          <p className="text-xl font-bold text-gray-900">{member.attendance}%</p>
          <p className="text-xs text-gray-500">Attendance Rate</p>
        </div>
        <div className="stat-card">
          <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
            <Trophy className="w-5 h-5 text-amber-600" />
          </div>
          <p className="text-xl font-bold text-gray-900">3</p>
          <p className="text-xs text-gray-500">Tournaments</p>
        </div>
      </div>

      {/* Tabs Content */}
      <div className="card">
        <div className="flex gap-1 mb-6 border-b border-gray-100">
          {['Overview', 'Payments', 'Attendance', 'Bookings'].map((tab, i) => (
            <button key={tab} className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${i === 0 ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Payments Table */}
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
              {memberFees.length > 0 ? memberFees.map(fee => (
                <tr key={fee.id} className="border-b border-gray-50">
                  <td className="table-cell font-medium">{fee.month}</td>
                  <td className="table-cell">₹{fee.amount.toLocaleString()}</td>
                  <td className="table-cell">
                    <span className={fee.status === 'Paid' ? 'badge-green' : fee.status === 'Overdue' ? 'badge-red' : 'badge-orange'}>{fee.status}</span>
                  </td>
                  <td className="table-cell hidden sm:table-cell">{fee.paidDate || '-'}</td>
                  <td className="table-cell hidden sm:table-cell">{fee.method || '-'}</td>
                </tr>
              )) : (
                <tr><td colSpan={5} className="table-cell text-center text-gray-400 py-8">No payment records found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
