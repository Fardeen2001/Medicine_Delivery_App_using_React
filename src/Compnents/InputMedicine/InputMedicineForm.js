import React, { useContext, useState } from "react";
import classes from "./InputMedicine.module.css";
import Card from "../../UI/Card";
import Input from "../../UI/Input";
import { ListContext } from "../../Store/ListCart/ListProvider";

const InputMedicineForm = (props) => {
  const { setInput } = useContext(ListContext);
  const [name, setInputName] = useState("");
  const [description, setInputDes] = useState("");
  const [price, setInputPrice] = useState("");
  const [Quantity, setInputQuantity] = useState("");

  const [inputsIsValid, setinputsIsValid] = useState(true);
  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
  };
  const desChangeHandler = (e) => {
    setInputDes(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setInputPrice(e.target.value);
  };
  const QuantityChangeHandler = (e) => {
    setInputQuantity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newInputs = {
      name,
      description,
      price: parseInt(price),
      Quantity: parseInt(Quantity),
    };
    if (
      name.trim().length === 0 ||
      description.trim().length === 0 ||
      price.length === 0 ||
      Quantity.trim().length === 0 ||
      price < 1 ||
      Quantity < 1
    ) {
      setinputsIsValid(false);
      return;
    }
    setInput((prevInput) => [...prevInput, newInputs]);
    setInputName("");
    setInputDes("");
    setInputPrice("");
    setInputQuantity("");
  };

  // const nameRef = useRef();
  // const descriptionRef = useRef();
  // const priceRef = useRef();
  // const QuantityRef = useRef();
  // const submitHandler = (e) => {
  //   e.preventDefault();
  // const newName = nameRef.current.value;
  // const newDes = descriptionRef.current.value;
  // const newPrice = priceRef.current.value;
  // const newQuantity = QuantityRef.current.value;
  // const newPriceNum = +newPrice;
  // const newQuantityNum = +newQuantity;
  // const newInputs = {
  //   name: newName,
  //   description: newDes,
  //   price: newPriceNum,
  //   Quantity: newQuantityNum,
  // };

  //   if (
  //     newName.trim().length === 0 ||
  //     newDes.trim().length === 0 ||
  //     newPrice.trim().length === 0 ||
  //     newQuantity.trim().length === 0 ||
  //     newPriceNum < 1 ||
  //     newQuantityNum < 1
  //   ) {
  //     setinputsIsValid(false);
  //     return;
  //   }
  //   return newInputs;
  //   // props.onAddToList(newInputs);
  // };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.input}>
          <Input
            // ref={nameRef}
            label="Name"
            input={{
              id: `name_${props.id}`,
              type: "text",
            }}
            value={name}
            onChange={nameChangeHandler}
          />
          <Input
            // ref={descriptionRef}
            label="Description"
            input={{
              id: `des_${props.id}`,
              type: "text",
            }}
            onChange={desChangeHandler}
            value={description}
          />
          <Input
            // ref={priceRef}
            label="Price"
            input={{
              id: `price_${props.id}`,
              type: "number",
              min: "1",
              max: "1000",
              step: "1",
            }}
            onChange={priceChangeHandler}
            value={price}
          />
          <Input
            // ref={QuantityRef}
            label="Quantity"
            input={{
              id: `Quantity_${props.id}`,
              type: "number",
              min: "1",
              max: "100",
              step: "1",
              defaultValue: "1",
            }}
            onChange={QuantityChangeHandler}
            value={Quantity}
          />
        </div>
        <div className={classes.btn}>
          <button>ADD To List</button>
        </div>

        {!inputsIsValid && <p>please enter a valid quantity</p>}
      </form>
    </Card>
  );
};

export default InputMedicineForm;
