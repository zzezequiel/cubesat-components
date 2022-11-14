import React, { useState } from 'react'
import logo from "../../img/satellite-svgrepo-com.svg"
import Footer from '../components/footer/Footer';




const Contact = () => {

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
    <>
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-5 text-center'>
        <img src={logo} height="110px" alt="logo" className='mt-5'/>
        <h1>Contact</h1>
          <form>
            <div className='d-flex justify-content-between'>
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
            </div>
            <input 
            type="text"
            className='form-control mt-4'
            name='organization'
            placeholder='Organization'
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
            type="num"
            className='form-control mt-4'
            name='tel'
            placeholder='Your TEL'
            onChange={onInputChange}
            />
            <input
            type="text"
            className='form-control mt-4 message-contact'
            name='message'
            placeholder='Message'
            onChange={onInputChange}
            />
            <div className='d-flex justify-content-between mt-5 checkbox-block'>
              <input
              type="checkbox"
              className='me-2'
              name='newslatter'
              onChange={onInputChange}
              />
              <p className='checkbox-contact'>I would like to receive up-to-date information about NanoAvionics products and industry news. No more than two emails per month, you can unsubscribe any time.</p>
            </div>

            <div className='d-flex justify-content-between mt-3 checkbox-block'>
              <input
              type="checkbox"
              className='me-2'
              name='manageData'
              onChange={onInputChange}
              />
              <p className='checkbox-contact'>I understand, that NanoAvionics can store and analyze data entered in this form along with my browsing activities in order to fulfill my request and/or provide an improved user experience.</p>
            </div>
            
            
            <p className='mt-4'>{errorMessage}</p>
            <button type='submit' className="top-contact btn p-2 pt-1 px-5 mt-4 ">Submit</button>
          </form>
        </div>
      </div>  
    </div>
    <Footer />
    </>
  );
}

const validate = (email, password, confirm_password) => {
  //regular expresions
  if(!email.includes('@')) return 'Wrong email';
  if(password && password.length < 4) return 'Wrong password';
  if(password !== confirm_password) return 'Passwords are diferents';
}

export default Contact