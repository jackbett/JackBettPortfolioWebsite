import React, { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadStarsPreset } from 'tsparticles-preset-stars';

const ParticlesBackground = () => {
  const [backgroundHeight, setBackgroundHeight] = useState(0);

  useEffect(() => {
    const calculateBackgroundHeight = () => {
      const doc = document.documentElement;
      const windowHeight = window.innerHeight || 0;
      const searchBarHeight = window.screen.height - windowHeight;
      const backgroundHeight = windowHeight + searchBarHeight;
      doc.style.setProperty('--background-height', `${backgroundHeight}px`);
      setBackgroundHeight(backgroundHeight);
    };

    calculateBackgroundHeight();

    window.addEventListener('resize', calculateBackgroundHeight);

    return () => {
      window.removeEventListener('resize', calculateBackgroundHeight);
    };
  }, []);

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
    height: `${backgroundHeight}px`,
    minHeight: '100vh',
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
