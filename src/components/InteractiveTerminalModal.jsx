import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft } from 'lucide-react';
import { terminalCommands, personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

const ALIAS_MAP = Object.freeze({
  project: 'projects',
  proj: 'projects',
  experience: 'exp',
  internship: 'exp',
  cert: 'certs',
  certificate: 'certs',
  certificates: 'certs',
  edu: 'education',
  academics: 'education',
  paper: 'research',
  publication: 'research',
  publications: 'research',
  dir: 'ls',
  ll: 'ls',
  status: 'whoami'
});

const MAX_HISTORY_ENTRIES = 80;

export default function InteractiveTerminalModal({ isOpen, onClose, onShowToast }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `JATIN_KUMAR // Security Portfolio Console [v1.2-fresher]
Type 'help' to view available commands.
Type 'certs' to view CTF and Ethical Hacking credentials.
Press ESC or type 'exit' to close.`
    }
  ]);
  const [commandIndex, setCommandIndex] = useState(-1);
  const [pastInputs, setPastInputs] = useState([]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const focusTimer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => {
        document.body.style.overflow = originalOverflow;
        clearTimeout(focusTimer);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const rawCmd = inputVal.trim().toLowerCase();
    if (!rawCmd) return;

    // Track command history (limit to last 50)
    setPastInputs(prev => [...prev.slice(-49), rawCmd]);
    setCommandIndex(-1);

    const newEntries = [{ type: 'user', text: `$ ${inputVal}` }];

    if (rawCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (rawCmd === 'exit') {
      onClose();
      return;
    }

    // Safe prototype-pollution-proof lookup
    const cmd = Object.prototype.hasOwnProperty.call(ALIAS_MAP, rawCmd) 
      ? ALIAS_MAP[rawCmd] 
      : rawCmd;

    if (cmd === 'resume') {
      const link = document.createElement('a');
      link.href = personalInfo.resumePath;
      link.download = 'Jatin_Kumar_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#00FF9C', '#00D2FF', '#FFFFFF']
      });

      if (onShowToast) onShowToast("Downloading Jatin Kumar's Official Resume...");
      newEntries.push({
        type: 'output',
        text: `[+] Downloading Jatin_Kumar_Resume.pdf ... Done! Saved to your downloads.`
      });
    } else if (Object.prototype.hasOwnProperty.call(terminalCommands, cmd)) {
      newEntries.push({
        type: 'output',
        text: terminalCommands[cmd]
      });
    } else {
      newEntries.push({
        type: 'error',
        text: `bash: command not found: '${rawCmd}'. Type 'help' for available commands.`
      });
    }

    setHistory(prev => [...prev.slice(-MAX_HISTORY_ENTRIES + newEntries.length), ...newEntries]);
    setInputVal('');
  };

  const handleKeyDownInput = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastInputs.length > 0) {
        const nextIndex = commandIndex + 1;
        if (nextIndex < pastInputs.length) {
          setCommandIndex(nextIndex);
          setInputVal(pastInputs[pastInputs.length - 1 - nextIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex > 0) {
        const nextIndex = commandIndex - 1;
        setCommandIndex(nextIndex);
        setInputVal(pastInputs[pastInputs.length - 1 - nextIndex]);
      } else if (commandIndex === 0) {
        setCommandIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md cursor-pointer"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Cybersecurity Terminal Console"
    >
      <div 
        className="relative w-full max-w-3xl rounded-xl bg-[#090D14] border border-cyber-green shadow-[0_0_50px_rgba(0,255,156,0.2)] overflow-hidden flex flex-col h-[75vh] max-h-[600px] cursor-default"
        onClick={(e) => {
          e.stopPropagation();
          inputRef.current?.focus();
        }}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#06090E] border-b border-cyber-border select-none">
          <div className="flex items-center gap-2">
            <button 
              type="button"
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 hover:opacity-80 transition-opacity focus-visible:ring-1 focus-visible:ring-white"
              title="Close Terminal"
              aria-label="Close Terminal"
            />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
            <div className="ml-3 flex items-center gap-2 text-xs font-mono text-cyber-muted">
              <Terminal className="w-3.5 h-3.5 text-cyber-green" />
              <span>jatin@security-box:~ (bash)</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-cyber-dim hidden sm:inline">ESC to exit</span>
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded text-cyber-dim hover:text-white hover:bg-cyber-card transition-colors focus-visible:ring-1 focus-visible:ring-cyber-green"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Toolbar */}
        <div className="px-4 py-2 bg-[#080C12] border-b border-cyber-border/60 flex items-center gap-2 overflow-x-auto text-[11px] font-mono scrollbar-none">
          <span className="text-cyber-dim">Quick:</span>
          {['help', 'about', 'skills', 'projects', 'exp', 'certs', 'resume', 'clear'].map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setInputVal(cmd);
                inputRef.current?.focus();
              }}
              className="px-2 py-0.5 rounded bg-cyber-card border border-cyber-border hover:border-cyber-green text-cyber-muted hover:text-cyber-green transition-colors focus-visible:ring-1 focus-visible:ring-cyber-green"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Screen Body */}
        <div className="flex-1 p-4 font-mono text-xs sm:text-sm overflow-y-auto space-y-3 bg-[#080B10]">
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === 'system' && (
                <div className="text-cyber-blue whitespace-pre-wrap leading-relaxed pb-1 border-b border-cyber-border/40">
                  {item.text}
                </div>
              )}
              {item.type === 'user' && (
                <div className="text-cyber-green font-semibold flex items-center gap-2">
                  <span className="text-cyber-dim">&gt;</span>
                  <span>{item.text}</span>
                </div>
              )}
              {item.type === 'output' && (
                <div className="text-slate-200 whitespace-pre-wrap leading-relaxed pl-3 border-l-2 border-cyber-border/60 py-1">
                  {item.text}
                </div>
              )}
              {item.type === 'error' && (
                <div className="text-cyber-red whitespace-pre-wrap leading-relaxed pl-3 border-l-2 border-cyber-red/50 py-1">
                  {item.text}
                </div>
              )}
            </div>
          ))}

          {/* Current Input Line */}
          <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-cyber-green font-bold select-none">jatin@sec:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDownInput}
              maxLength={120}
              className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none caret-cyber-green"
              placeholder="type a command..."
              aria-label="Terminal command input"
            />
            <button 
              type="submit" 
              className="text-cyber-dim hover:text-cyber-green focus-visible:ring-1 focus-visible:ring-cyber-green"
              aria-label="Execute command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

          <div ref={bottomRef} />
        </div>

        {/* Terminal Footer */}
        <div className="px-4 py-2 bg-[#06090E] border-t border-cyber-border/70 flex items-center justify-between text-[11px] font-mono text-cyber-dim select-none">
          <span>STATUS: READY</span>
          <span className="text-cyber-green">BASH // LINUX</span>
        </div>
      </div>
    </div>
  );
}
