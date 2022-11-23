import React from 'react'
import ProductsCheckout from './ProductsCheckout'
import UserShippingData from './UserShippingData'
import accounting from 'accounting'
import { useContext } from 'react'
import { CartContext } from '../../utils/context/CartContext'

const CompTest = () => {
    const {cartItems} =useContext(CartContext)
    const total = cartItems.reduce(
        (prev,current)=> prev + current.amount * current.price, 0
      );
  return (
    <div className='d-flex container'>
                        
        <div className='col-sm-4'>
            <UserShippingData />
        </div>
        <div className='col-sm-8'>
            <ProductsCheckout />
        </div>
        <p>Total: {accounting.formatMoney(total,{symbol:"€", format:"%v %s"})}</p>
    </div>
  )
}

export default CompTest