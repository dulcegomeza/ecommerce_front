import axios from 'axios';


const URL_PRODUCTS = `${process.env.REACT_APP_API_URL}/products`;


export const getProductsService = async () => {
    const result = await axios.get(`${URL_PRODUCTS}`) 
    console.log(result.data); 
    return result.data;
  };

  export const getProductsPaginadoService = async (data) => {

    const result = await axios.post(`${URL_PRODUCTS}/paginado`, data) 
    console.log(result); 
    return result.data;
  };

  export const getProductByIdService = async(uid)=>{
    console.log(uid);
    const resp = await axios.get(`${URL_PRODUCTS}/${uid}`);
    return resp.data;
}
