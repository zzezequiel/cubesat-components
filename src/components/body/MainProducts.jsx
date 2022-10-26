import React from 'react'
import { ProductCard } from './ProductCard'
import {Products} from "../../assets/data/db.js";

export const MainProducts = () => {
  return (
   <>
   <div  className="car">
      <div className="container">
         <div className="row">
   {Products.map(p => 
      <ProductCard 
         key={p.id}
         title={p.title}
         description={p.description}
         img={p.img}
         price={p.price}
      />
   )}
     </div>
     </div>
     </div>
     
   </>
  )
}
