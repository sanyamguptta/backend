// HOOK's LAYER
// manages & handles functions and & useState() which are created under STATE LAYER
import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";

// creating custom hook -> we can use useaAuth() to get access of all 4 hook's/functions
export function useAuth() {
    // using AuthContext in useContext
    const context = useContext(AuthContext);
    return context;
}