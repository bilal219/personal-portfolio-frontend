import TitleSection from "@/commons/TitleSection";
import React, { useEffect, useState } from "react";
import SkillList from "../SkillList";

const Skills = ({ titleSection, skillsArray }) => {
  const [arrayData, setArrayData] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleToggle = (index) => {
    setToggle(!toggle);
    updateSkillsArray(index, toggle);
  };

  const updateSkillsArray = (index, show) => {
    const list = [...arrayData];
    list[index].show = show;
    setArrayData(list);
  };
  const array = [
    {
      iconsClass: "uil uil-brackets-curly",
      skillName: "Frontend Developer",
      experience: "More than 4 years",
    },
    {
      iconsClass: "uil uil-server-network",
      skillName: "Backend Developer",
      experience: "More than 2 years",
    },
  ];
  useEffect(() => {
    const modifiedArray = skillsArray?.map((el, i) => {
      el.show = false;
      return el;
    });
    setArrayData(modifiedArray);
  }, [skillsArray]);
  return (
    <section className="skills section" id={titleSection?.Url || "skills"}>
      {titleSection?.Title && (
        <TitleSection
          title={titleSection?.Title}
          subtitle={titleSection?.Subtitle}
        />
      )}

      <div className="skills-container container grid">
        {arrayData && arrayData?.length
          ? arrayData?.map((el, i) => {
              return (
                <div
                  className={`skills-content ${
                    el?.show ? "skills-open" : "skills-close"
                  }`}
                  key={i}
                  onClick={() => handleToggle(i)}
                >
                  <SkillList
                    iconsClass={el?.attributes?.iconsClass}
                    skillName={el?.attributes?.SkillName}
                    experience={el?.attributes?.Experience}
                    percentageArray={el?.attributes?.SkillPercentage}
                  />
                </div>
              );
            })
          : ""}
      </div>
    </section>
  );
};

export default Skills;
