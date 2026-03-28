'use client';

import { useState, useEffect } from 'react';

export default function RealTimeClock() {
  const [time, setTime] = useState<string>("--:--");
  const [date, setDate] = useState<string>("Load...");

  useEffect(() => {
    const updateClock = () => {
    const now = new Date();
    
    const timeFormatted = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    
    const weekday = now.toLocaleDateString('en-US', { weekday: 'long' });
    const month = now.toLocaleDateString('en-US', { month: 'long' });
    const day = now.getDate();
    const year = now.getFullYear();

    const dateFormatted = `${weekday}, ${month} ${day} ${year}`;

    setTime(timeFormatted);
    setDate(dateFormatted);
  };

    updateClock(); 
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span className="uppercase text-slate-300 drop-shadow-sm">{date}</span>
      <div className="w-px h-4 bg-slate-600"></div>
      <span className="font-mono text-lg text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">{time}</span>
    </>
  );
}