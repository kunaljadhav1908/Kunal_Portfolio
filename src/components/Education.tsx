import React from 'react';
import { GraduationCap, Calendar, Award, CheckCircle2, School } from 'lucide-react';
import { education } from '../data/portfolioData';

interface EducationProps {
  darkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ darkMode }) => {
  return (
    <section id="education" className={`py-20 relative transition-colors ${darkMode ? 'bg-slate-950/80' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Formal computer science engineering education paired with strong foundational analytics.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 hover:border-indigo-500/40'
                  : 'bg-white border-slate-200 shadow-md hover:border-indigo-300'
              } flex flex-col justify-between`}
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <School className="w-5 h-5" />
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-950 text-indigo-300 border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{item.year}</span>
                  </div>
                </div>

                {/* Degree Title & College */}
                <div>
                  <h3 className={`text-xl font-bold tracking-tight mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.degree}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-400">
                    {item.institution}
                  </p>
                </div>

                {/* Grade Counter Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-slate-300">{item.gradeType}:</span>
                  <span className="text-amber-400 font-bold text-sm">{item.grade}</span>
                </div>

                {/* Highlights list */}
                {item.highlights && (
                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
