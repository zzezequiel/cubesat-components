import './App.css';
import React from 'react'

import { Banner } from './components/body/Banner';
import { MainDescription } from './components/body/MainDescription';
import { MainProducts } from './components/body/MainProducts';
import Footer  from './components/footer/Footer';
import { TopNav } from './components/Top/TopNav';


function App() {
  return (
    <>
      <TopNav />
      <Banner />
      <MainDescription />
      <MainProducts />
      <Footer />
    </>
  );
}

export default App;
