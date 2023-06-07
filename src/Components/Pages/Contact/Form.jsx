import React from "react";
import './index.scss';


const contactForm = (props) => {

  return (
    <div className={`lg:w-[40%] mx-3 ${props.class}`}>
      <form className="contact-form">
        <div >
          <div className="flex gap-6 name-phone ">
            <div className="w-full">
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline focus:border-1 focus:border-[#91bf76]"
                type="text"
                placeholder="Name"
                name="name"
                id='name'
                />
            </div>
            <div className="w-full">
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline focus:border-1 focus:border-[#91bf76]"
                type="text"
                id='phone'
                name="phone"
                placeholder="Phone"
                />
            </div>
          </div>

          <div className="mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline focus:border-1 focus:border-[#91bf76]"
              placeholder="Email"
              id='email'
              name="email"
              type="text"
              />
          </div>
          <div className="mt-4">
            <textarea
              className="shadow appearance-none border rounded w-full py-3 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline focus:border-1 focus:border-[#91bf76]"
              id='message'
              name="message"
              placeholder="Message"
              rows='4'
              ></textarea>
          </div>
          <div className="mt-4">
            <button className="w-full border-2 border-[#91bf76] uppercase  rounded px-6 py-2 text-[#91bf76] hover:bg-[#91bf76] hover:text-white transition-colors duration-300">

              contact us
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default contactForm;
