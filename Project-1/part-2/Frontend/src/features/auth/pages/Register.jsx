import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form>
          <input type="text" name="username" placeholder="Enter username" />
          <input type="email" name="email" placeholder="Enter Email" />
          <input type="password" name="password" placeholder="Enter Password" />
          <button>Submit Now</button>
        </form>

        <p>
          Already have an account? <Link className="toggleAuth" to="/Login">Login</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
