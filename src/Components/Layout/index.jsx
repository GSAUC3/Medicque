import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";

const Layout = (props) => {
  return (
    <div>
      <NavBar logo={props.logo}></NavBar>
      <div className="page">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
