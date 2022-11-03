import React, { useContext } from 'react'
import {DataProducts} from "../../assets/data/db.js";
import { CartContext } from '../context/CartContext';
import { Counter } from './Counter'
import accounting from "accounting"



export const Products = () => {
   const {addItemToCart} = useContext(CartContext);
   
  return (
   
   
      <div className="container box ">
         <iframe src="https://giphy.com/embed/LpdKGGXFqAyiHA0UYt" width="480" height="457" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/EvaGarnerSecretEden-eva-garner-the-secret-of-eden-le-de-leden-LpdKGGXFqAyiHA0UYt"></a></p>
         <div className="row  ">
   {DataProducts.map((product,i) => 
   
            <div className="col-md-4 padding_leri mt-5 mb-4 shadow-sm p-3 mb-5 rounded cont-product cont-all" key={i}>
               <div className="product-box text-center">
                  <figure><img className="product-img" src={product.img} alt="#"/></figure>
                  <h3>{product.title}</h3>
                  <h3>Price: {accounting.formatMoney(product.price,{symbol:"€", format:"%v %s"})} €</h3>
                  <Counter />
                  <div className=''>
                   <button className='mt-3 add-to-cart cart ' onClick={()=>addItemToCart(product)}>Add to cart</button>
                  </div>
               </div>
            </div>
   )}
         </div>
      </div>
   
     
   
  )
}
