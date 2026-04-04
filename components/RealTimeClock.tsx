'use client';

import { useState, useEffect } from 'react';

export default function RealTimeClock() {
  const [time, setTime] = useState<string>("--:--");
  const [shortDate, setShortDate] = useState<string>("Load...");
  const [longDate, setLongDate] = useState<string>("Loading...");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      
      const timeFormatted = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      
      // Format Panjang untuk Desktop (Contoh: SATURDAY, APRIL 4 2026)
      const weekdayLong = now.toLocaleDateString('en-US', { weekday: 'long' });
      const monthLong = now.toLocaleDateString('en-US', { month: 'long' });
      
      // Format Pendek untuk Mobile (Contoh: SAT, APR 4 2026)
      const weekdayShort = now.toLocaleDateString('en-US', { weekday: 'short' });
      const monthShort = now.toLocaleDateString('en-US', { month: 'short' });
      
      const day = now.getDate();
      const year = now.getFullYear();

      setLongDate(`${weekdayLong}, ${monthLong} ${day} ${year}`);
      setShortDate(`${weekdayShort}, ${monthShort} ${day} ${year}`);
      setTime(timeFormatted);
    };

    updateClock(); 
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span className="uppercase text-slate-300 drop-shadow-sm whitespace-nowrap">
        <span className="md:hidden text-xs tracking-wider">{shortDate}</span>
        <span className="hidden md:inline text-xs md:text-sm tracking-widest">{longDate}</span>
      </span>
      
      <div className="w-px h-3 md:h-4 bg-slate-600 shrink-0"></div>
      <span className="font-mono text-base md:text-lg text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] shrink-0">
        {time}
      </span>
    </>
  );
}