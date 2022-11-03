import React from 'react'
import { CartContext } from '../context/CartContext';
import { useEffect } from 'react';
import { useContext } from 'react'

export const Counter = () => {
  const {add, subtrac, count} = useContext(CartContext);


  return (
    <section>
        <h4 className='text-center'>Quantity needed: {count} </h4>
        <div className="cont-quantity text-center">
            <button className='col quantity mx-2' onClick={()=>subtrac()}>-</button>
            <button className='col quantity mx-2' onClick={()=>add()}>+</button>
        </div>
    </section>
  )
}