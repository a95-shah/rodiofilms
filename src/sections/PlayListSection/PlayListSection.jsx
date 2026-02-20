// const PlaylistSection = ({ isActive }) => {
//   const playlists = [
//     { id: 1, name: 'RODEO RAP', tracks: '58 TRACKS', url: 'https://open.spotify.com/playlist/5TziFPuKVssPCxmqWH6Kcd' },
//     { id: 2, name: 'RODEO SWEET', tracks: '65 TRACKS', url: 'https://open.spotify.com/playlist/7s3lpPFm1yoOdGK4k1n9A9' },
//     { id: 3, name: 'RODEO CHILL', tracks: '160 TRACKS', url: 'https://open.spotify.com/playlist/6JMxSqIjFuDQseX2IwGEAj' }
//   ];

//   return (
//     <div className={`section ${isActive ? 'active' : ''}`}>
//       {/* <p className="section-title"><span>Playlist</span></p> */}
//       <div className="section-scroll">
//         <div className="section-content">
//           {playlists.map((playlist, index) => (
//             <a
//               key={playlist.id}
//               className={`item visible`}
//               href={playlist.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ transitionDelay: `${index * 0.1}s` }}
//             >
//               <div className="item-content">
//                 <div className="item-left">
//                   <strong className="item-title">{playlist.name}</strong>
//                   <span className="item-category">{playlist.tracks}</span>
//                 </div>
//                 <p className="item-right">LISTEN</p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default PlaylistSection;


import React from "react";

const PlaylistSection = ({ isActive }) => {
  const playlists = [
    {
      id: 1,
      name: "RODEO RAP",
      tracks: "58 TRACKS",
      url: "https://open.spotify.com/playlist/5TziFPuKVssPCxmqWH6Kcd",
    },
    {
      id: 2,
      name: "RODEO SWEET",
      tracks: "65 TRACKS",
      url: "https://open.spotify.com/playlist/7s3lpPFm1yoOdGK4k1n9A9",
    },
    {
      id: 3,
      name: "RODEO CHILL",
      tracks: "160 TRACKS",
      url: "https://open.spotify.com/playlist/6JMxSqIjFuDQseX2IwGEAj",
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
      {/* Scroll wrapper */}
      <div className="flex justify-center items-center min-h-screen pt-32 pb-24 px-12 md:px-24">
        <div className="w-full max-w-[700px] mx-auto">
          {playlists.map((playlist, index) => (
            <a
              key={playlist.id}
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              className="w-full block group opacity-0 animate-fadeIn"
            >
              <div className="flex items-center justify-between py-8 transition-all duration-300 group-hover:opacity-80">
                <div className="flex flex-col space-y-2">
                  <strong className="text-white text-[13px] font-bold tracking-widest uppercase">
                    {playlist.name}
                  </strong>
                  <span className="text-gray-400 text-[11px] tracking-widest uppercase">
                    {playlist.tracks}
                  </span>
                </div>
                <p className="text-white text-[13px] tracking-widest uppercase font-bold">
                  LISTEN
                </p>
              </div>
              <hr className="w-full border-0 border-t border-white/25 m-0" />
            </a>
          ))}
          {/* Top border above first item */}
          <style>{`
            .w-full.block.group:first-child { border-top: 1px solid rgba(255,255,255,0.25); }
            @keyframes fadeIn {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn { animation: fadeIn 0.8s ease forwards; }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default PlaylistSection;
