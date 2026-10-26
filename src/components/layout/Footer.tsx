export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-terminal-bg/95 backdrop-blur-sm border-t border-matrix-green-dim">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-text-muted">
          <div className="font-mono">
            <span className="text-matrix-green">&copy;</span> {currentYear} Pratima Sapkota
          </div>
          <div className="flex items-center gap-4 font-mono text-xs">
            <a
              href="mailto:pratimasapkotaa@gmail.com"
              className="hover:text-matrix-green transition-colors"
            >
              pratimasapkotaa@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
