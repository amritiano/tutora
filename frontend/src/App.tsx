import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Teaching from "./pages/Teaching";
import Report from "./pages/Report";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teaching" element={<Teaching />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
}

export default App;