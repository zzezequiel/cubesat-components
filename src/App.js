import React from 'react'
import './ui/styles/App.css';

import Router from './routes/Router';
import {BrowserRouter} from "react-router-dom"
import TopNav from './ui/views/components/Top/TopNav';




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
