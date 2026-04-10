// components/WallpaperApp.tsx
'use client';

import { useWallpaper } from '@/context/WallpaperContext';
import { wallpapers } from '@/data/wallpaper';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

/**
 * Wallpaper selection and display settings application.
 * Renders a semi-transparent interface (glassmorphism) over the current wallpaper.
 * Allows toggling the wallpaper on/off and selecting a new background.
 */
export default function WallpaperApp() {
  // Access global wallpaper context
  const { isWallpaperEnabled, setIsWallpaperEnabled, activeWallpaper, setActiveWallpaper } = useWallpaper();

  return (
    // Transparent glassmorphism container for live preview
    <div className="w-full min-h-full bg-black/20 backdrop-blur-md py-10 px-4 md:py-12 flex flex-col items-center justify-start relative shadow-[inset_0_0_50px_rgba(0,0,0,0.2)]">
      
      {/* Header & Toggle Switch Section.
      */}
      <div className="flex flex-col items-center mb-8 md:mb-10 w-full transform-3d">
        
        {/* --- 
          ACTIVE WALLPAPER PREVIEW BADGE
        --- */}
        <div className="flex flex-col items-center gap-2 mb-6 md:mb-8 shrink-0">
          <span className="text-[10px] md:text-xs font-mono text-cyan-400/80 uppercase tracking-widest">
            Current Display
          </span>
          
          <div 
            className="w-32 md:w-48 aspect-video rounded-md overflow-hidden border border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.2)] relative"
          >
            <Image 
              src={activeWallpaper} 
              alt="Current Preview" 
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 768px) 128px, 192px"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
          </div>
        </div>
        {/* ------------------------------------------------------------- */}

        <h2 className="font-mono text-2xl md:text-3xl text-slate-100 tracking-widest uppercase mb-6 md:mb-8 text-center px-4">
          Display Settings
        </h2>
        
        {/* Toggle switch for enabling/disabling wallpaper */}
        <label className="flex items-center cursor-pointer group shrink-0">
          <div className="relative">
            <input 
              type="checkbox" 
              className="sr-only" 
              checked={isWallpaperEnabled}
              onChange={() => setIsWallpaperEnabled(!isWallpaperEnabled)}
            />
            <div className={`block w-14 h-8 rounded-full transition-colors duration-300 ${isWallpaperEnabled ? 'bg-cyan-600' : 'bg-slate-700'}`}></div>
            <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${isWallpaperEnabled ? 'transform translate-x-6' : ''}`}></div>
          </div>
          <div className="ml-4 font-mono text-xs md:text-sm text-slate-300 group-hover:text-cyan-300 transition-colors uppercase tracking-wider">
            {isWallpaperEnabled ? 'SYSTEM WALLPAPER: ON' : 'SYSTEM WALLPAPER: OFF'}
          </div>
        </label>
      </div>

      {/* Wallpaper Selection Grid 
      */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl px-2 transition-all duration-500 shrink-0 ${isWallpaperEnabled ? 'opacity-100 pointer-events-auto' : 'opacity-30 pointer-events-none grayscale'}`}>
        {wallpapers.map((wp) => (
          <div
            key={wp.id}
            onClick={() => setActiveWallpaper(wp.src)}
            className={`relative aspect-video rounded-sm overflow-hidden border-2 cursor-pointer group transition-all duration-300 ${activeWallpaper === wp.src && isWallpaperEnabled ? 'border-cyan-400 scale-105 shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'border-slate-700 hover:border-slate-400'}`}
          >
            <Image 
              src={wp.src} 
              alt={wp.name} 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            
            {/* Title and Source Link Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2 backdrop-blur-sm flex items-center justify-between">
              <span className="text-[10px] md:text-xs font-mono text-cyan-100 block truncate pr-2">
                {wp.name}
              </span>
              
              {/* Render the link icon ONLY if sourceUrl exists in data */}
              {wp.sourceUrl && (
                <a
                  href={wp.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} 
                  className="text-cyan-500 hover:text-cyan-200 transition-colors shrink-0"
                  title="Visit original source"
                >
                  <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}