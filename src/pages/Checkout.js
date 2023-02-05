import React, { useState } from "react";

export default function Checkout() {
  let testTotal = 0;
  const SAMPLELIST = [
    {
      _id: "6376f0b8b3008d6ef5fe83d0",
      name: "Adilette Comfort Slides",
      description: "Yoga",
      category: "men",
      price: 29,
      picture:
        "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/f77511d9098843e9bce9ad6e00cb75c8_9366/adilette-comfort-slides.jpg",
      __v: 0,
    },
    {
      _id: "6376f17fb3008d6ef5fe83d4",
      name: "Adilette Clogs",
      description: "Yoga",
      category: "men",
      price: 40,
      picture:
        "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/4021420ae680473a901bab730140d3b8_9366/adilette-clogs.jpg",
      __v: 0,
    },
    {
      _id: "6376f1a5b3008d6ef5fe83d6",
      name: "Forum Mid Shoes",
      description: "Originals",
      category: "kids",
      price: 110,
      picture:
        "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/19f8e8a2f6c74796b072ac5e003e93eb_9366/forum-mid-shoes.jpg",
      __v: 0,
    },
    {
      _id: "6376f1c1b3008d6ef5fe83d8",
      name: "Stan Smith SHoes",
      description: "Men's Originals",
      category: "men",
      price: 76,
      picture:
        "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/817c815ba1db46629f89ac210127bebb_9366/stan-smith-shoes.jpg",
      __v: 0,
    },
    {
      _id: "63dafd1dd784f62d8c96495a",
      name: "Talias Jacket",
      description: "Fancy Jacket",
      category: "women",
      price: 75,
      picture:
        "https://img.ltwebstatic.com/images3_pi/2022/09/27/1664247396916fe617f13371f3931bcc1e2e4d1c0c_thumbnail_900x.webp",
      __v: 0,
    },
  ];
  return (
    <div>
      <div className="inventorylist">
        {SAMPLELIST.map((item, index) => {
          testTotal += item.price;
          return (
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
                <h4>Price</h4>${item.price}
              </div>
              <div>
                Quantity
                <div id="invqnt">
                  <button className="cartqntbuttn">-</button>1
                  <button className="cartqntbuttn">+</button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="total">Total ${testTotal}</div>
      </div>
    </div>
  );
}
