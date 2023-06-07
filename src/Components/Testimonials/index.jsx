// import "./index.scss";
import "./index.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Carousal from "./Carousal";
import React from "react";

const data = [
  {
    name: "Dr. Sombit Chowdhury",
    designation: "ENT Surgeon",
    image:
      "https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768_640.png",
    content:
      "Medicque has been a game-changer for my practice. The intuitive interface and efficient scheduling tools have streamlined my workflows, allowing me to focus more on delivering exceptional patient care. I highly recommend Medicque to fellow doctors looking to enhance their practice management.",
  },
  {
    name: "Dr. Michael Anderson",
    designation: "Cardiologist",
    image:"https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
    content:
      "As a specialist, I deal with complex medical reports on a daily basis. Medicque's graphical interpretations of reports have made it easier for me to analyze and explain findings to my patients. The software's data visualization capabilities are truly impressive and have improved patient understanding and engagement.",
  },
  {
    name: "Dr. Julia Western",
    designation: "General Physician",
    image:"https://static1.s123-cdn-static-a.com/ready_uploads/media/2692690/400_5e0be51c56b84.jpg",
    content:
      "Medicque's patient information management system has been a game-changer for my clinic. It has eliminated the hassle of sifting through paper forms and allowed me to access key patient data quickly and securely. The comprehensive and organized patient records have significantly improved my practice efficiency.",
  },
  {
    name: "Dr. Robert Davis",
    designation: " Psychiatrist",
    image:"https://cdn.pixabay.com/photo/2020/03/14/17/05/virus-4931227_640.jpg",
    content: "Prescription writing has never been easier with Medicque. The software's built-in tools, comprehensive medication database, and drug interaction checker have minimized errors and improved patient safety. Medicque has become an invaluable tool in my daily practice.",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col w-full">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        loop={true}
      >
        {data.map((item, i) => (
          <div key={i}>
            <SwiperSlide>
              <Carousal data={item} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
