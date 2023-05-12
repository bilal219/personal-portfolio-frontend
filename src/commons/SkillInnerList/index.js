import React from "react";

const SkillInnerList = ({ skillName, skillPercent }) => {
  return (
    <div className="skills-data">
      <div className="skills-titles">
        <h3 className="skills-name">{skillName}</h3>
        <span className="skills-number">{skillPercent}</span>
      </div>
      <div className="skills-bar">
        <span
          className="skills-percentage"
          style={{ width: skillPercent }}
        ></span>
      </div>
    </div>
  );
};

export default SkillInnerList;
