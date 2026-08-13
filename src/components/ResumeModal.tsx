import React from 'react';
import { X, Mail, Github, Linkedin, MapPin, GraduationCap, Briefcase, Award, CheckCircle2, Download, Printer } from 'lucide-react';
import { personalInfo, experience, education, certifications, skillCategories } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, darkMode }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 shadow-2xl ${
          darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/60 mb-6 print:hidden">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Recruiter Quick Summary
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="space-y-6">
          {/* Header Info */}
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {personalInfo.name}
            </h2>
            <p className="text-base font-semibold text-indigo-400">
              {personalInfo.role} • 2026 B.Tech CS Engineer
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-400 font-mono pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {personalInfo.location}
              </span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:text-indigo-400">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                {personalInfo.email}
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-indigo-400">
                <Github className="w-3.5 h-3.5 text-indigo-400" />
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-indigo-400">
                <Linkedin className="w-3.5 h-3.5 text-indigo-400" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2 pt-4 border-t border-slate-800/60">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
              Executive Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.heroBio}
            </p>
          </div>

          {/* Technical Skills Overview */}
          <div className="space-y-3 pt-4 border-t border-slate-800/60">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
              Technical Skill Matrix
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-2.5 rounded-xl bg-slate-950/50 border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-1">{cat.title}:</span>
                  <p className="text-slate-400 font-mono text-[11px] leading-relaxed">
                    {cat.skills.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3 pt-4 border-t border-slate-800/60">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-indigo-400" />
              Work History
            </h3>
            {experience.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-200">{exp.role} — {exp.company}</h4>
                  <span className="text-[11px] font-mono text-slate-400">{exp.location}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3 pt-4 border-t border-slate-800/60">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              Education
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {education.map((edu) => (
                <div key={edu.id} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800">
                  <div className="font-bold text-slate-200">{edu.degree}</div>
                  <div className="text-indigo-400 font-medium text-[11px]">{edu.institution}</div>
                  <div className="text-slate-400 text-[11px] mt-1">Year: {edu.year} | {edu.gradeType}: {edu.grade}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2 pt-4 border-t border-slate-800/60">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-indigo-400" />
              Certifications & Simulations
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {certifications.map((c) => (
                <span key={c.id} className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-mono">
                  ✓ {c.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 mt-6 border-t border-slate-800/60 text-center print:hidden">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
          >
            Close Summary
          </button>
        </div>
      </div>
    </div>
  );
};
