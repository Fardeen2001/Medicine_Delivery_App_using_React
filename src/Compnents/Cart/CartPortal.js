import React, { useContext } from "react";
import classes from "./CartPortal.module.css";
import Modal from "../../UI/Modal";
import CartContext from "../../Store/CartStore/cart-context";
import CartItem from "./CartItems";

const CartPortal = (props) => {
  const cartctx = useContext(CartContext);
  const totalAmount = cartctx.totalAmount.toFixed(2);
  const hasItems = cartctx.items.length > 0;
  const cartItemAddHandler = (item) => {
    cartctx.addItems({ ...item, quantity: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartctx.removeItems(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs {totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Print</button>}
      </div>
    </Modal>
  );
};

export default CartPortal;
