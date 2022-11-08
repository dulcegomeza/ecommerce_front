import { useState, useContext } from 'react';
import Swal from 'sweetalert2'
import { loginService } from '../services/userService';
import { UserContext } from "../context/UserContext";
import LoadingButton from '../components/LoadingButton';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);

  const [formulario, setFormulario] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    });
  }

  async function loginForm(event) {
    setIsLoading(true);
    event.preventDefault();


    try {
      const user = await loginService(formulario);
      login(user);
      navigate("/products");
    } catch (err) {
      Swal.fire(
        'Mensaje',
        err.response.data.msg,
        'error'
      )
      setIsLoading(false);
    }
  }


  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={loginForm}>
        <h3 className="mt-6 mb-4 display-5 text-center">Inicio de sesión</h3>
        <div className="form-floating mb-4">
          <input type="email" className="form-control" id="floatingInput" name="email" placeholder="name@example.com" value={formulario.email} onChange={handleInputChange} />
          <label htmlFor="floatingInput">Correo</label>
        </div>
        <div className="form-floating  mb-4">
          <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" value={formulario.password} onChange={handleInputChange} />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>
         <LoadingButton isLoading={isLoading} text="Continuar"/>
      </form>
    </main>

  )
}

export default Login
