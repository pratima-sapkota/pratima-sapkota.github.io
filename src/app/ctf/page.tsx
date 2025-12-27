'use client';

import { motion } from 'framer-motion';
import { ctfAchievements, ctfPlatforms, securitySkills } from '@/data/ctf';

export default function CTFPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Command header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <span className="text-matrix-amber">$</span>
        <span className="text-matrix-green ml-2">./hack.sh</span>
      </motion.div>

      {/* ASCII Header */}
      <motion.pre
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-matrix-green text-center font-mono text-xs md:text-sm mb-8 text-glow-subtle"
      >
        {`
   ██████╗████████╗███████╗
  ██╔════╝╚══██╔══╝██╔════╝
  ██║        ██║   █████╗
  ██║        ██║   ██╔══╝
  ╚██████╗   ██║   ██║
   ╚═════╝   ╚═╝   ╚═╝
  CAPTURE THE FLAG
        `}
      </motion.pre>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <div className="text-matrix-amber mb-4">$ cat achievements.log</div>
        <div className="space-y-4">
          {ctfAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="terminal-window"
            >
              <div className="p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="text-matrix-green font-bold text-lg">
                      {achievement.competition}
                    </div>
                    <div className="text-text-muted text-sm">
                      {achievement.organizer} | {achievement.period}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-matrix-amber text-glow-subtle">
                      {achievement.rank}
                    </div>
                    <div className="text-xs text-matrix-green">FLAG{'{'} CAPTURED {'}'}</div>
                  </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {achievement.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-2 py-1 text-xs font-mono bg-matrix-green/10 text-matrix-cyan
                               border border-matrix-green-dim"
                    >
                      [x] {cat}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                {achievement.highlights && (
                  <div className="text-text-secondary text-sm">
                    {achievement.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-matrix-green">{'>'}</span>
                        {h}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Active Platforms */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mb-8"
      >
        <div className="text-matrix-amber mb-4">$ ps aux | grep ctf</div>
        <div className="terminal-window">
          <div className="p-4 font-mono text-sm">
            <div className="text-text-muted mb-2">
              USER       PID  %CPU  STATUS   PLATFORM
            </div>
            {ctfPlatforms.map((platform) => (
              <div key={platform.name} className="flex items-center gap-4">
                <span className="text-matrix-cyan">pratima</span>
                <span className="text-text-muted">{Math.floor(Math.random() * 9000 + 1000)}</span>
                <span className="text-matrix-green">ACTIVE</span>
                <span className="text-matrix-amber">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Security Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mb-8"
      >
        <div className="text-matrix-amber mb-4">$ cat /etc/skills/security</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {securitySkills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.05 }}
              className="flex items-center gap-3 p-3 border border-matrix-green-dim
                       hover:border-matrix-green hover:bg-matrix-green/5 transition-all"
            >
              <span className="text-matrix-green">[+]</span>
              <span className="text-text-secondary">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Easter egg hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center text-text-muted text-sm font-mono"
      >
        <span className="text-matrix-green-dim">
          {'// Try typing "flag{}" in the terminal below...'}
        </span>
      </motion.div>
    </div>
  );
}
