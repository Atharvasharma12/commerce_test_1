import "../components/Showitems.css";
import React from "react";

function ShowItems({ product, addToCart , cart , addToCartButton}) {

 

  return (
    <div className="display">
      {product.map((product, id) => {
      
        
        return (
          <div key={id} className="maindiv">
            <img src={product.url} style={{ width: "50%" }} alt="img"></img>
            <div className="eachproduct">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h5>Rs. {product.price} /-</h5>
              <button
                onClick={() => {
                  addToCartButton(product)
                  addToCart(product);
                  // window.alert(`${product.name} item added`);
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
