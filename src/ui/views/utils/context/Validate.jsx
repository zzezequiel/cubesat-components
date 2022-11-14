import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react'

import fetchData from '../../../../api/Api'

const url = "http://localhost:4000/users";

const Validate = (user) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const response = async ()=> {
        const data = await fetchData(url);
        setUsers(data);
      
        }
        response();
      }, [url])
    
      
      
      
      const valid = () => {
        if(user){
            const validation =  users.find(
                user === users.email
            )
            if(validation){
                console.log('im validating')
            }else{
                console.log('im not validating')
            }
        }
        
      }

   
      
     return (

        <button type='submit' className="top-contact btn p-2 pt-1 px-5 mt-4 " onClick={valid}>Log in</button>

     ) 
}

export default Validate