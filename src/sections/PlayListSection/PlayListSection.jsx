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
      className={`relative w-full h-full bg-[var(--color-background)] transition-opacity duration-700 ease-out ${
        isActive ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Scroll wrapper */}
      <div className="overflow-y-auto h-full">
        <div className="flex flex-col items-center justify-center py-20 space-y-8">
          {playlists.map((playlist, index) => (
            <a
              key={playlist.id}
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-3xl block group opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="flex items-center justify-between border-b border-[var(--color-white)]/20 py-6 transition-all duration-300 group-hover:opacity-80">
                <div className="flex flex-col space-y-1">
                  <strong className="text-[var(--color-white)] text-lg font-semibold tracking-wide">
                    {playlist.name}
                  </strong>
                  <span className="text-[var(--color-white)]/70 text-sm tracking-wide">
                    {playlist.tracks}
                  </span>
                </div>
                <p className="text-[var(--color-white)] text-sm tracking-[0.2em] uppercase">
                  LISTEN
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Keyframe animation for staggered fade-in */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default PlaylistSection;
