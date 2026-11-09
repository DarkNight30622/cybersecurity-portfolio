export const personalInfo = {
  name: "Jatin Kumar",
  alias: "Drak",
  title: "Aspiring Cybersecurity Analyst | VAPT Enthusiast | MCA Graduate",
  subtitles: [
    "Cybersecurity Fresher",
    "VAPT Enthusiast",
    "SOC Fundamentals Learner",
    "Immediate Joiner"
  ],
  tagline: "Eager to contribute strong security fundamentals, hands-on lab practice, and continuous learning to an entry-level security team.",
  status: "Fresher / Entry-Level • Immediate Joiner",
  availability: "Open to on-site, hybrid, and remote entry-level cybersecurity roles across India",
  email: "jk016791@gmail.com",
  phone: "+91 79822 79951",
  location: "Delhi, India",
  github: "https://github.com/DarkNight30622",
  githubUsername: "DarkNight30622",
  linkedin: "https://www.linkedin.com/in/jatin0011",
  resumePath: "/Jatin_Kumar_Resume.pdf",
  bio: `I am an MCA graduate with a strong interest in Cybersecurity, Vulnerability Assessment and Penetration Testing (VAPT), and Network Security. I have practical exposure to security testing methodologies and cybersecurity tools through my internship and independent projects.

I enjoy exploring security vulnerabilities, understanding attack techniques, strengthening defensive security practices, and continuously improving my technical knowledge. As a fresher, I bring a solid foundation in computer networks, operating systems, and ethical hacking tools, and I am excited to learn and contribute to a professional security team.`,
  stats: [
    { label: "Academic Degree", value: "MCA", icon: "GraduationCap", desc: "Cybersecurity Specialization" },
    { label: "CTF Competitions", value: "Amity 2024", icon: "Flag", desc: "HackTech CTF Participant" },
    { label: "Verified Certificates", value: "4+", icon: "Award", desc: "CTF, CEH, DFE & Python" },
    { label: "Availability", value: "Immediate", icon: "Clock", desc: "Ready to join" },
  ]
};

