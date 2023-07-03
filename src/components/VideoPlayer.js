import React, { useEffect, useRef } from 'react';
import CombinedVideo from '../assets/videos/CombinedVideos.mp4';
import ReactPlayer from 'react-player';
import { useInView } from 'react-intersection-observer';
import '../styles/VideoPlayer.css';

const VideoPlayer = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });
  const player = useRef(null);

  useEffect(() => {
    if (inView && player.current && player.current.getInternalPlayer()) {
      player.current.getInternalPlayer().play();
    } else if (player.current && player.current.getInternalPlayer()) {
      player.current.getInternalPlayer().pause();
    }
  }, [inView]);

  return (
    <div className="videoPlayer" ref={ref}>
      <ReactPlayer
        ref={player}
        className="react-player"
        url={CombinedVideo}
        width="100%"
        height="100%"
        playing={inView}
        loop={true}
      />
    </div>
  );
};

export default VideoPlayer;
