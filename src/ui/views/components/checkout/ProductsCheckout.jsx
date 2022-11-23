import React, { useContext } from 'react'
import { CartContext } from '../../utils/context/CartContext';
import ItemCart from '../cart/itemCart/ItemCart';

const ProductsCheckout = () => {
    
    const {cartItems} = useContext(CartContext);
    console.log(cartItems);
  return (

    <div className='container mt-4'>
        <div><h3>Your CART</h3></div>
        {cartItems.map((item, i)=>(
                <ItemCart key={i} item={item} />
        ))}
    </div>
  )
}

export default ProductsCheckout