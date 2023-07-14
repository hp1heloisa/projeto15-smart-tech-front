import styled from "styled-components"

export default function CartStages() {
   return (
      <Container>
         <span>
            <ion-icon name="cart-sharp"></ion-icon> Carrinho <hr />
         </span>
         <span>
            <ion-icon name="person-sharp"></ion-icon> Identificação <hr />
         </span>
         <span>
            <ion-icon name="card-outline"></ion-icon> Pagamento <hr />{' '}
         </span>
         <span>
            <ion-icon name="eye-sharp"></ion-icon> Confirmação <hr />
         </span>
         <span>
            <ion-icon name="checkmark-circle-sharp"></ion-icon> Concluir
         </span>
      </Container>
   )
}

const Container = styled.div`
   display: flex;
   gap: 20px;

   span:nth-child(1) {
      color: #ff6500;
   }

   span {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 12px;
      font-weight: 600;

      ion-icon {
         font-size: 18px;
      }

      hr {
         width: 25px;
         border: 1px solid #dad2d2;
      }
   }
`
