'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { wallpapers } from '@/data/wallpaper';

interface WallpaperContextType {
  isWallpaperEnabled: boolean;
  setIsWallpaperEnabled: (val: boolean) => void;
  activeWallpaper: string;
  setActiveWallpaper: (val: string) => void;
  isVideoPlaying: boolean;
  setIsVideoPlaying: (val: boolean) => void;
}

const WallpaperContext = createContext<WallpaperContextType | undefined>(undefined);

export function WallpaperProvider({ children }: { children: ReactNode }) {
  const [isWallpaperEnabled, setIsWallpaperEnabled] = useState(false);
  const [activeWallpaper, setActiveWallpaper] = useState(wallpapers[0].src);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <WallpaperContext.Provider value={{
      isWallpaperEnabled, setIsWallpaperEnabled,
      activeWallpaper, setActiveWallpaper,
      isVideoPlaying, setIsVideoPlaying
    }}>
      {children}
    </WallpaperContext.Provider>
  );
}

export function useWallpaper() {
  const context = useContext(WallpaperContext);
  if (context === undefined) {
    throw new Error('useWallpaper must be used within a WallpaperProvider');
  }
  return context;
}