export const skillsData = {
  offensive: {
    category: "Offensive Security & VAPT",
    icon: "Target",
    badge: "Testing & Tools",
    description: "Hands-on lab practice in vulnerability discovery, web app testing, and basic penetration testing workflows.",
    skills: [
      { name: "Kali Linux", level: "Hands-on", type: "Environment", desc: "Daily OS for security labs, network exploration, and CLI tools" },
      { name: "Burp Suite", level: "Hands-on", type: "Web Security", desc: "HTTP traffic interception, repeater testing, and basic request tampering" },
      { name: "Nmap", level: "Hands-on", type: "Network Recon", desc: "Host discovery, port scanning techniques, and service version detection" },
      { name: "Nessus", level: "Practiced", type: "Vulnerability Scanner", desc: "Running automated policy scans and reviewing vulnerability reports" },
      { name: "OpenVAS", level: "Practiced", type: "Vulnerability Scanner", desc: "Open-source vulnerability scanning and basic audit reporting" },
      { name: "OWASP Top 10", level: "Foundational", type: "Security Concepts", desc: "Understanding common risks (SQLi, XSS, CSRF, broken access control)" },
      { name: "Vulnerability Assessment", level: "Foundational", type: "Methodology", desc: "Identifying vulnerabilities, checking CVE references, risk categorization" },
      { name: "Metasploit Basics", level: "Working Knowledge", type: "Testing Framework", desc: "Exploring known exploit modules and payload mechanics in test environments" },
    ]
  },
  network: {
    category: "Network Security & Protocols",
    icon: "Network",
    badge: "Core Foundations",
    description: "Solid conceptual and diagnostic understanding of network communication protocols and packet analysis.",
    skills: [
      { name: "TCP/IP & OSI Model", level: "Foundational", type: "Architecture", desc: "3-way handshakes, IP addressing, subnetting, protocol layering" },
      { name: "DNS & DHCP", level: "Foundational", type: "Protocols", desc: "Domain resolution workflows, query types, and common DNS security issues" },
      { name: "HTTP / HTTPS", level: "Hands-on", type: "Application", desc: "Request/response headers, status codes, cookies, SSL/TLS handshake basics" },
      { name: "Wireshark", level: "Hands-on", type: "Packet Analysis", desc: "Capturing packets, applying display filters, and inspecting unencrypted traffic" },
      { name: "Network Scanning", level: "Hands-on", type: "Diagnostics", desc: "Port mapping, discovering active hosts, and analyzing responses" },
      { name: "Network Troubleshooting", level: "Practiced", type: "Diagnostics", desc: "Using ping, traceroute, netstat, and curl for connectivity diagnostics" },
    ]
  },
  soc: {
    category: "Security Operations (SOC)",
    icon: "ShieldAlert",
    badge: "Lab & Project Based Knowledge",
    note: "Presented honestly as self-directed lab learning and academic exploration, not enterprise years of service.",
    description: "Foundational concepts in defensive monitoring, log analysis, and incident workflow.",
    skills: [
      { name: "SOC Fundamentals", level: "Knowledge Area", type: "Operations", desc: "Role of Tier-1 analysts, alert lifecycles, and notification escalation" },
      { name: "SIEM Basics (ELK)", level: "Project-Based", type: "Log Aggregation", desc: "Setting up Elasticsearch, Logstash, and Kibana to view forwarded logs" },
      { name: "Alert Triage Concepts", level: "Knowledge Area", type: "Analysis", desc: "Reviewing triggered alerts, checking source IPs, filtering false positives" },
      { name: "Incident Response Basics", level: "Knowledge Area", type: "Framework", desc: "Understanding the NIST IR cycle: containment, investigation, reporting" },
      { name: "Log Analysis Concepts", level: "Lab-Based", type: "Investigation", desc: "Examining Windows Event IDs (Logon/Failure) and Linux auth.log" },
      { name: "MITRE ATT&CK Mapping", level: "Familiarity", type: "Threat Model", desc: "Understanding common adversarial techniques and attack steps" },
    ]
  },
  technologies: {
    category: "Programming & Tools",
    icon: "Code2",
    badge: "Scripting & Systems",
    description: "Programming languages, scripts, and environments used for security automation and labs.",
    skills: [
      { name: "Python", level: "Proficient", type: "Scripting", desc: "Writing automation scripts, socket connections, and parsing scan outputs" },
      { name: "Linux (Kali / Ubuntu)", level: "Hands-on", type: "Operating System", desc: "Command line proficiency, permissions, package management, bash commands" },
      { name: "Bash Scripting", level: "Practiced", type: "Automation", desc: "Automating repetitive terminal tasks and simple file manipulation" },
      { name: "SQL Basics", level: "Foundational", type: "Database", desc: "Basic SQL queries and understanding how SQL injection exploits work" },
      { name: "Git & GitHub", level: "Hands-on", type: "Version Control", desc: "Repository management, commits, and sharing project source code" },
      { name: "Windows Server Basics", level: "Lab-Based", type: "Operating System", desc: "Navigating Windows Server in virtual lab setups, basic event viewer" },
      { name: "Docker Basics", level: "Working Knowledge", type: "Containers", desc: "Running vulnerable target containers for local testing practice" },
    ]
  }
};

