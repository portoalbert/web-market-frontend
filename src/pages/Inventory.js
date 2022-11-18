import React from "react";
import { useEffect, useState } from "react";

export default function Inventory() {
  const [inventorList, setInventoryList] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/");
    const data = await response.json();
    setInventoryList(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  async function editHandler(id) {
    // const res = await fetch(`http://localhost:8080/item/${id}`, {
    //   method: "POST",
    // });
    // fetchData();
  }
  async function removeHandler(id) {
    console.log(id);
    const res = await fetch(`http://localhost:8080/item/${id}`, {
      method: "DELETE",
    });
    fetchData();
    const data = await res.json();
    if (data.acknowledged === true) {
      return alert("Item Deleted Successfully");
    }
  }
  return (
    <div className="inventorylist">
      {inventorList.map((item, index) => (
        <div key={item._id} className="inventorylistitem">
          <div>
            <img src={item.picture} alt="item" />
          </div>
          <div>
            <h4>Name</h4>
            {item.name}
          </div>
          <div>
            <h4>Description</h4>
            {item.description}
          </div>
          <div>
            <h4>Category</h4>
            {item.category}
          </div>
          <div>
            <h4>Price</h4>
            {item.price}
          </div>
          <div>
            <button onClick={() => editHandler(item._id)}>Edit</button>
          </div>
          <div>
            <button
              onClick={() => removeHandler(item._id)}
              style={{ background: "red" }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
