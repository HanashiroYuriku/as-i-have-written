'use client';

import { motion } from 'framer-motion';

export default function ProfileApp() {
  return (
    // container
    <div className="w-full h-full bg-[#ece5d3] text-[#4a3b32] flex flex-col md:flex-row overflow-y-auto overflow-x-hidden relative shadow-[inset_0_0_50px_rgba(0,0,0,0.1)]">
      
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-8 -ml-4 bg-linear-to-r from-transparent via-black/10 to-transparent pointer-events-none"></div>

      {/* --- HALAMAN KIRI --- */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 p-8 md:p-12 flex flex-col justify-center relative border-b-2 md:border-b-0 md:border-r-2 border-[#d3c5af]/50"
      >
        {/* Ornamen Atas */}
        <div className="w-full h-1 border-t border-b border-[#c2a878] mb-8 opacity-60"></div>

        <h3 className="text-lg md:text-xl font-serif text-[#8b6b4a] mb-2 tracking-widest uppercase">Hi, I'm</h3>
        <h1 className="text-3xl md:text-5xl font-bold font-serif leading-tight text-[#3d2e25] mb-6">
          Dionisius Geovanni<br />Caesario
        </h1>
        
        <p className="text-sm md:text-base leading-relaxed mb-8 text-[#5c4b3f] font-medium">
          I am an Informatics graduate from Universitas Atma Jaya Yogyakarta. 
          With a strong focus on backend development, I've worked with technologies like 
          Golang, PowerBI, and Next.js. I enjoy learning new things 
          and solving complex problems.
        </p>

        {/* Tech Stack Badges */}
        <div className="mt-auto">
          <p className="text-xs uppercase tracking-widest text-[#8b6b4a] mb-3 font-bold border-b border-[#c2a878]/30 pb-1 inline-block">Tech Arsenal</p>
          <div className="flex flex-wrap gap-2">
            {['Golang', 'Laravel', 'Next.js', 'PHP', 'TypeScript', 'MySQL', 'PostgreSQL', 'Redis', 'PowerBI', 'Tableau'].map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1.5 bg-[#dfd6c1] border border-[#c2a878]/50 rounded-full text-xs font-bold text-[#5c4b3f] shadow-sm transition-all duration-300 hover:border-[#c2a878] hover:shadow-[0_0_10px_#c2a878] hover:-translate-y-0.5 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* --- HALAMAN KANAN --- */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex-1 p-8 md:p-12 flex items-center justify-center relative"
      >
        {/* Ornamen Latar Belakang */}
        <div className="absolute w-75 h-75 border border-[#c2a878]/30 rounded-full flex items-center justify-center">
          <div className="w-70 h-70 border border-[#c2a878]/20 rounded-full border-dashed"></div>
        </div>

        {/* Bingkai Foto */}
        <div className="relative z-10 p-3 bg-[#f8f4e6] border-2 border-[#c2a878] shadow-xl">
          <div className="w-48 h-64 md:w-64 md:h-80 bg-[#d3c5af] flex items-center justify-center overflow-hidden border border-[#c2a878]/50 relative group">            
            <span className="font-serif text-[#8b6b4a] tracking-widest z-0">FOTO PROFIL</span>
            
            <img 
              src="/profile-pict.jpeg" 
              alt="Dionisius Geovanni" 
              className="absolute inset-0 z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>
        </div>

        {/* Ornamen Bawah */}
        <div className="absolute bottom-12 w-1/2 h-1 border-t border-b border-[#c2a878] opacity-60"></div>
      </motion.div>

    </div>
  );
}