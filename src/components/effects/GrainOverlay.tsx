'use client';

export function GrainOverlay() {
  return (
    <>
      <svg className="sr-only" aria-hidden="true" style={{ display: 'none' }}>
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.65" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
      </svg>
      <div 
        className="grain" 
        aria-hidden="true" 
        style={{
          filter: "url(#noiseFilter)",
        }}
      />
    </>
  );
}
