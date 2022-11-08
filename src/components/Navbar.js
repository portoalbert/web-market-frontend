import React from "react";
import { Link } from "react-router-dom";
import loginIcon from "../img/login.png";
import wishListIcon from "../img/wishlist.png";
import cartIcon from "../img/cart.png";

export default function Navbar() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Your Logo Here</Link>
      </div>
      <div className="links">
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
      </div>
      <div className="search">
        <input type="text" name="search" placeholder="Search" />
        <img src={loginIcon} alt="Login Icon" />
        <img src={wishListIcon} alt="Wish List Icon" />
        <img src={cartIcon} alt="Shopping Cart" />
      </div>
    </div>
  );
}
