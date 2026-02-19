// import React from "react";
// import { FaInstagram, FaVimeoV } from "react-icons/fa";


// const Menu = ({ isOpen, onSectionSelect }) => {
//   const menuItems = [
//     { id: 'projects', label: 'Projects' },
//     { id: 'awards', label: 'Awards' },
//     { id: 'gallery', label: 'Gallery' },
//     { id: 'playlist', label: 'Playlist' },
//     { id: 'about', label: 'About' },
//   ];

//   return (
//     <div className={`menu ${isOpen ? 'active' : ''}`}>
//       {isOpen && (
//         <>
//           <nav className="menu-nav">
//             {menuItems.map((item, index) => (
//               <button
//                 key={item.id}
//                 className="menu-button"
//                 onClick={() => onSectionSelect(item.id)}
//                 style={{ transitionDelay: `${index * 0.1}s` }}
//               >
//                 <span>{item.label}</span>
//               </button>
//             ))}
//           </nav>

//           <div className="menu-socials">
//           <a
//             href="https://instagram.com/rodeo_film"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-icon"
//             aria-label="Instagram"
//           >
//             <FaInstagram />
//           </a>
//           <a
//             href="https://vimeo.com/rodeofilm"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-icon"
//             aria-label="Vimeo"
//              >
//              <FaVimeoV />
//   </a>
// </div>

//         </>
//       )}
//     </div>
//   );
// };

// export default Menu;



import React from "react";
import { FaInstagram, FaVimeoV } from "react-icons/fa";

const Menu = ({ isOpen, onSectionSelect }) => {
  const menuItems = [
    { id: "projects", label: "Projects" },
    { id: "awards", label: "Awards" },
    { id: "gallery", label: "Gallery" },
    { id: "playlist", label: "Playlist" },
    { id: "about", label: "About" },
  ];

  return (
    <div
      className={`
        fixed inset-0 z-[var(--z-index-menu)]
        w-full h-[100vh] min-h-[100vh]
        bg-[rgba(1,1,1,0.95)]
        text-[var(--color-white)]
        overflow-hidden
        transition-all duration-[var(--transition-fast)]
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        flex flex-col items-center justify-center
      `}
    >
      {isOpen && (
        <>
          {/* MENU NAV */}
          <nav className="relative z-[6] flex flex-col items-center justify-center h-full gap-[var(--spacing-md)]">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => onSectionSelect(item.id)}
                style={{ transitionDelay: `${index * 0.1}s` }}
                className="
                  relative overflow-hidden
                  bg-transparent border-none cursor-pointer
                  text-[var(--font-size-h1)] uppercase
                  text-[var(--color-white)]
                  transition-colors duration-[var(--transition-fast)]
                  hover:text-[var(--color-primary)]
                "
              >
                <span
                  className={`
                    inline-block translate-y-full
                    transition-transform duration-[var(--transition-slow)]
                    ${isOpen ? 'translate-y-0' : ''}
                  `}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* SOCIAL ICONS */}
          <div
            className="
              absolute bottom-12 left-12
              z-[6] flex gap-6
              md:bottom-24 md:left-24
            "
          >
            <a
              href='https://instagram.com/rodeo_film'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
              className='
                text-[var(--color-white)]
                text-[var(--font-size-body)]
                uppercase no-underline
                transition-colors duration-[var(--transition-fast)]
                hover:text-[var(--color-primary)]
              '
            >
              <FaInstagram className='text-2xl transition-transform duration-300 hover:scale-110' />
            </a>

            <a
              href='https://vimeo.com/rodeofilm'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Vimeo'
              className='
                text-[var(--color-white)]
                text-[var(--font-size-body)]
                uppercase no-underline
                transition-colors duration-[var(--transition-fast)]
                hover:text-[var(--color-primary)]
              '
            >
              <FaVimeoV className='text-2xl transition-transform duration-300 hover:scale-110' />
            </a>
          </div>

          {/* Custom Keyframes for entry animation */}
          <style>
            {`
              @keyframes slideUp {
                from {
                  transform: translateY(100%);
                  opacity: 0;
                }
                to {
                  transform: translateY(0);
                  opacity: 1;
                }
              }
            `}
          </style>
        </>
      )}
    </div>
  );
};

export default Menu;
