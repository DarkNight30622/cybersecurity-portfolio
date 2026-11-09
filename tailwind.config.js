/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#080B10',
          darker: '#05070A',
          card: '#0D121B',
          cardHover: '#131B27',
          border: '#1E293B',
          borderGlow: 'rgba(0, 255, 156, 0.3)',
          green: '#00FF9C',
          greenDark: '#00CC7D',
          greenMuted: '#06261c',
          blue: '#00D2FF',
          blueDark: '#0284C7',
          blueMuted: '#092336',
          purple: '#A855F7',
          red: '#FF4D4D',
          yellow: '#F59E0B',
          text: '#F1F5F9',
          muted: '#94A3B8',
          dim: '#64748B',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Consolas', 'Menlo', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 25px -5px rgba(0, 255, 156, 0.3)',
        'glow-green-sm': '0 0 12px -2px rgba(0, 255, 156, 0.25)',
        'glow-blue': '0 0 25px -5px rgba(0, 210, 255, 0.3)',
        'glow-blue-sm': '0 0 12px -2px rgba(0, 210, 255, 0.25)',
        'glow-card': '0 8px 30px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'cyber-grid': "radial-gradient(rgba(0, 255, 156, 0.08) 1px, transparent 0)",
        'cyber-gradient': 'linear-gradient(135deg, rgba(0, 255, 156, 0.1) 0%, rgba(0, 210, 255, 0.05) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'terminal-blink': 'blink 1s step-start infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
