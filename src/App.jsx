// import React, { useState, useEffect } from "react";
// import Loader from "./components/Loader/Loader";
// import Header from "./components/Header/Header";
// import Menu from "./components/Menu/Menu";
// import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
// import AwardsSection from "./sections/AwardsSection/AwardsSection";
// import GallerySection from "./sections/GallerySection/GallerySection";
// import PlayListSection from "./sections/PlayListSection/PlayListSection";
// import AboutSection from "./sections/AboutSection/AboutSection";
// import Footer from "./components/Footer/Footer";
// import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
// import VideoGrid from "./components/VideoGrid/VideoGrid";

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState(null);
//   const [selectedVideo, setSelectedVideo] = useState(null);
  
//   const handleLoadComplete = () => {
//     setIsLoading(false);
//   };

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//     if (activeSection) {
//       setActiveSection(null);
//     } else {
//       // Otherwise, open/close the menu
//       setMenuOpen(!menuOpen);
//     }
//   };

//   const handleSectionSelect = (sectionId) => {
//     setActiveSection(sectionId);
//     setMenuOpen(false); // hide the menu items once a page opens
//   };

//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape') {
//         if (activeSection) {
//           setActiveSection(null);
//         } else if (menuOpen) {
//           setMenuOpen(false);
//         }
//       }
//     };

//     window.addEventListener('keydown', handleEscape);
//     return () => window.removeEventListener('keydown', handleEscape);
//   }, [activeSection, menuOpen]);

//   return (
//     <div className="app">
//       <style>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         .app {
//           width: 100%;
//           height: 100vh;
//           overflow: hidden;
//           background-color: #0c0a09;
//           color: #ff2203;
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
//           position: relative;
//         }

//         .app::after {
//           content: "";
//           position: fixed;
//           top: -100%;
//           left: -50%;
//           z-index: 6;
//           width: 300%;
//           height: 300%;
//           background: repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.1) 3px);
//           opacity: 0.2;
//           pointer-events: none;
//           mix-blend-mode: color-burn;
//           animation: grain 8s steps(10) infinite;
//         }

//         @keyframes grain {
//           0%, 100% { transform: translate(0, 0); }
//           10% { transform: translate(-5%, -10%); }
//           20% { transform: translate(-15%, 5%); }
//           30% { transform: translate(7%, -25%); }
//           40% { transform: translate(-5%, 25%); }
//           50% { transform: translate(-15%, 10%); }
//           60% { transform: translate(15%, 0); }
//           70% { transform: translateY(15%); }
//           80% { transform: translate(3%, 35%); }
//           90% { transform: translate(-10%, 10%); }
//         }

//         .loader {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           z-index: 9999;
//           width: 100vw;
//           height: 100vh;
//           background: #000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//         }
        
//         @supports (height: 100dvh) {
//           .loader {
//             height: 100dvh;
//           }
//         }

//         .loader-percent {
//           position: absolute;
//           bottom: 3rem;
//           left: 3rem;
//           color: #fff;
//           font-size: 16px;
//           text-transform: uppercase;
//         }

//         .loader-bar {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           height: 2px;
//           background: #ff2203;
//           transition: width 0.3s ease;
//         }

//         .loader-text {
//           color: #fff;
//           text-align: center;
//           text-transform: uppercase;
//           font-size: 18px;
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           max-width: 400px;
//         }

//         .loader-word {
//           margin: 0 0.5rem;
//           overflow: hidden;
//         }

//         .loader-word span {
//           display: inline-block;
//           animation: slideUp 0.6s ease-out forwards;
//         }

//         .loader-word:nth-child(1) span { animation-delay: 0.1s; }
//         .loader-word:nth-child(2) span { animation-delay: 0.3s; }
//         .loader-word:nth-child(3) span { animation-delay: 0.5s; }
//         .loader-word:nth-child(4) span { animation-delay: 0.7s; }

//         .red { color: #ff2203; }

//         @keyframes slideUp {
//           from { transform: translateY(100%); }
//           to { transform: translateY(0); }
//         }

//         .header {
//           position: fixed;
//           z-index: 900;
//           color: #fff;
//           opacity: 0;
//           transition: opacity 1s ease;
//         }

//         .header.visible { opacity: 1; }

