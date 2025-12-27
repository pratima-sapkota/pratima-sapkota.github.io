'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { experiences } from '@/data/experience';
import { volunteering } from '@/data/volunteering';

const commitColors: Record<string, string> = {
  'full-time': 'text-matrix-green/70',
  'co-founder': 'text-matrix-amber/70',
  'lead': 'text-matrix-cyan/70',
  'internship': 'text-matrix-purple/70',
  'organizing': 'text-matrix-cyan/70',
  'mentoring': 'text-matrix-green/70',
  'marketing': 'text-matrix-amber/70',
  'community': 'text-matrix-purple/70',
};

export default function ExperiencePage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showVolunteering, setShowVolunteering] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Command header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <span className="text-text-muted">$</span>
        <span className="text-text-secondary ml-2">git log --oneline --graph career</span>
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
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-text-muted/30" />

            {/* Commit node */}
            <div className="flex items-start gap-4">
              <div
                className={`relative z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center
                  ${index === 0 ? 'bg-matrix-green/70 border-matrix-green/70' : 'bg-terminal-bg border-text-muted/50'}`}
              >
                <span className="text-xs font-mono">
                  {index === 0 ? 'H' : '*'}
                </span>
              </div>

              {/* Commit content */}
              <div className="flex-1 pb-6">
                <div
                  className="terminal-window cursor-pointer hover:border-text-secondary transition-colors"
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                >
                  <div className="p-4">
                    {/* Commit hash and branch */}
                    <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-sm">
                      <span className="text-text-muted">{exp.id.slice(0, 7)}</span>
                      {index === 0 && (
                        <span className="text-matrix-green/70">(HEAD)</span>
                      )}
                      <span className={commitColors[exp.type] || 'text-text-muted'}>
                        [{exp.type}]
                      </span>
                    </div>

                    {/* Role and company */}
                    <div className="text-text-primary font-bold text-lg">
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
                        className="mt-4 pt-4 border-t border-text-muted/30"
                      >
                        {/* Diff-style highlights */}
                        <div className="font-mono text-sm space-y-1 mb-4">
                          {exp.highlights.map((highlight, i) => (
                            <div key={i} className="flex">
                              <span className="text-matrix-green/60 mr-2">+</span>
                              <span className="text-text-secondary">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs font-mono bg-text-muted/10 text-text-secondary
                                       border border-text-muted/30"
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
                            className="inline-block mt-4 text-text-secondary hover:text-text-primary text-sm"
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
          <div className="w-0.5 h-8 bg-text-muted/30" />
          <span className="text-text-muted font-mono text-sm">
            (END) - More commits loading...
          </span>
        </motion.div>
      </div>

      {/* Community Contributions Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: experiences.length * 0.1 + 0.2 }}
        className="mt-12"
      >
        <button
          onClick={() => setShowVolunteering(!showVolunteering)}
          className="w-full text-left terminal-window hover:border-text-secondary transition-colors cursor-pointer"
        >
          <div className="p-4 flex items-center justify-between">
            <div>
              <span className="text-text-muted">$</span>
              <span className="text-text-secondary ml-2">
                git log --oneline community-contributions
              </span>
            </div>
            <span className="text-text-muted text-sm font-mono">
              {showVolunteering ? '[-] collapse' : '[+] expand'}
            </span>
          </div>
        </button>

        <AnimatePresence>
          {showVolunteering && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 space-y-4"
            >
              {volunteering.map((vol, index) => (
                <motion.div
                  key={vol.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Git graph line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-text-muted/20" />

                  {/* Commit node */}
                  <div className="flex items-start gap-4">
                    <div className="relative z-10 w-8 h-8 rounded-full border-2 bg-terminal-bg border-text-muted/30 flex items-center justify-center">
                      <span className="text-xs font-mono text-text-muted">◦</span>
                    </div>

                    {/* Commit content */}
                    <div
                      className="flex-1 pb-4 terminal-window cursor-pointer hover:border-text-secondary transition-colors"
                      onClick={() => setExpandedId(expandedId === vol.id ? null : vol.id)}
                    >
                      <div className="p-4">
                        {/* Commit hash and type */}
                        <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-sm">
                          <span className="text-text-muted">{vol.id.slice(0, 7)}</span>
                          <span className={commitColors[vol.type] || 'text-text-muted'}>
                            [{vol.type}]
                          </span>
                        </div>

                        {/* Role and organization */}
                        <div className="text-text-primary font-bold">
                          {vol.role}
                        </div>
                        <div className="text-text-secondary text-sm">
                          @ {vol.organization}
                        </div>
                        <div className="text-text-muted text-xs">
                          {vol.period} | {vol.location}
                        </div>

                        {/* Expand indicator */}
                        <div className="text-text-muted text-xs mt-2">
                          {expandedId === vol.id ? '[-] collapse' : '[+] details'}
                        </div>

                        {/* Expanded content */}
                        {expandedId === vol.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 pt-3 border-t border-text-muted/20"
                          >
                            <div className="font-mono text-sm space-y-1">
                              {vol.highlights.map((highlight, i) => (
                                <div key={i} className="flex">
                                  <span className="text-matrix-cyan/60 mr-2">+</span>
                                  <span className="text-text-secondary text-xs">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
