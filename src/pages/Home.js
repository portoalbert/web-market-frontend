import React from "react";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="MainContent">
      <div className="hometitle">
        <h1>Welcome to Web Market</h1>
        <h2>Where shopping is a pleasure</h2>
        <h3>Sign up today for exclusive deals</h3>
      </div>
      <div className="homelinks">
        <h2>Shop By Category</h2>
        <div className="homelinkslist">
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
      </div>
      <Carousel />
    </div>
  );
}
