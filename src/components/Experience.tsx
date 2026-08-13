import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { experience } from '../data/portfolioData';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section id="experience" className={`py-20 relative transition-colors ${darkMode ? 'bg-slate-950' : 'bg-slate-100/70'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work History</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Practical engineering experience in full-stack web application development, backend APIs, and database engineering.
          </p>
        </div>

        {/* Timeline Experience Card Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-8 rounded-2xl border relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 hover:border-indigo-500/40'
                  : 'bg-white border-slate-200 shadow-md hover:border-indigo-300'
              }`}
            >
              {/* Header Badge & Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/60">
                <div className="space-y-1">
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-mono font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-1">
                    Industry Internship
                  </span>
                  <h3 className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-indigo-400">
                    <Building2 className="w-4 h-4 text-indigo-400" />
                    <span>{item.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs text-slate-400 font-medium">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/60 border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/60 border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>

              {/* Main Role Description */}
              <div className="py-6 space-y-4">
                <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.description}
                </p>

                {/* Key Contributions & Highlights */}
                <div className="space-y-2.5 pt-2">
                  <h4 className={`text-xs font-mono font-bold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Key Contributions & Engineering Impact:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs ${
                          darkMode ? 'bg-slate-950/50 border-slate-800/80 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills Used Badges */}
              <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Technologies Used:</span>
                {item.skillsUsed.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
