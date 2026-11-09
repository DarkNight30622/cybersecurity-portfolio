import React, { useState } from 'react';
import { 
  Target, 
  Network, 
  ShieldAlert, 
  Code2, 
  Check, 
  Info, 
  Layers, 
  Search
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Domains', icon: Layers },
    { id: 'offensive', label: 'Offensive & VAPT', icon: Target },
    { id: 'network', label: 'Networking', icon: Network },
    { id: 'soc', label: 'SOC & Blue Team', icon: ShieldAlert },
    { id: 'technologies', label: 'Programming & CLI', icon: Code2 },
  ];

  // Helper to filter skills
  const getFilteredCategories = () => {
    const list = [];
    Object.entries(skillsData).forEach(([key, domain]) => {
      if (activeTab === 'all' || activeTab === key) {
        const matchingSkills = domain.skills.filter(s => 
          s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.type.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (matchingSkills.length > 0) {
          list.push({ ...domain, key, skills: matchingSkills });
        }
      }
    });
    return list;
  };

  const filtered = getFilteredCategories();

  return (
    <section id="skills" className="py-20 relative border-t border-cyber-border/60 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-green tracking-wider uppercase">
            <span>&lt;02_capabilities&gt;</span>
            <div className="w-12 h-px bg-cyber-green/40" />
            <span>TECHNICAL SKILLS &amp; TOOLS</span>
          </div>
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Security Foundations <span className="text-cyber-green">&amp;</span> Toolset
              </h2>
              <p className="text-cyber-muted text-sm sm:text-base max-w-2xl mt-1">
                Practical tools and concepts explored through hands-on labs, university coursework, and internship tasks.
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyber-dim" />
              <input
                type="text"
                placeholder="Search tools or concepts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs font-mono rounded-lg bg-cyber-card border border-cyber-border focus:border-cyber-green focus:outline-none text-white placeholder-cyber-dim"
              />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-cyber-green/10 text-cyber-green border border-cyber-green shadow-glow-green-sm'
                    : 'bg-cyber-card border border-cyber-border text-cyber-muted hover:text-white hover:border-slate-600'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyber-green' : 'text-cyber-dim'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Candidacy Transparency Note */}
        <div className="mb-8 p-3.5 rounded-lg bg-cyber-card/60 border border-cyber-blue/30 text-xs font-mono flex items-start gap-3">
          <Info className="w-4 h-4 text-cyber-blue flex-shrink-0 mt-0.5" />
          <div className="text-slate-300 font-sans text-xs">
            <span className="font-mono text-cyber-blue font-semibold">FRESHER TRANSPARENCY: </span>
            Skills are rated honestly based on hands-on lab usage, CTF participation, and coursework. SOC/SIEM knowledge reflects self-configured virtual labs and academic study.
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-10">
          {filtered.map((domain) => (
            <div key={domain.key} className="space-y-4">
              
              {/* Category Subheader */}
              <div className="flex items-center justify-between pb-2 border-b border-cyber-border/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-cyber-green" />
                  <h3 className="text-base sm:text-lg font-bold font-mono uppercase tracking-wide text-white">
                    {domain.category}
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyber-card border border-cyber-border text-cyber-dim">
                    {domain.badge}
                  </span>
                </div>
                <span className="text-xs font-mono text-cyber-dim hidden sm:inline">
                  {domain.skills.length} skills listed
                </span>
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {domain.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-cyber-card/80 border border-cyber-border hover:border-cyber-green/40 hover:bg-cyber-cardHover transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-mono font-semibold text-sm text-white group-hover:text-cyber-green transition-colors">
                          {skill.name}
                        </h4>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase ${
                          skill.level.includes('Hands-on') || skill.level.includes('Proficient')
                            ? 'bg-cyber-green/10 text-cyber-green border-cyber-green/30'
                            : skill.level.includes('Practiced') || skill.level.includes('Lab')
                            ? 'bg-cyber-blue/10 text-cyber-blue border-cyber-blue/30'
                            : 'bg-cyber-card text-cyber-dim border-cyber-border'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-cyber-dim mt-1">
                        Area: {skill.type}
                      </div>
                      <p className="text-xs text-cyber-muted font-sans mt-2 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-cyber-border/50 flex items-center justify-between text-[11px] font-mono text-cyber-dim">
                      <span className="flex items-center gap-1 text-cyber-green/80">
                        <Check className="w-3 h-3 text-cyber-green" /> Practiced
                      </span>
                      <span className="text-[10px] text-cyber-dim">
                        // TOOL_ID: #{idx + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-12 text-cyber-dim font-mono text-sm">
              No matching tools found for "{searchTerm}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
