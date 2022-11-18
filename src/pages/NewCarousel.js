import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NewCarousel() {
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    picture: "",
  });
  const [resetData, setResetData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    picture: "",
  });
  async function submitHandler() {
    //Post (CREATE)
    const res = await fetch("http://localhost:8080/add_item_carousel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    setData(resetData);
    console.log(res.json());
  }
  function onChangeHandler(e) {
    e.preventDefault();
    const tempNewData = { ...data };
    tempNewData[e.target.id] = e.target.value;
    setData(tempNewData);
  }
  return (
    <div>
      <form action="post">
        <div>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={(e) => onChangeHandler(e)}
          />
          <label htmlFor="name">Name of Item</label>
        </div>
        <div>
          <input
            type="text"
            name="description"
            id="description"
            value={data.description}
            onChange={(e) => onChangeHandler(e)}
          />
          <label htmlFor="name">Description</label>
        </div>
        <div>
          <input
            type="text"
            name="category"
            id="category"
            value={data.category}
            onChange={(e) => onChangeHandler(e)}
          />
          <label htmlFor="name">Category</label>
        </div>
        <div>
          <input
            type="number"
            name="price"
            id="price"
            value={data.price}
            onChange={(e) => onChangeHandler(e)}
          />
          <label htmlFor="name">Price</label>
        </div>
        <div>
          <input
            type="text"
            name="picture"
            id="picture"
            value={data.picture}
            onChange={(e) => onChangeHandler(e)}
          />
          <label htmlFor="name">Picture URL</label>
        </div>
        <Link to="/newitemcarousel">
          <button type="submit" onClick={() => submitHandler()}>
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}
