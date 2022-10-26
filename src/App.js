import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Jewelery from "./pages/Jewelery";
import Electronics from "./pages/Electronics";
import Men from "./pages/Men";
import Women from "./pages/Women";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import { Navigate } from "react-router-dom";
import axios from "axios";
function App() {
  const [card, setCard] = useState([]);
  const [products, setProducts] = useState([]);
  const url = "https://fakestoreapi.com/products";
  const getProducts = async () => {
    const { data } = await axios(url);
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Navbar cardTotal={card.length} />
      <Routes>
        <Route
          index
          path="/"
          element={
            <Home
              setCard={setCard}
              setProducts={setProducts}
              products={products}
            />
          }
        />
        <Route path="/jewelery" element={<Jewelery products={products} />} />
        <Route
          path="/electronics"
          element={<Electronics products={products} />}
        />
        <Route path="/men" element={<Men products={products} />} />
        <Route path="/women" element={<Women products={products} />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
