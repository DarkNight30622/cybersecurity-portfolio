# 🛡️ Jatin Kumar (Drak) — Premium Cybersecurity Portfolio

A high-performance, dark-themed personal portfolio website engineered specifically for **Jatin Kumar (Drak)**, showcasing practical competencies in **Cybersecurity**, **Vulnerability Assessment and Penetration Testing (VAPT)**, **Network Security**, **SOC Fundamentals**, and **Ethical Hacking**.

Designed with a sleek, recruiter-friendly enterprise cybersecurity aesthetic (deep charcoal `#080B10`, terminal green `#00FF9C`, electric blue `#00D2FF`, subtle scanlines, interactive CLI console, and live telemetry previews).

---

## 🚀 Live Local Development

The development server is actively running at:
```bash
http://localhost:5173/
```

### Commands:
```bash
# Navigate to the project directory
cd /home/drak_night/.gemini/antigravity/scratch/cybersecurity-portfolio

# Start dev server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

---

## 🎯 Architecture & Sections

1. **Navigation Bar**: Responsive glassmorphism header with status indicator (`🟢 Available for Hire`), quick-scroll links, interactive terminal launcher (`Ctrl + K`), and direct resume download button.
2. **Hero Section**:
   - Executive cybersecurity headline, moniker `// DRAK`, and professional titles.
   - Official Tagline: *"Securing Digital Environments Through Offensive Security, Vulnerability Assessment, and Continuous Learning."*
   - Direct CTA buttons: **Download Resume** (serves genuine `Jatin_Kumar_Resume.pdf`), **View Projects**, **Contact Me**.
   - Subtle interactive simulated terminal running system diagnostics and vulnerability probe status.
3. **About Me**:
   - Natural narrative highlighting early-career readiness, MCA in Cybersecurity, peer-reviewed research, and immediate joiner availability.
   - 4 Core Security Pillars: Offensive Security & VAPT, Defensive & SOC Operations, Network Security, and Continuous Research.
   - Quick recruiter factsheet.
4. **Technical Skills**:
   - Tabbed & filterable toolkit: **Offensive Security**, **Network Security**, **Security Operations (SOC)**, and **Programming & Tech**.
   - Search bar for quick tool filtering (e.g. `Burp`, `Nessus`, `Wireshark`, `Python`).
   - Honest candidate disclosure badge distinguishing lab/project SOC competencies from internship experience.
5. **Professional Experience**:
   - **HackTech — Junior Cybersecurity Analyst (Intern)** with accurate responsibilities covering VAPT, OWASP Top 10 web app testing, SIEM log monitoring, and incident response assistance.
6. **Featured Projects**:
   - **Enterprise Automated Vulnerability Scanner** (Python, Nessus, OpenVAS, Burp Suite, Nmap, JIRA API) with GitHub repository link.
   - **30-Day SOC Challenge & Detection Lab** (ELK Stack, Kibana, Sysmon, brute-force simulation).
   - **Zero Trust Security Model Architecture** (Peer-reviewed publication in IJIRT, 2024).
   - **Cybersecurity Labs, CTF & Threat Research** (Amity University HackTech CTF 2024).
   - Interactive modal inspecting simulated console telemetry logs for every project.
7. **Certifications & Continuous Learning**:
   - Verified credentials: **EC-Council Digital Forensics Essentials (DFE)**, **Infosys Springboard Python**, and **NPTEL / IIT Kharagpur Industrial IoT**.
   - Continuous learning & CTF roadmap.
8. **Education**:
   - **MCA (Specialization: Cybersecurity)** — Amity University, Gurgaon (2024 – 2026).
   - **BCA** — Chandigarh University, Mohali (2021 – 2024).
9. **Interactive CLI Console Modal (`Ctrl + K`)**:
   - Embedded cybersecurity shell supporting commands: `help`, `about`, `skills`, `projects`, `exp`, `certs`, `research`, `contact`, `resume`, `whoami`, `clear`, `exit`.
10. **Contact Section**:
    - Call to action: *"Let's Connect and Build a More Secure Digital World."*
    - Direct contact channels with one-click copy for email (`jk016791@gmail.com`) and phone (`+91 79822 79951`).
    - Validated contact form with automatic pre-filled mail client opening and copy-to-clipboard functionality.

---

## 📁 Project Directory Structure
```
cybersecurity-portfolio/
├── public/
│   ├── Jatin_Kumar_Resume.pdf    # Real resume PDF (downloadable)
│   └── resume.pdf                 # Symlinked / duplicate copy
├── src/
│   ├── components/
│   │   ├── About.jsx              # Bio, pillars, recruiter factsheet
│   │   ├── Certifications.jsx     # EC-Council, Infosys, NPTEL
│   │   ├── Contact.jsx            # Form with client validation & channels
│   │   ├── Education.jsx          # MCA & BCA academic cards
│   │   ├── Experience.jsx         # HackTech internship timeline
│   │   ├── Footer.jsx             # Status, legal, back to top
│   │   ├── Hero.jsx               # Headline, animated terminal, CTAs
│   │   ├── Icons.jsx              # Custom SVG brand icons (GitHub, LinkedIn)
│   │   ├── InteractiveTerminalModal.jsx # Ctrl+K CLI console
│   │   ├── Navbar.jsx             # Header, mobile drawer, resume trigger
│   │   ├── Projects.jsx           # Enterprise scanner, SOC lab, Zero Trust
│   │   ├── ScrollProgress.jsx     # Cyber neon scroll progress bar
│   │   └── Toast.jsx              # Feedback toast notifications
│   ├── data/
│   │   └── portfolioData.js       # Centralized, modular portfolio data
│   ├── App.jsx                    # Root component
│   ├── index.css                  # Custom cyber styles, glassmorphism, scrollbars
│   └── main.jsx                   # React root entry
├── index.html                     # SEO metadata, JetBrains Mono font
├── tailwind.config.js             # Cybersecurity color palette (#080B10, #00FF9C)
└── package.json
```
