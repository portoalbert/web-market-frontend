import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">Your Logo Here</div>
        <div className="links">
          <a>Men</a>
          <a>Women</a>
          <a>Kids</a>
        </div>
        <div className="search">
          <input type="text" name="search" placeholder="Search" />
        </div>
      </div>
    );
  }
}
