import React, { useLayoutEffect } from 'react';
import './App.css';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import About from './pages/About';
import Splash from './pages/Splash';

import './font/rhuma_sinera/Rhuma Sinera Regular.ttf';
import './font/sharpie/Sharpie-Regular.ttf';
import Intro from './pages/Intro.js';
import Video from './pages/Video.js';
import Footer from './components/Footer.js';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  useLayoutEffect(() => {
    const setAppHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };

    setAppHeight();
    window.addEventListener('resize', setAppHeight);

    return () => {
      window.removeEventListener('resize', setAppHeight);
    };
  }, []);

  return (
    <ParallaxProvider>
      {/* <Navbar /> */}
      <div className="App">
      <Navbar />

        <ParticlesBackground /> {/* Use ParticlesBackground component as the background */}
        
        <Splash></Splash>
        <div id="intro">
          <Intro />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="video">
          <Video />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
