import React, { useState, useEffect } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { faEnvelope, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = (props) => {
  const [showNav, setShowNav] = useState(false);
  const [nabvarBg, setNavbarBg] = useState("bg-transparent");
  const [logoSize, setLogoSize] = useState("130px");

  // const [click, setClick] = React.useState(false);
  // const handleClick = () => setClick(!click);
  // const Close = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBg("bg-[#124574]");
        setLogoSize("90px");
      } else {
        setNavbarBg("bg-transparent");
        setLogoSize("130px");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`nav-bar flex justify-between items-center fixed w-full text-white ${nabvarBg} lg:transition-[height] lg:duration-300 lg:ease-in-out`}
    >
      <Link className="logo mx-2" to="/" onClick={() => setShowNav(false)}>
        <img
          src={props.logo}
          alt=""
          id="default-logo"
          style={{ width: `${logoSize}` }}
          className="m-0 p-0 transition-[width] ease-in-out duration-300"
        />
      </Link>
      <Link className="logo mx-2" to="/" onClick={() => setShowNav(false)}>
        <img id="mobile-logo" src={props.logo} alt="" className="m-0 p-0" />
      </Link>

      <div className="flex mx-5 items-center justify-center text-sm ">
        <nav className={showNav ? "mobile-show" : ""}>
          <div className="inner-nav m-0 p-0">
            <NavLink
              className="nav-li"
              exact="true"
              activeClassName="active"
              to="/"
              onClick={() => setShowNav(false)}
            >
              HOME
            </NavLink>

            <NavLink
              className="nav-li"
              exact="true"
              activeClassName="active"
              to="/appointment"
              onClick={() => setShowNav(false)}
            >
              DOCTOR'S APPOINTMENT
            </NavLink>

            <NavLink
              className="nav-li"
              exact="true"
              activeClassName="active"
              to="/about"
              onClick={() => setShowNav(false)}
            >
              ABOUT US
            </NavLink>

            <NavLink
              className="nav-li"
              exact="true"
              activeClassName="active"
              to="/services"
              onClick={() => setShowNav(false)}
            >
              SERVICES
            </NavLink>

            <NavLink
              className="nav-li"
              exact="true"
              activeClassName="active"
              to="/benefit"
              onClick={() => setShowNav(false)}
            >
              BENEFITS
            </NavLink>

            <NavLink
              className="nav-li"
              exact="true"
              activeClassName="active"
              to="/contact"
              onClick={() => setShowNav(false)}
            >
              CONTACT
            </NavLink>
          </div>
        </nav>
        <NavLink
          className="nav-li"
          exact="true"
          activeClassName="active"
          to="/"
          id="envelope"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
        </NavLink>
      </div>

      <FontAwesomeIcon
        onClick={() => setShowNav(!showNav)}
        icon={showNav ? faClose : faBars}
        color="#fff"
        size="1x"
        className="hamburger-icon m-2"
      />
    </div>
  );
};

export default NavBar;
