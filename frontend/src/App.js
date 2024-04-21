import "./index.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Discover from "./Components/Discover";
import ShareRoom from "./Components/ShareRoom";
import RentRoom from "./Components/RentRoom";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/discover" replace />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shareRoom" element={<ShareRoom />} />
        <Route path="/rentRoom" element={<RentRoom />} />
        {/* <Route path="/Welcome" element={<Welcome/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
