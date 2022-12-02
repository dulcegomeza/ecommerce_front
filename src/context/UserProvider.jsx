import { useState, useCallback } from 'react';
import { UserContext } from "./UserContext"
import { verifyingTokenService } from "../services/userService";


const intialState = {
  uid: null,
  name: null
};

export const UserProvider = ({ children }) => {


  const [user, setUser] = useState(intialState);

  const login = (data) => {

    setUser({
      name: data.user.name,
      uid: data.user.uid
    });

    window.localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE, data.token);

  }

  const logout = () => {
    window.localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE);

    setUser({
      id: null,
      name: null
    });
  }


  const verifyingToken = useCallback(
    async () => {

      const token = window.localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE);

      if (token) {
        const data = await verifyingTokenService();
        window.localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE, token);

        setUser({
          name: data.user.name,
          uid: data.user.uid
        });

      } else {
        logout();
      }
    },
    []
  )


  return (
    <UserContext.Provider value={{ user, login, verifyingToken, logout }}>
      {children}
    </UserContext.Provider>
  )
}
