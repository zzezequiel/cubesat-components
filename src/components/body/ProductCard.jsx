import React from 'react'




export const ProductCard = ({title, description, price, img, }) => {
  return (
    
               <div className="col-md-4 padding_leri mt-5 mb-4">
                  <div className="product-box">
                     <figure><img className="product-img" src={img} alt="#"/></figure>
                     <h3>{title}</h3>
                     <h3>Price: {price}</h3>
                     <Counter />
   

                  </div>
               </div>
         
  )
}
