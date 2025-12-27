'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: 'home', cmd: '~' },
  { href: '/about', label: 'about', cmd: 'whoami' },
  { href: '/experience', label: 'experience', cmd: 'history' },
  { href: '/projects', label: 'projects', cmd: 'ls' },
  { href: '/skills', label: 'skills', cmd: 'cat' },
  { href: '/ctf', label: 'ctf', cmd: './hack' },
  { href: '/ventures', label: 'ventures', cmd: 'log' },
  { href: '/contact', label: 'contact', cmd: 'ping' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-terminal-bg/95 backdrop-blur border-b border-matrix-green-dim">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo / Name */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-matrix-green font-bold text-lg glitch">
              pratima@portfolio
            </span>
            <span className="text-matrix-green-dim">:</span>
            <span className="text-matrix-cyan">~</span>
            <span className="text-matrix-green">$</span>
            <span className="cursor" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = mounted && pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-sm transition-all duration-200 ${
                    isActive
                      ? 'text-matrix-green text-glow-subtle font-semibold'
                      : 'text-matrix-green-dim hover:text-matrix-green'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-matrix-green/10 border border-matrix-green/30 rounded -z-10"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  <span className={`mr-1 ${isActive ? 'text-matrix-green' : 'text-text-muted'}`}>[</span>
                  {item.label}
                  <span className={`ml-1 ${isActive ? 'text-matrix-green' : 'text-text-muted'}`}>]</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-matrix-green p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-lg">{mobileMenuOpen ? '[x]' : '[=]'}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-matrix-green-dim"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = mounted && pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 transition-all ${
                      isActive
                        ? 'text-matrix-green bg-matrix-green/10 font-semibold'
                        : 'text-matrix-green-dim hover:text-matrix-green hover:bg-matrix-green/5'
                    }`}
                  >
                    <span className="text-matrix-amber mr-2">$</span>
                    <span className={isActive ? 'text-matrix-green' : 'text-text-muted'}>{item.cmd}</span>
                    <span className="mx-2 text-matrix-green-dim">{'->'}</span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
