import React from "react";
import ItemList from "../components/ItemList";
import ShopCard from "../components/ShopCard";

export default function Men() {
  return (
    <div className="mainmen">
      <h1>Men</h1>
      <ItemList id="men" />
    </div>
  );
}
