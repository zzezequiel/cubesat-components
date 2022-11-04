import './Home.css';
import React from 'react'
import  TopNav  from './Top/TopNav';
import Router from './routes/Router';
import {BrowserRouter} from "react-router-dom"




function App() {
  return (
    <>
    <BrowserRouter>

      <TopNav />
      <Router />

    </BrowserRouter>
    </>
  );
}

export default App;
