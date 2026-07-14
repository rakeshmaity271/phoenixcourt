import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SessionProvider } from './context/SessionContext'
import DashboardLayout from './components/layout/DashboardLayout'
import LandingLayout from './components/layout/LandingLayout'
import Landing from './pages/Landing'
import Overview from './pages/dashboard/Overview'
import Members from './pages/dashboard/Members'
import MemberDetail from './pages/dashboard/MemberDetail'
import Fees from './pages/dashboard/Fees'
import Attendance from './pages/dashboard/Attendance'
import CourtBooking from './pages/dashboard/CourtBooking'
import Inventory from './pages/dashboard/Inventory'
import Expenses from './pages/dashboard/Expenses'
import Tournaments from './pages/dashboard/Tournaments'
import TournamentDetail from './pages/dashboard/TournamentDetail'
import Reports from './pages/dashboard/Reports'
import Announcements from './pages/dashboard/Announcements'
import Profile from './pages/dashboard/Profile'
import Settings from './pages/dashboard/Settings'

function App() {
  return (
    <SessionProvider>
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="members" element={<Members />} />
          <Route path="members/:id" element={<MemberDetail />} />
          <Route path="fees" element={<Fees />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="court-booking" element={<CourtBooking />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="tournaments" element={<Tournaments />} />
          <Route path="tournaments/:id" element={<TournamentDetail />} />
          <Route path="reports" element={<Reports />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </SessionProvider>
  )
}

export default App
