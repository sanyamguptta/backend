// file for communicating frontend with the backend -> API LAYER
import axios from "axios";

// creating instance of the axios
const api = axios.create({
    baseURL: 'http://localhost:3000/api/auth',
    // for reading tokens which is under cookies
    withCredentials: true,
})

export async function register(username, email, password) {
    // calling register api
    const response = await api.post('/register', {
        username, 
        email, 
        password
    })

    return response;
}

export async function login(username, password) {
    // calling login api
    const response = await api.post('/login', {
        username, 
        password
    })

    return response;
}

export async function getMe() {
    //calling get-me api
    const response = await api.get('/get-me');
    return response
}