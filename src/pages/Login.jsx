import { useState, useContext } from 'react';
import Swal from 'sweetalert2'
import { loginService } from '../services/userService';
import { UserContext } from "../context/UserContext";

function Login() {
  const { loginContext } =useContext(UserContext);

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

  async function login(event) {
    event.preventDefault();
 
    try {
      const user = await loginService(formulario);
      console.log(user);
      loginContext(user);

    } catch(err) {
      console.log(err.response.data);

      Swal.fire(
        'Mensaje',
        err.response.data.msg,
        'error'
      )
    }

   /* const url = `${process.env.REACT_APP_API_URL}/login`;

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formulario)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        if (data.errors) {
          console.log(data.errors);
          Swal.fire(
            'Mensaje',
            data.errors[0].msg,
            'error'
          )
        }
      })
      .catch(err => console.log(err))*/
  }


    return (
      <main className="form-signin w-100 m-auto">
      <form onSubmit={login}>
        <h3 className="mt-6 mb-4 display-5 text-center">Inicio de sesión</h3>
        <div className="form-floating mb-4">
          <input type="email" className="form-control" id="floatingInput" name="email" placeholder="name@example.com" value={formulario.email} onChange={handleInputChange}/>
          <label htmlFor="floatingInput">Correo</label>
        </div>
        <div className="form-floating  mb-4">
          <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password"  value={formulario.password} onChange={handleInputChange}/>
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>
        <button className="w-100 btn btn-lg btn-blanck-form" type="submit">Continuar</button>
      </form>
    </main>

    )
  }
  
  export default Login
  