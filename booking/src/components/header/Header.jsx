import React from "react";
import { MdFlight, MdAttractions } from "react-icons/md";
import { FaBed, FaCarAlt, FaTaxi } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-list">
            <div className="header-list__item">
              <FaBed />
              <span>Stays</span>
            </div>
            <div className="header-list__item">
              <MdFlight />
              <span>Flights</span>
            </div>
            <div className="header-list__item">
              <FaCarAlt />
              <span>Car rentals</span>
            </div>
            <div className="header-list__item">
              <MdAttractions />
              <span>Attractions</span>
            </div>
            <div className="header-list__item">
              <FaTaxi />
              <span>Airport taxis</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
