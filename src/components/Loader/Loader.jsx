
// import React, { useState, useEffect } from 'react';

// // Loader Component
// const Loader = ({ onLoadComplete }) => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress(prev => {
//         const newProgress = prev + Math.random() * 15;
//         if (newProgress >= 100) {
//           clearInterval(interval);
//           setTimeout(() => onLoadComplete(), 500);
//           return 100;
//         }
//         return newProgress;
//       });
//     }, 200);

//     return () => clearInterval(interval);
//   }, [onLoadComplete]);

//   return (
//     <div className="loader">
//       <p className="loader-percent">{Math.floor(progress)}%</p>
//       <div className="loader-bar" style={{ width: `${progress}%` }}></div>
//       <div className="loader-text">
//         <span className="loader-word"><span className="red">Rodeo</span></span>
//         <span className="loader-word"><span>Creative</span></span>
//         <span className="loader-word"><span>Production</span></span>
//         <span className="loader-word"><span>Collective</span></span>
//       </div>
//     </div>
//   );
// };
// export default Loader;



// import React, { useState, useEffect } from 'react';

// const Loader = ({ onLoadComplete }) => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress(prev => {
//         const newProgress = prev + Math.random() * 15;
//         if (newProgress >= 100) {
//           clearInterval(interval);
//           setTimeout(() => onLoadComplete(), 500);
//           return 100;
//         }
//         return newProgress;
//       });
//     }, 200);

//     return () => clearInterval(interval);
//   }, [onLoadComplete]);

//   return (
//     <div
//       className={`
//         fixed inset-0 z-[var(--z-index-loader)]
//         w-full h-[100vh] min-h-[100vh]
//         bg-[var(--color-black)] flex items-center justify-center
//         opacity-100 transition-all duration-700 ease-in-out overflow-hidden
//       `}
//     >
//       {/* Percentage */}
//       <p
//         className="
//           absolute bottom-12 left-12
//           text-[var(--color-white)] text-[var(--font-size-large)]
//           uppercase md:bottom-24 md:left-24
//         "
//       >
//         {Math.floor(progress)}%
//       </p>

//       {/* Progress Bar */}
//       <div
//         className="
//           absolute bottom-0 left-0 h-[2px]
//           bg-[var(--color-primary)]
//           transition-[width] duration-300 ease-[cubic-bezier(0.43,0,0.22,0.96)]
//         "
//         style={{ width: `${progress}%` }}
//       ></div>

//       {/* Text */}
//       <div
//         className="
//           text-[var(--color-white)] text-center uppercase
//           text-[var(--font-size-h1)] flex flex-wrap justify-center
//           max-w-[400px] px-8
//         "
//       >
//         {[
//           { text: 'Rodeo', color: 'text-[var(--color-primary)]' },
//           { text: 'Creative', color: 'text-[var(--color-white)]' },
//           { text: 'Production', color: 'text-[var(--color-white)]' },
//           { text: 'Collective', color: 'text-[var(--color-white)]' },
//         ].map((word, i) => (
//           <span
//             key={i}
//             className="mx-2 overflow-hidden inline-block"
//           >
//             <span
//              className="inline-block translate-y-full"
//               style={{
//                 animation: `slideUp 0.6s ease-out forwards`,
//                 animationDelay: `${0.1 + i * 0.2}s`,
//               }}

//             >
//               <span className={word.color}>{word.text}</span>
//             </span>
//           </span>
//         ))}
//       </div>

//       {/* Custom keyframes for word animation */}
//       <style>
//         {`
//           @keyframes slideUp {
//             from { transform: translateY(100%); opacity: 0; }
//             to { transform: translateY(0); opacity: 1; }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Loader;


import React, { useState, useEffect } from "react";

const Loader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
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
    <div
      className="
        fixed inset-0 
        flex items-center justify-center 
        bg-[var(--color-black)] 
        overflow-hidden 
        transition-all duration-700 ease-in-out
      "
      style={{ zIndex: "var(--z-index-loader)" }}
    >
      {/* Percentage */}
      <p
        className="
          absolute bottom-12 left-12 
          uppercase md:bottom-24 md:left-24
        "
        style={{
          color: "var(--color-white)",
          fontSize: "var(--font-size-large)",
        }}
      >
        {Math.floor(progress)}%
      </p>

      {/* Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{
          backgroundColor: "var(--color-primary)",
          width: `${progress}%`,
          transition: "width 0.3s cubic-bezier(0.43, 0, 0.22, 0.96)",
        }}
      />

      {/* Loader Text */}
      <div
        className="
          text-center uppercase flex flex-wrap justify-center max-w-[400px] px-8
        "
        style={{
          color: "var(--color-white)",
          fontSize: "var(--font-size-h1)",
        }}
      >
        {["Rodeo", "Creative", "Production", "Collective"].map((word, i) => (
          <span key={i} className="mx-2 overflow-hidden inline-block">
            <span
              className="inline-block translate-y-full"
              style={{
                animation: `slideUp 0.6s ease-out forwards`,
                animationDelay: `${0.1 + i * 0.2}s`,
                color:
                  word === "Rodeo"
                    ? "var(--color-primary)"
                    : "var(--color-white)",
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes slideUp {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
