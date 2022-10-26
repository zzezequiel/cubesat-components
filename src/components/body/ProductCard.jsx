import React from 'react'


export const ProductCard = ({title, description, price, img}) => {
  return (
    
               <div className="col-md-4 padding_leri">
                  <div className="product-box">
                     <figure><img className="product-img" src={img} alt="#"/></figure>
                     <h3>{title}</h3>
                     <h3>{price}</h3>
                  </div>
               </div>
         
  )
}
