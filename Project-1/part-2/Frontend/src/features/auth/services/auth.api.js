// for all code related to the authetication in backend

// this file is used for communicating frontend with the backend, wwe use axios
import axios from 'axios';

// creating axios instance -> this makes code non repeatable
const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

// api for registeration 
export async function register(username, email, password) {

    try {
        const response = await api.post('/register', {
            username, 
            email,
            password
        })

        return response
    }
    catch(err) {
        throw err
    }
    // const response = await api.post('/register', {
    //     username, 
    //     email, 
    //     password
    // })

    // return response;
}

// api for login
export async function login(username, password) {
    
    // handling api call under try and catch
    try {
        const response = await api.post('/login', {
            username,
            password
        })

        return response.data
    }
    catch(err) {
        throw err
    }
    // const response = await api.post('/login', {
    //     username, 
    //     password
    // })

    // return response;
}

// api for getting info of specific user
export async function getMe() {
    try {
        const response = await api.get('/get-me');
        return response.data;
    }
    catch(err) {
        throw err
    }
    // const response = await api.post('/get-me', {
    //     return response
    // })
}
