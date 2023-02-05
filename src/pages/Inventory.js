import React from "react";
import { useEffect, useState } from "react";

export default function Inventory() {
  const [formItem, setFormItem] = useState({});
  const [itemId, setItemId] = useState("");
  const [inventorList, setInventoryList] = useState([]);
  const [carouselList, setCarouselList] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://web-market-backend.onrender.com/");
    const secondResponse = await fetch(
      "https://web-market-backend.onrender.com/carousel"
    );
    const data = await response.json();
    const carouselData = await secondResponse.json();
    console.log(data);
    setInventoryList(data);
    setCarouselList(carouselData);
  };

  const editHandler = async (id) => {
    const res = await fetch(
      `https://web-market-backend.onrender.com/item/${id}`,
      {
        method: "POST",
      }
    );
    // fetchData();
  };

  async function removeHandler(id) {
    console.log(id);
    const res = await fetch(
      `https://web-market-backend.onrender.com/item/${id}`,
      {
        method: "DELETE",
      }
    );

    fetchData();

    const data = await res.json();
    if (data.acknowledged === true) {
      return alert("Item Deleted Successfully");
    }
  }

  // Arrow Function vs Named Function

  const handleSave = async () => {
    const res = await fetch(
      `https://web-market-backend.onrender.com/item/${itemId}`,
      {
        method: "POST",
        body: formItem,
      }
    );
  };

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="inventorylist">
      {inventorList.map((item, index) => {
        const isEditing = item._id === itemId;
        return (
          <div key={item._id} className="inventorylistitem">
            <div>
              <img src={item.picture} alt="item" />
            </div>
            {isEditing ? (
              <input
                defaultValue={item.name}
                name="name"
                onChange={handleChange}
              />
            ) : (
              <div>
                <h4>Name</h4>
                {item.name}
              </div>
            )}
            <div>
              <h4>Description</h4>
              {item.description}
            </div>
            <div>
              <h4>Category</h4>
              {item.category}
            </div>
            <div>
              <h4>Price</h4>${item.price}
            </div>
            {isEditing ? (
              <div>
                <button type="submit" onClick={() => handleSave()}>
                  Save
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => {
                    setItemId(item._id);
                  }}
                >
                  Edit
                </button>
              </div>
            )}
            <div>
              <button
                onClick={() => removeHandler(item._id)}
                style={{ background: "red" }}
              >
                Remove
              </button>
            </div>
            {isEditing ? (
              <div>
                <button
                  onClick={() => {
                    setItemId("");
                  }}
                >
                  Cancel
                </button>
              </div>
            ) : null}
          </div>
        );
      })}
      <div className="popedit">Carousel Items</div>
      {carouselList.map((item, index) => {
        const isEditing = item._id === itemId;
        return (
          <div key={item._id} className="inventorylistitem">
            <div>
              <img src={item.picture} alt="item" />
            </div>
            {isEditing ? (
              <input
                defaultValue={item.name}
                name="name"
                onChange={handleChange}
              />
            ) : (
              <div>
                <h4>Name</h4>
                {item.name}
              </div>
            )}
            <div>
              <h4>Description</h4>
              {item.description}
            </div>
            <div>
              <h4>Category</h4>
              {item.category}
            </div>
            <div>
              <h4>Price</h4>${item.price}
            </div>
            {isEditing ? (
              <div>
                <button
                  type="submit"
                  // onClick={() => handleSave()}
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => {
                    // setItemId(item._id);
                  }}
                >
                  Edit
                </button>
              </div>
            )}
            <div>
              <button
                // onClick={() => removeHandler(item._id)}
                style={{ background: "red" }}
              >
                Remove
              </button>
            </div>
            {isEditing ? (
              <div>
                <button
                  onClick={() => {
                    // setItemId("");
                  }}
                >
                  Cancel
                </button>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
