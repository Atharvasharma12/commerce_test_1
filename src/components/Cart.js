import { useState, useEffect, React } from "react";
import "./Cart.css";

export default function Cart({ cart }) {
  const [newCart, setNewCart] = useState([]);
console.log(newCart.quantity)
  useEffect(() => {
    setNewCart(cart);
  }, [cart]);

  return (
    <div>
      <div>
        <p>
          Total =
          {newCart
            .map(product => product.price * product.quantity)
            .reduce((total, currentValue) => total + currentValue , 0)}
        </p>
      </div>

      {newCart.map((product, index) => {
        return (
          <div className="main" key={index}>
            <div>
              <div className="card">
                <div>
                  <img src={product.url} alt="img"></img>
                </div>

                <div>
                  <h3>{product.name}</h3>
                </div>
                <div>
                  <p>{product.description}</p>
                </div>
                <button
                  onClick={() => {
                    const _cart = newCart.map((product, cartIndex) => {
                      return cartIndex === index
                        ? { ...product, quantity: product.quantity + 1 }
                        : product;
                    });
                    setNewCart(_cart);
                  }}
                >
                  +
                </button>
                <div>
                  <p>{product.quantity}</p>
                </div>
                <button onClick={() => {
                    const _cart = newCart.map((product, cartIndex) => {
                      return cartIndex === index
                        ? { ...product, quantity: product.quantity - 1 }
                        : product;
                    });
                    setNewCart(_cart);
                  }} >-</button>
                <div>
                  <p>{product.price * product.quantity}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
