import React from "react";
import "./Cart.css";
import CartProduct from "./CartProduct";
import Subtotal from "./Subtotal";

const Cart = () => {
  return (
    <div className="Checkout">
      <div className="checkout_left">
        <h2>My Cart</h2>
        <CartProduct />
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Cart;
