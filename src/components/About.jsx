import React from 'react';
import { 
  UserCheck, 
  ShieldAlert, 
  Terminal, 
  CheckCircle2, 
  BookOpen, 
  Cpu
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const securityPillars = [
    {
      title: "VAPT & Offensive Fundamentals",
      icon: ShieldAlert,
      color: "text-cyber-green",
      borderColor: "border-cyber-green/40",
      description: "Hands-on vulnerability scanning, web app testing (OWASP Top 10), and identifying security flaws using tools like Burp Suite, Nmap, and Nessus."
    },
    {
      title: "SOC & Defensive Foundations",
      icon: Terminal,
      color: "text-cyber-blue",
      borderColor: "border-cyber-blue/40",
      description: "Home lab practice with the ELK Stack, understanding Windows/Linux event logs, and learning how Tier-1 SOC analysts triage security alerts."
    },
    {
      title: "Network Security & Diagnostics",
      icon: Cpu,
      color: "text-purple-400",
      borderColor: "border-purple-500/40",
      description: "Solid conceptual grasp of the TCP/IP stack, DNS, HTTP/S, and packet inspection using Wireshark to understand network traffic."
    },
    {
      title: "Academic Research & CTFs",
      icon: BookOpen,
      color: "text-yellow-400",
      borderColor: "border-yellow-500/40",
      description: "Author of a peer-reviewed paper on Zero Trust (IJIRT 2024), participant in Amity University CTF 2024, and active learner."
    }
  ];

  return (
    <section id="about" className="py-20 relative border-t border-cyber-border/60 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-green tracking-wider uppercase">
            <span>&lt;01_profile&gt;</span>
            <div className="w-12 h-px bg-cyber-green/40" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Security Fundamentals <span className="text-cyber-green">&amp;</span> Fresher Mindset
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base max-w-2xl">
            MCA graduate specializing in Cybersecurity, eager to bring dedicated curiosity, lab practice, and quick learning to an entry-level security team.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Lead Card */}
            <div className="cyber-card-glass p-6 sm:p-7 rounded-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-green/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 pb-3 border-b border-cyber-border/70">
                <div className="w-9 h-9 rounded-lg bg-cyber-card border border-cyber-green/30 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-cyber-green" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Jatin Kumar (Drak)</h3>
                  <p className="text-xs font-mono text-cyber-dim">MCA in Cybersecurity • Amity University CTF 2024 Participant</p>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                <p>
                  I am an MCA graduate with a strong interest in <span className="text-white font-medium">Cybersecurity</span>, <span className="text-cyber-green font-medium">Vulnerability Assessment and Penetration Testing (VAPT)</span>, and <span className="text-cyber-blue font-medium">Network Security</span>. I have practical exposure to security testing methodologies and cybersecurity tools through my internship and independent projects.
                </p>
                <p>
                  I enjoy exploring security vulnerabilities, understanding attack techniques, strengthening defensive security practices, and continuously improving my technical knowledge.
                </p>
                <p className="text-xs sm:text-sm text-cyber-muted">
                  As a fresher, I focus on building strong foundational skills: using Burp Suite to understand web application weaknesses, packet sniffing in Wireshark, Python for repetitive security tasks, and setting up virtual labs to test concepts safely and ethically.
                </p>
              </div>

              {/* Candidate Badges */}
              <div className="pt-3 border-t border-cyber-border/60 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/30 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Immediate Joiner (Fresher)
                </span>
                <span className="px-2.5 py-1 rounded bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/30 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Amity CTF 2024 Participant
                </span>
                <span className="px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Peer-Reviewed Author (IJIRT)
                </span>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-green/40 transition-colors">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-cyber-green">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-white mt-0.5 font-medium">
                    {stat.label}
                  </div>
                  <div className="text-[10px] font-mono text-cyber-dim mt-0.5">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: 4 Security Pillars + Candidate Factsheet */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Factsheet Card */}
            <div className="p-5 rounded-xl bg-cyber-card border border-cyber-border text-xs font-mono space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-cyber-border/70 text-cyber-dim">
                <span>RECRUITER_FACTSHEET</span>
                <span className="text-cyber-green">ENTRY-LEVEL</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between py-1 border-b border-cyber-border/30">
                  <span className="text-cyber-muted">Status:</span>
                  <span className="text-white font-medium">Fresher / Immediate Joiner</span>
                </div>
                <div className="flex justify-between py-1 border-b border-cyber-border/30">
                  <span className="text-cyber-muted">Target Roles:</span>
                  <span className="text-cyber-green font-medium">VAPT / SOC Tier-1 / Security Analyst</span>
                </div>
                <div className="flex justify-between py-1 border-b border-cyber-border/30">
                  <span className="text-cyber-muted">Highest Degree:</span>
                  <span className="text-white font-medium">MCA in Cybersecurity (Amity)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-cyber-border/30">
                  <span className="text-cyber-muted">Undergrad:</span>
                  <span className="text-white font-medium">BCA (Chandigarh University)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-cyber-border/30">
                  <span className="text-cyber-muted">Location:</span>
                  <span className="text-white font-medium">Delhi, India (Open to relocate / Remote)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-cyber-muted">Languages:</span>
                  <span className="text-white">English (Prof), Hindi (Native)</span>
                </div>
              </div>
            </div>

            {/* 4 Core Security Pillars */}
            <div className="space-y-3">
              {securityPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-cyber-card/70 border border-cyber-border hover:border-slate-600 transition-all flex items-start gap-3.5 group"
                  >
                    <div className={`p-2 rounded-lg bg-cyber-card border ${pillar.borderColor} flex-shrink-0 group-hover:scale-105 transition-transform`}>
                      <IconComponent className={`w-4 h-4 ${pillar.color}`} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-mono font-semibold text-white tracking-wide">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-cyber-muted leading-relaxed font-sans">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
