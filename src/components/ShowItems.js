import "../components/Showitems.css";
import React from "react";
function ShowItems({ product, addToCart }) {
  return (
    <div className="display">
      {product.map((product, id) => {
        return (
          <div key={id} className="maindiv">
            
            <img src='https://api.lorem.space/image/book?w=150&h=220' style={{ width: "50%" }} alt="img"></img>
            <div className="eachproduct">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h5>Rs. {product.price} /-</h5>
              <button
                onClick={() => {
                  addToCart(product);
                  window.alert("item added");
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowItems;
