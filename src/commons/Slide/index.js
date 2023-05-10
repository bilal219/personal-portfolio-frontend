import React from "react";

const Slide = ({ text }) => {
  return (
    <div className="carousel-item">
      <div className=" bg-red-600 ">{text}</div>
    </div>
  );
};

export default Slide;
