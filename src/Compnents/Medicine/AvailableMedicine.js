import React, { useContext } from "react";
import classes from "./AvailableMedicine.module.css";
import Card from "../../UI/Card";
import MedicineItems from "./MedicineItems/MedicineItems";
import { ListContext } from "../../Store/ListCart/ListProvider";
const DUMMY_MEDICINE = [
  {
    id: "m1",
    name: "Dolo 650",
    description: "used to cure fever, contains paracetomol",
    price: 20,
    Quantity: 20,
  },
  {
    id: "m2",
    name: "Senorest",
    description: "used to cure cold, contains paracetomol",
    price: 60,
    Quantity: 20,
  },
  {
    id: "m3",
    name: "Eldofer",
    description: "used to stop motions",
    price: 80,
    Quantity: 20,
  },
  {
    id: "m4",
    name: "Diapride M1",
    description: "used to control sugar",
    price: 250,
    Quantity: 20,
  },
];

const AvailableMedicine = (props) => {
  const { input } = useContext(ListContext);
  const newData = [...DUMMY_MEDICINE, ...input];

  const medicine = newData.map((item) => (
    <MedicineItems
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      Quantity={item.Quantity}
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
