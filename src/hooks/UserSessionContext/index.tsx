import { createContext, ReactNode, useState } from "react"
import { UserSession } from "../../models/UserSession"

interface UserSessionContextProps {
  userSession: UserSession
  didSetUserSession: (user: UserSession) => void
}

interface UserSessionProviderProps {
  children: ReactNode
}

export const UserSessionContext = createContext<UserSessionContextProps>({} as UserSessionContextProps)

export function UserSessionProvider({ children }: UserSessionProviderProps) {

  const [userSession, setUserSession] = useState<UserSession>()

  function didSetUserSession(user: UserSession) {
    setUserSession(user)
  }

  return (
    <UserSessionContext.Provider value={{ userSession, didSetUserSession }}>
      {children}
    </UserSessionContext.Provider>
  )
}