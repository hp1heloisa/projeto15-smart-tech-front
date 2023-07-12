import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import CarrinhoPage from "./pages/CarrinhoPage";
import styled from "styled-components";
import NavBar from "./components/NavBar";

export default function App() {

  return (
    <PagesContainer>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/produtos/:idProduto" element={<ProductPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/carrinho" element={<CarrinhoPage />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #0060b1;
  width: calc(100vw - 50px);
  max-height: 200vh;
  padding: 25px;
`