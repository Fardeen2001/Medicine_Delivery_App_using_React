import React from "react";
import classes from "./CartPortal.module.css";
import Modal from "../../UI/Modal";

const CartPortal = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "dolo650", quantity: 2, price: 40 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs 30</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Print</button>
      </div>
    </Modal>
  );
};

export default CartPortal;
