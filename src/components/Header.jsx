import "../components/Header.css";
import React from "react";
function Header(props) {
  return (
    <>
      <nav>
        <div>
          <h1 onClick={ ()=>{props.setChangePage(false)}} className = "pointer">QuickShop</h1>
        </div>
        <div onClick={ ()=>{props.setChangePage(true)}} className = "pointer">Cart ( {props.cartItemNumber} items )</div>
      </nav>
    </>
  );
}

export default Header;
