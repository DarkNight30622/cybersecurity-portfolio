import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Download, Menu, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Navbar({ onOpenTerminal, onShowToast }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDownloadResume = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1 },
      colors: ['#00FF9C', '#00D2FF', '#FFFFFF']
    });
    if (onShowToast) {
      onShowToast("Downloading Jatin Kumar's Official Resume...");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B10]/90 backdrop-blur-md border-b border-cyber-border/80 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyber-green/50 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-lg bg-cyber-card border border-cyber-green/30 flex items-center justify-center group-hover:border-cyber-green transition-colors">
              <Shield className="w-5 h-5 text-cyber-green" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyber-green animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-base tracking-wider text-white group-hover:text-cyber-green transition-colors">
                  JATIN<span className="text-cyber-green">.</span>KUMAR
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">
                  DRAK
                </span>
              </div>
              <p className="text-[11px] font-mono text-cyber-dim tracking-tight">
                VAPT // SOC Analyst (Fresher)
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-cyber-muted hover:text-cyber-green transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-green transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Terminal Button */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyber-card/80 border border-cyber-border hover:border-cyber-green/50 text-cyber-muted hover:text-white transition-all text-xs font-mono group"
              title="Launch Cyber Terminal (Ctrl+K)"
            >
              <Terminal className="w-3.5 h-3.5 text-cyber-green group-hover:scale-110 transition-transform" />
              <span>CLI</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] rounded bg-[#131B27] border border-cyber-border text-cyber-dim">
                Ctrl+K
              </kbd>
            </button>

            {/* Resume Button */}
            <a
              href="/Jatin_Kumar_Resume.pdf"
              download="Jatin_Kumar_Resume.pdf"
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-cyber-green/10 border border-cyber-green/40 hover:bg-cyber-green hover:text-black text-cyber-green font-mono text-xs font-medium transition-all shadow-glow-green-sm hover:shadow-glow-green"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-md bg-cyber-card border border-cyber-border text-cyber-green"
              aria-label="Open Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-cyber-card border border-cyber-border text-cyber-muted hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080B10]/95 backdrop-blur-xl border-b border-cyber-border px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-cyber-border/50">
            <span className="text-xs font-mono text-cyber-dim">Navigation Menu</span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyber-green">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
              Status: Ready
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md bg-cyber-card/60 border border-cyber-border/50 text-xs font-mono text-cyber-muted hover:text-cyber-green hover:border-cyber-green/40 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="/Jatin_Kumar_Resume.pdf"
              download="Jatin_Kumar_Resume.pdf"
              onClick={() => {
                handleDownloadResume();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-cyber-green text-black font-mono text-xs font-semibold shadow-glow-green"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

