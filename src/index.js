import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TopNav } from './Top/TopNav';
import About from './About';
import Contact from './Contact';
import Subsystems from './Subsystems';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import SatBuses from './SatBuses';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 // <React.StrictMode>
 <BrowserRouter>
   <Routes>
      <Route path="/" element={<TopNav />}>
         <Route index element={<App />}></Route>
         <Route path="about" element={<About />}></Route>
         <Route path="contact" element={<Contact />}></Route>
         <Route path="subsystems" element={<Subsystems />}></Route>
         <Route path="satbuses" element={<SatBuses />}></Route>
         <Route path="*" element={<Navigate replace to="/" />}></Route>
      </Route>
   </Routes>
 </BrowserRouter>
 // </React.StrictMode>
)