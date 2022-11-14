import React from 'react'
import { Routes, Route, Navigate} from "react-router-dom"


import Login from '../ui/views/pages/Login';
import SingIn from '../ui/views/pages/SingIn';

import MainHome from '../ui/views/pages/MainHome';
import About from '../ui/views/pages/About';
import Contact from '../ui/views/pages/Contact';

import Subsystems from '../ui/views/pages/Subsystems';
import SatBuses from '../ui/views/pages/SatBuses';

import DetailProduct from '../ui/views/pages/DetailProduct';

const Router = () => {
  return (
    <>
        <Routes>
                <Route path="/" element={<MainHome />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/subsystems" element={<Subsystems />}></Route>
                <Route path="/satbuses" element={<SatBuses />}></Route>
                <Route path="/product" element={<DetailProduct />}></Route>
                <Route path="/singin" element={<SingIn />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/*" element={<Navigate replace to="/" />}></Route>
        </Routes>
        </>
  )
}

export default Router