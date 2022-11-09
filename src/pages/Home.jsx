import { NavLink } from 'react-router-dom';

function Home() {

  return (
    <>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">

              <h1 className="display-1 text-uppercase 
                     text-white mb-2">OTOÑO &</h1>
              <h1 className="display-1 text-uppercase 
                     text-white">INVIERNO</h1>

              <NavLink to="/products" className="btn btn-black">Comprar</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div >
        <h1 className="text-center" >
          <span className="font-text">
            TODO EL AÑO
          </span>
        </h1>
      </div>
      <div>
        <h5 className="text-center" >
          <span className="font-subtext">Los infaltables</span>
        </h5>
      </div>


    </>
  )
}

export default Home
