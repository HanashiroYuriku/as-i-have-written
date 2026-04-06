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
      
      // Format Panjang Desktop
      const weekdayLong = now.toLocaleDateString('en-US', { weekday: 'long' });
      const monthLong = now.toLocaleDateString('en-US', { month: 'long' });
      
      // Format Pendek Mobile
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
      <span className="uppercase text-slate-300 drop-shadow-sm whitespace-nowrap flex items-center pt-1 pb-1">
        <span className="lg:hidden text-sm tracking-wider">{shortDate}</span>
        
        <span className="hidden lg:inline text-sm tracking-widest">{longDate}</span>
      </span>
      
      <div className="w-px h-5 lg:h-6 bg-slate-600 shrink-0"></div>
      
      <span className="font-mono text-lg lg:text-md text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] shrink-0 flex items-center leading-none">
        {time}
      </span>
    </>
  );
}