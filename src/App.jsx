import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import styled from "styled-components";
import CategoryPage from "./pages/CategoryPage";


export default function App() {

  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/produtos/:idProduto" element={<ProductPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/check/*" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  //background-color: #0060b1;
  //width: calc(100vw - 50px);
  max-height: 200vh;
  //padding: 25px;
`