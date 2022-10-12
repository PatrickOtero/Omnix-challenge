import axios from "axios"

const serverUrl = "http://viacep.com.br/ws"

export const api = axios.create({ 
    baseURL: serverUrl,
});