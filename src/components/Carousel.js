import React, { useEffect } from "react";
import { useState } from "react";
import getArray from "../assets/PRODUCTSARRAY.JS";

export default function Carousel() {
  const [currentCards, setCurrentCards] = useState([]);

  function cardShuffler() {
    const tempArray = [];
    tempArray.push(getArray[0]);
    tempArray.push(getArray[1]);
    tempArray.push(getArray[2]);
    setCurrentCards(tempArray);
    console.log("current cards", currentCards);
    console.log(getArray[0]);
  }
  useEffect(() => {
    cardShuffler();
  }, []);
  return (
    <div className="carousel">
      {currentCards.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} alt="Placeholder " />
          <h3>{item.name}</h3>
          <h4>{item.price}</h4>
        </div>
      ))}
    </div>
  );
}