export const experienceData = [
  {
    company: "HackTech",
    position: "Junior Cybersecurity Analyst – Intern",
    period: "Jun 2025 – Jul 2025",
    type: "Internship",
    location: "India",
    summary: "Cybersecurity internship focused on learning security assessment fundamentals, assisting with vulnerability scans, and understanding web application security testing.",
    responsibilities: [
      "Assisted in vulnerability assessments and basic penetration testing across client web applications and network infrastructure under senior guidance.",
      "Documented identified security findings by severity level (High/Medium/Low) for structured remediation reports.",
      "Gained exposure to security monitoring concepts and observed log analysis and alert triage workflows.",
      "Participated in threat research meetings to understand common attack vectors and recommended remediation steps.",
      "Applied tools like Nessus, Burp Suite, and Nmap in controlled assessment tasks."
    ],
    tools: ["Nessus", "Burp Suite", "Nmap", "Wireshark", "OWASP Top 10", "Linux"]
  }
];

export const projectsData = [
  {
    id: "vuln-scanner",
    title: "Vulnerability Scanning & Reporting Tool",
    type: "Personal / Academic Project (Python)",
    badge: "Python & Security Automation",
    github: "https://github.com/DarkNight30622/enterprise-vulnerability-scanner",
    summary: "A Python script created to automate network discovery and vulnerability scanning by interacting with Nmap, OpenVAS, and Nessus tools.",
    points: [
      "Wrote modular Python scripts to automate target port scanning and service fingerprinting via Nmap.",
      "Parsed scan output data to organize vulnerabilities by severity level for easier reading.",
      "Generated structured reports (JSON / CSV / PDF) to practice standard vulnerability documentation."
    ],
    tags: ["Python", "Nmap", "Nessus", "OpenVAS", "Vulnerability Assessment", "Automation"],
    terminalPreview: `$ python scanner.py --target 192.168.1.10 --ports common
[+] Starting scan on host: 192.168.1.10
[+] Discovered open ports: 22 (SSH), 80 (HTTP), 443 (HTTPS)
[+] Running basic banner grab...
[!] HTTP Server: Apache/2.4.41 (Ubuntu)
[+] Correlating findings: 1 Medium, 3 Low vulnerabilities found
[✓] Output saved to: scan_report.json`
  },
  {
    id: "soc-lab",
    title: "SOC Home Lab & Log Monitoring Practice",
    type: "Self-Study Lab Project",
    badge: "Defensive Learning & ELK",
    github: null,
    summary: "A virtual home lab built using the ELK Stack to observe system events, simulate basic brute-force attempts, and practice analyzing log files.",
    points: [
      "Deployed Elasticsearch, Logstash, and Kibana in a virtualized lab environment.",
      "Configured a Windows virtual machine and forwarded event logs to understand telemetry collection.",
      "Simulated basic failed login attempts in a controlled setup to examine Event ID 4625 (Logon Failure) in Kibana.",
      "Created simple visualization dashboards to see how SOC analysts track repeated authentication failures."
    ],
    tags: ["ELK Stack", "Kibana", "Windows Event Logs", "Sysmon", "Lab Simulation", "Log Analysis"],
    terminalPreview: `[Virtual Lab - Logstash Ingestion]
Event ID 4625: An account failed to log on.
Account Name: Administrator | Workstation Name: LAB-WIN10
Failure Reason: Unknown user name or bad password
Log parsed successfully and indexed in Kibana dashboard.`
  },
  {
    id: "zero-trust",
    title: "Zero Trust Security Model Architecture",
    type: "Academic Research Paper (IJIRT, 2024)",
    badge: "Peer-Reviewed Paper",
    github: null,
    publication: {
      journal: "International Journal of Innovative Research in Technology (IJIRT)",
      year: "2024",
      status: "Peer-Reviewed Published Paper",
      paperTitle: "Zero Trust Security Model in Cybersecurity Today: Architectures, Operations and Implementation Strategies"
    },
    summary: "An academic research paper authored during MCA studies exploring the principles of Zero Trust Architecture (ZTA) in modern networks.",
    points: [
      "Researched key principles of Zero Trust: verify explicitly, least privilege access, and assume breach.",
      "Studied Identity and Access Management (IAM), micro-segmentation, and dynamic access control concepts.",
      "Published as a peer-reviewed academic contribution in IJIRT (2024)."
    ],
    tags: ["Zero Trust", "IAM", "Micro-segmentation", "Research", "IJIRT Journal", "MCA Studies"],
    terminalPreview: `[IJIRT 2024 Research Summary]
Paper Title: "Zero Trust Security Model in Cybersecurity Today: Architectures, Operations and Implementation Strategies"
Key Concepts: Least Privilege Access, Continuous Verification, Micro-segmentation.
Status: Peer-Reviewed Publication (2024)`
  },
  {
    id: "ctf-labs",
    title: "HackTech @ Amity University CTF Challenge",
    type: "Practical Competition (2024)",
    badge: "CTF Competition",
    github: null,
    certificatePdf: "/certificates/ctf-hacktech-amity-2024.pdf",
    certificateImg: "/certificates/ctf_preview-1.png",
    certificateId: "9ca90142-8128-4b60-93c6-d397c6a75800",
    summary: "Participated in the university-level Capture The Flag (CTF) competition held by HackTech at Amity University Haryana.",
    points: [
      "Worked through beginner to intermediate challenges in web exploitation, cryptography, and OSINT.",
      "Practiced identifying input flaws like basic SQL Injection and parameter tampering under time limits.",
      "Earned official Certificate of Participation (Certificate No. 9ca90142-8128-4b60-93c6-d397c6a75800)."
    ],
    tags: ["CTF", "Amity University", "HackTech", "Web Exploitation", "Cryptography", "OSINT"],
    terminalPreview: `[Amity University CTF 2024]
Event: Capture The Flag (CTF) Challenge 2024
Organizer: HackTech @ Amity University Haryana
Participant: Jatin Kumar
Certificate No: 9ca90142-8128-4b60-93c6-d397c6a75800
Status: Verified Certificate of Participation`
  }
];

