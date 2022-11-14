import React, { useState, useReducer } from 'react'
import logo from "../../../img/satellite-svgrepo-com.svg"
import Validate from '../../utils/context/Validate';

const initialState = {
email: '',
password: ''
}
const reducer = (user, action) => {
  switch (action.type) {
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
    default:{
      return initialState
    }
  }
  return user;
}


const FormLogin = () => {
    const [user, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(user)
    }

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-5 text-center'>
        <img src={logo} height="110px" alt="#" className='mt-5'/>
        <h1>Access to your account</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email:</label>
            <input 
            type="email"
            className='form-control mt-4'
            name='email'
            value={user.email}
            placeholder='Your email'
            onChange={(event)=>{ dispatch({type: 'CH_EMAIL', value: event.target.value})}}
            required
            />
            
            <label htmlFor='password'>Password:</label>
            <input 
            type="password"
            className='form-control mt-4'
            name='password'
            value={user.password}
            placeholder="Password"
            onChange={(event)=>{ dispatch({type: 'CH_PASSWORD', value: event.target.value})}}
            required
            
            />
            
            <Validate 
            user={user}
            />
          </form>
        </div>
      </div>  
    </div>
  )
  
}

export default FormLogin