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

export const putUserService = async(uid,data)=>{
    axios.defaults.headers.common['x-token'] = JSON.parse(window.localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE)).token;

    const resp = await axios.put(`${URL_USERS}/${uid}`,  data );
    return resp.data;
}

export const getUserService = async(uid)=>{
    axios.defaults.headers.common['x-token'] = JSON.parse(window.localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE)).token;

    const resp = await axios.get(`${URL_USERS}/${uid}`);
    return resp.data;
}

