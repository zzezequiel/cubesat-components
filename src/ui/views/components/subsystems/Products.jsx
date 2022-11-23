import React, { useContext, useState, useEffect } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { CartContext } from '../../utils/context/CartContext';

import accounting from "accounting"
import { Link } from 'react-router-dom'
import { Counter } from './counter/Counter.jsx';



import fetchData from '../../../../api/Api'
const url = "http://localhost:4000/subsystems";

export const Products = () => {
   const {addItemToCart} = useContext(CartContext);

   const [dataProducts, setDataProducts] = useState([])
   const [loading, setLoading] = useState(true)
   useEffect(() => {
      const response = async ()=> {
         setLoading(true);
      try{
         const data = await fetchData(url);
         setDataProducts(data);
      } catch{
         setDataProducts([])
      }
      setLoading(false);  
  
      }
      response();
    }, [url])
   
  return (
   <>
      <div className="container box ">
         <iframe src="https://giphy.com/embed/LpdKGGXFqAyiHA0UYt" width="480" height="457" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><Link to="https://giphy.com/stickers/EvaGarnerSecretEden-eva-garner-the-secret-of-eden-le-de-leden-LpdKGGXFqAyiHA0UYt"></Link></p>
         <div className="row  ">
         
   {loading?
      <div className='d-flex justify-content-center p-5 m-5'> 
         <BallTriangle
            height={200}
            width={200}
            radius={5}
            color="#000"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
      />
      </div>: null
   }
   {dataProducts ? dataProducts.map((product,z) => (
   
            <div className="col-md-4 padding_leri mt-5 mb-4 shadow-sm p-3 mb-5 rounded cont-product cont-all" key={z}>
               <div className="product-box text-center">
                  <figure><img className="product-img" src={product.img} alt="#"/></figure>
                  <h3>{product.title}</h3>
                  <h3>Price: {accounting.formatMoney(product.price,{symbol:"€", format:"%v %s"})}</h3>
                  



                  <div className=''>
                   <button className='mt-3 add-to-cart cart ' onClick={()=>addItemToCart(product)}>Add to cart</button>
                  </div>

                  <Link to={`/subsystems/${product.id}`}            
                     className='seemore mt-4'>
                        See more
                  </Link>


               </div>
            </div>
   )): "error"}
         </div>
      </div>
   </>
  )
}
