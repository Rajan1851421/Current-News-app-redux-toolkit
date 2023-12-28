import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import Editor from "/src/components/Resume/Editor/Editor";
import Resume from "../Resume/Resume";

import styles from "./Body.module.css";

function Body() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  return (
    <div className={styles.container}>
      <p className="md:text-6xl w-1/2 text-center bg-orange-400 py-2 rounded-full shadow-xl shadow-orange-700
      font-bold sm:w-full sm:text-2xl md:w-1/2 lg:w-1/2  lg:text-6xl">Resume Builder</p>
      <div className="sm:flex-col  md:flex-row lg:flex-row justify-center ">
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${activeColor === item ? styles.active : ""
                }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <div className="flex flex-row justify-center">
                <button className=" my-5 px-5 py-3 bg-blue-700 text-white rounded-lg text-center">  Download & Print </button>

              </div>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className={styles.main}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />
      </div>
    </div>
  );
}

export default Body;