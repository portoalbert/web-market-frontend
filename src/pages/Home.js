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
            <button className="mainBtn">
              <span>
                <u>Men</u>
              </span>
            </button>
          </Link>
          <Link to="/women">
            <button className="mainBtn">
              {" "}
              <u>Women</u>{" "}
            </button>
          </Link>
          <Link to="/kids">
            <button className="mainBtn">
              <u>Kids</u>
            </button>
          </Link>
        </div>
      </div>
      <Carousel />
    </div>
  );
}
