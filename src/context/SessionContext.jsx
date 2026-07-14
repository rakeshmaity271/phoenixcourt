import { createContext, useContext, useState } from 'react'
import { sessions, currentSession as defaultSession } from '../data/mockData'

const SessionContext = createContext()

export function SessionProvider({ children }) {
  const [activeSession, setActiveSession] = useState(defaultSession)

  const sessionList = sessions
  const activeSessionObj = sessions.find(s => s.id === activeSession) || sessions[sessions.length - 1]

  return (
    <SessionContext.Provider value={{ activeSession, setActiveSession, sessionList, activeSessionObj }}>
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  const ctx = useContext(SessionContext)
  if (!ctx) throw new Error('useSession must be used within SessionProvider')
  return ctx
}
