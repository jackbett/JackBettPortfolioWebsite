import '../styles/Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from "react";
import LightLogo from '../assets/JBlight.png';


const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          {/* Navbar Logo */}
          <div className="logo">
            {/* Logo Placeholder for Illustration */}
            <a href="">
            <img src={LightLogo} alt="Logo" className="logo-image" />
            </a>          
            </div>

          {/* Navbar Links */}
          <ul id="menu">
            <li><Link to='/'> Home</Link>  </li>
            <li><Link to='/about'> About </Link>   </li>
            <li><Link to='/projects'> Projects </Link>  </li>
            <li><Link to='/experience'> Experience</Link>  </li>
          </ul>
        </div>
      </nav>

      {/* Menu Icon */}
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