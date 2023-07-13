import styled from "styled-components"

const teste = {
    img: "https://cdn.dooca.store/194/products/sony-ps5_640x640+fill_ffffff.jpg?v=1616039046&webp=0",
    name: "Console Sony Playstation 5, Edição Digital - 1214B",
    description: "Desfrute do carregamento do seu PS5, extremamente rápido com o SSD de altíssima velocidade, uma imersão mais profunda com suporte a feedback tátil, gatilhos adaptáveis e áudio 3D, além de uma geração inédita de jogos incríveis para PlayStation.",
    value: 3599.99
};

export default function ProductPage() {
    
    return(
        <ProductContainer>
            <h1>{teste.name}</h1>
            <Product>
                <Image>
                    <img src={teste.img} />
                </Image>
                <Price>
                    <Description>
                        <p>Descrição:</p>
                        {teste.description}
                    </Description>
                    <div>
                        <h3>R${(teste.value.toFixed(2)).toString().replace(".", ",")}</h3>
                        <BuyButton>Comprar</BuyButton>
                    </div>
                </Price>
                
            </Product>
            
        </ProductContainer>
    )
}

const ProductContainer = styled.div`
    margin: 80px auto 0;
    height: 530px;
    width: 1000px;
    padding: 15px;

    display: flex;
    flex-direction: column;

    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    h1{
        color: #FFA500;
        font-size: 27px;
        line-height: 34px;
        font-weight: 700;
        padding-left: 10px;
    }
`

const Product = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin: auto;
   
`
const Image = styled.div`
    width: 460px;
    height: 360px;
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 5px;
    margin-right: 10px;

    img{
        height: 100%;
        object-fit: cover;
    }
`
const Description = styled.div`
    
    color: black;
    font-size: 14px;
    font-weight: 400;

    p{
        color: #0060b1;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 7px;
    }
    
`
const Price = styled.div`
    width: 470px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    h3{
        color: #0060b1;
        font-size: 27px;
        line-height: 34px;
        font-weight: 700;
        padding-left: 10px;
    }

`

const BuyButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #f90;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e80;
  }
`;




