import React, { useContext } from 'react'
import {Products} from "../../assets/data/db.js";
import { CartContext } from '../context/CartContext';
import { Counter } from './Counter'



export const MainProducts = () => {
   const {addItemToCart} = useContext(CartContext);
   
  return (
   
   <div  className="car">
      <div className="container">
         <div className="row">
   {Products.map(p => 
      <div className="col-md-4 padding_leri mt-5 mb-4">
      <div className="product-box">
         <figure><img className="product-img" src={p.img} alt="#"/></figure>
         <h3>{p.title}</h3>
         <h3>Price: {p.price}</h3>
         <Counter />
         <button className='btn btn-success mt-3' onClick={()=>addItemToCart(Products)}>Add to cart</button>


      </div>
   </div>

   )}

     </div>
     </div>
     </div>
     
   
  )
}
