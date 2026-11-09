import React from 'react';
import { 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  ChevronRight
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative border-t border-cyber-border/60 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-green tracking-wider uppercase">
            <span>&lt;03_field_work&gt;</span>
            <div className="w-12 h-px bg-cyber-green/40" />
            <span>PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry Internship <span className="text-cyber-green">&amp;</span> Practical Exposure
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base max-w-2xl">
            Practical security testing, vulnerability documentation, and active threat monitoring under industry guidance.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-cyber-border/80 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-cyber-card border-2 border-cyber-green flex items-center justify-center shadow-glow-green-sm group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="cyber-card-glass p-6 sm:p-7 rounded-xl border border-cyber-border hover:border-cyber-green/40 transition-all space-y-4">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-cyber-border/60">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-white font-mono">
                        {exp.position}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyber-green/10 text-cyber-green border border-cyber-green/30">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-cyber-blue font-mono text-sm mt-1">
                      <span className="font-semibold">{exp.company}</span>
                      <span className="text-cyber-dim">•</span>
                      <span className="text-cyber-dim text-xs">Cybersecurity Solutions &amp; Auditing</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs text-cyber-dim">
                    <span className="flex items-center gap-1 bg-cyber-card px-2.5 py-1 rounded border border-cyber-border">
                      <Calendar className="w-3.5 h-3.5 text-cyber-green" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-cyber-card px-2.5 py-1 rounded border border-cyber-border">
                      <MapPin className="w-3.5 h-3.5 text-cyber-blue" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {exp.summary}
                </p>

                {/* Responsibilities */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyber-green flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Key Responsibilities &amp; Methodology
                  </h4>
                  <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-cyber-muted">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-cyber-green flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Applied Badges */}
                <div className="pt-4 border-t border-cyber-border/60">
                  <span className="text-xs font-mono text-cyber-dim block mb-2">
                    Security Tools &amp; Methodologies Applied:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-[#090E17] border border-cyber-border text-xs font-mono text-cyber-text hover:border-cyber-green/50 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

