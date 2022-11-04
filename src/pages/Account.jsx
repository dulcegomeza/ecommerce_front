import { useState } from 'react';
import Swal from 'sweetalert2'
import { signupService } from '../services/userService';
import { useNavigate }  from 'react-router-dom';

function Account() {

const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    name: '',
    lastName: '',
    email: '',
    password: ''
  });


  const handleInputChange = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    });
  }

  async function createUser(event) {
    event.preventDefault();

    try {
      const user = await signupService(formulario);
      console.log(user);
      //antes se usaba el history.push('/ruta') antes de la version 6 de react-router-dom
      navigate("/login");
    } catch(err) {
      console.log(err.response.data);
      Swal.fire(
        'Mensaje',
        err.response.data.errors[0].msg,
        'error'
      )
    }

    /*
    const url = `${process.env.REACT_APP_API_URL}/users`;
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
      .catch(err => console.log(err))
*/

  }

  return (

    <main className="form-signin w-100 m-auto">
      <form onSubmit={createUser}>
        <h3 className="mt-6 mb-4 display-5 text-center">Registrarse</h3>
        <div className="form-floating mb-4">
          <input type="text" className="form-control" id="floatingName" name="name" placeholder="Nombre" value={formulario.name} onChange={handleInputChange} />
          <label htmlFor="floatingName">Nombre</label>
        </div>
        <div className="form-floating mb-4">
          <input type="text" className="form-control" id="floatingLastName" name="lastName" placeholder="Apellido" value={formulario.lastName} onChange={handleInputChange} />
          <label htmlFor="floatingLastName">Apellido</label>
        </div>
        <div className="form-floating mb-4">
          <input type="text" className="form-control" id="floatingEmail" name="email" placeholder="name@example.com" value={formulario.email} onChange={handleInputChange} />
          <label htmlFor="floatingEmail">Email address</label>
        </div>
        <div className="form-floating  mb-4">
          <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" value={formulario.password} onChange={handleInputChange} />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-blanck-form" type="submit">Unirse</button>
      </form>
    </main>


  )
}

export default Account
