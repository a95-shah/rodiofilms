// // Gallery Section
// const GallerySection = ({ isActive }) => (
//   <div className={`section ${isActive ? 'active' : ''}`}>
//     <p className="section-title"><span>Gallery</span></p>
//     <p className="gallery-instruction">TOUCH AND MOVE</p>
//     <div className="section-scroll">
//       <div className="section-content">
//         <p className="about-text visible">Gallery yes feature coming soon...</p>
//       </div>
//     </div>
//   </div>
// );
// export default GallerySection;



import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./GallerySection.css";

const GallerySection = ({ isActive }) => {
  const sectionRef = useRef(null);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const imagePaths = Array.from({ length: 12 }, (_, i) => `/images/${i + 1}.jpg`);

    const printImage = (x, y) => {
      const img = document.createElement("img");
      img.src = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      img.className = "cursor-image";
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
      section.appendChild(img);

      // Animate appearance only (stays visible)
      gsap.fromTo(
        img,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    };

    const handleMouseMove = (e) => {
      const now = Date.now();
      const throttleDelay = 150; // milliseconds between prints

      if (now - lastTimeRef.current < throttleDelay) return; // skip if too soon
      lastTimeRef.current = now;

      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      printImage(x, y);
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`section gallery-section ${isActive ? "active" : ""}`}
    >
      {/* <p className="section-title">
        <span>Gallery</span>
      </p> */}
      <p className="gallery-instruction">TOUCH AND MOVE</p>
      <div className="section-scroll">
        {/* <div className="section-content">
          <p className="about-text visible">Move your cursor to print images 🖼️</p>
        </div> */}
      </div>
    </div>
  );
};

export default GallerySection;
