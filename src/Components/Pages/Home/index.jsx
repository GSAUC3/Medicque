import React from "react";
import "./index.scss";
import Contact from "../Contact";
import Testimonials from "../../Testimonials";

const Home = (props) => {
  return (
    <>
      <div className="main-header text-white w-[100vw] h-[90vh] flex flex-col items-center justify-center lg:text-xl p-2">
        <h1
          className={`${props.settings.fontSize["h1Tailwind"]} m-5 font-bold`}
        >
          MEDICQUE
        </h1>

        <div className="text-center">
          <div>Welcome to Medicque</div>
          <div>
            Empowering Doctors. Enhancing Patient Care. Revolutionizing
            Healthcare
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center">
          <button
            className={`py-4 px-8 mx-2 my-5 bg-[${props.settings.colors.buttonBgColor}] lg:text-lg`}
          >
            SCHEDULE A DOCTOR'S APPOINTMENT
          </button>
          <button
            className={`py-4 mx-2 my-5 px-8 bg-[${props.settings.colors.buttonBgColor}] lg:text-lg`}
          >
            SCHEDULE A DEMO
          </button>
        </div>
      </div>

      <div className="part1 ">
        <div className="lg:w-[80%] flex flex-col lg:p-16 text-center items-center justify-center mx-5 my-10 gap-10">
          <img
            src="https://static1.s123-cdn-static-a.com/ready_uploads/media/39454/800_5ce21754cf173.jpg"
            className="object-cover rounded-[50%] w-[200px] lg:w-[350px] h-[200px] lg:h-[350px]"
            alt=""
          />
          <h2 className="m-3 text-2xl">EXPERIENCE THE FUTURE</h2>
          <p className="lg:text-xl text-justify">
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
        className={`part2 text-[${props.settings.colors.pColorBlueDark}] lg:p-16`}
      >
        <div className="lg:w-[80%]">
          <div className="flex lg:m-10 items-center text-justify justify-evenly gap-10 my-10 mx-5">
            <img
              src="https://static1.s123-cdn-static-a.com/uploads/8102986/800_6476e0e18b83a.jpg"
              className="object-cover rounded-[50%] w-[250px] h-[250px] "
              alt=""
            />
            <div className="lg:text-xl ">
              Efficiency and convenience are at the core of our offerings. Our
              intuitive interface simplifies scheduling and appointment booking,
              eliminating the need for manual processes and juggling multiple
              calendars. Patients can easily book appointments online, reducing
              administrative burden and phone call volume.
            </div>
          </div>
        </div>
      </div>

      <div className="part3 lg:p-16">
        <div className="lg:w-[80%]">
          <div className="flex items-center text-justify justify-evenly gap-10 my-10 mx-5">
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
              className="object-cover rounded-[50%] w-[250px]  h-[250px]"
            />
          </div>
        </div>
      </div>

      <div className="part4 flex flex-col items-center text-center">
        <h1
          className={`text-2xl lg:${props.settings.fontSize.h1Tailwind} font-bold`}
        >
          SCHEDULE A DEMO
        </h1>

        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 z-10 block" />
        <p>DOCTORS, TAKE ACTION NOW, DON'T WAIT ANY LONGER.</p>

        <div className="flex flex-wrap items-center justify-center">
          <button
            className={`py-4 px-8 mx-2 my-5 bg-[${props.settings.colors.buttonBgColor}] lg:text-lg text-white `}
          >
            SHEDULE A DEMO
          </button>
          <button
            className={`py-4 px-8 mx-2 my-5 bg-[${props.settings.colors.buttonBgColor}] lg:text-lg text-white`}
          >
            CONTACT US
          </button>
        </div>
      </div>

      <div className="part5 flex-col gap-6 bg-[#91bf766b] text-green-800">
        <h1
          className={`text-2xl lg:${props.settings.fontSize.h1Tailwind} my-10 text-center`}
        >
          DOCTOR'S INSIGHTS
        </h1>
        <p className="lg:text-xl text-center">
          "Empowering Healthcare, Streamlining Success"
        </p>
        <div className="container lg:w-[80%]">
          <Testimonials></Testimonials>
        </div>
      </div>

      <Contact textColor={props.settings.colors.pColorBlueDark}></Contact>
    </>
  );
};

export default Home;
