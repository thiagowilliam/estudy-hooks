import React, { createContext, useState } from 'react'

type User = {
  fullName: string
  email: string
  score: number
}

interface IUserContext {
  user: User
  updateUser: (updatedData: Partial<User>) => void
}

export const UserContext = createContext<IUserContext | null>(null)

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<User>({
    fullName: '',
    email: '',
    score: 0,
  })

  const updateUser = (data: Partial<User>) => {
    setUser((prev) => ({ ...prev, ...data }))
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
