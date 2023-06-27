import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import '../styles/TsParticles.css';
import BoopText from '../components/Boop.js';

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <section id="particles" className="particles sec-padding">
       <div className="boopTextContainer">
            <BoopText text="Hello there!" rotation={20} timing={200} />
          </div>
      <div className="particles-container">
        <div className="particles__content">
         
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                },
              },
              particles: {
                color: {
                  value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
                },
                links: {
                  color: "#ffffff",
                  distance: 100,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: false,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 2500,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: 10,
                  random: true,
                },
              },
              polygon: {
                draw: {
                  enable: true,
                  lineColor: "rgba(255,255,255,0.2)",
                  lineWidth: 1,
                },
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ParticlesComponent;
