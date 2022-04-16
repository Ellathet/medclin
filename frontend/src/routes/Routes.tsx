import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "../pages/login/Login";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
