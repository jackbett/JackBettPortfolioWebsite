import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import "../styles/TsParticles.css";
import TypeEffect from "../components/TypeEffect.js";
import Astronaut from "../assets/Astronaut.png";
import { Parallax } from "react-scroll-parallax";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const options = {
    preset: "stars",
    size: {
      value: { min: 0.05, max: 0.15 },
    },
  };

  return (
    <section id="particles" style={{ minHeight: windowHeight - 60 }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />

      <div className="main-particle-container">
        <div className="typeEffect">
          <TypeEffect />
        </div>

        <Parallax translateY={[-windowHeight, windowHeight]}>
          <div className="astroNaut">
            <img src={Astronaut} alt="Astronaut" />
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default ParticlesComponent;
