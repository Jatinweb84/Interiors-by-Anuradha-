import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'link' | 'project' | 'cta'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  // Position references for silky smooth RAF interpolation
  const currentPos = useRef({ x: -100, y: -100 });
  const mousePos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Touch detection
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mousePos.current = { x: e.clientX, y: e.clientY };
      setTargetPos({ x: e.clientX, y: e.clientY });

      // Detect cursor context
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      const ctaEl = target.closest('[data-cursor="cta"]') || target.closest('button[data-primary="true"]');
      const linkEl = target.closest('a, button, [role="button"], input, textarea, select');

      if (projectEl) {
        setCursorType('project');
      } else if (ctaEl) {
        setCursorType('cta');
      } else if (linkEl) {
        setCursorType('link');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    // Ultra-smooth physics interpolation loop
    let animId: number;
    const animate = () => {
      // Ease factor 0.15 gives high-precision yet buttery lag
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.16;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Precision Instant Center Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full transition-all duration-200 pointer-events-none ${
          cursorType === 'project' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
        style={{
          width: '5px',
          height: '5px',
          backgroundColor: '#B39775',
          willChange: 'transform',
        }}
      />

      {/* Lagged Fluid Outer Ring / Disc Tracker */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none transition-all duration-300 ease-out will-change-transform ${
          cursorType === 'default'
            ? 'w-8 h-8 border border-[#B39775]/35 bg-transparent'
            : cursorType === 'link'
            ? 'w-12 h-12 border border-[#B39775] bg-[#B39775]/10 backdrop-blur-[1px]'
            : cursorType === 'cta'
            ? 'w-14 h-14 border-2 border-[#B39775] bg-[#B39775]/25 scale-110 shadow-[0_0_20px_rgba(179,151,117,0.3)]'
            : 'w-24 h-24 bg-[#141312]/92 border border-[#B39775] text-[#FAF8F5] shadow-2xl backdrop-blur-md scale-100'
        }`}
      >
        {cursorType === 'project' && (
          <div className="flex flex-col items-center justify-center text-center animate-fade-in pointer-events-none">
            <span className="text-[9px] uppercase font-sans tracking-[0.25em] text-[#B39775] font-semibold leading-tight">
              VIEW<br />PROJECT
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
