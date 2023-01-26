import "../components/Header.css";
import { BsFillCartFill } from "react-icons/bs";
import React from "react";
function Header(props) {
  return (
    <>
      <nav>
        <div>
          <h1
            onClick={() => {
              props.setChangePage(false);
            }}
            className="pointer"
          >
            QuickShop
          </h1>
        </div>

        <div
          className="cartdiv pointer"
          onClick={() => {
            props.setChangePage(true);
          }}
        >
          <div>
            <img src="icons8-shopping-cart-30.png" alt="icon" />
          </div>
          <span className="itemCounterNav">{props.cartItemNumber}</span>
        </div>

        <div className="smallCartMain">
          <div className="smallCartHeadings">
            <div className="smallCartIcon">
              <BsFillCartFill />
            </div>
            <div className="smallCartTotal">
              Total : 
              
                {props.cart
                  .map((product) => product.price * product.quantity)
                  .reduce((total, currentValue) => total + currentValue, 0)}
              
            </div>
          </div>
          <div className="smallCartLine"></div>
          <div className="smallCartProducts">
            <h1>
              {props.cart.map((products) => {
                return (
                  <>
                    <div className="eachProductInSmallCart">
                      <img src={products.url} alt="img"></img>
                      <p>{products.name}</p>
                      <p>{products.quantity}</p>
                      <p>Rs.{products.price}</p>
                    </div>
                  </>
                );
              })}
            </h1>
          </div>
          <button className="smallCheckoutButton">Check out</button>
        </div>
      </nav>
    </>
  );
}

export default Header;
