import { useState , useEffect } from "react";
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

  const [flag , setFlag] = useState(false)
  console.log(flag)
  const addToCartButton = (product) =>{
    
      cart.some((productInCart)=>{
        return (( product.id === productInCart.id) ? setFlag(true) : setFlag(false))
      })
      
  }

  const [loading , setLoading] = useState(false)

  useEffect(()=>{

    setTimeout(()=>{setLoading(true)},3900)

  }, [])
  
  return (
    <>
      {
        loading ?
        
      <><Header cartItemNumber={cart.length} setChangePage={setChangePage} cart = {cart} />
      {changePage ? (
        <Cart cart={cart} setCart = {setCart}  addToCartButton={addToCartButton}/>
      ) : (
        <ShowItems product={product} addToCart={addToCart} cart = {cart}  addToCartButton={addToCartButton}/>
      )} 
        </>
        : <div className="loadingLogo"><img src = 'loading.gif' alt="loading...."></img></div>
      }
      
    </>
  );
}

export default App;
