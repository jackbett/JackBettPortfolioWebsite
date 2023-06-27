import React from 'react';
import VideoCarousel from '../components/VideoCarousel.js';
import { motion } from 'framer-motion';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            Glad to meet you! I hope you enjoy your stay and here is some information about me :)
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                Hello, I'm Jack! I am from <strong>Buffalo, New York</strong>. 
                I graduated from the University at Buffalo in 2019 and joined M&T Bank's 
                <strong> Technology Development Program</strong>.
              </p>
              <p className="about__content-details-para">
                I was able to develop and grow my programming skills while gaining experience
                in <strong>Azure Cloud</strong> and <strong>Java Spring Boot Microservices</strong>.
              </p>
              <p className="about__content-details-para">
                Outside of work, I enjoy hiking, photography, and videography. I'm also very imaginative
                and love using my coding skills to create something new and unique.
              </p>
            </div>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              {['Java', 'Python', 'React', 'CSS', 'Azure', 'GIT', 'SQL', 'IBM MQ', 'Kibana', 'CI/CD'].map((skill, index) => (
                <motion.div
                  key={index}
                  className="skills__skill"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="about__carousel">
          <h3 className="about__content-title">Videos I Took!</h3>
          <VideoCarousel />
        </div>
      </div>
    </section>
  );
}

export default About;
