'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, ExternalLink, TerminalSquare } from 'lucide-react';
// Import data proyek yang sudah dipisah
import { projects } from '@/data/projects';

const GithubIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function ProjectsApp() {
  const [activeIndex, setActiveIndex] = useState(0);

  const progressPercentage = projects.length > 1 
    ? (activeIndex / (projects.length - 1)) * 100 
    : 100;

  const currentProject = projects[activeIndex];

  return (
    <div className="w-full h-full bg-[#050a14] text-cyan-50 flex flex-col overflow-hidden relative font-mono shadow-[inset_0_0_80px_rgba(8,145,178,0.15)]">
      
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-size-[30px_30px] pointer-events-none"></div>

      {/* --- TINGKAT 1: NAVIGASI FOLDER --- */}
      <div className="w-full overflow-x-auto overflow-y-hidden pt-5 pb-2 px-6 md:px-10 z-10 custom-scrollbar">
        <div className="flex items-end gap-2 md:gap-4 min-w-max">
          {projects.map((proj, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative group flex flex-col items-center w-24 md:w-28 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
              >
                <span className={`text-xs mb-2 truncate w-full text-center transition-all ${isActive ? 'text-cyan-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]' : 'text-slate-400 opacity-0 group-hover:opacity-100'}`}>
                  {proj.folderName}
                </span>

                <div className={`w-full aspect-4/5 border flex items-center justify-center relative overflow-hidden transition-all duration-500 ${isActive ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_15px_rgba(34,211,238,0.3)] scale-105' : 'border-slate-700 bg-slate-900/40 scale-95'}`}>
                  {isActive && (
                    <motion.div layoutId="activeGlow" className="absolute inset-0 bg-linear-to-t from-cyan-500/20 to-transparent" />
                  )}
                  <Folder className={`w-8 h-8 md:w-10 md:h-10 transition-colors ${isActive ? 'text-cyan-300' : 'text-slate-500'}`} />
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-400/50 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-scan opacity-30 hidden md:block"></div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* --- TINGKAT 2: PROGRESS BAR --- */}
      <div className="w-full flex items-center bg-[#0a1122] border-y border-cyan-900/50 z-10 relative">
        <div className="px-4 py-1 text-xs md:text-sm font-bold text-cyan-400 border-r border-cyan-900/50 bg-[#060d1a] shadow-[0_0_10px_rgba(34,211,238,0.2)]">
          {Math.round(progressPercentage)}%
        </div>
        <div className="flex-1 h-3 bg-slate-900/80 relative overflow-hidden mx-1">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-linear-to-r from-cyan-700 via-cyan-400 to-cyan-200 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
          />
        </div>
      </div>

      {/* --- TINGKAT 3: PANEL DETAIL KONTEN --- */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch"
          >
            {/* Sisi Kiri: Informasi Teknis */}
            <div className="flex flex-col h-full">
              <div className="bg-cyan-500/20 px-4 py-2 border-l-4 border-cyan-400 inline-flex w-fit mb-4 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                <span className="text-cyan-100 text-xs tracking-widest uppercase font-bold">{currentProject.folderName}</span>
              </div>

              <div className="flex-1 border border-cyan-900/50 bg-[#080f1c] p-6 relative flex flex-col">
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500"></div>

                <div className="flex items-center gap-2 text-cyan-500/80 mb-2">
                  <TerminalSquare className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest">{currentProject.date}</span>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-xl md:text-2xl text-cyan-50 font-bold tracking-wide drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]">
                    {currentProject.title}
                  </h2>
                  
                  {/* Ikon muncul hanya jika liveUrl ada isinya */}
                  {currentProject.liveUrl && (
                    <a 
                      href={currentProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Buka Live Demo"
                      className="p-1.5 rounded-md bg-cyan-900/40 border border-cyan-700/50 hover:bg-cyan-600/50 hover:border-cyan-400 text-cyan-400 hover:text-cyan-100 transition-all group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
                
                <p className="text-xs md:text-sm text-cyan-200/70 leading-relaxed mb-6">
                  {currentProject.description}
                </p>

                {/* Tech Stack Bar */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProject.tech.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 bg-cyan-950/50 border border-cyan-800 text-cyan-300 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>

                {/* --- Action Button --- */}
                {currentProject.github ? (
                  <a 
                    href={currentProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-cyan-900/30 hover:bg-cyan-600/30 border border-cyan-600 hover:border-cyan-300 text-cyan-100 transition-all duration-300 group w-fit"
                  >
                    <GithubIcon />
                    <span className="text-xs tracking-wider uppercase">Lihat Repositori</span>
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                ) : (
                  <div className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-red-950/30 border border-red-800 text-red-400 opacity-80 cursor-not-allowed w-fit shadow-[0_0_10px_rgba(220,38,38,0.2)]">
                    <GithubIcon />
                    <span className="text-xs tracking-wider uppercase">Repository Unavailable [!]</span>
                  </div>
                )}
              </div>
            </div>

            {/* Sisi Kanan: Visual Data / Gambar */}
            <div className="flex flex-col h-full">
              <div className={`flex items-center gap-2 mb-4 transition-colors duration-300 ${currentProject.imageUrl ? 'opacity-70' : ''}`}>
                <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${currentProject.imageUrl ? 'bg-cyan-500' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]'}`}></div>
                <span className={`text-[10px] tracking-widest uppercase ${currentProject.imageUrl ? 'text-cyan-400' : 'text-red-400 font-bold'}`}>
                  {currentProject.imageUrl ? 'Visual System' : 'Visual System Error'}
                </span>
              </div>

              <div className={`w-full flex-1 min-h-62.5 bg-[#030712] border transition-colors duration-300 p-2 relative flex items-center justify-center group overflow-hidden ${currentProject.imageUrl ? 'border-cyan-800/60' : 'border-red-900 shadow-[0_0_20px_rgba(185,28,28,0.15)]'}`}>
                
                <div className={`absolute top-2 left-2 w-4 h-4 border-t border-l opacity-50 ${currentProject.imageUrl ? 'border-cyan-400' : 'border-red-500'}`}></div>
                <div className={`absolute top-2 right-2 w-4 h-4 border-t border-r opacity-50 ${currentProject.imageUrl ? 'border-cyan-400' : 'border-red-500'}`}></div>
                <div className={`absolute bottom-2 left-2 w-4 h-4 border-b border-l opacity-50 ${currentProject.imageUrl ? 'border-cyan-400' : 'border-red-500'}`}></div>
                <div className={`absolute bottom-2 right-2 w-4 h-4 border-b border-r opacity-50 ${currentProject.imageUrl ? 'border-cyan-400' : 'border-red-500'}`}></div>

                <div className={`w-full h-full border relative overflow-hidden transition-colors duration-300 flex items-center justify-center p-4 ${currentProject.imageUrl ? 'border-cyan-900/40 bg-[#050b16]' : 'border-red-950/60 bg-red-950/20'}`}>
                  
                  {currentProject.imageUrl ? (
                    <img 
                      src={currentProject.imageUrl} 
                      alt={currentProject.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10" 
                    />
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0.5, 1] }}
                      transition={{ duration: 0.5, times: [0, 0.2, 0.4, 1] }}
                      className="flex flex-col items-center gap-3 z-10 text-center"
                    >
                      {/* Ikon Terminal Error Mungil */}
                      <TerminalSquare className="w-8 h-8 text-red-600 opacity-80" />
                      
                      <span className="text-red-500 text-sm md:text-base tracking-[0.2em] uppercase font-black z-0 drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]">
                        SIGNAL NOT FOUND [!]
                      </span>
                      <span className="text-red-800 text-[9px] uppercase tracking-widest mt-1">Amphoreus Visual Sensor not responding.</span>
                    </motion.div>
                  )}

                  <div className={`absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-size-[100%_4px] pointer-events-none z-20 ${currentProject.imageUrl ? '' : 'opacity-60'}`}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}