import styled from "styled-components"
import NavBar from "../components/NavBar.jsx"
import Footer from "../components/Footer.jsx"


export default function HomePage() {
    return(
        <>
                <NavBar/>
                <HomePageComponent>
                    <ProductsArea>
                        <ProductItem></ProductItem>
                        <ProductItem></ProductItem>
                        <ProductItem></ProductItem>
                        <ProductItem></ProductItem>
                        <ProductItem></ProductItem>
                        <ProductItem></ProductItem>
                        <ProductItem></ProductItem>
                    </ProductsArea>
                </HomePageComponent>
                <Footer/>
        </>
    )
}

const HomePageComponent = styled.div`
    background-color: #00a0fd;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const ProductsArea = styled.div`
    background-color: #e74200;
    width: 2000px;
    height: 1500px;
    margin-top:100px;
    margin-bottom: 100px;
    padding: 50px;
    gap: 75px;
    display: flex;
    flex-wrap: wrap;
`
const ProductItem = styled.div`
    background-color: yellow;
    height: 400px;
    width: 250px;
`