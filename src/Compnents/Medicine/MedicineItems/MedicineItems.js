import React, { useContext } from "react";
import classes from "./MedicineItems.module.css";
import MedicineInputForm from "./MedicineInputForm";
import CartContext from "../../../Store/CartStore/cart-context";

const MedicineItems = (props) => {
  const cartCxt = useContext(CartContext);
  const addToCartHandler = (quantity) => {
    cartCxt.addItems({
      id: props.id,
      name: props.name,
      quantity: quantity,
      price: props.price,
    });
  };

  return (
    <li className={classes.medicine}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>RS {props.price}</div>
        <div className={classes.quantity}>
          Available Quantity:{props.Quantity}
        </div>
      </div>
      <div>
        <MedicineInputForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MedicineItems;
