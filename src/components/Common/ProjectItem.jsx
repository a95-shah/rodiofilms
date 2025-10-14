// import React, { useState, useEffect } from 'react';
// import './ProjectItem.css';

// const ProjectItem = ({ title, category, year, thumbnailUrl, vimeoId, index, onClick }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), index * 100);
//     return () => clearTimeout(timer);
//   }, [index]);

//   return (
//     <>
//       {/* Project List Item */}
//       <button
//         className={`item ${isVisible ? 'visible' : ''}`}
//         onClick={onClick}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="item-content">
//           <div className="item-left">
//             <strong className="item-title">{title}</strong>
//             <span className="item-category">{category}</span>
//           </div>
//           <p className="item-right">{year}</p>
//         </div>
//       </button>

//       {/* Fullscreen Video Overlay */}
//       {isHovered && (
//         <div className="video-overlay">
//           <div className="video-container">
//             <iframe
//               src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&background=1&loop=1`}
//               frameBorder="0"
//               allow="autoplay; fullscreen"
//               allowFullScreen
//               title={title}
//             ></iframe>
//           </div>
//           <div className="overlay-backdrop"></div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProjectItem;


// oreginal code corrected coder under


// import React, { useState, useEffect } from 'react';
// import './ProjectItem.css';

// const ProjectItem = ({ title, category, year, thumbnailUrl, vimeoId, previewUrl, index, onClick }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), index * 100);
//     return () => clearTimeout(timer);
//   }, [index]);

//   return (
//     <>
//       {/* Project List Item */}
//       <button
//         className={`item ${isVisible ? 'visible' : ''}`}
//         onClick={onClick}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="item-content">
//           <div className="item-left">
//             <strong className="item-title">{title}</strong>
//             <span className="item-category">{category}</span>
//           </div>
//           <p className="item-right">{year}</p>
//         </div>
//       </button>

//       {/* Fullscreen Video Overlay */}
//       {isHovered && (
//         <div className="video-overlay">
//           <div className="video-container">
//             {vimeoId ? (
//               <iframe
//                 src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&background=1&loop=1`}
//                 frameBorder="0"
//                 allow="autoplay; fullscreen"
//                 allowFullScreen
//                 title={title}
//               ></iframe>
//             ) : previewUrl ? (
//               <video
//                 src={previewUrl}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="fullscreen-video"
//               />
//             ) : (
//               <img src={thumbnailUrl} alt={title} className="fallback-thumbnail" />
//             )}
//           </div>
//           <div className="overlay-backdrop"></div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProjectItem;



// src/components/Common/ProjectItem.jsx
// src/components/Common/ProjectItem.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import Player from '@vimeo/player';
// import './ProjectItem.css';

// const ProjectItem = ({ title, category, year, vimeoId, thumbnailUrl, index, onClick }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const playerContainerRef = useRef(null);
//   const playerRef = useRef(null);

//   // Fade-in animation on load
//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), index * 100);
//     return () => clearTimeout(timer);
//   }, [index]);

//   // Vimeo Player setup for hover background
//   useEffect(() => {
//     if (isHovered && vimeoId && playerContainerRef.current) {
//       // Create player if not already created
//       if (!playerRef.current) {
//         playerRef.current = new Player(playerContainerRef.current, {
//           id: vimeoId,
//           autoplay: true,
//           muted: true,
//           loop: true,
//           background: true,
//         });
//       } else {
//         playerRef.current.play().catch(() => {});
//       }
//     } else if (playerRef.current) {
//       playerRef.current.pause().catch(() => {});
//     }

//     // Cleanup on unmount
//     return () => {
//       if (playerRef.current) {
//         playerRef.current.unload().catch(() => {});
//         playerRef.current = null;
//       }
//     };
//   }, [isHovered, vimeoId]);

//   return (
//     <>
//       {/* Project List Item */}
//       <button
//         className={`item ${isVisible ? 'visible' : ''}`}
//         onClick={onClick}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="item-content">
//           <div className="item-left">
//             <strong className="item-title">{title}</strong>
//             <span className="item-category">{category}</span>
//           </div>
//           <p className="item-right">{year}</p>
//         </div>
//       </button>

//       {/* Vimeo Hover Video Overlay */}
//       {isHovered && (
//         <div className="video-overlay">
//           <div className="video-container">
//             <div ref={playerContainerRef} className="vimeo-hover-player" />
//           </div>
//           <div className="overlay-backdrop"></div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProjectItem;


import React, { useState, useEffect } from 'react';
import './ProjectItem.css';

const ProjectItem = ({ title, category, year, vimeoId, thumbnailUrl, index, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <>
      {/* Project List Item */}
      <button
        className={`item ${isVisible ? 'visible' : ''}`}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="item-content">
          <div className="item-left">
            <strong className="item-title">{title}</strong>
            <span className="item-category">{category}</span>
          </div>
          <p className="item-right">{year}</p>
        </div>
      </button>

      {/* Hover Vimeo Preview (no UI, muted background) */}
      {isHovered && vimeoId && (
        <div className="video-overlay">
          <div className="video-container">
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?background=1&muted=1&loop=1&autoplay=1`}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title={title}
            ></iframe>
          </div>
          <div className="overlay-backdrop"></div>
        </div>
      )}
    </>
  );
};

export default ProjectItem;

