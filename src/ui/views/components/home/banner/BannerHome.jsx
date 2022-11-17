import React from 'react'
import imgSat from "../../../../img/imgsat.jpg"

const BannerHome = () => {
  return (
    <>
    <div className='d-flex justify-content-center'>
        <video 
        src="https://nanoavionics.b-cdn.net/wp-content/uploads/2022/10/LT-GS-Desktop-Kadruote.mp4" 
        type="video/mp4" 
        autoPlay 
        loop
        muted
        width='1900vw'
        />
    </div>
    <div className='title-cont'>
        <h1 className='text-center'>ZZAT</h1>
        <h2 className='description-home'>A complete combination of small satellite technology, mission services, and team experience that offers simplified access to space for organizations around the globe.</h2>
        
    </div>
    </>
  )
}

export default BannerHome