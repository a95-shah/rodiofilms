import React from "react";
import { FaInstagram, FaVimeoV } from "react-icons/fa";


const Menu = ({ isOpen, onSectionSelect }) => {
  const menuItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'awards', label: 'Awards' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'playlist', label: 'Playlist' },
    { id: 'about', label: 'About' },
  ];

  return (
    <div className={`menu ${isOpen ? 'active' : ''}`}>
      {isOpen && (
        <>
          <nav className="menu-nav">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                className="menu-button"
                onClick={() => onSectionSelect(item.id)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="menu-socials">
          <a
            href="https://instagram.com/rodeo_film"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://vimeo.com/rodeofilm"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Vimeo"
             >
             <FaVimeoV />
  </a>
</div>

        </>
      )}
    </div>
  );
};

export default Menu;
