import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer style={{
      background: 'var(--color-bg-end)',
      padding: '2rem 1rem',
      textAlign: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{ marginBottom: '1rem' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)' }}>Azka Aulia</h3>
      </div>
      <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Azka Aulia. {t('footer', 'copyright')}.
      </p>
    </footer>
  );
};

export default Footer;
