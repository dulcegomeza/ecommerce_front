import  {useState, useContext, useEffect} from "react";
import ProductContext from "../../context/ProductContext";
import CartList from "../../components/CartList";
import PaypalCheckoutButton from "../../components/PaypalCheckoutButton";



function Cart() {
    const { cart } = useContext ( ProductContext )

    const [total, setTotal] = useState(0);
  
    useEffect(() => {
        setTotal( cart.reduce((acumulador, product)=> 
            acumulador + product.price,0
        ))
      }, [cart])

  
  return (
  <>
   <section className="h-100 mt-4" style={{backgroundColor: '#eee', borderRadius: '8px'}}>
        <div className="container py-2 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-7">
                    {cart.length > 0 ? (
                      <>
                        <CartList />
                      </>
                    ) : (
                      <section className="text-center">
                        <h3>¡No tienes productos aun en tu carrito!</h3>
                      </section>
                    )
                    }
                    </div>
                    <div className="col-lg-5 mx-auto mt-auto mb-auto">
                      {cart.length > 0 ? (
                          <>
                              <section className="row mb-5">
                                <article className="col-md-12 text-center">
                                  <h2>Total a pagar: ${total} mxn </h2>
                                </article>
                              </section>
                              <section className="row">
                                <article className="col">
                                  <PaypalCheckoutButton  currency={"MXN"}
                                    amount={total}
                                    showSpinner={false}/>
                                </article>
                              </section>
                          </>
                        ) : (                            
                              <section className="text-center">
                                  <article>
                                    <h2> ${total} mxn </h2>
                                  </article>
                              </section>)}
                    </div>

                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section>

  </>

  )
}

export default Cart
