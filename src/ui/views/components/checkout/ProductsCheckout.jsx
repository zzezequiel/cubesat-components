import React, { useContext } from 'react'
import { CartContext } from '../../utils/context/CartContext';
import ItemCart from '../cart/itemCart/ItemCart';

const ProductsCheckout = () => {
    
    const {cartItems} = useContext(CartContext);
  return (

    <div className='container mt-4'>
        <div><h3>Your CART</h3></div>
        {cartItems.map((item)=>(
                <ItemCart key={item.id} item={item} />
        ))}
    </div>
  )
}

export default ProductsCheckout