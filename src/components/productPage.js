import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductsPage = () => {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
  ];
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="card mb-2">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
