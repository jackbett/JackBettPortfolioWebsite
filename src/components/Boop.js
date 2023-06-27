import React from 'react';
import { animated, useSpring } from 'react-spring';
import '../styles/Boop.css';

const Boop = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  children,
}) => {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });

  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = () => {
    setIsBooped(true);
  };

  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

const BoopText = ({ text, rotation = 0, timing = 150 }) => {
  const words = text.split(' ');

  return (
    <h1 className="welcome-text">
      {words.map((word, index) => (
        <span key={index} className="boop-word">
          <Boop rotation={rotation} timing={timing}>
            {word}
          </Boop>
          {' '}
        </span>
      ))}
    </h1>
  );
};

export default BoopText;
