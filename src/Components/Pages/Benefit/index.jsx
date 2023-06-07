import React, {useEffect} from "react";
import "./index.scss";
import settings from "../../../config/layoutSettings.json";
import { useLocation } from "react-router-dom";
import ScrollReveal from "scrollreveal";


const data1 = [
  {
    img: "https://static1.s123-cdn-static-a.com/ready_uploads/svg/phone-heartbeat5f22b34a59c6a.svg?v=2",
    title: "Comprehensive Electronic Health Records (EHR)",
    desc: "Medicque provides a secure and centralized platform for storing and accessing electronic health records. It allows healthcare providers to maintain detailed patient profiles, medical history, test results, and treatment notes, ensuring comprehensive and organized patient records.",
  },
  {
    img: "https://static1.s123-cdn-static-a.com/ready_uploads/svg/folder-chart-bar5f22b37e85a7b.svg?v=2",
    title: "Graphical Reports",
    desc: "Medicque provides robust tools for generating graphical reports, allowing healthcare professionals to visualize and analyze key healthcare data. These reports offer valuable insights, facilitating data-driven decision-making, and improving patient outcomes",
  },
  {
    img: "https://static1.s123-cdn-static-a.com/ready_uploads/svg/folder-money5f22b37d84bc7.svg?v=2",
    title: "Revenue Management",
    desc: "Medicque includes comprehensive revenue management features that streamline financial processes within healthcare practices. It enables accurate billing, invoicing, and payment management, ensuring efficient revenue tracking and financial stability.",
  },
  {
    img: "https://static1.s123-cdn-static-a.com/ready_uploads/svg/calendar-event-create5f22b3a54603a.svg?v=2",
    title: "Schedule Management",
    desc: "Medicque's schedule management feature simplifies appointment scheduling and optimizes clinic schedules. It provides a user-friendly interface for managing appointments, enabling healthcare professionals to efficiently allocate resources, reduce wait times, and enhance overall clinic productivity.",
  },
  {
    img: "https://static1.s123-cdn-static-a.com/ready_uploads/svg/phone-heart5f22835e5d06a.svg?v=2",
    title: "Streamlined and Compliant Prescription Writing",
    desc: "Medicque offers a dedicated module for efficient and legally obligated prescription writing. It ensures that prescriptions are accurately generated, following legal requirements and best practices. This feature saves time for healthcare professionals while maintaining compliance with regulatory standards.",
  },
  {
    img: "https://static1.s123-cdn-static-a.com/ready_uploads/svg/privacy5f22834b057d4.svg?v=2",
    title: "Secure Communication",
    desc: "Medicque facilitates secure communication between doctors and patients through a built-in messaging system. It allows for efficient and confidential communication, enabling doctors to provide updates, address patient queries, and maintain effective patient-provider communication.",
  },
];

const midSections = [
  {
    title: "PATIENT'S COMPANION",
    content: [
      {
        title: "Efficiency",
        desc: "Efficiently manage workflows, saving time and increasing productivity.",
      },
      {
        title: "Convenience",
        desc: "Foster better patient engagement and satisfaction through seamless communication.",
      },
      {
        title: "Collaboration",
        desc: "Collaborate effectively with other healthcare providers for coordinated care.",
      },
      {
        title: "Accuracy",
        desc: "Access comprehensive patient records for informed decision-making. Gain valuable insights and conduct research using data analytics tools.",
      },
      {
        title: "Security",
        desc: "Ensure the utmost security and privacy of patient data.",
      },
    ],
    bgColor: "",
    fgColor: 'text-['+settings.colors.pColorBlueDark+']',
  },
  {
    title: "DOCTOR'S ASSISTANT",
    content: [
      {
        title: "Personalization",
        desc: "Receive personalized healthcare tailored to individual needs.",
      },
      {
        title: "Empowerment",
        desc: "Conveniently manage appointments and enjoy scheduling flexibility.",
      },
      {
        title: "Accessibility",
        desc: "Access medical records for informed decision-making about their health.",
      },
      {
        title: "Engagement",
        desc: "Engage in effective communication with healthcare providers.",
      },
      {
        title: "Privacy",
        desc: "Trust in the highest standards of privacy and data security.",
      },
    ],
    bgColor:"#d8e4d0",
    fgColor:"text-[#1f6925]",
  },

  {
    title: "CLINIC'S FACILITATOR",
    content: [
      {
        title: "Streamlining",
        desc: "Streamline workflows and reduce administrative burdens.",
      },
      {
        title: "Organization",
        desc: "Efficiently manage patient information for well-organized care.",
      },
      {
        title: "Coordination",
        desc: "Enhance communication with patients and reduce appointment no-shows.",
      },
      {
        title: "Optimization",
        desc: "Optimize appointment scheduling and resource allocation.Gain insights into clinic performance through data analytics and reporting.",
      },
      {
        title: "Compliance",
        desc: "Ensure compliance with data protection regulations and maintain robust data security.",
      },
    ],
    bgColor: "",
    fgColor: 'text-['+settings.colors.pColorBlueDark+']',
  },
];


