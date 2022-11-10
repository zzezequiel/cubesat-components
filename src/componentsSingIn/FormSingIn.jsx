import React, { useState } from 'react'
import logo from "../assets/img/satellite-svgrepo-com.svg"

const FromSingIn = () => {

const [formState, setFormState] = useState({
  username: "Your name",
  lastName: "Your lastname",
  email: "Your email",
  
});

const {username, lastName, email, password , confirm_password} = formState;

const onInputChange = ({target}) => {
const {name, value} = target;
setFormState({
  ...formState,
  [name]: value,
});
}
const errorMessage = validate(email, password, confirm_password);
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-5 text-center'>
        <img src={logo} height="110px" alt="#" className='mt-5'/>
        <h1>Register</h1>
          <form>
            <input 
            type="text"
            className='form-control mt-4'
            name='username'
            placeholder='Your name'
            onChange={onInputChange}
            />
            <input 
            type="text"
            className='form-control mt-4'
            name='lastName'
            placeholder='Your lastname'
            onChange={onInputChange}
            />
            <input 
            type="email"
            className='form-control mt-4'
            name='email'
            placeholder='Your email'
            onChange={onInputChange}
            />
            <input 
            type="number"
            className='form-control mt-4'
            name='tel'
            placeholder='Your TEL'
            onChange={onInputChange}
            />
            <input 
            type="password"
            className='form-control mt-4'
            name='password'
            
            placeholder="Password"
            onChange={onInputChange}
            />
            <input 
            type="password"
            className='form-control mt-4'
            name='confirm_password'
            
            placeholder="confirm your password"

            onChange={onInputChange}
            />
            <p>{errorMessage}</p>
            <button type='submit' className="top-contact btn p-2 pt-1 px-5 mt-4 ">Sign In!</button>
          </form>
        </div>
      </div>  
    </div>
  )
}

const validate = (email, password, confirm_password) => {
  //regular expresions
  if(!email.includes('@')) return 'Wrong email';
  if(password && password.length < 4) return 'Wrong password';
  if(password !== confirm_password) return 'Passwords are diferents';
}


export default FromSingIn