import "../components/Header.css";
import React from "react";
function Header(props) {
  return (
    <>
      <nav>
        <div>
          <h1 onClick={ ()=>{props.setChangePage(false)}} >QuickShop</h1>
        </div>
        <div onClick={ ()=>{props.setChangePage(true)}} >Cart ( {props.cartItemNumber} items )</div>
      </nav>
    </>
  );
}

export default Header;
