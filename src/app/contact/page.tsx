'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const contactInfo = [
  {
    icon: '@',
    label: 'EMAIL',
    value: 'sapkota.pratima97@gmail.com',
    href: 'mailto:sapkota.pratima97@gmail.com',
    action: 'Send Email',
  },
  {
    icon: 'in',
    label: 'LINKEDIN',
    value: 'linkedin.com/in/sapkota-pratima',
    href: 'https://www.linkedin.com/in/sapkota-pratima/',
    action: 'Connect',
  },
  {
    icon: '<>',
    label: 'GITHUB',
    value: 'github.com/pratima-sapkota',
    href: 'https://github.com/pratima-sapkota',
    action: 'Follow',
  },
];

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Command header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <span className="text-matrix-amber">$</span>
        <span className="text-matrix-green ml-2">ping pratima@contact</span>
      </motion.div>

      {/* Ping response */}
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
          <span className="text-text-muted text-sm ml-2">ping</span>
        </div>
        <div className="p-4 font-mono text-sm">
          <div className="text-text-muted">
            PING pratima@portfolio (127.0.0.1): 56 data bytes
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-text-muted">64 bytes: seq=0 ttl=64 time=0.042ms</span>
            <span className="text-matrix-green ml-2">response=&quot;AVAILABLE&quot;</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-matrix-green"
          >
            --- contact routes established ---
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="space-y-4 mb-8"
      >
        {contactInfo.map((contact, index) => (
          <motion.div
            key={contact.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            className="flex items-center gap-4 p-4 border border-matrix-green-dim
                     hover:border-matrix-green hover:bg-matrix-green/5 transition-all group"
          >
            <div className="w-12 h-12 flex items-center justify-center border border-matrix-cyan
                          text-matrix-cyan font-mono text-lg">
              {contact.icon}
            </div>
            <div className="flex-1">
              <div className="text-text-muted text-xs">{contact.label}</div>
              <div className="text-matrix-green">{contact.value}</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(
                  contact.href.startsWith('mailto:') ? contact.value : contact.href,
                  contact.label
                )}
                className="px-3 py-1 text-xs border border-matrix-green-dim text-text-muted
                         hover:border-matrix-green hover:text-matrix-green transition-all"
              >
                {copied === contact.label ? 'Copied!' : 'Copy'}
              </button>
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-xs bg-matrix-green/10 border border-matrix-green
                         text-matrix-green hover:bg-matrix-green hover:text-terminal-bg transition-all"
              >
                {contact.action}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Traceroute */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mb-8"
      >
        <div className="text-matrix-amber mb-4">$ traceroute collaboration</div>
        <div className="terminal-window">
          <div className="p-4 font-mono text-sm space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-matrix-cyan w-8">1</span>
              <span className="text-text-secondary">Initial Contact</span>
              <span className="text-text-muted">→ Email or LinkedIn</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-matrix-cyan w-8">2</span>
              <span className="text-text-secondary">Introduction Call</span>
              <span className="text-text-muted">→ Learn about your challenges</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-matrix-cyan w-8">3</span>
              <span className="text-text-secondary">Collaboration</span>
              <span className="text-text-muted">→ Building solutions together</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="text-center p-6 border border-matrix-green"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-matrix-green animate-pulse" />
          <span className="text-matrix-green font-bold">STATUS: AVAILABLE</span>
        </div>
        <div className="text-text-muted text-sm">
          Open to opportunities | Response time: {'<'} 24 hours
        </div>
      </motion.div>

      {/* Easter egg hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="mt-8 text-center text-text-muted text-xs font-mono"
      >
        <span className="text-matrix-green-dim">
          {'// Psst... try "sudo hire pratima" in the terminal'}
        </span>
      </motion.div>
    </div>
  );
}
