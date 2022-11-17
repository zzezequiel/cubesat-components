import { Link, Outlet } from 'react-router-dom'
import React, { memo } from 'react'
import logo from "../../../img/satellite-svgrepo-com.svg"
import FormLogin from '../login/FormLogin'
import FromSingIn from '../register/FormSingIn'


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
                              <Link type="button" className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
                                  Registrer or log in
                              </Link>
                                 
                              </li>
                           </ul>
                           <Link to="/contact" className='sign_btn top-contact'>Contact</Link>
                        </div>
                     </nav>

                        <div className="modal fade" id="exampleModalToggle" tabindex="-1" aria-labelledby="exampleModalToggleLabel" aria-hidden="true">
                           <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                 <div className="modal-header text-center">
                                    <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Welcom to ZZAT</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div className="modal-body d-flex align-items-center flex-sm-column">
                                 <img src={logo} height="110px" alt="#" className=''/>

                                 <div className='row mt-5 m-2'>
                                    <Link to="/singin" className="top-contact btn sign-link text-center" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" >
                                       Sign un!
                                    </Link>
                                 </div>
                                 <div className='row m-2'>
                                    <Link to="/login" className="top-contact btn sign-link text-center " data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">
                                       Log in!
                                    </Link>
                                 </div>
                                 </div>
                                 <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-warning" data-bs-dismiss="modal">Close</button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                           <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                 <div className="modal-header">
                                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div className="modal-body">
                                    <FromSingIn />
                                 </div>
                                 <div className="modal-footer">
                                 <button className="btn btn-outline-warning" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">⇇</button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
                           <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                 <div className="modal-header">
                                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div className="modal-body">
                                 <FormLogin />
                                 </div>
                                 <div className="modal-footer">
                                 <button className="btn btn-outline-warning" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">⇇</button>
                                 </div>
                              </div>
                           </div>
                        </div>

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
