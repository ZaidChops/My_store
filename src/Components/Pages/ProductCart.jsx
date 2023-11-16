import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/product/Cart/CartContext";
import Quantity from "./Quantity";

const ProductCart = ({ item }) => {
  let [check, setCheck] = useState(false);
  // console.log(item)

  const { CartItems, dispatch } = useContext(CartContext);

  useEffect(() => {
    handleCheck(item.id);
  }, [CartItems]);

  // const qtyValue=CartItems.filter((i) => {
  //   if(item.id === i.id)
  //      return (i.qty)
  //   })

  const handleCheck = (id) => {
    if (CartItems.length > 0) {
      CartItems.filter((i) => {
        if (i.id === id) {
          setCheck(true);
        }
      });
    } else {
      setCheck(false);
    }
  };

  const handleCart = (carts) => {
    setTimeout(() => {
      if (check === false) {
        const newObj = { ...carts };
        newObj.qty = 1;

        dispatch({
          type: "ADD_CART",
          payload: newObj,
        });
        setCheck(true);
      } else {
        dispatch({
          type: "INCREASE",
          payload: { item },
        });
      }
    }, 10);
  };

  return (
    <div className="product">
      <img id="product-img" src={item.image} alt="" />
      <h1>{item.title}</h1>
      <span>
        <h3>${item.price}</h3>
        <button className="add_cart" onClick={() => handleCart(item)}>
          Add to cart
        </button>
      </span>
    </div>
  );
};

export default ProductCart;
