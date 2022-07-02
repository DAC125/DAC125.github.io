import React from "react";
import "./../css/Sections.css";
import "./../css/Skills.css";
import ProgressBar from "@ramonak/react-progress-bar";

const Skils = () => {
  return (
    <section id="skills" className="section skills">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <div className="data">
      <h1 className="subtitle">Frontend</h1>
        <div className="feSkills">
          
          <div className="col1">
            <h1>React</h1>
            <ProgressBar completed={90} bgColor="#000080" customLabel=" "/>
            <h1>Javascript</h1>
            <ProgressBar completed={90} bgColor="#000080" customLabel=" "/>
            <h1>Typescript</h1>
            <ProgressBar completed={90} bgColor="#000080" customLabel=" "/>
          </div>
          <div className="col2">
            <h1>Angular</h1>
            <ProgressBar completed={50} bgColor="#000080" customLabel=" "/>
            <h1>HTML CSS</h1>
            <ProgressBar completed={90} bgColor="#000080" customLabel=" "/>
            <h1>Jest</h1>
            <ProgressBar completed={50} bgColor="#000080" customLabel=" "/>
          </div>
        </div>
        <h1 className="subtitle">Backend</h1>
        <div className="beSkills">
          
          <div className="col1">
            <h1>Python</h1>
            <ProgressBar completed={95} bgColor="#000080" customLabel=" "/>
            <h1>Node.js</h1>
            <ProgressBar completed={90} bgColor="#000080" customLabel=" "/>
            <h1>Java</h1>
            <ProgressBar completed={70} bgColor="#000080" customLabel=" "/>
          </div>
          <div className="col2">
            <h1>C/C++</h1>
            <ProgressBar completed={70} bgColor="#000080" customLabel=" "/>
            <h1>SQL</h1>
            <ProgressBar completed={60} bgColor="#000080" customLabel=" "/>
            <h1>MongoDB</h1>
            <ProgressBar completed={60} bgColor="#000080" customLabel=" "/>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Skils;
