import React from "react";
import "../styles/form.scss";
import { Link } from "react-router";

const Login = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <input type="text" name="username" placeholder="Enter username" />
          <input type="password" name="password" placeholder="Enter password" />
          <button>Submit Now</button>

          <p>
            Don't have an account?{" "} <Link className="toggleAuth" to="/Register"> Register</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
