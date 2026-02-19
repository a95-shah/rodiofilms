// import './Footer.css';

// const Footer = ({ isVisible }) => (
//   <footer className={`footer ${isVisible ? 'visible' : ''}`}>
//     <div className="footer-copy">© 2024 Rodeo, all rights reserved.</div>
//     <div className="footer-links">
//       <a href="#">Legals</a> — <a href="https://troa.fr" target="_blank" rel="noopener noreferrer">Website by TROA</a>
//     </div>
//   </footer>
// );
// export default Footer;


const Footer = ({ isVisible }) => (
  <footer
    className={`
      fixed right-12 bottom-12 z-[var(--z-index-footer)]
      flex flex-col items-start text-white uppercase
      text-[var(--font-size-small)] leading-none
      opacity-0 transition-opacity duration-1000 ease-in
      ${isVisible ? 'opacity-100' : ''}
      md:right-32 md:bottom-24 md:[transform:rotate(-90deg)_translate(100%)] md:[transform-origin:bottom_right]
    `}
  >
    {/* Copy (visible only on md and above) */}
    <div className="hidden md:block">© 2024 Rodeo, all rights reserved.</div>

    {/* Links */}
    <div className="flex flex-wrap mt-0.5 space-x-1">
      <a
        href="#"
        className="text-white no-underline transition-colors duration-[var(--transition-fast)] hover:text-[var(--color-primary)]"
      >
        Legals
      </a>
      <span>—</span>
      <a
        href="https://troa.fr"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white no-underline transition-colors duration-[var(--transition-fast)] hover:text-[var(--color-primary)]"
      >
        Website by TROA
      </a>
    </div>
  </footer>
);

export default Footer;
