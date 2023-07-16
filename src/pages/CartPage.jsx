import styled from 'styled-components'
import CartStages from './../components/CartStages'
import ProductInCart from '../components/productInCart'
import ResumeCart from '../components/ResumeCart'

export default function CartPage({ products }) {
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

               <MainContainer>
                  <LeftContainer>
                     <div className="CEP wrapper">
                        <span className="wrapperTitle">
                           <ion-icon name="location-sharp"></ion-icon>
                           <p>SELECIONE O ENDEREÇO</p>
                        </span>
                       
                     </div>
                     <div className="titles wrapper">
                        <span className="wrapperTitle">
                           <span>
                              <ion-icon name="basket-sharp"></ion-icon>
                              PRODUTO E SERVIÇO
                           </span>
                           <button>
                              <ion-icon name="trash-sharp"></ion-icon>
                              REMOVER TODOS OS PRODUTOS
                           </button>
                        </span>
                        <div className="produtos">
                           <ProductInCart product={products[0]} />
                           <ProductInCart product={products[1]} />
                           <ProductInCart product={products[0]} />
                           <ProductInCart product={products[1]} />
                        </div>
                     </div>
                  </LeftContainer>
                  <ResumeCart />
               </MainContainer>
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
            border: 1px solid #e72626;
            color: #e72626;

            ion-icon {
               color: #e72626;
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
