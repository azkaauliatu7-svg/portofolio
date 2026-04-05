import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully!');
    }, 1500);
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <h2 className={`section-title animate-fade-in ${isVisible ? 'is-visible' : ''}`}>
          {t('contact', 'title')}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Contact Details */}
          <div className={`animate-slide-left ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
              {t('contact', 'manualText')}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="mailto:azka@example.com" target="_blank" rel="noreferrer" className="glass hover-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>📧</span>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Email</div>
                  <div style={{ color: 'var(--color-text-light)' }}>azkaaulia7@gmail.com</div>
                </div>
              </a>

              <a href="https://wa.me/628123456789" target="_blank" rel="noreferrer" className="glass hover-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>📱</span>
                <div>
                  <div style={{ fontWeight: 'bold' }}>WhatsApp</div>
                  <div style={{ color: 'var(--color-text-light)' }}>+62 8228 530 7930</div>
                </div>
              </a>

              <a href="https://github.com/azka" target="_blank" rel="noreferrer" className="glass hover-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>💻</span>
                <div>
                  <div style={{ fontWeight: 'bold' }}>GitHub</div>
                  <div style={{ color: 'var(--color-text-light)' }}>github.com/azkaauliatu7-svg</div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`glass animate-slide-right ${isVisible ? 'is-visible' : ''}`}
            style={{ padding: '2rem', transitionDelay: '0.4s' }}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{t('contact', 'formName')}</label>
              <input
                type="text"
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--color-text)',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{t('contact', 'formEmail')}</label>
              <input
                type="email"
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--color-text)',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{t('contact', 'formMessage')}</label>
              <textarea
                required
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--color-text)',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              {t('contact', 'send')}
            </button>
            {status && (
              <div style={{ marginTop: '1rem', textAlign: 'center', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
