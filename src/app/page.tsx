'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const bootSequence = [
  { text: '[BIOS] Initializing system...', delay: 0 },
  { text: '[OK] Memory check passed', delay: 400 },
  { text: '[OK] Loading neural networks...', delay: 800 },
  { text: '[OK] Initializing security modules...', delay: 1200 },
  { text: '[OK] Loading CTF exploits database...', delay: 1600 },
  { text: '[OK] Connecting to The Matrix...', delay: 2000 },
  { text: '', delay: 2400 },
  { text: '> whoami', delay: 2800 },
  { text: 'pratima_sapkota', delay: 3200 },
  { text: '', delay: 3400 },
];

const asciiArt = `
  ____           _   _
 |  _ \\ _ __ __ _| |_(_)_ __ ___   __ _
 | |_) | '__/ _\` | __| | '_ \` _ \\ / _\` |
 |  __/| | | (_| | |_| | | | | | | (_| |
 |_|   |_|  \\__,_|\\__|_|_| |_| |_|\\__,_|
`;

const tagline = 'Software Engineer | Security Enthusiast | Entrepreneur';

const quickLinks = [
  { href: '/about', label: 'whoami', desc: 'Learn about me' },
  { href: '/experience', label: 'history', desc: 'Work experience' },
  { href: '/projects', label: 'ls projects/', desc: 'View my work' },
  { href: '/ctf', label: './hack.sh', desc: 'CTF achievements' },
  { href: '/contact', label: 'ping', desc: 'Get in touch' },
];

export default function Home() {
  const [bootIndex, setBootIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsSkipped(true);
      setShowContent(true);
      return;
    }

    if (bootIndex < bootSequence.length) {
      const timer = setTimeout(() => {
        setBootIndex(bootIndex + 1);
      }, bootSequence[bootIndex]?.delay || 300);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setShowContent(true);
        localStorage.setItem('hasVisited', 'true');
      }, 500);
    }
  }, [bootIndex]);

  const handleSkip = () => {
    setIsSkipped(true);
    setShowContent(true);
    localStorage.setItem('hasVisited', 'true');
  };

  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      {/* Boot Sequence */}
      <AnimatePresence>
        {!showContent && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="terminal-window max-w-2xl mx-auto w-full"
          >
            <div className="terminal-header">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span className="text-text-muted text-sm ml-2">boot.sh</span>
            </div>
            <div className="p-4 font-mono text-sm min-h-[300px]">
              {bootSequence.slice(0, bootIndex).map((line, i) => (
                <div
                  key={i}
                  className={`${
                    line.text.startsWith('[OK]')
                      ? 'text-matrix-green'
                      : line.text.startsWith('>')
                      ? 'text-matrix-amber'
                      : line.text === 'pratima_sapkota'
                      ? 'text-matrix-cyan font-bold'
                      : 'text-text-muted'
                  }`}
                >
                  {line.text}
                </div>
              ))}
              {bootIndex < bootSequence.length && (
                <span className="cursor" />
              )}
            </div>
            {!isSkipped && (
              <button
                onClick={handleSkip}
                className="absolute bottom-4 right-4 text-xs text-text-muted hover:text-matrix-green"
              >
                [Skip →]
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* ASCII Art Name */}
            <pre className="ascii-art text-matrix-green text-glow mx-auto inline-block text-left">
              {asciiArt}
            </pre>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-text-secondary text-lg mt-4 mb-8"
            >
              {tagline}
            </motion.p>

            {/* Terminal prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8 text-text-muted"
            >
              <span className="text-matrix-green">visitor</span>
              <span className="text-white">@</span>
              <span className="text-matrix-cyan">pratima.dev</span>
              <span className="text-white">:</span>
              <span className="text-matrix-purple">~</span>
              <span className="text-white">$ </span>
              <span className="text-matrix-green">Type &apos;help&apos; or click below to explore</span>
              <span className="cursor" />
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto"
            >
              {quickLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block p-4 border border-matrix-green-dim hover:border-matrix-green
                               bg-terminal-bg-light hover:bg-matrix-green/10 transition-all duration-200
                               group"
                  >
                    <div className="text-matrix-amber font-mono text-sm mb-1">$</div>
                    <div className="text-matrix-green group-hover:text-glow-subtle font-mono">
                      {link.label}
                    </div>
                    <div className="text-text-muted text-xs mt-1">{link.desc}</div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-12 flex flex-wrap justify-center gap-8 text-sm"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-matrix-green text-glow-subtle">3.97</div>
                <div className="text-text-muted">GPA @ FSU</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-matrix-green text-glow-subtle">10+</div>
                <div className="text-text-muted">Fortune 500 Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-matrix-green text-glow-subtle">35K+</div>
                <div className="text-text-muted">Deliveries Processed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-matrix-green text-glow-subtle">#4</div>
                <div className="text-text-muted">CTF Rank @ FSU</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
