import styled from "styled-components"

export default function ResumeCart({setTotal}) {
   return (
      <Container>
         <div className="ContainerRight">
            <h2 id="resumo">
               <ion-icon name="document-sharp"></ion-icon>
               RESUMO
            </h2>

            <div id="valorProdutos">
               <p>
                  Valor dos Produtos: <span>R$ 10.105,92</span>
               </p>
               <hr />
            </div>

            <div id="freteEprazo">
               <p>
                  Frete: <span>R$ 0,00</span>
               </p>
               <p>
                  Total à prazo: <span>R$ 10.105,92</span>
               </p>
            </div>

            <div id="valorNoPix">
               <p>Valor à vista no Pix:</p>
               <div>
                  <span>R$ 8.934,97</span>
                  <p>(Economize: R$ 1.170,55)</p>
               </div>
            </div>

            <div id="botoes">
               <button>IR PARA PAGAMENTO</button>
               <button>CONTINUAR COMPRANDO</button>
            </div>
         </div>
      </Container>
   )
}

const Container = styled.div`
   width: 312px;
   height: 100vh;

   .ContainerRight {
      min-height: 549px;
      background: #ffffff;
      padding: 32px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      #resumo {
         color: black;
         display: flex;
         gap: 5px;
         align-items: center;
         font-size: 20px;
         font-weight: 700;

         ion-icon {
            font-size: 20px;
            color: #ff6500;
         }
      }

      p {
         color: #7f858d;
         font-weight: 500;
         display: flex;
         justify-content: space-between;
         font-size: 12px;
         padding-inline: 10px;

         span {
            color: black;
            font-size: 16px;
            font-weight: 700;
         }
      }

      #valorProdutos {
         hr {
            border: none;
            height: 1px;
            background: #dee0e4;
         }
      }

      #valorNoPix {
         width: 248px;
         height: 114px;
         margin-block: 32px;
         background: #e5fff1;
         color: #17964e;

         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         gap: 15px;

         p {
            font-size: 12px;
         }

         div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;

            p {
               font-size: 14px;
            }
         }

         span {
            font-size: 30px;
            font-weight: 700;
         }
      }

      #botoes {
         display: flex;
         flex-direction: column;
         gap: 16px;

         button {
            height: 48px;
            width: 260px;
            font-size: 18px;
            font-weight: 700;
         }

         button:nth-child(1) {
            background: #ff6500;
            color: white;
         }

         button:nth-child(2) {
            background: transparent;
            border: 1px solid #ff6500;
            color: #ff6500;
         }
      }
   }
`