//         .logo {
//           position: fixed;
//           top: 3rem;
//           left: 3rem;
//           z-index: 10;
//           width: 105px;
//           height: 48px;
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 0;
//           color: #fff;
//         }

//         .logo svg {
//           width: 100%;
//           height: 100%;
//         }

//         .burger {
//           position: fixed;
//           top: 3.2rem;
//           right: 3rem;
//           z-index: 10;
//           width: 40px;
//           height: 40px;
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 0;
//         }

//         .burger-line {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           width: 40px;
//           height: 2px;
//           background-color: #fff;
//           transition: 0.6s cubic-bezier(0.43, 0.01, 0.36, 1.27);
//         }

//         .burger-line:nth-child(1) {
//           transform: translate(-50%, calc(-50% - 10px));
//         }

//         .burger-line:nth-child(2) {
//           transform: translate(-50%, -50%);
//         }

//         .burger-line:nth-child(3) {
//           transform: translate(-50%, calc(-50% + 10px));
//         }

//         .burger.active .burger-line:nth-child(1) {
//           transform: translate(-50%, -50%) scaleX(0);
//         }

//         .burger.active .burger-line:nth-child(2) {
//           transform: translate(-50%, -50%) rotate(45deg);
//         }

//         .burger.active .burger-line:nth-child(3) {
//           transform: translate(-50%, -50%) rotate(-45deg);
//         }

//         .menu {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           z-index: 9998;
//           width: 100vw;
//           height: 100vh;
//           background-color: rgba(1, 1, 1, 0.95);
//           color: #fff;
//           opacity: 0;
//           visibility: hidden;
//           transition: opacity 0.3s ease, visibility 0.3s ease;
//           overflow: hidden;
//         }
        
//         @supports (height: 100dvh) {
//           .menu {
//             height: 100dvh;
//           }
//         }

//         .menu.active {
//           opacity: 1;
//           visibility: visible;
//         }

//         .menu-nav {
//           position: relative;
//           z-index: 6;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           height: 100%;
//           gap: 1rem;
//         }

//         .menu-button {
//           overflow: hidden;
//           background: none;
//           border: none;
//           color: #fff;
//           cursor: pointer;
//           font-size: 18px;
//           text-transform: uppercase;
//           padding: 0;
//         }

//         .menu-button span {
//           display: inline-block;
//           transform: translateY(100%);
//           transition: transform 0.8s cubic-bezier(0.43, 0, 0.22, 0.96), color 0.3s ease;
//         }

//         .menu.active .menu-button span {
//           transform: translateY(0);
//         }

//         .menu-button:hover span {
//           color: #ff2203;
//         }

//         .menu-socials {
//           position: absolute;
//           bottom: 3rem;
//           left: 3rem;
//           display: flex;
//           gap: 1.5rem;
//           font-size: 4.8rem;
//         }

//         .menu-socials a {
//           color: #fff;
//           text-decoration: none;
//           font-size: 30px;
//           transition: color 0.3s ease;
//         }

//         .menu-socials a:hover {
//           color: #ff2203;
//         }

//         .section {
//           position: fixed;
//           top: 0;
//           left: 0;
//           z-index: 5;
//           width: 100%;
//           height: 100%;
//           opacity: 0;
//           visibility: hidden;
//           pointer-events: none;
//           transition: opacity 0.3s ease, visibility 0.3s ease;
//           overflow-y: auto;
//         }

//         .section.active {
//           opacity: 1;
//           visibility: visible;
//           pointer-events: auto;
//         }

//         .section-title {
//           position: fixed;
//           top: 11rem;
//           left: 3rem;
//           z-index: 3;
//           overflow: hidden;
//           font-size: 18px;
//           text-transform: uppercase;
//           color: #fff;
//         }

//         .section-title span {
//           display: inline-block;
//           transform: translateY(100%);
//           transition: transform 0.6s cubic-bezier(0.59, 0, 0.32, 0.99);
//         }

//         .section.active .section-title span {
//           transform: translateY(0);
//           transition-delay: 0.3s;
//         }

//         .section-scroll {
//           width: 100%;
//           height: 100%;
//           padding: 12rem 0 6rem;
//           background-color: rgba(1, 1, 1, 0.95);
//         }

//         .section-content {
//           width: calc(100% - 6rem);
//           max-width: 42rem;
//           margin: 0 auto;
//         }

