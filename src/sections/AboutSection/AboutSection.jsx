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
      className={`
        fixed inset-0 z-[var(--z-index-section)] w-full h-full
        bg-black overflow-y-auto
        transition-opacity duration-500 ease-out
        ${isActive ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
      `}
    >
      <div className="flex justify-center items-center min-h-screen px-6">
        <div className="max-w-[60rem] text-center flex flex-col items-center">
          {/* About Text */}
          <p
            className={`leading-relaxed text-[16px] text-white mb-12 transition-opacity duration-[1.2s] ease-in-out ${
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
            className={`inline-flex items-center justify-center text-white uppercase tracking-widest text-[13px] font-bold transition-opacity duration-[1.2s] ease-in-out hover:text-[var(--color-primary)] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
