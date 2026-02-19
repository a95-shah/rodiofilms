
// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { projects } from "../../data/Projects";

// const VideoGrid = ({ onVideoClick = () => {} }) => {
//   const containerRef = useRef(null);
//   const [tiles, setTiles] = useState([]);
//   const [fullscreenVideo, setFullscreenVideo] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const fullscreenVideoRef = useRef(null);
  
//   // Detect mobile device
//   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
  
//   const TILE_WIDTH = isMobile ? 300 : 600; // Smaller tiles on mobile
//   const TILE_HEIGHT = isMobile ? 225 : 450; // Maintain aspect ratio
//   const COLS = 2;
//   const ROWS = 2;
//   const GRID_WIDTH = COLS * TILE_WIDTH;
//   const GRID_HEIGHT = ROWS * TILE_HEIGHT;
  
//   // Reduce grid repeat on mobile for better performance
//   const GRID_REPEAT_X = isMobile ? 5 : 9;
//   const GRID_REPEAT_Y = isMobile ? 5 : 9;
  
//   useEffect(() => {
//     const newTiles = [];
//     const centerX = Math.floor(GRID_REPEAT_X / 2);
//     const centerY = Math.floor(GRID_REPEAT_Y / 2);
    
//     for (let gy = 0; gy < GRID_REPEAT_Y; gy++) {
//       for (let gx = 0; gx < GRID_REPEAT_X; gx++) {
//         for (let row = 0; row < ROWS; row++) {
//           for (let col = 0; col < COLS; col++) {
//             const projectIndex = (row * COLS + col) % projects.length;
//             newTiles.push({
//               id: `${gx}-${gy}-${row}-${col}`,
//               project: projects[projectIndex],
//               gridX: gx,
//               gridY: gy,
//               localX: col,
//               localY: row
//             });
//           }
//         }
//       }
//     }
    
//     setTiles(newTiles);
//   }, [GRID_REPEAT_X, GRID_REPEAT_Y]);
  
//   const handleVideoClick = (project) => {
//     setFullscreenVideo(project);
//     setIsPlaying(true);
//     onVideoClick(project.vimeoId);
//   };
  
//   const closeFullscreen = () => {
//     setFullscreenVideo(null);
//     setIsPlaying(false);
//   };
  
//   useEffect(() => {
//     if (fullscreenVideo && fullscreenVideoRef.current) {
//       fullscreenVideoRef.current.play();
//     }
//   }, [fullscreenVideo]);
  
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape' && fullscreenVideo) {
//         closeFullscreen();
//       }
//     };
    
//     window.addEventListener('keydown', handleEscape);
//     return () => window.removeEventListener('keydown', handleEscape);
//   }, [fullscreenVideo]);
  
//   useEffect(() => {
//     if (!containerRef.current || tiles.length === 0) return;
    
//     const container = containerRef.current;
//     let scrollX = 0;
//     let scrollY = 0;
    
//     let isDragging = false;
//     let lastX = 0;
//     let lastY = 0;
//     let velocityX = 0;
//     let velocityY = 0;
//     let animationFrame = null;
    
//     const updateTilePositions = () => {
//       // Calculate the wrapped offset using modulo
//       const offsetX = ((scrollX % GRID_WIDTH) + GRID_WIDTH) % GRID_WIDTH;
//       const offsetY = ((scrollY % GRID_HEIGHT) + GRID_HEIGHT) % GRID_HEIGHT;
      
//       const viewportWidth = container.clientWidth;
//       const viewportHeight = container.clientHeight;
//       const buffer = TILE_WIDTH * 2;
      
//       // Use transform for better performance
//       tiles.forEach(tile => {
//         const tileElement = document.getElementById(tile.id);
//         if (!tileElement) return;
        
//         // Calculate base position for this tile
//         let baseX = tile.gridX * GRID_WIDTH + tile.localX * TILE_WIDTH;
//         let baseY = tile.gridY * GRID_HEIGHT + tile.localY * TILE_HEIGHT;
        
//         // Apply the offset
//         let finalX = baseX - offsetX;
//         let finalY = baseY - offsetY;
        
//         // Wrap positions to create seamless infinite scroll
//         const totalWidth = GRID_WIDTH * GRID_REPEAT_X;
//         const totalHeight = GRID_HEIGHT * GRID_REPEAT_Y;
        
//         while (finalX > viewportWidth + buffer) finalX -= totalWidth;
//         while (finalX < -TILE_WIDTH - buffer) finalX += totalWidth;
//         while (finalY > viewportHeight + buffer) finalY -= totalHeight;
//         while (finalY < -TILE_HEIGHT - buffer) finalY += totalHeight;
        
