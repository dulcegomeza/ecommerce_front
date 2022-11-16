import { useContext, useEffect } from 'react';
import ProductContext from '../../context/ProductContext';
import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  const { getProduct, product, addProduct } = useContext(ProductContext);

  const handleAddProductCar = () => {
    addProduct(product);
  };

  useEffect(() => {
    getProduct(id);
  }, [id, getProduct]);

  return (
    <>
    <div className='container'>
      <div className="card mb-3 mt-5">
        <div className="row g-0">
          <div className="col-md-4">
            
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <h5 className="card-text"><small className="text-muted">${product.price} mxn.</small></h5>
              <button
                type="button"
                className="btn btn-warning"
                onClick={handleAddProductCar}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Product