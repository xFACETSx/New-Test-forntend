import { createContext, useContext, useState, useEffect } from 'react'

import _, { flatMap } from 'lodash'

const userContextKey = 'userContextKey'
const UserContext = createContext()
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isUserLoaded, setIsUserLoaded] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const data = localStorage.getItem(userContextKey) || '{}'
    setUser(JSON.parse(data))
    setIsUserLoaded(true)
    setIsLogin(_.get(JSON.parse(data), 'email') ? true : false)
  }, [])

  useEffect(() => {
    const data = JSON.stringify(user)
    localStorage.setItem(userContextKey, data)
  }, [user])

  const saveAddressForGuest = ({ note, ...formValue }) => {
    setUser({ ...user, address: [formValue] })
  }
  const saveAddressForMember = ({ note, ...formValue }) => {
    setUser({ ...user, address: [formValue] })
  }
  const login = async (data) => {
    setUser({ ...user, ..._.get(data, '[0]', {}) })
    setIsLogin(true)
  }
  const logout = async () => {
    setUser({})
    setIsLogin(false)
    localStorage.removeItem(userContextKey)
  }

  return (
    <UserContext.Provider
      value={{
        logout,
        isLogin,
        login,
        isUserLoaded,
        user,
        saveAddressForGuest,
        saveAddressForMember,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
