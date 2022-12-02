
import { useReducer, useCallback } from 'react';
import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';
import { getProductsPaginadoService, getProductByIdService } from '../services/productService';
import { types } from '../types/types';


const initialState = {
  products: [],
  total:0,
  total_pages:0,
  product: {
  },
  cart: [],
};

function ProductProvider({ children }) {
  const [globalState, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = useCallback(
    async (category='', pag=1, limite=9 ) => {
      const data = {
        category:category,
        limite:limite, 
        pag: pag
      }
      
      try {
      
        const resp = await getProductsPaginadoService(data);

        const products = resp.products.map((obj) => {
        
          return {
            uid: obj._id,
            name: obj.name,
            description: obj.description,
            imgsUrl: obj.imgsUrl,
            price: obj.price,
            discount: obj.discount,
            discount_percentaje: obj.discount_percentaje,
          };
        });

        dispatch({
          type: types.GET_PRODUCTS,
          payload: products,
        });

        dispatch({
          type: types.GET_PRODUCTS_TOTAL,
          payload: resp.total,
        });
        
        dispatch({
          type: types.GET_PRODUCTS_TOTAL_PAGES,
          payload: resp.total_pages,
        });
      } catch (err) {
        console.log(err);
      }
    },
    [],
  );


  const getProduct = useCallback(async (uid) => {
    const res = await getProductByIdService(uid);

    const product = {
      uid: res._id,
      name: res.name,
      category: res.category.name,
      description: res.description,
      imgsUrl: res.imgsUrl,
      price: res.price,
      discount: res.discount,
      discount_percentaje: res.discount_percentaje,
    };

    dispatch(
      {
        type: types.GET_PRODUCT,
        payload: product
      }
    );
  }, []);


  const addProduct = async (uid) => {

    const res = await getProductByIdService(uid);
    
    const product = {
      uid: res._id,
      name: res.name,
      description: res.description,
      imgsUrl: res.imgsUrl,
      price: res.price,
      discount: res.discount,
      discount_percentage: res.discount_percentage
    };

    const findProduct = globalState.cart.find((product) => {
      return product.uid === uid
    })

    if (!findProduct) {
      dispatch({
        type: types.ADD_PRODUCT,
        payload: product,
      });
      console.log('producto añadido');
    }else{
      console.log('producto ya se encuentra añadido en el carrito');
    }
  };

  const deleteProduct = (uid) => {
    dispatch({
      type: types.DELETE_PRODUCT,
      payload: uid,
    })
  }

  const emptyCart = (cart) =>{
    dispatch({
      type: types.EMPTY_CAR,
      payload: cart,
    });
    
  }

  return (
    <ProductContext.Provider
      value={{
        products: globalState.products,
        total: globalState.total,
        total_pages: globalState.total_pages,
        getProducts,
        getProduct,
        product: globalState.product,
        addProduct,
        cart: globalState.cart,
        deleteProduct,
        emptyCart
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider