import "./App.css";
import myProduct from "./images/product1.jpg";
import AddButton from "./components/AddButton";
import DeleteButton from "./components/DeleteButton";
import ResetButton from "./components/ResetButton";
import TotalProducts from "./components/TotalProducts";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addProduct = () => {
    setCount(count + 1);
  };

  const deleteProduct = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  const resetProduct = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="product_container">
        <img className="my_product" src={myProduct} alt="producto" />
      </div>
      <TotalProducts numProducts={count} />
      <div className="main_container">
        <AddButton action={addProduct} />
        <DeleteButton action={deleteProduct} />
        <div className="reset_container">
          <ResetButton action={resetProduct} />
        </div>
      </div>
    </div>
  );
}

export default App;
