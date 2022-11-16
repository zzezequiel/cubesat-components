import React, { useState, useReducer, useEffect } from 'react'
import fetchData from '../../../../api/Api'
import logo from "../../../img/satellite-svgrepo-com.svg"
import {createUser} from '../../utils/fetch/createUser'




const initialState = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  address: '',
  postalCode: '',
  tel: ''
 
  }
  const reducer = (user, action) => {
    switch (action.type) {
      case 'CH_NAME': {
        return {
          ...user,
          name: action.value
        }
      }
      case 'CH_LASTNAME': {
        return {
          ...user,
          lastName: action.value
        }
      }
      case 'CH_EMAIL': {
        return {
          ...user,
          email: action.value
        }
      }
      case 'CH_PASSWORD': {
        return {
          ...user,
          password: action.value
        }
      }
      case 'CH_ADDRESS': {
        return {
          ...user,
          address: action.value
        }
      }
      case 'CH_POSTALCODE': {
        return {
          ...user,
          postalCode: action.value
        }
      }
      case 'CH_TEL': {
        return {
          ...user,
          tel: action.value
        }
      }
      default:{
        return initialState
      }
    }
   
  }

const FromSingIn = () => {

const [user, dispatch] = useReducer(reducer, initialState)
    const handleSubmit = (event) => {
      event.preventDefault();
      
      createUser(user);
    }

    
    
  return (
    <div className='container-xxl'>
      <div className='row d-flex justify-content-center'>
        <div className='col text-center'>
        <img src={logo} height="110px" alt="#" className='mt-5'/>
        <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input 
            type="text"
            className='form-control mt-4'
            name='name'
            value={user.name}
            placeholder='Your name'
            onChange={(event)=>{ dispatch({type: 'CH_NAME', value: event.target.value})}}
            />
            <input 
            type="text"
            className='form-control mt-4'
            name='lastName'
            value={user.lastName}
            placeholder='Your lastname'
            onChange={(event)=>{ dispatch({type: 'CH_LASTNAME', value: event.target.value})}}
            />
            <input 
            type="email"
            className='form-control mt-4'
            name='email'
            value={user.email}
            placeholder='Your email'
            onChange={(event)=>{ dispatch({type: 'CH_EMAIL', value: event.target.value})}}
            />
            <input 
            type="number"
            className='form-control mt-4'
            name='tel'
            value={user.tel}
            placeholder='Your TEL'
            onChange={(event)=>{ dispatch({type: 'CH_TEL', value: event.target.value})}}
            />
            <input 
            type="text"
            className='form-control mt-4'
            name='address'
            value={user.address}
            placeholder='Your address'
            onChange={(event)=>{ dispatch({type: 'CH_ADDRESS', value: event.target.value})}}
            />
            <input 
            type="text"
            className='form-control mt-4'
            name='postalCode'
            value={user.postalCode}
            placeholder='Your postal code'
            onChange={(event)=>{ dispatch({type: 'CH_POSTALCODE', value: event.target.value})}}
            />
            <input 
            type="password"
            className='form-control mt-4'
            name='password'
            value={user.password}
            placeholder="Password"
            onChange={(event)=>{ dispatch({type: 'CH_PASSWORD', value: event.target.value})}}
            />
            <input 
            type="password"
            className='form-control mt-4'
            name='confirm_password'
            placeholder="confirm your password"
            />
            <p></p>
            <button type='submit' className="top-contact btn p-2 pt-1 px-5 mt-4 " data-bs-dismiss="modal">Sign In!</button>
          </form>   
        </div>
      </div>  
    </div>



    
  )
}

export default FromSingIn