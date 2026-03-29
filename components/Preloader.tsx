'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const greetings = [
  "Hello World!",    
  "Halo Dunia!",      
  "Olá mundo",       
  "Bonjour le monde",
  "こんにちは世界",    
  "Hola Mundo",      
  "Ciao Mondo",      
  "Hallo Welt",      
  "Привет, мир",     
  "안녕 세상",        
  "你好，世界",       
  "مرحبا بالعالم",   
  "नमस्ते दुनिया",    
  "Γειά σου Κόσμε",  
  "สวัสดีชาวโลก"      
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 400);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => onComplete(), 800);
      return () => clearTimeout(finishTimer);
    }
  }, [index, onComplete]);

  const isPinkText = Math.floor(index / 2) % 2 === 0;
  const currentTextColor = isPinkText ? "#f498b8" : "#ffffff"; 

  return (
    <motion.div
      // KUNCI PERUBAHAN: Tambahkan onClick dan cursor-pointer
      onClick={onComplete}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0f172a] cursor-pointer"
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
    >
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, color: currentTextColor }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="text-2xl md:text-4xl font-mono tracking-widest text-center font-bold drop-shadow-[0_0_15px_currentColor]"
          >
            {greetings[index]}
          </motion.h1>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] animate-pulse"
      >
        [ Click anywhere to bypass ]
      </motion.div>
    </motion.div>
  );
}