import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import UsersPage from "./components/usersPage";
import ProductsPage from "./components/productPage";
import CartView from "./components/cartView";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
