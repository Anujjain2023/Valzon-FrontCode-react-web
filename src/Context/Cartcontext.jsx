import React, { createContext } from 'react'
export const cartdata = createContext()

const Cartcontex = () => {
     const [cartData , setCartData] = useState([])
  return (
    <div>
    <context.Provider value={{cartData,setCartData}}>
    {props.children}
  </context.Provider>
    </div>
  )
}

export default Cartcontex
