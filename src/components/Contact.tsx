import React, { useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('Full Stack Developer Opportunity / Inquiry');
  const [message, setMessage] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className={`py-20 relative transition-colors ${darkMode ? 'bg-slate-950/90' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Let's Build Something <span className="text-gradient">Together</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Interested in working together or discussing an opportunity? Feel free to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 sm:p-8 rounded-2xl border space-y-6 ${
              darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className="space-y-2">
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Direct Contact Information
                </h3>
                <p className="text-xs text-slate-400">
                  I am actively seeking full-time Python Full Stack Developer roles and engineering opportunities.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Primary Email</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-indigo-400 truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex-shrink-0"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                {/* Response Time Box */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Response Time</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200">
                      Typically within 24 hours
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Social Profiles */}
              <div className="pt-4 border-t border-slate-800/60 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  Verified Social Links:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white transition-all duration-200"
                  >
                    <Github className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-semibold">GitHub Profile</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white transition-all duration-200"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-semibold">LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Mail Composer */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            } space-y-6`}>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Send a Direct Email
                  </h3>
                  <p className="text-xs text-slate-400">
                    Composes a direct message to {personalInfo.email} via your preferred email app.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-200'
                        : 'bg-slate-50 border-slate-300 text-slate-800'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1">
                    Message Body
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Kunal, I reviewed your Python Full Stack portfolio and would love to discuss a developer role at..."
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-200 placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 text-slate-800 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                    <span>Launch Email Client</span>
                  </button>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs text-indigo-400 hover:text-indigo-300 underline font-mono"
                  >
                    Or click here to open mailto link directly
                  </a>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
