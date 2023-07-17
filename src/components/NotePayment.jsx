import styled from "styled-components"

export default function NotePayment() {
    return (
        <Container>
            <div className="ContainerRight">
                <h2 id="resumo">
                    <ion-icon name="checkmark-circle"></ion-icon>
                    COMPRA FINALIZADA!
                </h2>

                <div id="valorProdutos">
                    <p>
                        Código do Pedido: <span>8493428738</span>
                    </p>
                    <hr />
                </div>
                <div id="valorProdutos">
                    <p>
                        Data da compra: <span>12/12/23</span>
                    </p>
                    <hr />
                </div>
                <div id="valorProdutos">
                    <p>
                        Formade pagamento: <span>Cartão</span>
                    </p>
                    <hr />
                </div>
                <div id="valorProdutos">
                    <p>
                        Status do Pedido: <span>Enviado</span>
                    </p>
                    <hr />
                </div>

                <div id="valorNoPix">
                    <p>Valor Pago:</p>
                    <div>
                        <span>R$ 8.934,97</span>
                    </div>
                </div>

                <div id="botoes">
                    <button>RECEBER NOTA NO E-MAIL</button>
                    <button>CONTINUAR COMPRANDO</button>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 342px;
    height: 800px;
    display: flex;

    .ContainerRight {
        min-height: 549px;
        background: #ffffff;
        padding: 32px;

        display: flex;
        flex-direction: column;
        gap:30px;
        margin-bottom: 100px;

        #resumo {
            color: black;
            display: flex;
            gap: 5px;
            align-items: center;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;

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
            height: 100px;
            margin-block: 32px;
            background: #e5fff1;
            color: #17964e;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 15px;

            p {
                font-size: 16px;
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
