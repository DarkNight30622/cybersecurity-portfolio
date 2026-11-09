import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Terminal as TerminalIcon, 
  Download, 
  ExternalLink, 
  Mail, 
  ChevronRight, 
  FileCode2, 
  Award
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenTerminal, onShowToast }) {
  // Animated terminal lines
  const terminalLines = [
    { text: "Initializing Portfolio System...", delay: 200, status: "OK", color: "text-cyber-green" },
    { text: "Loading Security Tools...", delay: 600, status: "READY", color: "text-cyber-blue" },
    { text: "Verifying Lab Environments...", delay: 1000, status: "ACTIVE", color: "text-yellow-400" },
    { text: "Checking CTF & Lab Telemetry...", delay: 1400, status: "PASSED", color: "text-cyber-green" },
    { text: "Candidate Status: Open for Hire", delay: 1800, status: "ONLINE", color: "text-cyber-green font-bold" },
  ];

  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < terminalLines.length) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 450);
    return () => clearInterval(timer);
  }, [terminalLines.length]);

  const handleResumeDownload = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.2 },
      colors: ['#00FF9C', '#00D2FF', '#FFFFFF']
    });
    if (onShowToast) {
      onShowToast("Downloading Jatin Kumar's Official Resume...");
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyber-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyber-blue/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-card border border-cyber-border/80 text-xs font-mono text-cyber-muted shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-green"></span>
              </span>
              <span className="text-white font-medium">Available for Hire</span>
              <span className="text-cyber-dim">•</span>
              <span className="text-cyber-green">Entry-Level / Fresher (Immediate Joiner)</span>
            </div>

            {/* Main Headline */}
            <div>
              <div className="flex items-center gap-2 text-cyber-green font-mono text-xs tracking-widest uppercase mb-1">
                <span>&lt;fresher_profile&gt;</span>
                <span className="h-px w-8 bg-cyber-green/40"></span>
                <span>DRAK // JATIN KUMAR</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                JATIN KUMAR
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-mono text-cyber-blue flex flex-wrap items-center gap-2">
                <span>Aspiring Cybersecurity Analyst</span>
                <span className="text-cyber-dim">|</span>
                <span>VAPT Enthusiast</span>
                <span className="text-cyber-dim">|</span>
                <span>MCA Graduate</span>
              </p>
            </div>

            {/* Tagline */}
            <div className="p-4 rounded-xl bg-cyber-card/60 border-l-4 border-cyber-green border-cyber-border text-sm sm:text-base text-cyber-text leading-relaxed font-sans shadow-sm">
              <p className="italic text-slate-300">
                &ldquo;{personalInfo.tagline}&rdquo;
              </p>
            </div>

            {/* Professional Introduction */}
            <p className="text-sm sm:text-base text-cyber-muted leading-relaxed max-w-2xl">
              MCA graduate in Cybersecurity with hands-on practice in vulnerability assessment, web application security (OWASP Top 10), network protocols, and Linux tools. Eager to start as an entry-level security analyst and learn from seasoned professionals.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Download Resume */}
              <a
                href={personalInfo.resumePath}
                download="Jatin_Kumar_Resume.pdf"
                onClick={handleResumeDownload}
                className="flex items-center gap-2.5 px-5 py-3 rounded-lg bg-cyber-green hover:bg-cyber-greenDark text-black font-mono text-xs sm:text-sm font-bold transition-all shadow-glow-green hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Download Resume</span>
              </a>

              {/* View Projects */}
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-green/60 text-white font-mono text-xs sm:text-sm font-medium transition-all hover:bg-cyber-cardHover"
              >
                <FileCode2 className="w-4 h-4 text-cyber-green" />
                <span>View Projects</span>
              </a>

              {/* View Certificates */}
              <a
                href="#certifications"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-cyber-card/70 border border-cyber-border hover:border-cyber-blue/60 text-white font-mono text-xs sm:text-sm font-medium transition-all hover:bg-cyber-cardHover"
              >
                <Award className="w-4 h-4 text-cyber-blue" />
                <span>Certificates &amp; CTF</span>
              </a>
            </div>

            {/* Social Links & Quick Identifiers */}
            <div className="pt-2 flex items-center gap-4 text-cyber-muted border-t border-cyber-border/60">
              <span className="text-xs font-mono text-cyber-dim">Connect Profiles:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-cyber-muted hover:text-white transition-colors hover:border-b hover:border-cyber-green"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ChevronRight className="w-3 h-3 text-cyber-dim" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-cyber-muted hover:text-cyber-blue transition-colors hover:border-b hover:border-cyber-blue"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ChevronRight className="w-3 h-3 text-cyber-dim" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 text-xs font-mono text-cyber-muted hover:text-cyber-green transition-colors hover:border-b hover:border-cyber-green"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
                <ChevronRight className="w-3 h-3 text-cyber-dim" />
              </a>
            </div>

          </div>

          {/* Right Column: Subtle Animated Terminal */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl bg-cyber-card border border-cyber-border/90 shadow-2xl overflow-hidden cyber-corner">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0A0E15] border-b border-cyber-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyber-dim">
                  <TerminalIcon className="w-3.5 h-3.5 text-cyber-green" />
                  <span>jatin@security-lab: ~</span>
                </div>
                <div className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">
                  BASH
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm space-y-2.5 bg-[#090D13] min-h-[260px] flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-cyber-dim text-xs pb-1 border-b border-cyber-border/40 flex justify-between items-center">
                    <span>HOST: 127.0.0.1 (KALI-LAB)</span>
                    <span className="text-cyber-green font-mono">ONLINE</span>
                  </div>

                  {terminalLines.slice(0, visibleCount).map((line, idx) => (
                    <div key={idx} className="flex items-start justify-between gap-2 text-cyber-text">
                      <div className="flex items-center gap-2">
                        <span className="text-cyber-green select-none">&gt;</span>
                        <span className="text-slate-200">{line.text}</span>
                      </div>
                      <span className={`text-[11px] px-1.5 py-0.2 rounded font-mono bg-cyber-border/40 ${line.color}`}>
                        [{line.status}]
                      </span>
                    </div>
                  ))}

                  {/* Blinking Prompt Cursor */}
                  <div className="flex items-center gap-2 pt-1 text-cyber-green">
                    <span className="text-cyber-blue">jatin@kali</span>
                    <span className="text-cyber-dim">:</span>
                    <span className="text-yellow-400">~/projects</span>
                    <span className="text-cyber-dim">$</span>
                    <span className="inline-block w-2.5 h-4 bg-cyber-green animate-terminal-blink align-middle ml-1" />
                  </div>
                </div>

                {/* Terminal Footer Quick Interactive Actions */}
                <div className="pt-3 border-t border-cyber-border/60">
                  <div className="flex items-center justify-between text-[11px] text-cyber-dim">
                    <span>Quick commands:</span>
                    <button
                      onClick={onOpenTerminal}
                      className="text-cyber-green hover:underline flex items-center gap-1 font-mono hover:text-white transition-colors"
                    >
                      <span>Interactive Console</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {['help', 'about', 'skills', 'certs', 'resume'].map((cmd) => (
                      <button
                        key={cmd}
                        onClick={onOpenTerminal}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyber-cardHover border border-cyber-border hover:border-cyber-green text-cyber-muted hover:text-cyber-green transition-colors"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Security Snapshot Card under terminal */}
            <div className="mt-4 grid grid-cols-2 gap-3 font-mono text-xs">
              <a
                href="#certifications"
                className="p-3 rounded-lg bg-cyber-card/60 border border-cyber-border hover:border-cyber-green/50 transition-colors flex items-center gap-2.5"
              >
                <Award className="w-4 h-4 text-cyber-green flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-cyber-dim">CTF 2024</div>
                  <div className="text-cyber-text font-medium truncate">Amity University</div>
                </div>
              </a>
              <a
                href="#certifications"
                className="p-3 rounded-lg bg-cyber-card/60 border border-cyber-border hover:border-cyber-blue/50 transition-colors flex items-center gap-2.5"
              >
                <ShieldCheck className="w-4 h-4 text-cyber-blue flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-cyber-dim">CERTIFIED</div>
                  <div className="text-cyber-text font-medium truncate">HackTech CEH &amp; DFE</div>
                </div>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
