// THIS FILE IS USED FOR CREATING UI -> UI LAYER

import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/Register',
        element: <Register />
    }
])

// importing & using it in App.jsx
export default router;

