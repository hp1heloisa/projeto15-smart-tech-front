import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ProductCard(props) {

    const { product } = props;
    const navigate = useNavigate();

    function toProduct (){
        navigate(`/produtos/${product._id}`);
    }
    function addCart(e){
        e.stopPropagation();
        const data = JSON.parse(localStorage.getItem("dataSmartTech"));
        if (data){
            console.log("Adicionar ao carrinho");
            axios.put(`${import.meta.env.VITE_API_URL}/addproduto`, {idProduct: product._id},  {headers: {Authorization: `Bearer ${data.token}`}})
                 .then(res => alert('Produto adicionado ao carrinho!'))
                 .catch(err => alert(err.response.data));
        } else{
            alert('Faça seu login para adicionar o produto ao carrinho!');
            navigate('/login');            
        }
    }

    return (
        <ProductItem onClick={toProduct}>
            <img src={product.image} alt="product" />
            <h1>{product.name}</h1>
            <h2>{product.value}</h2>
            <ButtonCart onClick={addCart}>
                <ion-icon name="cart"></ion-icon>
            </ButtonCart>
        </ProductItem>
    )
}

const ProductItem = styled.div`
    background-color: #ffffff;
    height: 500px;
    width: 300px;
    padding: 20px;
    padding-left: 30px;
    border-radius: 15px;
    box-shadow: 3px 5px 5px #a7a7a7;
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    img{
        width: 200px;
        height: 250px;
        margin-bottom: 20px;
        border-radius: 15px;
        align-items: center;
    }h1{
        font-family: "Poppins";
        font-size: 18px;
        font-weight: 500;
        font-weight: bold;
        letter-spacing: 2px;
        color: #ff9100;
        margin-bottom: 20px;
        :hover{
            text-decoration: underline;
        }
    }h2{
        letter-spacing: 2px;
        font-size: 20px;
        color: #757373;
        font-weight: bold;
        margin-bottom: 24px;
        position: absolute;
        bottom:80px;
        :hover{
            text-decoration: underline;
        }
    }
`
const ButtonCart = styled.button`
    background-color: #fda42f;
    width: 238px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items:center;
    position: absolute;
    bottom:25px;
    ion-icon{
        width: 60px;
        height: 60px;
    }

`