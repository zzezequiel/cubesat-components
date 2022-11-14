import React from 'react'

import { Banner } from '../components/subsystems/banner/Banner';
import { Products } from '../components/subsystems/Products';
import Footer  from '../components/footer/Footer';

import { CartProvider } from '../utils/context/CartContext';
import { MainDescription } from '../components/subsystems/description/MainDescription';


function Subsystems() {
  return (
   
    <CartProvider>
      <Banner />
      <MainDescription />
      <Products />
      <Footer />
      
    </CartProvider>
    
  );
}

export default Subsystems;