import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/dashboard">
          My Store
        </a>
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/cart")}
        >
          Cart ({cartItems.length})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;