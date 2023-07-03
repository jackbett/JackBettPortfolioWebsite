import React from "react";
import UbIcon from '../assets/UbLogo.png'
import "../styles/helpers.css"

const ub = () => (
  <div>
    <img
      className="img_logo"
      src={UbIcon}
      alt="University at Buffalo Logo" // Add the alt prop with a meaningful description
    />
  </div>
);

export default ub;
