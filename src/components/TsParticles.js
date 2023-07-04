import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import "../styles/TsParticles.css";
import TypeEffect from "../components/TypeEffect.js";
import IconScroll from "../components/IconScroll.js";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const options = {
    preset: "stars",
    size: {
      value: { min: 0.05, max: 0.15 },
    },
  };

  return (
    <section id="particles" className="particles-sec-padding">
      <div className="typeEffect">
        <TypeEffect />
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <IconScroll />
    </section>
  );
};

export default ParticlesComponent;
