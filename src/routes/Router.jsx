import React from 'react'
import About from '../About';
import Contact from '../Contact';
import Subsystems from '../Subsystems';
import { Routes, Route, Navigate} from "react-router-dom"
import SatBuses from '../SatBuses';
import MainHome from '../componentsHome/main/MainHome';

const Router = () => {
  return (
    <>
        <Routes>
                <Route path="/" element={<MainHome />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/subsystems" element={<Subsystems />}></Route>
                <Route path="/satbuses" element={<SatBuses />}></Route>
                <Route path="/*" element={<Navigate replace to="/" />}></Route>
        </Routes>
        </>
  )
}

export default Router