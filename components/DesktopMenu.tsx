'use client';

import { motion, Variants } from 'framer-motion';
import { User, Compass, FolderKanban, FileText, Mail, Monitor } from 'lucide-react';

const apps = [
  { id: 'profile', name: 'Dionisius.exe', icon: User },
  { id: 'experience', name: "Chronicles.exe", icon: Compass },
  { id: 'projects', name: 'Projects.wav', icon: FolderKanban },
  { id: 'resume', name: 'CV-Resume.exe', icon: FileText },
  { id: 'contact', name: 'Transmission.exe', icon: Mail },
  { id: 'wallpaper', name: 'Display.exe', icon: Monitor }
];

// staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

interface DesktopMenuProps {
  onOpenApp: (appId: string) => void;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200 } }
};

export default function DesktopMenu({ onOpenApp }: DesktopMenuProps) {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl w-full px-4"
    >
      {apps.map((app) => (
        <motion.button
          key={app.id}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onOpenApp(app.id)}
          className="flex flex-col items-center justify-center gap-3 group focus:outline-none"
        >
          {/* icon */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-slate-800/40 backdrop-blur-md border border-slate-600/50 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-indigo-900/50 group-hover:border-indigo-400 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-white/10 to-transparent"></div>
            
            <app.icon className="w-10 h-10 md:w-12 md:h-12 text-slate-300 group-hover:text-indigo-300 transition-colors" />
          </div>

          {/* Nama Aplikasi */}
          <span className="text-xs md:text-sm font-medium tracking-wide text-slate-300 group-hover:text-white drop-shadow-md max-w-30 md:max-w-37.5 leading-tight text-center wrap-break-word">
            {app.name}
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
}