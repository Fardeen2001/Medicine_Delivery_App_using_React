import React, { useState, useContext, useEffect } from "react";
import classes from "./CartButton.module.css";
import CartLogo from "../Cart/CartLogo";
import CartContext from "../../Store/CartStore/cart-context";

const CartButton = (props) => {
  const cartcxt = useContext(CartContext);
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState("");
  const { items } = cartcxt;
  const numberOfCartItems = items.reduce((currNum, item) => {
    return currNum + item.quantity;
  }, 0);

  const buttonclasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
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
