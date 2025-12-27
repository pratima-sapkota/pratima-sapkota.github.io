'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const commands: Record<string, { action: string; description: string }> = {
  help: { action: 'help', description: 'Show available commands' },
  whoami: { action: '/about', description: 'Learn about me' },
  history: { action: '/experience', description: 'View work experience' },
  ls: { action: '/projects', description: 'List projects' },
  'cat skills.json': { action: '/skills', description: 'View skills' },
  './hack.sh': { action: '/ctf', description: 'CTF achievements' },
  ventures: { action: '/ventures', description: 'Entrepreneurial journey' },
  ping: { action: '/contact', description: 'Contact info' },
  home: { action: '/', description: 'Go home' },
  clear: { action: 'clear', description: 'Clear terminal' },
  'sudo hire pratima': { action: 'easter', description: '???' },
};

export function Footer() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [showOutput, setShowOutput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === '') return;

    if (trimmedCmd === 'help') {
      setOutput([
        'Available commands:',
        '',
        '  whoami          - About me',
        '  history         - Work experience',
        '  ls              - List projects',
        '  cat skills.json - View skills',
        '  ./hack.sh       - CTF achievements',
        '  ventures        - Startup journey',
        '  ping            - Contact info',
        '  home            - Go home',
        '  clear           - Clear output',
        '',
        'Try: sudo hire pratima',
      ]);
      setShowOutput(true);
      return;
    }

    if (trimmedCmd === 'clear') {
      setOutput([]);
      setShowOutput(false);
      return;
    }

    if (trimmedCmd === 'sudo hire pratima') {
      setOutput([
        '',
        '  [sudo] password for visitor: ********',
        '',
        '  ACCESS GRANTED',
        '',
        '  Initializing recruitment protocol...',
        '  [OK] Loading skills: Full-Stack, AI/ML, Security',
        '  [OK] Loading achievements: Fortune 500 clients served',
        '  [OK] Loading passion: Maximum',
        '',
        '  Ready to contribute to your team!',
        '  Contact: sapkota.pratima97@gmail.com',
        '',
      ]);
      setShowOutput(true);
      return;
    }

    if (trimmedCmd.startsWith('rm -rf')) {
      setOutput([
        '',
        '  [ERROR] Permission denied. Nice try though ;)',
        '  [INFO] System integrity maintained.',
        '',
      ]);
      setShowOutput(true);
      return;
    }

    if (trimmedCmd.includes('flag{')) {
      setOutput([
        '',
        '  Nice try! The real flags are in my CTF writeups.',
        '  Type "./hack.sh" to see my achievements.',
        '',
      ]);
      setShowOutput(true);
      return;
    }

    const command = commands[trimmedCmd];
    if (command && command.action.startsWith('/')) {
      router.push(command.action);
      setOutput([`Navigating to ${trimmedCmd}...`]);
      setShowOutput(true);
      setTimeout(() => setShowOutput(false), 1000);
      return;
    }

    setOutput([`Command not found: ${trimmedCmd}`, 'Type "help" for available commands.']);
    setShowOutput(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowOutput(false);
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <footer className="sticky bottom-0 z-50 bg-terminal-bg/95 backdrop-blur border-t border-matrix-green-dim">
      {/* Output panel */}
      {showOutput && output.length > 0 && (
        <div className="border-b border-matrix-green-dim bg-terminal-bg-light p-4 max-h-48 overflow-y-auto">
          <div className="container mx-auto">
            <pre className="text-sm text-matrix-green font-mono whitespace-pre-wrap">
              {output.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </pre>
            <button
              onClick={() => setShowOutput(false)}
              className="text-xs text-text-muted hover:text-matrix-green mt-2"
            >
              [Press Esc to close]
            </button>
          </div>
        </div>
      )}

      {/* Command input */}
      <div className="container mx-auto px-4 py-3">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-matrix-green-dim hidden sm:inline">visitor</span>
          <span className="text-matrix-green hidden sm:inline">@</span>
          <span className="text-matrix-cyan hidden sm:inline">pratima.dev</span>
          <span className="text-matrix-green-dim">:</span>
          <span className="text-matrix-purple">~</span>
          <span className="text-matrix-green">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command... (press / to focus)"
            className="flex-1 bg-transparent border-none outline-none text-matrix-green font-mono placeholder:text-text-muted/50"
            autoComplete="off"
            spellCheck={false}
          />
          <span className="cursor" />
        </form>
      </div>
    </footer>
  );
}
