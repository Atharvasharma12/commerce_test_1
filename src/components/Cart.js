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
    <>
      <div>
        {newCart.map((product, index) => {
          return (
            <div className="main" key={index}>
              <div>
                <div className="card">
                  <div>
                    <img
                      src={product.url}
                      alt="img"
                      className="productimg"
                    ></img>
                  </div>

                  <div>
                    <h3>{product.name}</h3>
                  </div>
                  <div>
                    <p>
                      {" "}
                      Rs.<b>{product.price * product.quantity}</b> /-
                    </p>
                  </div>
                  <div>
                    <p>{product.description}</p>
                  </div>

                  <div className="add-to-delete">
                    <button
                      id="plus"
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
                      id="minus"
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
                    <div>
                      <button
                        id="dustbin"
                        onClick={() => {
                          handelDelete(product);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="total">
        <div>
          Total = Rs.
          <b>
            {newCart
              .map((product) => product.price * product.quantity)
              .reduce((total, currentValue) => total + currentValue, 0)}
          </b>
        </div>
        <div className="checkout">
          <span>check out</span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
