import React from 'react';
import TelemetryOSLoader from './TelemetryOSLoader';

/**
 * Example usage of the TelemetryOSLoader component
 */
const LoaderExamples = () => {
  return (
    <div style={{ background: '#0a0a0a', padding: '40px', minHeight: '100vh' }}>
      <h1 style={{ color: '#fff', marginBottom: '40px' }}>TelemetryOS Loader Examples</h1>

      {/* Default size (200px) */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#fff', marginBottom: '20px' }}>Default Size (200px)</h2>
        <TelemetryOSLoader />
      </div>

      {/* Small size */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#fff', marginBottom: '20px' }}>Small (64px)</h2>
        <TelemetryOSLoader size={64} />
      </div>

      {/* Large size */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#fff', marginBottom: '20px' }}>Large (300px)</h2>
        <TelemetryOSLoader size={300} />
      </div>

      {/* Custom color */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#fff', marginBottom: '20px' }}>Custom Color</h2>
        <TelemetryOSLoader size={150} color="#00ffff" />
      </div>

      {/* Faster animation */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#fff', marginBottom: '20px' }}>Faster Animation (1s)</h2>
        <TelemetryOSLoader size={150} animationDuration={1} />
      </div>

      {/* Centered full-page loader */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#fff', marginBottom: '20px' }}>Centered Full-Page Loader</h2>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '400px',
          background: '#1a1a1a',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TelemetryOSLoader size={120} />
        </div>
      </div>

      {/* Inline loader */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#fff', marginBottom: '20px' }}>Inline Loader</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ color: '#fff', fontSize: '18px' }}>Loading data</span>
          <TelemetryOSLoader size={40} />
        </div>
      </div>
    </div>
  );
};

// Example: Full-page loading overlay component
export const FullPageLoader = ({ message = 'Loading...' }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(10, 10, 10, 0.95)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}>
      <TelemetryOSLoader size={150} />
      {message && (
        <p style={{
          color: '#f7b434',
          fontSize: '18px',
          marginTop: '30px',
          fontWeight: 500,
        }}>
          {message}
        </p>
      )}
    </div>
  );
};

// Example: Button with loading state
export const LoadingButton = ({ loading, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      style={{
        padding: '12px 24px',
        background: loading ? '#555' : '#f7b434',
        color: '#0a0a0a',
        border: 'none',
        borderRadius: '6px',
        fontSize: '16px',
        fontWeight: 600,
        cursor: loading ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        transition: 'all 0.2s',
      }}
    >
      {loading && <TelemetryOSLoader size={24} color="#0a0a0a" />}
      {children}
    </button>
  );
};

export default LoaderExamples;
