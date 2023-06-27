import React, { useState } from "react";
// import JackImg from '../assets/JackPic.JPG'
import "../styles/TechStack.css";
import python from '../assets/Tech Stack Logos (Community) (Community)/Brand=python, Style=Light.png'
import java from '../assets/Tech Stack Logos (Community) (Community)/Brand=java, Style=Light.png'
import reactIcon from '../assets/Tech Stack Logos (Community) (Community)/Brand=reactjs, Style=Light.png'
import azure from '../assets/Tech Stack Logos (Community) (Community)/Brand=azure, Style=Light.png'

function TechStack() {
  return (
    <div>
      <div className="tech-stack-box">
        <p></p>
      <div
          className="tech-stack-single-box"
          id="JAVA"
        >
          <img src={java} className="tech-ico1" alt="css icon" />
        </div>
        <div
          className="tech-stack-single-box"
          id="PYTHON"
        >
          <img src={python} className="tech-ico1" alt="css icon" />
        </div>
        <div
          className="tech-stack-single-box"
          id="REACT"
        >
          <img src={reactIcon} className="tech-ico1" alt="css icon" />
      </div>
      <div
          className="tech-stack-single-box"
          id="AZURE"
        >
          <img src={azure} className="tech-ico1" alt="css icon" />
      </div>
    </div>
   </div>
  );
}

export default TechStack;
