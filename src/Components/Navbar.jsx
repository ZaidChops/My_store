import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./context/product/Cart/CartContext";

const Navbar = () => {
  const { CartItems } = useContext(CartContext);

  return (
    <nav>
      <Link to={"/"}>
        <h1 className="Logo">
          My.Store
        </h1>
      </Link>

      <Link className="category">ELectronics</Link>
      <Link className="category">JeweLery</Link>
      <Link className="category">Men's CLothing</Link>
      <Link className="category">Women's CLothing</Link>
      <Link to={"/cart"}>
        Cart{CartItems.length}
      </Link>
    </nav>
  );
};

export default Navbar;
