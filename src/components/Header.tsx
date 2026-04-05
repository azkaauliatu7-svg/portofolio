import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.js';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleLanguage, language, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`glass ${isScrolled ? 'scrolled' : ''}`} style={{
      position: 'fixed',
      top: '1rem',
      left: '1rem',
      right: '1rem',
      zIndex: 1000,
      transition: 'var(--transition)',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      width: 'calc(100% - 2rem)',
      border: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
      boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none'
    }}>
      <div style={{ fontWeight: '700', fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text)' }}>
        Azka.
      </div>

      {/* Desktop Menu */}
      <nav className="desktop-nav" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
        <a href="#home">{t('nav', 'home')}</a>
        <a href="#about">{t('nav', 'about')}</a>
        <a href="#skills">{t('nav', 'skills')}</a>
        <a href="#projects">{t('nav', 'projects')}</a>
        <a href="#certificates">{t('nav', 'certificates')}</a>
        <a href="#contact">{t('nav', 'contact')}</a>

        <button
          onClick={toggleLanguage}
          style={{
            background: 'var(--color-accent)',
            padding: '0.4rem 0.8rem',
            borderRadius: '20px',
            fontWeight: 'bold',
            color: 'var(--color-text)'
          }}
        >
          {language === 'id' ? 'ID ⇄ EN' : 'EN ⇄ ID'}
        </button>
      </nav>

      {/* Mobile Hamburger Icon */}
      <div className="mobile-toggle" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button className="mobile-only" onClick={toggleLanguage} style={{ background: 'var(--color-accent)', padding: '0.4rem 0.8rem', borderRadius: '20px', fontWeight: 'bold' }}>
          {language.toUpperCase()}
        </button>
        <button className="mobile-only" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', fontSize: '1.5rem', color: 'var(--color-text)' }}>
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mobile-menu glass" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '1rem',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          textAlign: 'center'
        }}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>{t('nav', 'home')}</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>{t('nav', 'about')}</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>{t('nav', 'skills')}</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>{t('nav', 'projects')}</a>
          <a href="#certificates" onClick={() => setIsMenuOpen(false)}>{t('nav', 'certificates')}</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('nav', 'contact')}</a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        .desktop-nav a:hover, .mobile-menu a:hover {
          color: var(--color-primary);
        }
      `}</style>
    </header>
  );
};

export default Header;
