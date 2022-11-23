import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { CartContext } from '../ui/views/utils/context/CartContext'

const RestrictedRoute = ({children}) => {
    const {cartItems} = useContext(CartContext)
  return (
    
    
    cartItems.length > 0 ? children
    :
    <Navigate to='/subsystems'/>
    
  )
}

export default RestrictedRoute