export const certificationsData = [
  {
    id: "ctf-amity",
    name: "Capture The Flag (CTF) Challenge 2024",
    issuer: "HACKTECH @ Amity University Haryana",
    year: "Sep 2024",
    badge: "Participation Certificate",
    type: "Practical CTF Competition",
    certificateNo: "9ca90142-8128-4b60-93c6-d397c6a75800",
    pdfUrl: "/certificates/ctf-hacktech-amity-2024.pdf",
    previewImg: "/certificates/ctf_preview-1.png",
    status: "Verified Certificate",
    hasViewableCert: true,
    description: "Official Certificate of Participation in the Capture The Flag (CTF) Challenge 2024 organized by HACKTECH at Amity University Haryana on 19th September 2024.",
    skillsLearned: ["Web Exploitation", "Cryptography", "OSINT", "Hands-on CTF Problem Solving"]
  },
  {
    id: "ceh-hacktech",
    name: "Certified Ethical Hacker (CEH) Program",
    issuer: "HACKTECH",
    year: "2024 - 2026",
    badge: "Completion Certificate",
    type: "Ethical Hacking & VAPT",
    certificateNo: "HT-CEH-2026-9a6a0a7",
    pdfUrl: "/certificates/hacktech-certified-ethical-hacker.pdf",
    previewImg: "/certificates/ceh_preview-1.png",
    status: "Verified Credential",
    hasViewableCert: true,
    description: "Successfully completed the HACKTECH Certified Ethical Hacker program demonstrating foundational knowledge in ethical hacking, network security, vulnerability assessment, and web security.",
    skillsLearned: ["Ethical Hacking Basics", "Vulnerability Assessment", "Penetration Testing Concepts", "Web App Security"]
  },
  {
    id: "dfe",
    name: "Digital Forensics Essentials (DFE)",
    issuer: "EC-Council",
    year: "2024",
    badge: "Official Certification",
    type: "Digital Forensics",
    status: "Verified",
    hasViewableCert: false,
    description: "Foundational training in digital forensics principles, digital evidence acquisition, chain of custody, and computer investigation fundamentals.",
    skillsLearned: ["Digital Evidence Basics", "Chain of Custody", "File System Forensics", "Investigation Procedures"]
  },
  {
    id: "python",
    name: "The Complete Python Course",
    issuer: "Infosys Springboard",
    year: "2023",
    badge: "Course Completion",
    type: "Programming",
    status: "Verified",
    hasViewableCert: false,
    description: "Completed comprehensive Python programming course covering data structures, object-oriented concepts, and scripting.",
    skillsLearned: ["Python Basics", "Scripting", "Data Structures", "Problem Solving"]
  },
  {
    id: "iiot",
    name: "Introduction to Industry 4.0 & Industrial IoT",
    issuer: "NPTEL, IIT Kharagpur",
    year: "2022",
    badge: "NPTEL Certificate",
    type: "IoT & Networking",
    status: "Verified",
    hasViewableCert: false,
    description: "Covers foundational concepts of IoT architectures, communication protocols, sensor networks, and cyber-physical systems.",
    skillsLearned: ["IoT Protocols", "Network Architecture", "Sensor Networks"]
  }
];

