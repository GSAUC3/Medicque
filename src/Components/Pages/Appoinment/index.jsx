import React from "react";
import "./index.scss";

const Appointment = () => {
  return (
    <div>
      <div className="dp-section1 flex flex-col items-center justify-center text-white h-[70vh]">
        <h1 className="lg:text-6xl">DOCTOR'S APPOINTMENT</h1>
        <p className="my-5 w-[70%] text-center lg:text-lg">
          Save time and streamline your healthcare experience with Medicque. Our
          online booking platform allows you to find and book the perfect doctor
          for your needs. Take the first step towards better health today!
        </p>
      </div>

      <div className="flex items-center justify-center text-center  text-[#124574]">
        <div className="flex flex-col items-center justify-center h-[80vh] w-[50%]">
          <h1 className="text-6xl">BOOK ONLINE</h1>
          <p className="mt-16">
            Your health is important to us, and we want to make your life
            easier.
          </p>
          <p className="my-4">
            Say goodbye to long wait times and endless phone calls. Take control
            of your healthcare journey with Medicque. Easily schedule your
            doctor's appointment from the comfort of your home.
          </p>
          <p className="my-4">It's simple, quick, and hassle-free!</p>
        </div>
      </div>

      <div className="flex flex-col items-center text-xl bg-[#91bf766b] text-green-800 justify-center h-[50vh]">
        <p>Discover the freedom to choose your preferred doctor</p>
        <p className='m-4'>OR</p>
        <p>
          Explore our panel of esteemed medical specialists for a wide range of
          options.
        </p>
        <div>
          <button className="py-4 px-8 mx-2 my-5 bg-[#91bf76] lg:text-lg text-white">SCHEDULE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
