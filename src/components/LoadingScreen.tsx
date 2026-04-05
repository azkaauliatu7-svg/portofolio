import React, { useEffect, useState } from 'react';
import '../index.css';

const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'var(--color-bg-start)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      transition: 'opacity 0.5s ease-out',
      opacity: loading ? 1 : 0
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '5px solid var(--color-surface)',
        borderTop: '5px solid var(--color-primary)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <h2 style={{ marginTop: '1rem', color: 'var(--color-primary)', fontFamily: 'var(--font-sans)', letterSpacing: '2px' }}>
        AZKA PROFILE
      </h2>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;
