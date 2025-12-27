'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';

export default function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Command header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <span className="text-matrix-amber">$</span>
        <span className="text-matrix-green ml-2">./visualize-skills.sh</span>
      </motion.div>

      {/* Visual skills grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            className="border border-matrix-green-dim p-4 hover:border-matrix-green
                     hover:bg-matrix-green/5 transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-matrix-cyan font-mono">{category.icon}</span>
              <span className="text-matrix-green font-bold uppercase text-sm">
                {category.name.replace('_', '/')}
              </span>
            </div>
            <div className="space-y-2">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex justify-between items-center text-sm">
                  <span className="text-text-secondary">{skill.name}</span>
                  <div className="w-24">
                    <div className="h-1 bg-terminal-bg-light/50 overflow-hidden rounded-sm">
                      <div
                        className="h-full bg-gradient-to-r from-text-secondary/40 via-text-secondary/60 to-text-secondary shadow-[0_0_4px_rgba(200,200,200,0.3)]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
