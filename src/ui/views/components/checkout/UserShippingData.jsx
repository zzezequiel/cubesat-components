import React, { useReducer } from 'react'




const reducer = (userData, action) => {
    switch (action.type) {
      case 'CH_NAME': {
        return {
          ...userData,
          name: action.value
        }
      }
      case 'CH_LASTNAME': {
        return {
          ...userData,
          lastName: action.value
        }
      }
      case 'CH_EMAIL': {
        return {
          ...userData,
          email: action.value
        }
      }
      case 'CH_PASSWORD': {
        return {
          ...userData,
          password: action.value
        }
      }
      case 'CH_ADDRESS': {
        return {
          ...userData,
          address: action.value
        }
      }
      case 'CH_POSTALCODE': {
        return {
          ...userData,
          postalCode: action.value
        }
      }
      case 'CH_TEL': {
        return {
          ...userData,
          tel: action.value
        }
      }
      default:{
        return ""
      }
    }
   
  }


const UserShippingData = () => {

    const init = () => {
        const userData = JSON.parse(sessionStorage.getItem('userSession'));
        return userData
    }

const [userData, dispatch] = useReducer(reducer, {}, init)
  return (
    <div className='container me-5 mt-4'>
        <div className='col-sm-8 '>
            <h3>Shipping data</h3>
        <input 
            type="text"
            className='form-control mt-4'
            name='name'
            value={userData.name}
            placeholder='Your lastname'
            onChange={(event)=>{ dispatch({type: 'CH_NAME', value: event.target.value})}}
            />
        <input 
            type="text"
            className='form-control mt-4'
            name='lastName'
            value={userData.lastName}
            placeholder='Your lastname'
            onChange={(event)=>{ dispatch({type: 'CH_LASTNAME', value: event.target.value})}}
            />
            <input 
            type="email"
            className='form-control mt-4'
            name='email'
            value={userData.email}
            placeholder='Your email'
            onChange={(event)=>{ dispatch({type: 'CH_EMAIL', value: event.target.value})}}
            />
            <input 
            type="number"
            className='form-control mt-4'
            name='tel'
            value={userData.tel}
            placeholder='Your TEL'
            onChange={(event)=>{ dispatch({type: 'CH_TEL', value: event.target.value})}}
            />
            <input 
            type="text"
            className='form-control mt-4'
            name='address'
            value={userData.address}
            placeholder='Your address'
            onChange={(event)=>{ dispatch({type: 'CH_ADDRESS', value: event.target.value})}}
            />
            <input 
            type="text"
            className='form-control mt-4'
            name='postalCode'
            value={userData.postalCode}
            placeholder='Your postal code'
            onChange={(event)=>{ dispatch({type: 'CH_POSTALCODE', value: event.target.value})}}
            />
            
        </div>
    </div>
  )
}

export default UserShippingData