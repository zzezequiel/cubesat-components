import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthContext, AuthProvider } from '../../../auth/context'
import { CartContext } from '../utils/context/CartContext'
import ProductsCheckout from '../components/checkout/ProductsCheckout'
import UserShippingData from '../components/checkout/UserShippingData'

const Checkout = () => {
const {cartItems} = useContext(CartContext)

  return (

    <>
            <div className='row bg-back'>
                <Link className='ms-5 ps-5 p-3' to='/subsystems'> ⇇ BACK TO ALL PLATFORMS</Link>
            </div>
            {cartItems.length != 0?
                    <div className='d-flex container'>
                        
                        <div className='col-sm-4'>
                            <UserShippingData />
                        </div>
                        <div className='col-sm-8'>
                            <ProductsCheckout />
                        </div>
                    </div>
            
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