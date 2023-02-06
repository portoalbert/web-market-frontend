import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NewUser() {
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    picture: "",
  });
  const [resetData, setResetData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    picture: "",
  });
  async function submitHandler() {
    //Post (CREATE)
    const res = await fetch(
      "https://web-market-backend.onrender.com/add_user",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      }
    );
    setData(resetData);
    console.log(res.json());
  }
  function onChangeHandler(e) {
    e.preventDefault();
    const tempNewData = { ...data };
    tempNewData[e.target.id] = e.target.value;
    setData(tempNewData);
  }
  return (
    <div>
      <form action="post">
        <div>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={(e) => onChangeHandler(e)}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input
            type="text"
            name="Login"
            id="login"
            value={data.login}
            onChange={(e) => onChangeHandler(e)}
          />
          <label htmlFor="name">Login</label>
        </div>
        <div>
          <input
            type="text"
            name="password"
            id="password"
            value={data.password}
            onChange={(e) => onChangeHandler(e)}
          />
          <label htmlFor="name">Password</label>
        </div>
        <Link to="/new_user">
          <button type="submit" onClick={() => submitHandler()}>
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}
