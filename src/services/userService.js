import axios from 'axios';

const URL_AUTH = `${process.env.REACT_APP_API_URL}/auth`;

const URL_USERS = `${process.env.REACT_APP_API_URL}/users`;

export const loginService = async (data) =>{
    const resp = await axios.post(`${URL_AUTH}/login`, data);
    return resp.data;
}


export const signupService = async (data) =>{
    const resp = await axios.post(URL_USERS, data);
    return resp.data;
}