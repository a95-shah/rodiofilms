
// import React, { useEffect } from 'react';
// import './VideoPlayer.css';

// const VideoPlayer = ({ vimeoId, isOpen, onClose }) => {
//   useEffect(() => {
//     if (isOpen) document.body.style.overflow = 'hidden';
//     else document.body.style.overflow = '';
//     return () => (document.body.style.overflow = '');
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="video-player-overlay">
//       <div className="video-backdrop" onClick={onClose}></div>

//       <div className="video-wrapper">
//         <iframe
//           src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
//           frameBorder="0"
//           allow="autoplay; fullscreen; picture-in-picture"
//           allowFullScreen
//           title="Vimeo Player"
//         ></iframe>
//       </div>

//       <button className="close-btn" onClick={onClose}>×</button>

//       <div className="video-footer">
//         <button className="video-info-btn">INFOS</button>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;



import React, { useEffect } from "react";

const VideoPlayer = ({ vimeoId, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-transparent animate-[fadeIn_0.6s_ease_forwards]">
      {/* Dark backdrop */}
      <div
        className="absolute inset-0 bg-black opacity-0 animate-[backdropFadeIn_0.8s_ease_forwards]"
        onClick={onClose}
      ></div>

      {/* Vimeo iframe wrapper */}
      <div className="relative w-screen h-screen scale-105 opacity-0 animate-[videoZoomIn_0.9s_[cubic-bezier(0.59,0,0.32,0.99)]_forwards]">
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="w-full h-full border-none"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Player"
        ></iframe>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-12 text-white text-5xl bg-none border-none cursor-pointer z-[10000] transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80"
      >
        ×
      </button>

      {/* Footer with info button */}
      <div className="absolute bottom-12 right-12 z-10">
        <button className="uppercase text-white bg-none border-none text-base tracking-[0.1em] cursor-pointer transition-opacity duration-300 hover:opacity-60">
          INFOS
        </button>
      </div>

      {/* Keyframes for Tailwind */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes backdropFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes videoZoomIn {
          from {
            transform: scale(1.05);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoPlayer;
