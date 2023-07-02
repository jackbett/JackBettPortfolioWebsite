import React, { useEffect, useRef } from 'react';
import CombinedVideo from '../assets/videos/CombinedVideos.mp4';
import ReactPlayer from 'react-player';
import { useInView } from 'react-intersection-observer';

const VideoPlayer = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });
  const player = useRef(null);

  useEffect(() => {
    if (inView) {
      // Video is in view, start playing
      player.current.seekTo(0); // Restart the video from the beginning
      player.current.getInternalPlayer().play();
    } else {
      // Video is out of view, pause it
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
        playing={inView} // Autoplay when in view
        loop={true} // Loop the video
      />
    </div>
  );
};

export default VideoPlayer;
