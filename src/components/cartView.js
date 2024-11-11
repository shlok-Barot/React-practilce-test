import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartView = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h2>Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      <ul className="list-group">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name}
            <button
              className="btn btn-sm btn-danger float-end"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartView;
