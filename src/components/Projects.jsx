import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Terminal, 
  ChevronRight, 
  X, 
  Award 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedTerminalProject, setSelectedTerminalProject] = useState(null);
  const [selectedCertModal, setSelectedCertModal] = useState(null);

  // Prevent background scroll and support ESC key
  useEffect(() => {
    if (selectedTerminalProject || selectedCertModal) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          if (selectedTerminalProject) setSelectedTerminalProject(null);
          if (selectedCertModal) setSelectedCertModal(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedTerminalProject, selectedCertModal]);

  return (
    <section id="projects" className="py-20 relative border-t border-cyber-border/60 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-green tracking-wider uppercase">
            <span>&lt;04_artifacts&gt;</span>
            <div className="w-12 h-px bg-cyber-green/40" />
            <span>PRACTICAL PROJECTS &amp; LABS</span>
          </div>
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Academic Projects, Labs <span className="text-cyber-green">&amp;</span> CTF
              </h2>
              <p className="text-cyber-muted text-sm sm:text-base max-w-2xl mt-1">
                Practical vulnerability scanning scripts, home SOC setups, academic research, and CTF competitions.
              </p>
            </div>
            <a
              href="https://github.com/DarkNight30622"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-green text-xs font-mono text-cyber-text hover:text-white transition-all shadow-sm focus-visible:ring-1 focus-visible:ring-cyber-green"
            >
              <GithubIcon className="w-4 h-4 text-cyber-green" />
              <span>Explore GitHub Repos</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyber-dim" />
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => {
            const hasGithub = Boolean(project.github);
            const isPublication = Boolean(project.publication);
            const hasCertificate = Boolean(project.certificatePdf);

            return (
              <div
                key={project.id}
                className="cyber-card-glass rounded-xl border border-cyber-border p-6 sm:p-7 flex flex-col justify-between hover:border-cyber-green/50 transition-all relative overflow-hidden group"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-green/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyber-green/10 transition-colors" />

                <div>
                  {/* Category Pill & ID */}
                  <div className="flex items-center justify-between pb-3 border-b border-cyber-border/60 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">
                      {project.badge}
                    </span>
                    <span className="text-cyber-dim">
                      {project.type}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-bold font-mono text-white mt-4 group-hover:text-cyber-green transition-colors">
                    {project.title}
                  </h3>
                  
                  {isPublication && (
                    <div className="mt-2 p-2.5 rounded bg-cyber-blue/10 border border-cyber-blue/30 text-xs font-mono text-cyber-blue">
                      <span className="font-semibold">IJIRT 2024 (Peer-Reviewed Paper)</span>: Academic paper studying Zero Trust principles and micro-segmentation.
                    </div>
                  )}

                  {hasCertificate && (
                    <div className="mt-2.5 p-2.5 rounded bg-cyber-green/10 border border-cyber-green/30 text-xs font-mono text-cyber-green flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-cyber-green" />
                        Verified CTF Certificate of Participation
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedCertModal(project)}
                        className="underline hover:text-white font-bold ml-2 focus-visible:ring-1 focus-visible:ring-cyber-green"
                      >
                        View Certificate
                      </button>
                    </div>
                  )}

                  <p className="mt-3 text-sm text-slate-300 font-sans leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-cyber-muted font-sans">
                    {project.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-cyber-green flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer: Tags & Buttons */}
                <div className="mt-6 pt-4 border-t border-cyber-border/60 space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-cyber-card border border-cyber-border text-[11px] font-mono text-cyber-dim group-hover:text-cyber-text"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-2">
                      {hasGithub && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-green text-xs font-mono text-white transition-all hover:bg-cyber-cardHover focus-visible:ring-1 focus-visible:ring-cyber-green"
                        >
                          <GithubIcon className="w-3.5 h-3.5 text-cyber-green" />
                          <span>View Code</span>
                          <ExternalLink className="w-3 h-3 text-cyber-dim" />
                        </a>
                      )}

                      {hasCertificate && (
                        <button
                          type="button"
                          onClick={() => setSelectedCertModal(project)}
                          className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyber-green/10 border border-cyber-green/40 hover:bg-cyber-green hover:text-black text-xs font-mono text-cyber-green transition-all font-medium focus-visible:ring-1 focus-visible:ring-cyber-green"
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>Certificate</span>
                        </button>
                      )}

                      {!hasGithub && !hasCertificate && (
                        <span className="text-xs font-mono text-cyber-dim italic px-2 py-1">
                          {isPublication ? 'Peer-Reviewed Academic Paper' : 'Self-Study Lab Setup'}
                        </span>
                      )}
                    </div>

                    {/* Terminal Preview Button */}
                    <button
                      type="button"
                      onClick={() => setSelectedTerminalProject(project)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-cyber-card/60 border border-cyber-border hover:border-cyber-blue text-xs font-mono text-cyber-blue transition-colors focus-visible:ring-1 focus-visible:ring-cyber-blue"
                      title="Inspect Lab Output"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Console Logs</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Terminal Preview Modal */}
      {selectedTerminalProject && (
        <div 
          onClick={() => setSelectedTerminalProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-pointer"
          role="dialog"
          aria-modal="true"
          aria-label={`Lab Output: ${selectedTerminalProject.title}`}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-xl bg-cyber-card border border-cyber-green shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 cursor-default"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0A0E15] border-b border-cyber-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-xs font-mono text-cyber-muted truncate">
                  lab-output://{selectedTerminalProject.id}.log
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTerminalProject(null)}
                className="p-1 rounded-md text-cyber-dim hover:text-white hover:bg-cyber-card focus-visible:ring-1 focus-visible:ring-cyber-green"
                aria-label="Close output dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Console Output */}
            <div className="p-5 font-mono text-xs sm:text-sm bg-[#080B10] space-y-3 overflow-x-auto">
              <div className="text-cyber-green text-xs pb-1 border-b border-cyber-border/40">
                # LAB / PROJECT: {selectedTerminalProject.title}
              </div>
              <pre className="text-slate-200 leading-relaxed whitespace-pre-wrap font-mono">
                {selectedTerminalProject.terminalPreview}
              </pre>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between px-4 py-3 bg-cyber-card border-t border-cyber-border text-xs font-mono">
              <span className="text-cyber-dim">Status: Completed</span>
              <button
                type="button"
                onClick={() => setSelectedTerminalProject(null)}
                className="px-3 py-1 rounded bg-cyber-green text-black font-semibold hover:bg-cyber-greenDark focus-visible:ring-1 focus-visible:ring-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTF Certificate Lightbox Modal */}
      {selectedCertModal && (
        <div 
          onClick={() => setSelectedCertModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md cursor-pointer"
          role="dialog"
          aria-modal="true"
          aria-label="Capture The Flag Certificate Preview"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-xl bg-cyber-card border border-cyber-green shadow-2xl overflow-hidden flex flex-col max-h-[92vh] cursor-default"
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#090E17] border-b border-cyber-border">
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-cyber-green" />
                <div>
                  <h4 className="text-xs sm:text-sm font-mono font-bold text-white">
                    Capture The Flag (CTF) Challenge 2024 Certificate
                  </h4>
                  <p className="text-[11px] font-mono text-cyber-dim">
                    Presented to Jatin Kumar • HackTech @ Amity University Haryana
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedCertModal.certificatePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-green text-xs font-mono text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-cyber-green" />
                  <span className="hidden sm:inline">Open Full PDF</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedCertModal(null)}
                  className="p-1.5 rounded-lg text-cyber-dim hover:text-white hover:bg-cyber-card transition-colors"
                  aria-label="Close certificate dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-[#06080D]">
              <div className="rounded-lg overflow-hidden border-2 border-cyber-border/80 shadow-2xl max-w-full">
                <img
                  src={selectedCertModal.certificateImg}
                  alt="CTF Certificate of Participation"
                  className="max-h-[65vh] w-auto object-contain mx-auto rounded"
                />
              </div>
              <div className="mt-4 px-4 py-2 rounded-lg bg-cyber-card border border-cyber-border text-xs font-mono text-center text-cyber-muted">
                <span className="text-cyber-green">Certificate No.:</span> {selectedCertModal.certificateId}
              </div>
            </div>

            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#090E17] border-t border-cyber-border text-xs font-mono">
              <span className="text-cyber-dim">Amity University Haryana • 19th Sep 2024</span>
              <button
                type="button"
                onClick={() => setSelectedCertModal(null)}
                className="px-3 py-1 rounded bg-cyber-card border border-cyber-border text-white hover:bg-cyber-cardHover"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
