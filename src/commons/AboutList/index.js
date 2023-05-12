import React from "react";

const AboutList = ({ time, title, measure }) => {
  return (
    <div>
      <span className="about-info-title">{time}</span>
      <span className="about-info-name">
        {title} <br />
        {measure}
      </span>
    </div>
  );
};

export default AboutList;
