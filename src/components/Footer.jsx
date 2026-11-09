import React from 'react';
import { Shield, ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-cyber-border bg-[#05070B] text-cyber-muted font-mono text-xs py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-cyber-border/60">
          
          {/* Identity Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-cyber-card border border-cyber-green/40 flex items-center justify-center">
                <Shield className="w-4 h-4 text-cyber-green" />
              </div>
              <span className="font-bold text-white text-sm">
                JATIN KUMAR <span className="text-cyber-green">// DRAK</span>
              </span>
            </div>
            <p className="text-xs text-cyber-dim font-sans max-w-md leading-relaxed">
              Cybersecurity Analyst &amp; VAPT Enthusiast dedicated to offensive security assessments, proactive vulnerability mitigation, and Zero Trust architectures.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#090D13] border border-cyber-border text-[11px] text-cyber-green">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
              <span>Status: Available for Entry-Level Roles (Immediate Joiner)</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-2">
            <div className="text-white font-semibold uppercase tracking-wider text-[11px]">
              Directory
            </div>
            <ul className="space-y-1.5 text-cyber-dim text-xs">
              <li><a href="#about" className="hover:text-cyber-green transition-colors">01. About Me</a></li>
              <li><a href="#skills" className="hover:text-cyber-green transition-colors">02. Technical Skills</a></li>
              <li><a href="#experience" className="hover:text-cyber-green transition-colors">03. Professional Experience</a></li>
              <li><a href="#projects" className="hover:text-cyber-green transition-colors">04. Featured Projects</a></li>
              <li><a href="#certifications" className="hover:text-cyber-green transition-colors">05. Certifications &amp; Labs</a></li>
              <li><a href="#education" className="hover:text-cyber-green transition-colors">06. Education</a></li>
              <li><a href="#contact" className="hover:text-cyber-green transition-colors">07. Get In Touch</a></li>
            </ul>
          </div>

          {/* Connect & Legal */}
          <div className="space-y-2">
            <div className="text-white font-semibold uppercase tracking-wider text-[11px]">
              Direct Handles
            </div>
            <div className="flex flex-col gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-cyber-green" />
                <span>github.com/DarkNight30622</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyber-blue transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-cyber-blue" />
                <span>linkedin.com/in/jatin0011</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-cyber-green transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyber-green" />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cyber-dim">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Jatin Kumar. Built with React, Vite &amp; Tailwind CSS.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyber-green" />
              <span>Security Perimeter: Active</span>
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-cyber-card border border-cyber-border hover:border-cyber-green text-cyber-muted hover:text-white transition-colors"
              title="Return to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyber-green" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