//         // Use translate3d for hardware acceleration
//         // On mobile, use simpler transforms to reduce GPU load
//         if (isMobile) {
//           tileElement.style.transform = `translate(${finalX}px, ${finalY}px)`;
//         } else {
//           tileElement.style.transform = `translate3d(${finalX}px, ${finalY}px, 0)`;
//         }
//       });
//     };
    
//     const handleMouseDown = (e) => {
//       isDragging = true;
//       lastX = e.clientX;
//       lastY = e.clientY;
//       velocityX = 0;
//       velocityY = 0;
      
//       if (animationFrame) {
//         cancelAnimationFrame(animationFrame);
//       }
      
//       container.style.cursor = 'grabbing';
//     };
    
//     const handleMouseMove = (e) => {
//       if (!isDragging) return;
      
//       const deltaX = e.clientX - lastX;
//       const deltaY = e.clientY - lastY;
      
//       scrollX -= deltaX;
//       scrollY -= deltaY;
      
//       velocityX = deltaX;
//       velocityY = deltaY;
      
//       lastX = e.clientX;
//       lastY = e.clientY;
      
//       updateTilePositions();
//     };
    
//     const handleMouseUp = () => {
//       if (!isDragging) return;
//       isDragging = false;
//       container.style.cursor = 'grab';
      
//       const momentum = () => {
//         if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
//           scrollX -= velocityX;
//           scrollY -= velocityY;
          
//           velocityX *= 0.95;
//           velocityY *= 0.95;
          
//           updateTilePositions();
//           animationFrame = requestAnimationFrame(momentum);
//         }
//       };
      
//       momentum();
//     };
    
//     const handleWheel = (e) => {
//       e.preventDefault();
      
//       scrollX += e.deltaX;
//       scrollY += e.deltaY;
      
//       updateTilePositions();
//     };
    
//     const handleTouchStart = (e) => {
//       const touch = e.touches[0];
//       isDragging = true;
//       lastX = touch.clientX;
//       lastY = touch.clientY;
//       velocityX = 0;
//       velocityY = 0;
      
//       if (animationFrame) {
//         cancelAnimationFrame(animationFrame);
//       }
//     };
    
//     const handleTouchMove = (e) => {
//       if (!isDragging) return;
//       e.preventDefault();
      
//       const touch = e.touches[0];
//       const deltaX = touch.clientX - lastX;
//       const deltaY = touch.clientY - lastY;
      
//       scrollX -= deltaX;
//       scrollY -= deltaY;
      
//       velocityX = deltaX;
//       velocityY = deltaY;
      
//       lastX = touch.clientX;
//       lastY = touch.clientY;
      
//       updateTilePositions();
//     };
    
//     const handleTouchEnd = () => {
//       if (!isDragging) return;
//       isDragging = false;
      
//       const momentum = () => {
//         if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
//           scrollX -= velocityX;
//           scrollY -= velocityY;
          
//           velocityX *= 0.95;
//           velocityY *= 0.95;
          
//           updateTilePositions();
//           animationFrame = requestAnimationFrame(momentum);
//         }
//       };
      
//       momentum();
//     };
    
//     container.addEventListener('mousedown', handleMouseDown);
//     container.addEventListener('mousemove', handleMouseMove);
//     container.addEventListener('mouseup', handleMouseUp);
//     container.addEventListener('mouseleave', handleMouseUp);
//     container.addEventListener('wheel', handleWheel, { passive: false });
//     container.addEventListener('touchstart', handleTouchStart);
//     container.addEventListener('touchmove', handleTouchMove, { passive: false });
//     container.addEventListener('touchend', handleTouchEnd);
    
//     container.style.cursor = 'grab';
    
//     // Initial render
//     updateTilePositions();
    
//     return () => {
//       container.removeEventListener('mousedown', handleMouseDown);
//       container.removeEventListener('mousemove', handleMouseMove);
//       container.removeEventListener('mouseup', handleMouseUp);
//       container.removeEventListener('mouseleave', handleMouseUp);
//       container.removeEventListener('wheel', handleWheel);
//       container.removeEventListener('touchstart', handleTouchStart);
//       container.removeEventListener('touchmove', handleTouchMove);
//       container.removeEventListener('touchend', handleTouchEnd);
      
//       if (animationFrame) {
//         cancelAnimationFrame(animationFrame);
//       }
//     };
//   }, [tiles]);
  
