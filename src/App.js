import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import ProjectDisplay from './pages/ProjectDisplay';
import About from "./pages/About";
import './font/rhuma_sinera/Rhuma Sinera Regular.ttf'


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/projects" element={<Projects />} />
        <Route path = "/experience" element={<Experience />} />
        <Route path = "/project/:id" element={ <ProjectDisplay />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
