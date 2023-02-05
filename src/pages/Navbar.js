import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginIcon from "../img/login.png";
import wishListIcon from "../img/wishlist.png";
import cartIcon from "../img/cart.png";
import logoIcon from "../img/logo1.png";
import iconAdm from "../img/adminicon.avif";

export default function Navbar() {
  const SAMPLELIST = [
    {
      _id: "6376f0b8b3008d6ef5fe83d0",
      name: "Adilette Comfort Slides",
      description: "Yoga",
      category: "men",
      price: 28,
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
  const itemQnt = SAMPLELIST.length;
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logoIcon} alt="" />
        </Link>
        <Link to="/">
          <h3>Web Market</h3>
        </Link>
      </div>
      <div className="links">
        <Link to="/men">
          <u>Men</u>
        </Link>
        <Link to="/women">
          <u>Women</u>
        </Link>
        <Link to="/kids">
          <u>Kids</u>
        </Link>
      </div>
      <div className="search">
        <input type="text" name="search" placeholder="Search" />
        <Link to="/login">
          <img src={loginIcon} alt="Login Icon" />
        </Link>
        <Link to="/wishlist">
          <img src={wishListIcon} alt="Wish List Icon" />
        </Link>

        <div className="cart">
          <Link to="/checkout">
            <img src={cartIcon} alt="Shopping Cart" />
            <h4 id="itemqnt">{itemQnt}</h4>
          </Link>
        </div>
        <Link to="/admin">
          <img src={iconAdm} alt="Admin" />
        </Link>
      </div>
    </div>
  );
}
