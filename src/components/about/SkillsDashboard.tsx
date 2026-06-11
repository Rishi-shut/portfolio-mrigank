'use client';

import { X } from 'lucide-react';
import { skillGroups } from '@/data/skills';
import { motion } from 'framer-motion';

interface SkillsDashboardProps {
  onClose: () => void;
}

export function SkillsDashboard({ onClose }: SkillsDashboardProps) {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <motion.div 
      className="skills-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Modal Header */}
      <div className="skills-header">
        <h2>Mrigank&apos;s <em>Skills</em></h2>
        <button 
          className="skills-close-btn" 
          onClick={onClose}
          aria-label="Close skills dashboard"
        >
          <X size={20} color="rgba(255,255,255,0.6)" />
        </button>
      </div>

      {/* Grid of Skill Cards */}
      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {skillGroups.map((group, index) => (
          <motion.div 
            key={group.index} 
            className="skill-card"
            variants={cardVariants}
            whileHover={{ 
              borderColor: 'rgba(255, 255, 255, 0.22)',
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="skill-index">{group.index}</div>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.tags.map((tag) => (
                <span key={tag} className="skill-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer inside modal */}
      <div className="skills-footer flex justify-between items-center mt-20 text-xs tracking-widest text-[rgba(255,255,255,0.24)] uppercase font-mono border-t border-[rgba(255,255,255,0.06)] pt-6">
        <span>hello@mrigank.dev</span>
        <div className="flex gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">github</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">linkedin</a>
        </div>
      </div>
    </motion.div>
  );
}
