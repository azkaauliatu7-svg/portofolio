import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import cert1 from '../assets/cert_1.png';

const Certificates: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const certs = [
    { title: 'Frontend Developer React', issuer: 'Dicoding', image: cert1 },
    { title: 'Responsive Web Design', issuer: 'FreeCodeCamp', image: cert1 },
    { title: 'JavaScript Algorithms', issuer: 'HackerRank', image: cert1 }
  ];

  return (
    <section id="certificates" className="section" ref={ref}>
      <div className="container">
        <h2 className={`section-title animate-fade-in ${isVisible ? 'is-visible' : ''}`}>
          {t('certificates', 'title')}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {certs.map((c, idx) => (
            <div
              key={idx}
              className={`glass hover-card animate-fade-in ${isVisible ? 'is-visible' : ''}`}
              style={{
                transitionDelay: `${idx * 0.2}s`,
                padding: '1.5rem',
                textAlign: 'center'
              }}
            >
              <div style={{
                overflow: 'hidden',
                borderRadius: '0.5rem',
                marginBottom: '1rem'
              }}>
                <img
                  src={c.image}
                  alt={c.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{c.title}</h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>{c.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
