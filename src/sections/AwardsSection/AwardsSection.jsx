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
      className={`
        fixed inset-0 z-[var(--z-index-section)] w-full h-full
        bg-black overflow-y-auto
        transition-opacity duration-500 ease-out
        ${isActive ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
      `}
    >
      {/* Vertically centered wrapper */}
      <div className="flex justify-center items-center min-h-screen pt-32 pb-24 px-12 md:px-24">
        {/* Content column */}
        <div className="w-full max-w-[700px] mx-auto">
          {awards.map((award, index) => (
            <ProjectItem
              key={award.id}
              title={award.title}
              category={award.project}
              year={award.year}
              thumbnailUrl={award.thumbnailUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
