import React, { useState } from "react";
import ProjectItem from "../../components/Common/ProjectItem";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { projects } from "../../data/Projects";

const ProjectsSection = ({ isActive }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      {/* Main Section — full screen, black background, scrollable */}
      <div
        className={`
          fixed inset-0 z-[var(--z-index-section)] w-full h-full
          bg-black overflow-y-auto
          transition-opacity duration-500 ease-out
          ${isActive ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
        `}
      >
        {/* Vertically centered wrapper with top/bottom padding for header */}
        <div className="flex justify-center items-center min-h-screen pt-32 pb-24 px-12 md:px-24">
          {/* Content column — right-biased like the screenshot */}
          <div className="w-full max-w-[700px] mx-auto">
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
