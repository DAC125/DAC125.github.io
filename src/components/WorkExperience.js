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
            <ul className="tecno">
              <li className="aa"><span className="tag">ReactJs</span></li>
              <li className="aa"><span className="tag">Angular</span></li>
              <li className="aa"><span className="tag">HTML5</span></li>
              <li className="aa"><span className="tag">CSS</span></li>
              <li className="aa"><span className="tag">SCSS</span></li>
              <li className="aa"><span className="tag">NodeJS</span></li>
              <li className="aa"><span className="tag">Javascript</span></li>
              <li className="aa"><span className="tag">Typescript</span></li>
              <li className="aa"><span className="tag">Solidity</span></li>
              <li className="aa"><span className="tag">MongoDB</span></li>
            </ul>
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
              <ul>
              <li className="aa"><span className="tag">ReactJs</span></li>
              <li className="aa"><span className="tag">Javascript</span></li>
              <li className="aa"><span className="tag">Typescript</span></li>
              <li className="aa"><span className="tag">Jest</span></li>
              </ul>
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
              <ul>
              <li className="aa"><span className="tag">Python</span></li>
              <li className="aa"><span className="tag">C#</span></li>
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
