import { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import ProductContext from '../../context/ProductContext';
import './products-styles.css';
import { UserContext } from "../../context/UserContext";
import { useParams } from 'react-router-dom';
import { getCategoriesService } from '../../services/categoryService';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Pagination from 'react-bootstrap/Pagination';

function Products() {
  const { id } = useParams();


  const { user, verifyingToken } = useContext(UserContext);

  const { products, total, total_pages, getProducts, addProduct } = useContext(ProductContext);


  const [categories, setCategories] = useState([]);
  const [idCategory, setIdCategory] = useState('');
  const [limite, setLimite] = useState(9);


  const getCategories = async () => {
    try {
      const resp = await getCategoriesService();
      setCategories(resp.categories);
    } catch (error) {

    }
  }

  useEffect(() => {
    getCategories();
  }, []);


  useEffect(() => {
    verifyingToken();
  }, [verifyingToken]);

  useEffect(() => {
    getProducts(idCategory, 1, limite);
  }, [idCategory, limite, getProducts]);


  const cargar = async (id) => {
    setIdCategory(id);
    getProducts(id, 1, limite);
  }

  let items = [];

  const loadPage = (number) => {
    console.log(number);
    getProducts(id, number, limite);
  }

  for (let number = 1; number <= total_pages; number++) {
    items.push(
      <Pagination.Item onClick={() => loadPage(number)} key={number} >
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row mb-2">


          <ButtonToolbar
            className="justify-content-end mb-4"
            aria-label="Toolbar with Button groups"
          >

            <h5 className='p-2'>{total} resultados</h5>


            <ButtonGroup aria-label="First group">
              <Button onClick={() => setLimite(9)} variant="secondary">9</Button>{' '}
              <Button onClick={() => setLimite(20)} variant="secondary">20</Button>{' '}
              <Button onClick={() => setLimite(50)} variant="secondary">50</Button>{' '}
              <Button onClick={() => setLimite(100)} variant="secondary">100</Button>
            </ButtonGroup>
          </ButtonToolbar>

          <div className="col-md-2">
            <h3>Categorias</h3>
            {categories.map((category) =>
              <button key={category._id} onClick={() => cargar(category._id)} className='col-12 btn btn-pink'>{category.name}</button>
            )}

          </div>
          <div className='col-md-10'>
            <div className='row'>
              {
                products.map((product) => (
                  <div className="col-md-4 col-sm-6 mb-2" key={product.uid}>
                    <div className="product-grid">
                      <div className="product-image">
                        <NavLink to={`/product/${product.uid}`} className="image">
                          <img alt={product.name} src={product.imgsUrl[0]}></img>
                        </NavLink>
                        {product.discount ? (<span className="product-discount-label">-{product.discount_percentaje}%</span>) : (<div></div>)}
                        {user.uid ?
                          <NavLink className="add-to-cart" onClick={() => addProduct(product.uid)}>Agregar</NavLink>

                          : (<NavLink to={`/product/${product.uid}`} className="add-to-cart">VER</NavLink>)}
                      </div>
                      <div className="product-content">
                        <h3 className="title"><NavLink to={`/product/${product.uid}`}>{product.name}</NavLink></h3>
                        <div className="price">$ {product.price}  mxn</div>
                      </div>
                    </div>
                  </div>

                ))}
            </div>
          </div>

      

              <Pagination className='justify-content-center'>{items}</Pagination>
       

        </div>


      </div>

    </>
  )
}

export default Products
