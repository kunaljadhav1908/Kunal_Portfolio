import React from 'react';
import { Award, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

interface CertificationsProps {
  darkMode: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  return (
    <section className={`py-16 relative transition-colors ${darkMode ? 'bg-slate-950' : 'bg-slate-100/70'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Practical Credentials</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Industry <span className="text-gradient">Simulations & Credentials</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Practical software engineering job simulations completed with top technology consulting firms.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/40'
                  : 'bg-white border-slate-200 shadow-sm hover:border-indigo-300'
              } flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {cert.category}
                  </span>
                </div>

                <div>
                  <h3 className={`text-base font-bold tracking-tight mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400">
                    Issued by <span className="text-indigo-400 font-semibold">{cert.organization}</span>
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Competencies Verified:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                          darkMode
                            ? 'bg-slate-950 text-slate-300 border border-slate-800'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Completion
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
