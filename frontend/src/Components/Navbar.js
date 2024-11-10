import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>News App</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
