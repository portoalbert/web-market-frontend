import React from "react";
import { Link } from "react-router-dom";
import ShopCard from "./ShopCard";
import { useEffect, useState } from "react";

export default function ItemList(props) {
  const [mongoItems, setMongoItems] = useState([]);
  const urlId = props.id;
  const fetchData = async () => {
    const response = await fetch(`http://localhost:8080/item/${urlId}`);
    const data = await response.json();
    setMongoItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="itemlistmain">
      <div className="toplinks">
        <span>
          <Link to="/">
            <button>Back</button>
          </Link>
        </span>
        <div className="itemgrid">
          {mongoItems.map((item, index) => (
            <ShopCard
              name={item.name}
              description={item.description}
              price={item.price}
              picture={item.picture}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
