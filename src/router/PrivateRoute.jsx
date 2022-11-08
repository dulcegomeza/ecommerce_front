import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const  PrivateRoute = ({ children }) => {
  
  
  const { logged } =useContext(UserContext);

  return (logged)
  ? children
  : <Navigate to="/login"/>
}
