import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-50 bg-cyber-bg/50">
      <div
        className="h-full bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-green shadow-[0_0_10px_#00FF9C]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

