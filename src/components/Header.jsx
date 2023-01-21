import "../components/Header.css";
import React from "react";
function Header(props) {
  return (
    <>
      <nav>
        <div>
          <h1 onClick={ ()=>{props.setChangePage(false)}} className = "pointer">QuickShop</h1>
        </div>


        <div className="cartdiv">

        <div onClick={ ()=>{props.setChangePage(true)}} className = "pointer">
        Cart ( {props.cartItemNumber} items )
        </div>
        <div>
          <img src="icons8-shopping-cart-30.png"  alt="icon" />
        </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
