import styled from "styled-components"
import CartStages from "../components/CartStages"
import { useState } from "react"
import api from "../services/api"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function PaymentPage(props) {
  const {total, metodo, setMetodo, setOrder} = props
  const navigate = useNavigate()

  function setarBoleto() { setMetodo('Boleto Bancário') }
  function setarCartao() { setMetodo('Cartão de Crédito') }
  function setarPix() { setMetodo('Pix') }

  function limparCarrinho() {
    const data = JSON.parse(localStorage.getItem("dataSmartTech"));
    console.log(data);
    axios.put(`${import.meta.env.VITE_API_URL}/carrinho/limpa`,null, {headers: {Authorization: `Bearer ${data.token}`},})
    .then(res => {
       setRender(res);
    })
      .catch(err => alert(err.response.data));
 }

  function concludeOrder(){
    const data = JSON.parse(localStorage.getItem("dataSmartTech"));

    const body = {value: total, method: metodo} 
    
    const promise = api.conclude(body, data.token)
    promise.then(res => {
      setOrder(res.data);
      limparCarrinho();
      navigate("/check/concluido");
    });
    promise.catch(err => {
        console.log(err.response.data);
    });
  }

  return (<>
    <CartWithProducts>
      <CartStages />
      <MainContainer>
        <LeftContainer>
          <div className="CEP wrapper">
            <span className="wrapperTitle">
              <ion-icon name="checkmark-circle"></ion-icon>
              <p>SELECIONE A FORMA DE PAGAMENTO</p>
            </span>
          </div>
          <div onClick={setarBoleto} className="titles wrapper">
            <span className="wrapperTitle">
              <span>
                <ion-icon name="reader-outline"></ion-icon>
                PAGAMENTO NO BOLETO
              </span>
              <button>
                <ion-icon name="checkbox"></ion-icon>
                SELECIONAR MÉTODO 
              </button>
            </span>
            <div className="produtos">
            </div>
          </div>
          <div onClick={setarCartao} className="titles wrapper">
            <span className="wrapperTitle">
              <span>
                <ion-icon name="card-outline"></ion-icon>
                PAGAMENTO NO CARTÃO
              </span>
              <button>
                <ion-icon name="checkbox"></ion-icon>
                SELECIONAR MÉTODO 
              </button>
            </span>
            <div className="produtos">
            </div>
          </div>
          <div onClick={setarPix} className="titles wrapper">
            <span className="wrapperTitle">
              <span>
                <ion-icon name="prism-outline"></ion-icon>
                PAGAMENTO NO PIX
              </span>
              <button>
                <ion-icon name="checkbox"></ion-icon>
                SELECIONAR MÉTODO 
              </button>
            </span>
            <div className="produtos">
            </div>
          </div>
        <Conclude onClick={concludeOrder}>Concluir</Conclude>

        </LeftContainer>
      </MainContainer>
    </CartWithProducts>

  </>)
}

  const CartWithProducts = styled.div`
    color: #cabebe;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .wrapperTitle {
        font-size: 20px;
        font-weight: 700;
        color: #42464d;

        ion-icon {
          margin-right: 10px;
          color: #ff6500;
        }
    }

    .wrapper {
        background: #ffffff;
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 25px;
    }
  `

  const LeftContainer = styled.div`
    width: 1224px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    gap: 40px;

    .produtos {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .CEP {
        span {
          display: flex;
        }

        span:nth-child(2) {
          height: 48px;
          display: flex;
          gap: 16px;
          align-items: center;

          input {
              width: 264px;
              height: 48px;
          }

          button {
              width: 65px;
          }

          a {
              font-size: 14px;
              font-weight: 600;
              color: #ff6500;
              text-decoration: none;
          }
        }

        span:nth-child(3) {
          font-size: 14px;
          color: #7f858d;

          strong {
              font-weight: 700;
          }
        }
    }

    .titles {
        span:nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: space-between;

          button {
              width: 230px;
              height: 34px;

              padding: 0;

              font-size: 12px;
              font-weight: 700;
              background: transparent;
              border: 1px solid #0039a1;
              color: #0c00b6;

              ion-icon {
                color: #129700;
                width: 15px;
                height: 15px;
              }
          }
        }
    }
  `

  const MainContainer = styled.div`
    width: 1568px;
    display: flex;
    justify-content: space-between;
  `
const Conclude = styled.button`
width: 200px;
height: 50px;
margin: 0 auto;
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
