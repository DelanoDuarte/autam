import axios from "axios";

const headers = new Headers().set("Content-Type", "application/json", "Authorization", 'Bearer ' + localStorage.getItem('token'))

export const ClientAPI = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: headers,
})