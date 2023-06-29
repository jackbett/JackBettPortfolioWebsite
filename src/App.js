import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import ProjectDisplay from './pages/ProjectDisplay';
import About from "./pages/About";
import './font/rhuma_sinera/Rhuma Sinera Regular.ttf'
import ParticlesComponent from './components/TsParticles.js'; // Update the import path
import BoopText from './components/Boop.js';
import Intro from './pages/Intro.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id = 'splash'>
        <ParticlesComponent />
      </div>
      <div id = 'intro'>
        <Intro />      
      </div>
      <div id = 'about'>
      <About />
    </div>
    <div id = 'experience'>
        <Experience />
    </div>

    </div>
  );
}

export default App;
