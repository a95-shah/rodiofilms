
// import React, { useState, useEffect } from 'react';
// import './ProjectItem.css';

// const ProjectItem = ({ title, category, year, vimeoId, thumbnailUrl, index, onClick }) => {
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

//       {/* Hover Vimeo Preview (no UI, muted background) */}
//       {isHovered && vimeoId && (
//         <div className="video-overlay">
//           <div className="video-container">
//             <iframe
//               src={`https://player.vimeo.com/video/${vimeoId}?background=1&muted=1&loop=1&autoplay=1`}
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

import React, { useState, useEffect } from 'react';

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
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative block w-full overflow-hidden text-left text-white cursor-pointer bg-transparent border-none p-0
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px]
          before:bg-white/50 before:origin-left before:scale-x-0 before:transition-transform before:duration-[1.2s]
          ${isVisible ? 'before:scale-x-100' : ''}
        `}
      >
        <div
          className={`
            flex justify-between items-start w-full py-6 transition-transform duration-[1000ms]
            ease-[cubic-bezier(0.59,0,0.32,0.99)]
            ${isVisible ? 'translate-y-0' : 'translate-y-full'}
          `}
        >
          <div className="flex-1 text-left mr-12">
            <strong
              className={`
                block uppercase font-medium transition-colors duration-300
                ${isHovered ? 'text-primary' : 'text-white'}
              `}
            >
              {title}
            </strong>
            <span
              className={`
                block uppercase mt-2 transition-colors duration-300
                ${isHovered ? 'text-gray-400' : 'text-gray-300'}
              `}
            >
              {category}
            </span>
          </div>
          <p className="flex-shrink-0 text-right uppercase text-base">{year}</p>
        </div>
      </button>

      {/* Hover Vimeo Preview */}
      {isHovered && vimeoId && (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center overflow-hidden animate-fadeIn pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?background=1&muted=1&loop=1&autoplay=1`}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title={title}
              className="absolute top-1/2 left-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 object-cover border-none animate-zoomIn"
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-black/60 -z-10"></div>
        </div>
      )}
    </>
  );
};

export default ProjectItem;
