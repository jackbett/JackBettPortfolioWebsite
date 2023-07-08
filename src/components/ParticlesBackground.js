import React, { useCallback, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadStarsPreset } from 'tsparticles-preset-stars';

const ParticlesBackground = () => {
  useEffect(() => {
    const documentHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--doc-height', `${window.screen.height}px`);
    };

    documentHeight();

    window.addEventListener('resize', documentHeight);

    return () => {
      window.removeEventListener('resize', documentHeight);
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
    height: 'var(--doc-height)',
    minHeight: '100vh',
    flex: '1',
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      style={backgroundStyle}
    />
  );
};

export default ParticlesBackground;
