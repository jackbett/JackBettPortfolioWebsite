import React from "react";
import "./styles/IconScroll.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const ScrollIcon = () => {
  const handleClick = () => {
    // Handle the click event here
    console.log("Button clicked!");
  };

  return (
    <div className="container">
      <div className="field">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-60}
          duration={0}
        >
          <motion.div
            className="mouse"
            whileHover={{ scale: 1.1 }}
            onClick={handleClick}
          >
            <div className="wheel"></div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default ScrollIcon;
