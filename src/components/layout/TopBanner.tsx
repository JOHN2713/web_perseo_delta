'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TopBanner() {
  const [time, setTime] = useState({ hours: 0, minutes: 3, seconds: 28 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset to 3 minutes when it reaches zero
          hours = 0;
          minutes = 3;
          seconds = 0;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#2563eb] via-[#1e40af] to-[#1e3a8a] py-2.5 shadow-lg">
      {/* Stars pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-6 px-4">
        {/* Left: Demo text */}
        <div className="flex items-center gap-2.5 text-white">
          <svg className="h-5 w-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="3" />
            <circle cx="10" cy="10" r="6" opacity="0.3" />
          </svg>
          <span className="text-sm font-normal">
            <span className="font-bold text-[#ff6b35]">Demo en vivo:</span> aprende cómo automatizar tu contabilidad en minutos
          </span>
        </div>

        {/* Countdown */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="rounded bg-black/60 px-3 py-1.5 text-center backdrop-blur-sm">
              <span className="text-lg font-bold text-white">
                {String(time.hours).padStart(2, '0')}
              </span>
              <span className="text-xs text-white/70">h</span>
            </div>
            <div className="rounded bg-black/60 px-3 py-1.5 text-center backdrop-blur-sm">
              <span className="text-lg font-bold text-white">
                {String(time.minutes).padStart(2, '0')}
              </span>
              <span className="text-xs text-white/70">m</span>
            </div>
            <div className="rounded bg-black/60 px-3 py-1.5 text-center backdrop-blur-sm">
              <span className="text-lg font-bold text-white">
                {String(time.seconds).padStart(2, '0')}
              </span>
              <span className="text-xs text-white/70">s</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/#contacto"
          className="flex items-center gap-2 rounded-md bg-gradient-to-r from-[#ff6b35] to-[#f97316] px-6 py-2.5 text-sm font-bold uppercase text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          AGENDAR DEMO
        </Link>

        {/* Close button */}
        <button 
          className="absolute right-4 text-white/70 transition-colors hover:text-white"
          aria-label="Cerrar banner"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
