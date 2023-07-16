import { useState } from "react";
import styled from "styled-components";
import Lupa from "../assets/lupa.png";
import Logo from "../assets/logo-sem-fundo.png";
import { useNavigate } from "react-router-dom";
import Welcome from "./Welcome.jsx";
import MenuLateral from "./MenuLateral";

export default function NavBar() {

    const [pesquisa, setPesquisa] = useState('');
    const navigate = useNavigate(true);

    function backToHome(){
        navigate("/")
        return
    }

    function pesquisar(){
        console.log(pesquisa);
    }

    return(
        <ContainerGeral>
                <MenuLateral />
                <LogoImage onClick={backToHome} src={Logo} alt="Logo-image" />
                <SearchBar>
                    <input placeholder="Pesquisar produto..." type="text" value={pesquisa} onChange={e => setPesquisa(e.target.value)} required/>
                    <img src={Lupa} alt="lupa-icon" onClick={pesquisar}/>
                </SearchBar>
                <Welcome />
                <Cart>
                    <ion-icon name="cart"></ion-icon>
                </Cart>
        </ContainerGeral>
    )
}

const ContainerGeral = styled.div`
    width: 100%;
    height: 78px;
    border-bottom: 3px solid #ff6500;
    background: #004d8e;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .signIn-Out {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: "Poppins";
        font-size: 11px;
        font-weight: 500;
        color: white;
        span {
            font-weight: 600;
        }
        cursor: pointer;
    }
    `

const MenuImage = styled.img`
        width: 65px;
        height: 65px;
        cursor: pointer;
    `
const LogoImage = styled.img`
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
    cursor: pointer;
    `
const SearchBar = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    input{
        height: 40px;
        font-size: 15px;
    }
    img{
        width: 20px;
        height: 20px;
        position: absolute;
        margin-left: 330px;
    }
`
const UserButton = styled.button`
    background-color: #5900ff;
    width: 190px;
    height: 60px;
    border-radius: 40px;
    padding: 2px;
`
const Cart = styled.div`
    cursor: pointer;
    ion-icon{
        width: 40px;
        height: 40px;
        color: white;
    }
`