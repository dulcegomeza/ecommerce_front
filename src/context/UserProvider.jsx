import { useState } from 'react';
import { UserContext } from "./UserContext"

const MY_AUTH_APP ='MY_AUTH_APP';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(window.localStorage.getItem(MY_AUTH_APP) ?? false);

  const loginContext = (token) =>{
    console.log(token.token);
    window.localStorage.setItem(MY_AUTH_APP, token.token);
    setUser(token);
  }

  const logoutContext = () =>{
     window.localStorage.removeItem(MY_AUTH_APP);
    //window.localStorage.clear()
    setUser(null);
  }

  return (
    <UserContext.Provider value={{user, loginContext, logoutContext}}>
        { children }
    </UserContext.Provider>
  )
}
