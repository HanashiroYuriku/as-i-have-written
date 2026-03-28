'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const epilogues = [
  { text: "Thank you for your hard work all these while.", to: "Aglaea" },
  { text: "From now on, no more goodbyes.", to: "Tribios" },
  { text: "Mydeimos, become king.", to: "Mydei" },
  { text: "The place you reside is the gentle sea of flowers.", to: "Castorice" },
  { text: "The seeds you've sown are already sprouting.", to: "Anaxa" },
  { text: "It's you who healed the sky.", to: "Hyacine" },
  { text: "Homeward you come, distant wind.", to: "Cipher" },
  { text: "Did you see? Amphoreus has ushered in the dawn.", to: "Phainon" },
  { text: "May the next feast be eternal.", to: "Hysilens" },
  { text: "The stars shall sing of the Imperator's great journey.", to: "Cerydra" },
  { text: "We were never apart.", to: "March 7th" },
  { text: "Let's walk towards tomorrow together!", to: "Dan Heng • Permansor Terrae" },
  // --- Teks Placeholder untuk MC & Cyrene (Bisa kamu ubah nanti) ---
  { text: "May your journey lead you starward.", to: "Trailblazer" },
  { text: "The story you left behind will be remembered forever.", to: "Cyrene" }
];

export default function EpilogueText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Menggunakan setTimeout yang bergantung pada perubahan index
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % epilogues.length);
    }, 5000); // 5000 ms = 5 detik
    
    // Cleanup function untuk mencegah kebocoran memori
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="pointer-events-auto flex justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          // Ubah flex-row menjadi flex-col dan items-center agar menumpuk rapi di tengah
          className="flex flex-col items-center justify-center gap-1 md:gap-2 text-center"
        >
          {/* Kalimat Kutipan */}
          <span className="text-indigo-50 font-serif italic text-xs md:text-sm lg:text-base drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] px-4">
            "{epilogues[index].text}"
          </span>
          
          {/* Target Karakter */}
          <span className="text-indigo-400 font-mono tracking-widest text-[10px] md:text-xs uppercase drop-shadow-[0_0_5px_rgba(99,102,241,0.8)] mt-1">
            to {epilogues[index].to}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}