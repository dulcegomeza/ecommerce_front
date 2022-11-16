
import { useReducer, useCallback } from 'react';
import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';
import { getProductsService, getProductByIdService } from '../services/productService';
import { types } from '../types/types';


const initialState = {
  products: [],
  total:0,
  product: {
  },
  cart: [],
};

function ProductProvider({ children }) {
  const [globalState, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = useCallback(
    async () => {
      try {
        const resp = await getProductsService();

        console.log(resp);
        const products = resp.products.map((obj) => {
        
          return {
            uid: obj._id,
            name: obj.name,
            description: obj.description,
            imgsUrl: obj.imgsUrl,
            price: obj.price,
            discount: obj.discount,
            discount_percentage: obj.discount_percentage,
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
      } catch (err) {
        console.log(err);
      }
    },
    [],
  );


  const getProduct = useCallback(async (uid) => {
    const res = await getProductByIdService(uid);
    const product = {
      uid: res.data.uid,
      name: res.data.name,
      description: res.data.description,
      imgsUrl: res.data.imgsUrl,
      price: res.data.price,
      discount: res.data.discount,
      discount_percentage: res.data.discount_percentage,
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
      discount_percentage: res.discount_percentage,
    };

    const findProduct = globalState.cart.find((product) => {
      return product.uid === product.uid
    })

    console.log(findProduct);

    if (!findProduct) {
      console.log('entra');

      dispatch({
        type: types.ADD_PRODUCT,
        payload: product,
      });

    }
  };

  const deleteProduct = (uid) => {
    dispatch({
      type: types.DELETE_PRODUCT,
      payload: uid,
    })
  }

  const emptyCar = (cart) =>{
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
        getProducts,
        getProduct,
        product: globalState.product,
        addProduct,
        cart: globalState.cart,
        deleteProduct,
        emptyCar
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider