import React from "react";

const TitleSection = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <span className="section-subtitle">{subtitle}</span>
    </>
  );
};

export default TitleSection;
