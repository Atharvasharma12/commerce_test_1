import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import ShowItems from "./components/ShowItems";
import product from "./components/Product";
import Cart from "./components/Cart";
function App() {
  const addToCart = (clickedProduct) => {
    setCart([...cart, { ...clickedProduct, quantity : 1}]);
  };

  const [changePage, setChangePage] = useState(false);

  const [cart, setCart] = useState([]);
  
  return (
    <>
      <Header cartItemNumber={cart.length} setChangePage={setChangePage} />

      {changePage ? (
        <Cart cart={cart} />
      ) : (
        <ShowItems product={product} addToCart={addToCart} />
      )}
    </>
  );
}

export default App;
