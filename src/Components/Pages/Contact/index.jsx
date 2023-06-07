import React,{useEffect, useState} from "react";
import Form from "./Form";
import "./index.scss";
import {useLocation} from 'react-router-dom'

const Contact = (props) => {
  const location  = useLocation();
  const [ContactStyles,setContactStyles] = useState('')
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
    if (location.pathname ==='/contact'){

      setContactStyles('lg:relative lg:top-20 lg:h-[90vh]')
    }

  }, [location.pathname]);



  return (
    <div className={`py-10 mb-8 ${ContactStyles}`}>
      <h1
        className={`text-center text-2xl text-[#736e94] lg:text-3xl  mt-10 text-[${props.textColor}]`}
      >
        CONTACT
      </h1>

      <div className="flex items-center justify-center">
        <hr className="border-2  bg-[#91bf76] border-[#91bf76] my-10 w-[50px]" />
      </div>

      <div className="flex gap-12 lg:gap-2 form-container">
        <div className="flex flex-col  items-center lg:w-[50%] text-xl">
          <p className="text-[#736e94]">Kolkata, West Bengal, India</p>
          <p className="text-[#91bf76] hover:underline hover:cursor-pointer">+91-999-7777-000 - Calling Number</p>
          <p className="text-[#91bf76] hover:underline hover:cursor-pointer">+91-0987654321 - WhatsApp Number</p>
          <p className="text-[#91bf76] hover:underline hover:cursor-pointer">medicqueteam@gmail.com</p>
          <p className="text-[#736e94]">8:00 AM - 7:00 PM </p>
          <p className="text-[#736e94]">Mon - Friday</p>
        </div>
        <Form  />
      </div>
    </div>
  );
};

export default Contact;
