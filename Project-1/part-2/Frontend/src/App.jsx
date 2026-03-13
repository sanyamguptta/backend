import { RouterProvider } from "react-router"
import AppRoutes from "./AppRoutes"
import './style.scss'
// AuthProvider for importing all functions & useState() hooks
import { AuthProvider } from "./features/auth/auth.context.jsx";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App
