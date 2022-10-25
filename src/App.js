import React, { useState } from "react";
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
function App() {
  const [card, setCard] = useState([]);
  return (
    <>
      <Navbar cardTotal={card.length} />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
