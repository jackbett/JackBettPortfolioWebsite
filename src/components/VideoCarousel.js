import Vid1 from "../assets/videos/CarnivalTrim.mp4";
import Vid2 from "../assets/videos/FallsTrim.mp4";
// import Vid3 from "../assets/videos/KnoxTrim.mp4";

import React, { useRef, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/VideoCarousel.css";

const VideoCarousel = () => {
  const carouselRef = useRef(null);
  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: Vid1,
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 2,
      title: "Video 2",
      src: Vid2,
      credit: "Video by cottonbro from Pexels",
    }
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     carouselRef.current.next();
  //   }, 50000); // Change the interval duration as needed (in milliseconds)

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div className="carousel">
      <Carousel ref={carouselRef} interval={null}>
        {videoProperties.map((videoObj) => (
          <Carousel.Item key={videoObj.id}>
            <div className="carousel-player">
              <ReactPlayer
                url={videoObj.src}
                pip={true}
                controls={true}
                playing={true}
                muted={true}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
