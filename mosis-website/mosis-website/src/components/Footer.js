import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';
import Confetti from 'react-confetti';
import { Fireworks } from 'fireworks-js';
import Video from '../assets/Video.mov';
import Airhorn from '../assets/airhorn.mp3';

const Footer = () => {
  const [clickCount, setClickCount] = useState(0);
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const fireworksRef = useRef(null);

  const secretSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowDown',
    'ArrowRight', 'ArrowLeft', 'ArrowRight', 'ArrowRight', 'c', 'h', 'i', 'n',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setClickCount(0);
    }, 1000);

    return () => clearTimeout(timer);
  }, [clickCount]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(`Key pressed: ${e.key}`);
      if (!showVideo && sequenceIndex < secretSequence.length) {
        const currentKey = secretSequence[sequenceIndex];

        if (currentKey === e.key) {
          setSequenceIndex((prev) => prev + 1);
          console.log(`Matched key: ${e.key}, Sequence index: ${sequenceIndex + 1}`);

          if (sequenceIndex + 1 === secretSequence.length) {
            console.log('Triggering Easter egg...');
            triggerEasterEgg();
            setSequenceIndex(0);
          }
        } else {
          setSequenceIndex(0);
          console.log('Sequence reset.');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sequenceIndex, showVideo]);

  const handleEasterEggClick = () => {
    setClickCount((prev) => {
      console.log(`Click count: ${prev + 1}`);
      return prev + 1;
    });
  };

  const triggerEasterEgg = () => {
    setShowConfetti(true);
    triggerFireworks();

    const airhorn = new Audio(Airhorn);
    airhorn.play();

    setShowVideo(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  const triggerFireworks = () => {
    const container = fireworksRef.current;

    if (container) {
      const fireworks = new Fireworks(container, {
        speed: 3,
        acceleration: 1.05,
        particles: 150,
        trace: 3,
        brightness: {
          min: 50,
          max: 80,
        },
        delay: {
          min: 20,
          max: 40,
        },
      });

      fireworks.start();

      setTimeout(() => {
        fireworks.stop();
      }, 5000);
    }
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <footer className="footer">
      <p>jaybot2005</p>
      <div className="easter-egg" onClick={handleEasterEggClick}></div>

      {/* Confetti */}
      {showConfetti && <Confetti style={{ zIndex: 1100 }} />}

      {/* Fireworks Container */}
      <div
        ref={fireworksRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1100,
        }}
      ></div>

      {/* Video Popup */}
      {showVideo && (
        <div
          className="video-popup"
          style={{ zIndex: 1000 }}
        >
          <div className="video-container">
            <button className="close-button" onClick={closeVideo}>
              ✖
            </button>
            <video controls autoPlay>
              <source src={Video} type="video/mp4" />
              Your browser does not support the video.
            </video>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
