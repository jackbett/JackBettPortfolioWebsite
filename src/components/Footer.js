import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import { motion } from 'framer-motion';

import "../styles/Footer.css"

function Footer() {

  const handleClick = () => {};

  const handleClickEmail = () => {
    const email = 'jackabett@gmail.com'; // Replace with your dynamic email logic
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="footer">
        <div className='socialMedia'> 
        <a
                      href="https://www.linkedin.com/in/jackabett/"
                      onClick={handleClick}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                        <LinkedInIcon className="icon" color="#ffffff" />
                      </motion.button>
                    </a>   

                    <a
                      href="https://github.com/jackbett"
                      onClick={handleClick}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                        <GitHubIcon className="icon" color="#ffffff" />
                      </motion.button>
                    </a>   
      
            <button onClick={handleClickEmail}>
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <EmailIcon className="icon" />
                  </motion.button>
              </button>
          
        </div>
        <div>
            <p> &copy; 2023 Jack Bett</p>
        </div>
    </div>
  )
}

export default Footer