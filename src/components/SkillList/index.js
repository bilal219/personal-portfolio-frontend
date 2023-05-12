import SkillInnerList from "@/commons/SkillInnerList";
import React from "react";

const SkillList = ({ iconsClass, skillName, experience, isToggled }) => {
  return (
    <>
      <div className="skills-header">
        <i className={`${iconsClass} skills-icon`}></i>

        <div>
          <h1 className="skills-title">{skillName}</h1>
          <span className="skills-subtitle">{experience}</span>
        </div>
        <i className="uil uil-angle-down skills-arrow"></i>
      </div>
      <div className="skills-list grid">
        <SkillInnerList skillName={"Html"} skillPercent={"90%"} />
        <SkillInnerList skillName={"CSS"} skillPercent={"80%"} />
        <SkillInnerList skillName={"JavaScript"} skillPercent={"60%"} />
        <SkillInnerList skillName={"React"} skillPercent={"85%"} />
      </div>
    </>
  );
};

export default SkillList;
