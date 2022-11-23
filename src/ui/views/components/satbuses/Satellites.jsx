
import React from 'react'
import { useState, useEffect } from 'react'
import { BallTriangle } from 'react-loader-spinner';
import {  useQuery } from 'react-query';
import { Link } from 'react-router-dom'


import {satsBuses} from '../../../../api/Api'


const url = "http://localhost:4000/dataSatbuses";

const Satellites = () => {
const {data: sats, error, isLoading} = useQuery(['sats'], satsBuses)
  // const [sats, setSats] = useState([])
  
  

  
  // useEffect(() => {
  //   const response = async ()=> {
  //   const data = await fetchData(url);
  //   setSats(data);

  //   }
  //   response();
  // }, [url])



  return (
    <>
    {isLoading?
      <div className='d-flex justify-content-center p-5 m-5'> 
         <BallTriangle
            height={200}
            width={200}
            radius={5}
            color="#000"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
      />
      </div>: null
   }
   {error? "Status ERROR in query":null}
    <div className='container mt-5'>
      <div className='row'>
        {sats ? sats.map((buses, i) =>(
            <div className="col-md-4 padding_leri mt-5 mb-4 shadow-sm p-3 mb-5 rounded cont-product cont-all" key={i} >
            <div className="product-box text-center" >
              <figure><img className="product-img" src={buses.img} alt="#"/></figure>
              <h3>{buses.title}</h3>
              <h3>{buses.id}</h3>
              
              <Link to={`/satbuses/${buses.id}`}            
                className='seemore mt-4'>
                  See more
              </Link>
               
            </div>
         </div>
        )): "no buses"}
        </div>
    </div>
    </>
  )
}

export default Satellites