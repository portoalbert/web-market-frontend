import React, { useEffect } from "react";
import { useState } from "react";
import getArray from "../assets/PRODUCTSARRAY.JS";
import arrowIconLeft from "../img/leftarrow.png";
import arrowIconRight from "../img/rightarrow.png";

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
  const [carouselList, setCarouselList] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/");
    const data = await response.json();
    setCarouselList(data);
    console.log(carouselList, "Carousel List");
  };
  function cardShuffler() {
    const tempArray = [];
    const tempArrayTwo = [];
    tempArray.push(carouselList[0]);
    tempArray.push(carouselList[1]);
    tempArray.push(carouselList[2]);
    tempArrayTwo.push(carouselList[3]);
    tempArrayTwo.push(carouselList[4]);
    tempArrayTwo.push(carouselList[5]);
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
    console.log("fetching data");
    fetchData();
    cardShuffler();
  }, []);
  return (
    <div className="carouselmain">
      <button onClick={() => onClickHandler()} id="buttonleft">
        <img src={arrowIconLeft} alt="Placeholder " />
      </button>
      {carouselToggle ? (
        <div className="carousel">
          {currentCards.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.picture} alt="Placeholder " />
              <h3>{item.name}</h3>
              <h4>${item.price}</h4>
            </div>
          ))}
        </div>
      ) : (
        <div className="carousel">
          {nextCards.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.picture} alt="Placeholder " />
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => onClickHandler()} id="buttonright">
        <img src={arrowIconRight} alt="Placeholder " />
      </button>
    </div>
  );
}
