import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Layout = (props) => {
  return (
    <div>
      <NavBar logo={props.logo}></NavBar>
      <div className="page">
        <Outlet />
      </div>

      <FontAwesomeIcon
      icon={faShareNodes}
      className="rounded-full fixed bottom-5 right-5 bg-[#91bf76] py-4 px-5 text-white"
      size='2x'
      ></FontAwesomeIcon>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
