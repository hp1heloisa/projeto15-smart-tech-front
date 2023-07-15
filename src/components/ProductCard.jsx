import styled from "styled-components";
import Carro from "../assets/carro.png"

export default function ProductCard(props) {

    const { product } = props;
    console.log(product.name)

    return (
        <ProductItem>
            <img src={product.image} alt="product" />
            <h1>{product.name}</h1>
            <h2>{product.value}</h2>
            <ButtonCart>
                <img src={Carro} alt="carro-icon" />
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
    flex-direction: column;position: relative;
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
    }h2{
        letter-spacing: 2px;
        font-size: 20px;
        color: #757373;
        font-weight: bold;
        margin-bottom: 24px;
        position: absolute;
        bottom:80px;
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
    img{
        margin-top: 20px;
        width: 60px;
        height: 60px;
    }

`