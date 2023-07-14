import styled from "styled-components"
import NavBar from "../components/NavBar.jsx"
import Footer from "../components/Footer.jsx"
import Carro from "../assets/carro.png"


export default function HomePage() {

    const listProducts = 
        {
            name: "PlayStation 5 - Slim Limited Edition",
            image: "https://img.olhardigital.com.br/wp-content/uploads/2021/02/shutterstock_1855958302.jpg",
            value: "R$ 5000,00"
        }



    return(
        <>
                <NavBar/>
                <HomePageComponent>
                    <ProductsArea>
                        <ProductItem>
                            <img src={listProducts.image} alt="product" />
                            <h1>{listProducts.name}</h1>
                            <h2>{listProducts.value}</h2>
                            <ButtonCart>
                                <img src={Carro} alt="carro-icon" />
                            </ButtonCart>
                        </ProductItem>
                        <ProductItem>
                            <img src={listProducts.image} alt="product" />
                            <h1>{listProducts.name}</h1>
                            <h2>{listProducts.value}</h2>
                            <ButtonCart>
                                <img src={Carro} alt="carro-icon" />
                            </ButtonCart>
                        </ProductItem>
                        <ProductItem>
                            <img src={listProducts.image} alt="product" />
                            <h1>{listProducts.name}</h1>
                            <h2>{listProducts.value}</h2>
                            <ButtonCart>
                                <img src={Carro} alt="carro-icon" />
                            </ButtonCart>
                        </ProductItem>
                        <ProductItem>
                            <img src={listProducts.image} alt="product" />
                            <h1>{listProducts.name}</h1>
                            <h2>{listProducts.value}</h2>
                            <ButtonCart>
                                <img src={Carro} alt="carro-icon" />
                            </ButtonCart>
                        </ProductItem>
                        <ProductItem>
                            <img src={listProducts.image} alt="product" />
                            <h1>{listProducts.name}</h1>
                            <h2>{listProducts.value}</h2>
                            <ButtonCart>
                                <img src={Carro} alt="carro-icon" />
                            </ButtonCart>
                        </ProductItem>
                        <ProductItem>
                            <img src={listProducts.image} alt="product" />
                            <h1>{listProducts.name}</h1>
                            <h2>{listProducts.value}</h2>
                            <ButtonCart>
                                <img src={Carro} alt="carro-icon" />
                            </ButtonCart>
                        </ProductItem>
                        <ProductItem>
                            <img src={listProducts.image} alt="product" />
                            <h1>{listProducts.name}</h1>
                            <h2>{listProducts.value}</h2>
                            <ButtonCart>
                                <img src={Carro} alt="carro-icon" />
                            </ButtonCart>
                        </ProductItem>
                        <ProductItem>
                            <img src={listProducts.image} alt="product" />
                            <h1>{listProducts.name}</h1>
                            <h2>{listProducts.value}</h2>
                            <ButtonCart>
                                <img src={Carro} alt="carro-icon" />
                            </ButtonCart>
                        </ProductItem>
                        <ProductItem>
                            <img src={listProducts.image} alt="product" />
                            <h1>{listProducts.name}</h1>
                            <h2>{listProducts.value}</h2>
                            <ButtonCart>
                                <img src={Carro} alt="carro-icon" />
                            </ButtonCart>
                        </ProductItem>                        <ProductItem>
                            <img src={listProducts.image} alt="product" />
                            <h1>{listProducts.name}</h1>
                            <h2>{listProducts.value}</h2>
                            <ButtonCart>
                                <img src={Carro} alt="carro-icon" />
                            </ButtonCart>
                        </ProductItem>                        <ProductItem>
                            <img src={listProducts.image} alt="product" />
                            <h1>{listProducts.name}</h1>
                            <h2>{listProducts.value}</h2>
                            <ButtonCart>
                                <img src={Carro} alt="carro-icon" />
                            </ButtonCart>
                        </ProductItem>
                        <ProductItem>
                            <img src={listProducts.image} alt="product" />
                            <h1>{listProducts.name}</h1>
                            <h2>{listProducts.value}</h2>
                            <ButtonCart>
                                <img src={Carro} alt="carro-icon" />
                            </ButtonCart>
                        </ProductItem>
                    </ProductsArea>
                </HomePageComponent>
                <Footer/>
        </>
    )
}

const HomePageComponent = styled.div`
    background-color: #170194;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 3px 5px 5px #a7a7a7;
    `
const ProductsArea = styled.div`
    background-color: #e4e4e4;
    width: 1800px;
    height: auto;
    margin-top: 120px;
    margin-bottom: 120px;
    padding: 45px;
    gap: 40px;
    display: flex;
    flex-wrap: wrap;
`
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