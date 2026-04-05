import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import heroImg from '../assets/profil.jpeg';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="home" className="section" ref={ref} style={{ paddingTop: '8rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '3rem'
      }}>
        {/* Text Section (Left on desktop, Bottom on mobile) */}
        <div className={`animate-slide-left ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.4s', flex: '0 1 500px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>
            {t('hero', 'greeting')}
          </h2>
          <h1 style={{
            fontSize: '4rem',
            color: 'var(--color-primary)',
            marginBottom: '1rem',
            lineHeight: 1.2
          }}>
            Azka Aulia
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--color-text)' }}>
            {t('hero', 'role')}
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start' }}>
            <a href="#contact" className="btn btn-primary">{t('hero', 'cta')}</a>
            <a href="#projects" className="btn glass hover-card">{t('hero', 'viewWork')}</a>
          </div>
        </div>

        {/* Image Section (Right on desktop, Top on mobile) */}
        <div
          className={`animate-slide-right ${isVisible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '0.2s', flex: '0 1 350px', display: 'flex', justifyContent: 'center' }}
        >
          <img
            src={heroImg}
            alt="Azka"
            style={{
              width: '100%',
              maxWidth: '350px',
              aspectRatio: '1/1',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '6px solid var(--color-surface)',
              boxShadow: 'var(--shadow-md)'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
