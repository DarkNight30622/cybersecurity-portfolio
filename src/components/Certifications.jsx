import React, { useState, useEffect } from 'react';
import { 
  Award, 
  CheckCircle, 
  ExternalLink, 
  Calendar, 
  Eye, 
  Download, 
  X, 
  Flag, 
  ShieldCheck, 
  Code2, 
  Cpu,
  FileText
} from 'lucide-react';
import { certificationsData, continuousLearningRoadmap } from '../data/portfolioData';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Prevent background scroll and handle Escape key when modal is open
  useEffect(() => {
    if (selectedCert) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setSelectedCert(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedCert]);

  const getCertIcon = (id) => {
    switch(id) {
      case 'ctf-amity':
        return <Flag className="w-5 h-5 text-cyber-green" />;
      case 'ceh-hacktech':
        return <ShieldCheck className="w-5 h-5 text-cyber-green" />;
      case 'dfe':
        return <Award className="w-5 h-5 text-cyber-blue" />;
      case 'python':
        return <Code2 className="w-5 h-5 text-yellow-400" />;
      case 'iiot':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return <Award className="w-5 h-5 text-cyber-green" />;
    }
  };

  return (
    <section id="certifications" className="py-20 relative border-t border-cyber-border/60 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-green tracking-wider uppercase">
            <span>&lt;05_credentials&gt;</span>
            <div className="w-12 h-px bg-cyber-green/40" />
            <span>CERTIFICATIONS &amp; ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certificates <span className="text-cyber-green">&amp;</span> CTF Participation
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base max-w-2xl">
            Verified credentials and practical CTF competition records. Click to view the official certificate document.
          </p>
        </div>

        {/* Clean, Uniform Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificationsData.map((cert) => {
            const hasDocument = Boolean(cert.pdfUrl);

            return (
              <div
                key={cert.id}
                className="cyber-card-glass p-6 rounded-xl border border-cyber-border hover:border-cyber-green/40 transition-all flex flex-col justify-between group relative"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-cyber-border/60 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-md bg-cyber-card border border-cyber-border group-hover:border-cyber-green/50 transition-colors">
                        {getCertIcon(cert.id)}
                      </div>
                      <span className="text-cyber-green font-medium flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        {cert.status}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-cyber-dim">
                      <Calendar className="w-3 h-3" />
                      {cert.year}
                    </span>
                  </div>

                  {/* Issuer & Title */}
                  <div className="mt-4">
                    <span className="text-xs font-mono text-cyber-blue font-semibold uppercase tracking-wider block">
                      {cert.issuer}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-mono text-white mt-1 group-hover:text-cyber-green transition-colors leading-snug">
                      {cert.name}
                    </h3>
                    <span className="inline-block mt-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-cyber-card border border-cyber-border text-cyber-dim">
                      {cert.type}
                    </span>
                  </div>

                  {/* Certificate ID */}
                  {cert.certificateNo && (
                    <div className="mt-2.5 text-[11px] font-mono text-cyber-dim">
                      ID: <span className="text-slate-300 select-all font-mono">{cert.certificateNo}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Footer with Skills & Clean Action Button */}
                <div className="mt-6 pt-4 border-t border-cyber-border/60 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-[#0A0F17] border border-cyber-border text-[11px] font-mono text-cyber-text"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Clean, Elegant View Action */}
                  {hasDocument ? (
                    <div className="pt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedCert(cert)}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-cyber-green/10 border border-cyber-green/40 hover:bg-cyber-green hover:text-black text-cyber-green font-mono text-xs font-semibold transition-all shadow-sm focus-visible:ring-1 focus-visible:ring-cyber-green"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Certificate</span>
                      </button>
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-green text-cyber-muted hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-cyber-green"
                        title="Open original PDF directly in new tab"
                        aria-label={`Open ${cert.name} PDF in new tab`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ) : (
                    <div className="pt-2 text-[11px] font-mono text-cyber-dim flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-cyber-dim" />
                      <span>Verified Course Completion</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Continuous Learning & CTF Roadmap */}
        <div className="rounded-xl bg-cyber-card border border-cyber-border p-6 sm:p-7 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-cyber-border/70">
            <div>
              <h3 className="text-base sm:text-lg font-mono font-bold text-white flex items-center gap-2">
                <Flag className="w-5 h-5 text-cyber-green" />
                Active Learning &amp; CTF Focus
              </h3>
              <p className="text-xs text-cyber-muted font-sans mt-0.5">
                Committed to regular lab practice, university CTF challenges, and gradual certification roadmaps.
              </p>
            </div>
            <div className="text-xs font-mono px-2.5 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/30 w-fit">
              Fresher Learning Path
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {continuousLearningRoadmap.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[#090D13] border border-cyber-border/80 hover:border-slate-600 transition-colors space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyber-green font-medium">#{idx + 1} // {item.category}</span>
                </div>
                <h4 className="text-sm font-mono font-semibold text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-cyber-muted font-sans leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-cyber-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-cyber-dim">
            <span>🛡️ All credentials shown represent genuine completion certificates and verified event participation.</span>
            <span className="text-cyber-green font-medium">100% Honest &amp; Verified</span>
          </div>
        </div>

      </div>

      {/* Clean Fullscreen Certificate Lightbox Modal (Opens when clicked) */}
      {selectedCert && (
        <div 
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
          role="dialog"
          aria-modal="true"
          aria-label={`Certificate Preview: ${selectedCert.name}`}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-xl bg-cyber-card border border-cyber-green shadow-2xl overflow-hidden flex flex-col max-h-[92vh] cursor-default"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#090E17] border-b border-cyber-border">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-cyber-green animate-pulse" />
                <div>
                  <h4 className="text-xs sm:text-sm font-mono font-bold text-white truncate max-w-md">
                    {selectedCert.name}
                  </h4>
                  <p className="text-[11px] font-mono text-cyber-dim">
                    Issued to Jatin Kumar • {selectedCert.issuer} ({selectedCert.year})
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-green text-xs font-mono text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-cyber-green" />
                  <span className="hidden sm:inline">Open Full PDF in New Tab</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg text-cyber-dim hover:text-white hover:bg-cyber-card transition-colors"
                  aria-label="Close certificate dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Clean Certificate Viewer */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-[#06080D]">
              {selectedCert.previewImg ? (
                <div className="rounded-lg overflow-hidden border border-cyber-border shadow-2xl max-w-full">
                  <img
                    src={selectedCert.previewImg}
                    alt={selectedCert.name}
                    className="max-h-[68vh] w-auto object-contain mx-auto rounded"
                  />
                </div>
              ) : (
                <div className="text-center py-12 text-cyber-dim font-mono text-sm">
                  Document ready for viewing.
                </div>
              )}

              {selectedCert.certificateNo && (
                <div className="mt-3 px-3 py-1.5 rounded-lg bg-cyber-card border border-cyber-border text-xs font-mono text-center text-cyber-muted">
                  <span className="text-cyber-green">Certificate ID:</span> {selectedCert.certificateNo}
                </div>
              )}
            </div>

            {/* Modal Actions Footer */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#090E17] border-t border-cyber-border text-xs font-mono">
              <span className="text-cyber-dim">Official Credential Verification</span>
              <div className="flex items-center gap-3">
                <a
                  href={selectedCert.pdfUrl}
                  download
                  className="flex items-center gap-1.5 text-cyber-green hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-3 py-1 rounded bg-cyber-card border border-cyber-border text-white hover:bg-cyber-cardHover"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
