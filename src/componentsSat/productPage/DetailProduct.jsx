import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import fetchData from '../../api/Api'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'


const url = "http://localhost:4000/dataSatbuses";

const DetailProduct = () => {
  const location = useLocation();

  const id = location.state?.id;

  const [sats, setSats] = useState([])

  
  useEffect(() => {
    const response = async ()=> {
    const data = await fetchData(url);
    setSats(data);

    }
    response();
  }, [url])


  const sat = sats.filter((satellite) => satellite.id === id);
 

  return (
    <>
    <div className='row bg-back'>
        <Link className='ms-5 ps-5 p-3' to='/satbuses'> ⇇ BACK TO ALL PLATFORMS</Link>
    </div>
    <div className='d-flex justify-content-center '>
      
      {sat.map((s,i)=>(
        <div key={i} className='container  me-0'>
          
          <div className='row'>
            <div className='col mt-5 me-4'>
              <div className='row' >
                <div className='col'>
                  <h2>{s.title}</h2>
                  <p className='space-line'>{s.description}</p>
                </div>
              </div>

              
              {s.technicalDescription.map((td)=>(
                
                <div className="accordion mt-5" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    MICROSATELLITE GENERAL FEATURES:
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body cont-li-product">
                      {td.generalFeatures}
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    SPECIFICATIONS:
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body cont-li-product">
                      {td.specifications}
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    PAYLOAD CONTROLLER 2.0 (DEFAULT):
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body cont-li-product">
                      {td.controller2_0}
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    PAYLOAD CONTROLLER 1.5 (OPTIONAL):
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body cont-li-product">
                      {td.controller1_5}
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    POWER SYSTEM:
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body cont-li-product">
                      {td.powerSystem}
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    FLIGHT COMPUTER (INCLUDING ADCS FUNCTIONALITY):
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div className="accordion-body cont-li-product">
                      {td.flightComputer}
                    </div>
                  </div>
                </div>
              </div>
            
              ))}
            </div>
            
            
            <div className='cont-img-product col p-5'>
              <div id="carouselExampleInterval" className="carousel carousel-dark  slide" data-bs-ride="carousel">
                <div className="carousel-inner">
              {s.carousel.map((c)=>(
                  <div className="carousel-item active" data-bs-interval="5000">
                    <img src={c} className="d-block w-100 img-carousel" />
                  </div>
                  
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              
              <div>
                <Link to="/contact" className='sign_btn mt-5 top-contact'>Contact</Link>
              </div>
            </div>
          </div>
        </div>
        
      ))}
    </div>
    <Footer />
    </>
  )
}

export default DetailProduct