import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthContext, AuthProvider } from '../../../auth/context'
import { CartContext } from '../utils/context/CartContext'
import ProductsCheckout from '../components/checkout/ProductsCheckout'
import UserShippingData from '../components/checkout/UserShippingData'
import CompTest from '../components/checkout/compTest'

const Checkout = () => {
const {cartItems} = useContext(CartContext)
console.log(cartItems, 'checkout')


  return (

    <>
            <div className='row bg-back'>
                <Link className='ms-5 ps-5 p-3' to='/subsystems'> ⇇ BACK TO ALL PLATFORMS</Link>
            </div>
            <h1 className='text-center mt-3'>Checkout</h1>
            {cartItems.length != 0?


                   <CompTest />
            
        :
                    <div className='container text-center mt-5'>
                        <h2>No items Selected</h2>
                        
                        <Link className='sign_btn top-contact mt-3' to='/subsystems'>See ours components</Link>
                    </div>
        }
    </>
  )
}

export default Checkout