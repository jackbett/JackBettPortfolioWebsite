import React from 'react';
import VideoPlayer from '../components/VideoPlayer.js';
import drone from '../assets/drone.svg';
import "../styles/Video.css";


function Video() {
  return (
    <section id="intro" className="intro sec-padding">
      <h2 className="heading heading-sec heading-sec__mb-med">
        <span className="heading-sec__main">Videos</span>
        <span className="heading-sec__sub">
          Here are some videos I took with my drone! <img src={drone} alt="Drone" className="drone-image" />
        </span>
      </h2>
      <VideoPlayer />
    </section>
  );
}

export default Video;
