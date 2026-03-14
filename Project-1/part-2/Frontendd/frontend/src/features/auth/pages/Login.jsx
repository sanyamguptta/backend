import React, { useState } from "react";
// importing style
import "../style/form.scss";
import { Link } from "react-router";
// for apis
import axios from 'axios';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // function for login
  async function login(username, password) {
    const response = await axios.post("http://localhost:3000/login", {
      username,
      password,
    });

    return response;
  }

  async function submitHandler(e) {
    e.preventDefault();

    // calling api by calling login() function
    try {
      const response = await login(username, password);
      console.log(response)
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            required
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            required
          />
          <button className="button primary-button"> Submit </button>
        </form>

        <p>
          Don't have an account? <Link to="/register">Register</Link>{" "}
        </p>
      </div>
    </main>
  );
};

export default Login;
