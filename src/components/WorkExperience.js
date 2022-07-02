import React from "react";
import "./../css/Sections.css";
import "../css/WorkExperience.css";

const Projects = () => {
  return (
    <section id="workExperience" className="section workExperience">
      <div className="title">
        <h1>Work Experience</h1>
      </div>
      <div className="content-work">
        <div className="work">
          <div className="company">
            <h1>INNOVAAP</h1>
            <h4>NOVEMBER 2021 — PRESENT</h4>
          </div>
          <div className="info">
            <h3>
              Fullstack development, experience with responsive react and
              angular websites, backend development on typescript, javascript,
              and solidity (blockchain), creating websites for government
              institutions.
            </h3>
            <div className="tecno">
              <span className="tag">ReactJs</span>
              <span className="tag">Angular</span>
              <span className="tag">HTML5</span>
              <span className="tag">CSS</span>
              <span className="tag">SCSS</span>
              <span className="tag">NodeJS</span>
              <span className="tag">Javascript</span>
              <span className="tag">Typescript</span>
              <span className="tag">Solidity</span>
              <span className="tag">MongoDB</span>
            </div>
          </div>
        </div>

        <div className="work">
          <div className="company">
            <h1>Backcountry.com</h1>
            <h4>FEBRUARY 2021 — JUNE 2022</h4>
          </div>
          <div className="info">
            <h3>Frontend development, experience with responsive react and typescript, adopting main modules from Javascript to Typescript. </h3>
            <div className="tecno">
              <span className="tag">ReactJs</span>
              <span className="tag">NodeJS</span>
              <span className="tag">Javascript</span>
              <span className="tag">Typescript</span>
              <span className="tag">Jest</span>
            </div>
          </div>
        </div>

        <div className="work">
          <div className="company">
            <h1>ELVA IA</h1>
            <h4>OCTOBER 2021 — NOVEMBER 2021</h4>
          </div>
          <div className="info">
            <h3>Software development, experience in creating applications for specific systems, develop apps on python and c#.</h3>
            <div className="tecno">
              <span className="tag">Python</span>
              <span className="tag">C#</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
