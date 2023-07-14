import styled from 'styled-components'
import CartStages from './../components/CartStages'

export default function CartPage({products}) {
   return (
      <>
         {products.length === 0 ? (
            <EmptyCart>
               <h2>O seu carrinho está vazio</h2>
               <p>Deseja olhar outros produtos similares?</p>
               <button>
                  <ion-icon name="cart-sharp"></ion-icon>
                  CONTINUAR COMPRANDO
               </button>
            </EmptyCart>
         ) : (
            <CartWithProducts>
               <CartStages />
            </CartWithProducts>
         )}
      </>
   )
}

const EmptyCart = styled.div`
   text-align: center;
   display: flex;
   flex-direction: column;
   gap: 20px;
   margin-top: 100px;
   h2 {
      font-size: 24px;
      font-weight: 700;
      color: #42464d;
   }

   p {
      font-size: 14px;
      font-weight: 300;
   }

   button {
      font-size: 18px;
      background: #ff6500;
      border: none;
      color: #ffffff;
      font-weight: 700;
      height: 46px;
      width: 313px;
      border-radius: 5px;
      margin-top: 10px;

      display: flex;
      justify-content: space-evenly;
      align-items: center;

      ion-icon {
         font-size: 25px;
      }
   }
`
const CartWithProducts = styled.div`
   margin-top: 100px;
   color: #cabebe;
`