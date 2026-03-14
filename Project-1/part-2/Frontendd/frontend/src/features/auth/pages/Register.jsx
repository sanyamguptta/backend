import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Register = () => {

  // usestate hooks
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register(username, email, password) {
    const response = await axios.post("http://localhost:3000/register", {
      username,
      email,
      password,
    });

    return response;
  }

  // submitHandler
  async function submitHandler(e) {
    e.preventDefault();

    try {
      const response = await register(username, email, password);
      console.log(response);
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form 
        onSubmit={ submitHandler }>
          <input
          onChange={ (e) => {
            setUsername(e.target.value);
          }}
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
          />
          <input
          onChange={ (e) => {
            setEmail(e.target.value);
          }}
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email id"
          />
          <input
          onChange={ (e) => {
            setPassword(e.target.value);
          }}
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
          <button className='button primary-button'> Submit </button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>{" "}
        </p>

      </div>
    </main>
  );
}

export default Register