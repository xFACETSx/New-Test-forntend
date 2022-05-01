import { createContext, createRef, useContext, useState } from 'react'

const NavbarContext = createContext()
export const NavbarProvider = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [isNavbarShowBg, setIsNavbarShowBg] = useState(false)
  return (
    <NavbarContext.Provider
      value={{
        isNavbarOpen,
        setIsNavbarOpen,
        isNavbarShowBg,
        setIsNavbarShowBg,
      }}
    >
      {children}
    </NavbarContext.Provider>
  )
}

export const useNavbarContext = () => useContext(NavbarContext)
