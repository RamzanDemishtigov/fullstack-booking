import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar__head">
            <span className="navbar__logo">Booking</span>
            <div className="navbar__buttons">
              <button className="navbar__button">Register</button>
              <button className="navbar__button">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
