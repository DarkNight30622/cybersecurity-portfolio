import React, { useEffect } from 'react';
import { Shield, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyber-card border border-cyber-green text-white font-mono text-xs shadow-glow-green max-w-md">
        <div className="w-6 h-6 rounded-md bg-cyber-green/10 border border-cyber-green/30 flex items-center justify-center flex-shrink-0">
          <Shield className="w-3.5 h-3.5 text-cyber-green" />
        </div>
        <div className="flex-1 text-slate-200">
          {message}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded text-cyber-dim hover:text-white focus-visible:ring-1 focus-visible:ring-cyber-green"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

