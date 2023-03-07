import React from "react";
import "./navbar.css";
import magGlass from "../../assets/Blue_magnifying_glass_icon.svg.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>RideShare</h1>

      <form className="navbar__search">
        <input type="text" placeholder="Where are you going?"></input>
        <button type="submit">
          <img src={magGlass} alt="err" />
        </button>
      </form>

      <div className="navbar__links-container">
        <ul className="navbar__links">
          <li>
            <a href="register">Sign up</a>
          </li>
          <li>
            <a href="login">Log in</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
