import React, { useReducer, useContext } from 'react'
import logo from "../../../img/satellite-svgrepo-com.svg"


import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../../auth/context';



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

    const {login, close} = useContext(AuthContext);

    const handleSubmit = (event) => {
      event.preventDefault();
      login(user);
          if(close == true){
            console.log('true???');
            <Navigate to="/" />
          } else if (close === false){
              
          const errorMessage = document.getElementById('errorMessage');
          errorMessage.className = "text-danger";

          setTimeout(() => {
          errorMessage.className = "d-none";
              
          }, 2000);
          }
    }
    

      //must add a var that get the current url
    
    const validationClose = close? "modal" : ""   
    
 
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col text-center'>
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
            <input type='submit' className="top-contact btn p-2 pt-1 px-5 mt-4 " data-bs-dismiss={validationClose} value='log in '/>
        
            
          </form>
          <div id='errorMessage' className='d-none' >login incorrecto</div>
        </div>
      </div>  
    </div>
  )
  
}

export default FormLogin