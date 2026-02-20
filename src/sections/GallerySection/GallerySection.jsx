
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import "./GallerySection.css";

// const GallerySection = ({ isActive }) => {
//   const sectionRef = useRef(null);
//   const lastTimeRef = useRef(0);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const imagePaths = Array.from({ length: 12 }, (_, i) => `/images/${i + 1}.jpg`);

//     const printImage = (x, y) => {
//       const img = document.createElement("img");
//       img.src = imagePaths[Math.floor(Math.random() * imagePaths.length)];
//       img.className = "cursor-image";
//       img.style.left = `${x}px`;
//       img.style.top = `${y}px`;
//       section.appendChild(img);

//       // Animate appearance only (stays visible)
//       gsap.fromTo(
//         img,
//         { scale: 0, opacity: 0 },
//         {
//           scale: 1,
//           opacity: 1,
//           duration: 0.3,
//           ease: "power2.out",
//         }
//       );
//     };

//     const handleMouseMove = (e) => {
//       const now = Date.now();
//       const throttleDelay = 150; // milliseconds between prints

//       if (now - lastTimeRef.current < throttleDelay) return; // skip if too soon
//       lastTimeRef.current = now;

//       const rect = section.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       printImage(x, y);
//     };

//     section.addEventListener("mousemove", handleMouseMove);
//     return () => section.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className={`section gallery-section ${isActive ? "active" : ""}`}
//     >
//       {/* <p className="section-title">
//         <span>Gallery</span>
//       </p> */}
//       <p className="gallery-instruction">TOUCH AND MOVE</p>
//       <div className="section-scroll">
//         {/* <div className="section-content">
//           <p className="about-text visible">Move your cursor to print images 🖼️</p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default GallerySection;



import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

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
      img.className =
        "absolute w-[300px] rounded-lg object-cover pointer-events-none z-50 " +
        "transform -translate-x-1/2 -translate-y-1/2";
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
      section.appendChild(img);

      // Animate appearance only
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
      const throttleDelay = 150;
      if (now - lastTimeRef.current < throttleDelay) return;
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
      className={`
        fixed inset-0 z-[var(--z-index-section)] w-full h-full
        bg-black overflow-hidden
        transition-opacity duration-500 ease-out
        ${isActive ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
      `}
    >
      {/* Instruction text */}
      <p className="absolute top-8 left-1/2 -translate-x-1/2 text-[var(--color-white)] text-sm md:text-base tracking-widest uppercase z-10">
        TOUCH AND MOVE
      </p>

      {/* Optional scroll area (kept for structure) */}
      <div className="w-full h-full overflow-hidden"></div>
    </div>
  );
};

export default GallerySection;
