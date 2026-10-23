import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [phaseText, setPhaseText] = useState('01 / VOLUMETRIC HARMONY');

  useEffect(() => {
    const startTime = performance.now();
    const duration = 2400; // 2.4 seconds of smooth cinematic progression

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      
      // Smooth cubic bezier easing: easeInOutCubic
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const currentPct = Math.round(eased * 100);
      setProgress(currentPct);

      if (currentPct < 35) {
        setPhaseText('01 / VOLUMETRIC HARMONY');
      } else if (currentPct < 70) {
        setPhaseText('02 / TACTILE MATERIAL CURATION');
      } else if (currentPct < 99) {
        setPhaseText('03 / CHOREOGRAPHING LIGHT & SHADOW');
      } else {
        setPhaseText('04 / ATELIER READY');
      }

      if (t < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        // Hold 100% for 300ms for sensory completion, then exit smoothly
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 900);
        }, 300);
      }
    };

    const animId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(onComplete, 400);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#121110] text-[#EBE6DF] p-8 md:p-14 transition-all duration-[900ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isExiting ? '-translate-y-full opacity-90' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Background Architectural Watermark Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#B39775_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Top Edition Bar */}
      <div className="relative z-10 w-full flex items-center justify-between text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#8C857B] font-sans">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#B39775] inline-block" />
          <span>INTERIOR ARCHITECTURE</span>
        </div>
        <button
          onClick={handleSkip}
          className="text-[#8C857B] hover:text-[#B39775] transition-colors cursor-pointer text-[10px] uppercase tracking-widest"
        >
          [ Skip Intro ]
        </button>
      </div>

      {/* Center Wordmark with delicate reveal */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Architectural Emblem Icon */}
        <div className="w-12 h-12 mb-6 border border-[#2E2A25] relative flex items-center justify-center">
          <div className="absolute inset-2 border border-[#B39775]/40" />
          <div className="w-1.5 h-1.5 bg-[#B39775]" />
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-light tracking-[0.35em] text-[#FAF8F5] mb-2 pl-3">
          FORMA
        </h1>

        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#B39775] to-transparent my-4" />

        <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#B39775] font-light">
          Atelier of Bespoke Architecture
        </p>

        <p className="mt-3 text-[11px] font-mono text-[#8C857B] tracking-widest transition-opacity duration-300">
          {phaseText}
        </p>
      </div>

      {/* Bottom Progress Counter */}
      <div className="relative z-10 w-full max-w-sm flex flex-col gap-3">
        <div className="flex justify-between items-baseline text-[11px] font-mono tracking-widest text-[#8C857B] tabular-nums">
          <span className="text-[10px] text-[#A69E94]">CALIBRATING SPACE</span>
          <span className="text-[#FAF8F5] text-xs">{progress}%</span>
        </div>

        {/* Hairline Progress Track */}
        <div className="h-[2px] w-full bg-[#24211D] relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#8C6D4C] via-[#B39775] to-[#EAE5DE] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between text-[9px] uppercase tracking-[0.25em] text-[#5C564E] font-sans">
          <span>MUMBAI</span>
          <span>DUBAI</span>
          <span>GOA</span>
          <span>DELHI</span>
        </div>
      </div>
    </div>
  );
};
