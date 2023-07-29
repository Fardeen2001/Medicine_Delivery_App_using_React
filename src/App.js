import { useState } from "react";
import CartPortal from "./Cart/CartPortal";
import InputMedicineForm from "./InputMedicine/InputMedicineForm";
import Navbar from "./Layout/Navbar";
import AvailableMedicine from "./Medicine/AvailableMedicine";

function App(props) {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const showCartHandler = () => {
    setCartIsVisible(true);
  };
  const hideCartHandler = () => {
    setCartIsVisible(false);
  };
  return (
    <>
      {cartIsVisible && <CartPortal onClose={hideCartHandler} />}
      <Navbar onShow={showCartHandler} />
      <main>
        <InputMedicineForm />
        <AvailableMedicine />
      </main>
    </>
  );
}

export default App;
