import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Card from "./Card"


function Home() {

    const { token } =useContext(UserContext);
    console.log(token);
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
              <button className="btn btn-black">Comprar</button>
            </div>
          </div>
        </div>
      </div>
      <Card></Card>
    </>
  )
}

export default Home
