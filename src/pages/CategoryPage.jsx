import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";

export default function CategoryPage(){
    const params = useParams();
    const { category } = params;
    let [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/category/${category}`)
             .then(res => setProducts(res.data))
             .catch(erro => alert(erro.response.data));
    }, []);
       
        return (
            <>
                <NavBar />
                
                <HomePageComponent>
                    <ProductsArea>
                        {products.map((prod) => <ProductCard key={prod._id} product={prod}/>)}
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
    
        const BannerImage = styled.img`
            width: 100%;
            height: 100%;
        `
    
    const ProductsArea = styled.div`
        background-color: #e4e4e4;
        width: 100%;
        height: auto;
        margin-top: 120px;
        margin-bottom: 120px;
        padding-top: 70px;  
        padding-bottom: 70px;
        gap: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `
