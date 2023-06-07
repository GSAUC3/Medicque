import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  faEnvelope,
  faBars,
  faClose,
  faLocationArrow,
  faPhone,
  faLocationDot,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaze } from "@fortawesome/free-brands-svg-icons";
import Contact from "../Pages/Contact/Form";

const NavBar = (props) => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);
  const [nabvarBg, setNavbarBg] = useState("");
  const [logoSize, setLogoSize] = useState("100px");

  const [isOpen, setIsopen] = useState(false);
  const [isOpen1, setIsopen1] = useState(false);
  const [isOpen2, setIsopen2] = useState(false);

  const TogglePannel = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  const TogglePannel1 = () => {
    isOpen1 === true ? setIsopen1(false) : setIsopen1(true);
  };
  const TogglePannel2 = () => {
    isOpen2 === true ? setIsopen2(false) : setIsopen2(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        if (window.scrollY > 0) {
          setNavbarBg("bg-[#124574]");
          setLogoSize("80px");
        } else {
          setNavbarBg("bg-transparent");
          setLogoSize("100px");
        }
      } else {
        setNavbarBg("bg-[#124574]");
        if (window.scrollY > 0) {
          setLogoSize("80px");
        } else {
          setLogoSize("100px");
        }
      }
    };

    if (location.pathname !== "/") {
      handleScroll();
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      <div
        className={`nav-bar flex justify-between items-center fixed w-full text-white ${nabvarBg} lg:transition-[height] lg:duration-300 lg:ease-in-out`}
      >
        <Link className="logo m-0 p-0" to="/" onClick={() => setShowNav(false)}>
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

              <div className="flex items-cetner justify-evenly inner-nav-icons">
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  color="#ffffff"
                  onClick={TogglePannel}
                  className="cursor-pointer hover:opacity-70 bg-[#91bf76] rounded-full p-2 mx-2"
                />

                <FontAwesomeIcon
                  icon={faEnvelope}
                  color="#ffffff"
                  onClick={TogglePannel2}
                  className="cursor-pointer hover:opacity-70 bg-[#91bf76] rounded-full p-2 "
                />

                <FontAwesomeIcon
                  icon={faPhone}
                  color="#ffffff"
                  onClick={TogglePannel1}
                  className="cursor-pointer hover:opacity-70 bg-[#91bf76] rounded-full p-2 mx-2 "
                />
              </div>
            </div>
          </nav>

          <div className="nav-icons flex gap-4 ">

            <FontAwesomeIcon
              icon={faLocationArrow}
              color="#ffffff"
              onClick={TogglePannel}
              className="cursor-pointer hover:opacity-70"
            />

            <FontAwesomeIcon
              icon={faEnvelope}
              color="#ffffff"
              onClick={TogglePannel2}
              className="cursor-pointer hover:opacity-70"
            />

            <FontAwesomeIcon
              icon={faPhone}
              color="#ffffff"
              onClick={TogglePannel1}
              className="cursor-pointer hover:opacity-70"
            />
          </div>
        </div>

        <FontAwesomeIcon
          onClick={() => setShowNav(!showNav)}
          icon={showNav ? faClose : faBars}
          color="#fff"
          size="1x"
          className="hamburger-icon m-2"
        />
      </div>

      <div
        className={`panel flex items-center flex-col  justify-center   text-white ${
          isOpen == true ? "active" : ""
        }`}
      >
        <FontAwesomeIcon
          icon={faClose}
          size="3x"
          className="absolute top-5 right-8 cursor-pointer hover:text-[#91bf76]"
          onClick={TogglePannel}
        />
        <h1 className="text-xl lg:text-5xl">
          <FontAwesomeIcon icon={faLocationArrow} /> Kolkata, West Bengal, India
        </h1>
        <div className="flex items-center justify-center gap-5 lg:gap-10 my-10">
          {[faMapLocationDot, faWaze, faLocationDot].map((item) => (
            <FontAwesomeIcon
              icon={item}
              className="border-2 p-4 rounded-full  w-[50px]"
              size="3x"
            />
          ))}
        </div>
      </div>

      <div
        className={`panel flex items-center flex-col  justify-center   text-white ${
          isOpen1 == true ? "active" : ""
        }`}
      >
        <FontAwesomeIcon
          icon={faClose}
          size="3x"
          className="absolute top-5 right-8 cursor-pointer hover:text-[#91bf76]"
          onClick={TogglePannel1}
        />

        <div className="flex items-center flex-col justify-center gap-5 lg:gap-10 my-10">
          <h1 className="text-xl lg:text-5xl">
            <FontAwesomeIcon icon={faPhone} />
            +91-999-7777-000 - Calling Number
          </h1>
          <h1 className="text-xl lg:text-5xl">
            <FontAwesomeIcon icon={faPhone} />
            +91-0987654321 - WhatsApp Number
          </h1>
        </div>
      </div>

      <div
        className={`panel flex items-center flex-col  justify-center   ${
          isOpen2 == true ? "active" : ""
        }`}
      >
        <FontAwesomeIcon
          icon={faClose}
          size="3x"
          className="absolute top-5 right-8 cursor-pointer text-white hover:text-[#91bf76]"
          onClick={TogglePannel2}
        />
        <div className="text-left   lg:w-[40%] text-white">
          <p className=" text-2xl">Contact Us</p>
          <p className="mb-8 mt-3">
            Fill out the form or send a direct email to:
            <a className="hover:underline" href="mailto:medicqueteam@gmail.com">
              medicqueteam@gmail.com
            </a>
          </p>
        </div>
        <Contact class="w-full" ></Contact>
      </div>
    </>
  );
};

export default NavBar;