export const continuousLearningRoadmap = [
  {
    title: "Amity University HackTech CTF 2024",
    category: "Competition Completed",
    detail: "Earned Certificate of Participation solving real-time web exploitation and crypto challenges."
  },
  {
    title: "Virtual SOC Practice Lab",
    category: "Hands-on Practice",
    detail: "Home ELK lab analyzing event logs and learning detection fundamentals."
  },
  {
    title: "CompTIA Security+ / CEH Pathway",
    category: "Ongoing Study",
    detail: "Continuously reviewing core networking, threat analysis, and security principles."
  }
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    specialization: "Cybersecurity",
    institution: "Amity University",
    location: "Gurgaon, India",
    period: "2024 – Present",
    status: "Pursuing (Final Year)",
    badge: "Postgraduate Degree",
    highlights: [
      "Specializing in Cybersecurity coursework including Network Security, Cryptography, and Security Methodologies.",
      "Authored a peer-reviewed research paper on Zero Trust Security Architectures (IJIRT 2024).",
      "Participated in collegiate cybersecurity events including the HackTech CTF 2024."
    ]
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    specialization: "Computer Applications",
    institution: "Chandigarh University",
    location: "Mohali, India",
    period: "2021 – 2024",
    status: "Graduated",
    badge: "Undergraduate Degree",
    highlights: [
      "Strong computer science fundamentals: Computer Networks, Operating Systems, Database Management Systems (SQL), and Data Structures.",
      "Learned Python programming and completed an NPTEL certification with IIT Kharagpur during undergrad."
    ]
  }
];

