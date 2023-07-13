import { useState } from "react";
import styled from "styled-components";
import Menu from "../assets/menu.png";
import Lupa from "../assets/lupa.png";
import Logo from "../assets/logo-sem-fundo.png";
import Carrinho from "../assets/carrinho.png";
import { useNavigate } from "react-router-dom";

export default function NavBar() {

    const [pesquisa, setPesquisa] = useState('');
    const navigate = useNavigate(true);

    function backToHome(){
        navigate("/")
        return
    }


    return(
        <ContainerGeral>
                <MenuImage src={Menu} alt="menu-button" />
                <LogoImage onClick={backToHome} src={Logo} alt="Logo-image" />
                <SearchBar>
                    <input placeholder="Pesquisar produto..." type="text" value={pesquisa} onChange={e => setPesquisa(e.target.value)} required/>
                    <img src={Lupa} alt="lupa-icon" />
                </SearchBar>
                <UserButton>
                    Faça o Login ou Cadrastre-se
                </UserButton>
                <Cart src={Carrinho} alt="carrinho-icon"/>
        </ContainerGeral>
    )
}

const ContainerGeral = styled.div`
    width: 100%;
    background-color: #0060b1;
    height: 90px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    `
const MenuImage = styled.img`
        width: 35px;
        height: 35px;
        cursor: pointer;
    `
const LogoImage = styled.img`
    width: 110px;
    height:110px;
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
    img{
        width: 40px;
        height: 40px;
        position: absolute;
        margin-left: 300px;
    }
`
const UserButton = styled.button`
    background-color: #5900ff;
    width: 190px;
    height: 60px;
    border-radius: 40px;
    padding: 2px;
`
const Cart = styled.img`
    width: 60px;
    height: 60px;
    cursor: pointer;
`