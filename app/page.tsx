'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from '@/components/Preloader';
import DesktopMenu from '@/components/DesktopMenu';
import RealTimeClock from '@/components/RealTimeClock';
import SystemWindow from '@/components/SystemWindow';

const ProfileApp = dynamic(() => import('@/components/ProfileApp'));
const ExperienceApp = dynamic(() => import('@/components/ExperienceApp'));
const ProjectsApp = dynamic(() => import('@/components/ProjectsApp'));
const ResumeApp = dynamic(() => import('@/components/ResumeApp'));
const ContactApp = dynamic(() => import('@/components/ContactApp'));
const WallpaperApp = dynamic(() => import('@/components/WallpaperApp'));

import EpilogueText from '@/components/EpilogueText';
import HeroHeader from '@/components/HeroHeader';
import MusicPlayer from '@/components/MusicPlayer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WallpaperProvider, useWallpaper } from '@/context/WallpaperContext';
import dynamic from 'next/dynamic';
import Image from 'next/image';


const GlobalWallpaper = () => {
  const { isWallpaperEnabled, activeWallpaper, isVideoPlaying } = useWallpaper();
  const showWallpaper = isWallpaperEnabled && !isVideoPlaying;

  return (
    <AnimatePresence>
      {showWallpaper && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-2 pointer-events-none mix-blend-screen"
        >
          // 2. Komponen Image Next.js murni bertugas menampilkan gambar 4K yang sudah di-compress
          <Image 
            src={activeWallpaper}
            alt="System Background"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
// -------------------------------------------------------------

const HologramGlitchOverlay = () => {
  return (
    <div className="fixed inset-0 z-5 pointer-events-none overflow-hidden mix-blend-screen">
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
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.2, 0.3, 0.8, 0.85, 0.9, 1], ease: "linear" }}
      />
      <motion.div
        className="absolute left-0 right-0 h-8 bg-indigo-400/10 blur-sm"
        animate={{ y: ["-10vh", "110vh"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
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
  const [activeWidget, setActiveWidget] = useState(0); 

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
    const minSwipeDistance = 40; 

    if (distance > minSwipeDistance && activeWidget === 0) {
      setActiveWidget(1); 
    } else if (distance < -minSwipeDistance && activeWidget === 1) {
      setActiveWidget(0); 
    }
  };

  useEffect(() => {
    try {
      const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
      if (hasSeenIntro) {
        setIsLoading(false); 
      }
    } catch (error) {
      console.warn("Akses sessionStorage diblokir oleh browser.");
    } finally {
      setIsChecking(false);
    }
  }, []);

  const handlePreloaderComplete = () => {
    try { sessionStorage.setItem('hasSeenIntro', 'true'); } catch (e) {}
    setIsLoading(false);
  };

  const getAppTitle = (id: string) => {
    switch (id) {
      case 'profile': return 'Dionisius.exe';
      case 'experience': return "Chronicles.exe";
      case 'projects': return 'Projects.wav';
      case 'resume': return 'Resume.exe';
      case 'contact': return 'Transmission.exe';
      case 'wallpaper': return 'Display.exe';
      default: return 'System.exe';
    }
  };

  if (isChecking) {
    return <main className="w-full h-screen bg-slate-900"></main>;
  }

  return (
    <WallpaperProvider>
      <main className="relative w-full min-h-162.5 h-dvh flex flex-col overflow-y-auto overflow-x-hidden bg-slate-900 text-slate-100 font-sans select-none">
        
        <AnimatePresence>
          {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
        </AnimatePresence>

        {!isLoading && (
          <>
            <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-900/60 via-slate-900 to-[#020617]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none"></div>
              <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-screen pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            </div>

            <GlobalWallpaper />

            {/* Video Portal */}
            <div id="video-portal" className="fixed inset-0 z-1 pointer-events-none mix-blend-screen"></div>

            <HologramGlitchOverlay />
            <HeroHeader />

            <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full p-8 pb-24">
              <DesktopMenu onOpenApp={(id) => setActiveApp(id)} />
            </div>

            <div className="absolute bottom-22 lg:bottom-10 left-1/2 -translate-x-1/2 z-20 w-[95%] lg:w-auto pointer-events-none flex justify-center">
              <motion.div animate={{ opacity: [1, 0.8, 1, 1, 0.9, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                  <EpilogueText />
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center lg:justify-end items-end p-4 pb-3 lg:p-8 pointer-events-none">
              
              <div className="flex items-center gap-1 lg:gap-0 pointer-events-auto w-full max-w-100 lg:max-w-[320px]">
                
                <button onClick={() => setActiveWidget(0)} className={`lg:hidden p-1 transition-all duration-300 shrink-0 ${activeWidget === 1 ? 'text-slate-400 hover:text-cyan-400 opacity-100 cursor-pointer' : 'text-transparent opacity-0 pointer-events-none'}`}>
                  <ChevronLeft className="w-7 h-7" />
                </button>

                <div 
                  className="flex-1 lg:flex-auto overflow-hidden lg:overflow-visible h-14 lg:h-auto rounded-sm lg:rounded-none relative lg:w-full"
                  onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}
                >
                  <div className={`flex lg:flex-col h-full lg:h-auto w-[200%] lg:w-full lg:gap-2 transition-transform duration-300 ease-in-out ${activeWidget === 1 ? '-translate-x-1/2 lg:translate-x-0' : 'translate-x-0'}`}>
                    
                    <div className="w-1/2 lg:w-full h-full lg:h-auto flex items-center justify-center gap-4 text-xs lg:text-sm tracking-widest bg-slate-900/60 px-5 lg:py-2.5 rounded-sm border border-cyan-800/50 backdrop-blur-md shadow-[0_0_15px_rgba(8,145,178,0.2)] transition-all hover:bg-slate-800/80 hover:border-slate-500/50 lg:order-2">
                      <RealTimeClock />
                    </div>

                    <div className="w-1/2 lg:w-full h-full lg:h-auto [&>div]:h-full! lg:[&>div]:h-auto! lg:order-1">
                      <MusicPlayer />
                    </div>

                  </div>
                </div>

                <button onClick={() => setActiveWidget(1)} className={`lg:hidden p-1 transition-all duration-300 shrink-0 ${activeWidget === 0 ? 'text-slate-400 hover:text-cyan-400 opacity-100 cursor-pointer' : 'text-transparent opacity-0 pointer-events-none'}`}>
                  <ChevronRight className="w-7 h-7" />
                </button>

              </div>
            </div>

            <AnimatePresence>
              {activeApp && (
                <SystemWindow title={getAppTitle(activeApp)} onClose={() => setActiveApp(null)}>
                  {activeApp === 'profile' && <ProfileApp />}
                  {activeApp === 'experience' && <ExperienceApp />}
                  {activeApp === 'projects' && <ProjectsApp />}
                  {activeApp === 'resume' && <ResumeApp />}
                  {activeApp === 'contact' && <ContactApp />}
                  {activeApp === 'wallpaper' && <WallpaperApp />}
                  
                  {!['profile', 'experience', 'projects', 'resume', 'contact', 'wallpaper'].includes(activeApp) && (
                    <div className="flex items-center justify-center w-full h-full p-8 text-center bg-slate-950">
                      <h3 className="text-2xl text-slate-400 font-mono">Content <span className="text-indigo-400">{activeApp}</span> still booting...</h3>
                    </div>
                  )}
                </SystemWindow>
              )}
            </AnimatePresence>
          </>
        )}
      </main>
    </WallpaperProvider>
  );
}