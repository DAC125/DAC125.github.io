git import React from "react";
import "../css/Sections.css";
import "../css/Education.css";
import TECLogo from "../assets/logoTECBLANCO.png";
import Oxford from "../assets/oxford.png";
import Scrum from "../assets/scrumstudy.svg";

const Education = () => {
  return (
    <section id="education" className="section education">
      <div className="title">
        <h1>Education</h1>
      </div>
      <div className="content-education">
        <div className="edu">
          <div className="insti">
            <img src={TECLogo} alt="Logo TEC" className="img-edu" />
          </div>
          <div className="insti-info">
            <h1>Bachelor's Degree in Computer Engineering</h1>
            <h4>FEBRUARY 2018 — JUNE 2022</h4>
          </div>
        </div>

        <div className="edu">
          <div className="insti">
            <img src={Oxford} alt="Logo Oxford" className="img-edu" />
          </div>
          <div className="insti-info">
            <a href="https://drive.google.com/file/d/1QD2JNHmj6cNxVp1y6ZTyglS8FgPc6g9Y/view">
              <h2>B1 English certified</h2>
            </a>
            <h4>OCTOBER 2021</h4>
          </div>
        </div>

        <div className="edu">
          <div className="insti">
            <img src={Scrum} alt="Logo ScrumStudy" className="img-edu" />
          </div>
          <div className="insti-info">
            <a href="https://www.scrumstudy.com/certification/verify?type=SFC&number=877518">
              <h2>Scrum Fundamentals Certified, SCRUMstudy</h2>
            </a>
            <h4>OCTOBER 2021</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
