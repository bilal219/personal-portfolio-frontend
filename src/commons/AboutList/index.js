import { HtmlParser } from "@/utils/HtmlParser";
import React from "react";

const AboutList = ({ time, description }) => {
  return (
    <div>
      <span className="about-info-title">{time}</span>
      <HtmlParser
        isSpan={true}
        parserClass={"about-info-name"}
        data={description}
      />
      {/* <span className="about-info-name">
        {title} <br />
        {measure}
      </span> */}
    </div>
  );
};

export default AboutList;
