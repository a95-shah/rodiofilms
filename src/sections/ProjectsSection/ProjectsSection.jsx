// import React from 'react';
// import ProjectItem from '../../components/Common/ProjectItem';
// import { projects } from "../../data/Projects";
// import './ProjectsSection.css';

// const ProjectsSection = ({ isActive }) => {
//   return (
//     <div className={`section projects-section ${isActive ? 'active' : ''}`}>
//       <p className="section-title"><span>Projects</span></p>
//       <div className="section-scroll">
//         <div className="section-content">
//           {projects.map((project, index) => (
//             <ProjectItem
//               key={project.id}
//               title={project.title}
//               category={project.category}
//               year={project.year}
//               index={index}
//               onClick={() => console.log('Project clicked:', project.id)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectsSection;





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
//         <p className="section-title"><span>Projects</span></p>
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

//       <VideoPlayer
//         vimeoId={selectedVideo}
//         isOpen={!!selectedVideo}
//         onClose={() => setSelectedVideo(null)}
//       />
//     </>
//   );
// };

// export default ProjectsSection;

// accurate

// import React, { useState } from 'react';
// import ProjectItem from '../../components/Common/ProjectItem';
// import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
// import { projects } from '../../data/Projects';
// import './ProjectsSection.css';

//   const ProjectsSection = ({ isActive }) => {
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [hoveredThumbnail, setHoveredThumbnail] = useState(null);

//   return (
//     <>
//       {/* Background thumbnail display */}
//       {hoveredThumbnail && (
//         <div className="video-background-layer">
//           <img src={hoveredThumbnail} alt="Preview" />
//         </div>
//       )}

//       <div className={`section projects-section ${isActive ? 'active' : ''}`}>
//         {/* <p className="section-title"><span>Projects</span></p> */}
//         <div className="section-scroll" >
//           <div className="section-content">
//             {projects.map((project, index) => (
//               <div
//                 key={project.id}
//                 onMouseEnter={() => setHoveredThumbnail(project.thumbnailUrl)}
//                 onMouseLeave={() => setHoveredThumbnail(null)}
//               >
//                 <ProjectItem
//                   title={project.title}
//                   category={project.category}
//                   year={project.year}
//                   thumbnailUrl={project.thumbnailUrl}
//                   vimeoId={project.vimeoId}
//                   index={index}
//                   onClick={() => setSelectedVideo(project.vimeoId)}
//                 />
//               </div>
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

// src/sections/ProjectsSection/ProjectsSection.jsx
import React, { useState } from 'react';
import ProjectItem from '../../components/Common/ProjectItem';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { projects } from '../../data/Projects';
import './ProjectsSection.css';

const ProjectsSection = ({ isActive }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <div className={`section projects-section ${isActive ? 'active' : ''}`}>
        {/* Projects List */}
        <div className="section-scroll">
          <div className="section-content">
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

      {/* Fullscreen Vimeo Player */}
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


