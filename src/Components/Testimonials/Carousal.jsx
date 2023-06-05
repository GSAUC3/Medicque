import React from "react";

const Carousal = (props) => {
  return (
    <div className="carousel flex items-center justify-center w-[100%] lg:p-16">
      <div className="img flex items-center justify-center m-5 lg:w-[30%]">
        <img
          src={props.data["image"]}
          alt=""
          // style={{ width: "200px", height: "200px" }}
          className="w-[200px] lg:w-[300px] h-[200px] lg:h-[300px]"
        />
      </div>

      <div className="comment text-justify lg:m-4 lg:w-[70%]">
        <div className="context">
          {props.data["content"]}
          <div className="flex gap-2 flex-wrap text-left">
            <div className="font-bold">{props.data["name"]}</div>
            <div>{props.data["designation"]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
