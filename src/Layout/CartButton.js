import React, { useState } from "react";
import classes from "./CartButton.module.css";
import CartLogo from "../Cart/CartLogo";

const CartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState("");
  const buttonclasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;
  return (
    <button className={buttonclasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartLogo />
      </span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default CartButton;
