import React, { useContext} from "react";
import CartContext from "../context/product/Cart/CartContext";

const Quantity = ({item}) => {

  const { dispatch } = useContext(CartContext);

  const handleIncrease = (item) => {
    dispatch({
      type: "INCREASE",
      payload: { item },
    });
  };

  const handledecrease = (item) => {
    dispatch({
      type: "DECREASE",
      payload: { item },
    });
  };

  return (
    <>
      <div className="flex justify-between w-[100px]">
            <h3>Qty :</h3>
            <button
              className="bg-slate-200 w-4 rounded border-2 "
              onClick={() => handleIncrease(item)}
            >
              +
            </button>
            <h3>{item.qty}</h3>
            <button
              className="bg-slate-200 w-4 rounded border-2 "
              onClick={() => handledecrease(item)}
            >
              -
            </button>
          </div>
    </>
  )
}

export default Quantity
