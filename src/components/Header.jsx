import "../components/Header.css";
import { BsFillCartFill } from "react-icons/bs";
import React, { useState } from "react";

function Header(props) {

  const [className , setClassName] = useState("smallCartMain")

  return (
    <>
      <nav>
        <div>
          <h1
            onClick={() => {
              props.setChangePage(false);
              setClassName("smallCartMain")
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
            setClassName("hideme")
          }}
        >
          <div>
             {/* <img src="icons8-shopping-cart-30.png" alt="icon" /> */}
            <img src="146-basket-trolley-shopping-card-outline.gif" alt="" srcset="" style={{width:"50px"}} />
          </div>
          <span className="itemCounterNav">{props.cartItemNumber}</span>
        </div>

        <div   className={className} >
          <div className="smallCartHeadings" onClick={()=>{setClassName("hideme")}}>
            <div className="smallCartIcon">
              {/* <BsFillCartFill /> */}
              <img src="146-basket-trolley-shopping-card-outline.gif" alt="" srcset="" style={{width:"40px"}} />

              
            </div>
            <div className="smallCartTotal">
              Total: 
              <span>
                Rs.{props.cart
                  .map((product) => product.price * product.quantity)
                  .reduce((total, currentValue) => total + currentValue, 0)}
                  </span>
              
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
                      <p>Rs.{products.price * products.quantity}</p>
                    </div>
                  </>
                );
              })}
            </h1>
          </div>
          <button className="smallCheckoutButton"  onClick={()=>{props.setChangePage(true)
          setClassName("hideme")
          }} >Check out</button>
        </div>
      </nav>
    </>
  );
}

export default Header;
