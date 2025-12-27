'use client';

import { motion } from 'framer-motion';
import { skillCategories, specialties } from '@/data/skills';

function ProgressBar({ level }: { level: number }) {
  const filled = Math.floor(level / 10);
  const empty = 10 - filled;

  return (
    <span className="font-mono text-xs">
      [<span className="text-matrix-green">{'█'.repeat(filled)}</span>
      <span className="text-matrix-green-dim">{'░'.repeat(empty)}</span>]
      <span className="text-text-muted ml-1">{level}%</span>
    </span>
  );
}

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
        <span className="text-matrix-green ml-2">cat skills.json</span>
      </motion.div>

      {/* JSON-style display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="terminal-window mb-8"
      >
        <div className="terminal-header">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
          <span className="text-text-muted text-sm ml-2">skills.json</span>
        </div>
        <div className="p-4 font-mono text-sm overflow-x-auto">
          <div className="text-matrix-purple">{'{'}</div>

          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + catIndex * 0.1 }}
              className="ml-4 mb-4"
            >
              <div>
                <span className="text-matrix-cyan">&quot;{category.name}&quot;</span>
                <span className="text-white">: </span>
                <span className="text-matrix-purple">{'{'}</span>
              </div>

              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name} className="ml-4 flex items-center gap-2 py-1">
                  <span className="text-matrix-amber">&quot;{skill.name}&quot;</span>
                  <span className="text-white">:</span>
                  <ProgressBar level={skill.level} />
                  {skillIndex < category.skills.length - 1 && (
                    <span className="text-white">,</span>
                  )}
                </div>
              ))}

              <div>
                <span className="text-matrix-purple">{'}'}</span>
                {catIndex < skillCategories.length - 1 && (
                  <span className="text-white">,</span>
                )}
              </div>
            </motion.div>
          ))}

          {/* Specialties */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="ml-4 mb-2"
          >
            <div>
              <span className="text-matrix-cyan">&quot;specialties&quot;</span>
              <span className="text-white">: [</span>
            </div>
            <div className="ml-4">
              {specialties.map((specialty, index) => (
                <div key={specialty}>
                  <span className="text-matrix-green">&quot;{specialty}&quot;</span>
                  {index < specialties.length - 1 && <span className="text-white">,</span>}
                </div>
              ))}
            </div>
            <span className="text-white">],</span>
          </motion.div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="ml-4"
          >
            <span className="text-matrix-cyan">&quot;status&quot;</span>
            <span className="text-white">: </span>
            <span className="text-matrix-green">&quot;Always Learning&quot;</span>
          </motion.div>

          <div className="text-matrix-purple">{'}'}</div>
        </div>
      </motion.div>

      {/* Visual skills grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-matrix-amber mb-4">$ ./visualize-skills.sh</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + index * 0.1 }}
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
                {category.skills.slice(0, 4).map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center text-sm">
                    <span className="text-text-secondary">{skill.name}</span>
                    <div className="w-24">
                      <div className="h-1 bg-terminal-bg-light overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-matrix-green-dim to-matrix-green"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                {category.skills.length > 4 && (
                  <div className="text-text-muted text-xs">
                    +{category.skills.length - 4} more...
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
