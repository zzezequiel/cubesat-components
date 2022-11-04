import React from 'react'
import Cart from '../cart/Cart';

export const MainDescription = () => {
  return (
   <div className="container">
   <div className="row">
               <div className="col">
                     <h1>Cubesat components - subsystems </h1>
                     <h2>Build your onwn CubeSat with the technologis you need for your businnes</h2>
               </div>
               <div className='col-md-auto'>
                  <Cart />
               </div>
   </div>
            </div>
  )
}
