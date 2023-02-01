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
    try {
      const response = await fetch(
        "https://web-market-backend.onrender.com/carousel"
      );
      const data = await response.json();
      cardShuffler(data);
      setCarouselList(data);
    } catch {
      console.log("Erro fetching carousel");
    }
  };

  function cardShuffler(myarray) {
    const tempArray = [];
    const tempArrayTwo = [];
    tempArray.push(myarray[0]);
    tempArray.push(myarray[1]);
    tempArray.push(myarray[2]);
    tempArrayTwo.push(myarray[3]);
    tempArrayTwo.push(myarray[4]);
    tempArrayTwo.push(myarray[5]);
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
    fetchData();
  }, []);
  return (
    <div className="carouselmain">
      <button onClick={() => onClickHandler()} id="buttonleft">
        <img src={arrowIconLeft} alt="Placeholder " />
      </button>
      {carouselToggle ? (
        <div className="carousel firstslide">
          {currentCards.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.picture} alt="Placeholder " />
              <div className="cardtext">
                <h3>{item.name}</h3>
                <h4>${item.price}</h4>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="carousel secondslide">
          {nextCards.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.picture} alt="Placeholder " />
              <div className="cardtext">
                <h3>{item.name}</h3>
                <h4>${item.price}</h4>
              </div>
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
