import './App.css';
import Experience from "./pages/Experience";
import Navbar from './components/Navbar';
import About from "./pages/About";
import './font/rhuma_sinera/Rhuma Sinera Regular.ttf'
import ParticlesComponent from './components/TsParticles.js'; // Update the import path
import Intro from './pages/Intro.js'
import Video from './pages/Video.js'
import Footer from './components/Footer.js'
import { ParallaxProvider } from 'react-scroll-parallax';



function App() {
  return (
    <ParallaxProvider>
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
      <div id = 'video'>
      <Video />
      </div>
      <div id = 'experience'>
      <Experience />
      </div>
    <Footer />
    </div>
    </ ParallaxProvider>
  );
}

export default App;
