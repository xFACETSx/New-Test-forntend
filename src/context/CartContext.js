import { createContext, useContext, useState, useEffect } from 'react'

const cartContextKey = 'cartContextKey'
const CartContext = createContext()
export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])

  useEffect(() => {
    const data = localStorage.getItem(cartContextKey) || '[]'
    setCartList(JSON.parse(data))
  }, [])

  useEffect(() => {
    const data = JSON.stringify(cartList)
    localStorage.setItem(cartContextKey, data)
  }, [cartList])

  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
