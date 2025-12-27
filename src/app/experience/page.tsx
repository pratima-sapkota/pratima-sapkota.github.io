'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { experiences } from '@/data/experience';

const commitColors: Record<string, string> = {
  'full-time': 'text-matrix-green',
  'co-founder': 'text-matrix-amber',
  'lead': 'text-matrix-cyan',
  'internship': 'text-matrix-purple',
};

export default function ExperiencePage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Command header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <span className="text-matrix-amber">$</span>
        <span className="text-matrix-green ml-2">git log --oneline --graph career</span>
      </motion.div>

      {/* Git log timeline */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Git graph line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-matrix-green-dim" />

            {/* Commit node */}
            <div className="flex items-start gap-4">
              <div
                className={`relative z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center
                  ${index === 0 ? 'bg-matrix-green border-matrix-green' : 'bg-terminal-bg border-matrix-green-dim'}`}
              >
                <span className="text-xs font-mono">
                  {index === 0 ? 'H' : '*'}
                </span>
              </div>

              {/* Commit content */}
              <div className="flex-1 pb-6">
                <div
                  className="terminal-window cursor-pointer hover:border-matrix-green transition-colors"
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                >
                  <div className="p-4">
                    {/* Commit hash and branch */}
                    <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-sm">
                      <span className="text-matrix-amber">{exp.id.slice(0, 7)}</span>
                      {index === 0 && (
                        <span className="text-matrix-green">(HEAD -{'>'} present)</span>
                      )}
                      <span className={commitColors[exp.type] || 'text-text-muted'}>
                        [{exp.type}]
                      </span>
                    </div>

                    {/* Role and company */}
                    <div className="text-matrix-green font-bold text-lg">
                      {exp.role}
                    </div>
                    <div className="text-text-secondary">
                      @ {exp.company}
                    </div>
                    <div className="text-text-muted text-sm">
                      {exp.period} | {exp.location}
                    </div>

                    {/* Expand indicator */}
                    <div className="text-text-muted text-xs mt-2">
                      {expandedId === exp.id ? '[-] Click to collapse' : '[+] Click to expand'}
                    </div>

                    {/* Expanded content */}
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-matrix-green-dim"
                      >
                        {/* Diff-style highlights */}
                        <div className="font-mono text-sm space-y-1 mb-4">
                          {exp.highlights.map((highlight, i) => (
                            <div key={i} className="flex">
                              <span className="text-matrix-green mr-2">+</span>
                              <span className="text-text-secondary">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs font-mono bg-matrix-green/10 text-matrix-green
                                       border border-matrix-green-dim"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Link */}
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-matrix-cyan hover:text-glow-subtle text-sm"
                          >
                            {'>'} {exp.link}
                          </a>
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* End of log */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: experiences.length * 0.1 }}
          className="flex items-center gap-4 pl-4"
        >
          <div className="w-0.5 h-8 bg-matrix-green-dim" />
          <span className="text-text-muted font-mono text-sm">
            (END) - More commits loading...
          </span>
        </motion.div>
      </div>
    </div>
  );
}
