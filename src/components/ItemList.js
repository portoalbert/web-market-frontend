import React from "react";
import { Link } from "react-router-dom";
import ShopCard from "./ShopCard";

export default function ItemList() {
  return (
    <div className="itemlistmain">
      <div className="toplinks">
        <Link to="/">Back</Link>
        <div className="itemgrid">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>
    </div>
  );
}
