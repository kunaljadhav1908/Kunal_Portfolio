import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Search,
  CheckCircle2,
  Layers,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-sky-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-amber-400" />;
    }
  };

  const filteredCategories = skillCategories.filter(cat => {
    const matchesCategory = selectedCategory === 'all' || cat.id === selectedCategory;
    if (!searchQuery.trim()) return matchesCategory;

    const query = searchQuery.toLowerCase();
    const hasMatchingSkill = cat.skills.some(skill => skill.toLowerCase().includes(query));
    const matchesTitle = cat.title.toLowerCase().includes(query);

    return matchesCategory && (hasMatchingSkill || matchesTitle);
  });

  return (
    <section id="skills" className={`py-20 relative transition-colors ${darkMode ? 'bg-slate-950' : 'bg-slate-100/70'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Comprehensive full-stack toolkit specializing in Python, Django, React.js, and modern web application development.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/60">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : darkMode
                  ? 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                  : 'bg-white text-slate-700 border border-slate-200 hover:text-slate-900'
              }`}
            >
              All Skills
            </button>

            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : darkMode
                    ? 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:text-slate-900'
                }`}
              >
                {cat.categoryName}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g., Django, React, PostgreSQL)..."
              className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs font-medium border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 text-slate-200 placeholder-slate-500'
                  : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/40'
                  : 'bg-white border-slate-200 shadow-sm hover:border-indigo-300'
              }`}
            >
              {/* Category Card Header */}
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800/60">
                <div className={`p-2.5 rounded-xl ${
                  darkMode ? 'bg-slate-950 border border-slate-800' : 'bg-slate-100'
                }`}>
                  {getCategoryIcon(category.icon)}
                </div>
                <div>
                  <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {category.title}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    {category.skills.length} core competencies
                  </span>
                </div>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const isHighlighted = searchQuery.trim() !== '' &&
                    skill.toLowerCase().includes(searchQuery.toLowerCase());

                  return (
                    <div
                      key={skill}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all duration-200 ${
                        isHighlighted
                          ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/40 scale-105'
                          : darkMode
                          ? 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      <CheckCircle2 className={`w-3 h-3 ${isHighlighted ? 'text-white' : 'text-indigo-400'}`} />
                      <span>{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Tech Stack Highlight Footer */}
        <div className={`mt-12 p-6 rounded-2xl border ${
          darkMode ? 'bg-indigo-950/20 border-indigo-500/20' : 'bg-indigo-50/60 border-indigo-200'
        } flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left`}>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 hidden sm:block">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Full Stack Architecture Focus
              </h4>
              <p className="text-xs text-slate-400">
                Specialized in building REST API backends with Django REST Framework paired with React.js frontend & PostgreSQL database layer.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 shadow-md transition-colors whitespace-nowrap"
          >
            See Skills Applied in Projects
          </a>
        </div>

      </div>
    </section>
  );
};
