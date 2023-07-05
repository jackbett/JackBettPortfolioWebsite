import React, { useCallback } from "react";
import "../styles/TsParticles.css";
import TypeEffect from "../components/TypeEffect.js";
import Astronaut from "../assets/Astronaut.png";
import { Parallax } from "react-scroll-parallax";

const Splash = () => {
  return (
    <section id="particles" className="particles-sec-pad">
      <div className="main-particle-container">
        <div className="typeEffect">
          <TypeEffect />
        </div>
        <Parallax translateY={["-100%", "100%"]}>
          <div className="astroNaut">
            <img src={Astronaut} alt="Astronaut" />
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default Splash;
