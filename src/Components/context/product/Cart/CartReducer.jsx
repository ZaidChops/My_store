const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        CartItems: [action.payload, ...state.CartItems],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        CartItems: state.CartItems.filter((item) => item.id != action.payload),
      };

    case "INCREASE":
      return {
        ...state,
        CartItems: state.CartItems.filter((item) =>
          item.id === action.payload.item.id
            ? { ...item, qty: item.qty++ }
            : { ...item }
        ),
      };

    case "DECREASE":
      return {
        ...state,
        CartItems: state.CartItems.filter((item) =>
          item.id === action.payload.item.id
            ? { ...item, qty: item.qty-- }
            : { ...item }
        ),
      };

    default:
      return state;
  }
};

export default CartReducer;
