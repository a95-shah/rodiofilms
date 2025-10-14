// // src/components/VideoPlayer/VideoPlayer.jsx
// import React, { useEffect, useRef } from 'react';
// import Player from '@vimeo/player';
// import './VideoPlayer.css';

// const VideoPlayer = ({ vimeoId, isOpen, onClose }) => {
//   const containerRef = useRef(null);
//   const playerRef = useRef(null);

//   useEffect(() => {
//     if (isOpen && vimeoId && containerRef.current) {
//       const player = new Player(containerRef.current, {
//         id: vimeoId,
//         autoplay: true,
//       });
//       playerRef.current = player;
//     }

//     return () => {
//       if (playerRef.current) {
//         playerRef.current.unload().catch(() => {});
//         playerRef.current = null;
//       }
//     };
//   }, [isOpen, vimeoId]);

//   if (!isOpen) return null;

//   return (
//     <div className="video-player-overlay" onClick={onClose}>
//       <button className="close-player" onClick={onClose}>×</button>
//       <div className="video-player-container" onClick={e => e.stopPropagation()}>
//         <div ref={containerRef} className="vimeo-player" />
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;


import React, { useEffect } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ vimeoId, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => (document.body.style.overflow = '');
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="video-player-overlay">
      <div className="video-backdrop" onClick={onClose}></div>

      <div className="video-wrapper">
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Player"
        ></iframe>
      </div>

      <button className="close-btn" onClick={onClose}>×</button>

      <div className="video-footer">
        <button className="video-info-btn">INFOS</button>
      </div>
    </div>
  );
};

export default VideoPlayer;

