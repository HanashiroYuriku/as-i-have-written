'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
import MusicPlayer from '@/components/MusicPlayer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HologramGlitchOverlay = () => {
  return (
    <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden mix-blend-screen">
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(99,102,241,0.05)_50%)] bg-size-[100%_4px]"
        animate={{ y: [0, 4] }}
        transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
      />
      
      <motion.div
        className="absolute inset-0 bg-indigo-500/5 mix-blend-overlay"
        animate={{ 
          opacity: [0, 0.05, 0, 0.1, 0, 0, 0.08, 0],
          scale: [1, 1.01, 1, 1, 1.02, 1, 1, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          times: [0, 0.1, 0.2, 0.3, 0.8, 0.85, 0.9, 1], 
          ease: "linear" 
        }}
      />

      <motion.div
        className="absolute left-0 right-0 h-8 bg-indigo-400/10 blur-sm"
        animate={{ y: ["-10vh", "110vh"] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
      />
    </div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 40; //sensitivitas

    if (distance > minSwipeDistance && activeWidget === 0) {
      setActiveWidget(1); 
    } else if (distance < -minSwipeDistance && activeWidget === 1) {
      setActiveWidget(0); 
    }
  };

  // 
  const [activeWidget, setActiveWidget] = useState(0); 
  // 

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setIsLoading(false); 
    }
    setIsChecking(false);
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('hasSeenIntro', 'true');
    setIsLoading(false);
  };

  const getAppTitle = (id: string) => {
    switch (id) {
      case 'profile': return 'Dionisius.exe';
      case 'experience': return "Chronicles.exe";
      case 'projects': return 'Projects.wav';
      case 'resume': return 'Resume.exe';
      case 'contact': return 'Transmission.exe';
      default: return 'System.exe';
    }
  };

  if (isChecking) {
    return <main className="w-full h-screen bg-slate-900"></main>;
  }

  return (
    <main className="relative w- h-screen overflow-hidden bg-slate-900 text-slate-100 font-sans select-none">
      
      {/* PRELOADER ANIMATION */}
      <AnimatePresence>
        {isLoading && (
          <Preloader onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>

      {/* DESKTOP UI */}
      {!isLoading && (
        <>
          {/* --- Latar Belakang Kosmik --- */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-900/60 via-slate-900 to-[#020617]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none"></div>
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-screen pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          </div>

          {/* --- Efek Glitch Hologram --- */}
          <HologramGlitchOverlay />

          <HeroHeader />

          {/* --- Area Tengah: Grid Menu Desktop --- */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8 pb-24">
            <DesktopMenu onOpenApp={(id) => setActiveApp(id)} />
          </div>

          {/* --- Teks Epilog --- */}
          <div className="absolute bottom-22 md:bottom-10 left-1/2 -translate-x-1/2 z-20 w-[95%] md:w-auto pointer-events-none flex justify-center">
             <motion.div
               animate={{ opacity: [1, 0.8, 1, 1, 0.9, 1] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             >
                <EpilogueText />
             </motion.div>
          </div>

          {/* widget controls */}
          <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center md:justify-end items-end p-4 pb-3 md:p-8 pointer-events-none">
            
            <div className="flex items-center gap-1 md:gap-0 pointer-events-auto w-full max-w-100 md:max-w-[320px]">
              
              {/* left button */}
              <button 
                onClick={() => setActiveWidget(0)} 
                className={`md:hidden p-1 transition-all duration-300 shrink-0 ${
                  activeWidget === 1 ? 'text-slate-400 hover:text-cyan-400 opacity-100 cursor-pointer' : 'text-transparent opacity-0 pointer-events-none'
                }`}
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              <div 
                className="flex-1 md:flex-auto overflow-hidden md:overflow-visible h-14 md:h-auto rounded-sm md:rounded-none relative md:w-full"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                
                <div 
                  className={`flex md:flex-col h-full md:h-auto w-[200%] md:w-full md:gap-2 transition-transform duration-300 ease-in-out ${
                    activeWidget === 1 ? '-translate-x-1/2 md:translate-x-0' : 'translate-x-0'
                  }`}
                >
                  
                  {/* jam */}
                  <div className="w-1/2 md:w-full h-full md:h-auto flex items-center justify-center gap-4 text-xs md:text-sm tracking-widest bg-slate-900/60 px-5 md:py-2.5 rounded-sm border border-cyan-800/50 backdrop-blur-md shadow-[0_0_15px_rgba(8,145,178,0.2)] transition-all hover:bg-slate-800/80 hover:border-slate-500/50 md:order-2">
                    <RealTimeClock />
                  </div>

                  {/* music */}
                  <div className="w-1/2 md:w-full h-full md:h-auto [&>div]:h-full! md:[&>div]:h-auto! md:order-1">
                    <MusicPlayer />
                  </div>

                </div>
              </div>

              {/* right button */}
              <button 
                onClick={() => setActiveWidget(1)} 
                className={`md:hidden p-1 transition-all duration-300 shrink-0 ${
                  activeWidget === 0 ? 'text-slate-400 hover:text-cyan-400 opacity-100 cursor-pointer' : 'text-transparent opacity-0 pointer-events-none'
                }`}
              >
                <ChevronRight className="w-7 h-7" />
              </button>

            </div>
          </div>

          {/* --- SISTEM MODAL / JENDELA --- */}
          <AnimatePresence>
            {activeApp && (
              <SystemWindow 
                title={getAppTitle(activeApp)} 
                onClose={() => setActiveApp(null)}
              >
                {activeApp === 'profile' && <ProfileApp />}
                {activeApp === 'experience' && <ExperienceApp />}
                {activeApp === 'projects' && <ProjectsApp />}
                {activeApp === 'resume' && <ResumeApp />}
                {activeApp === 'contact' && <ContactApp />}
                
                {!['profile', 'experience', 'projects', 'resume', 'contact'].includes(activeApp || '') && (
                  <div className="flex items-center justify-center w-full h-full p-8 text-center bg-slate-950">
                    <h3 className="text-2xl text-slate-400 font-mono">
                      Content <span className="text-indigo-400">{activeApp}</span> still booting...
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