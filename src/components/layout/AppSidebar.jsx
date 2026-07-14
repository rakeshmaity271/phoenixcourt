import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Users, CreditCard, CalendarCheck, CalendarDays,
  Package, Receipt, Trophy, BarChart3, Megaphone, Settings, X, ChevronDown
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'Overview' },
  { path: '/dashboard/members', icon: Users, label: 'Members' },
  { path: '/dashboard/fees', icon: CreditCard, label: 'Monthly Fees' },
  { path: '/dashboard/attendance', icon: CalendarCheck, label: 'Attendance' },
  { path: '/dashboard/court-booking', icon: CalendarDays, label: 'Court Booking' },
  { path: '/dashboard/inventory', icon: Package, label: 'Inventory' },
  { path: '/dashboard/expenses', icon: Receipt, label: 'Expenses' },
  { path: '/dashboard/tournaments', icon: Trophy, label: 'Tournaments' },
  { path: '/dashboard/reports', icon: BarChart3, label: 'Reports' },
  { path: '/dashboard/announcements', icon: Megaphone, label: 'Announcements' },
]

const bottomItems = [
  { path: '/dashboard/settings', icon: Settings, label: 'Settings' },
]

export default function AppSidebar({ isOpen, onClose }) {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/dashboard') return location.pathname === '/dashboard'
    return location.pathname.startsWith(path)
  }

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
        <NavLink to="/dashboard" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
              <path d="M12 2L15 8L21 10L15 12L12 18L9 12L3 10L9 8L12 2Z" />
            </svg>
          </div>
          <div>
            <h1 className="text-base font-bold text-gray-900 leading-tight">Phoenix Court</h1>
            <p className="text-[11px] text-gray-400 font-medium">Club Management</p>
          </div>
        </NavLink>
        <button onClick={onClose} className="lg:hidden p-1.5 hover:bg-gray-100 rounded-lg">
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto scrollbar-hide">
        <p className="px-3 mb-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Menu</p>
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={`sidebar-link ${isActive(item.path) ? 'active' : ''}`}
          >
            <item.icon className="w-[18px] h-[18px]" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="px-3 py-3 border-t border-gray-100 space-y-1">
        {bottomItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={`sidebar-link ${isActive(item.path) ? 'active' : ''}`}
          >
            <item.icon className="w-[18px] h-[18px]" />
            <span>{item.label}</span>
          </NavLink>
        ))}

        {/* User */}
        <div className="flex items-center gap-3 px-3 py-2.5 mt-2">
          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold text-sm">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
            <p className="text-xs text-gray-400 truncate">admin@phoenixcourt.com</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden" onClick={onClose} />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-[260px] bg-white border-r border-gray-100 
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {sidebarContent}
      </aside>
    </>
  )
}
