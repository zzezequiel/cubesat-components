import { useReducer, useState } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';
import { usersFetch } from '../../api/Api'
import { useQuery } from 'react-query';



export const AuthProvider = ({ children }) => {
  

  const init = () => {
    const user = JSON.parse(sessionStorage.getItem('userSession'));
    return {
      isLogged: !!user,
      user,
    };
  };

  const [authState, dispatch] = useReducer(AuthReducer, {}, init);

  const {data: users} = useQuery(['users'], usersFetch)
 

    const [close, setClose] = useState(false)

    const login =  (user) => {
    if(user){
          const logged =  users.find((u) =>

              {if(u.email === user.email && u.password === user.password){
                return u;
              }}

              )
              
          if(logged){
            
              setClose(true)
            
              sessionStorage.setItem("userSession", JSON.stringify(logged));
              dispatch({
                  type: types.login,
                  payload: user,
              });
              
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