import React, { useState } from 'react';
import {
  FolderGit2,
  Github,
  ExternalLink,
  Sparkles,
  Layers,
  Search,
  Info,
  CheckCircle2,
  Music,
  Milk,
  ShoppingCart,
  MessageSquare,
  Car,
  FileText
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  darkMode: boolean;
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode, onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'featured' && project.isFeatured) ||
      project.category.toLowerCase() === filter.toLowerCase();

    if (!searchQuery.trim()) return matchesFilter;

    const query = searchQuery.toLowerCase();
    const matchesQuery =
      project.title.toLowerCase().includes(query) ||
      project.subtitle.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((t) => t.toLowerCase().includes(query));

    return matchesFilter && matchesQuery;
  });

  const getThumbnailGraphic = (pattern: string) => {
    switch (pattern) {
      case 'bus':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-amber-900/40 via-slate-900 to-indigo-950 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between z-10">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Music className="w-3 h-3 text-amber-400 animate-pulse" />
                Transit Audio Player
              </span>
              <span className="text-[10px] font-mono text-amber-400/80">
                Route Track Orchestrator
              </span>
            </div>
            <div className="my-auto z-10 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
                <span>🎵 Transit Express Beat #04</span>
                <span className="text-amber-400">02:45 / 03:50</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-gradient-to-r from-amber-500 to-indigo-500 rounded-full" />
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10">
              <span>Route: City-Central Express</span>
              <span className="text-emerald-400">● Live Playback Active</span>
            </div>
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          </div>
        );

      case 'dairy':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-sky-950 via-slate-900 to-indigo-950 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between z-10">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                <Milk className="w-3 h-3 text-sky-400" />
                Dairy Business Dashboard
              </span>
              <span className="text-[10px] font-mono text-sky-400/80">Milk Collection</span>
            </div>
            <div className="grid grid-cols-3 gap-2 z-10 my-auto text-center">
              <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Total Liters</div>
                <div className="text-xs font-bold text-sky-400">1,240 L</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Customers</div>
                <div className="text-xs font-bold text-indigo-400">86 Active</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Billing</div>
                <div className="text-xs font-bold text-emerald-400">₹48,500</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10">
              <span>Daily Milk Record Engine</span>
              <span className="text-sky-400">Vercel Deployed</span>
            </div>
          </div>
        );

      case 'kcart':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between z-10">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                <ShoppingCart className="w-3 h-3 text-indigo-400" />
                Full Stack E-Commerce
              </span>
              <span className="text-[10px] font-mono text-purple-400">JWT & DRF</span>
            </div>
            <div className="z-10 my-auto p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 font-bold">🛒 Shopping Cart API</span>
                <span className="text-emerald-400 text-[10px]">PostgreSQL Sync</span>
              </div>
              <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>Items: 3 Products</span>
                <span className="text-indigo-400 font-bold">Total: $129.99</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10">
              <span>Django REST Framework</span>
              <span className="text-indigo-400">PostgreSQL DB</span>
            </div>
          </div>
        );

      case 'tweetbar':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between z-10">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                <MessageSquare className="w-3 h-3 text-sky-400" />
                Microblogging Platform
              </span>
              <span className="text-[10px] font-mono text-slate-400">Dark Theme UI</span>
            </div>
            <div className="z-10 my-auto p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                <div className="w-5 h-5 rounded-full bg-indigo-500/30 flex items-center justify-center text-[10px] font-bold text-indigo-300">
                  K
                </div>
                <span>@kunal_jadhav</span>
              </div>
              <p className="text-[11px] text-slate-300 font-sans line-clamp-1">
                Building full-stack microblogging platform with Django & React! 🚀
              </p>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10">
              <span>Django + SQLite CRUD</span>
              <span className="text-emerald-400">Render Deployed</span>
            </div>
          </div>
        );

      case 'cab':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between z-10">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Car className="w-3 h-3 text-emerald-400" />
                Cab & Ride Management
              </span>
              <span className="text-[10px] font-mono text-emerald-400">Ride Workflow</span>
            </div>
            <div className="z-10 my-auto space-y-2">
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono">
                <span className="text-slate-300">Driver #104 (On Duty)</span>
                <span className="text-emerald-400 font-bold">Ride Confirmed</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10">
              <span>Real-Time Status Engine</span>
              <span className="text-emerald-400">PostgreSQL DB</span>
            </div>
          </div>
        );

      case 'blog':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between z-10">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <FileText className="w-3 h-3 text-purple-400" />
                Full CRUD Blogging Platform
              </span>
              <span className="text-[10px] font-mono text-purple-400">Dynamic UI</span>
            </div>
            <div className="z-10 my-auto p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <div className="text-xs font-bold text-slate-200">
                Understanding Django ORM & CRUD Operations
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                Published by Kunal J. • 4 min read
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10">
              <span>Django Views & Templates</span>
              <span className="text-purple-400">SQLite Engine</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-44 bg-slate-900 p-4 flex items-center justify-center">
            <FolderGit2 className="w-8 h-8 text-indigo-400" />
          </div>
        );
    }
  };

  return (
    <section id="projects" className={`py-20 relative transition-colors ${darkMode ? 'bg-slate-950/80' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Projects & <span className="text-gradient">Applications</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Full-stack web applications featuring Python, Django REST Framework, React.js, and database management solutions.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/60">
          
          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'featured', label: '🔥 Featured' },
              { id: 'full stack', label: 'Full Stack' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  filter === tab.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : darkMode
                    ? 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by tech or name..."
              className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs font-medium border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 text-slate-200 placeholder-slate-500'
                  : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400'
              }`}
            />
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden relative ${
                project.isFeatured
                  ? 'ring-2 ring-amber-500/60 shadow-xl shadow-amber-500/10'
                  : ''
              } ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10'
                  : 'bg-white border-slate-200 shadow-md hover:border-indigo-300 hover:shadow-xl'
              }`}
            >
              {/* Featured Badge */}
              {project.isFeatured && (
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30">
                  <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Featured New Project</span>
                </div>
              )}

              {/* Graphic Header Thumbnail */}
              <div className="relative border-b border-slate-800/60">
                {getThumbnailGraphic(project.thumbnailPattern)}
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Title */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {project.technologies.slice(0, 2).join(' • ')}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold tracking-tight mb-1 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>

                  <p className="text-xs font-semibold text-indigo-400 mb-3">
                    {project.subtitle}
                  </p>

                  <p className={`text-xs leading-relaxed line-clamp-3 mb-4 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Feature Highlights Bullet Points */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-800/50">
                    {project.features.slice(0, 3).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                    {project.features.length > 3 && (
                      <div className="text-[10px] font-mono text-slate-500 pl-5">
                        +{project.features.length - 3} more key features
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium ${
                          darkMode
                            ? 'bg-slate-950 text-slate-300 border border-slate-800'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links - Strictly Valid URLs Only */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {/* GitHub Link (Only if verified URL exists) */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${project.title}`}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {/* Live Demo Link (Only if verified URL exists) */}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${project.title}`}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-colors"
                        title="Open Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  {/* Inspect Details Modal Button */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 transition-colors"
                    title="Inspect details & architecture"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
