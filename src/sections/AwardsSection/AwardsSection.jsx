// import ProjectItem from "../../components/Common/ProjectItem";

// const AwardsSection = ({ isActive }) => {
//   const awards = [
//     { 
//       id: 1, 
//       title: 'Gold / One Screen Festival', 
//       project: 'Boucan — La Cible', 
//       year: '2020',
//       thumbnailUrl: 'https://rodeo.film/media/site/9ad64d3d60-1717165064/charlie-3-600x.jpg',
//       previewUrl: 'https://rodeo.film/media/site/3ed14dabac-1717424859/wheels.mp4'
//     },
//     { 
//       id: 2, 
//       title: 'Staff Pick / VIMEO', 
//       project: 'Boucan — La Cible', 
//       year: '2019',
//       thumbnailUrl: 'https://rodeo.film/media/site/ac2caafa79-1670507066/13-600x.jpg',
//       previewUrl: 'https://rodeo.film/media/site/f0bdc32d47-1717166278/ap.mp4'
//     },
//     { 
//       id: 3, 
//       title: 'Silver Screen / YDA Cannes', 
//       project: 'Boucan — Sweet Drift', 
//       year: '2019',
//       thumbnailUrl: 'https://rodeo.film/media/site/0c60e71161-1670502513/benoit-1-600x.jpg',
//       previewUrl: 'https://rodeo.film/media/site/9640d12f12-1718114663/boucle3.mp4'
//     }
//   ];

//   return (
//     <div className={`section ${isActive ? 'active' : ''}`}>
//       {/* <p className="section-title"><span>Awards</span></p> */}
//       <div className="section-scroll">
//         <div className="section-content">
//           {awards.map((award, index) => (
//             <ProjectItem
//               key={award.id}
//               title={award.title}
//               category={award.project}
//               year={award.year}
//               previewUrl={award.previewUrl}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AwardsSection;


import ProjectItem from "../../components/Common/ProjectItem";

const AwardsSection = ({ isActive }) => {
  const awards = [
    {
      id: 1,
      title: "Gold / One Screen Festival",
      project: "Boucan — La Cible",
      year: "2020",
      thumbnailUrl:
        "https://rodeo.film/media/site/9ad64d3d60-1717165064/charlie-3-600x.jpg",
      previewUrl:
        "https://rodeo.film/media/site/3ed14dabac-1717424859/wheels.mp4",
    },
    {
      id: 2,
      title: "Staff Pick / VIMEO",
      project: "Boucan — La Cible",
      year: "2019",
      thumbnailUrl:
        "https://rodeo.film/media/site/ac2caafa79-1670507066/13-600x.jpg",
      previewUrl:
        "https://rodeo.film/media/site/f0bdc32d47-1717166278/ap.mp4",
    },
    {
      id: 3,
      title: "Silver Screen / YDA Cannes",
      project: "Boucan — Sweet Drift",
      year: "2019",
      thumbnailUrl:
        "https://rodeo.film/media/site/0c60e71161-1670502513/benoit-1-600x.jpg",
      previewUrl:
        "https://rodeo.film/media/site/9640d12f12-1718114663/boucle3.mp4",
    },
  ];

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center bg-[var(--color-background)] transition-opacity duration-700 ease-out ${
        isActive ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Section Scroll Wrapper */}
      <div className="overflow-y-auto w-full flex justify-center">
        {/* Section Content */}
        <div className="w-full max-w-[75rem] flex flex-col items-center gap-10 px-4 md:px-8 py-12">
          {awards.map((award, index) => (
            <ProjectItem
              key={award.id}
              title={award.title}
              category={award.project}
              year={award.year}
              previewUrl={award.previewUrl}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Optional: background looping award video (like .item-video) */}
      <video
        className="fixed top-0 left-0 w-full h-full opacity-40 pointer-events-none z-[-1] object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://rodeo.film/media/site/3ed14dabac-1717424859/wheels.mp4"
      />
    </div>
  );
};

export default AwardsSection;
