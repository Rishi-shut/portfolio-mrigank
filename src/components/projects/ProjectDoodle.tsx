'use client';

interface ProjectDoodleProps {
  type: string;
}

export function ProjectDoodle({ type }: ProjectDoodleProps) {
  return (
    <svg
      className="project-doodle"
      viewBox="0 0 420 280"
      aria-hidden="true"
    >
      {type === 'heart' && (
        <path 
          d="M210 230 C90 145 78 50 150 42 C188 38 205 70 210 88 C215 70 236 38 275 42 C348 50 330 150 210 230Z M210 88 L205 126 L225 116 L216 152 L235 143"
          fill="none" 
          stroke="rgba(255,255,255,.28)" 
          strokeWidth="1.5" 
        />
      )}
      {type === 'star' && (
        <path 
          d="M210 18 L238 112 L336 112 L256 168 L286 260 L210 204 L134 260 L164 168 L84 112 L182 112Z"
          fill="none" 
          stroke="rgba(255,255,255,.22)" 
          strokeWidth="1.5" 
        />
      )}
      {type === 'flower' && (
        <path 
          d="M210 135 C210 80 260 80 260 125 C300 105 330 150 290 175 C305 220 250 230 230 190 C210 235 160 220 175 175 C130 150 160 105 200 125 C200 125 210 135 210 135Z"
          fill="none" 
          stroke="rgba(255,255,255,.24)" 
          strokeWidth="1.5" 
        />
      )}
      {type === 'bow' && (
        <path 
          d="M210 120 C180 80 140 80 155 120 C170 160 210 140 210 120 C210 140 250 160 265 120 C280 80 240 80 210 120 M210 120 L180 200 M210 120 L240 200"
          fill="none" 
          stroke="rgba(255,255,255,.24)" 
          strokeWidth="1.5" 
        />
      )}
      {type === 'spark' && (
        <path 
          d="M210 60 Q210 120 150 120 Q210 120 210 180 Q210 120 270 120 Q210 120 210 60 Z"
          fill="none" 
          stroke="rgba(255,255,255,.24)" 
          strokeWidth="1.5" 
        />
      )}
      {type === 'orbit' && (
        <g fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="1.2">
          <ellipse cx="210" cy="120" rx="130" ry="50" transform="rotate(-15 210 120)" />
          <ellipse cx="210" cy="120" rx="90" ry="30" transform="rotate(25 210 120)" />
          <circle cx="110" cy="94" r="3" fill="rgba(255,255,255,.4)" />
          <circle cx="280" cy="160" r="4" fill="rgba(255,255,255,.4)" />
        </g>
      )}
    </svg>
  );
}
