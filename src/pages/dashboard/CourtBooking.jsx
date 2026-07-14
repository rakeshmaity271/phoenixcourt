import { useState } from 'react'
import { Plus, Clock, CalendarDays } from 'lucide-react'
import { courts, bookings } from '../../data/mockData'

const timeSlots = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']

export default function CourtBooking() {
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [selectedDate, setSelectedDate] = useState('2026-07-14')
  const todayBookings = bookings.filter(b => b.date === selectedDate)

  const getBookingForSlot = (courtId, time) => {
    return todayBookings.find(b => b.courtId === courtId && b.startTime <= time && b.endTime > time)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="page-title">Court Booking</h1>
          <p className="page-subtitle">Manage court reservations and availability</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-secondary text-sm"><CalendarDays className="w-4 h-4 mr-1.5" /> {selectedDate}</button>
          <button onClick={() => setShowBookingModal(true)} className="btn-primary text-sm"><Plus className="w-4 h-4 mr-1.5" /> New Booking</button>
        </div>
      </div>

      {/* Court Status */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {courts.map(court => (
          <div key={court.id} className="card flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${court.status === 'Available' ? 'bg-accent-green/10' : 'bg-accent-orange/10'}`}>
              <div className={`w-4 h-4 rounded-full ${court.status === 'Available' ? 'bg-accent-green' : 'bg-accent-orange'}`} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{court.name}</p>
              <p className={`text-xs ${court.status === 'Available' ? 'text-accent-green' : 'text-accent-orange'}`}>{court.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Grid */}
      <div className="card p-0 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-base font-semibold text-gray-900">Today's Schedule — July 14, 2026</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="table-header px-4 py-3 w-24">Time</th>
                {courts.filter(c => c.status !== 'Maintenance').map(court => (
                  <th key={court.id} className="table-header px-4 py-3 text-center">{court.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map(time => (
                <tr key={time} className="border-b border-gray-50">
                  <td className="px-4 py-2 text-xs text-gray-500 font-medium">{time}</td>
                  {courts.filter(c => c.status !== 'Maintenance').map(court => {
                    const booking = getBookingForSlot(court.id, time)
                    return (
                      <td key={court.id} className="px-2 py-1.5">
                        {booking && booking.startTime === time ? (
                          <div className={`rounded-lg px-3 py-2 text-xs ${booking.status === 'Confirmed' ? 'bg-primary-50 text-primary-700 border border-primary-100' : 'bg-amber-50 text-amber-700 border border-amber-100'}`}>
                            <p className="font-medium truncate">{booking.memberName}</p>
                            <p className="text-[10px] opacity-70">{booking.startTime} - {booking.endTime}</p>
                          </div>
                        ) : !booking ? (
                          <div className="rounded-lg px-3 py-2 text-xs bg-gray-50 text-gray-400 border border-dashed border-gray-200 text-center cursor-pointer hover:bg-gray-100 transition-colors">
                            Available
                          </div>
                        ) : null}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking History */}
      <div className="card p-0 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-base font-semibold text-gray-900">Recent Bookings</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="table-header px-4 py-3">Court</th>
                <th className="table-header px-4 py-3">Member</th>
                <th className="table-header px-4 py-3">Date</th>
                <th className="table-header px-4 py-3 hidden sm:table-cell">Time</th>
                <th className="table-header px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(booking => (
                <tr key={booking.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="table-cell font-medium">{booking.courtName}</td>
                  <td className="table-cell text-gray-700">{booking.memberName}</td>
                  <td className="table-cell text-gray-500">{booking.date}</td>
                  <td className="table-cell hidden sm:table-cell text-gray-500">{booking.startTime} - {booking.endTime}</td>
                  <td className="table-cell">
                    <span className={booking.status === 'Confirmed' ? 'badge-green' : 'badge-orange'}>{booking.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowBookingModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-soft w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">New Booking</h2>
              <button onClick={() => setShowBookingModal(false)} className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Court</label>
                <select className="input-field">
                  {courts.filter(c => c.status === 'Available').map(c => <option key={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Member</label>
                <select className="input-field">
                  <option>Select member...</option>
                  <option>Arjun Sharma</option>
                  <option>Sneha Patel</option>
                  <option>Rahul Verma</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Date</label>
                <input className="input-field" type="date" defaultValue="2026-07-14" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Start Time</label>
                  <select className="input-field">
                    {timeSlots.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">End Time</label>
                  <select className="input-field">
                    {timeSlots.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
              <button onClick={() => setShowBookingModal(false)} className="btn-secondary text-sm">Cancel</button>
              <button onClick={() => setShowBookingModal(false)} className="btn-primary text-sm">Book Court</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
