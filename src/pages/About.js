import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/About.css';
import VideoPlayer from '../components/VideoPlayer.js';


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function About() {
  const controls = useAnimation();
  const [titleRef, titleInView] = useInView({ triggerOnce: false});
  const [contentRef, contentInView] = useInView({ triggerOnce: false});
  const [skillsRef, skillsInView] = useInView({ triggerOnce: false});

  useEffect(() => {
    if (titleInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, titleInView]);

  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.5 }
          }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">About Me</span>
            <span className="heading-sec__sub">
              Glad to meet you! I hope you enjoy your stay and here is some information about me :)
            </span>
          </h2>
        </motion.div>

        <div className="about__content">
          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.5 }
            }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
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
          </motion.div>
          <motion.div
            ref={skillsRef}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.5 }
            }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <div className="about__content-skills">
              <h3 className="about__content-title">My Skills</h3>
              <motion.div
                className="skills"
                variants={container}
                initial="hidden"
                animate={controls}
              >
                {['Java', 'Python', 'React', 'CSS', 'Azure', 'GIT', 'SQL', 'IBM MQ', 'Kibana', 'CI/CD', 'Relational Database', 'Agile', "Spring Boot"].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skills__skill"
                    variants={item}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
       
        <VideoPlayer />
        
      </div>
    </section>
  );
}

export default About;