export const terminalCommands = {
  help: `Available Commands:
  • about       - Display bio & fresher background
  • skills      - Display technical skills & tools
  • exp         - View HackTech internship details
  • projects    - List personal & academic projects
  • certs       - View verified certificates (CTF, CEH, DFE)
  • contact     - Display contact details
  • resume      - Download official resume PDF
  • whoami      - Display current visitor status
  • clear       - Clear terminal output`,
  
  about: `JATIN KUMAR (Drak)
Role: Aspiring Cybersecurity Analyst | VAPT Enthusiast
Status: Fresher / Entry-Level (Immediate Joiner)
Education: MCA in Cybersecurity (Amity University) & BCA (Chandigarh University)
Summary: Enthusiastic fresher with hands-on practice in VAPT tools, internship exposure,
and a published paper on Zero Trust. Ready to learn and grow in an entry-level security role.`,

  whoami: `visitor@drak-sec-portfolio:~$
Identity: Recruiter / Security Team Lead / Peer
Status: Jatin Kumar is actively seeking entry-level SOC / VAPT roles across India!`,

  contact: `CONNECT WITH JATIN KUMAR:
  Email:    jk016791@gmail.com
  Phone:    +91 79822 79951
  LinkedIn: https://linkedin.com/in/jatin0011
  GitHub:   https://github.com/DarkNight30622
  Location: Delhi, India (Open to On-site / Remote / Hybrid)`,

  exp: `PROFESSIONAL EXPERIENCE:
  Company:  HackTech
  Role:     Junior Cybersecurity Analyst – Intern (Jun 2025 – Jul 2025)
  Focus:    Assisted in vulnerability assessments, documented findings, 
            and observed daily SOC monitoring workflows.`,

  skills: `CORE SKILLS & TOOLS:
  [+] Offensive: Kali Linux, Burp Suite, Nmap, Nessus, OpenVAS, OWASP Top 10 Basics
  [+] Network:   TCP/IP, DNS, HTTP/HTTPS, Wireshark, Basic Troubleshooting
  [+] Blue Team: SOC Fundamentals, ELK Stack Home Lab, Event Log Analysis Basics
  [+] Dev/Tools: Python, Linux CLI, Bash Basics, SQL, Git & GitHub`,

  projects: `PRACTICAL PROJECTS & LABS:
  1. Vulnerability Scanning & Reporting Tool (Python)
     • Modular Python scripts automating Nmap scans & vulnerability parsing
     • GitHub: https://github.com/DarkNight30622/enterprise-vulnerability-scanner

  2. SOC Home Lab & Detection Practice
     • Virtual ELK Stack setup analyzing Windows event logs (Event ID 4625)
     • Practice monitoring simulated brute-force attempts in Kibana

  3. Zero Trust Security Model Architecture (Published Research)
     • Academic research on IAM, continuous verification & micro-segmentation
     • Published in IJIRT (Peer-Reviewed, 2024)

  4. HackTech @ Amity University CTF Challenge 2024
     • Solved challenges in web exploitation, cryptography, and OSINT
     • Verified Certificate No.: 9ca90142-8128-4b60-93c6-d397c6a75800`,

  certs: `VERIFIED CERTIFICATIONS:
  1. Capture The Flag (CTF) Challenge 2024 - HackTech @ Amity University
     (Certificate No.: 9ca90142-8128-4b60-93c6-d397c6a75800)
  2. Certified Ethical Hacker (CEH) Program - HackTech
     (Certificate ID: HT-CEH-2026-9a6a0a7)
  3. Digital Forensics Essentials (DFE) - EC-Council (2024)
  4. The Complete Python Course - Infosys Springboard (2023)
  5. Intro to Industry 4.0 & Industrial IoT - NPTEL, IIT Kharagpur (2022)`,

  education: `ACADEMIC BACKGROUND:
  • Master of Computer Applications (MCA) - Cybersecurity Specialization
    Amity University, Gurgaon (2024 – Present)
  • Bachelor of Computer Applications (BCA)
    Chandigarh University, Mohali (2021 – 2024)`,

  ctf: `HACKTECH @ AMITY UNIVERSITY CTF 2024:
  • Event: Capture The Flag (CTF) Challenge 2024
  • Date: 19th September 2024 (Issue Date: 2024-09-22)
  • Certificate No: 9ca90142-8128-4b60-93c6-d397c6a75800
  • Focus: Web exploitation (SQLi/XSS), cryptography, and OSINT.
  • Verified Certificate available in Certifications section!`,

  research: `PUBLISHED RESEARCH PAPER:
  • Title: "Zero Trust Security Model in Cybersecurity Today: Architectures, Operations and Implementation Strategies"
  • Journal: IJIRT, 2024 (Peer-Reviewed)
  • Focus: IAM, continuous verification, micro-segmentation, and least-privilege principles.`,

  ls: `drwxr-xr-x  about/
drwxr-xr-x  skills/
drwxr-xr-x  exp/
drwxr-xr-x  projects/
drwxr-xr-x  certs/
drwxr-xr-x  education/
-rw-r--r--  resume.pdf
-rw-r--r--  contact.txt
Type any category name to inspect.`,
};
