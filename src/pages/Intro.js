import React, { useEffect } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import JackImg from '../assets/JackPic.JPG';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Intro.css';

function Intro() {
  const handleClick = () => {
  };

  const controlsTitle = useAnimation();
  const [titleRef, titleInView] = useInView({ triggerOnce: false });
  const controlsContent = useAnimation();
  const [contentRef, contentInView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (titleInView) {
      controlsTitle.start('visible');
    } else {
      controlsTitle.start('hidden');
    }
  }, [controlsTitle, titleInView]);

  useEffect(() => {
    if (contentInView) {
      controlsContent.start('visible');
    } else {
      controlsContent.start('hidden');
    }
  }, [controlsContent, contentInView]);

  return (
    <section id="intro" className="intro sec-padding">
      <div className="intro-container">
        <div className="intro__content">
          <motion.div
            ref={titleRef}
            initial="hidden"
            animate={controlsTitle}
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
                <div className="intro__content-icons intro__content-icons-desktop">
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
              </div>
          </motion.div>
        
          <motion.div
            ref={contentRef}
            className="intro__content-right"
            initial="hidden"
            animate={controlsContent}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.5 },
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
            <div className="intro__content-icons intro__content-icons-mobile">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
