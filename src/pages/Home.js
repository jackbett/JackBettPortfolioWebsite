import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css"
import JackImg from '../assets/JackPic.JPG'
import TechStack from '../components/TechStack';
import Cards from '../helpers/Cards.js';
import Experience from '../pages/Experience.js';
import React, { useState } from "react";
import ParticlesComponent from '../components/TsParticles.js'; // Update the import path
import BoopText from '../components/Boop.js';
import About from '../pages/About.js'; // Update the import path
import Intro from '../pages/Intro.js'

function Home() {
    return (
        <div className='home'>
            <ParticlesComponent />
            <Intro />
            <About />
            <Experience />
            
        </div>
    )
}

export default Home