import React, { useCallback, useEffect, useState } from 'react';
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
    height: '100lvh',
    minHeight: '100lvh',
    flex: '1',
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 0}}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        style={backgroundStyle}
      />
    </div>
  );
};

export default ParticlesBackground;
