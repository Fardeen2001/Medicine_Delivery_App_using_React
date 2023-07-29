import React from "react";
import classes from "./AvailableMedicine.module.css";
import Card from "../UI/Card";
import MedicineItems from "./MedicineItems/MedicineItems";
const DUMMY_MEDICINE = [
  {
    id: "m1",
    name: "Dolo 650",
    description: "used to cure fever, contains paracetomol",
    price: 20,
    quantity: 20,
  },
  {
    id: "m2",
    name: "Senorest",
    description: "used to cure cold, contains paracetomol",
    price: 60,
    quantity: 20,
  },
  {
    id: "m3",
    name: "Eldofer",
    description: "used to stop motions",
    price: 80,
    quantity: 20,
  },
  {
    id: "m4",
    name: "Diapride M1",
    description: "used to control sugar",
    price: 250,
    quantity: 20,
  },
];

const AvailableMedicine = () => {
  const medicine = DUMMY_MEDICINE.map((item) => (
    <MedicineItems
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      quantity={item.quantity}
    />
  ));
  return (
    <section className={classes.medicine}>
      <Card>
        <ul>{medicine}</ul>
      </Card>
    </section>
  );
};

export default AvailableMedicine;
