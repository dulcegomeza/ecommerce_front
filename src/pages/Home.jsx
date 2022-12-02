/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getCategoriesService } from '../services/categoryService';
import Spinner from 'react-bootstrap/Spinner';

function Home() {


  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getCategories = async () => {

    try {
      const resp = await getCategoriesService();
      setCategories(resp.categories);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }

  }

  useEffect(() => {
    getCategories();
  }, []);



  return (
    <>
      {
        !isLoading ? (
          <div>
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

            <div className="container mb-5 animate__animated animate__fadeIn">
              <div className="row">
                {categories.map((category) => (
                  <Link to={`/products/${category._id}`} key={category._id} className="col-lg-3 col-md-4">
                    <div className="profile-card-2"><img alt={category.name} src={category.imgUrl} className="img img-fluid" />
                      <div className="profile-name">{category.name}</div>

                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
        
        <div className="container text-center">
          <Spinner animation="grow" /></div>)
      }

    </>
  )
}

export default Home
