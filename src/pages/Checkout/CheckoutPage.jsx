import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Footer from '../../components/Footer'
import NavBarSec from '../../components/NavBarSec'
import { Container } from './CheckoutrPage.style'
import CartPage from '../CartPage'
import PaymentPage from "../PaymentPage";
import { useEffect } from "react";
import ConclusionPage from "../ConclusionPage";


export default function CheckoutPage() {

   const navigate = useNavigate()
   const location = useLocation()

   useEffect(() => {
      if(location.pathname === '/check' || location.pathname === '/check/')
         navigate('/check/carrinho')
   }, []);

   return (
      <Container>
         <NavBarSec />
         <Routes>
            <Route path="/carrinho" element={<CartPage />}></Route>
            <Route path="/pagamento" element={<PaymentPage />}></Route>
            <Route path="/concluido" element={<ConclusionPage />}></Route>
         </Routes>

         <Footer />
      </Container>
   )
}


