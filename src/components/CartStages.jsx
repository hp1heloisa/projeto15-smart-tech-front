import { useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'

export default function CartStages() {
   const location = useLocation()

   return (
      <Container location={location.pathname.split('/')[2]}>
         <span>
            <ion-icon name="cart-sharp"></ion-icon> Carrinho
         </span>
         <span>
            <hr />
            <ion-icon name="card-outline"></ion-icon> Pagamento
         </span>
         <span>
            <hr />
            <ion-icon name="checkmark-circle-sharp"></ion-icon> Concluído
         </span>
      </Container>
   )
}

const Container = styled.div`
   display: flex;
   gap: 22px;
   margin-top: 115px;
   margin-bottom: 35px;

   ${({ location }) => {
      let stage =
         location === 'carrinho'
            ? 5
            : location === 'pagamento'
            ? 3
            : location === 'confirmacao'
            ? 2
            : 1

      return css`
         span:nth-last-child(n + ${stage}) {
            color: #ff6500;

            hr {
               background: #ff6500;
            }
         }
      `
   }}

   span {
      display: flex;
      align-items: center;
      gap: 22px;
      font-size: 12px;
      font-weight: 600;
      color: #dee0e4;

      ion-icon {
         font-size: 22px;
      }

      hr {
         width: 26.6px;
         height: 2px;
         border: none;
         background: #dee0e4;
      }
   }
`
