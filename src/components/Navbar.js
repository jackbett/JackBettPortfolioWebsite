import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import LightLogo from "../assets/JBlight.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 0, offset: 0});
  };

  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper">
          {/* Navbar Logo */}
          <div className="logo" onClick={scrollToTop}>
            {/* Logo Placeholder for Illustration */}
            <img src={LightLogo} alt="Logo" className="logo-image" />
          </div>

          {/* Navbar Links */}
          <ul id="menu" className={menuToggle ? "active" : ""}>
            <li>
              <Link
                activeClass="active"
                to="intro"
                spy={true}
                smooth={true}
                offset={0}
                duration={0}
              >
                Hello
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={0}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="life"
                spy={true}
                smooth={true}
                offset={0}
                duration={0}
              >
                Life
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="video"
                spy={true}
                smooth={true}
                offset={0}
                duration={0}
              >
                Hobbies
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={0}
                duration={0}
              >
                Experience
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="menuIcon" onClick={handleMenuToggle}>
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay-nav"></span>
      </div>

      <div className={`overlay-menu ${menuToggle ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="intro"
              spy={true}
              smooth={true}
              offset={0}
              duration={0}
              onClick={handleMenuToggle}
            >
              Hello
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={0}
              onClick={handleMenuToggle}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="life"
              spy={true}
              smooth={true}
              offset={0}
              duration={0}
              onClick={handleMenuToggle}
            >
              Life
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="video"
              spy={true}
              smooth={true}
              offset={0}
              duration={0}
              onClick={handleMenuToggle}
            >
              Hobbies
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={0}
              duration={0}
              onClick={handleMenuToggle}
            >
              Experience
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
