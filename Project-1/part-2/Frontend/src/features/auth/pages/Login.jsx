import React, { useState } from "react";
import "../styles/form.scss";
import { Link, useNavigate} from "react-router-dom";


// THIS UI LAYER ONLY CARES ABOUT HOOK's LAYER (& not about api or state layer)
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  // fetching Login from hook's layer
  const { handleLogin, loading } = useAuth(); // handleLogin() function
  const navigate = useNavigate(); // for navigating 

  if(loading) {
    return <h1>Loading...</h1>
  }

  function submitHandler(e) {
    e.preventDefault();
    handleLogin(username, password)
    .then( (res) => {
      console.log(res)
      navigate('/'); // navigating to home page after successful login
    })

    // axios
    //   .post(
    //     "http://localhost:3000/api/auth/login",
    //     {
    //       username,
    //       password,
    //     },
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
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => {
              setusername(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="Enter username"
          />
          <input
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <button type="submit">Submit Now</button>

          <p>
            Don't have an account?{" "}
            <Link className="toggleAuth" to="/Register">
              {" "}
              Register
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
