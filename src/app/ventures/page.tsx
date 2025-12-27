'use client';

import { motion } from 'framer-motion';

interface LogEntry {
  timestamp: string;
  level: 'STARTUP' | 'SUCCESS' | 'METRICS' | 'SCALE' | 'EXIT' | 'DEPLOY' | 'HANDOFF';
  message: string;
}

const ulpuLogs: LogEntry[] = [
  { timestamp: '2020-11-01 00:00:00', level: 'STARTUP', message: 'Initializing ULPU Online...' },
  { timestamp: '2020-11-01 00:00:01', level: 'SUCCESS', message: 'E-commerce platform deployed' },
  { timestamp: '2020-12-01 00:00:00', level: 'METRICS', message: 'First 100 orders processed' },
  { timestamp: '2021-03-01 00:00:00', level: 'SCALE', message: 'Integrated eSewa/Khalti payments' },
  { timestamp: '2021-06-01 00:00:00', level: 'SCALE', message: 'Reached 500+ product listings' },
  { timestamp: '2022-01-01 00:00:00', level: 'METRICS', message: 'Automated logistics with Celery/Redis' },
  { timestamp: '2023-06-01 00:00:00', level: 'METRICS', message: '1,000+ monthly orders achieved' },
  { timestamp: '2023-12-31 23:59:59', level: 'EXIT', message: 'Successful venture concluded' },
];

const collegetownLogs: LogEntry[] = [
  { timestamp: '2025-01-01 00:00:00', level: 'STARTUP', message: 'Launching CollegeTown...' },
  { timestamp: '2025-01-15 00:00:00', level: 'DEPLOY', message: 'Flutter app + FastAPI backend live' },
  { timestamp: '2025-02-01 00:00:00', level: 'SUCCESS', message: 'Published on App Store & Play Store' },
  { timestamp: '2025-02-15 00:00:00', level: 'SCALE', message: 'RAG-powered AI chatbot integrated' },
  { timestamp: '2025-03-01 00:00:00', level: 'METRICS', message: '1,000+ active users reached' },
  { timestamp: '2025-04-01 00:00:00', level: 'SCALE', message: 'Real-time chat with E2E encryption' },
  { timestamp: '2025-05-01 00:00:00', level: 'METRICS', message: '3,000+ active users achieved' },
];

const levelColors: Record<string, string> = {
  STARTUP: 'text-matrix-amber',
  SUCCESS: 'text-matrix-green',
  METRICS: 'text-matrix-cyan',
  SCALE: 'text-matrix-purple',
  EXIT: 'text-matrix-green',
  DEPLOY: 'text-matrix-green',
  HANDOFF: 'text-matrix-cyan',
};

function LogViewer({ logs, title }: { logs: LogEntry[]; title: string }) {
  return (
    <div className="terminal-window mb-8">
      <div className="terminal-header">
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
        <span className="text-text-muted text-sm ml-2">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm max-h-80 overflow-y-auto">
        {logs.map((log, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-2 mb-1 hover:bg-matrix-green/5 p-1 -m-1"
          >
            <span className="text-text-muted shrink-0">[{log.timestamp}]</span>
            <span className={`shrink-0 ${levelColors[log.level]}`}>[{log.level}]</span>
            <span className="text-text-secondary">{log.message}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function VenturesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Command header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <span className="text-matrix-amber">$</span>
        <span className="text-matrix-green ml-2">cat startups.log</span>
      </motion.div>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 p-4 border border-matrix-green-dim"
      >
        <div className="text-matrix-green font-bold mb-2">
          {'>'} ENTREPRENEURIAL JOURNEY
        </div>
        <div className="text-text-secondary">
          From ideation to production. Building products that solve real problems,
          scaling from 0 to thousands of users, and learning what it takes to ship.
        </div>
      </motion.div>

      {/* ULPU Online */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="text-matrix-amber text-xl font-bold">01</div>
          <div>
            <div className="text-matrix-green font-bold text-lg">ULPU Online</div>
            <div className="text-text-muted text-sm">E-commerce Platform | Co-Founder</div>
          </div>
          <a
            href="https://ulpuskins.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-matrix-cyan hover:text-glow-subtle text-sm"
          >
            [Visit]
          </a>
        </div>

        <LogViewer logs={ulpuLogs} title="tail -f ulpu.log" />

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {[
            { value: '500+', label: 'Products' },
            { value: '1,000+', label: 'Monthly Orders' },
            { value: '10%', label: 'MoM Growth' },
            { value: '35%', label: 'Return Rate' },
          ].map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center p-3 border border-matrix-green-dim"
            >
              <div className="text-2xl font-bold text-matrix-cyan">{metric.value}</div>
              <div className="text-text-muted text-xs">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CollegeTown */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="text-matrix-amber text-xl font-bold">02</div>
          <div>
            <div className="text-matrix-green font-bold text-lg">CollegeTown</div>
            <div className="text-text-muted text-sm">AI-Powered Social Platform | Founder</div>
          </div>
          <a
            href="https://collegetown.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-matrix-cyan hover:text-glow-subtle text-sm"
          >
            [Visit]
          </a>
        </div>

        <LogViewer logs={collegetownLogs} title="tail -f collegetown.log" />

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '3,000+', label: 'Active Users' },
            { value: '3', label: 'Platforms' },
            { value: 'RAG', label: 'AI Chatbot' },
            { value: 'Live', label: 'Status' },
          ].map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="text-center p-3 border border-matrix-green-dim"
            >
              <div className="text-2xl font-bold text-matrix-cyan">{metric.value}</div>
              <div className="text-text-muted text-xs">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lessons learned */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12"
      >
        <div className="text-matrix-amber mb-4">$ echo $LESSONS_LEARNED</div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: '{ }', title: 'Build & Ship', desc: 'Move fast, iterate faster' },
            { icon: '$ $', title: 'Business Acumen', desc: 'Tech serves the customer' },
            { icon: '[ ]', title: 'Scale Mindset', desc: 'Design for growth from day 1' },
          ].map((lesson, i) => (
            <motion.div
              key={lesson.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.1 }}
              className="p-4 border border-matrix-green-dim hover:border-matrix-green
                       hover:bg-matrix-green/5 transition-all"
            >
              <div className="text-matrix-cyan text-2xl mb-2">{lesson.icon}</div>
              <div className="text-matrix-green font-bold">{lesson.title}</div>
              <div className="text-text-muted text-sm">{lesson.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
