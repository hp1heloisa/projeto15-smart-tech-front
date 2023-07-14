import styled from "styled-components"
import NavBar from "../components/NavBar.jsx"
import Footer from "../components/Footer.jsx"
import ProductCard from "../components/ProductCard.jsx"


export default function HomePage() {

    const listProducts =
    {
        name: "PlayStation 5 - Slim Limited Edition",
        image: "https://img.olhardigital.com.br/wp-content/uploads/2021/02/shutterstock_1855958302.jpg",
        value: "R$ 5000,00"
    }


    // Requisição da lista de produtos:

    /*     useEffect(() => {
    
            if (!token) {
                navigate('/')
                alert("Faça o login!")
                return
            }
    
            const config = {
                headers: {
                    "authorization": `Bearer ${token}`,
                }
            }
    
            axios.get(`rota/`, config)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err.message))
        }, [token])
     */

    return (
        <>
            <NavBar />
            <HomePageComponent>
                <ProductsArea>
                    <ProductCard  listProducts={listProducts}/>
                    <ProductCard  listProducts={listProducts}/>
                    <ProductCard  listProducts={listProducts}/>
                    <ProductCard  listProducts={listProducts}/>
                    <ProductCard  listProducts={listProducts}/>
                    <ProductCard  listProducts={listProducts}/>
                </ProductsArea>
            </HomePageComponent>
            <Footer />
        </>
    )
}

const HomePageComponent = styled.div`
    background-color: #ffffff;
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
