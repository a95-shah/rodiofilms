import { useState, useEffect } from 'react';

export const useMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (activeSection) {
      setActiveSection(null);
    }
  };

  const selectSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setActiveSection(null);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (activeSection) {
          setActiveSection(null);
        } else if (menuOpen) {
          setMenuOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [activeSection, menuOpen]);

  return {
    menuOpen,
    activeSection,
    toggleMenu,
    selectSection,
    closeAll
  };
};