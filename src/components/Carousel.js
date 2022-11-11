import React, { useEffect } from "react";
import { useState } from "react";
import getArray from "../assets/PRODUCTSARRAY.JS";

import tempPic from "../img/placeholder.png";
const PRODUCTSARRAY = [
  {
    name: "Product1",
    price: 9.99,
    description: "Placeholder description",
    image: tempPic,
  },
  {
    name: "Product2",
    price: 9.99,
    description: "Placeholder description",
    image: tempPic,
  },
  {
    name: "Product3",
    price: 9.99,
    description: "Placeholder description",
    image: tempPic,
  },
  {
    name: "Product4",
    price: 9.99,
    description: "Placeholder description",
    image: tempPic,
  },
  {
    name: "Product5",
    price: 9.99,
    description: "Placeholder description",
    image: tempPic,
  },
  {
    name: "Product6",
    price: 9.99,
    description: "Placeholder description",
    image: tempPic,
  },
];

export default function Carousel() {
  const [currentCards, setCurrentCards] = useState([]);
  const [nextCards, setNextCards] = useState([]);
  const [carouselToggle, setCarouselToggle] = useState(true);

  function cardShuffler() {
    const tempArray = [];
    const tempArrayTwo = [];
    tempArray.push(PRODUCTSARRAY[0]);
    tempArray.push(PRODUCTSARRAY[1]);
    tempArray.push(PRODUCTSARRAY[2]);
    tempArrayTwo.push(PRODUCTSARRAY[3]);
    tempArrayTwo.push(PRODUCTSARRAY[4]);
    tempArrayTwo.push(PRODUCTSARRAY[5]);
    setCurrentCards(tempArray);
    setNextCards(tempArrayTwo);
  }
  function onClickHandler() {
    if (carouselToggle === true) {
      setCarouselToggle(false);
    } else {
      setCarouselToggle(true);
    }
  }
  useEffect(() => {
    cardShuffler();
  }, []);
  return (
    <div className="carouselmain">
      <button onClick={() => onClickHandler()} id="buttonleft">
        {" "}
        Left{" "}
      </button>
      {carouselToggle ? (
        <div className="carousel">
          {currentCards.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt="Placeholder " />
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
            </div>
          ))}
        </div>
      ) : (
        <div className="carousel">
          {nextCards.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt="Placeholder " />
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => onClickHandler()} id="buttonright">
        Right
      </button>
    </div>
  );
}
