import React, { useState, useEffect, useReducer } from 'react'
import logo from "../../img/satellite-svgrepo-com.svg"
import Footer from '../components/footer/Footer';
import fetchUserSession from '../utils/session/session'


const initialState = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  address: '',
  postalCode: '',
  tel: ''
 
  }
  const reducer = (userSession, user, action) => {
   
    switch (action) {
      case 'CH_USERLOG': {
        return {
          
          name: userSession.name,
          email: userSession.email,
          lastName: userSession.lastName,
          tel: userSession.tel
        }
      }
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
      case 'CH_TEL': {
        return {
          ...user,
          tel: action.value
        }
      }
      case 'CH_ORGANIZATION': {
        return {
          ...user,
          organization: action.value
        }
      }
      case 'CH_MESSAGE': {
        return {
          ...user,
          message: action.value
        }
      }
      case 'CH_NEWSLATTER': {
        return {
          ...user,
          newsLatter: action.value
        }
      }
      case 'CH_MANNAGEDATA': {
        return {
          ...user,
          manngeData: action.value
        }
      }
      default:{
        return initialState
      }
    }
   
  }

const Contact = () => {
  
  const [user, dispatch] = useReducer(reducer, initialState)
  console.log(dispatch)
const [userSession, setUserSession] = useState([])
  useEffect(() => {
    const getUser = async () => {
      const res =  sessionStorage.getItem("userSession")
      const dataSession = JSON.parse(res)
      const sessionaa = await fetchUserSession(dataSession)
        if(sessionaa){
          setUserSession(sessionaa)
           dispatch({type:'CH_USERLOG', value: userSession})}
    }
    getUser()
  }, [])
  
  


  
  
 
  
  
  
  
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
              onChange={(event)=>{ dispatch({type: 'CH_NAME', value: event.target.value})}}

              />
              <input 
              type="text"
              className='form-control mt-4'
              name='lastName'
              
              placeholder='Your lastname'
              onChange={(event)=>{ dispatch({type: 'CH_LASTNAME', value: event.target.value})}}

              />
            </div>
            <input 
            type="text"
            className='form-control mt-4'
            name='organization'
            placeholder='Organization'
            onChange={(event)=>{ dispatch({type: 'CH_ORGANIZATION', value: event.target.value})}}

            />
            <input 
            type="email"
            className='form-control mt-4'
            name='email'
            
            placeholder='Your email'
            onChange={(event)=>{ dispatch({type: 'CH_EMAIL', value: event.target.value})}}

            />
            <input 
            type="num"
            className='form-control mt-4'
            name='tel'
            
            placeholder='Your TEL'
            onChange={(event)=>{ dispatch({type: 'CH_TEL', value: event.target.value})}}

            />
            <input
            type="text"
            className='form-control mt-4 message-contact'
            name='message'
            placeholder='Message'
            onChange={(event)=>{ dispatch({type: 'CH_MESSAGE', value: event.target.value})}}

            />
            <div className='d-flex justify-content-between mt-5 checkbox-block'>
              <input
              type="checkbox"
              className='me-2'
              name='newslatter'
            onChange={(event)=>{ dispatch({type: 'CH_NEWSLATTER', value: event.target.value})}}
              
              />
              <p className='checkbox-contact'>I would like to receive up-to-date information about NanoAvionics products and industry news. No more than two emails per month, you can unsubscribe any time.</p>
            </div>

            <div className='d-flex justify-content-between mt-3 checkbox-block'>
              <input
              type="checkbox"
              className='me-2'
              name='manageData'
              onChange={(event)=>{ dispatch({type: 'CH_MANNAGEDATA', value: event.target.value})}}

              />
              <p className='checkbox-contact'>I understand, that NanoAvionics can store and analyze data entered in this form along with my browsing activities in order to fulfill my request and/or provide an improved user experience.</p>
            </div>
            
            
            <button type='submit' className="top-contact btn p-2 pt-1 px-5 mt-4 ">Submit</button>
          </form>
        </div>
      </div>  
    </div>
    <Footer />
    </>
  );
}



export default Contact