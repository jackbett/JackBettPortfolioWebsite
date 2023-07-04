import React from 'react';
import ReactTyped from "react-typed";

function TypeEffect() {

  
  return (
    <div className='typeEffect'>
      <h1>
        <ReactTyped
          strings={["Hello", "你好", "Bonjour", "안녕하세요", "Hola", "こんにちは", "Hallo","Guten Tag"]}
          typeSpeed={150}
          loop
          startDelay={1000} // Set the desired delay duration in milliseconds
          backDelay={1000} // Set the desired delay duration in milliseconds
          backSpeed={100}
          cursorChar="|"
          showCursor={true}
          shuffle={true}
        />
      </h1>
    </div>
  );

};
export default TypeEffect;
