// import React, { useState } from 'react';
// import ProjectItem from '../../components/Common/ProjectItem';
// import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
// import { projects } from '../../data/Projects';
// import './ProjectsSection.css';

// const ProjectsSection = ({ isActive }) => {
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   return (  
//     <>
//       <div className={`section projects-section ${isActive ? 'active' : ''}`}>
       
//         <div className="section-scroll">
//           <div className="section-content">
//             {projects.map((project, index) => (
//               <ProjectItem
//                 key={project.id}
//                 title={project.title}
//                 category={project.category}
//                 year={project.year}
//                 thumbnailUrl={project.thumbnailUrl}
//                 vimeoId={project.vimeoId}
//                 index={index}
//                 onClick={() => setSelectedVideo(project.vimeoId)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

     
//       {selectedVideo && (
//         <VideoPlayer
//           vimeoId={selectedVideo}
//           isOpen={true}
//           onClose={() => setSelectedVideo(null)}
//         />
//       )}
//     </>
//   );
// };

// export default ProjectsSection;


import React, { useState } from "react";
import ProjectItem from "../../components/Common/ProjectItem";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { projects } from "../../data/Projects";

const ProjectsSection = ({ isActive }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      {/* Main Section */}
      <div
        className={`fixed inset-0 z-[var(--z-index-section)] w-full h-full overflow-y-auto transition-all duration-500 ease-out
          ${isActive ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
        `}
      >
        {/* Optional title — hidden in your current version */}
        {/* 
        <p className="fixed top-[11rem] left-[3rem] z-30 overflow-hidden text-[var(--color-white)] text-[var(--font-size-h1)] uppercase">
          <span
            className={`inline-block transform transition-transform duration-[600ms] [transition-timing-function:cubic-bezier(0.59,0,0.32,0.99)]
              ${isActive ? "translate-y-0 delay-300" : "translate-y-full"}
            `}
          >
            Projects
          </span>
        </p> 
        */}

        {/* Scroll Wrapper */}
        <div className="w-full min-h-screen py-[12rem] pb-[6rem]">
          <div className="w-[calc(100%-6rem)] max-w-[42rem] mx-auto relative z-20 md:w-[calc(100%-12rem)]">
            {projects.map((project, index) => (
              <ProjectItem
                key={project.id}
                title={project.title}
                category={project.category}
                year={project.year}
                thumbnailUrl={project.thumbnailUrl}
                vimeoId={project.vimeoId}
                index={index}
                onClick={() => setSelectedVideo(project.vimeoId)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayer
          vimeoId={selectedVideo}
          isOpen={true}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
};

export default ProjectsSection;

