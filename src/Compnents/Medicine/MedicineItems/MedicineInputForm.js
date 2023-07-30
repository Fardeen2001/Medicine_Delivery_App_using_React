import React, { useState, useRef } from "react";
import classes from "./MedicineInputForm.module.css";
import Input from "../../../UI/Input";

const MedicineInputForm = (props) => {
  const quantityRef = useRef();
  const [quantityIsValid, setQuantityIsValid] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredQuantity = quantityRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;
    if (enteredQuantity.trim().length === 0 || enteredQuantityNumber < 1) {
      setQuantityIsValid(false);
      return;
    }
    props.onAddToCart(enteredQuantityNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={quantityRef}
        label="Quantity"
        input={{
          id: `quantity_${props.id}`,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>ADD To Cart</button>
      {!quantityIsValid && <p>please enter a valid quantity</p>}
    </form>
  );
};

export default MedicineInputForm;
