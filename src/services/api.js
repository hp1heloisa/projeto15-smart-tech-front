import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

//função para criar a configuração com o token, facilita
function createConfig(token){
    return {headers: { Authorization: `Bearer ${token}` }};
}

function getProductById(bory){
    const promise = axios.get(`${URL}/produtos/${bory.id}`);
    return promise;
}




const api = {
    getProductById
};

export default api;
