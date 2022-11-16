import { useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from "../context/UserContext";

function Navbar() {

    const { user, logout } = useContext(UserContext);

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

    return (

        <header className="fondo d-flex flex-wrap align-items-center justify-content-center">
            <ul className="nav col-12 col-md-auto justify-content-center ">
                <li><NavLink to="/home" className="nav-item mr-4 ml-4 text-white"> D U L C E ´</NavLink></li>
                <li ><NavLink to="/home" className="nav-link   mr-4 ml-4 text-white">Home</NavLink></li>
                <li><NavLink to="/prducts" className="nav-link   mr-4 ml-4 text-white">Productos</NavLink></li>
                <li><NavLink to="/profile" className="nav-link  mr-4 ml-4 text-white">Perfil</NavLink></li>
            </ul>
            <ul className="nav col-3 justify-content-end">
                <span className="nav-item mr-4 ml-4 text-white">
                    {user?.name}
                </span>
                <button
                    className="nav-item  btn btn-blanck-form"
                    onClick={onLogout}
                >
                    Logout
                </button>
            </ul>
        </header>
    )
}

export default Navbar