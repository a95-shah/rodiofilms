// import React, { useState, useEffect } from 'react';
// import './AboutSection.css';


// const AboutSection = ({ isActive }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if (isActive) {
//       const timer = setTimeout(() => setIsVisible(true), 300);
//       return () => clearTimeout(timer);
//     }
//   }, [isActive]);

//   return (
//     <div className={`section ${isActive ? 'active' : ''}`}>
     
//       <div className="section-scroll">
//         <div className="section-content">
//           <p className={`about-text ${isVisible ? 'visible' : ''}`}>
//             Rodeo Film is a collective based on the association of diverse talents. 
//             Comprising directors, photographers, editors, designers, and composers, 
//             we believe in the power of compelling visual stories that touch the heart 
//             and leave a lasting impression. We believe that every ordinary life holds 
//             an extraordinary story.
//           </p>
//           <a className={`item ${isVisible ? 'visible' : ''}`} href="mailto:hugo@rodeo.film">
//             <div className="item-content">
//               <p className="item-right">CONTACT US</p>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;


import React, { useState, useEffect } from "react";

const AboutSection = ({ isActive }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setIsVisible(true), 300);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isActive]);

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center transition-opacity duration-700 ease-out ${
        isActive ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="overflow-y-auto w-full flex justify-center px-6">
        <div className="max-w-[60rem] text-center flex flex-col items-center">
          {/* About Text */}
          <p
            className={`leading-relaxed text-[var(--font-size-large)] text-[var(--color-white)] mb-12 transition-opacity duration-[1.2s] ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Rodeo Film is a collective based on the association of diverse
            talents. Comprising directors, photographers, editors, designers,
            and composers, we believe in the power of compelling visual stories
            that touch the heart and leave a lasting impression. We believe that
            every ordinary life holds an extraordinary story.
          </p>

          {/* Contact Link */}
          <a
            href="mailto:hugo@rodeo.film"
            className={`inline-flex items-center justify-center text-[var(--color-white)] uppercase tracking-wider text-lg transition-opacity duration-[1.2s] ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center px-6 py-3 bg-transparent hover:text-[var(--color-primary)] transition-colors duration-300">
              <p className="font-medium">Contact Us</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
