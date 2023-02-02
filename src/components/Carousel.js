import React, { useEffect } from "react";
import { useState } from "react";
import arrowIconLeft from "../img/leftarrow.png";
import arrowIconRight from "../img/rightarrow.png";

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
    clearTimeout();
    setTimeout(() => onClickHandler(), 7000); ///Added timer to carousel
    if (carouselToggle === true) {
      setCarouselToggle(false);
      return;
    } else {
      setCarouselToggle(true);
      return;
    }
  }
  useEffect(() => {
    fetchData();
    setTimeout(() => onClickHandler(), 5000);
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
