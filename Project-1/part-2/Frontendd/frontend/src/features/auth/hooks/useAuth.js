// for managing both state and api layer -> HOOK's LAYER
// means, coming of api data (as response) & storing it through a STATE LAYER

import { useContext } from "react";
import { AuthContext } from "../auth.context";
// importing all api functions
import { login, register, getMe} from '../services/auth.api';

// creating custom hooking containing all states and functions
export const useAuth = () => {
    
    const context = useContext(AuthContext);
    // destructuring value of context
    const { user, setUser, loading, setLoading } = context;

    // calling login function
    const handleLogin = async (username, password) => {
        setLoading(true);
        const response = await login(username, password);
        setUser(response.user);
        setLoading(false);
    }

    const handleRegister = async (username, email, password) => {
        setLoading(true);
        const response = await register(username, email, password);
        setUser(response.user);
        setLoading(false);
    }

    // returning user, loading, handleLogin() and handleRegister()
    return {
        user,
        loading,
        handleLogin,
        handleRegister
    }


}