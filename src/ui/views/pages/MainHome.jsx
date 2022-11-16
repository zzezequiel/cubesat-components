import '../../styles/Home.css';

import React from 'react'
import icon1 from "../../img/code-working-sharp.svg"
import icon2 from "../../img/web-svgrepo-com.svg"
import conect from "../../img/conect.jpg"
import logo from "../../img/satellite-svgrepo-com.svg"
import { Link} from 'react-router-dom'
import BannerHome from '../components/home/banner/BannerHome'

const MainHome = () => {
  return (
    <>
  
    <main className='backgorundHome'>
    
      <div className='container mt-5'>
        <div className='row mb-5'>
          <div className='col'>
          <BannerHome />
          </div>
          <div className='col text-center mt-5'>
            <h1 className='mb-4'>ZZAT</h1>
            <h2>Global IoT connectivity to monitor assets through our satellites and nodes</h2>
            <h2>Enjoy low-power global IoT Connectivity, to monitor assets remotely</h2>
          </div>
        </div>
        
        <div className='row mt-5'>
          <div className='col'>
            <div className='container mt-5'>
              <div className='row'>
                <div className='col text-center'>
                  <h2>Specials</h2>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='row'>
                   <img src={icon1} width="60px" height="60px"/>
                  </div>
                  <div className='row text-center mt-3'>
                    <h3><b>Bidirectional</b></h3>
                    <p>communication that allows obtaining data from the asset and communicating with it</p>
                  </div>
                </div>

                <div className='col'>
                  <div className='row'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="fff" className="bi bi-currency-exchange" viewBox="0 0 16 16">
                      <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
                    </svg>
                  </div>
                  <div className='row text-center mt-3'>
                    <h3><b>Low-Cost</b></h3>
                    <p> The cheapest IoT connectivity offered so far</p>
                  </div>
                </div>

                <div className='col'>
                  <div className='row text-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="fff" className="bi bi-battery-charging" viewBox="0 0 16 16">
                      <path d="M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z"/>
                      <path d="M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
                      <path d="M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2V6zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.405z"/>
                      <path d="M12 10h-1.783l1.542-1.639c.097-.103.178-.218.241-.34V10zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646zM16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
                    </svg>
                  </div>
                  <div className='row text-center mt-3'>
                    <h3><b>Low consumption</b></h3>
                    <p>The low consumption of our connectivity extends the useful life of the sensors</p>
                  </div>
                </div>

                <div className='col'>
                  <div className='row'>
                  <img src={icon2} width="60px" height="60px"/>

                  </div>
                  <div className='row text-center mt-3'>
                    <h3><b>Backwards Compatibility</b></h3>
                    <p>Simple integration with LoRa and/or existing terrestrial network</p>
                  </div>
                </div>
              </div>

              
              
            </div>
          </div>
        </div>
      </div>

      <div className='home-bg mt-5'>
          <div className='container'>
          
          
          <div className='row  row-img '>
          <h2 className='title-conect'>How does our connectivity work?</h2>

            <img  className='img-conect ' src={conect}></img>
          </div>
            <div className='row text-white mt-5 pb-5'>
              <div className='col text-center'><p>The distributed sensors, collect, and encrypt the data with Link private key that only the client knows.</p></div>
              <div className='col text-center'><p>This encrypted data is sent to the satellite, where it is received and routed automatically to the ground station.</p></div>
              <div className='col text-center'><p>The ground station receives the data, safe and encrypted,and sends it to the network server.</p></div>
              <div className='col text-center'><p>The network server, with Link private key, can decrypt the content and show the data for analysis.</p></div>
            </div>
          </div>
      </div>
      <div className='bg-buy pt-5'>
          <div className='container pb-5 pt-5'>
            <div className='row '>
              <div className='col text-center '>
                <h2 className='text-white'>Build your own satellite constellation</h2> 
              </div>
            </div>
            <div className='row'>
              <div className='col text-center mt-5'>
              <div><h3 className='text-white'>Satellites Buses</h3></div>
                <Link to='/satbuses' ><button type="button" class="btn btn-outline-warning">Cubesat ZZ</button></Link>
              </div>
              <div className='col text-center mt-5'>
                <div><h3 className='text-white'>Satellite components</h3></div>
                <Link to='/subsystems' ><button type="button" class="btn btn-outline-warning">Subsystems</button></Link>

              </div>
            </div>
          </div>
      </div>
      




      <div className='bg-footer '>
        <div className="container  ">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  ">
            <p className="col-md-4 mb-0 text-white mt-5">Cubesat ZZ</p>

            <Link to="index.html" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto mt-5">
            <img src={logo} height="85px" alt="#" />
            </Link>

            <ul className="nav col-md-4 justify-content-end mt-5">
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
              <li className="nav-item"><Link to="#" className="nav-link px-2 text-white">Features</Link></li>
              <li className="nav-item"><Link to="#" className="nav-link px-2 text-white">Pricing</Link></li>
              <li className="nav-item"><Link to="#" className="nav-link px-2 text-white">FAQs</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
            </ul>
          </footer>
        </div>
      </div>
      

    </main>
    

    </>
  )
}

export default MainHome