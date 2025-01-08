import React from 'react';
import './About.css';
import BackgroundImage from '../assets/backg.jpeg';
import AlexImage from '../assets/alex.jpg';
import JayImage from '../assets/jay.jpg';
import AdrianImage from '../assets/adrian.jpg';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <h1>About MOSIS</h1>
      </section>

      {/* Mission and Vision Section */}
      <section className="about-content">
        <blockquote>
          “The Michigan Orthopaedic Surgery Interest Society (MOSIS) is a club at the University of Michigan
          dedicated to inspiring and supporting aspiring Orthopaedic Surgeons.”
        </blockquote>
        <p>
          Our mission is to provide resources, mentorship, and networking opportunities for students interested in Orthopaedic Surgery. 
          We aim to build a strong community of future surgeons who will contribute to advancements in Orthopaedic care. used ai for this, change whatever.
        </p>
      </section>

      {/* Leadership Team Section */}
      <section className="leadership-team">
        <h2>Leadership Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={AlexImage} alt="Alex Mamonov" />
            <h3>Alex Mamonov</h3>
            <p><a href="mailto:amamonov@umich.edu">amamonov@umich.edu</a></p>
            <p><a href="tel:+17152918148">(715) 291-8148</a></p>
          </div>
          <div className="team-member">
            <img src={JayImage} alt="Jay Verma" />
            <h3>Jay Verma</h3>
            <p><a href="mailto:jverm@umich.edu">jverm@umich.edu</a></p>
            <p><a href="tel:+17732949490">(773) 294-9490</a></p>
          </div>
          <div className="team-member">
            <img src={AdrianImage} alt="Adrian Araneo" />
            <h3>Adrian Araneo</h3>
            <p><a href="mailto:aaraneo@umich.edu">aaraneo@umich.edu</a></p>
            <p><a href="tel:+15613893579">(561) 389-3579</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
