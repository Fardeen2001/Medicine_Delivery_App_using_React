import React from "react";
import classes from "./MedicineInputForm.module.css";
import Input from "../../UI/Input";

const MedicineInputForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        // ref={quantityRef}
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
      {/* {!quantityIsValid && <p>please enter a valid quantity</p>} */}
    </form>
  );
};

export default MedicineInputForm;
