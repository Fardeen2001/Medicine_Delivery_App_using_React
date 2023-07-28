import InputMedicineForm from "./InputMedicine/InputMedicineForm";
import Navbar from "./Layout/Navbar";
import AvailableMedicine from "./Medicine/AvailableMedicine";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <InputMedicineForm />
        <AvailableMedicine />
      </main>
    </div>
  );
}

export default App;
