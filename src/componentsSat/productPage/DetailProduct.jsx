import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import fetchData from '../../api/Api'
import { Link } from 'react-router-dom'

const url = "http://localhost:3000/dataSatbuses";

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
  console.log(sat)
  return (
    <div className='mt-3'>
      <div className='row bg-back'>
        <Link className=' ps-5' to='/satbuses'> ⇇ BACK TO ALL PLATFORMS</Link>
      </div>
      {sat.map((s,i)=>(
        <div className='container mt-5' key={i}>
          <img src={s.img} alt='sat' />
          <h2>{s.title}</h2>
          <p>{s.description}</p>
          
        </div>
      ))}
    </div>
  )
}

export default DetailProduct