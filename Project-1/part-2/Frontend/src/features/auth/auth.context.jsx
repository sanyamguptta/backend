// STATE LAYER
// THIS FILE IS USED TO CREATE STATE LAYER -> manages state

// setting up of createContext & using hooks
import { createContext, useState, useEffect } from "react";
// importing all 3 functions
import { login, register, getMe } from "./services/auth.api";

// creating context
export const AuthContext = createContext();
// using AuthProvider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // assuming /. bcz no user is logged in from starting
  const [loading, setLoading] = useState(false); //loading state should be true in starting

  const handleLogin = async (username, password) => {
    // setting loading state as true until api response comes
    setLoading(true);
    // using wrapper as try catch for fetching api response
    try {
      const response = await login(username, password);
      setUser(response.user);
      return response;
    } catch (err) {
      console.log(err);
    } finally {
      // finally setting loading as false again
      setLoading(false);
    }
  };

  const handleRegister = async (username, email, password) => {
    setLoading(true);
    try {
      const response = await register(username, email, password);
      setUser(response.user);
      return response;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, handleRegister, handleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}
