import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import JackImg from '../assets/JackPic.JPG';

import '../styles/Intro.css';

function Intro() {
  const handleClick = () => {
    // Handle the button click event here
    // You can navigate to a new page or perform any other action
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <section id="intro" className="intro sec-padding">
      <div className="intro-container">
        <div className="intro__content">
          <motion.div
            ref={ref}
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
            <div className="intro__content-left">
              <h3 className="intro__content-title">
                Hi, I'm Jack <span className="wave">👋</span>
              </h3>
              <div className="intro__content-details">
                <p className="intro__content-details-para">
                  I am a Back End Software Engineer located in Buffalo, New York.
                </p>
              </div>
              <div className="intro__content-icons">
                <div className="intro__content-icons-linkedin">
                  <a href="https://google.com" onClick={handleClick}>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                      <LinkedInIcon className="icon" />
                    </motion.button>
                  </a>
                </div>
                <div className="intro__content-icons-div">
                  <a href="https://google.com" onClick={handleClick}>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                      <EmailIcon className="icon" />
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

           <motion.div
            className="intro__content-right"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: '100%' }
            }}

            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <div className="card">
              <div className="imgContainer">
                <img src={JackImg} alt="" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
