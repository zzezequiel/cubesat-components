import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/img/satellite-svgrepo-com.svg"



 const Footer = () => {
  return (
    <div className="container mt-5">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">Cubesat ZZ</p>

    <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <img src={logo} height="75px" alt="#" />
    </Link>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Home</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Features</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Pricing</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">FAQs</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">About</Link></li>
    </ul>
  </footer>
</div>
  )
}
export default React.memo(Footer)