import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
  isReady: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onStartProject, isReady }) => {
  const [animStep, setAnimStep] = useState(0);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isReady) return;

    // Staggered reveal timeline
    const timers = [
      setTimeout(() => setAnimStep(1), 150),   // Image clip reveal
      setTimeout(() => setAnimStep(2), 450),   // Editorial label reveal
      setTimeout(() => setAnimStep(3), 750),   // Headline line 1 reveal
      setTimeout(() => setAnimStep(4), 1050),  // Headline line 2 reveal
      setTimeout(() => setAnimStep(5), 1350),  // Supporting quote reveal
      setTimeout(() => setAnimStep(6), 1650),  // CTAs & scroll indicator reveal
    ];

    return () => timers.forEach(clearTimeout);
  }, [isReady]);

  // Parallax scrub on scroll
  useEffect(() => {
    if (!heroSectionRef.current || !heroImageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(heroImageRef.current, {
        yPercent: 16,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroSectionRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#141312] text-[#FAF8F5] pt-24 pb-12 px-6 md:px-12 lg:px-16"
    >
      {/* Background Architectural Visual with cinematic mask & GSAP parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dark tonal gradation scrim for optimal contrast and warmth */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#141312] via-[#141312]/50 to-[#141312]/80" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#141312]/90 via-[#141312]/40 to-transparent" />
        
        {/* Hero image with clip-path reveal */}
        <div
          className={`w-full h-full transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            animStep >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            clipPath: animStep >= 1 ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
          }}
        >
          <img
            ref={heroImageRef}
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85"
            alt="FORMA Atelier architectural interior living space"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05] will-change-transform"
          />
        </div>

        {/* Delicate subtle architectural grid overlay */}
        <div className="absolute inset-0 z-10 opacity-15 pointer-events-none bg-[radial-gradient(#B39775_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* Top Editorial Ribbon */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-6 md:pt-10">
        <div
          className={`flex items-center justify-between text-[11px] md:text-xs font-sans tracking-[0.28em] uppercase text-[#8C857B] transition-all duration-1000 ${
            animStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#B39775] inline-block" />
            INTERIOR ARCHITECTURE / 2026
          </span>
          <span className="hidden sm:inline text-[#B39775]/70">
            MUMBAI · DUBAI · GOA · DELHI
          </span>
        </div>
      </div>

      {/* Center Cinematic Headline Composition */}
      <div className="relative z-20 max-w-7xl mx-auto w-full my-auto py-12 md:py-16">
        <div className="max-w-5xl">
          {/* Subtle Atelier Monogram */}
          <div
            className={`text-xs md:text-sm tracking-[0.35em] uppercase text-[#B39775] font-sans font-light mb-4 transition-all duration-1000 ${
              animStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            FORMA ATELIER
          </div>

          {/* Staggered Line 1 */}
          <div className="overflow-hidden">
            <h1
              className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light tracking-tight text-[#FAF8F5] leading-[0.95] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                animStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
              }`}
            >
              Spaces that
            </h1>
          </div>

          {/* Staggered Line 2 (with italic editorial emphasis) */}
          <div className="overflow-hidden mt-1 md:mt-3">
            <h1
              className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light tracking-tight text-[#FAF8F5] leading-[0.95] transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                animStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
              }`}
            >
              <span className="italic font-normal text-[#EAE5DE] pr-2">feel</span> like you.
            </h1>
          </div>

          {/* Supporting Statement */}
          <div className="mt-8 md:mt-12 max-w-xl">
            <p
              className={`text-base md:text-lg lg:text-xl font-sans font-light text-[#C4BDB5] leading-relaxed transition-all duration-1000 ${
                animStep >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              “Interior architecture and bespoke spaces designed around the way you live.”
            </p>
          </div>

          {/* CTAs */}
          <div
            className={`mt-10 md:mt-12 flex flex-wrap items-center gap-5 md:gap-8 transition-all duration-1000 ${
              animStep >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Primary Explore CTA */}
            <button
              onClick={onExploreWork}
              data-cursor="cta"
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-[#FAF8F5] text-[#141312] text-xs font-sans tracking-[0.2em] uppercase font-medium hover:bg-white hover:shadow-[0_0_30px_rgba(250,248,245,0.25)] transition-all duration-300 cursor-pointer"
            >
              <span>Explore Our Work</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>

            {/* Secondary Start a Project CTA */}
            <button
              onClick={onStartProject}
              data-cursor="cta"
              className="group inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#FAF8F5] hover:text-[#B39775] transition-colors py-3 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#B39775]" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Bar & Scroll Indicator */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex items-end justify-between border-t border-[#2A2622]/80 pt-6">
        <div
          className={`flex items-center gap-6 text-[11px] font-sans tracking-[0.2em] uppercase text-[#8C857B] transition-all duration-1000 ${
            animStep >= 6 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span>ARCHITECTURAL PORTFOLIO</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">BESPOKE RESIDENCES & HOSPITALITY</span>
        </div>

        {/* Scroll down trigger */}
        <button
          onClick={onExploreWork}
          className={`group flex items-center gap-3 text-[11px] font-sans tracking-[0.25em] uppercase text-[#8C857B] hover:text-[#FAF8F5] transition-all duration-1000 cursor-pointer ${
            animStep >= 6 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="hidden sm:inline">Scroll to discover</span>
          <div className="w-7 h-7 rounded-full border border-[#2E2A25] group-hover:border-[#B39775] flex items-center justify-center transition-colors">
            <ArrowDown className="w-3 h-3 text-[#B39775] animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
