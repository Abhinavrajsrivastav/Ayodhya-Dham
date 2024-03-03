import React from 'react';
import './NewsC.css';

const NewsC = ({ 
  height, 
  width, 
  boxHeight,
  imgSrc,
 }) => {
  return (
    <div className="Explore-Card">
      <div className="Explore-Img" style={{height: boxHeight}}>
        <img src={imgSrc} alt="" style={{ height: height, width: width }} />
      </div>
      <div className="EContent">
        <div className="Explore-Content">
          <span>Booking of Ayodhya Saryu Aarti step-by-step guide.</span>
        </div>
        <div className="About-Explore">
          How to book Aarti at Saryu Ghat in Ayodhya?.
        </div>
      </div>
    </div>
  );
}

export default NewsC;
