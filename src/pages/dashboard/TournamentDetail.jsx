import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Trophy, Users, Calendar, MapPin, Medal } from 'lucide-react'
import { tournaments, members } from '../../data/mockData'

const mockPlayers = members.slice(0, 8)
const mockFixtures = [
  { round: 'Quarter Final', match: 'QF1', p1: 'Arjun Sharma', p2: 'Sneha Patel', score: '21-15, 21-18', winner: 'Arjun Sharma' },
  { round: 'Quarter Final', match: 'QF2', p1: 'Rahul Verma', p2: 'Karthik Nair', score: '18-21, 21-14, 21-19', winner: 'Rahul Verma' },
  { round: 'Quarter Final', match: 'QF3', p1: 'Vikram Rao', p2: 'Aditya Gupta', score: '21-12, 21-16', winner: 'Vikram Rao' },
  { round: 'Quarter Final', match: 'QF4', p1: 'Neha Reddy', p2: 'Kavya Iyer', score: '15-21, 21-18, 21-17', winner: 'Neha Reddy' },
  { round: 'Semi Final', match: 'SF1', p1: 'Arjun Sharma', p2: 'Rahul Verma', score: '21-19, 21-17', winner: 'Arjun Sharma' },
  { round: 'Semi Final', match: 'SF2', p1: 'Vikram Rao', p2: 'Neha Reddy', score: '21-14, 21-11', winner: 'Vikram Rao' },
  { round: 'Final', match: 'F', p1: 'Arjun Sharma', p2: 'Vikram Rao', score: '21-18, 19-21, 21-16', winner: 'Arjun Sharma' },
]

export default function TournamentDetail() {
  const { id } = useParams()
  const tournament = tournaments.find(t => t.id === parseInt(id)) || tournaments[0]

  return (
    <div className="space-y-6">
      <Link to="/dashboard/tournaments" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft className="w-4 h-4" /> Back to Tournaments
      </Link>

      <div className="card">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${tournament.status === 'Completed' ? 'bg-primary-50' : tournament.status === 'Ongoing' ? 'bg-accent-green/10' : 'bg-accent-orange/10'}`}>
            <Trophy className={`w-7 h-7 ${tournament.status === 'Completed' ? 'text-primary-600' : tournament.status === 'Ongoing' ? 'text-accent-green' : 'text-accent-orange'}`} />
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-900">{tournament.name}</h1>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {tournament.startDate} — {tournament.endDate}</span>
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {tournament.participants} players</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {tournament.venue}</span>
            </div>
          </div>
          <span className={tournament.status === 'Completed' ? 'badge-blue' : tournament.status === 'Ongoing' ? 'badge-green' : 'badge-orange'}>{tournament.status}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="card">
        <div className="flex gap-1 mb-6 border-b border-gray-100">
          {['Overview', 'Players', 'Fixtures', 'Winners'].map((tab, i) => (
            <button key={tab} className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${i === 2 ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Fixtures */}
        <div className="space-y-6">
          {['Quarter Final', 'Semi Final', 'Final'].map(round => {
            const roundFixtures = mockFixtures.filter(f => f.round === round)
            if (roundFixtures.length === 0) return null
            return (
              <div key={round}>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">{round}</h3>
                <div className="space-y-2">
                  {roundFixtures.map(f => (
                    <div key={f.match} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-4 flex-1">
                        <span className={`text-sm font-medium ${f.winner === f.p1 ? 'text-accent-green' : 'text-gray-700'}`}>{f.p1}</span>
                        <span className="text-xs text-gray-400 font-mono px-3 py-1 bg-white rounded-lg">{f.score}</span>
                        <span className={`text-sm font-medium ${f.winner === f.p2 ? 'text-accent-green' : 'text-gray-700'}`}>{f.p2}</span>
                      </div>
                      {f.winner && <Medal className="w-4 h-4 text-amber-500 shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