//         .item {
//           position: relative;
//           display: block;
//           overflow: hidden;
//           width: 100%;
//           background: none;
//           border: none;
//           color: #fff;
//           text-decoration: none;
//           cursor: pointer;
//           padding: 0;
//           text-align: left;
//         }

//         .item::before {
//           content: "";
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 100%;
//           height: 1px;
//           background-color: #fff;
//           opacity: 0.5;
//           transform: scaleX(0);
//           transform-origin: left center;
//           transition: transform 0.8s cubic-bezier(0.59, 0, 0.32, 0.99);
//         }

//         .item.visible::before {
//           transform: scaleX(1);
//         }

//         .item-content {
//           display: flex;
//           justify-content: space-between;
//           width: 100%;
//           padding: 1.9rem 0 1.5rem;
//           transform: translateY(100%);
//           transition: transform 1s cubic-bezier(0.59, 0, 0.32, 0.99);
//         }

//         .item.visible .item-content {
//           transform: translateY(0);
//         }

//         .item-left {
//           text-align: left;
//           flex: 1;
//         }

//         .item-title {
//           display: block;
//           font-size: 14px;
//           text-transform: uppercase;
//           transition: color 0.3s ease;
//         }

//         .item-category {
//           display: block;
//           color: #e6e6e6;
//           font-size: 14px;
//           text-transform: uppercase;
//           margin-top: 0.5rem;
//         }

//         .item-right {
//           flex-shrink: 0;
//           text-align: right;
//           font-size: 14px;
//           text-transform: uppercase;
//           margin-left: 3rem;
//         }

//         .item:hover .item-title {
//           color: #ff2203;
//         }

//         .about-text {
//           line-height: 1.6;
//           font-size: 16px;
//           margin-bottom: 3rem;
//           opacity: 0;
//           transition: opacity 0.8s ease;
//           text-align: center;
//           color: #fff;
//         }

//         .about-text.visible {
//           opacity: 1;
//         }

//         .gallery-instruction {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           color: #ff2203;
//           font-size: 14px;
//           text-transform: uppercase;
//         }

//         .footer {
//           position: fixed;
//           right: 3rem;
//           bottom: 3.1rem;
//           z-index: 6;
//           display: flex;
//           color: #fff;
//           text-transform: uppercase;
//           font-size: 14px;
//           opacity: 0;
//           transition: opacity 1s ease;
//         }

//         .footer.visible {
//           opacity: 1;
//         }

//         .footer a {
//           color: #fff;
//           text-decoration: none;
//           transition: color 0.3s ease;
//         }

//         .footer a:hover {
//           color: #ff2203;
//         }

//         @media (min-width: 768px) {
//           .logo {
//             width: 160px;
//             height: 70px;
//             top: 6rem;
//             left: 6rem;
//           }

//           .burger {
//             top: 5.2rem;
//             right: 6rem;
//           }

//           .section-title {
//             left: 6rem;
//           }

//           .menu-socials {
//             bottom: 6rem;
//             left: 6rem;
//           }

//           .footer {
//             right: 8rem;
//             bottom: 6rem;
//             transform: rotate(-90deg) translate(100%);
//             transform-origin: bottom right;
//           }
//         }
//       `}</style>

//       {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
      
//       {!isLoading && (
//         <>
//           <Header 
//             onMenuToggle={handleMenuToggle} 
//             menuOpen={menuOpen}
//             isBack={!!activeSection}
//             isVisible={!isLoading}
//           />
          
//           <Menu 
//             isOpen={menuOpen && !activeSection} 
//             onSectionSelect={handleSectionSelect}
//           />
          
//           <VideoPlayer
//             vimeoId={selectedVideo}
//             isOpen={!!selectedVideo}
//             onClose={() => setSelectedVideo(null)}
//           />

//           <VideoGrid />

//           <ProjectsSection 
//             isActive={activeSection === 'projects'}
//             onVideoClick={(vimeoId) => setSelectedVideo(vimeoId)} 
//           />
//           <AwardsSection isActive={activeSection === 'awards'} />
//           <GallerySection isActive={activeSection === 'gallery'} />
//           <PlayListSection isActive={activeSection === 'playlist'} />
//           <AboutSection isActive={activeSection === 'about'} />

