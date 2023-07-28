import React, { useState, useRef } from "react";
import classes from "./InputMedicine.module.css";
import Card from "../UI/Card";
import Input from "../UI/Input";

const InputMedicineForm = (props) => {
  const [quantityIsValid, setQuantityIsValid] = useState(true);
  const quantityRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredQuantity = quantityRef.current.value;
    console.log(enteredQuantity);
    const enteredQuantityNumber = +enteredQuantity;
    if (
      enteredQuantity.trim().length === 0 ||
      enteredQuantityNumber < 1 ||
      enteredQuantityNumber > 10
    ) {
      setQuantityIsValid(false);
      return;
    }
    props.onAddToCart(enteredQuantityNumber);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.input}>
          <Input
            ref={quantityRef}
            label="Name"
            input={{
              id: `name_${props.id}`,
              type: "text",
            }}
          />
          <Input
            ref={quantityRef}
            label="Description"
            input={{
              id: `des_${props.id}`,
              type: "text",
            }}
          />
          <Input
            ref={quantityRef}
            label="Price"
            input={{
              id: `price_${props.id}`,
              type: "number",
              min: "1",
              max: "1000",
              step: "1",
            }}
          />
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
        </div>
        <div className={classes.btn}>
          <button>ADD To List</button>
        </div>

        {!quantityIsValid && <p>please enter a valid quantity</p>}
      </form>
    </Card>
  );
};

export default InputMedicineForm;
