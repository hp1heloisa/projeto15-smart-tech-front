import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Footer from '../../components/Footer'
import NavBarSec from '../../components/NavBarSec'
import { Container } from './CheckoutrPage.style'
import CartPage from '../CartPage'
import PaymentPage from "../PaymentPage";
import { useEffect } from "react";


export default function CheckoutPage() {

   const navigate = useNavigate()
   const location = useLocation()

   useEffect(() => {
      if(location.pathname === '/check' || location.pathname === '/check/')
         navigate('/check/carrinho')
   }, [])

   const products = [
      {
         _id: '12345',
         productName: 'Console Sony Playstation 5, Edição Digital - 1214B',
         productImage:
            'https://images.kabum.com.br/produtos/fotos/238670/console-sony-playstation-5-edicao-digital_1634132113_gg.jpg',
         productValueUnity: '3.999,99',
         productCategory: 'Console',
         productDescription: `
      Jogar no PS5 Não Tem Limites
      Desfrute do carregamento do seu PS5, extremamente rápido com o SSD de altíssima velocidade, uma imersão mais profunda com suporte a feedback tátil, gatilhos adaptáveis e áudio 3D, além de uma geração inédita de jogos incríveis para PlayStation.
      
      Veloz como um raio, SSD ultrarrápido
      Domine o poder de uma CPU e GPU personalizadas e o SSD com E/S integradas que redefinem as regras do que o console PlayStation pode fazer.
      
      Maximize suas sessões de jogo com tempo de carregamento praticamente instantâneo para jogos do PS5 instalados.`
      },
      {
         _id: '54321',
         productName: 'Console Microsoft Xbox Series S, 512GB, Branco - RRS-00006',
         productImage:
            'https://images.kabum.com.br/produtos/fotos/sync_mirakl/200089/Console-Microsoft-Xbox-Series-S-512GB-Branco-RRS-00006_1689091114_gg.jpg',
         productValueUnity: '1.896,00',
         productCategory: 'Console',
         productDescription: `
      A próxima geração de jogos traz nossa maior biblioteca de lançamentos digitais para o menor Xbox de todos os tempos.

      Os jogos criados com o kit de desenvolvimento Xbox Series X|S apresentam tempos de carregamento significativamente reduzidos e visuais impressionantes em até 120FPS.
      
      Esteja você procurando um título de lançamento de um dia, um dos mais de cem favoritos na biblioteca do Xbox Game Pass ou qualquer um dos milhares de clássicos adaptável com versões anteriores, há sempre algo para jogar no Xbox Series S totalmente digital.
      
      Entre no mundo digital com o Xbox Series S e crie uma biblioteca de jogos digitais. Seus jogos, salvamentos e backups digitais estão seguros na nuvem. Além disso, aproveite a capacidade de encomendar e pré-instalar os próximos jogos para que esteja pronto para jogar quando forem lançados.`
      },
      {
         _id: '15243',
         productName:
            'Notebook Gamer Acer Nitro 5 AMD Ryzen 7-4800H, 8GB RAM, GeForce GTX 1650, SSD 256GB, HDD 1TB, 15.6 Full HD, Win 11, Preto - AN515-44-R629',
         productImage:
            'https://images.kabum.com.br/produtos/fotos/339504/notebook-gamer-acer-nitro-5-amd-ryzen-7-4800h-geforce-gtx-1650-8gb-ram-ssd-256gb-hdd-1tb-15-6-fhd-ips-144hz-windows-11-an515-44-r629_1652732334_gg.jpg',
         productValueUnity: '4.499,99',
         productCategory: 'Notebook',
         productDescription: `
      Mergulhe de Cabeça na Ação
      A super placa de vídeo NVIDIA GeForce GTX 1650 com 4 GB de memória dedicada GDDR6 traz a performance que você precisa para surpreender seus adversários e jogar com alto nível de realismo.

      Processamento que Impõe Respeito
      Se é poder que você quer para chegar mais rápido ao level avançado, conte com o desempenho do processador AMD Ryzen R7 Octa Core, além dos 8 GB de memória tipo DDR4, expansível até 32 GB.

      Agora com Windows 11
      O Aspire Nitro 5 vem equipado com o sistema operacional Windows 11, entregando os mais diversos recursos para que seus momentos de jogos e entretenimento sejam ainda mais emocionantes e desafiadores.

 `
      }
   ]
   const productsNull = []

   return (
      <Container>
         <NavBarSec />
         <Routes>
            <Route path="/carrinho" element={<CartPage products={products} />}></Route>
            <Route path="/pagamento" element={<PaymentPage />}></Route>
         </Routes>

         <Footer />
      </Container>
   )
}


