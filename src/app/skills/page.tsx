'use client';

import { motion } from 'motion/react';
import { skillCategories } from '@/data/skills';

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Command header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <span className="text-matrix-amber">$</span>
        <span className="text-matrix-green ml-2">./visualize-skills.sh</span>
      </motion.div>

      {/* Full-row category sections */}
      <div className="space-y-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + categoryIndex * 0.1 }}
            className="border border-matrix-green-dim hover:border-matrix-green
                     transition-all duration-200"
          >
            {/* Category header */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-matrix-green-dim
                          bg-matrix-green/5">
              <span className="text-matrix-cyan font-mono">{category.icon}</span>
              <span className="text-matrix-green font-bold uppercase text-sm tracking-wider">
                {category.name.replace('_', '/')}
              </span>
              <span className="text-text-muted text-xs ml-auto">
                [{category.skills.length} loaded]
              </span>
            </div>

            {/* Skills grid - responsive columns */}
            <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + categoryIndex * 0.1 + skillIndex * 0.02 }}
                  className="flex flex-col gap-1"
                >
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-text-secondary truncate pr-2">{skill.name}</span>
                    <span className="text-text-muted text-xs font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-terminal-bg-light/50 overflow-hidden rounded-xs">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.02, duration: 0.5 }}
                      className="h-full bg-linear-to-r from-text-secondary/40 via-text-secondary/60 to-text-secondary shadow-[0_0_4px_rgba(200,200,200,0.3)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