//   return (
//     <>
//       <div 
//         ref={containerRef}
//         className="video-grid-container"
//         style={{
//           width: '100%',
//           height: '100vh',
//           overflow: 'hidden',
//           background: '#000',
//           position: 'relative',
//           userSelect: 'none',
//           transform: isMobile ? 'rotate(8deg) scale(1.5)' : 'rotate(8deg) scale(1.3)', // More scale on mobile
//           transformOrigin: 'center center',
//           WebkitOverflowScrolling: 'touch' // Smooth scrolling on iOS
//         }}
//       >
//         {tiles.map((tile) => (
//           <div
//             key={tile.id}
//             id={tile.id}
//             className="video-grid-item"
//             style={{
//               position: 'absolute',
//               width: `${TILE_WIDTH}px`,
//               height: `${TILE_HEIGHT}px`,
//               overflow: 'hidden',
//               cursor: 'pointer',
//               background: '#000',
//               willChange: isMobile ? 'auto' : 'transform', // Reduce GPU load on mobile
//               backfaceVisibility: 'hidden',
//               transform: 'translate3d(0, 0, 0)'
//             }}
//             onClick={(e) => {
//               e.stopPropagation();
//               handleVideoClick(tile.project);
//             }}
//           >
//             {tile.project.previewUrl ? (
//               <video
//                 src={tile.project.previewUrl}
//                 poster={tile.project.thumbnailUrl}
//                 className="video-thumbnail"
//                 muted
//                 loop
//                 playsInline
//                 preload={isMobile ? "none" : "metadata"} // Don't preload on mobile
//                 onMouseEnter={(e) => {
//                   if (!isMobile) {
//                     try {
//                       e.target.play().catch(() => {});
//                       e.target.style.transform = 'scale(1.05)';
//                     } catch (error) {
//                       console.log('Video play failed:', error);
//                     }
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (!isMobile) {
//                     try {
//                       e.target.pause();
//                       e.target.currentTime = 0;
//                       e.target.style.transform = 'scale(1)';
//                     } catch (error) {
//                       console.log('Video pause failed:', error);
//                     }
//                   }
//                 }}
//                 onTouchStart={(e) => {
//                   // On mobile, just show thumbnail, don't play preview
//                   if (isMobile) {
//                     e.preventDefault();
//                   }
//                 }}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   display: 'block',
//                   transition: isMobile ? 'none' : 'transform 0.3s ease',
//                   pointerEvents: 'auto'
//                 }}
//               />
//             ) : (
//               <img
//                 src={tile.project.thumbnailUrl}
//                 alt={`Video ${tile.project.id}`}
//                 loading="lazy"
//                 onMouseEnter={(e) => {
//                   if (!isMobile) {
//                     e.target.style.transform = 'scale(1.05)';
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (!isMobile) {
//                     e.target.style.transform = 'scale(1)';
//                   }
//                 }}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   display: 'block',
//                   transition: isMobile ? 'none' : 'transform 0.3s ease',
//                   pointerEvents: 'auto'
//                 }}
//               />
//             )}
//           </div>
//         ))}
//       </div>
      
//       {/* Fullscreen Video Modal */}
//       {fullscreenVideo && (
//         <div
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             backgroundColor: 'rgba(0, 0, 0, 0.95)',
//             zIndex: 9999,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             animation: 'fadeIn 0.3s ease'
//           }}
//           onClick={closeFullscreen}
//         >
//           {/* Close Button */}
//           <button
//             onClick={closeFullscreen}
//             style={{
//               position: 'absolute',
//               top: '20px',
//               right: '20px',
//               width: '50px',
//               height: '50px',
//               border: 'none',
//               background: 'rgba(255, 255, 255, 0.1)',
//               color: '#fff',
//               fontSize: '24px',
//               cursor: 'pointer',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               transition: 'all 0.3s ease',
//               backdropFilter: 'blur(10px)',
//               zIndex: 10000
//             }}
//             onMouseOver={(e) => {
//               e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
//               e.currentTarget.style.transform = 'scale(1.1)';
//             }}
//             onMouseOut={(e) => {
//               e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
//               e.currentTarget.style.transform = 'scale(1)';
//             }}
//           >
//             ✕
//           </button>
          
//           {/* Video Player */}
//           <div
//             style={{
//               width: '90%',
//               height: '90%',
//               maxWidth: '1920px',
//               maxHeight: '1080px',
//               position: 'relative'
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {fullscreenVideo.vimeoId ? (
//               <iframe
//                 src={`https://player.vimeo.com/video/${fullscreenVideo.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   border: 'none',
//                   borderRadius: '8px'
//                 }}
//                 allow="autoplay; fullscreen; picture-in-picture"
//                 allowFullScreen
//               />
//             ) : fullscreenVideo.previewUrl ? (
//               <video
//                 ref={fullscreenVideoRef}
//                 src={fullscreenVideo.previewUrl}
//                 controls
//                 autoPlay
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'contain',
//                   borderRadius: '8px'
//                 }}
//               />
//             ) : (
//               <img
//                 src={fullscreenVideo.thumbnailUrl}
//                 alt="Video"
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'contain',
//                   borderRadius: '8px'
//                 }}
//               />
//             )}
//           </div>
//         </div>
//       )}
      
//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default VideoGrid;


import React, { useEffect, useRef, useState } from "react";
import { projects } from "../../data/Projects";

const VideoGrid = ({ onVideoClick = () => {} }) => {
  const containerRef = useRef(null);
  const [tiles, setTiles] = useState([]);
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const fullscreenVideoRef = useRef(null);

  const isMobile =
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
    window.innerWidth < 768;

  const TILE_WIDTH = isMobile ? 300 : 600;
  const TILE_HEIGHT = isMobile ? 225 : 450;
  const COLS = 2;
  const ROWS = 2;
  const GRID_WIDTH = COLS * TILE_WIDTH;
  const GRID_HEIGHT = ROWS * TILE_HEIGHT;
  const GRID_REPEAT_X = isMobile ? 5 : 9;
  const GRID_REPEAT_Y = isMobile ? 5 : 9;

  // --- Build grid ---
  useEffect(() => {
    const newTiles = [];
    for (let gy = 0; gy < GRID_REPEAT_Y; gy++) {
      for (let gx = 0; gx < GRID_REPEAT_X; gx++) {
        for (let row = 0; row < ROWS; row++) {
          for (let col = 0; col < COLS; col++) {
            const projectIndex = (row * COLS + col) % projects.length;
            newTiles.push({
              id: `${gx}-${gy}-${row}-${col}`,
              project: projects[projectIndex],
              gridX: gx,
              gridY: gy,
              localX: col,
              localY: row,
            });
          }
        }
      }
    }
    setTiles(newTiles);
  }, [GRID_REPEAT_X, GRID_REPEAT_Y]);

  // --- Click to open video ---
  const handleVideoClick = (project) => {
    setFullscreenVideo(project);
    setIsPlaying(true);
    onVideoClick(project.vimeoId);
  };

  const closeFullscreen = () => {
    setFullscreenVideo(null);
    setIsPlaying(false);
  };

  // --- Handle fullscreen playback ---
  useEffect(() => {
    if (fullscreenVideo && fullscreenVideoRef.current) {
      fullscreenVideoRef.current.play();
    }
  }, [fullscreenVideo]);

  // --- Escape to close ---
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && fullscreenVideo) closeFullscreen();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [fullscreenVideo]);

  // --- Infinite grid scroll logic ---
  useEffect(() => {
    if (!containerRef.current || tiles.length === 0) return;
    const container = containerRef.current;

    let scrollX = 0,
      scrollY = 0,
      isDragging = false,
      lastX = 0,
      lastY = 0,
      velocityX = 0,
      velocityY = 0,
      animationFrame = null;

    const updateTilePositions = () => {
      const offsetX = ((scrollX % GRID_WIDTH) + GRID_WIDTH) % GRID_WIDTH;
      const offsetY = ((scrollY % GRID_HEIGHT) + GRID_HEIGHT) % GRID_HEIGHT;
      const viewportWidth = container.clientWidth;
      const viewportHeight = container.clientHeight;
      const buffer = TILE_WIDTH * 2;

      tiles.forEach((tile) => {
        const tileElement = document.getElementById(tile.id);
        if (!tileElement) return;

        let baseX = tile.gridX * GRID_WIDTH + tile.localX * TILE_WIDTH;
        let baseY = tile.gridY * GRID_HEIGHT + tile.localY * TILE_HEIGHT;

        let finalX = baseX - offsetX;
        let finalY = baseY - offsetY;

        const totalWidth = GRID_WIDTH * GRID_REPEAT_X;
        const totalHeight = GRID_HEIGHT * GRID_REPEAT_Y;

        while (finalX > viewportWidth + buffer) finalX -= totalWidth;
        while (finalX < -TILE_WIDTH - buffer) finalX += totalWidth;
        while (finalY > viewportHeight + buffer) finalY -= totalHeight;
        while (finalY < -TILE_HEIGHT - buffer) finalY += totalHeight;

        tileElement.style.transform = isMobile
          ? `translate(${finalX}px, ${finalY}px)`
          : `translate3d(${finalX}px, ${finalY}px, 0)`;
      });
    };

    // --- Mouse + touch drag handling ---
    const handleMouseDown = (e) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      velocityX = 0;
      velocityY = 0;
      cancelAnimationFrame(animationFrame);
      container.style.cursor = "grabbing";
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      scrollX -= deltaX;
      scrollY -= deltaY;
      velocityX = deltaX;
      velocityY = deltaY;
      lastX = e.clientX;
      lastY = e.clientY;
      updateTilePositions();
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      container.style.cursor = "grab";

      const momentum = () => {
        if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
          scrollX -= velocityX;
          scrollY -= velocityY;
          velocityX *= 0.95;
          velocityY *= 0.95;
          updateTilePositions();
          animationFrame = requestAnimationFrame(momentum);
        }
      };
      momentum();
    };

    const handleWheel = (e) => {
      e.preventDefault();
      scrollX += e.deltaX;
      scrollY += e.deltaY;
      updateTilePositions();
    };

    const handleTouchStart = (e) => {
      const t = e.touches[0];
      isDragging = true;
      lastX = t.clientX;
      lastY = t.clientY;
      cancelAnimationFrame(animationFrame);
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const t = e.touches[0];
      const deltaX = t.clientX - lastX;
      const deltaY = t.clientY - lastY;
      scrollX -= deltaX;
      scrollY -= deltaY;
      velocityX = deltaX;
      velocityY = deltaY;
      lastX = t.clientX;
      lastY = t.clientY;
      updateTilePositions();
    };

    const handleTouchEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      const momentum = () => {
        if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
          scrollX -= velocityX;
          scrollY -= velocityY;
          velocityX *= 0.95;
          velocityY *= 0.95;
          updateTilePositions();
          animationFrame = requestAnimationFrame(momentum);
        }
      };
      momentum();
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseUp);
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd);

    container.style.cursor = "grab";
    updateTilePositions();

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseUp);
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      cancelAnimationFrame(animationFrame);
    };
  }, [tiles]);

  // --- Render ---
  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden bg-black select-none"
        style={{
          transform: isMobile ? "rotate(8deg) scale(1.5)" : "rotate(8deg) scale(1.3)",
          transformOrigin: "center center",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {tiles.map((tile) => (
          <div
            key={tile.id}
            id={tile.id}
            onClick={(e) => {
              e.stopPropagation();
              handleVideoClick(tile.project);
            }}
            className="absolute bg-black overflow-hidden cursor-pointer will-change-transform [backface-visibility:hidden]"
            style={{
              width: `${TILE_WIDTH}px`,
              height: `${TILE_HEIGHT}px`,
              transform: "translate3d(0,0,0)",
            }}
          >
            {tile.project.previewUrl ? (
              <video
                src={tile.project.previewUrl}
                poster={tile.project.thumbnailUrl}
                muted
                loop
                playsInline
                preload={isMobile ? "none" : "metadata"}
                className="w-full h-full object-cover block transition-transform duration-300 ease-in-out pointer-events-auto"
                onMouseEnter={(e) => {
                  if (!isMobile) e.target.play().catch(() => {});
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }
                }}
              />
            ) : (
              <img
                src={tile.project.thumbnailUrl}
                alt={`Video ${tile.project.id}`}
                loading="lazy"
                className="w-full h-full object-cover block transition-transform duration-300 ease-in-out pointer-events-auto"
              />
            )}
          </div>
        ))}
      </div>

      {/* Fullscreen video modal */}
      {fullscreenVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(0,0,0,0.95)] animate-[fadeIn_0.3s_ease]"
          onClick={closeFullscreen}
        >
          {/* Close button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-5 right-5 w-[50px] h-[50px] flex items-center justify-center rounded-full border-none text-white text-2xl cursor-pointer transition-all duration-300 bg-[rgba(255,255,255,0.1)] backdrop-blur-lg z-[10000] hover:bg-[rgba(255,255,255,0.2)] hover:scale-110"
          >
            ✕
          </button>

          <div
            className="relative w-[90%] h-[90%] max-w-[1920px] max-h-[1080px]"
            onClick={(e) => e.stopPropagation()}
          >
            {fullscreenVideo.vimeoId ? (
              <iframe
                src={`https://player.vimeo.com/video/${fullscreenVideo.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                className="w-full h-full border-none rounded-lg"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : fullscreenVideo.previewUrl ? (
              <video
                ref={fullscreenVideoRef}
                src={fullscreenVideo.previewUrl}
                controls
                autoPlay
                className="w-full h-full object-contain rounded-lg"
              />
            ) : (
              <img
                src={fullscreenVideo.thumbnailUrl}
                alt="Video"
                className="w-full h-full object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      )}

      {/* Keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default VideoGrid;
