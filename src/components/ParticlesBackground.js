import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadStarsPreset } from 'tsparticles-preset-stars';

const ParticlesBackground = () => {
 
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const options = {
    preset: 'stars',
    size: {
      value: { min: 0.05, max: 0.15 },
    },
  };

  const backgroundStyle = {
    minHeight: '100lvh',
    height: '100lvh',
    flex: '1 1 0%',
  };

  return (
    <div style={{ top: 0, left: 0, width: '100%', zIndex: 0}}>
      <Particles
        height='100lvh'
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        style={backgroundStyle}
        full
      />
    </div>
  );
};

export default ParticlesBackground;
