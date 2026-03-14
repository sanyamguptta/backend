// importing { RouterProvider } for using router  
import { RouterProvider } from "react-router"
import router from './app.routes.jsx';
// importing global scss file
import './features/shared/global.scss';
// imprting AuthProvider for managing all states
import { AuthProvider } from "./features/auth/auth.context.jsx";

function App() {

  return (
    // wrapping application inside AuthProvider
    <AuthProvider> 
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App
