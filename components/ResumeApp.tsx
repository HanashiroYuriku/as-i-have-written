'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, History, Award, X, ExternalLink } from 'lucide-react';
import { resumeTimeline } from '@/data/resume';

export default function ResumeApp() {
  const [selectedCert, setSelectedCert] = useState<{src: string, id: string, url?: string} | null>(null);

  return (
    <div className="w-full h-full bg-[#ece5d3] relative overflow-y-auto custom-scrollbar font-serif select-none flex flex-col">
      {/* Background Ornament */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8b6b4a_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none"></div>
      
      {/* --- HEADER  --- */}
      <div className="relative md:absolute top-0 left-0 w-full pt-6 md:pt-10 px-4 flex flex-col md:flex-row justify-center md:justify-between items-center z-20">
        <div className="flex justify-center items-center gap-2 md:gap-4 md:absolute md:left-1/2 md:-translate-x-1/2 mb-4 md:mb-0">
          <div className="h-px w-12 md:w-24 bg-linear-to-r from-transparent to-[#8b6b4a]"></div>
          <h2 className="text-[#4a3b32] text-sm md:text-xl tracking-[0.2em] font-medium uppercase text-center">Echoes of the Past</h2>
          <div className="h-px w-12 md:w-24 bg-linear-to-l from-transparent to-[#8b6b4a]"></div>
        </div>

        {/* Tombol Download Group */}
        <div className="md:absolute md:right-10 flex flex-row w-full md:w-auto justify-center md:justify-end gap-3 mt-1 md:mt-0">
          <a href="/CV_ID.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#c2a878] text-[#f8f4e6] rounded-full shadow-md hover:bg-[#8b6b4a] transition-all group border border-[#ece5d3]">
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase">CV [ID]</span>
          </a>
          <a href="/CV_EN.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#8b6b4a] text-[#f8f4e6] rounded-full shadow-md hover:bg-[#c2a878] transition-all group border border-[#ece5d3]">
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase">CV [EN]</span>
          </a>
        </div>
      </div>

      {/* --- MAIN KONTEN --- */}
      <div className="flex-1 flex flex-col md:flex-row w-full items-center justify-center p-6 md:px-12 md:pt-24 gap-8 md:gap-0 relative z-10">
        
        {/* --- MEM --- */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="w-full md:flex-1 flex flex-col justify-center items-center gap-4">
          <div className="relative w-[65%] md:w-full md:max-w-100 aspect-square flex items-center justify-center">
            <div className="absolute inset-0 border border-[#c2a878]/30 rounded-full animate-[spin_20s_linear_infinite] z-0"></div>
            <motion.div 
              className="z-10 w-full h-full bg-[url('/mem.webp')] bg-contain bg-no-repeat bg-center filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
              animate={{ rotate: [0, -3, 3, 0], y: [0, -4, 0] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
            />
          </div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="text-[#8b6b4a] font-serif italic text-xs md:text-sm text-center max-w-62.5 md:max-w-xs drop-shadow-sm">
            "Mem has helped write this down for you!"
          </motion.p>
        </motion.div>

        {/* --- TIMELINE --- */}
        <div className="w-full md:flex-1 h-full flex flex-col justify-center gap-4 max-w-xl pb-10 md:pb-0">
          <div className="md:max-h-[60vh] overflow-y-visible md:overflow-y-auto pr-0 md:pr-4 custom-scrollbar space-y-4">
            {resumeTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-[#f8f4e6]/95 border border-[#c2a878]/50 p-5 md:p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-2.5 left-8 md:top-1/2 md:-left-2.5 md:-translate-y-1/2 w-0 h-0 border-b-10 border-b-[#f8f4e6] md:border-b-transparent md:border-r-10 md:border-r-[#f8f4e6] border-x-[10px] md:border-x-transparent md:border-y-[10px] md:border-y-transparent border-x-transparent"></div>
                
                <div className="flex justify-between items-start mb-2">
                  <p className="text-[#8b6b4a] text-[10px] md:text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                    <History className="w-3 h-3 md:w-4 md:h-4" /> {item.date}
                  </p>
                  
                  {/* TOMBOL SERTIFIKAT */}
                  {item.certificateSrc && (
                    <button 
                      onClick={() => setSelectedCert({ 
                        src: item.certificateSrc!, 
                        id: item.certificateId || 'CERT-UNSPECIFIED',
                        url: item.certificateUrl 
                      })}
                      className="flex items-center gap-1.5 p-1.5 md:px-2.5 md:py-1 bg-[#c2a878]/10 hover:bg-[#c2a878] text-[#8b6b4a] hover:text-[#f8f4e6] border border-[#c2a878]/40 rounded-sm transition-colors group cursor-pointer"
                      title="Lihat Sertifikat"
                    >
                      <Award className="w-3.5 h-3.5 group-hover:scale-110 transition-transform shrink-0" />
                      <span className="hidden md:block text-[10px] font-bold tracking-wider uppercase">Certificate</span>
                    </button>
                  )}
                </div>

                <p className="text-[#4a3b32] text-xs md:text-sm leading-relaxed italic">
                  "{item.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MODAL SERTIFIKAT  --- */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-2 md:p-12 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 10 }}
              className="w-full max-w-[95%] md:max-w-3xl bg-[#ece5d3] p-3 md:p-4 shadow-2xl border border-[#c2a878] relative flex flex-col max-h-[95vh] md:max-h-[80vh]"
            >
              {/* Bingkai Dalam */}
              <div className="w-full h-full border border-dashed border-[#8b6b4a]/40 bg-[#f8f4e6]/80 flex flex-col relative overflow-hidden">
                
                {/* Header Modal */}
                <div className="flex items-start md:items-center justify-between p-3 md:p-4 border-b border-[#8b6b4a]/20 bg-[#d3c5af]/20 gap-2 shrink-0">
                  
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[9px] md:text-sm font-serif text-[#8b6b4a] font-bold tracking-widest md:tracking-[0.15em] uppercase break-all leading-tight select-text">
                      ID: {selectedCert.id}
                    </span>
                    
                    {/* link */}
                    {selectedCert.url && (
                      <a 
                        href={selectedCert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 md:p-1.5 bg-[#c2a878]/20 hover:bg-[#c2a878] text-[#8b6b4a] hover:text-[#f8f4e6] rounded-sm transition-colors flex shrink-0"
                        title="Verifikasi Sertifikat Resmi"
                      >
                        <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </a>
                    )}
                  </div>
                  
                  <div className="flex items-center shrink-0">
                    <button onClick={() => setSelectedCert(null)} className="p-1 md:p-1.5 hover:bg-[#c2a878]/30 rounded-full text-[#8b6b4a] transition-colors">
                      <X className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                  </div>
                </div>

                {/* img */}
                <div className="flex-1 overflow-auto p-2 md:p-4 flex items-center justify-center bg-black/5">
                  <img 
                    src={selectedCert.src} 
                    alt="Certificate" 
                    className="max-w-full max-h-full md:max-w-[80%] md:max-h-[80%] object-contain drop-shadow-lg" 
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}