'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const asciiAvatar = `
    .---.
   /     \\
   \\.@-@./
   /\`\\_/\`\\
  //  _  \\\\
 | \\     )|_
/\`\\_\`>  <_/ \\
\\__/'---'\\__/
`;

const neofetchData = [
  { label: 'Host', value: 'Florida State University' },
  { label: 'Kernel', value: 'MS Computer Science (3.97 GPA)' },
  { label: 'Uptime', value: '5+ years in software engineering' },
  { label: 'Resolution', value: 'Problem Solver @ Any Scale' },
  { label: 'Terminal', value: 'Building things that matter' },
];

const interests = [
  { icon: '[ ]', label: 'Capture The Flag', desc: 'Breaking things legally' },
  { icon: '{ }', label: 'Full-Stack Dev', desc: 'Building end-to-end solutions' },
  { icon: '> _', label: 'AI/ML', desc: 'RAG, RLHF, Computer Vision' },
  { icon: '$ $', label: 'Entrepreneurship', desc: 'From 0 to production' },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Command header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <span className="text-matrix-amber">$</span>
        <span className="text-matrix-green ml-2">whoami</span>
      </motion.div>

      {/* Neofetch-style display */}
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
          <span className="text-text-muted text-sm ml-2">neofetch</span>
        </div>
        <div className="p-6 flex flex-col md:flex-row gap-8">
          {/* ASCII Avatar */}
          <div className="text-center md:text-left">
            <pre className="ascii-art text-matrix-cyan">
              {asciiAvatar}
            </pre>
          </div>

          {/* System Info */}
          <div className="flex-1 font-mono text-sm">
            <div className="text-matrix-green text-xl mb-4 text-glow-subtle">
              pratima_sapkota
            </div>
            <div className="text-matrix-green-dim mb-4 overflow-hidden">
              <span className="hidden sm:inline">{'─'.repeat(30)}</span>
              <span className="sm:hidden">{'─'.repeat(20)}</span>
            </div>
            {neofetchData.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex gap-2 mb-1"
              >
                <span className="text-matrix-cyan">{item.label}:</span>
                <span className="text-text-secondary">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <div className="text-matrix-amber mb-2">$ cat bio.txt</div>
        <div className="terminal-window">
          <div className="p-6 text-text-secondary leading-relaxed">
            <p className="mb-4">
              Software Engineer with deep expertise in building{' '}
              <span className="text-matrix-green">enterprise-grade systems</span> and{' '}
              <span className="text-matrix-green">multi-tenant SaaS platforms</span>.
            </p>
            <p className="mb-4">
              I&apos;ve served{' '}
              <span className="text-matrix-cyan">Fortune 500 clients</span>, co-founded an e-commerce platform
              handling <span className="text-matrix-cyan">1,000+ monthly orders</span>, and led teams building
              logistics systems that processed <span className="text-matrix-cyan">35,000+ deliveries</span>.
            </p>
            <p>
              Recently graduated with my Master&apos;s from FSU. Currently building{' '}
              <Link href="https://collegetown.ai" className="text-matrix-cyan hover:text-glow-subtle">
                CollegeTown
              </Link>
              , an AI-powered social platform for students.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="text-matrix-amber mb-4">$ ls interests/</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {interests.map((interest, i) => (
            <motion.div
              key={interest.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="border border-matrix-green-dim p-4 hover:border-matrix-green
                         hover:bg-matrix-green/5 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-matrix-cyan font-mono">{interest.icon}</span>
                <span className="text-matrix-green font-bold">{interest.label}</span>
              </div>
              <div className="text-text-muted text-sm">{interest.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8"
      >
        <div className="text-matrix-amber mb-4">$ cat education.log</div>
        <div className="space-y-4">
          <div className="border-l-2 border-matrix-green pl-4">
            <div className="text-matrix-green font-bold">Florida State University</div>
            <div className="text-text-secondary">MS Computer Science | GPA: 3.97/4.0</div>
            <div className="text-text-muted text-sm">Jan 2024 - Dec 2025 | Tallahassee, FL</div>
            <div className="text-text-muted text-sm mt-1">
              Coursework: Advanced Algorithms, Advanced Databases, Computer Security, Data Mining
            </div>
          </div>
          <div className="border-l-2 border-matrix-green-dim pl-4">
            <div className="text-matrix-green font-bold">Tribhuvan University</div>
            <div className="text-text-secondary">BE Computer Engineering</div>
            <div className="text-text-muted text-sm">Dec 2016 - Sep 2021 | Nepal</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
