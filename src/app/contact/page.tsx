'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: '@',
    label: 'EMAIL',
    value: 'pratimasapkotaa@gmail.com',
    href: 'mailto:pratimasapkotaa@gmail.com',
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
            className="p-4 border border-matrix-green/20
                     hover:border-matrix-green/40 hover:bg-matrix-green/5 transition-all group"
          >
            {/* Desktop layout */}
            <div className="hidden sm:flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center border border-matrix-green/20
                            text-matrix-cyan/70 font-mono text-lg shrink-0">
                {contact.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-text-muted text-xs">{contact.label}</div>
                <div className="text-text-primary truncate">{contact.value}</div>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => copyToClipboard(
                    contact.href.startsWith('mailto:') ? contact.value : contact.href,
                    contact.label
                  )}
                  className="px-3 py-1 text-xs border border-border-subtle text-text-muted
                           hover:border-matrix-green-dim hover:text-matrix-green/80 transition-all"
                >
                  {copied === contact.label ? 'Copied!' : 'Copy'}
                </button>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs bg-matrix-green/10 border border-matrix-green-dim
                           text-matrix-green/80 hover:bg-matrix-green/20 hover:text-matrix-green transition-all"
                >
                  {contact.action}
                </a>
              </div>
            </div>
            {/* Mobile layout */}
            <div className="sm:hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center border border-matrix-green/20
                              text-matrix-cyan/70 font-mono text-sm shrink-0">
                  {contact.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-text-muted text-xs">{contact.label}</div>
                  <div className="text-text-primary text-sm truncate">{contact.value}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => copyToClipboard(
                    contact.href.startsWith('mailto:') ? contact.value : contact.href,
                    contact.label
                  )}
                  className="flex-1 px-3 py-2 text-xs border border-border-subtle text-text-muted
                           hover:border-matrix-green-dim hover:text-matrix-green/80 transition-all"
                >
                  {copied === contact.label ? 'Copied!' : 'Copy'}
                </button>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 text-xs text-center bg-matrix-green/10 border border-matrix-green-dim
                           text-matrix-green/80 hover:bg-matrix-green/20 hover:text-matrix-green transition-all"
                >
                  {contact.action}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
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
    </div>
  );
}
