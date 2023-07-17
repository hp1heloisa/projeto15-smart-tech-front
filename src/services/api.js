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

function getProducts(){
    const promise = axios.get(`${URL}/`);
    return promise;
}

function conclude(body, token){
    const config = createConfig(token)
    const promise = axios.post(`${URL}/pagamento`, body, config);
    return promise;
}


const api = {
    getProductById, getProducts, conclude
};

export default api;
