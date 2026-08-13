import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  MapPin,
  GraduationCap,
  Sparkles,
  Terminal,
  CheckCircle2,
  Copy,
  Check,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  darkMode: boolean;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const codeSnippet = `# Python Full Stack Developer - Kunal R. Jadhav
from rest_framework import status, views
from rest_framework.response import Response

class PortfolioProfileView(views.APIView):
    """API endpoint exposing Kunal's stack & credentials"""
    def get(self, request):
        return Response({
            "developer": "${personalInfo.name}",
            "role": "${personalInfo.role}",
            "degree": "${personalInfo.degree} (${personalInfo.graduationYear})",
            "location": "${personalInfo.location}",
            "primary_stack": ["Python", "Django", "React.js", "PostgreSQL", "REST APIs"],
            "status": "Ready for Full-Time Engineering Roles"
        }, status=status.HTTP_200_OK)`;

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Decorative Mesh & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-2/3 left-10 w-[250px] h-[250px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Full-Time Roles • 2026 CS Graduate</span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-indigo-400 tracking-tight flex items-center gap-2">
                <Code2 className="w-6 h-6 text-indigo-400" />
                <span>{personalInfo.role}</span>
              </h2>
            </div>

            {/* Sub-Badges (Location & Education) */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                <span>2026 B.Tech CS Engineer</span>
              </div>
            </div>

            {/* Short Introduction Paragraph */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {personalInfo.heroBio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-200 ${
                  darkMode
                    ? 'bg-slate-900 text-slate-100 border-slate-800 hover:border-slate-700 hover:bg-slate-800'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                }`}
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Resume Summary</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-slate-800/60">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect:
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className={`p-2.5 rounded-xl border transition-all duration-200 ${
                    darkMode
                      ? 'bg-slate-900/80 text-slate-300 border-slate-800 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className={`p-2.5 rounded-xl border transition-all duration-200 ${
                    darkMode
                      ? 'bg-slate-900/80 text-slate-300 border-slate-800 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-800'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-sky-600 hover:bg-slate-200'
                  }`}
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className={`p-2.5 rounded-xl border transition-all duration-200 ${
                    darkMode
                      ? 'bg-slate-900/80 text-slate-300 border-slate-800 hover:text-amber-400 hover:border-amber-500/50 hover:bg-slate-800'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-amber-600 hover:bg-slate-200'
                  }`}
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy Email Address"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border transition-all duration-200 ${
                    darkMode
                      ? 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  }`}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{personalInfo.email}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Code Snippet Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-950/90 shadow-2xl overflow-hidden glass-card group">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    developer_profile.py
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Django REST API
                </span>
              </div>

              {/* Terminal Code Body */}
              <div className="p-4 sm:p-5 text-xs sm:text-sm font-mono overflow-x-auto text-slate-300 leading-relaxed">
                <pre className="text-slate-300 font-mono">
                  <code>
                    <span className="text-purple-400">from</span> rest_framework <span className="text-purple-400">import</span> status, views{'\n'}
                    <span className="text-purple-400">from</span> rest_framework.response <span className="text-purple-400">import</span> Response{'\n\n'}
                    <span className="text-blue-400">class</span> <span className="text-amber-300">PortfolioProfileView</span>(views.APIView):{'\n'}
                    {'    '}<span className="text-emerald-400">"""Kunal's Full Stack Stack & Credentials API"""</span>{'\n'}
                    {'    '}<span className="text-blue-400">def</span> <span className="text-sky-300">get</span>(self, request):{'\n'}
                    {'        '}<span className="text-purple-400">return</span> Response(&#123;{'\n'}
                    {'            '}<span className="text-amber-200">"developer"</span>: <span className="text-emerald-300">"{personalInfo.name}"</span>,{'\n'}
                    {'            '}<span className="text-amber-200">"role"</span>: <span className="text-emerald-300">"{personalInfo.role}"</span>,{'\n'}
                    {'            '}<span className="text-amber-200">"degree"</span>: <span className="text-emerald-300">"{personalInfo.graduationYear} CS Graduate"</span>,{'\n'}
                    {'            '}<span className="text-amber-200">"location"</span>: <span className="text-emerald-300">"Pune, MH, India"</span>,{'\n'}
                    {'            '}<span className="text-amber-200">"stack"</span>: [<span className="text-sky-300">"Python"</span>, <span className="text-sky-300">"Django"</span>, <span className="text-sky-300">"React.js"</span>, <span className="text-sky-300">"PostgreSQL"</span>],{'\n'}
                    {'            '}<span className="text-amber-200">"status"</span>: <span className="text-emerald-300">"HTTP_200_OK_HIRE_READY"</span>{'\n'}
                    {'        '}&#123;, status=status.HTTP_200_OK)
                  </code>
                </pre>
              </div>

              {/* Terminal Footer Info */}
              <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  API Status: 200 OK
                </span>
                <span className="text-slate-400">Response time: 24ms</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
