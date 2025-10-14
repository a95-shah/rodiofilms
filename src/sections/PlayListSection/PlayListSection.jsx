const PlaylistSection = ({ isActive }) => {
  const playlists = [
    { id: 1, name: 'RODEO RAP', tracks: '58 TRACKS', url: 'https://open.spotify.com/playlist/5TziFPuKVssPCxmqWH6Kcd' },
    { id: 2, name: 'RODEO SWEET', tracks: '65 TRACKS', url: 'https://open.spotify.com/playlist/7s3lpPFm1yoOdGK4k1n9A9' },
    { id: 3, name: 'RODEO CHILL', tracks: '160 TRACKS', url: 'https://open.spotify.com/playlist/6JMxSqIjFuDQseX2IwGEAj' }
  ];

  return (
    <div className={`section ${isActive ? 'active' : ''}`}>
      {/* <p className="section-title"><span>Playlist</span></p> */}
      <div className="section-scroll">
        <div className="section-content">
          {playlists.map((playlist, index) => (
            <a
              key={playlist.id}
              className={`item visible`}
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="item-content">
                <div className="item-left">
                  <strong className="item-title">{playlist.name}</strong>
                  <span className="item-category">{playlist.tracks}</span>
                </div>
                <p className="item-right">LISTEN</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PlaylistSection;