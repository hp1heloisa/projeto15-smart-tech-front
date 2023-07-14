import styled from "styled-components";
import Carro from "../assets/carro.png"

export default function ProductCard(props) {

    const { listProducts } = props;

    return (
        <ProductItem>
            <img src={listProducts.image} alt="product" />
            <h1>{listProducts.name}</h1>
            <h2>{listProducts.value}</h2>
            <ButtonCart>
                <img src={Carro} alt="carro-icon" />
            </ButtonCart>
        </ProductItem>
    )
}

const ProductItem = styled.div`
    background-color: #ffffff;
    height: 450px;
    width: 250px;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 3px 5px 5px #a7a7a7;
    img{
        width: 210px;
        height: 210px;
        margin-bottom: 20px;
        border-radius: 15px;
        align-items: center;
    }h1{
        font-family: "Poppins";
        font-size: 20px;
        font-weight: 500;
        font-weight: bold;
        letter-spacing: 2px;
        color: #ff9100;
        margin-bottom: 20px;
    }h2{
        letter-spacing: 2px;
        font-size: 20px;
        color: #757373;
        font-weight: bold;
        margin-bottom: 20px;
    }
`
const ButtonCart = styled.button`
    background-color: #fda42f;
    width: 210px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items:center;
    img{
        margin-top: 20px;
        width: 60px;
        height: 60px;
    }

`