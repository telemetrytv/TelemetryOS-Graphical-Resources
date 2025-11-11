import React from 'react';

/**
 * TelemetryOS animated logo loader component
 *
 * @param {Object} props
 * @param {number} [props.size=200] - Size of the logo in pixels (width/height)
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.color='#f7b434'] - Logo color (hex or CSS color)
 * @param {number} [props.animationDuration=2] - Animation duration in seconds
 */
const TelemetryOSLoader = ({
  size = 200,
  className = '',
  color = '#f7b434',
  animationDuration = 2
}) => {
  const containerId = React.useId();
  const scopeClass = `telemetry-loader-${containerId.replace(/:/g, '')}`;

  const containerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    '--logo-color': color,
    '--animation-duration': `${animationDuration}s`,
  };

  return (
    <>
      <style>{`
        .${scopeClass} {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--logo-color, #f7b434);
        }

        .${scopeClass} .telemetry-logo-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .${scopeClass} .telemetry-logo-svg {
          width: 100%;
          height: 100%;
        }

        .${scopeClass} .telemetry-logo-part {
          transform-origin: center;
        }

        .${scopeClass} .telemetry-main-t {
          animation: telemetryMainTPulse var(--animation-duration, 2s) ease-in-out infinite;
          animation-delay: 0s;
        }

        .${scopeClass} .telemetry-dot-top {
          animation: telemetryDotBounce var(--animation-duration, 2s) ease-in-out infinite;
          animation-delay: calc(var(--animation-duration, 2s) * 0.125);
        }

        .${scopeClass} .telemetry-dot-bottom {
          animation: telemetryDotBounce var(--animation-duration, 2s) ease-in-out infinite;
          animation-delay: calc(var(--animation-duration, 2s) * 0.25);
        }

        @keyframes telemetryMainTPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.75;
          }
          15% {
            transform: scale(1.15);
            opacity: 1;
          }
          30% {
            transform: scale(0.95);
            opacity: 0.85;
          }
          45% {
            transform: scale(1);
            opacity: 0.75;
          }
        }

        @keyframes telemetryDotBounce {
          0%, 100% {
            transform: scale(1) translateY(0);
            opacity: 0.7;
          }
          15% {
            transform: scale(1.25) translateY(-8px);
            opacity: 1;
          }
          30% {
            transform: scale(0.9) translateY(3px);
            opacity: 0.8;
          }
          45% {
            transform: scale(1) translateY(0);
            opacity: 0.7;
          }
        }

        .${scopeClass} .telemetry-logo-wrapper::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 140%;
          background: radial-gradient(
            circle,
            color-mix(in srgb, var(--logo-color, #f7b434) 20%, transparent) 0%,
            transparent 70%
          );
          animation: telemetryGlow var(--animation-duration, 2s) ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes telemetryGlow {
          0%, 100% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1);
          }
          30% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.12);
          }
          60% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
      <div
        className={`${scopeClass} ${className}`}
        style={containerStyle}
      >
        <div className="telemetry-logo-wrapper">
          <svg
            viewBox="0 0 295 291.62"
            xmlns="http://www.w3.org/2000/svg"
            className="telemetry-logo-svg"
          >
            {/* Main T vertical stroke with top bar */}
            <path
              className="telemetry-logo-part telemetry-main-t"
              d="M245.1,107.09l6.77-25.27c1.05-3.92-1.9-7.77-5.96-7.77H112.48c-4.19,0-7.86,2.82-8.95,6.86l-6.77,25.27c-1.05,3.92,1.9,7.77,5.96,7.77h37.54c4.06,0,7.01,3.85,5.96,7.77l-23.6,88.07c-1.05,3.92,1.9,7.77,5.96,7.77h26.16c4.19,0,7.86-2.82,8.95-6.86l24.09-89.89c1.08-4.05,4.75-6.86,8.95-6.86h39.42c4.19,0,7.86-2.82,8.95-6.86Z"
              fill="currentColor"
            />

            {/* Top left dot */}
            <path
              className="telemetry-logo-part telemetry-dot-top"
              d="M84.19,107.09l6.77-25.27c1.05-3.92-1.9-7.77-5.96-7.77h-26.16c-4.19,0-7.86,2.82-8.95,6.86l-6.77,25.27c-1.05,3.92,1.9,7.77,5.96,7.77h26.16c4.19,0,7.86-2.82,8.95-6.86Z"
              fill="currentColor"
            />

            {/* Bottom left dot */}
            <path
              className="telemetry-logo-part telemetry-dot-bottom"
              d="M124.75,125.86h-26.16c-4.19,0-7.86,2.82-8.95,6.86l-6.77,25.27c-1.05,3.92,1.9,7.77,5.96,7.77h26.16c4.19,0,7.86-2.82,8.95-6.86l6.77-25.27c1.05-3.92-1.9-7.77-5.96-7.77Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      </>

  );
};

export default TelemetryOSLoader;
