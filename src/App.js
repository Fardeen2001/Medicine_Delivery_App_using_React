import { useState } from "react";
import CartPortal from "./Compnents/Cart/CartPortal";
import InputMedicineForm from "./Compnents/InputMedicine/InputMedicineForm";
import Navbar from "./Compnents/Layout/Navbar";
import AvailableMedicine from "./Compnents/Medicine/AvailableMedicine";
import {ListProvider} from "./Store/ListCart/ListProvider";
import CartProvider from "./Store/CartStore/CartProvider";

function App(props) {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const showCartHandler = () => {
    setCartIsVisible(true);
  };
  const hideCartHandler = () => {
    setCartIsVisible(false);
  };
  return (
    <ListProvider>
      <CartProvider>
        {cartIsVisible && <CartPortal onClose={hideCartHandler} />}
        <Navbar onShow={showCartHandler} />
        <main>
          <InputMedicineForm />
          <AvailableMedicine />
        </main>
      </CartProvider>
    </ListProvider>
  );
}

export default App;
