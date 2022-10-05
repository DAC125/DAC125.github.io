import React from "react";
import "./../../css/Sections.css";
import "./About.css";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="data">
        <div className="title">
          <h1>About Me</h1>
        </div>
        <div className="content-about">
          <p>
            I am a very motivated and hard-working engineer. I have great
            communications and teamwork skills, which help to solve different
            conflicts that could eventually happen. Seeking to face new
            challenges that will improve my knowledge, developing fast responses
            and solutions.
          </p>
          <p>
            I am eager to learn and grow as a professional in a company that can
            help me achieve my maximum potential.
          </p>
        </div>
      </div>
      <div className="contacts">
        <div className="email">
          <AiOutlineMail size={40} style={{ color: "white" }} />
          <h1>Email</h1>
          <div>
            <a href="mailto:diegoacuna170@gmail.com">diegoacuna170@gmail.com</a>
          </div>
        </div>
        <div className="adress">
          <GoLocation size={30} style={{ color: "white" }} />
          <h1>Address</h1>
          <div>
            <h4>Naranjo, Alajuela. Costa Rica</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
