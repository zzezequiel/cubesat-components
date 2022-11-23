import React from 'react'
import './ui/styles/App.css';

import Router from './routes/Router';
import {BrowserRouter} from "react-router-dom"
import TopNav from './ui/views/components/Top/TopNav';
import { AuthProvider } from './auth/context';
import { CartProvider } from './ui/views/utils/context/CartContext';




function App() {
  return (
    <>
    <BrowserRouter>
    <AuthProvider>
      <CartProvider>
      <TopNav />
      <Router />
      </CartProvider>
    </AuthProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
