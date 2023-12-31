import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components'

export default function ProductInCart({ product, quantidade }) {
   console.log(product);
   let [quant, setQuant] = useState(quantidade);

   function deletaProdutos(){
      const data = JSON.parse(localStorage.getItem("dataSmartTech"));
      const ok = confirm(`Tem certeza que deseja remover todos esses produtos?`);
      if (ok){
         axios.put(`${import.meta.env.VITE_API_URL}/carrinho/${product._id}`,null, {headers: {Authorization: `Bearer ${data.token}`},})
              .then(res => window.location.reload())
              .catch(err => alert(err.response.data));
      }
   }

   function addDelProd(tipo){
      const data = JSON.parse(localStorage.getItem("dataSmartTech"));
         axios.put(`${import.meta.env.VITE_API_URL}/carrinho/${product._id}/${tipo}`,null, {headers: {Authorization: `Bearer ${data.token}`},})
              .then(res => {
                  if (tipo == 'add'){
                     setQuant(quant++);
                  } else{
                     setQuant(quant--);
                  }
              })
              .catch(err => alert(err.response.data));
   }

   return (
      <Container>
         <img src={product.image} alt="" />
         <div className="infos">
            <div>
               <span>{product.category}</span>
               <h2>{product.name}</h2>
            </div>
            <div>
               <p>Com desconto no PIX: {product.value}</p>
               <p>Parcelado no cartão em até 10x sem juros: {product.value}</p>
            </div>
         </div>
         <div className="quantidade">
            <p>Quant.</p>
            <div>
               <ion-icon name="chevron-back-sharp" onClick={() => addDelProd('del')}></ion-icon>
               <input type="text" value={quant} />
               <ion-icon name="chevron-forward-sharp" onClick={() => addDelProd('add')}></ion-icon>
            </div>
            <button onClick={deletaProdutos}>
               <ion-icon name="trash-sharp"></ion-icon>
               REMOVER
            </button>
         </div>
         <div className='price'>
            <p>Preço à vista no PIX:</p>
            <span>R$ {(Number(product.value)*quant).toFixed(2)}</span>
         </div>
      </Container>
   )
}

const Container = styled.div`
   display: flex;
   justify-content: space-between;

   img {
      width: 88px;
      height: 88px;
   }

   .infos {
      width: 694px;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      div {
         display: flex;
         flex-direction: column;
         gap: 5px;
      }

      h2 {
         color: black;
         font-size: 14px;
         font-weight: 700;
      }
   }

   .quantidade {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 5px;

      font-size: 12px;
      color: black;

      input {
         width: 46px;
         height: 28px;
         text-align: center;
         border: none;
      }

      ion-icon {
         font-size: 15px;
         color: #e72626;
      }

      button {
         width: 100%;
         height: 16px;
         display: flex;
         align-items: center;
         justify-content: space-between;
         gap: 5px;

         font-size: 12px;
         font-family: 'Poppins';
         background: transparent;
         color: #e72626;

         ion-icon {
            font-size: 12px;
         }
      }
   }

   .price {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 20px;
    p {
      font-size: 12px;
      color: black;
    }

    span {
      font-size: 16px;
      font-weight: 700;
      color: #ff6500;
    }
   }
`
