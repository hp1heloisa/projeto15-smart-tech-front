import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import CarrinhoPage from "./pages/CarrinhoPage";

export default function App() {

  return (
    <PagesContainer>
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

