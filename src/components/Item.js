import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setCart] = useState(false)
  const cartStatus = isInCart ? "in-cart" : "";

  function handleCartAdd() {
    setCart(isInCart => !isInCart)
  }

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick= {handleCartAdd} 
        className={isInCart ? "remove" : "add"}>
        {isInCart ? "Remove From Cart" : "Add To Cart"}
      </button>
    </li>
  );
}

export default Item;
