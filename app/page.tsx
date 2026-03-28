'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/Preloader';
import DesktopMenu from '@/components/DesktopMenu';
import RealTimeClock from '@/components/RealTimeClock';
import SystemWindow from '@/components/SystemWindow';
import ProfileApp from '@/components/ProfileApp';
import ExperienceApp from '@/components/ExperienceApp';
import ProjectsApp from '@/components/ProjectsApp';
import ResumeApp from '@/components/ResumeApp';
import ContactApp from '@/components/ContactApp';
import EpilogueText from '@/components/EpilogueText';
import HeroHeader from '@/components/HeroHeader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeApp, setActiveApp] = useState<string | null>(null);

  // Fungsi helper untuk mendapatkan judul aplikasi
  const getAppTitle = (id: string) => {
    switch (id) {
      case 'profile': return 'Dionisius Geovanni Caesario.exe';
      case 'experience': return "Chronicles.exe";
      case 'projects': return 'Projects.wav';
      case 'resume': return 'Resume.exe';
      case 'contact': return 'Transmission.exe';
      default: return 'System.exe';
    }
  };


  return (
    <main className="relative w- h-screen overflow-hidden bg-slate-900 text-slate-100 font-sans select-none">
      
      {/* PRELOADER ANIMATION */}
      <AnimatePresence>
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* DESKTOP UI */}
      {!isLoading && (
        <>
          {/* --- Latar Belakang Kosmik & Hologram --- */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-900/60 via-slate-900 to-[#020617]">
            
            {/* 1. Grid Pattern (Garis Khas Hologram) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none"></div>
            
            {/* 2. Tekstur Stardust (Tema Kosmik) */}
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-screen pointer-events-none"></div>
            
            {/* 3. Cahaya Pendar Tambahan di Tengah */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            
          </div>

          {/* header */}
          <HeroHeader />

          {/* Area Tengah: Grid Menu Desktop */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8 pb-24">
            <DesktopMenu onOpenApp={(id) => setActiveApp(id)} />
          </div>

          {/* Footer Bar */}
          <div className="absolute bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-20 w-[95%] md:w-auto pointer-events-none flex justify-center">
            <EpilogueText />
          </div>

          {/* --- FOOTER BAR (Hanya Jam di Kanan) --- */}
          <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-end items-end p-6 md:p-8 pointer-events-none">
            <div className="flex items-center gap-4 text-xs md:text-sm tracking-widest pointer-events-auto bg-slate-900/60 px-5 py-2.5 rounded-sm border border-slate-700/50 backdrop-blur-md shadow-lg transition-all hover:bg-slate-800/80 hover:border-slate-500/50">
              <RealTimeClock />
            </div>
          </div>

          {/* --- SISTEM MODAL / JENDELA --- */}
          <AnimatePresence>
            {activeApp && (
              <SystemWindow 
                title={getAppTitle(activeApp)} 
                onClose={() => setActiveApp(null)}
              >
                {/* --- RENDER ISI APLIKASI DI SINI --- */}
                {activeApp === 'profile' && <ProfileApp />}
                {activeApp === 'experience' && <ExperienceApp />}
                {activeApp === 'projects' && <ProjectsApp />}
                {activeApp === 'resume' && <ResumeApp />}
                {activeApp === 'contact' && <ContactApp />}
                
                {/* Placeholder untuk aplikasi lain yang belum dibuat */}
                {!['profile', 'experience', 'projects', 'resume', 'contact'].includes(activeApp || '') && (
                  <div className="flex items-center justify-center w-full h-full p-8 text-center bg-slate-950">
                    <h3 className="text-2xl text-slate-400 font-mono">
                      Konten untuk <span className="text-indigo-400">{activeApp}</span> sedang dibangun...
                    </h3>
                  </div>
                )}
              </SystemWindow>
            )}
          </AnimatePresence>
        </>
      )}
    </main>
  );
}