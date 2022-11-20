import { useContext, useEffect } from 'react';
import ProductContext from '../../context/ProductContext';
import { useParams } from 'react-router-dom';
import './product-styles.css';
import { UserContext } from '../../context/UserContext';

function Product() {
  const { id } = useParams();
  const { getProduct, product, addProduct } = useContext(ProductContext);

  const { user, verifyingToken } = useContext(UserContext);

  const handleAddProductCar = () => {
    addProduct(product.uid);
  };

  useEffect(() => {
    getProduct(id);

  }, [id, getProduct]);

  useEffect(() => {
    verifyingToken();

  }, [verifyingToken]);



  const openModal = (e) => {
    const photoSrc = e.target.src;
    const photoModal = document.querySelector('.photo-modal');
    var newImg = document.createElement('img');

    newImg.src = photoSrc;
    photoModal.innerHTML = "";
    photoModal.classList.add("photo-modal--open");
    photoModal.appendChild(newImg);
  }

  const closeModal = () => {
    const photoModal = document.querySelector('.photo-modal');
    photoModal.classList.remove("photo-modal--open");
  }

  return (
    <>

      <div className='container'>


        <div className="card mb-3 mt-5">
          <div className="row g-0">

            <div className="col-md-4">
              {product.imgsUrl ? (

                <img className='img-fluid ocultar' alt={product.name} src={product.imgsUrl[0]}></img>
              ) : (<></>)}

              <div className="photos mt-2">
                <div className="photo-grid">
                  {product.imgsUrl ? (product.imgsUrl.map((photo, index) => (
                    <button onClick={openModal} className="photo-grid__photo js-photoBtn col-md-4 mb-2" key={index}>
                      <img className='img-fluid' src={photo} alt={`${index}`} />
                    </button>
                  ))) : (<></>)}
                </div>

                <div onClick={closeModal} className="photo-modal"></div>
              </div>

            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 >{product.name}</h3>
                <span className="badge text-bg-pink mb-3">{product.category}</span>
                <p className="card-text">{product.description}</p>
                <h4 className="card-text">${product.price} mxn
                  {product.discount ? (<span className='text-pink'> {product.discount_percentaje}% OFF</span>) : (<></>)}
                </h4>
                <p className='text-muted'>IVA incluido</p>
               {user.uid ? <button
                  type="button"
                  className="btn btn-blanck-form"
                  onClick={handleAddProductCar}
                >
                  Agregar al carrito
                </button>:(<></>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product