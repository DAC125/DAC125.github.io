import React from "react";
import CardProject from "../../components/Card/Card";
import callpetLogo from "../../assets/callpetLogo.jpeg";
import serverLogo from "../../assets/serverLogo.png";
import speechLogo from "../../assets/speech.png";
import etherium from "../../assets/ethereum.jpeg";
import "./Projects.css";
import "./../../css/Sections.css";

const Projects = () => {
  return (
    <section id="projects" className="section project">
      <div className="title">
        <h1>Public Projects</h1>
      </div>
      <div className="project-content">
        {/* <h1>hola Mundo</h1> */}
        <CardProject
          title="Ethereum certified Documents API"
          img={etherium}
          text="ECD API is an application that stores the document in the IPFS service of infura, it cretates hash that is stored in a public Ethereum Blockchain."
          projectRepo="https://github.com/DAC125/ETHCertifiedDoc-ECDApi"
        />
        <CardProject
          title="SpeechToText"
          img={speechLogo}
          text="An internal TEC project to help internal TEC workers transcribe virtual meetings implemented in Python with Flask and ReactJs"
          projectRepo="https://github.com/DAC125/SpeechToText"
        
        />
        <CardProject
          title="Call-Pet Website"
          img={callpetLogo}
          text="A project to manage the sales, statistics and maintain the control of each animal that of the company serve implemented in ReactJs"
          projectRepo="https://github.com/DAC125/call-pet"
        />
        <CardProject
          title="HTTP server from scratch"
          img={serverLogo}
          text="An HTTP Server implemented in Java applying Solid principles and using REST API from scratch to learn how the SOLID principles and how an HTTP server works"
          projectRepo="https://github.com/DAC125/http-server-solid-oop"
        />
      </div>
    </section>
  );
};

export default Projects;
