import React, { useEffect, useState } from 'react';
import '../index.css';

const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Increased slightly for user to read the quote
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
      transition: 'opacity 0.8s ease-out',
      opacity: loading ? 1 : 0
    }}>
      {/* Modern Loader Container */}
      <div style={{ position: 'relative', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Outer Ring */}
        <div style={{
          position: 'absolute',
          inset: 0,
          border: '3px solid rgba(10, 132, 255, 0.1)',
          borderTopColor: 'var(--color-primary)',
          borderRadius: '50%',
          animation: 'spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite'
        }} />
        {/* Inner Ring */}
        <div style={{
          position: 'absolute',
          inset: '16px',
          border: '3px solid rgba(56, 189, 248, 0.1)',
          borderRightColor: 'var(--color-accent)',
          borderBottomColor: 'var(--color-accent)',
          borderRadius: '50%',
          animation: 'spin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite reverse'
        }} />
        {/* Center glowing dot */}
        <div style={{
          width: '12px',
          height: '12px',
          backgroundColor: 'var(--color-primary)',
          borderRadius: '50%',
          boxShadow: '0 0 15px var(--color-primary)',
          animation: 'pulse 2s ease-in-out infinite'
        }} />
      </div>

      <div style={{ 
        marginTop: '3rem', 
        maxWidth: '80%', 
        textAlign: 'center',
        animation: 'fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }}>
        <h2 style={{ 
          color: 'var(--color-text)', 
          fontFamily: 'var(--font-serif)', 
          fontWeight: 400,
          fontSize: '1.25rem',
          lineHeight: 1.6,
          fontStyle: 'italic',
          letterSpacing: '0.5px'
        }}>
          "Consistent effort today is the future you’re building."
        </h2>
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.5); opacity: 1; box-shadow: 0 0 25px var(--color-accent); }
          }
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); filter: blur(8px); }
            100% { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;
