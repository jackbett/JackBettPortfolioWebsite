import '../styles/Navbar.css'
import React, { useState } from "react";
import LightLogo from '../assets/JBlight.png';
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({duration: 0, offset: -60});
  };

  return (
    <>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          {/* Navbar Logo */}
          <div className="logo" onClick={scrollToTop}>
            {/* Logo Placeholder for Illustration */}
            <img src={LightLogo} alt="Logo" className="logo-image" />
          </div>

          {/* Navbar Links */}
          <ul id="menu">
            <li><Link
              activeClass="active"
              to="intro"
              spy={true}
              smooth={true}
              offset={-60}
              duration={0}
            > Hello</Link>  </li>
            <li><Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-60}
              duration={0}
            > About </Link>  </li>
             <li><Link
              activeClass="active"
              to="video"
              spy={true}
              smooth={true}
              offset={-60}
              duration={0}
            > Videos </Link>  </li>
            <li><Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-60}
              duration={0}
            > Experience</Link>  </li>
          </ul>
        </div>
      </nav>

      <div className="menuIcon" onClick={handleMenuToggle}>
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div className={`overlay-menu ${menuToggle ? "active" : ""}`}>
        <ul id="menu">
          <li><Link to='/'> Home</Link> </li>
          <li><Link to='/about'> About </Link> </li>
          <li><Link to='/projects'> Projects </Link> </li>
          <li><Link to='/experience'> Experience</Link> </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;