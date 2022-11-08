import React from "react";
import { Link } from "react-router-dom";

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
      </div>
    </div>
  );
}
