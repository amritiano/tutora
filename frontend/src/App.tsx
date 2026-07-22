import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Teaching from "./pages/Teaching";
import Report from "./pages/Report";
import Upload from "./pages/Upload";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/teaching" element={<Teaching />} />

      <Route path="/report" element={<Report />} />
      
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
}

export default App;