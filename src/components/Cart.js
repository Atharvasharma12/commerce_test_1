import { useState, useEffect, React } from "react";
import "./Cart.css";

export default function Cart({ cart, setCart }) {
  const [newCart, setNewCart] = useState([]);

  useEffect(() => {
    // console.log("cart list copied")

    setNewCart(cart);
  }, [cart]);

  const handelDelete = (product) => {
    window.alert(`do you want to remove ${product.name}`);

    const dcart = newCart.filter((newCart) => {
      return newCart.id !== product.id;
    });
    setCart(dcart);
  };

  return (
    <div>
      <div>
        <p>
          Total =
          {newCart
            .map((product) => product.price * product.quantity)
            .reduce((total, currentValue) => total + currentValue, 0)}
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
                    setCart(_cart);
                    // console.log("product updated");
                  }}
                >
                  +
                </button>
                <div>
                  <p>{product.quantity}</p>
                </div>
                <button
                  onClick={() => {
                    if (product.quantity > 1) {
                      const _cart = newCart.map((product, cartIndex) => {
                        return cartIndex === index
                          ? { ...product, quantity: product.quantity - 1 }
                          : product;
                      });
                      setCart(_cart);
                    } else {
                      // console.log(product.index);
                      window.alert(`do you want to remove ${product.name}`);

                      const rcart = newCart.filter((newCart) => {
                        return product.id !== newCart.id;
                      });
                      // setNewCart(rcart)
                      setCart(rcart);
                      // console.log(cart[index].id , newCart[index].id)
                      // console.log(newCart[index].id,cart[index].id)
                      // console.log(rcart)
                    }
                  }}
                >
                  -
                </button>

                <button
                  onClick={() => {
                    handelDelete(product);
                  }}
                >
                  Delete
                </button>

                <div>
                  <p> Rs.{product.price * product.quantity} /-</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
