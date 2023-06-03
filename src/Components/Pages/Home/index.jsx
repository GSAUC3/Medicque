import React from "react";
import "./index.scss";
import Contact from "../Contact";
import Testimonials from "../../Testimonials";

const Home = () => {
  return (
    <>
      <div className="main-header text-white w-[100vw] h-[90vh] flex flex-col items-center justify-center lg:text-xl">
      
        <h1 className="text-5xl m-5 font-bold">MEDICQUE</h1>

        <div className="text-center">

        <div>Welcome to Medicque</div>
        <div >
          Empowering Doctors. Enhancing Patient Care. Revolutionizing Healthcare
        </div>
        </div>

        <div className="flex flex-wrap items-center justify-center">
          <button className="py-4 px-8 mx-2 my-5 bg-[#91bf76] lg:text-lg">
            SCHEDULE A DOCTOR'S APPOINTMENT
          </button>
          <button className="py-4 mx-2 my-5 px-8 bg-[#91bf76] lg:text-lg">
            SCHEDULE A DEMO
          </button>
        </div>
      </div>


      <div className="part1 flex-col p-16 text-center">
        <img
          src="https://static1.s123-cdn-static-a.com/ready_uploads/media/39454/800_5ce21754cf173.jpg"
          className="rounded-[50%] w-[320px] h-[320px]"
          alt=""
        />
        <h2 className="m-3 lg:text-2xl">EXPERIENCE THE FUTURE</h2>
        <p className="lg:w-[70%] lg:text-xl text-justify">
          At Medicque, we believe that technology has the power to revolutionize
          healthcare. Our mission is to empower doctors with innovative tools
          and solutions that streamline their workflows, enhance patient care,
          and improve overall practice management. With our cutting-edge
          software, doctors can focus on what matters most: providing
          exceptional healthcare.
        </p>
      </div>

      <div className="part2">
        <div className="flex lg:m-10 items-center text-justify justify-evenly flex-wrap">
            <img
              src="https://static1.s123-cdn-static-a.com/uploads/8102986/800_6476e0e18b83a.jpg"
              className="m-4"
              alt=""
            />
          <div className="lg:text-xl lg:w-[50%]">
              Efficiency and convenience are at the core of our offerings. Our
              intuitive interface simplifies scheduling and appointment booking,
              eliminating the need for manual processes and juggling multiple
              calendars. Patients can easily book appointments online, reducing
              administrative burden and phone call volume.
            
          </div>
        </div>
      </div>

      <div className="part3 ">
        <div className="flex items-center text-justify justify-evenly flex-wrap lg:m-8">
          <p className="lg:text-xl lg:w-[50%]">
            Say goodbye to stacks of paper forms and cumbersome patient
            information management. Our intelligent information intake system
            captures relevant details in a concise and organized manner,
            transforming them into a presentable and summarized format. Doctors
            can access key patient data quickly when needed, improving
            decision-making and efficiency.
          </p>
          <img
            src="https://static1.s123-cdn-static-a.com/ready_uploads/media/5711412/800_5ef5f42400004.jpg"
            alt=""
            className="lg:m-6"
          />
        </div>
      </div>

      <div className="part4 flex flex-col items-center text-center">
        <h1 className="text-3xl lg:text-6xl">SCHEDULE A DEMO</h1>

        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 z-10 block" />
        <p>DOCTORS, TAKE ACTION NOW, DON'T WAIT ANY LONGER.</p>

        <div className="flex flex-wrap items-center justify-center">
          <button className="py-4 px-8 mx-2 my-5 bg-[#91bf76] lg:text-lg text-white ">
            SHEDULE A DEMO
          </button>
          <button className="py-4 px-8 mx-2 my-5 bg-[#91bf76] lg:text-lg text-white">
            CONTACT US
          </button>
        </div>
      </div>

      <div className="part5 flex-col gap-6 bg-[#91bf766b] text-green-800">
        <h1 className="lg:text-6xl my-10">DOCTOR'S INSIGHTS</h1>
        <p className="lg:text-xl">"Empowering Healthcare, Streamlining Success"</p>
        <Testimonials></Testimonials>
      </div>

      <Contact></Contact>
    </>
  );
};

export default Home;
