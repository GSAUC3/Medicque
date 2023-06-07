import React,{useEffect} from "react";
import "./index.scss";
import Contact from "../Contact";
import Testimonials from "../../Testimonials";

import ScrollReveal from "scrollreveal";

const Home = (props) => {
  useEffect(() => {
    ScrollReveal().reveal(".animate", {
      delay: 100,
      easing: "ease-out",
      interval: 100,
      origin: "bottom",
      distance: "100px",
    });
  }, []);

  return (
    <>
      <div className="main-header text-white w-[100vw] h-[90vh] flex flex-col bg-fixed items-center justify-center lg:text-xl p-2">
        <h1
          className={`text-2xl lg:text-5xl m-5 font-bold`}
        >
          MEDICQUE
        </h1>

        <div className="text-center animate">
          <div className="aniamte">Welcome to Medicque</div>
          <div className="animate">
            Empowering Doctors. Enhancing Patient Care. Revolutionizing
            Healthcare
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center animate">
          <button
            className={`py-4 px-8 mx-2 my-5 bg-[${props.settings.colors.buttonBgColor}] text-sm lg:text-lg`}
          >
            SCHEDULE A DOCTOR'S APPOINTMENT
          </button>
          <button
            className={`py-4 mx-2 my-5 px-8 bg-[${props.settings.colors.buttonBgColor}] text-sm lg:text-lg`}
          >
            SCHEDULE A DEMO
          </button>
        </div>
      </div>

      <div className="part1 animate">
        <div className="lg:w-[80%] flex flex-col lg:p-16 text-center items-center justify-center mx-5 my-10 gap-5">
          <img
            src="https://static1.s123-cdn-static-a.com/ready_uploads/media/39454/800_5ce21754cf173.jpg"
            className="object-cover rounded-[50%] w-[250px] lg:w-[350px] h-[250px] lg:h-[350px] animate"
            alt=""
          />
          <h2 className="mt-6 text-2xl lg:text-3xl animate">EXPERIENCE THE FUTURE</h2>
          <hr className="border-2 bg-[#91bf76] border-[#91bf76] " />
          <p className="lg:text-xl text-center animate">
            At Medicque, we believe that technology has the power to
            revolutionize healthcare. Our mission is to empower doctors with
            innovative tools and solutions that streamline their workflows,
            enhance patient care, and improve overall practice management. With
            our cutting-edge software, doctors can focus on what matters most:
            providing exceptional healthcare.
          </p>
        </div>
      </div>

      <div
        className={`part2 text-[${props.settings.colors.pColorBlueDark}] lg:p-16 animate`}
      >
        <div className="lg:w-[80%]">
          <div className="flex lg:m-10 items-center text-center lg:text-left justify-evenly gap-10 my-10 mx-5">
            <img
              src="https://static1.s123-cdn-static-a.com/uploads/8102986/800_6476e0e18b83a.jpg"
              className="object-cover rounded-[50%] w-[250px] h-[250px] aniamte"
              alt=""
            />
            <div className="lg:text-xl animate">
              Efficiency and convenience are at the core of our offerings. Our
              intuitive interface simplifies scheduling and appointment booking,
              eliminating the need for manual processes and juggling multiple
              calendars. Patients can easily book appointments online, reducing
              administrative burden and phone call volume.
            </div>
          </div>
        </div>
      </div>

      <div className="part3 lg:p-16 animate">
        <div className="lg:w-[80%]">
          <div className="flex items-center text-center lg:text-right justify-evenly gap-10 my-10 mx-5 animate">
            <p className="lg:text-xl">
              Say goodbye to stacks of paper forms and cumbersome patient
              information management. Our intelligent information intake system
              captures relevant details in a concise and organized manner,
              transforming them into a presentable and summarized format.
              Doctors can access key patient data quickly when needed, improving
              decision-making and efficiency.
            </p>
            <img
              src="https://static1.s123-cdn-static-a.com/ready_uploads/media/5711412/800_5ef5f42400004.jpg"
              alt=""
              className="object-cover rounded-[50%] w-[250px]  h-[250px] animate"
            />
          </div>
        </div>
      </div>

      <div className="part4 flex flex-col items-center text-center  bg-fixed bg-center bg-cover">
        <h1
          className={`text-2xl lg:${props.settings.fontSize.h1Tailwind} font-bold animate`}
        >
          SCHEDULE A DEMO
        </h1>
        <hr className="border-2  bg-[#91bf76] border-[#91bf76] my-8 " />

        <p>DOCTORS, TAKE ACTION NOW, DON'T WAIT ANY LONGER.</p>

        <div className="flex flex-wrap items-center justify-center animate">
          <button
            className={`py-4 px-8 mx-2 my-5 bg-[${props.settings.colors.buttonBgColor}] text-sm lg:text-lg text-white `}
          >
            SHEDULE A DEMO
          </button>
          <button
            className={`py-4 px-8 mx-2 my-5 bg-[${props.settings.colors.buttonBgColor}] text-sm lg:text-lg text-white`}
          >
            CONTACT US
          </button>
        </div>
      </div>

      <div className="part5 flex-col gap-6 bg-[#E3EEDC] text-[#3b6e40] animate py-16 lg:h-[80vh]">
        <h1
          className={`text-3xl   text-center aniamte`}
        >
          DOCTOR'S INSIGHTS
        </h1>
        <hr className="border-2  bg-[#91bf76] border-[#91bf76] w-[50px]" />

        <p className="lg:text-xl text-center">
          "Empowering Healthcare, Streamlining Success"
        </p>
        <div className="container lg:w-[80%] animate">
          <Testimonials></Testimonials>
        </div>
      </div>

      <Contact textColor={props.settings.colors.pColorBlueDark}></Contact>
    </>
  );
};

export default Home;
