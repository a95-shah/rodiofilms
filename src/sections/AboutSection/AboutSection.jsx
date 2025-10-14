import React, { useState, useEffect } from 'react';
import './AboutSection.css';


const AboutSection = ({ isActive }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setIsVisible(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <div className={`section ${isActive ? 'active' : ''}`}>
      {/* <p className="section-title"><span>About</span></p> */}
      <div className="section-scroll">
        <div className="section-content">
          <p className={`about-text ${isVisible ? 'visible' : ''}`}>
            Rodeo Film is a collective based on the association of diverse talents. 
            Comprising directors, photographers, editors, designers, and composers, 
            we believe in the power of compelling visual stories that touch the heart 
            and leave a lasting impression. We believe that every ordinary life holds 
            an extraordinary story.
          </p>
          <a className={`item ${isVisible ? 'visible' : ''}`} href="mailto:hugo@rodeo.film">
            <div className="item-content">
              <p className="item-right">CONTACT US</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;