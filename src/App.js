import React from 'react'
import './ui/styles/App.css';

import Router from './routes/Router';
import {BrowserRouter} from "react-router-dom"
import TopNav from './ui/views/components/Top/TopNav';
import { AuthProvider } from './auth/context';




function App() {
  return (
    <>
    <BrowserRouter>
    <AuthProvider>
     <TopNav />
      <Router />
    </AuthProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
