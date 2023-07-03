import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import VideoPlayer from '../components/VideoPlayer.js';
import drone from '../assets/drone.svg';
import '../styles/Video.css';


function Video() {
  const controlsTitle = useAnimation();
  const [titleRef, titleInView] = useInView({ triggerOnce: false });
  const controlsVideo = useAnimation();
  const [videoRef, videoInView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (titleInView) {
      controlsTitle.start('visible');
    } else {
      controlsTitle.start('hidden');
    }
  }, [controlsTitle, titleInView]);

  useEffect(() => {
    if (videoInView) {
      controlsVideo.start('visible');
    } else {
      controlsVideo.start('hidden');
    }
  }, [controlsVideo, videoInView]);

  return (
    <section id="intro" className="intro sec-padding">
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={controlsTitle}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.5 },
        }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">Videos</span>
          <span className="heading-sec__sub">
            Here are some videos I took with my drone!{' '}
            <img src={drone} alt="Drone" className="drone-image" />
          </span>
        </h2>
      </motion.div>

      <motion.div
        ref={videoRef}
        initial="hidden"
        animate={controlsVideo}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.5 },
        }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <VideoPlayer />
      </motion.div>
    </section>
  );
}

export default Video;
