import React from "react";
import Feature from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
  const { imageUrl, price, numBedroom } =
    data;

  const getRandomValue = () => Math.random() * 2 - 1; // Generate a random value between -1 and 1

  return (
    <motion.div
      className="listing"
      onClick={open}
      animate={{
        y: [0, getRandomValue() * 8, 0]
      }}
      transition={{
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <div className="listing__content">
        <div className="listing__image-container">
          <img
            className="listing__image"
            alt="real estate mansion"
            src={imageUrl}
          />
        </div>
        <div className="listing__details">
          <div className="listing__row">
            <span className="listing__price">{price}</span>
          </div>
          <div className="listing__row">
            <Feature iconName={"FaLocationArrow"} iconLabel={numBedroom} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;
