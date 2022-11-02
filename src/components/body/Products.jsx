import React, { useContext } from 'react'
import {DataProducts} from "../../assets/data/db.js";
import { CartContext } from '../context/CartContext';
import { Counter } from './Counter'



export const Products = () => {
   const {addItemToCart} = useContext(CartContext);
   
  return (
   
   <div  className="car">
      <div className="container">
         <div className="row">
   {DataProducts.map((product,i) => 
   
            <div className="col-md-4 padding_leri mt-5 mb-4" key={i}>
               <div className="product-box">
                  <figure><img className="product-img" src={product.img} alt="#"/></figure>
                  <h3>{product.title}</h3>
                  <h3>Price: {product.price}</h3>
                  <Counter />
                  <button className='btn btn-success mt-3' onClick={()=>addItemToCart(product)}>Add to cart</button>


               </div>
            </div>
   )}
         </div>
      </div>
   </div>
     
   
  )
}
