import './Footer.css';

const Footer = ({ isVisible }) => (
  <footer className={`footer ${isVisible ? 'visible' : ''}`}>
    <div className="footer-copy">© 2024 Rodeo, all rights reserved.</div>
    <div className="footer-links">
      <a href="#">Legals</a> — <a href="https://troa.fr" target="_blank" rel="noopener noreferrer">Website by TROA</a>
    </div>
  </footer>
);
export default Footer;