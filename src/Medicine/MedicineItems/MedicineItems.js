import React from "react";
import classes from "./MedicineItems.module.css";
import MedicineInputForm from "./MedicineInputForm";

const MedicineItems = (props) => {
  return (
    <li className={classes.medicine}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>RS {props.price}</div>
        <div className={classes.quantity}>
          Available Quantity:{props.quantity}
        </div>
      </div>
      <div>
        <MedicineInputForm />
      </div>
    </li>
  );
};

export default MedicineItems;
