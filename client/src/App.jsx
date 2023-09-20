import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/productPage/ProductPage";
import Ecommerce from "./components/landingPage/Ecommerce";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ecommerce />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
