// src/components/VideoPreview/VideoPreview.jsx
import React, { useEffect, useRef } from 'react';
import Player from '@vimeo/player';
import './VideoPreview.css';

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
    <div className="video-preview">
      <div ref={containerRef} className="vimeo-preview-container" />
      {!isHovered && (
        <img src={thumbnailUrl} alt="Preview" className="preview-thumbnail" />
      )}
    </div>
  );
};

export default VideoPreview;
