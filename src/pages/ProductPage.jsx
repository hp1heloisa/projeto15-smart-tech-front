import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components"
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import api from "../services/api";


export default function ProductPage() {
    const { idProduto } = useParams();

    const [product, setProduct] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        // 64b0b53530626c3593e1566a
        const promise = api.getProductById({id: idProduto});
        promise.then(res => {
            setProduct(res.data);
        });
        promise.catch(err => {
            console.log(err.response.data);
        });
    } , []);

    function home(){
        navigate("/");
    }
    function addCart(){
        console.log("Adicionar ao carrinho");
    }

    return (
        <>
            <NavBar/>
            <ProductContainer>
                <h1>{product.name}</h1>
                <Product>
                    <Image>
                        <img src={product.image} />
                    </Image>
                    <Price>
                        <Description>
                            <Subtitle>Descrição:</Subtitle>
                            {product.description}
                        </Description>
                        <Values>
                            <Subtitle>Categoria:</Subtitle><p>{product.category}</p>

                            <Subtitle>Preço:</Subtitle>
                            <div>
                                <p className="price">R${product.value}</p>
                                <p>{"À vista"}</p>
                            </div>
                            <p>Ou em até 12x de R${(product.value/12)}</p>
                        </Values>
                        <Buttons>
                            <BuyButton onClick={home}>Voltar para produtos</BuyButton>
                            <BuyButton onClick={addCart}>Adicionar ao carrinho</BuyButton>
                        </Buttons>
                    </Price>
                </Product>
            </ProductContainer>
            <Footer/>
        </>
    )
}

const ProductContainer = styled.div`
    margin: 50px auto 100px;
    height: 500px;
    width: 1000px;
    padding: 15px;

    display: flex;
    flex-direction: column;

    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    > h1{
        color: #FFA500;
        font-size: 27px;
        line-height: 34px;
        font-weight: 700;
        padding-left: 10px;
    }
`

const Product = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin: auto;
    
`
const Image = styled.div`
    width: 460px;
    height: 360px;
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 5px;
    margin-right: 10px;

    img{
        height: 100%;
        object-fit: cover;
    }
`
const Description = styled.div`
    
    color: black;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 20px
    
`

const Subtitle = styled.div`
    color: #0060b1;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 7px;
`

const Price = styled.div`
    width: 470px;
    display: flex;
    flex-direction: column;
    p{
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 10px
    }
`
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    
`
const Values = styled.div`
    height: 180px;
    margin-bottom: 20px;

    .price{
        color: #FFA500;
        font-size: 27px;
        font-weight: 700;
    }
    div{
        display: flex;
        align-items: center;
        p{
            font-size: 12px;
            margin-right: 5px;
        }
    }
`
const BuyButton = styled.button`
    width: 200px;
    height: 50px;
    background-color: #f90;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex; justify-content: center; align-items: center;
    &:hover {
    background-color: #e80;
    }
`;




