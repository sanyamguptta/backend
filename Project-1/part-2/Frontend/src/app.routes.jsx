// THIS FILE IS USED FOR CREATING UI -> UI LAYER

import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Feed from "./features/posts/pages/Feed";
import CreatePost from "./features/posts/pages/CreatePost";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/Register',
        element: <Register />
    }, 
    {
        path: '/',
        element: <Feed />
    },
    {
        path: '/create-post',
        element: <CreatePost />,
    }
])

// importing & using it in App.jsx
export default router;

