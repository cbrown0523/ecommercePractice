import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import SubNavigation from "./components/SubNavigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Children from "./pages/Children";
import Sale from "./pages/Sale";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <SubNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/women" element={<Women />} />
          <Route path="/children" element={<Children />} />
          <Route path="/sale" element={<Sale />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
