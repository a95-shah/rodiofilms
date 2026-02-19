// // src/components/VideoPreview/VideoPreview.jsx
// import React, { useEffect, useRef } from 'react';
// import Player from '@vimeo/player';
// import './VideoPreview.css';

// const VideoPreview = ({ vimeoId, thumbnailUrl, isHovered }) => {
//   const containerRef = useRef(null);
//   const playerRef = useRef(null);

//   useEffect(() => {
//     if (isHovered && containerRef.current && vimeoId) {
//       if (!playerRef.current) {
//         const player = new Player(containerRef.current, {
//           id: vimeoId,
//           autoplay: true,
//           muted: true,
//           loop: true,
//           background: true,
//         });
//         playerRef.current = player;
//       } else {
//         playerRef.current.play().catch(() => {});
//       }
//     } else if (playerRef.current) {
//       playerRef.current.pause().catch(() => {});
//     }
//   }, [isHovered, vimeoId]);

//   return (
//     <div className="video-preview">
//       <div ref={containerRef} className="vimeo-preview-container" />
//       {!isHovered && (
//         <img src={thumbnailUrl} alt="Preview" className="preview-thumbnail" />
//       )}
//     </div>
//   );
// };

// export default VideoPreview;


import React, { useEffect, useRef } from "react";
import Player from "@vimeo/player";

const VideoPreview = ({ vimeoId, thumbnailUrl, isHovered }) => {
  const containerRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (isHovered && containerRef.current && vimeoId) {
      if (!playerRef.current) {
        const player = new Player(containerRef.current, {
          id: vimeoId,
          autoplay: true,
          muted: true,
          loop: true,
          background: true,
        });
        playerRef.current = player;
      } else {
        playerRef.current.play().catch(() => {});
      }
    } else if (playerRef.current) {
      playerRef.current.pause().catch(() => {});
    }
  }, [isHovered, vimeoId]);

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* Vimeo player container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Thumbnail fades out when hovered */}
      {!isHovered && (
        <img
          src={thumbnailUrl}
          alt="Preview"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 z-[1]"
        />
      )}
    </div>
  );
};

export default VideoPreview;
