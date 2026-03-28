'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface SystemWindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function SystemWindow({ title, onClose, children }: SystemWindowProps) {
  return (
    // --- 1. OVERLAY (Layar Belakang Gelap) ---
    // Harus 'fixed inset-0' agar menutupi seluruh layar
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-sm"
    >
      
      {/* --- 2. KONTAINER JENDELA UTAMA --- */}
      {/* Di sini kita terapkan proporsi baru: max-w-[90vw] dan max-h-[90vh] */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-[95vw] xl:max-w-7xl h-[90vh] md:max-h-[90vh] flex flex-col bg-slate-900 border border-slate-600/50 rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden"      
    >
        
        {/* Header Jendela (Glowing Blue) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-400/40 bg-linear-to-r from-blue-950/90 via-cyan-900/40 to-blue-950/90 shrink-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-cyan-400 text-lg">⟡</span>
            <h2 className="text-sm md:text-base font-mono tracking-widest text-cyan-50 uppercase">{title}</h2>
          </div>
          <button onClick={onClose} className="p-2 text-cyan-400 hover:text-cyan-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Isi Konten Aplikasi */}
        <div className="relative flex-1 overflow-y-auto bg-slate-950 custom-scrollbar z-10">
          {children}
        </div>

      </motion.div>
    </motion.div>
  );
}