import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import Logo from '../assets/logo-circle.png';
import Slide1 from '../assets/slideshow1.png';
import Slide2 from '../assets/slideshow2.png';
import Slide3 from '../assets/slideshow3.png';
import Slide4 from '../assets/slideshow4.png';

const Home = () => {
  const scrollRef = useRef(null);
  let isDragging = false;
  let startX, scrollLeft;

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const startDragging = (e) => {
      isDragging = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const stopDragging = () => {
      isDragging = false;
    };

    const drag = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    scrollContainer.addEventListener('mousedown', startDragging);
    scrollContainer.addEventListener('mouseleave', stopDragging);
    scrollContainer.addEventListener('mouseup', stopDragging);
    scrollContainer.addEventListener('mousemove', drag);

    return () => {
      scrollContainer.removeEventListener('mousedown', startDragging);
      scrollContainer.removeEventListener('mouseleave', stopDragging);
      scrollContainer.removeEventListener('mouseup', stopDragging);
      scrollContainer.removeEventListener('mousemove', drag);
    };
  }, []);

  return (
    <div className="home">
      {/* Horizontal Slideshow */}
      <section className="slideshow-container" ref={scrollRef}>
        <div className="slideshow">
          <img src={Logo} alt="MOSIS Logo" className="slide-image" draggable="false" />
          <img src={Slide1} alt="Slide 1" className="slide-image" draggable="false" />
          <img src={Slide2} alt="Slide 2" className="slide-image" draggable="false" />
          <img src={Slide3} alt="Slide 3" className="slide-image" draggable="false" />
          <img src={Slide4} alt="Slide 4" className="slide-image" draggable="false" />
        </div>
      </section>

      {/* Hero Text */}
      <div className="hero-content">
        <h1>Welcome to MOSIS</h1>
        <p>Quote here.</p>
        <Link to="/about">
          <button className="cta-button">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
