import React from "react";
import { Link } from "react-router";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  // using stateVariables (hooks) for managing state of form-inputs
  // for performing two-way binding
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  // fetching Login from hook's layer
  const { handleRegister } = useAuth();

  // function for handling preventDefault() behaviour and for calling api using axios
  async function handleSubmit(e) {
    e.preventDefault();
    handleRegister(username, email, password).then((res) => {
      console.log(res);
      
    });

    // // using axios for calling api
    // axios
    //   .post(
    //     "http://localhost:3000/api/auth/register",
    //     {
    //       username,
    //       email,
    //       password,
    //     },
    //     // we pass this object, which is used to set data in cookies
    //     {
    //       withCredentials: true,
    //     },
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //   });
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => {
              setusername(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="Enter username"
          />
          <input
            onInput={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            name="email"
            placeholder="Enter Email"
          />
          <input
            onInput={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Enter Password"
          />
          <button>Submit Now</button>
        </form>

        <p>
          Already have an account?{" "}
          <Link className="toggleAuth" to="/Login">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
