import axios from 'axios';

const api = axios.create({
    baseUrl: "http://localhost:3000/api",
    withCredentials: true
})

export function register({username, email, password}){
    const response = api.post('/register', {username, email, password})
    return response.data
}

export function login({email, password}){
    const response = api.post('/login', {email, password})
    return response.data
}