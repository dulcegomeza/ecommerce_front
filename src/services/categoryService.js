import axios from "axios";


const URL_CATEGORIES = `${process.env.REACT_APP_API_URL}/categories`;



export const getCategoriesService = async () => {
    const result = await axios.get(`${URL_CATEGORIES}`) 
    console.log(result.data); 
    return result.data;
  };
