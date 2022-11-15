import React, { useContext, useState, useEffect } from 'react'

import { CartContext } from '../../utils/context/CartContext';

import accounting from "accounting"
import { Link } from 'react-router-dom'
import { Counter } from './counter/Counter.jsx';


import fetchData from '../../../../api/Api'
const url = "http://localhost:4000/subsystems";

export const Products = () => {
   const {addItemToCart} = useContext(CartContext);

   const [dataProducts, setDataProducts] = useState([])

   useEffect(() => {
      const response = async ()=> {
      const data = await fetchData(url);
      setDataProducts(data);
  
      }
      response();
    }, [url])
   
  return (
   <>
      <div className="container box ">
         <iframe src="https://giphy.com/embed/LpdKGGXFqAyiHA0UYt" width="480" height="457" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><Link to="https://giphy.com/stickers/EvaGarnerSecretEden-eva-garner-the-secret-of-eden-le-de-leden-LpdKGGXFqAyiHA0UYt"></Link></p>
         <div className="row  ">
   {dataProducts ? dataProducts.map((product,z) => (
   
            <div className="col-md-4 padding_leri mt-5 mb-4 shadow-sm p-3 mb-5 rounded cont-product cont-all" key={z}>
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
   )): "error"}
         </div>
      </div>
   </>
  )
}
