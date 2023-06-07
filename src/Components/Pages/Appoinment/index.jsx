import React, {useEffect  } from "react";
// import ScrollReveal from "scrollreveal";
import { useLocation } from "react-router-dom";
import "./index.scss";


const Appointment = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);



  return (
    <div>
      <div className="dp-section1 flex items-center justify-center text-white h-[60vh] lg:h-[70vh]">
        <div className="flex flex-col items-center justify-center mt-8">
          <h1 className="text-2xl lg:text-5xl animate ">
            DOCTOR'S APPOINTMENT
          </h1>
          <hr className="border-2 border-[#91bf76] my-8 bg-[#91bf76] " />

          <p className="w-[70%] text-center lg:text-lg animate">
            Save time and streamline your healthcare experience with Medicque.
            Our online booking platform allows you to find and book the perfect
            doctor for your needs. Take the first step towards better health
            today!
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center text-center  text-[#124574] animate">
        <div className="flex flex-col items-center lg:text-xl justify-center h-[50vh] lg:h-[70vh] lg:w-[45%] my-10 mx-5 animate">
          <h1 className="text-2xl lg:text-5xl animate">BOOK ONLINE</h1>
          <hr className="border-2 border-[#91bf76] my-8 bg-[#91bf76] " />
          <div className="flex items-center justify-center flex-col gap-4 mx-5 mt-3">
            <p className="animate">
              Your health is important to us, and we want to make your life
              easier.
            </p>
            <p className="animate">
              Say goodbye to long wait times and endless phone calls. Take
              control of your healthcare journey with Medicque. Easily schedule
              your doctor's appointment from the comfort of your home.
            </p>
            <p className="animate">It's simple, quick, and hassle-free!</p>
          </div>
        </div>
      </div>

      <div className="flex items-center lg:text-xl bg-[#E3EEDC] text-green-800   text-center justify-center h-[50vh] lg:h-[60vh]">
        <div className="flex flex-col items-center justify-center mx-5 my-10 lg:w-[45%]">
          <p>Discover the freedom to choose your preferred doctor</p>
          <p className="m-4 animate">OR</p>
          <p className="animate">
            Explore our panel of esteemed medical specialists for a wide range
            of options.
          </p>
          <div className="animate">
            <button className="py-4 px-8 mx-2 my-5 bg-[#91bf76] lg:text-lg text-white">
              SCHEDULE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
