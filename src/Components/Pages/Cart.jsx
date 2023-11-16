import React, { useContext, useEffect } from "react";
import CartContext from "../context/product/Cart/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { CartItems } = useContext(CartContext);

  const total = CartItems.reduce((x, y) => {
    return x + (y.price * y.qty);
  }, 0);

  return (
    <div className="cart-container">
      <div className="cart-items">
        {CartItems.length > 0 ? (
          CartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <h1 id="cart-item-h1">No item added</h1>
        )}
      </div>

      <div className="bill-section">
        <h1>Total Amount : ${total}</h1>
        <button className="pay-btn">Pay Now</button>
      </div>
    </div>
  );
};

export default Cart;
