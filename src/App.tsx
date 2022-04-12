import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductList from "./components/ProductList";

import Navbar from "./components/Navbar";
import CreateProductForm from "./components/CreateProductForm";

function App() {
  return (
    <Router>
      <div className="relative w-screen h-screen overflow-y-auto bg-background px-10 py-6 2xl:px-20 2xl:py-8">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/create-product" element={<CreateProductForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
