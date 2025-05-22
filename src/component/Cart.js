// components/Cart.jsx
import React from "react";
import "./Cart.css";

const Cart = ({ image, name, description }) => {
  return (
    <div className="cart-container">
      <div className="cart-image">
        <img src={image} alt={name} />
      </div>
      <div className="cart-details">
        <h3 className="cart-name">{name}</h3>
        <p className="cart-description">{description.slice(0, 100)}...</p>
      </div>
    </div>
  );
};

export default Cart;