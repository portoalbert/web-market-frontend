import React from "react";

export default function Login() {
  return (
    <div className="loginmain">
      <h1>Login</h1>
      <form className="login">
        <div>
          <input type="text" name="username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit"> Login</button>
      </form>
    </div>
  );
}
