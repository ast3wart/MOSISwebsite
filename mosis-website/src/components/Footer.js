import React, { useState } from 'react';
import './Footer.css';
import Video from '../assets/Video.mov';

const Footer = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const handleEasterEggClick = () => {
    setClickCount((prev) => prev + 1);
    if (clickCount + 1 === 3) {
      setShowVideo(true); // Show the video popup after 3 clicks
      setClickCount(0); // Reset the counter
    }
  };

  const closeVideo = () => {
    setShowVideo(false); // Hide the video popup
  };

  return (
    <footer className="footer">
      <p>jaybot2005</p>
      <div className="easter-egg" onClick={handleEasterEggClick}></div>

      {/* Video Popup */}
      {showVideo && (
        <div className="video-popup">
          <div className="video-container">
            <button className="close-button" onClick={closeVideo}>
              ✖
            </button>
            <video controls autoPlay>
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