const component1 = (props, i) => {
  return (
    <>
      <div className="flex items-center gap-8 justify-center max-[600px]:flex-col max-[600px]:text-center" key={i}>
        <img
          src={props.img}
          alt="icons"
          className=" w-[150px] h-[150px] animate"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl animate my-3 lg:font-bold">{props.title}</h2>
          <p className="animate">{props.desc}</p>
        </div>
      </div>
    </>
  );
};

const component2 = (props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center  ">
        <h2 className="text-2xl animate my-4">{props.title}</h2>
        <div className="animate">{props.desc}</div>
      </div>
    </>
  );
};


const Benefit = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

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
      <div className="benefit-section-1 flex items-center justify-center text-white">
        <div className=" lg:w-[45%] text-center lg:text-left absolute lg:left-20 lg:bottom-0 mx-5 lg:p-20 lg:text-xl">
          <h1 className="text-2xl lg:text-5xl animate lg:my-5  max-[600px]:text-center font-bold">
            BENEFITS
          </h1>
          <div className="benefit-section-header">
          <hr className="border-2 border-[#91bf76] bg-[#91bf76] my-8 " />
          </div>

          <p className="animate">
            Experience streamlined healthcare management and improved patient
            care with Medicque's comprehensive and secure platform,
            revolutionizing the way healthcare is delivered.
          </p>
          <p className="animate">
            Benefit from enhanced efficiency, collaboration, and data-driven
            insights, ensuring optimal healthcare outcomes for all stakeholders
            involved.
          </p>
        </div>
      </div>

      <div className="benefit-section-2 ">
        <div className="lg:p-16 my-10 mx-5 flex flex-col text-[#124574] items-center justify-center ">
          <h1 className="text-2xl lg:text-5xl  animate">FEATURES</h1>
          <hr className="border-2 border-[#91bf76] bg-[#91bf76] w-[50px]  my-8 " />
          <p className="text-center lg:text-xl animate lg:w-[80%]">
            These prominent features of Medicque contribute to improved patient
            care, efficient clinic operations, and enhanced communication
            between healthcare providers and patients.
          </p>
          <div className="flex container my-10 flex-col gap-16 mx-5 lg:w-[50%]">
            {data1.map((item, i) => component1(item, i))}
          </div>
        </div>
      </div>

      <div className="h-[50vh] benefit-section-3 flex items-center justify-center">
        <div className="bg-[#E3EEDC] text-lime-800 lg:w-[450px] inner-card m-8 animate">
            <div className="p-8 animate">
            Medicque revolutionizes healthcare with enhanced efficiency, improved outcomes, secure data, streamlined operations, and comprehensive tools, optimizing patient care and experience.

            </div>
        </div>
      </div>

      <div className="">
        {midSections.map((item, i) => (
          <div
            k={i}
            className={`bg-[${item.bgColor}]  py-16 flex items-center  `}
          >
            <div className={`flex flex-col items-center ${item.fgColor} justify-center gap-5 text-center`}>
              <h1 className="text-2xl lg:text-5xl animate">
                {item.title}
              </h1>
              <hr className="border-2 border-[#91bf76] bg-[#91bf76] my-5 " />
              <div className="flex items-center justify-center gap-10 lg:w-[70%]  mx-5 flex-wrap max-[600px]:flex-col max-[600px]:text-center">
                {item.content.map((x, j) => (
                  <div key={j} className="animate lg:w-[30%] lg:h-[200px]">{component2(x)}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>




      
      <div className=" h-[90vh] benefit-section-n flex lg:relative">
        <div className="bg-[#E3EEDC] text-[#3b6e40] lg:w-[650px] inner-card animate lg:absolute lg:bottom-8  ">
            <div className="p-8 animate text-2xl font-bold lg:text-5xl">
                  DON'T MISS OUT!
            </div>
            <button className="py-4 px-8 mx-8 my-5 bg-[#91bf76] lg:text-lg  animate text-white">BOOK A DEMO</button>

        </div>
      </div>
    </>
  );
};

export default Benefit;