//           <Footer isVisible={!isLoading} />
//         </>
//       )}
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect } from "react";
// import Loader from "./components/Loader/Loader";
// import Header from "./components/Header/Header";
// import Menu from "./components/Menu/Menu";
// import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
// import AwardsSection from "./sections/AwardsSection/AwardsSection";
// import GallerySection from "./sections/GallerySection/GallerySection";
// import PlayListSection from "./sections/PlayListSection/PlayListSection";
// import AboutSection from "./sections/AboutSection/AboutSection";
// import Footer from "./components/Footer/Footer";
// import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
// import VideoGrid from "./components/VideoGrid/VideoGrid";

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState(null);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const handleLoadComplete = () => {
//     setIsLoading(false);
//   };

//   const handleMenuToggle = () => {
//     if (activeSection) {
//       setActiveSection(null);
//     } else {
//       setMenuOpen(prev => !prev);
//     }
//   };

//   const handleSectionSelect = (sectionId) => {
//     setActiveSection(sectionId);
//     setMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === "Escape") {
//         if (activeSection) {
//           setActiveSection(null);
//         } else if (menuOpen) {
//           setMenuOpen(false);
//         }
//       }
//     };
//     window.addEventListener("keydown", handleEscape);
//     return () => window.removeEventListener("keydown", handleEscape);
//   }, [activeSection, menuOpen]);

//   return (
//     <div className="w-full h-screen overflow-hidden bg-[#0c0a09] text-[#ff2203] font-sans relative">
//       <div className="grain-overlay"></div>

//       {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
//       {!isLoading && (
//         <>
//           <Header
//             onMenuToggle={handleMenuToggle}
//             menuOpen={menuOpen}
//             isBack={!!activeSection}
//             isVisible={!isLoading}
//           />

//           <Menu
//             isOpen={menuOpen && !activeSection}
//             onSectionSelect={handleSectionSelect}
//           />

//           <VideoPlayer
//             vimeoId={selectedVideo}
//             isOpen={!!selectedVideo}
//             onClose={() => setSelectedVideo(null)}
//           />

//           <VideoGrid onVideoClick={(vimeoId) => setSelectedVideo(vimeoId)} />

//           <ProjectsSection
//             isActive={activeSection === "projects"}
//           />
//           <AwardsSection isActive={activeSection === "awards"} />
//           <GallerySection isActive={activeSection === "gallery"} />
//           <PlayListSection isActive={activeSection === "playlist"} />
//           <AboutSection isActive={activeSection === "about"} />

//           <Footer isVisible={!isLoading} />
//         </>
//       )}
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import AwardsSection from "./sections/AwardsSection/AwardsSection";
import GallerySection from "./sections/GallerySection/GallerySection";
import PlayListSection from "./sections/PlayListSection/PlayListSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoGrid from "./components/VideoGrid/VideoGrid";
import "./styles/globals.css"; // ✅ Import global styles
import "./index.css";         // ✅ Import Tailwind + base styles

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleLoadComplete = () => setIsLoading(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    if (activeSection) setActiveSection(null);
  };

  const handleSectionSelect = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (activeSection) setActiveSection(null);
        else if (menuOpen) setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeSection, menuOpen]);

  return (
    <div className="app">
      {isLoading && <Loader onLoadComplete={handleLoadComplete} />}

      {!isLoading && (
        <>
          <Header
            onMenuToggle={handleMenuToggle}
            menuOpen={menuOpen}
            isBack={!!activeSection}
            isVisible={!isLoading}
          />

          <Menu
            isOpen={menuOpen && !activeSection}
            onSectionSelect={handleSectionSelect}
          />

          <VideoPlayer
            vimeoId={selectedVideo}
            isOpen={!!selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />

          <VideoGrid />

          <ProjectsSection
            isActive={activeSection === "projects"}
            onVideoClick={(vimeoId) => setSelectedVideo(vimeoId)}
          />
          <AwardsSection isActive={activeSection === "awards"} />
          <GallerySection isActive={activeSection === "gallery"} />
          <PlayListSection isActive={activeSection === "playlist"} />
          <AboutSection isActive={activeSection === "about"} />

          <Footer isVisible={!isLoading} />
        </>
      )}
    </div>
  );
};

export default App;
