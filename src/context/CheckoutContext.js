import { createContext, useContext, useState } from 'react'
import { nanoid } from 'nanoid'

const CheckoutContext = createContext()
export const CartProvider = ({ children }) => {
  const [checkout, setCheckout] = useState([
    {
      __id: nanoid(10),
      FName: 'john1',
      LName: 'cena1',
      Address: '1 Chalong Krung 1 Alley, Lat Krabang, Bangkok 10520',
      note: 'testssssss',
    },
  ])
  return (
    <CheckoutContext.Provider
      value={{
        checkout,
        setCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckoutContext = () => useContext(CheckoutContext)
