import React from "react";
import { useContext } from "react";
import candyContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx=useContext(candyContext);
  const numberOfCartItems= cartCtx.amount;

  return (
    <button onClick={props.showCart}>
      <span>Your Cart</span>
      <span>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;