import { useContext, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import ProductContext from '../../context/ProductContext';
import './products-styles.css';
import { UserContext } from "../../context/UserContext";

function Products() {

  const { user, verifyingToken } = useContext(UserContext);

  const { products, total, getProducts, addProduct } = useContext(ProductContext);

  useEffect(() => {
    verifyingToken();
}, [verifyingToken]);



  useEffect(() => {
    getProducts();

  }, [getProducts]);


  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h5 className='mb-3'>{total} resultados</h5>
          {
            products.map((product) => (
              <div className="col-md-4 col-sm-6" key={product.uid}>
                <div className="product-grid">
                  <div className="product-image">
                    <NavLink to={`/products/${product.uid}`} className="image">
                      <img alt={product.name} src={product.imgsUrl[0]}></img>
                    </NavLink>
                    {product.discount ? (<span className="product-discount-label">-{product.discount_percentaje}%</span>) : (<div></div>)}
                    {user.uid  ? 
                    <NavLink className="add-to-cart" onClick={()=> addProduct(product.uid)}>Agregar</NavLink> 
                    
                    : (<NavLink to={`/products/${product.uid}`} className="add-to-cart">VER</NavLink>)}
                  </div>
                  <div className="product-content">
                    <h3 className="title"><NavLink to={`/products/${product.uid}`}>{product.name}</NavLink></h3>
                    <div className="price">$ {product.price}  mxn</div>
                  </div>
                </div>
              </div>

            ))}
        </div>


      </div>

    </>
  )
}

export default Products
