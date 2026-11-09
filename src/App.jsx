import React, { useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveTerminalModal from './components/InteractiveTerminalModal';
import Toast from './components/Toast';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-[#080B10] text-[#F1F5F9] font-sans relative selection:bg-cyber-green/20 selection:text-cyber-green">
      {/* Background Cyber Grid */}
      <div className="fixed inset-0 bg-grid-cyber pointer-events-none opacity-60 z-0" />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar 
        onOpenTerminal={() => setTerminalOpen(true)} 
        onShowToast={showToast} 
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero 
          onOpenTerminal={() => setTerminalOpen(true)} 
          onShowToast={showToast} 
        />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CLI Terminal Console Modal */}
      <InteractiveTerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onShowToast={showToast}
      />

      {/* Global Notification Toast */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
}
