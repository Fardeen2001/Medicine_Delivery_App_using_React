import React, { useState, useContext } from "react";
import classes from "./CartButton.module.css";
import CartLogo from "../Cart/CartLogo";
import CartContext from "../../Store/CartStore/cart-context";

const CartButton = (props) => {
  const cartcxt = useContext(CartContext);
  const numberOfCartItems = cartcxt.items.reduce((currNum, item) => {
    return currNum + item.quantity;
  }, 0);
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState("");
  const buttonclasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;
  return (
    <button className={buttonclasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartLogo />
      </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
