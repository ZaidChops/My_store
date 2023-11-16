import React, { useContext } from "react";
import CartContext from "../context/product/Cart/CartContext";
import Quantity from "./Quantity";

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  return (
    <>
      <div className="cart-item">
        <img src={item.image} alt="" />
        <span>
          <h1>{item.title}</h1>
          <h3>Rate : ${item.price}</h3>
          <h3>Subtotal:${item.price * item.qty}</h3>

          <Quantity item={item} />
        </span>
        <button className="remove-btn" onClick={() => handleRemove(item.id)}>
          Remove Item
        </button>
      </div>
    </>
  );
};

export default CartItem;
