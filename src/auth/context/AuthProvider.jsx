import { useEffect, useReducer, useState } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';
import validation from './Validation'
import fetchData from '../../api/Api'

const url = "http://localhost:4000/users";


export const AuthProvider = ({ children }) => {
  

  const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
      isLogged: !!user,
      user,
    };
  };

  const [authState, dispatch] = useReducer(AuthReducer, {}, init);

  const [users, setUsers] = useState([])

    useEffect(() => {
      const response = async ()=> {
      const data = await fetchData(url);
      setUsers(data);
      }
      response();
    }, [url])

    const [close, setClose] = useState(false)

  const login =  (user) => {
   if(user){
        const loged =  users.find((u) =>
            {return u.email === user.email && u.password === user.password}
            )
            console.log(loged)
        if(loged){
            sessionStorage.setItem("userSession", JSON.stringify(user.email));
            dispatch({
                type: types.login,
                payload: user,
            });
            
            setClose(true)
        }else{
            setClose(false)
        }  
    }
   
  };

  const logout = () => {
    sessionStorage.removeItem('userSession');

    dispatch({
      type: types.logout,
    });
    window.location.reload(true);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        close,
        login: login,
        logout: logout,

      }}
    >
      {children}
    </AuthContext.Provider>
  );
};