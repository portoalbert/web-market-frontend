import React, { useEffect, useState } from "react";

export default function Checkout() {
  const [sampleList, setSampleList] = useState([
    {
      _id: "6376f0b8b3008d6ef5fe83d0",
      name: "Adilette Comfort Slides",
      description: "Yoga",
      category: "men",
      price: 29,
      picture:
        "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/f77511d9098843e9bce9ad6e00cb75c8_9366/adilette-comfort-slides.jpg",
      __v: 0,
      quantity: 1,
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
      quantity: 1,
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
      quantity: 1,
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
      quantity: 1,
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
      quantity: 1,
    },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  const bagItemQnt = sampleList.length;
  const onClickHandlerPlus = (id, sign) => {
    const tempArray = [];
    sampleList.map((item) => {
      if (item._id === id) {
        item.quantity++;
      }
      tempArray.push(item);
      return console.log;
    });
    setSampleList(tempArray);
    totalPriceChecker();
  };
  const onClickHandlerMinus = (id) => {
    const tempArray = [];
    sampleList.map((item) => {
      if (item._id === id) {
        item.quantity--;
      }
      tempArray.push(item);
      return console.log;
    });
    setSampleList(tempArray);
    totalPriceChecker();
  };
  function totalPriceChecker() {
    let tempTotal = 0;
    sampleList.map((item) => (tempTotal += item.price * item.quantity));
    setTotalPrice(tempTotal);
  }
  useEffect(() => {
    totalPriceChecker();
  }, []);
  return (
    <div>
      <div className="checkouttitle">
        <h1>YOUR BAG</h1>
        <h3>
          Total: ({bagItemQnt} Items) <b>${totalPrice.toFixed(2)}</b>{" "}
        </h3>
        <h4>
          Items in your bag are not reserved — check out now to make them yours.
        </h4>
      </div>
      <div className="checkoutlist">
        {sampleList.map((item, index) => {
          return (
            <div key={item._id} className="checkoutlistitem">
              <div className="checkoutleft">
                <img src={item.picture} alt="item" />
              </div>

              <div className="checkoutright">
                <div className="checkoutrightdescription">
                  <div>{item.name}</div>
                  <div>{item.description}</div>
                  <div>
                    <h4>Category</h4>
                    {item.category}
                  </div>
                </div>
                <div className="checkoutqnt">
                  <div id="invqnt">
                    <button
                      className="cartqntbuttn"
                      onClick={() => onClickHandlerMinus(item._id)}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="cartqntbuttn"
                      onClick={() => onClickHandlerPlus(item._id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="itemtotal">${item.price * item.quantity}</div>
              </div>
            </div>
          );
        })}
        <div className="total">
          <div className="totalwrapper">
            <h2>ORDER SUMMARY</h2>
            <div className="totallineone">
              <div>
                {" "}
                <h4>{bagItemQnt} items</h4>
              </div>
              <div>${totalPrice.toFixed(2)}</div>
            </div>
            <div className="totallinetwo">
              <h4>Sales Tax</h4>
              <div>-</div>
            </div>
            <div className="totallinethree">
              <h4>Delivery </h4> <span> FREE </span>
            </div>
            <h3>Total ${totalPrice.toFixed(2)}</h3>
          </div>
          <div className="buy">
            <button
              onClick={() => {
                alert("Service Unavailable, Please try again in 5 minutes");
              }}
            >
              BUY IT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
