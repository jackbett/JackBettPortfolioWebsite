import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import JackImg from '../assets/JackPic.JPG';
import { motion } from 'framer-motion';
import '../styles/Intro.css';

function Intro() {
  const handleClick = () => {
    // Handle the button click event here
    // You can navigate to a new page or perform any other action
  };

  return (
    <section id="intro" className="intro sec-padding">
      <div className="intro-container">
        <div className="intro__content">
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
                  <motion.button whileHover={{ scale: 1.1 }}>
                    <LinkedInIcon className="icon" />
                  </motion.button>
                </a>
              </div>

              <div className="intro__content-icons-div">
                <a href="https://google.com" onClick={handleClick}>
                  <motion.button whileHover={{ scale: 1.1 }}>
                    <EmailIcon className="icon" />
                  </motion.button>
                </a>
              </div>
            </div>
          </div>

          <div className="intro__content-right">
            <div className="imgContainer">
              <img src={JackImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
