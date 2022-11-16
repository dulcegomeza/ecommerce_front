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

      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="profile-card-2"><img alt="Vestidos" src="https://static.wixstatic.com/media/cda177_b8e4143c21af45d8a59c2de1d80f14ca.png/v1/fill/w_500,h_500,al_c,q_90,usm_0.66_1.00_0.01/cda177_b8e4143c21af45d8a59c2de1d80f14ca.webp" className="img img-fluid" />
              <div className="profile-name">Vestidos</div>
             
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="profile-card-2"><img alt="Conjuntos" src="https://static.wixstatic.com/media/cda177_1c16f70e659f4d0d9f48b5d2f4f211f2.png/v1/fill/w_500,h_500,al_c,q_90,usm_0.66_1.00_0.01/cda177_1c16f70e659f4d0d9f48b5d2f4f211f2.webp" className="img img-fluid" />
              <div className="profile-name">Accesorios</div>
            
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="profile-card-2"><img alt="Bolsas" src="https://static.wixstatic.com/media/cda177_95cd2230351d454e8fd76b7545766138.png/v1/fill/w_500,h_500,al_c,q_90,usm_0.66_1.00_0.01/cda177_95cd2230351d454e8fd76b7545766138.webp" className="img img-fluid" />
              <div className="profile-name">Abrigos</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="profile-card-2"><img alt="Bolsas" src="https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_500,h_500,al_c,q_90,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.webp" className="img img-fluid" />
              <div className="profile-name">Conjuntos</div>
            </div>
          </div>
     
        </div>
      </div>



    </>
  )
}

export default Home
