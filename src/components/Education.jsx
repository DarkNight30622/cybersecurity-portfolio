import React from 'react';
import { GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative border-t border-cyber-border/60 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-green tracking-wider uppercase">
            <span>&lt;06_academics&gt;</span>
            <div className="w-12 h-px bg-cyber-green/40" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="text-cyber-green">&amp;</span> Foundational Rigor
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base max-w-2xl">
            Formal computer science and specialized cybersecurity postgraduate education providing theoretical depth to practical testing.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="cyber-card-glass p-6 sm:p-7 rounded-xl border border-cyber-border hover:border-cyber-green/50 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-green/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyber-green/10" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-cyber-border/60 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/20">
                    {edu.badge}
                  </span>
                  <span className="text-cyber-blue font-medium">
                    {edu.status}
                  </span>
                </div>

                {/* Degree & Institution */}
                <div className="mt-4">
                  <h3 className="text-xl font-bold font-mono text-white group-hover:text-cyber-green transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-mono text-cyber-blue mt-1">
                    Specialization: {edu.specialization}
                  </div>
                  <div className="text-base text-slate-200 font-semibold mt-1">
                    {edu.institution}
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-4 mt-3 font-mono text-xs text-cyber-dim">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyber-green" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyber-blue" />
                    {edu.location}
                  </span>
                </div>

                {/* Highlights */}
                <div className="mt-5 space-y-2.5">
                  <span className="text-xs font-mono text-cyber-dim uppercase tracking-wider block">
                    Curriculum Highlights &amp; Milestones:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-cyber-green flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-cyber-border/60 flex items-center justify-between text-xs font-mono text-cyber-dim">
                <span className="flex items-center gap-1 text-cyber-green">
                  <GraduationCap className="w-4 h-4" /> Academic Excellence
                </span>
                <span>Verified Degree Program</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

