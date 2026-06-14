'use client';

interface WordmarkProps {
  className?: string;
  dotColor?: string;
}

export function Wordmark({ className = '', dotColor = 'currentColor' }: WordmarkProps) {
  // A clean inverted triangular grid of circles representing the Montfort emblem tree.
  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-[88px] h-[88px] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Row 1 (Top) - 5 dots */}
      <circle cx="20" cy="20" r="4.5" fill={dotColor} />
      <circle cx="35" cy="20" r="4.5" fill={dotColor} />
      <circle cx="50" cy="20" r="4.5" fill={dotColor} />
      <circle cx="65" cy="20" r="4.5" fill={dotColor} />
      <circle cx="80" cy="20" r="4.5" fill={dotColor} />

      {/* Row 2 - 4 dots */}
      <circle cx="27.5" cy="35" r="4.5" fill={dotColor} />
      <circle cx="42.5" cy="35" r="4.5" fill={dotColor} />
      <circle cx="57.5" cy="35" r="4.5" fill={dotColor} />
      <circle cx="72.5" cy="35" r="4.5" fill={dotColor} />

      {/* Row 3 - 3 dots */}
      <circle cx="35" cy="50" r="4.5" fill={dotColor} />
      <circle cx="50" cy="50" r="4.5" fill={dotColor} />
      <circle cx="65" cy="50" r="4.5" fill={dotColor} />

      {/* Row 4 - 2 dots */}
      <circle cx="42.5" cy="65" r="4.5" fill={dotColor} />
      <circle cx="57.5" cy="65" r="4.5" fill={dotColor} />

      {/* Row 5 (Bottom) - 1 dot */}
      <circle cx="50" cy="80" r="4.5" fill={dotColor} />
    </svg>
  );
}
