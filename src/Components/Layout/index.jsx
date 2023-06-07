import React,{useState} from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { faClose, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import './index.scss'


const Layout = (props) => {

  const [isOpen, setIsopen] = useState(false);

  const Toggle = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };


  return (
    <div>
      <NavBar logo={props.logo}></NavBar>
      <div className="page">
        <Outlet />
      </div>

      <div className=" flex flex-col gap-2 fixed bottom-5 right-5">

      <div className={`share-links  ${
          isOpen === true ? "active" : ""
        }`}>

      <FontAwesomeIcon
      icon={faTwitter}
      className="rounded-full   bg-[#124574] hover:cursor-pointer hover:scale-75 p-2 w-[30px]  m-[auto] text-white"
      size='2x'
  
      ></FontAwesomeIcon>

      <FontAwesomeIcon
      icon={faInstagram}
      className="rounded-full   bg-[#124574] hover:cursor-pointer hover:scale-75 p-2 w-[30px]  m-[auto] text-white"
      size='2x'
      
      ></FontAwesomeIcon>
      <FontAwesomeIcon
      icon={faLinkedin}
      className="rounded-full  bg-[#124574] hover:cursor-pointer hover:scale-75 p-2 w-[30px]  m-[auto] text-white"
      size='2x'
  
      ></FontAwesomeIcon>
      <FontAwesomeIcon
      icon={faFacebook}
      className="rounded-full  bg-[#124574] hover:cursor-pointer hover:scale-75 p-2 w-[30px] h-[30px]  m-[auto] text-white"
      size='2x'
      
      ></FontAwesomeIcon>
      </div>

      <FontAwesomeIcon
      icon={ isOpen? faClose :faShareNodes }
      className="rounded-full  bg-[#91bf76] p-4 text-white hover:text-[#E3EEDC] w-[32px] h-[32px]"
      size='2x'
      onClick={Toggle}
      ></FontAwesomeIcon>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
