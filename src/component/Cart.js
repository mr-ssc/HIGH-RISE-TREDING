// components/Cart.jsx
import React from "react";
import "./Cart.css";

const Cart = ({ image, name, description }) => {
  return (
    
    <div className="Cart-cart-container">
      <div className="Cart-cart-image">
        <img src={image} alt={name} />
      </div>
      <div className="Cart-cart-details">
        <h3 className="Cart-cart-name">{name}</h3>
        <p className="Cart-cart-description">{description.slice(0, 100)}...</p>
      </div>
    </div>
  );
};

export default Cart;