import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import fetchData from '../../../../api/Api'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer';
import Carousel from 'react-bootstrap/Carousel';

const url = "http://localhost:4000/subsystems";

const DetailComponents = () => {
 // const location = useLocation();

  //const id = location.state?.id;

  const [components, setComponents] = useState([])

  const {productId} = useParams();
  useEffect(() => {
    const response = async ()=> {
    const data = await fetchData(url);
    setComponents(data);

    }
    response();
  }, [url])


  const compID = components.filter((satellite) => satellite.id == productId);
 

  return (
    <>
    <div className='row bg-back'>
        <Link className='ms-5 ps-5 p-3' to='/subsystems'> ⇇ BACK TO ALL PLATFORMS</Link>
    </div>
    <div className='d-flex justify-content-center '>
      
      {compID.map((s,i)=>(
        <div key={i} className='container  me-0'>
          
          <div className='row'>
            <div className='col mt-5 me-4'>
              <div className='row' >
                <div className='col'>
                  <h2>{s.title}</h2>
                  <p className='space-line'>{s.description}</p>
                </div>
              </div>

              
            </div>
            
            
            <div className='cont-img-product col p-5'>
            <Carousel>
              {s.carousel.map((c)=>(
                  <Carousel.Item interval={3000}>
                    <img src={c} className="d-block w-100 img-carousel" />
                  </Carousel.Item>
                  ))}
            </Carousel>
              
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

export default DetailComponents