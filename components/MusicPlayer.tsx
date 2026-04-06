'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Play, Pause, SkipForward, Disc } from 'lucide-react';
import { playlist } from '@/data/song';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null); 

  useEffect(() => {
    setPortalNode(document.getElementById('video-portal'));
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch(e => console.log("Gagal memutar audio:", e));
      } else {
        audioRef.current.pause();
      }
    }
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % playlist.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true); 
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = playlist[currentSongIndex].src;
      audioRef.current.load();
      
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }

      if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: playlist[currentSongIndex].title,
          artist: 'HOYO-MIX • Yuriku\'s Playlist',
          artwork: [
            { src: playlist[currentSongIndex].artwork || '/phonograph-cover.png', type: 'image/png' }
          ]
        });

        navigator.mediaSession.setActionHandler('play', () => audioRef.current?.play());
        navigator.mediaSession.setActionHandler('pause', () => audioRef.current?.pause());
        navigator.mediaSession.setActionHandler('nexttrack', nextSong);
      }
    }
  }, [currentSongIndex]);

  useEffect(() => {
    if (videoRef.current && playlist[currentSongIndex].video) {
      videoRef.current.src = playlist[currentSongIndex].video;
      videoRef.current.load();
      if (isPlaying) {
        videoRef.current.play().catch(() => {}); 
      }
    }
  }, [currentSongIndex, portalNode]); 

  return (
    <>
      {/* TELEPORTASI VIDEO KOSMIK */}
      {portalNode && playlist[currentSongIndex].video ? createPortal(
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className={`absolute top-0 left-0 w-screen h-screen object-cover scale-[1.35] transition-opacity duration-1000 ${
            isPlaying ? 'opacity-15' : 'opacity-0'
          }`}
        />,
        portalNode
      ) : null}

      {/* KOTAK MUSIC PLAYER */}
      <div className="relative z-10 w-full flex items-center bg-[#050b16]/80 border border-cyan-800/60 p-2 shadow-[0_0_15px_rgba(8,145,178,0.2)] backdrop-blur-md font-mono rounded-sm transition-all hover:bg-[#050b16]/95">
        
        <div className="relative flex items-center justify-center shrink-0 w-8 h-8 lg:w-10 lg:h-10 bg-cyan-950/50 border border-cyan-700/50 overflow-hidden">
          <Disc className={`w-5 h-5 text-cyan-400 ${isPlaying ? 'animate-[spin_3s_linear_infinite]' : ''}`} />
        </div>
        
        <div className="flex flex-col flex-1 min-w-0 mx-2 lg:mx-3">
          <span className="block text-[8px] lg:text-[9px] text-cyan-500/80 uppercase tracking-widest">
            Phonograph.exe
          </span>
          <span className="text-xs text-cyan-100 font-bold truncate transition-all">
            {playlist[currentSongIndex].title}
          </span>
        </div>

        <div className="flex items-center gap-1 lg:gap-2 shrink-0 border-l border-cyan-800/50 pl-2 lg:pl-3">
          <button onClick={togglePlay} className="p-1.5 lg:p-2 bg-cyan-900/30 hover:bg-cyan-700/50 border border-transparent hover:border-cyan-500/50 text-cyan-400 transition-all rounded-sm" title={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
          <button onClick={nextSong} className="p-1.5 lg:p-2 hover:bg-cyan-900/50 text-cyan-600 hover:text-cyan-300 transition-colors rounded-sm" title="Next Track">
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* AUDIO ENGINE */}
        <audio 
          ref={audioRef} 
          preload="none" 
          onPlay={() => {
            setIsPlaying(true);
            if (videoRef.current) {
              videoRef.current.currentTime = audioRef.current?.currentTime || 0;
              
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) playPromise.catch(() => {});
            }
          }}
          onPause={() => {
            setIsPlaying(false);
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }}
          onEnded={nextSong}
        />
      </div>
    </>
  );
}