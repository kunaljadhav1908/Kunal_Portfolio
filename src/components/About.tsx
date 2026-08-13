import React from 'react';
import { User, Code2, Server, Database, ShieldCheck, CheckCircle2, Award, GraduationCap, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const coreCompetencies = [
    {
      title: "Frontend Development",
      description: "Crafting responsive, component-based UIs with React.js, JavaScript, HTML5, CSS3, Bootstrap, and Vite.",
      icon: Code2,
      color: "from-sky-500 to-indigo-500",
      skills: ["React.js", "JavaScript ES6+", "HTML5/CSS3", "Bootstrap & Tailwind", "Vite"]
    },
    {
      title: "Backend & API Engineering",
      description: "Architecting clean, scalable REST APIs using Python, Django, and Django REST Framework.",
      icon: Server,
      color: "from-indigo-500 to-purple-500",
      skills: ["Python", "Django", "Django REST Framework", "JWT Auth", "REST APIs"]
    },
    {
      title: "Database & CRUD Operations",
      description: "Designing optimized database structures with PostgreSQL, MySQL, and SQLite for high performance.",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: ["PostgreSQL", "SQLite", "MySQL", "ORM Optimization", "Database Design"]
    },
    {
      title: "Architecture & Best Practices",
      description: "Applying Object-Oriented Programming (OOP), SOLID principles, and MVC patterns for maintainable code.",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-500",
      skills: ["OOP", "SOLID Principles", "MVC Architecture", "Git/GitHub", "Render/Vercel"]
    }
  ];

  return (
    <section id="about" className={`py-20 relative transition-colors ${darkMode ? 'bg-slate-950/60' : 'bg-slate-50/80'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Python Full Stack Developer & <span className="text-gradient">2026 CS Graduate</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Passionate software engineer focused on building robust full-stack applications with elegant UIs and scalable backend architectures.
          </p>
        </div>

        {/* Top Grid: Bio Paragraphs + Key Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Bio Card */}
          <div className={`lg:col-span-8 p-6 sm:p-8 rounded-2xl border ${
            darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
          } space-y-5 relative overflow-hidden`}>
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800/60">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                KJ
              </div>
              <div>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-indigo-400 font-medium">
                  {personalInfo.role} • Based in {personalInfo.location}
                </p>
              </div>
            </div>

            <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {personalInfo.aboutBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/60 flex flex-wrap gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mr-2 self-center">
                Core Tech:
              </span>
              {["Python", "Django", "Django REST Framework", "React.js", "JavaScript", "PostgreSQL", "SQLite", "Bootstrap", "REST APIs"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Side Stats & Snapshot */}
          <div className="lg:col-span-4 space-y-4">
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            } space-y-4`}>
              <h4 className={`text-sm font-bold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Recruiter Snapshot
              </h4>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/80">
                  <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      2026 Graduate
                    </div>
                    <div className="text-xs text-slate-400">
                      B.Tech Computer Science Engineering
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/80">
                  <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      Web Development Intern
                    </div>
                    <div className="text-xs text-slate-400">
                      Maxgen Technologies Pvt. Ltd., Pune
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/80">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      3 Job Simulations
                    </div>
                    <div className="text-xs text-slate-400">
                      Forage, Tata & Deloitte Engineering
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 gap-3">
              {personalInfo.stats.map((stat, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border text-center ${
                    darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="text-2xl font-extrabold text-indigo-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Grid: 4 Core Competency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreCompetencies.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                    : 'bg-white border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${comp.color} p-0.5 mb-4 shadow-md`}>
                  <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className={`text-base font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {comp.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {comp.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/50">
                  {comp.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
