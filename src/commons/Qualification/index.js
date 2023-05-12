import React, { useState } from "react";
import TitleSection from "../TitleSection";
import QualificationList from "@/components/QualificationList";

const Qualification = () => {
  const [mode, setMode] = useState("Education");
  console.log(mode, "mode");
  const array = [
    {
      title: "Education",
      subArray: [
        {
          title: "Information Technology",
          suntitle: "University of the Punjab",
          data: "2017 - 2021",
        },
        {
          title: "Information Technology",
          suntitle: "University of the Punjab",
          data: "2017 - 2021",
        },
        {
          title: "Information Technology",
          suntitle: "University of the Punjab",
          data: "2017 - 2021",
        },
        {
          title: "Information Technology",
          suntitle: "University of the Punjab",
          data: "2017 - 2021",
        },
        {
          title: "Information Technology",
          suntitle: "University of the Punjab",
          data: "2017 - 2021",
        },
      ],
    },
    {
      title: "Work",
      subArray: [
        {
          title: "Information Technology",
          suntitle: "University of the Punjab",
          data: "2017 - 2021",
        },
        {
          title: "Information Technology",
          suntitle: "University of the Punjab",
          data: "2017 - 2021",
        },
      ],
    },
  ];
  return (
    <section className="qualification section">
      <TitleSection title={"Qualification"} subtitle={"My Personal Juorney"} />
      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div
            className="qualification-btn btn-flex"
            onClick={() => setMode("Education")}
          >
            <i className="uil uil-graduation-cap qualification-icon"></i>
            Education
          </div>
          <div
            className="qualification-btn btn-flex"
            onClick={() => setMode("Work")}
          >
            <i className="uil uil-briefcase-alt qualification-icon"></i>
            Work
          </div>
        </div>
        <div className="qualification-sections">
          {/* education */}

          {array?.length
            ? array?.map((el, i) => (
                <div
                  className={`qualification-content ${
                    el?.title === mode ? "qualification-active" : ""
                  }`}
                  data-content
                  id="education"
                  key={i}
                >
                  {el?.subArray?.length &&
                    el?.subArray?.map((obj, i) => (
                      <QualificationList
                        key={i}
                        title={obj?.title}
                        subtitle={obj?.suntitle}
                        date={obj?.data}
                        islast={el?.subArray?.length - 1 === i}
                        isEven={(i + 1) % 2 === 0}
                      />
                    ))}
                </div>
              ))
            : ""}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
