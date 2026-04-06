'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const epilogues = [
  { text: "Without me, there is no world. Go think, observe... And conquer.", character: "Cerydra" },
  { text: "Life is like the ocean: Tides rise and fall, and everything eventually dissolves into the waves. So, sing your heart out in every moment of your existence.", character: "Helektra" },
  { text: "K'll the play, and games shall be born. K'll the strife, and glory shall descend.", character: "Mydeimos" },
  { text: "If your heart still has room to spare, share a bit of gentleness and softly cherish all the beautiful things around you.", character: "Castorice" },
  { text: "Truth is a solvent that dissolves all things in the world, and thus cannot objectively exist. I have a brilliant proof for this in mind, but since we're nearing the end of the story, I shall not elaborate.", character: "Anaxagoras" },
  { text: "Trust and selflessness are the two most beautiful garments in the world: one to gift others, one to adorn yourself.", character: "Aglaea" },
  { text: "Look up at the sky more often and smile more. Many stubborn ailments fear optimism, but it's the best medicine!", character: "Hyacinthia" },
  { text: "Don't be afraid to fall: just run! Destiny's just a slow-moving nymph. It can't catch you!", character: "Cifera" },
  { text: "Whether it's a sunny day or rainy day, remember to tell yourself before you drift off to sleep: 'See you tomorrow!'", character: "Tribbios" },
  { text: "A hero is living in everyone's heart. Embrace it, and chase after the Sun.", character: "Khaslana" },
  { text: "The pen will eventually break, the ink will run dry, and life will ultimately fade, but thoughts remain in sagas.", character: "Dan Heng" },
  { text: "If time is an endless cycle, then forget the bitterness that keeps repeating, and remember only the moments of happiness!", character: "March 7th" },
  { text: "And with this, As I've Written officially comes to an end... See you later.", character: "Cyrene" }
];

export default function EpilogueText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % epilogues.length);
    }, 7000); 
    
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="pointer-events-auto flex justify-center w-full px-4 lg:px-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="flex flex-col items-center justify-center gap-2 lg:gap-3 text-center max-w-3xl"
        >
          <span className="text-indigo-50 font-serif italic text-xs lg:text-sm xl:text-base drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] leading-tight lg:leading-relaxed">
            "{epilogues[index].text}"
          </span>
          
          <span className="text-indigo-400 font-mono tracking-widest text-[10px] lg:text-xs uppercase drop-shadow-[0_0_5px_rgba(99,102,241,0.8)] mt-1">
            ~ {epilogues[index].character}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}