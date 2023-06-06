import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#124574] p-8 flex flex-col items-center justify-center text-white border-t-2">
      <ul className="flex gap-8 flex-wrap items-center justify-center">
        <li>
          <NavLink exact="true" activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" activeClassName="active" to="/appointment">
            Doctor's Appointment
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" activeClassName="active" to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" activeClassName="active" to="/services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" activeClassName="active" to="/benefit">
            Benefit
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="my-3 text-center">
        Copyright © 2023 All rights reserved - Medicque
      </div>
    </div>
  );
};

export default Footer;
