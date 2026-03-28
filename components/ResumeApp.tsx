'use client';

import { motion } from 'framer-motion';
import { Download, History } from 'lucide-react';
import { resumeTimeline } from '@/data/resume';

export default function ResumeApp() {
  return (
    <div className="w-full h-full bg-[#ece5d3] relative overflow-y-auto custom-scrollbar font-serif select-none flex flex-col">
      {/* Background Ornament */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8b6b4a_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none"></div>
      
      {/* --- HEADER  --- */}
      <div className="relative md:absolute top-0 left-0 w-full pt-6 md:pt-10 px-4 flex flex-col md:flex-row justify-center md:justify-between items-center z-20">
        
        {/* Title */}
        <div className="flex justify-center items-center gap-2 md:gap-4 md:absolute md:left-1/2 md:-translate-x-1/2 mb-4 md:mb-0">
          <div className="h-px w-12 md:w-24 bg-linear-to-r from-transparent to-[#8b6b4a]"></div>
          <h2 className="text-[#4a3b32] text-sm md:text-xl tracking-[0.2em] font-medium uppercase text-center">Echoes of the Past</h2>
          <div className="h-px w-12 md:w-24 bg-linear-to-l from-transparent to-[#8b6b4a]"></div>
        </div>

        {/* Tombol Download Group */}
        <div className="md:absolute md:right-10 flex flex-row w-full md:w-auto justify-center md:justify-end gap-3 mt-1 md:mt-0">
          
          {/* Tombol CV Bahasa Indonesia */}
          <a 
            href="/CV_ID.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#c2a878] text-[#f8f4e6] rounded-full shadow-md hover:bg-[#8b6b4a] transition-all group border border-[#ece5d3]"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase">CV [ID]</span>
          </a>

          {/* Tombol CV Bahasa Inggris */}
          <a 
            href="/CV_EN.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#8b6b4a] text-[#f8f4e6] rounded-full shadow-md hover:bg-[#c2a878] transition-all group border border-[#ece5d3]"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase">CV [EN]</span>
          </a>
          
        </div>
      </div>

      {/* --- KONTEN UTAMA --- */}
      <div className="flex-1 flex flex-col md:flex-row w-full items-center justify-center p-6 md:px-12 md:pt-24 gap-8 md:gap-0 relative z-10">
        
        {/* --- ATAS/KIRI: GAMBAR KARAKTER --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:flex-1 flex flex-col justify-center items-center gap-4"
        >
          {/* Kontainer Mem */}
          <div className="relative w-62.5 h-62.5 md:w-100 md:h-100 flex items-center justify-center">
            <div className="absolute inset-0 border border-[#c2a878]/30 rounded-full animate-spin-slow z-0"></div>
            
            <motion.div 
              className="z-10 w-full h-full bg-[url('/mem.webp')] bg-contain bg-no-repeat bg-center filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
              animate={{
                rotate: [0, -3, 3, 0],
                y: [0, -4, 0],         
              }}
              transition={{
                duration: 5,           
                ease: "easeInOut",    
                repeat: Infinity,      
                repeatType: "mirror"   
              }}
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[#8b6b4a] font-serif italic text-xs md:text-sm text-center max-w-62.5 md:max-w-xs drop-shadow-sm"
          >
            "Mem has helped write this down for you!"
          </motion.p>
        </motion.div>

        {/* --- BAWAH/KANAN --- */}
        <div className="w-full md:flex-1 h-full flex flex-col justify-center gap-4 max-w-xl pb-10 md:pb-0">
          <div className="md:max-h-[60vh] overflow-y-visible md:overflow-y-auto pr-0 md:pr-4 custom-scrollbar space-y-4">
            {resumeTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-[#f8f4e6]/95 border border-[#c2a878]/50 p-5 md:p-6 rounded-sm shadow-sm"
              >
                {/* Segitiga Ekor Dialog */}
                <div className="absolute -top-2.5 left-8 md:top-1/2 md:-left-2.5 md:-translate-y-1/2 w-0 h-0 border-b-10 border-b-[#f8f4e6] md:border-b-transparent md:border-r-[#f8f4e6] border-x-10 md:border-x-transparent md:border-y-10 md:border-y-transparent border-x-transparent"></div>
                
                <p className="text-[#8b6b4a] text-[10px] md:text-xs font-bold tracking-widest mb-2 uppercase flex items-center gap-2">
                  <History className="w-3 h-3 md:w-4 md:h-4" /> {item.date}
                </p>
                <p className="text-[#4a3b32] text-xs md:text-sm leading-relaxed italic italic-font">
                  "{item.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}