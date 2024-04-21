import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="company_name" onClick={() => navigate("/discover")}>
        <div className="company">She-Share</div>&nbsp;
        <div className="rental">Vacation Rentals</div>
      </div>
      <div className="nav_buttons">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
};

export default Navbar;
