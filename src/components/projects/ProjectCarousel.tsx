'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectDoodle } from './ProjectDoodle';
import { motion, AnimatePresence } from 'framer-motion';

export function ProjectCarousel() {
  const [active, setActive] = useState(1);

  return (
    <div className="projects-stage">
      {/* Background doodle that shifts and animates when active card changes */}
      <div className="project-doodle-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={projects[active].id}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 0.75, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotate: 10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectDoodle type={projects[active].doodle} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="card-fan">
        {projects.map((p, i) => {
          const offset = i - active;
          const isActive = i === active;
          
          // Calculate transforms programmatically
          const rotate = offset * 9;
          const transX = offset * 160;
          const transY = Math.abs(offset) * 22 + (isActive ? -20 : 0);
          
          // Hide cards that are too far out
          const opacity = Math.abs(offset) > 3 ? 0 : 1;
          const pointerEvents = Math.abs(offset) > 3 ? 'none' : 'auto';

          return (
            <button
              key={p.id}
              className={`project-card ${isActive ? 'active' : ''}`}
              style={{
                transform: `translateX(-50%) translateX(${transX}px) rotate(${rotate}deg) translateY(${transY}px)`,
                zIndex: isActive ? 20 : 10 - Math.abs(offset),
                opacity,
                pointerEvents,
              }}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              {isActive ? (
                <div className="project-card-inner">
                  <div className="project-card-copy">
                    <div className="project-card-number">PROJECT {p.id}</div>
                    <div className="project-card-title">{p.title}</div>
                    <div className="project-card-desc">{p.short}</div>
                    <div className="project-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div 
                    className="project-card-image" 
                    style={{ backgroundImage: `url(${p.image})` }} 
                  />
                </div>
              ) : (
                <div 
                  className="project-card-image w-full h-full" 
                  style={{ backgroundImage: `url(${p.image})` }} 
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
