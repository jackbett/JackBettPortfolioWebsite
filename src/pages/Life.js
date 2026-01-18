import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GameOfLife from '../assets/Life.png';

import '../styles/Life.css';
import Card from "../components/Card/index.js";
import { properties } from "../constants/lifeUpdates.js";
function Video() {
  const controlsTitle = useAnimation();
  const [titleRef, titleInView] = useInView({ triggerOnce: false });
  const controlsPictures = useAnimation();
  const [pictureRef, pictureInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (titleInView) {
      controlsTitle.start('visible');
    } else {
      controlsTitle.start('hidden');
    }
  }, [controlsTitle, titleInView]);

  useEffect(() => {
    if (pictureInView) {
      controlsPictures.start('visible');
    } else {
      controlsPictures.start('hidden');
    }
  }, [controlsPictures, pictureInView]);

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
          <span className="heading-sec__main">Life</span>
          <span className="heading-sec__sub">
            These are updates about my {' '} 
            <img src={GameOfLife} alt="LifePieces" className="life-pieces" />
            {' '}
          </span>
        </h2>
  

      </motion.div>

      <motion.div
        ref={pictureRef}
        initial="hidden"
        animate={controlsPictures}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.5 },
        }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="properties">
        {properties.map((item) => (
          <Card data={item} key={item.id} />
        ))}
        </div>
        </motion.div>

    </section>
  );
}

export default Video;
