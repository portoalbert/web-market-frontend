import React from "react";
import tempPic from "../img/placeholder.png";

export default function ShopCard(props) {
  return (
    <div className="shopcard">
      <div className="shoptopdiv">
        <img src={props.picture} alt="Temporary" />
      </div>
      <div className="text">
        <h4>${props.price} </h4>
        <h3> {props.name} </h3>
        <h4>{props.description} </h4>
      </div>
    </div>
  );
}
