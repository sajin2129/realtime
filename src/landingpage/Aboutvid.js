import React, { useState, useRef } from 'react';
import './aboutvid.css';

const VideoCard = ({ id, src, thumbnail }) => {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className={`card ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hovered ? (
        <video ref={videoRef} id={id} src={src} autoPlay muted loop />
      ) : (
        <img src={thumbnail} alt="Thumbnail" />
      )}
    </div>
  ); 
};

const AboutVid = () => {
  return (


    <div className="card-container" data-aos="fade-up" data-aos-duration="2000">
      <div className="cardbox">
        <VideoCard id="video1" src="assets/01.mp4" thumbnail="tumpnail/Reltime.png" />
        <h3>Open API & EVM</h3>
      </div>

      <div className="cardbox">
        <VideoCard id="video2" src="assets/02.mp4" thumbnail="tumpnail/Reltime (1).png" />
        <h3>Web 3 Super App</h3>
      </div>

      <div className="cardbox">
        <VideoCard id="video3" src="assets/03.mp4" thumbnail="tumpnail/Reltime (2).png" />
        <h3>Awarded as Best Web 3.0 and AI</h3>
      </div>
    </div>

  );
};

export default AboutVid;
