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
        <Link to="/checkout">
          <img src={cartIcon} alt="Shopping Cart" />
        </Link>
      </div>
    </div>
  );
}
