import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  AlertCircle, 
  ShieldCheck,
  Terminal,
  Clock
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Email format check with standard length & RFC-compatible boundaries
  const validate = () => {
    const errs = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      errs.name = 'Please provide your name';
    } else if (trimmedName.length > 100) {
      errs.name = 'Name must be 100 characters or fewer';
    }

    if (!trimmedEmail) {
      errs.email = 'Please provide your email';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmedEmail)) {
      errs.email = 'Please enter a valid email address';
    } else if (trimmedEmail.length > 120) {
      errs.email = 'Email must be 120 characters or fewer';
    }

    if (!trimmedSubject) {
      errs.subject = 'Please specify a subject';
    } else if (trimmedSubject.length > 150) {
      errs.subject = 'Subject must be 150 characters or fewer';
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      errs.message = 'Please enter a message (at least 10 characters)';
    } else if (trimmedMessage.length > 3000) {
      errs.message = 'Message must be 3000 characters or fewer';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    if (onShowToast) onShowToast("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Defense against CRLF / Header Injection in mailto links:
    // Strip \r and \n from single-line fields
    const sanitizedName = formData.name.replace(/[\r\n]+/g, ' ').trim();
    const sanitizedSubject = formData.subject.replace(/[\r\n]+/g, ' ').trim();

    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${sanitizedSubject}`);
    const bodyText = `Hello Jatin,\n\nMy name is ${sanitizedName} (${formData.email.trim()}).\n\n${formData.message.trim()}\n\nBest regards,\n${sanitizedName}`;
    const bodyEncoded = encodeURIComponent(bodyText);
    
    let mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Browser URL length safety check: mailto URIs > 1900 chars can silently fail in OS handlers
    if (mailtoUrl.length > 1900) {
      navigator.clipboard.writeText(bodyText);
      const shortBody = encodeURIComponent(`Hello Jatin,\n\n(Full message was copied to your clipboard due to length limits!)\n\nFrom: ${sanitizedName} (${formData.email.trim()})`);
      mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${shortBody}`;
      if (onShowToast) {
        onShowToast("Full message copied to clipboard! Opening mail client...");
      }
    } else if (onShowToast) {
      onShowToast("Opening your default mail client with pre-filled message...");
    }

    window.location.href = mailtoUrl;
  };

  const handleCopyFormattedMessage = () => {
    if (!validate()) return;
    const sanitizedName = formData.name.replace(/[\r\n]+/g, ' ').trim();
    const sanitizedSubject = formData.subject.replace(/[\r\n]+/g, ' ').trim();
    const formatted = `To: ${personalInfo.email}\nSubject: [Portfolio Inquiry] ${sanitizedSubject}\nFrom: ${sanitizedName} (${formData.email.trim()})\n\nMessage:\n${formData.message.trim()}`;
    navigator.clipboard.writeText(formatted);
    if (onShowToast) {
      onShowToast("Formatted message copied to clipboard! Paste directly into your email.");
    }
  };

  return (
    <section id="contact" className="py-20 relative border-t border-cyber-border/60 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-green tracking-wider uppercase">
            <span>&lt;07_communication&gt;</span>
            <div className="w-12 h-px bg-cyber-green/40" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect and Build a More <span className="text-cyber-green">Secure Digital World</span>.
          </h2>
          <p className="text-cyber-muted text-sm sm:text-base max-w-2xl">
            Currently open to entry-level cybersecurity analyst, VAPT, SOC Tier-1, and security engineering roles across India (on-site, hybrid, or remote). Immediate joiner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="cyber-card-glass p-6 sm:p-7 rounded-xl border border-cyber-border space-y-5">
              <h3 className="text-lg font-bold font-mono text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyber-green" />
                <span>Direct Contact Channels</span>
              </h3>

              <div className="space-y-4 text-xs font-mono">
                {/* Email */}
                <div className="p-3.5 rounded-lg bg-[#090D14] border border-cyber-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyber-green flex-shrink-0" />
                    <div>
                      <span className="text-[10px] text-cyber-dim block">EMAIL ADDRESS</span>
                      <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-cyber-green transition-colors font-medium">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded bg-cyber-card border border-cyber-border hover:border-cyber-green text-cyber-muted hover:text-white transition-colors"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-3.5 h-3.5 text-cyber-green" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-lg bg-[#090D14] border border-cyber-border flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyber-blue flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-cyber-dim block">PHONE NUMBER</span>
                    <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-white hover:text-cyber-blue transition-colors font-medium">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-lg bg-[#090D14] border border-cyber-border flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-cyber-dim block">LOCATION &amp; MOBILITY</span>
                    <span className="text-white font-medium">{personalInfo.location}</span>
                    <span className="text-cyber-dim text-[11px] block mt-0.5">Willing to relocate across India / Remote ready</span>
                  </div>
                </div>

                {/* Availability Notice */}
                <div className="p-3.5 rounded-lg bg-cyber-green/10 border border-cyber-green/30 flex items-center gap-3">
                  <Clock className="w-4 h-4 text-cyber-green flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-cyber-green font-bold block uppercase">AVAILABILITY STATUS</span>
                    <span className="text-slate-200 text-xs font-sans">Immediate Joiner • Ready for technical interviews</span>
                  </div>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="pt-4 border-t border-cyber-border/60">
                <span className="text-xs font-mono text-cyber-dim block mb-3">
                  Professional Profiles:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[#090D14] border border-cyber-border hover:border-cyber-blue flex items-center gap-2.5 text-xs font-mono text-cyber-text hover:text-white transition-colors group"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyber-blue group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[#090D14] border border-cyber-border hover:border-cyber-green flex items-center gap-2.5 text-xs font-mono text-cyber-text hover:text-white transition-colors group"
                  >
                    <GithubIcon className="w-4 h-4 text-cyber-green group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="cyber-card-glass p-6 sm:p-7 rounded-xl border border-cyber-border space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-cyber-border/70">
                <div className="flex items-center gap-2 font-mono text-xs text-cyber-dim">
                  <Terminal className="w-4 h-4 text-cyber-green" />
                  <span>TRANSMIT_MESSAGE // FORM</span>
                </div>
                <span className="text-[11px] font-mono text-cyber-green bg-cyber-green/10 px-2 py-0.5 rounded border border-cyber-green/20">
                  Client-side Validated
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                {/* Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="text-xs font-mono text-cyber-text flex items-center justify-between">
                      <span>Your Name *</span>
                      {errors.name && <span id="name-error" className="text-cyber-red text-[10px]">{errors.name}</span>}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      maxLength={100}
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#090D13] border text-xs sm:text-sm text-white font-mono focus:outline-none transition-colors ${
                        errors.name ? 'border-cyber-red focus:border-cyber-red' : 'border-cyber-border focus:border-cyber-green'
                      }`}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="text-xs font-mono text-cyber-text flex items-center justify-between">
                      <span>Your Email *</span>
                      {errors.email && <span id="email-error" className="text-cyber-red text-[10px]">{errors.email}</span>}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      maxLength={120}
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#090D13] border text-xs sm:text-sm text-white font-mono focus:outline-none transition-colors ${
                        errors.email ? 'border-cyber-red focus:border-cyber-red' : 'border-cyber-border focus:border-cyber-green'
                      }`}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label htmlFor="contact-subject" className="text-xs font-mono text-cyber-text flex items-center justify-between">
                    <span>Subject / Opportunity *</span>
                    {errors.subject && <span id="subject-error" className="text-cyber-red text-[10px]">{errors.subject}</span>}
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    maxLength={150}
                    placeholder="e.g. Entry-Level VAPT / SOC Analyst Role Opportunity"
                    value={formData.subject}
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: null });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#090D13] border text-xs sm:text-sm text-white font-mono focus:outline-none transition-colors ${
                      errors.subject ? 'border-cyber-red focus:border-cyber-red' : 'border-cyber-border focus:border-cyber-green'
                    }`}
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="contact-message" className="text-xs font-mono text-cyber-text flex items-center justify-between">
                    <span>Message *</span>
                    {errors.message && <span id="message-error" className="text-cyber-red text-[10px]">{errors.message}</span>}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    maxLength={3000}
                    placeholder="Provide details about the role, project, or schedule an interview..."
                    value={formData.message}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#090D13] border text-xs sm:text-sm text-white font-mono focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-cyber-red focus:border-cyber-red' : 'border-cyber-border focus:border-cyber-green'
                    }`}
                  />
                </div>

                {/* Honest Transmission Notice */}
                <div className="p-3 rounded-lg bg-[#080B10] border border-cyber-border/70 text-[11px] font-mono text-cyber-dim flex items-start gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-cyber-green flex-shrink-0 mt-0.5" />
                  <span>
                    Submitting validates your inputs and immediately opens your default mail client pre-populated, ensuring zero lost messages or silent form drops.
                  </span>
                </div>

                {/* Form Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-3 rounded-lg bg-cyber-green hover:bg-cyber-greenDark text-black font-mono text-xs sm:text-sm font-bold transition-all shadow-glow-green focus-visible:ring-2 focus-visible:ring-cyber-green"
                  >
                    <Send className="w-4 h-4 stroke-[2.5]" />
                    <span>Send Message (Email Client)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyFormattedMessage}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-blue text-white font-mono text-xs sm:text-sm transition-colors focus-visible:ring-2 focus-visible:ring-cyber-blue"
                  >
                    <Copy className="w-4 h-4 text-cyber-blue" />
                    <span>Copy Text to Clipboard</span>
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
