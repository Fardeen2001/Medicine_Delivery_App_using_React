import React from "react";
import CartButton from "./CartButton";
import classes from "./Navbar.module.css";
const Navbar = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Medicine</h1>
        <CartButton onClick={props.onShown} />
      </header>
    </>
  );
};

export default Navbar;
