import React,{useEffect} from "react";
// import ScrollReveal from "scrollreveal";
import { useLocation } from "react-router-dom";
import "./index.scss";

const defaultImageUrl =
  "https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_640.png";

const team = [
  {
    name: "Priyanka Chakraborty",
    image: "https://static1.s123-cdn-static-a.com/uploads/8102986/400_6476e4e35f236.png",
    role: "Founder and CEO",
    desc: "Priyanka, the visionary founder of Medicque, combines legal expertise with a passion for healthcare technology. Her leadership drives innovation, bridging compliance and innovation to revolutionize healthcare and empower doctors and patients.",
  },
  {
    name: "ABC",
    image:
      "",
    role: "Junior Software Developer",
    desc: "ABC, a skilled Junior Software Developer at Medicque, brings exceptional coding expertise and problem-solving skills. His dedication to writing clean, efficient code ensures reliable and high-performing healthcare technology software for our clients.",
  },
  {
    name: "Dr. Sombit Chowdhury",
    image: "https://static1.s123-cdn-static-a.com/uploads/8102986/400_647718c5a7458.jpg",
    role: "Domain Specialist",
    desc: "Sombit, an accomplished surgeon and Subject Matter Expert at Medicque, combines medical expertise with technical proficiency to drive our cutting-edge healthcare technology solutions.",
  },
];

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);



  
  return (
    <div className="text-center">
      <div className="about-content flex items-center justify-center text-white">
        <div className=" lg:w-[45%]  flex flex-col lg:text-left absolute lg:right-[100px] mx-5 lg:p-20 lg:text-xl">
          <h1 className="text-2xl lg:text-5xl animate max-[500px]:text-center font-medium lg:mt-[200px]">ABOUT US</h1>
          
          <hr className="border-2 border-[#91bf76] bg-[#91bf76] my-7 " />

          <p className="animate">
            Medicque is a leading healthcare technology company dedicated to
            streamlining workflows, enhancing patient care, and improving
            practice management. Our cutting-edge software empowers doctors to
            focus on providing exceptional healthcare.
          </p>
          <p className="animate">
            Our goal is to provide doctors with a seamless and user-friendly
            platform that saves time, improves efficiency, and ultimately
            enables them to deliver exceptional healthcare services to their
            patients.
          </p>
        </div>
      </div>
      <div className="flex items-center flex-col justify-center text-center text-[#124574] py-16">
        <div className="lg:text-xl lg:w-[70%] mx-5 ">
          <p className=" my-6 animate">
            At Medicque, we are dedicated to revolutionizing healthcare
            technology for doctors.
          </p>
          <p className=" my-6 animate">
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
      <div className="flex items-center flex-col justify-center text-center bg-[#E3EEDC] text-green-800 py-10 lg:p-10">
        <h1 className="text-2xl lg:text-5xl animate  mt-16">TEAM</h1>
          <hr className="border border-[#91bf76] bg-[#91bf76] my-9 w-[50px] " />

        <div className="flex  items-center justify-center gap-8 flex-wrap my-6 mx-5">
          {team.map((item, i) => (
            <div className="lg:w-[300px] animate flex flex-col items-center  lg:h-[600px]  lg:text-lg ">
              <img
                src={item.image ? item.image : defaultImageUrl}
                alt="dp"
                className="rounded-full animate object-cover"
                style={{ width: "200px", height: "200px" }}
              />
              <h2 className=" lg:text-xl mt-5 font-bold">{item.name}</h2>
              <hr className="border-2 border-[#91bf76] my-3 bg-[#91bf76]" />

              <div>{item.role}</div>
              <div>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="booking h-[60vh] p-10 flex flex-col items-center justify-center">
        <h1 className="text-2xl lg:text-5xl  animate">BOOK A DEMO</h1>
        <hr className="border-2 border-[#91bf76] bg-[#91bf76]  my-8" />

        <p className="lg:text-xl lg:w-[70%] text-center animate">
          Experience the power of our healthcare technology firsthand. Book a
          demo today and discover how Medicque can revolutionize your medical
          practice.
        </p>
        <button className="py-4 px-8 mx-2 my-5 bg-[#91bf76] lg:text-lg  animate text-white">BOOK A DEMO</button>
      </div>
    </div>
  );
};

export default About;
