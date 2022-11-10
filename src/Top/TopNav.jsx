import { Link, Outlet } from 'react-router-dom'
import React, { memo } from 'react'
import logo from "../assets/img/satellite-svgrepo-com.svg"


 const TopNav = () => {
  return (
   <>
    <header>
         <div className="header">
            <div className="container mt-3">
               <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div className="full">
                        <div className="center-desk">
                           <div className="logo">
                              <Link to="index.html"><img src={logo} height="75px" alt="#" /></Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                           <ul className="navbar-nav mr-auto">
                              <li className="nav-item">
                                 <Link to="/" className="nav-link"> Home  </Link>
                              </li>
                              <li className="nav-item">
                                 <Link to="/about" className="nav-link">About</Link >
                              </li>
                              <li className="nav-item dropdown">
                                 <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                 </div>
                                 <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><Link to="/subsystems" className="dropdown-item" >Subsystems</Link></li>
                                    <li><Link to="/satbuses" className="dropdown-item" >Satellite Buses</Link></li>
                                 </ul>
                              </li>
                              <li className='nav-item'>
                                 <Link to="/singin" className="nav-link">
                                    Sign in!
                                 </Link>
                              </li>
                           </ul>
                           <Link to="/contact" className='sign_btn top-contact'>Contact</Link>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
         <section>
            <Outlet />
         </section>
         
      </header>
      </>
  )
}
export default memo(TopNav)
