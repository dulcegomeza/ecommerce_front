import { useReducer } from 'react';
import { types } from '../types/types';
import { authReducer } from "./authReducer"
import { UserContext } from "./UserContext"




const init = () =>{
 const user = JSON.parse(window.localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE));

 console.log(user);
 return {
  logged: !!user,
  user
 }
}

export const UserProvider = ({ children }) => {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  //const [user, setUser] = useState(window.localStorage.getItem(MY_AUTH_APP) ?? false);

  const login = (user) =>{
    
    const userPayload =   {
      name: user.user.name,
      uid: user.user.uid,
      token: user.token
    };

    const action = {
      type: types.login, 
      payload: userPayload
    }

    window.localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE, JSON.stringify( userPayload));
    dispatch(action);
  
 
  }

  const logout = () =>{
     window.localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE);
     const action = {  type: types.logout };
     dispatch(action);
    //window.localStorage.clear()
   // setUser(null);
  }

  return (
    <UserContext.Provider value={{...user, login, logout}}>
        { children }
    </UserContext.Provider>
  )
}
