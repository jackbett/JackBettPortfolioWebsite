import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/CardGallery.css";
import Pic1 from "../assets/output1.jpg";
import Pic2 from "../assets/output2.jpg";
import Pic3 from "../assets/output3.jpg";

const items = [
  {
    id: 1,
    title: "Devil's Hole - NY",
    image: Pic1,
  },
  {
    id: 2,
    title: "Rainbow Falls - NY",
    image: Pic2,
  },
  {
    id: 3,
    title: "Graffiti Alley - CA",
    image: Pic3,
  },
];

const transition = {
  duration: 0.3 // Custom cubic bezier ease: [x1, y1, x2, y2]
};

const CardGallery = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedItem = items.find((item) => item.id === selectedId);

  const handleCardClick = (id) => {
    if (selectedId) {
      if (id === selectedId) {
        setSelectedId(null); // Deselect the active card if clicked again
      } else {
        // Swap the active card with the clicked card
        const newSelectedId = id;
        setSelectedId(null);
        setTimeout(() => setSelectedId(newSelectedId), transition.duration * 1000);
      }
    } else {
      setSelectedId(id); // Select the clicked card if no card is currently active
    }
  };

  return (
    <AnimatePresence>
      <div className="gallery-container">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className={`card ${selectedId === item.id ? "active" : ""}`}
            layoutId={item.id}
            onClick={() => handleCardClick(item.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={transition}
          >
            <div className="image-container">
              <img src={item.image} alt={item.title} />
            </div>
            <h2>{item.title}</h2>
          </motion.div>
        ))}
      </div>

      {selectedId && (
        <motion.div
          className="expanded-card"
          layoutId={selectedId}
          onClick={() => setSelectedId(null)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={transition}
        >
          <div className="image-container">
            <img src={selectedItem.image} alt={selectedItem.title} />
          </div>
          <h2>{selectedItem.title}</h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CardGallery;
