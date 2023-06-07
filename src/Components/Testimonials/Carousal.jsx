import React from "react";

const Carousal = (props) => {
  return (
    <div className="carousel flex items-center justify-center w-[100%] lg:p-3">
      <div className="img flex items-center justify-center ">
        <img
          src={props.data["image"]}
          alt=""
          // style={{ width: "200px", height: "200px" }}
          className="w-[200px] h-[200px] mx-4"
        />
      </div>

      <div className="comment  lg:w-[60%]">
        <div className="context">
          {props.data["content"]}
          <hr className="border-2 bg-[#91bf76] border-[#91bf76] my-2 w-[50px]" />
          <div className="flex gap-2 flex-wrap text-center lg:text-left">

            <div className="font-bold">{props.data["name"]}</div>
            <div>{props.data["designation"]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
