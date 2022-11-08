import { useReducer } from 'react';
import { types } from '../types/types';
import { authReducer } from "./authReducer"
import { UserContext } from "./UserContext"

const MY_AUTH_APP ='MY_AUTH_APP';


const init = () =>{
 const user = JSON.parse(window.localStorage.getItem(MY_AUTH_APP));

 return {
  logged: !!user,
  user:user
 }
}

export const UserProvider = ({ children }) => {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  //const [user, setUser] = useState(window.localStorage.getItem(MY_AUTH_APP) ?? false);

  const login = (user) =>{
    
    const userPayload =   {
      name: user.user.name,
      lastName: user.user.lastName,
      email: user.user.email,
      uid: user.user.uid
    };

    const action = {
      type: types.login, 
      payload: userPayload
    }

    window.localStorage.setItem(MY_AUTH_APP, JSON.stringify( userPayload));
    dispatch(action);
  
 
  }

  const logout = () =>{
     window.localStorage.removeItem(MY_AUTH_APP);
     const action = {  type: types.logout };
     dispatch(action);
    //window.localStorage.clear()
   // setUser(null);
  }

  return (
    <UserContext.Provider value={{user, login, logout}}>
        { children }
    </UserContext.Provider>
  )
}
