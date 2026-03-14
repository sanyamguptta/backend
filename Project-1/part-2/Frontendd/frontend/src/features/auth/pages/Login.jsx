import React, { useState } from "react";
// importing style
import "../style/form.scss";
import { Link } from "react-router";
// importing custom hook containing all states and fucntions
import { useAuth } from "../hooks/useAuth";
// importing useNavigate()
import { useNavigate } from "react-router";

const Login = () => {
  // destructuring all 4 from useAuth()
  const { user, loading, handleLogin } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // // function for login
  // async function login(username, password) {
  //   const response = await axios.post("http://localhost:3000/login", {
  //     username,
  //     password,
  //   });

  //   return response;
  // }

  // declaring variable for navigation
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();

    await handleLogin(username, password);
    // console.log('user logged in')
    navigate("/");

    // // calling api by calling login() function
    // try {
    //   const response = await login(username, password);
    //   console.log(response)
    // }
    // catch(err) {
    //   console.log(err);
    // }
  }

  // showing loading in <h1> until api is in pending
  if(loading) {
    return(
      <main>
        <h1>Loading...</h1>
      </main>
    )
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
};;

export default Login;
