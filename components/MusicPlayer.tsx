'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, Disc } from 'lucide-react';
import { playlist } from '@/data/song';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Gagal memutar audio:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % playlist.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true); 
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = playlist[currentSongIndex].src;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Gagal memutar audio:", e));
      }
    }
  }, [currentSongIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => nextSong();
    
    if (audio) {
      audio.addEventListener('ended', handleEnded);
      return () => audio.removeEventListener('ended', handleEnded);
    }
  }, [currentSongIndex]);

  return (
    <div className="w-full flex items-center bg-[#050b16]/80 border border-cyan-800/60 p-2 shadow-[0_0_15px_rgba(8,145,178,0.2)] backdrop-blur-md font-mono rounded-sm transition-all hover:bg-[#050b16]/95">
      
      {/* Icon */}
      <div className="relative flex items-center justify-center shrink-0 w-8 h-8 md:w-10 md:h-10 bg-cyan-950/50 border border-cyan-700/50 overflow-hidden">
        <Disc className={`w-5 h-5 text-cyan-400 ${isPlaying ? 'animate-[spin_3s_linear_infinite]' : ''}`} />
      </div>
      
      {/* song information */}
      <div className="flex flex-col flex-1 min-w-0 mx-2 md:mx-3">
        <span className="md:block text-[8px] md:text-[9px] text-cyan-500/80 uppercase tracking-widest">
          Phonograph.exe
        </span>
        <span className="text-xs text-cyan-100 font-bold truncate transition-all">
          {playlist[currentSongIndex].title}
        </span>
      </div>

      {/* Kontrol Navigasi */}
      <div className="flex items-center gap-1 md:gap-2 shrink-0 border-l border-cyan-800/50 pl-2 md:pl-3">
        <button 
          onClick={togglePlay}
          className="p-1.5 md:p-2 bg-cyan-900/30 hover:bg-cyan-700/50 border border-transparent hover:border-cyan-500/50 text-cyan-400 transition-all rounded-sm"
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>
        <button 
          onClick={nextSong}
          className="p-1.5 md:p-2 hover:bg-cyan-900/50 text-cyan-600 hover:text-cyan-300 transition-colors rounded-sm"
          title="Next Track"
        >
          <SkipForward className="w-4 h-4" />
        </button>
      </div>

      {/* Tag Audio Tersembunyi */}
      <audio ref={audioRef} preload="none" />
    </div>
  );
}