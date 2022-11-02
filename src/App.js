import './App.css';
import React from 'react'

import { Banner } from './components/body/Banner';
import { MainDescription } from './components/body/MainDescription';
import { MainProducts } from './components/body/MainProducts';
import Footer  from './components/footer/Footer';
import { TopNav } from './components/Top/TopNav';
import Cart from './components/cart/Cart';
import { CartProvider } from './components/context/CartContext';


function App() {
  return (
   
    <CartProvider>
      <TopNav />
      <Banner />
      <MainDescription />
      <MainProducts />
      
      <Footer />
      </CartProvider>
    
  );
}

export default App;
