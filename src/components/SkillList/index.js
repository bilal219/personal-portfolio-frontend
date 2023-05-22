import SkillInnerList from "@/commons/SkillInnerList";
import React from "react";

const SkillList = ({ iconsClass, skillName, experience, percentageArray }) => {
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
        {percentageArray &&
          percentageArray?.length &&
          percentageArray?.map((el, i) => (
            <SkillInnerList
              skillName={el?.SubSkillTitle}
              skillPercent={el?.Percentag}
              key={i}
            />
          ))}
      </div>
    </>
  );
};

export default SkillList;
