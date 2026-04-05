import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Sosial',
      icon: '🌐',
      skills: [
        { name: 'Emotion', level: 75 },
        { name: 'Friendly', level: 99 },
        { name: 'Impact', level: 90 }
      ]
    },
    {
      title: 'Personality',
      icon: '👤',
      skills: [
        { name: 'Wise', level: 90 },
        { name: 'Manage money', level: 85 },
        { name: 'Kindness', level: 50 }
      ]
    }
  ];

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <h2 className={`section-title animate-fade-in ${isVisible ? 'is-visible' : ''}`}>
          {t('skills', 'title')}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass hover-card animate-fade-in ${isVisible ? 'is-visible' : ''}`}
              style={{
                padding: '2.5rem 2rem',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              {/* Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(10, 132, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: 'var(--color-primary)'
                }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', margin: 0 }}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '500' }}>
                      <span>{skill.name}</span>
                      <span style={{ color: 'var(--color-text-light)' }}>{skill.level}%</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '8px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--color-primary-dark), var(--color-primary))',
                        borderRadius: '4px',
                        transition: 'width 1.5s ease-out 0.3s'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
