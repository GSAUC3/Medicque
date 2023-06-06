import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./index.scss";

const PREMIUM_FEATURES = [
  {
    title: "Hassle-free Revenue Management and Insurance Document Management",
    img:"https://static1.s123-cdn-static-a.com/ready_uploads/media/9029563/400_624404029fd49.jpg",
    desc: "Keeping track of pending payments and managing insurance documents can be time-consuming. Our software helps doctors streamline revenue management by providing automated reminders for pending payments. It also allows for efficient management of insurance documents, ensuring compliance and reducing paperwork.",
  },
  {
    title: "Usable Graphical Data Visualization",
    img:"https://static1.s123-cdn-static-a.com/ready_uploads/media/5531423/400_5ee106519f1bf.jpg",
    desc: "Unlock the power of medical data with our software's intuitive graphical data visualization capabilities. Doctors can generate meaningful graphs and charts that present medical information in a visually appealing and easily understandable format. This empowers doctors to make informed decisions and communicate complex concepts to patients effectively.It helps in medical research, paper publication and efficient data collection for studies.",
  },
  {
    title: "Efficient Scheduling and Appointment Booking",
    img:"https://static1.s123-cdn-static-a.com/uploads/2031/400_5a15abaa0b515.jpg",
    desc: "Say goodbye to manual appointment scheduling and juggling multiple calendars. Our software simplifies the process by offering an intuitive interface where doctors can manage their schedules effortlessly. Patients can easily book appointments online, reducing phone call volume and administrative burden.",
  },
];

const BASIC_FEATURES = [
  {
    title: "Comprehensive Patient Information Management",
    img:"https://static1.s123-cdn-static-a.com/ready_uploads/media/23817/400_5cdc4f90760d8.jpg",
    desc: "Gone are the days of sifting through stacks of paper forms. Our software acts as an intelligent information intake form, capturing relevant patient details in a concise and organized manner. This information is then transformed into a presentable and summarized format, enabling doctors to quickly access critical patient data before an appointment or when needed.",
  },
  {
    title: "Enhanced Prescription Writing",
    img:"https://static1.s123-cdn-static-a.com/uploads/2031/400_5a281d5cab608.jpg",
    desc: "Our software takes prescription writing to the next level. With built-in tools and integrations, doctors can create accurate and legible prescriptions efficiently. It includes a comprehensive medication database, drug interaction checker, and dosage recommendations, ensuring patient safety and minimizing errors.",
  },
  {
    title: "Seamless Record Keeping",
    img:"https://static1.s123-cdn-static-a.com/uploads/2031/400_5a15abaa0b515.jpg",
    desc: "Maintaining patient records can be a daunting task, but our software simplifies the process. It provides a secure and centralized platform where doctors can store and access patient records easily. Our robust search functionality enables quick retrieval of specific information, saving time and reducing administrative overhead.",
  },
];

const addOns = [
  {
    title: "Graphical Interpretations of Reports",
    img:"https://static1.s123-cdn-static-a.com/uploads/2031/400_5a15ab3119d59.jpg",
    desc: "Understanding complex medical reports is now easier than ever. Our software generates graphical interpretations of lab results and diagnostic reports, making it simpler for doctors to analyze and explain the findings to patients. These visual representations facilitate better communication and patient engagement.",
  },
  {
    title: "Secure Patient Portal and streamline clinic management",
    img:"https://static1.s123-cdn-static-a.com/uploads/2031/400_5a281d5cab608.jpg",
    desc: "Our software includes a secure patient portal that enables patients to manage their medical records conveniently. They can access their personal health information, view test results, request appointments, and securely communicate with their healthcare providers. This empowers patients to take an active role in their healthcare journey. It streamlines clinics by automating appointment scheduling, comprehensive records and revenue management.",
  },
];

const featureComponent = (props) => {
  return (
    <>
      <div
        className={`flex items-center justify-center gap-5 flex-col ${props.bgColor}  ${props.textColor} py-20 `}
      >
        <h1 className="text-2xl font-bold lg:text-5xl animate">
          {props.heading}
        </h1>
        <hr className="border-2 border-[#91bf76] my-5 " />

        <div className="flex justify-center text-center animate max-sm:flex-col max-sm:gap-8">
          {props.content.map((item, i) => (
            <div key={i} className="lg:w-[25%] mx-8 flex flex-col items-center ">
              <img src={item.img} alt="images" className="animate rounded-full object-cover w-[120px] h-[120px]"/>
              <div className="text-lg font-bold animate my-3">{item.title}</div>
              <div className="text-lg animate">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Services = () => {
  useEffect(() => {
    ScrollReveal().reveal(".animate", {
      delay: 100,
      easing: "ease-out",
      interval: 200,
      origin: "bottom",
      distance: "100px",
    });
  }, []);
  return (
    <div>
      <div className="h-[70vh] flex items-center justify-center services-section1">
        <div className="text-white flex flex-col items-center justify-content gap-5 mx-5">
          <h1 className="text-2xl lg:text-5xl animate">OUR SERVICES</h1>
          <hr className="border-2 border-[#91bf76] my-5 " />
          <p className="lg:w-[80%] text-center animate">
            Our comprehensive range of services includes efficient scheduling
            and appointment booking, comprehensive patient information
            management, enhanced prescription writing, graphical interpretations
            of reports, seamless record keeping, revenue management, and
            insurance document management.
          </p>
        </div>
      </div>

      {featureComponent({
        textColor: "text-[#124574]",
        heading: "BASIC FEATURES",
        content: BASIC_FEATURES,
      })}

      {featureComponent({
        heading: "PREMIUM FEATURES",
        content: PREMIUM_FEATURES,
        bgColor: "bg-[#91bf766b]",
        textColor: "text-green-800",
      })}

      {featureComponent({
        heading: "ADD - ONs",
        content: addOns,
        textColor: "text-[#124574]",
      })}

      <div className="flex items-center justify-center h-[60vh] service-last-section text-white">
        <div className="flex items-center justify-content flex-col">
          <h1 className="animate text-2xl lg:text-5xl  text-center">
            DISCOVER MEDICQUE
          </h1>
          <hr className="border-2 border-[#91bf76] my-5 " />
          <p className="animate">UNLEASH YOUR SUPERPOWERS</p>
          <button className="animate py-4 px-8 mx-2 my-5 bg-[#91bf76] lg:text-lg text-white">
            BOOK A DEMO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
