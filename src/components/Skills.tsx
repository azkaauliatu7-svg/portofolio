import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML & CSS (Vanilla, Modules)', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'React (Vite, Context, Hooks)', level: 85 },
        { name: 'Responsive Design', level: 95 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'PHP', level: 80 },
        { name: 'Node.js / Express', level: 75 },
        { name: 'MySQL / PostgreSQL', level: 80 }
      ]
    },
    {
      title: 'Language',
      skills: [
        { name: 'English', level: 85 },
        { name: 'Indonesia', level: 100 },
        { name: 'Arabic', level: 70 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Figma (UI/UX)', level: 70 },
        { name: 'Vite', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <h2 className={`section-title animate-fade-in ${isVisible ? 'is-visible' : ''}`}>
          {t('skills', 'title')}
        </h2>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass hover-card animate-fade-in ${isVisible ? 'is-visible' : ''}`}
              style={{
                marginBottom: '1rem',
                overflow: 'hidden',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <button
                onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem',
                  background: activeAccordion === index ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                  color: 'var(--color-primary)',
                  fontSize: '1.25rem',
                  fontWeight: '600'
                }}
              >
                {category.title}
                <span style={{
                  transform: activeAccordion === index ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.3s'
                }}>
                  ▼
                </span>
              </button>

              <div style={{
                maxHeight: activeAccordion === index ? '500px' : '0',
                opacity: activeAccordion === index ? 1 : 0,
                transition: 'all 0.4s ease-in-out',
                padding: activeAccordion === index ? '0 1.5rem 1.5rem' : '0 1.5rem'
              }}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.9rem' }}>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '8px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: isVisible && activeAccordion === index ? `${skill.level}%` : '0%',
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-dark))',
                        borderRadius: '4px',
                        transition: 'width 1s ease-out 0.3s'
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
