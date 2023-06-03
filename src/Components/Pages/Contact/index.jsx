import React from "react";
import Map from "./Map";
import Form from "./Form";
import './index.scss';

const Contact = () => {
  return (
    <div>
      <Map />
      <h1 className="text-center text-5xl my-10">CONTACT</h1>
      <div className="flex gap-2 form-container">
        <div className="flex flex-col justify-center items-center lg:w-[50%] text-xl">
          <p>Kolkata, West Bengal, India</p>
          <p>+91-999-7777-000 - Calling Number</p>
          <p>+91-0987654321 - WhatsApp Number</p>
          <p>medicqueteam@gmail.com</p>
          <p>8:00 AM - 7:00 PM </p>
          <p>Mon - Friday</p>
        </div>
        <Form class="lg:w-[40%] lg:m-6"/>
      </div>
    </div>
  );
};

export default Contact;
