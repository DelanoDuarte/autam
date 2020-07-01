import axios from "axios";

export const ClientAPI = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})