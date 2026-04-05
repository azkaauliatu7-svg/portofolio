import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

const About: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'center'
      }}>
        <div className={`animate-slide-left ${isVisible ? 'is-visible' : ''} glass hover-card`} style={{ padding: '3rem' }}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
            {t('about', 'title')}
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-primary)', marginBottom: '2rem', borderRadius: '2px' }}></div>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            {t('about', 'description1')}
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            {t('about', 'description2')}
          </p>
        </div>

        <div className={`animate-slide-right ${isVisible ? 'is-visible' : ''}`} style={{
          position: 'relative'
        }}>
          <div className="hover-card" style={{
            background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))',
            borderRadius: '1rem',
            padding: '2rem',
            color: 'white',
            boxShadow: 'var(--shadow-md)'
          }}>
            <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>Visi Saya</h3>
            <p style={{ fontStyle: 'italic', fontSize: '1.1rem', opacity: 0.9 }}>
              "Menciptakan pengalaman digital yang tidak hanya terlihat indah, tetapi juga memecahkan masalah nyata dengan cara yang elegan."
            </p>
          </div>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            background: 'var(--color-primary)',
            borderRadius: '50%',
            filter: 'blur(30px)',
            opacity: 0.6,
            bottom: '-20px',
            right: '-20px',
            zIndex: -1
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default About;
