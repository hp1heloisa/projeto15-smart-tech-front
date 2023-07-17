import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Footer from '../../components/Footer'
import NavBarSec from '../../components/NavBarSec'
import { Container } from './CheckoutrPage.style'
import CartPage from '../CartPage'
import PaymentPage from "../PaymentPage";
import { useEffect } from "react";
import ConclusionPage from "../ConclusionPage";
import { useState } from "react";


export default function CheckoutPage() {

   const navigate = useNavigate()
   const location = useLocation()

   useEffect(() => {
      if(location.pathname === '/check' || location.pathname === '/check/')
         navigate('/check/carrinho')
   }, []);

   const [total, setTotal] = useState();
   const [metodo, setMetodo] = useState();
   const [order, setOrder] = useState();

   return (
      <Container>
         <NavBarSec />
         <Routes>
            <Route path="/carrinho" element={<CartPage total={total} setTotal={setTotal} />}></Route>
            <Route path="/pagamento" element={<PaymentPage total={total} metodo={metodo} setMetodo={setMetodo} setOrder={setOrder}/>}></Route>
            <Route path="/concluido" element={<ConclusionPage order={order} />}></Route>
         </Routes>

         <Footer />
      </Container>
   )
}


