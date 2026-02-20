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
      {/* Divider line ABOVE first item */}
      {index === 0 && <hr className="w-full border-0 border-t border-white/25 m-0" />}

      {/* Project List Item */}
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ transitionDelay: `${index * 80}ms` }}
        className={`
          relative block w-full text-left cursor-pointer bg-transparent border-none p-0
          transition-opacity duration-500
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <div className="flex justify-between items-center w-full py-8">
          {/* Left: Title + Category */}
          <div className="flex-1 text-left">
            <strong
              className={`
                block uppercase font-bold tracking-widest
                text-[19px] leading-none mb-2
                transition-colors duration-300
                ${isHovered ? 'text-[var(--color-primary)]' : 'text-white'}
              `}
            >
              {title}
            </strong>
            <span className="block uppercase text-[14px] tracking-widest text-gray-400 leading-none">
              {category}
            </span>
          </div>

          {/* Right: Year */}
          <p className="flex-shrink-0 text-right uppercase text-[13px] tracking-widest font-bold text-white pl-8 m-0">
            {year}
          </p>
        </div>
      </button>

      {/* Divider line below every item */}
      <hr className="w-full border-0 border-t border-white/25 m-0" />

      {/* Hover Vimeo Background Preview */}
      {isHovered && vimeoId && (
        <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?background=1&muted=1&loop=1&autoplay=1`}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title={title}
              className="absolute top-1/2 left-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 object-cover border-none"
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      )}
    </>
  );
};

export default ProjectItem;
