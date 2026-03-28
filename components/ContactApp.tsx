'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { socials } from '@/data/contacts';

export default function ContactApp() {
  return (
    <div className="w-full h-full bg-[#050a14] flex flex-col items-center p-6 md:p-8 font-mono overflow-y-auto custom-scrollbar">
      
      <div className="mb-8 text-center mt-4">
        <h2 className="text-cyan-400 font-bold tracking-widest uppercase mb-2">Signal Transmission</h2>
        <p className="text-cyan-100/50 text-xs md:text-sm max-w-md">The communication path is active. Please select the network protocol you wish to use.</p>
      </div>

      {/* --- GRID 2 --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl relative z-10 pb-10">
        {socials.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="group flex items-center gap-4 md:gap-5 p-4 bg-[#0a1122] border border-cyan-900/50 hover:border-cyan-400 hover:bg-[#0d1b33] transition-all shadow-lg rounded-sm"
          >
            <div className="p-3 bg-cyan-950 rounded-full text-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all shrink-0">
              <social.icon className="w-5 h-5" />
            </div>
            
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[10px] text-cyan-600 uppercase tracking-[0.2em] mb-1">{social.label}</span>
              <span className="text-cyan-50 group-hover:text-cyan-300 transition-colors font-bold tracking-wider truncate text-sm">
                {social.value}
              </span>
            </div>
            
            <Send className="w-4 h-4 text-cyan-900 group-hover:text-cyan-400 transition-colors shrink-0" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}