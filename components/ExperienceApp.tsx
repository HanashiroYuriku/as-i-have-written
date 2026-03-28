'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { experiences } from '@/data/experiences';

const pageVariants: Variants = {
  initial: (dir: number) => ({ opacity: 0, x: dir > 0 ? 50 : -50 }),
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -50 : 50, transition: { duration: 0.3 } })
};

export default function ExperienceApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < experiences.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1); 
      setCurrentImageIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
      setCurrentImageIndex(0);
    }
  };

  const currentExp = experiences[currentIndex] || experiences[experiences.length - 1];
  const activeImage = currentExp.images[currentImageIndex] || currentExp.images[0];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentExp.images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentExp.images.length) % currentExp.images.length);
  };

  return (
    <div className="w-full h-full bg-[#ece5d3] text-[#4a3b32] flex flex-col md:flex-row overflow-y-auto md:overflow-hidden relative shadow-[inset_0_0_50px_rgba(0,0,0,0.1)]">
      
      {/* --- KUNCI PERBAIKAN: Tulang Buku (Spine) --- */}
      {/* Menggunakan -translate-x-1/2 agar presisi 100% membelah tengah */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-10 -translate-x-1/2 bg-linear-to-r from-transparent via-[#c2a878]/40 to-transparent pointer-events-none z-20"></div>

      <AnimatePresence custom={direction} mode="wait">
        <motion.div 
          key={currentIndex}
          custom={direction}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col md:flex-row w-full min-h-full"
        >
          {/* --- HALAMAN KIRI (Teks) --- */}
          {/* KUNCI PERBAIKAN: Mengganti flex-1 menjadi w-full md:w-1/2 */}
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col relative border-b-2 md:border-b-0 md:border-r-2 border-[#d3c5af]/80 z-10">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#8b6b4a] opacity-80 mb-6 md:absolute md:top-8 md:left-8">
              <span className="w-8 h-px bg-[#8b6b4a]"></span>
              <span className="font-serif tracking-widest text-sm">Chapter {experiences.length - currentIndex}</span>
              <span className="w-8 h-px bg-[#8b6b4a]"></span>
            </div>

            <div className="text-center md:text-left flex-1 flex flex-col justify-center">
              <p className="text-[#8b6b4a] font-serif tracking-widest text-xs md:text-sm mb-1">{currentExp.period}</p>
              <h1 className="text-2xl md:text-4xl font-bold font-serif text-[#3d2e25] mb-2">{currentExp.title}</h1>
              <h2 className="text-base md:text-xl font-medium text-[#c2a878] mb-6">{currentExp.role}</h2>
              
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-[#5c4b3f] leading-relaxed text-left mx-auto md:mx-0 max-w-md w-full">
                {currentExp.description.map((desc, i) => (
                  <p key={i} className="relative pl-5 md:pl-6">
                    <span className="absolute left-0 top-[0.25em] text-[#c2a878] text-[0.85em]">✦</span>
                    <span className="block">{desc}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-between md:hidden">
                <button onClick={handlePrev} disabled={currentIndex === 0} className={`flex items-center gap-1 px-3 py-1.5 font-serif text-xs border border-[#c2a878] ${currentIndex === 0 ? 'opacity-30' : 'text-[#8b6b4a]'}`}><ChevronLeft className="w-4 h-4" /> SEBELUMNYA</button>
                <button onClick={handleNext} disabled={currentIndex === experiences.length - 1} className={`flex items-center gap-1 px-3 py-1.5 font-serif text-xs border border-[#c2a878] ${currentIndex === experiences.length - 1 ? 'opacity-30' : 'text-[#8b6b4a]'}`}>SELANJUTNYA <ChevronRight className="w-4 h-4" /></button>
            </div>
            
            <div className="hidden md:block absolute bottom-8 left-8">
              <button onClick={handlePrev} disabled={currentIndex === 0} className={`flex items-center gap-2 px-4 py-2 font-serif tracking-widest text-sm border border-[#c2a878] transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'text-[#8b6b4a] hover:bg-[#c2a878] hover:text-[#ece5d3]'}`}>
                <ChevronLeft className="w-4 h-4" /> NEXT
              </button>
            </div>
          </div>

          {/* --- HALAMAN KANAN (Gambar/Slider) --- */}
          {/* KUNCI PERBAIKAN: Mengganti flex-1 menjadi w-full md:w-1/2 */}
          <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center relative bg-[#ece5d3] md:bg-transparent z-10">
            
            <div className="w-full max-w-sm md:max-w-md lg:max-w-md aspect-4/3 md:aspect-[1.4/1] bg-[#d3c5af] p-1.5 md:p-2 shadow-lg border border-[#c2a878]/50 relative group flex flex-col">
              
              <div className="flex items-center justify-between p-1.5 md:p-2 border-b border-[#8b6b4a]/20 bg-[#f8f4e6]/30 mb-1.5">
                <span className="text-[10px] font-serif text-[#8b6b4a] uppercase tracking-widest">Documentation</span>
                <Maximize2 className="w-3.5 h-3.5 text-[#8b6b4a]/50" />
              </div>

              <div className="w-full flex-1 border border-dashed border-[#8b6b4a]/40 bg-[#f8f4e6]/50 relative overflow-hidden flex items-center justify-center p-2">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-2 flex items-center justify-center"
                  >
                    {activeImage.src ? (
                      <img 
                        src={activeImage.src} 
                        alt={activeImage.caption} 
                        className="w-full h-full object-contain drop-shadow-sm" 
                      />
                    ) : (
                      <span className="font-serif text-[#8b6b4a]/60 tracking-widest text-xs md:text-sm text-center px-4 leading-relaxed">
                        {activeImage.caption}
                      </span>
                    )}
                  </motion.div>
                </AnimatePresence>

                {currentExp.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage} 
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#f8f4e6]/90 p-1.5 hover:bg-[#c2a878] transition-colors border border-[#8b6b4a]/30 shadow-md group/btn z-10"
                    >
                      <ChevronLeft className="w-4 h-4 text-[#8b6b4a] group-hover/btn:text-white" />
                    </button>
                    <button 
                      onClick={nextImage} 
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#f8f4e6]/90 p-1.5 hover:bg-[#c2a878] transition-colors border border-[#8b6b4a]/30 shadow-md group/btn z-10"
                    >
                      <ChevronRight className="w-4 h-4 text-[#8b6b4a] group-hover/btn:text-white" />
                    </button>

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 p-1 bg-[#f8f4e6]/80 rounded-full shadow-sm">
                      {currentExp.images.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-[#8b6b4a] scale-125' : 'bg-[#8b6b4a]/30'}`} 
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <p className="mt-4 md:mt-5 text-xs md:text-sm italic text-[#8b6b4a] text-center max-w-sm px-4 h-12 flex items-center justify-center leading-snug">
               "{activeImage.caption}"
            </p>

            <div className="hidden md:block absolute bottom-8 right-8">
              <button onClick={handleNext} disabled={currentIndex === experiences.length - 1} className={`flex items-center gap-2 px-4 py-2 font-serif tracking-widest text-sm border border-[#c2a878] transition-all ${currentIndex === experiences.length - 1 ? 'opacity-30 cursor-not-allowed' : 'text-[#8b6b4a] hover:bg-[#c2a878] hover:text-[#ece5d3]'}`}>
                PREV <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}