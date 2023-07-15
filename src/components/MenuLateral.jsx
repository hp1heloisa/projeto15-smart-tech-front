import { useEffect, useState } from "react";
import styled from "styled-components";
import Welcome from "./Welcome";
import Logo from "../assets/logo-sem-fundo.png";
import { useNavigate } from "react-router-dom";

export default function MenuLateral() {
    let [data, setData] = useState('')
    const navigate = useNavigate();


    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("dataSmartTech")));
    }, []);

    function showMenu(){
        console.log(menu)
        if (menu){
            setMenu(false);
        } else{
            setMenu(true);
        }
    }

    function clickButton() {
        if (data){
            localStorage.removeItem('dataSmartTech')
            window.location.reload();
        } else{
            navigate('/login')
        }
    }

    const [menu, setMenu] = useState(false);
    if (menu){
        return(
            <StyledMenu>
                <DivMenu>
                    <LogoImage src={Logo} alt="Logo-image" />
                    <div>
                        <Welcome />
                            <div>
                                <ion-icon name="cube"></ion-icon>
                                <p>Categorias</p>
                            </div>
                            <div className="categorias">
                                    <div><ion-icon name="caret-forward-sharp"></ion-icon> Console</div>
                                    <div><ion-icon name="caret-forward-sharp"></ion-icon> Fone</div>
                                    <div><ion-icon name="caret-forward-sharp"></ion-icon> Celular</div>
                                    <div><ion-icon name="caret-forward-sharp"></ion-icon> Cadeira Gamer</div>
                            </div>
                            <div>
                                <ion-icon name="cart"></ion-icon>
                                <p>Carrinho</p>
                            </div>
                    </div>
                    <button onClick={clickButton}>{(data) ? 'LogOut' : 'LogIn'}</button>
                </DivMenu>
                <span onClick={showMenu} className="sair" >x</span>
            </StyledMenu>
        )
    } else {
        return(
            <MenuImage onClick={showMenu}><ion-icon name="menu"></ion-icon></MenuImage>
        );
    }
}

const MenuImage = styled.div`
        ion-icon{
            width: 50px;
            height: 50px;
            color: white;
        }
        cursor: pointer;
`
const StyledMenu = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 9;
background: rgba(0, 0, 0, 0.6);
.sair{
    position: absolute;
    left: 21%;
    top: 10px;
    color: white;
    font-size: 30px;
    font-weight: 500;
    cursor: pointer;
}
`
const DivMenu = styled.div`
    width: 20%;
    height: 100%;
    background: #004d8e;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    gap: 15px;
    font-size: 15px;
    color: white;
    font-family: "Poppins";
    p {
        font-weight: 600;
    }
    div{
        display: flex;
        flex-direction: column;
        gap: 15px;
        div{
            display: flex;
            flex-direction: row;
            gap: 10px;
            align-items: center;
            ion-icon{
                font-size: 30px;
            }
            cursor: pointer;
        }
        .categorias{
            display: flex;
            flex-direction: column;
            align-items: start;
            padding-left: 40px;
            gap: 5px;
            div{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 5px;
                ion-icon{
                    font-size: 20px;
                }
            }
        }

    }
    button {
        width: calc(100% - 70px);
        height: 30px;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        background-color: #ED8811;
        :hover{
            box-shadow: 1px 2px 10px #353534;
        }
    }
    .signIn-Out {
        font-size: 15px;
    }
`
const LogoImage = styled.img`
    width: 120px;
    height: 120px;
    
`