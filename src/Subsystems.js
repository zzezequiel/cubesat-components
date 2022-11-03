import './App.css';
import React from 'react'

import { Banner } from './components/body/Banner';
import { MainDescription } from './components/body/MainDescription';
import { Products } from './components/body/Products';
import Footer  from './components/footer/Footer';
import { TopNav } from './Top/TopNav';
import Cart from './components/cart/Cart';
import { CartProvider } from './components/context/CartContext';


function Subsystems() {
  return (
   
    <CartProvider>
      <Banner />
      <MainDescription />
      <Cart />
      <Products />
      <Footer />
      
    </CartProvider>
    
  );
}

export default Subsystems;