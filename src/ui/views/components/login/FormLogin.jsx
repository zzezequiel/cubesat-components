import React, { useReducer, useState, useEffect } from 'react'
import logo from "../../../img/satellite-svgrepo-com.svg"


import fetchData from '../../../../api/Api'
import { Link } from 'react-router-dom';

const url = "http://localhost:4000/users";

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
      
    }

  const [users, setUsers] = useState([])

    useEffect(() => {
      const response = async ()=> {
      const data = await fetchData(url);
      setUsers(data);
  
      }
      response();
    }, [url])

    const validation = () => {
     const loged = users.find((u)=>
      {return u.email === user.email && u.password === user.password}
      
      )
    return loged
    }
    const validationLink = validation()? "/" : "/login"  
    
  
   


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
            
        <Link to={validationLink}><button type='submit' className="top-contact btn p-2 pt-1 px-5 mt-4 " onClick={validation}>Log in</button></Link>
            
          </form>
        </div>
      </div>  
    </div>
  )
  
}

export default FormLogin