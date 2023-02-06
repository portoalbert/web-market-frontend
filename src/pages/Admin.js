import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="adminmain">
      <h1>Admin Page</h1>
      <ul>
        <li>
          <Link to="/NewItem">
            <u>Add New Item</u>
          </Link>
        </li>

        <li>
          <Link to="/NewCarousel">
            <u>Add New Carousel Item</u>
          </Link>
        </li>
        <li>
          <Link to="/inventory">
            <u>Full Inventory</u>
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/new_user">
            <u>New User</u>
          </Link>
        </li>
      </ul>
    </div>
  );
}
