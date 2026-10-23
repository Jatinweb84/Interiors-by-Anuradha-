import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MATERIALS_DATA, MaterialItem } from '../data/portfolioData';
import { Sparkles, X, ChevronRight, ChevronLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const MaterialsSection: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const getDistance = () => {
          return track.scrollWidth - window.innerWidth + 160;
        };

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1.2,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (progressBarRef.current) {
                progressBarRef.current.style.width = `${self.progress * 100}%`;
              }
            },
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
        };
      });
    }, section);

    // Refresh after images mount
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="materials"
      className="relative w-full py-20 lg:py-28 bg-[#121110] text-[#FAF8F5] border-t border-[#221F1C]"
    >
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#2A2622]">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-sans tracking-[0.25em] uppercase text-[#B39775] mb-3">
              <span>06 / MATERIALITY</span>
              <span className="w-8 h-[1px] bg-[#B39775]/40" />
              <span className="text-[#8C857B]">PINNED HORIZONTAL EXHIBITION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-[#FAF8F5] tracking-tight">
              Material / Light / Form
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-xs md:text-sm font-sans font-light text-[#8C857B] max-w-sm hidden sm:block">
              Scroll down to traverse our tactile material collection. Each substance is chosen for its acoustic warmth and longevity.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                className="w-9 h-9 rounded-full border border-[#2E2A25] hover:border-[#B39775] flex items-center justify-center text-[#8C857B] hover:text-[#FAF8F5] transition-colors lg:hidden"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                className="w-9 h-9 rounded-full border border-[#2E2A25] hover:border-[#B39775] flex items-center justify-center text-[#8C857B] hover:text-[#FAF8F5] transition-colors lg:hidden"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#B39775] tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#B39775] animate-ping" />
                <span>[ VERTICAL SCROLL PINS & SLIDES ]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pinned Scroll Progress Indicator */}
        <div className="w-full h-[2px] bg-[#2A2622] relative overflow-hidden mt-4 hidden lg:block">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-[#8C6D4C] via-[#B39775] to-[#EAE5DE] transition-all duration-75"
            style={{ width: '0%' }}
          />
        </div>
      </div>

      {/* Horizontal Scrolling Track (Pinned on Desktop, Swipeable on Mobile) */}
      <div className="w-full overflow-x-auto lg:overflow-hidden scrollbar-none px-6 md:px-12 lg:px-16">
        <div
          ref={trackRef}
          className="flex gap-8 md:gap-10 pb-8 lg:pb-0 w-max"
        >
          {MATERIALS_DATA.map((mat, idx) => (
            <div
              key={mat.id}
              onClick={() => setSelectedMaterial(mat)}
              data-cursor="project"
              className="group cursor-pointer flex flex-col bg-[#161413] border border-[#24211D] hover:border-[#B39775] transition-all duration-500 overflow-hidden w-[310px] sm:w-[380px] lg:w-[440px] shrink-0 shadow-2xl"
            >
              {/* Close-up image with gentle zoom on hover */}
              <div className="relative overflow-hidden aspect-[4/3] bg-[#1E1B18]">
                <img
                  src={mat.image}
                  alt={mat.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.9]"
                />
                <div className="absolute top-4 left-4 bg-[#141312]/85 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono tracking-widest text-[#B39775] border border-[#2A2622]">
                  EXHIBIT 0{idx + 1}
                </div>
              </div>

              {/* Material Text Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[#FAF8F5] group-hover:text-[#B39775] transition-colors">
                      {mat.name}
                    </h3>
                    <span className="text-[11px] font-sans text-[#8C857B] uppercase tracking-wider">
                      {mat.origin}
                    </span>
                  </div>
                  <div className="text-xs font-sans text-[#B39775] tracking-wide mb-3">
                    {mat.subtitle}
                  </div>
                  <p className="text-xs font-sans font-light text-[#8C857B] leading-relaxed line-clamp-2">
                    {mat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#221F1C] flex items-center justify-between text-[11px] uppercase tracking-widest text-[#8C857B] group-hover:text-[#FAF8F5] transition-colors">
                  <span>Inspect Tactile Properties</span>
                  <span className="text-[#B39775] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exhibition Footer Ribbon */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-12">
        <div className="p-6 md:p-8 bg-[#181614] border border-[#26231F] flex flex-col md:flex-row items-baseline justify-between gap-6">
          <div className="flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-[#B39775] shrink-0" />
            <p className="text-xs md:text-sm font-sans font-light text-[#C4BDB5]">
              Every client project receives a custom physical Material Sample Tray handcrafted in our Mumbai atelier with authentic stone offcuts, cured woods, and woven textiles.
            </p>
          </div>
          <span className="text-[11px] uppercase tracking-widest font-mono text-[#8C857B] shrink-0">
            SPECIFICATION TRAY // ATELIER 2026
          </span>
        </div>
      </div>

      {/* Material Detail Modal */}
      {selectedMaterial && (
        <div
          className="fixed inset-0 z-50 bg-[#141312]/90 backdrop-blur-md flex items-center justify-center p-6 md:p-12 animate-fade-in"
          onClick={() => setSelectedMaterial(null)}
        >
          <div
            className="bg-[#181614] border border-[#2E2A25] max-w-2xl w-full p-8 md:p-12 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMaterial(null)}
              className="absolute top-6 right-6 p-2 text-[#8C857B] hover:text-[#FAF8F5] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-[11px] font-sans tracking-[0.2em] uppercase text-[#B39775] mb-2">
              <span>MATERIAL STUDY</span>
              <span>·</span>
              <span>{selectedMaterial.origin}</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-serif font-light text-[#FAF8F5] mb-2">
              {selectedMaterial.name}
            </h3>
            <p className="text-sm font-sans text-[#B39775] mb-6">
              {selectedMaterial.subtitle}
            </p>

            <div className="aspect-[16/9] overflow-hidden bg-[#1E1B18] mb-6 border border-[#2E2A25]">
              <img
                src={selectedMaterial.image}
                alt={selectedMaterial.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-sans text-[#8C857B] block mb-1">
                  Architectural Intent
                </span>
                <p className="text-sm font-sans font-light text-[#EAE5DE] leading-relaxed">
                  {selectedMaterial.description}
                </p>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-widest font-sans text-[#8C857B] block mb-1">
                  Tactile Sensory Profile
                </span>
                <p className="text-sm font-sans font-light text-[#C4BDB5] italic">
                  “{selectedMaterial.tactileDescription}”
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#26231F] flex items-center justify-between">
              <span className="text-xs text-[#8C857B] font-mono">
                Sample tray available on project commission
              </span>
              <button
                onClick={() => setSelectedMaterial(null)}
                className="px-4 py-2 bg-[#FAF8F5] text-[#141312] text-xs font-sans uppercase tracking-widest font-medium cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
