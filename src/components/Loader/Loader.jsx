
import React, { useState, useEffect } from 'react';

// Loader Component
const Loader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadComplete(), 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className="loader">
      <p className="loader-percent">{Math.floor(progress)}%</p>
      <div className="loader-bar" style={{ width: `${progress}%` }}></div>
      <div className="loader-text">
        <span className="loader-word"><span className="red">Rodeo</span></span>
        <span className="loader-word"><span>Creative</span></span>
        <span className="loader-word"><span>Production</span></span>
        <span className="loader-word"><span>Collective</span></span>
      </div>
    </div>
  );
};
export default Loader;