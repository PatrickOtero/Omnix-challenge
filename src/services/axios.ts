import axios from "axios"

const serverUrl = "https://viacep.com.br/ws"

export const api = axios.create({ 
    baseURL: serverUrl,
});