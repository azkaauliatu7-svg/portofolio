import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import p1 from '../assets/project_1.png';
import p2 from '../assets/project_2.png';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Dashboard E-Commerce',
      desc: 'Sebuah dashboard modern dengan React dan antarmuka analitik.',
      image: p1,
      link: '#'
    },
    {
      id: 2,
      title: 'Aplikasi Portofolio',
      desc: 'Desain minimalis dan clean menggunakan pendekatan glassmorphism.',
      image: p2,
      link: '#'
    },
    {
      id: 3,
      title: 'Company Profile',
      desc: 'Situs web responsif cepat dengan soft color palette.',
      image: p1,
      link: '#'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <h2 className={`section-title animate-fade-in ${isVisible ? 'is-visible' : ''}`}>
          {t('projects', 'title')}
        </h2>

        {/* Carousel Container */}
        <div className={`animate-fade-in ${isVisible ? 'is-visible' : ''}`} style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          transitionDelay: '0.2s'
        }}>

          <div className="glass hover-card" style={{ overflow: 'hidden', position: 'relative', borderRadius: '1rem' }}>
            <div style={{
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${currentIndex * 100}%)`
            }}>
              {projects.map((p) => (
                <div key={p.id} style={{ minWidth: '100%', padding: '2rem', boxSizing: 'border-box' }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '0.5rem',
                      marginBottom: '1.5rem',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  />
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)' }}>{p.title}</h3>
                  <p style={{ marginBottom: '1.5rem' }}>{p.desc}</p>
                  <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'inline-block' }}>
                    {t('projects', 'viewLink')}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              top: '50%',
              left: '-20px',
              transform: 'translateY(-50%)',
              background: 'white',
              border: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              boxShadow: 'var(--shadow-md)',
              fontSize: '1.2rem',
              color: 'var(--color-primary)',
              zIndex: 10
            }}
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              top: '50%',
              right: '-20px',
              transform: 'translateY(-50%)',
              background: 'white',
              border: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              boxShadow: 'var(--shadow-md)',
              fontSize: '1.2rem',
              color: 'var(--color-primary)',
              zIndex: 10
            }}
          >
            →
          </button>

          {/* Indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: currentIndex === idx ? '20px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: currentIndex === idx ? 'var(--color-primary)' : 'var(--color-accent)',
                  transition: 'all 0.3s'
                }}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
