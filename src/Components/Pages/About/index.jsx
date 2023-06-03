import React from "react";
import "./index.scss";

const defaultImageUrl =
  "https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_640.png";

const team = [
  {
    name: "Priyanka Chakraborty",
    image: "",
    role: "Founder and CEO",
    desc: "Priyanka, the visionary founder of Medicque, combines legal expertise with a passion for healthcare technology. Her leadership drives innovation, bridging compliance and innovation to revolutionize healthcare and empower doctors and patients.",
  },
  {
    name: "ABC",
    image:
      "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_640.png",
    role: "Junior Software Developer",
    desc: "ABC, a skilled Junior Software Developer at Medicque, brings exceptional coding expertise and problem-solving skills. His dedication to writing clean, efficient code ensures reliable and high-performing healthcare technology software for our clients.",
  },
  {
    name: "Dr. Sombit Chowdhury",
    image: "",
    role: "Domain Specialist",
    desc: "Sombit, an accomplished surgeon and Subject Matter Expert at Medicque, combines medical expertise with technical proficiency to drive our cutting-edge healthcare technology solutions.",
  },
];

const About = () => {
  return (
    <div className="">
      <div className="about-content flex items-center justify-center text-white">
        <div className="lg:w-[40%] text-justify absolute lg:right-10 p-20">
          <h1 className="text-6xl lg:my-5 my-10 ">ABOUT</h1>
          <p className="text-xl">
            Medicque is a leading healthcare technology company dedicated to
            streamlining workflows, enhancing patient care, and improving
            practice management. Our cutting-edge software empowers doctors to
            focus on providing exceptional healthcare.
          </p>
          <p className="text-xl">
            Our goal is to provide doctors with a seamless and user-friendly
            platform that saves time, improves efficiency, and ultimately
            enables them to deliver exceptional healthcare services to their
            patients.
          </p>
        </div>
      </div>
      <div className="flex items-center flex-col justify-center text-center text-[#124574] py-16">
        <div className=" lg:w-[80%] mx-4 ">
          <p className="text-xl my-6 ">
            At Medicque, we are dedicated to revolutionizing healthcare
            technology for doctors.
          </p>
          <p className="text-xl my-6">
            Our software empowers medical professionals by simplifying clinic
            management, streamlining workflows, and enhancing patient care. We
            believe that technology should be intuitive, efficient, and precise,
            which is why we have developed a comprehensive suite of features
            including appointment scheduling, concise patient information
            intake, intelligent prescription writing, graphical interpretations
            of reports, revenue management, insurance document management, and
            robust record keeping.
          </p>
        </div>
      </div>
      <div className="flex items-center flex-col justify-center text-justify bg-[#91bf766b] text-green-800 p-10">
        <h1 className="text-4xl my-9">TEAM</h1>
        <div className="flex  items-center justify-center gap-8 flex-wrap">
          {team.map((item, i) => (
            <div className="lg:w-[300px] flex flex-col items-center my-6  h-[600px]  text-lg ">
              <img
                src={item.image ? item.image : defaultImageUrl}
                alt="dp"
                className="rounded-full"
                style={{ width: "200px", height: "200px" }}
              />
              <h2 className="font-bold text-xl my-5">{item.name}</h2>
              <div>{item.role}</div>
              <div>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="booking h-[60vh] p-10 flex flex-col items-center justify-center">
        <h1 className="lg:text-6xl my-5">BOOK A DEMO</h1>
        <p className="text-xl my-7 lg:w-[70%] text-center">
          Experience the power of our healthcare technology firsthand. Book a
          demo today and discover how Medicque can revolutionize your medical
          practice.
        </p>
        <button className="py-4 px-8 mx-2 my-5 bg-[#91bf76] lg:text-lg text-white">BOOK A DEMO</button>
      </div>
    </div>
  );
};

export default About;
