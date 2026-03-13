import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./features/auth/pages/login";
import Register from "./features/auth/pages/Register";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* creating dummy api for now */}
        <Route path="/" element={<h1>Welcome to the App </h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
