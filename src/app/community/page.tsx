'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ctfAchievements } from '@/data/ctf';
import { volunteering } from '@/data/volunteering';

const typeColors: Record<string, string> = {
  'organizing': 'text-matrix-cyan/70',
  'mentoring': 'text-matrix-green/70',
  'marketing': 'text-matrix-amber/70',
  'community': 'text-matrix-purple/70',
};

export default function CommunityPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Command header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <span className="text-text-muted">$</span>
        <span className="text-text-secondary ml-2">cat community.log</span>
      </motion.div>

      {/* CTF Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <div className="text-matrix-amber mb-4 font-mono">
          <span className="text-text-muted">#</span> CTF Competitions
        </div>

        <div className="space-y-4">
          {ctfAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="terminal-window cursor-pointer hover:border-text-secondary transition-colors"
              onClick={() => setExpandedId(expandedId === achievement.id ? null : achievement.id)}
            >
              <div className="p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div>
                    <div className="text-matrix-green font-bold text-lg">
                      {achievement.competition}
                    </div>
                    <div className="text-text-muted text-sm">
                      {achievement.organizer} | {achievement.period}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-matrix-amber text-glow-subtle">
                      {achievement.rank}
                    </div>
                  </div>
                </div>

                {/* Expand indicator */}
                <div className="text-text-muted text-xs">
                  {expandedId === achievement.id ? '[-] collapse' : '[+] details'}
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {expandedId === achievement.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pt-3 border-t border-text-muted/30"
                    >
                      {/* Categories */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {achievement.categories.map((cat) => (
                          <span
                            key={cat}
                            className="px-2 py-1 text-xs font-mono bg-matrix-green/10 text-matrix-cyan
                                     border border-matrix-green-dim"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      {achievement.highlights && (
                        <div className="text-text-secondary text-sm font-mono">
                          {achievement.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="text-matrix-green">+</span>
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Volunteering Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="text-matrix-amber mb-4 font-mono">
          <span className="text-text-muted">#</span> Community Contributions
        </div>

        <div className="space-y-4">
          {volunteering.map((vol, index) => (
            <motion.div
              key={vol.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="terminal-window cursor-pointer hover:border-text-secondary transition-colors"
              onClick={() => setExpandedId(expandedId === vol.id ? null : vol.id)}
            >
              <div className="p-4">
                {/* Type badge and role */}
                <div className="flex flex-wrap items-center gap-2 mb-1 font-mono text-sm">
                  <span className="text-text-muted">{vol.id.slice(0, 7)}</span>
                  <span className={typeColors[vol.type] || 'text-text-muted'}>
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
                <AnimatePresence>
                  {expandedId === vol.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pt-3 border-t border-text-muted/20"
                    >
                      <div className="font-mono text-sm space-y-1">
                        {vol.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-matrix-cyan/60">+</span>
                            <span className="text-text-secondary text-xs">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
