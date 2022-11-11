import React from "react";
import tempPic from "../img/placeholder.png";

export default function ShopCard() {
  return (
    <div className="shopcard">
      <img src={tempPic} alt="Temporary" />
      <h3>Item Name</h3>
      <h4>Item discription</h4>
      <h4>Item Price</h4>
    </div>
  );
}
