import React from "react";
import Footer from "../components/Footer";
import Navbar from '../components/NavBar';

import TechStack from "../components/TechStack";
import AbImg from "../images/clint-patterson-ulftbH1sA0k-unsplash.jpg";
import "./About.css";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <div className="about-container">
      <div className="banner-container">
        <Navbar />
        <img src={AbImg} alt="Banner" className="banner-img" />
        <div className="overlay"></div>
        <div className="text-container">
          <h3 className="int">
            <Typewriter
              options={{
                strings: [
                  "Let me introduce Myself!",

                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            /></h3>
          <p>
            I am a full-stack developer with a passion for creating dynamic and
            responsive web applications. With a strong foundation in both
            frontend and backend technologies, I enjoy building comprehensive
            solutions that meet client needs and provide excellent user
            experiences.
          </p>
          <h3>Skills I Possess</h3>
          <TechStack />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About;
