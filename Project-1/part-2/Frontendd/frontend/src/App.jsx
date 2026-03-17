// importing { RouterProvider } for using router  
import { RouterProvider } from "react-router"
import router from './app.routes.jsx';
// importing global scss file
import './features/shared/global.scss';
// imprting AuthProvider for managing all states
import { AuthProvider } from "./features/auth/auth.context.jsx";
import { PostContextProvider } from "./features/posts/post.context.jsx";

function App() {

  return (
    // wrapping application inside AuthProvider
    <AuthProvider>
      <PostContextProvider>
        <RouterProvider router={router} />
      </PostContextProvider>
    </AuthProvider>
  );
}

export default App
