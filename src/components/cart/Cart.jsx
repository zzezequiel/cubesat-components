import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ItemCart from '../itemCart/ItemCart';

const Cart = () => {
  //set cartOpen, always start in false (close)
  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);

const { cartItems } = useContext(CartContext);

useEffect(() => {
  setProductsLength(
    //reduce() return the sum of all the elements in an array
    cartItems.reduce(
      (prev, current)=> prev + current.amount, 0)
  );
}, [cartItems])

const total = cartItems.reduce(
  (prev,current)=> prev + current.amount * current.price, 0
);

  return (
  <div className='sticky-top text-end mx-5'>
    <div className='btn' onClick={()=> setCartOpen(!cartOpen)}>
    {!cartOpen ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="49" fill="green" className="bi bi-bag-check" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
    </svg>
   
    ):(
      <svg xmlns="http://www.w3.org/2000/svg" width="49" fill="green" className="bi bi-bag-check" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
    </svg>
    
    )} 

    {!cartOpen && <div className='mt-1 me-1 fs-4'>{productsLength}</div>}
    
    </div>
    {cartItems && cartOpen && (
      <div>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ):(
          <div>
            {cartItems.map((item, i)=>(
              <ItemCart key={i} item={item} />
            ))}
          </div>
        )}
        <h2>Total: ${total}</h2>
      </div>
    )}
  </div>
  ) 
  
}

export default Cart