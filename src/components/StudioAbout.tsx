import React, { useEffect, useRef, useState } from 'react';
import { ArchitecturalImage } from './ArchitecturalImage';

export const StudioAbout: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Statistics counter state
  const [counts, setCounts] = useState({ years: 0, projects: 0, cities: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const duration = 1600;
    const startTime = performance.now();

    const animateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quart
      const ease = 1 - Math.pow(1 - progress, 4);

      setCounts({
        years: Math.round(ease * 12),
        projects: Math.round(ease * 84),
        cities: Math.round(ease * 18),
      });

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      id="studio"
      className="relative w-full py-28 md:py-36 bg-[#161413] text-[#FAF8F5] overflow-hidden"
    >
      {/* Decorative architectural grid lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2A2622] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-[11px] font-sans tracking-[0.25em] uppercase text-[#B39775] mb-12">
          <span>01 / THE STUDIO</span>
          <span className="w-12 h-[1px] bg-[#B39775]/30" />
          <span className="text-[#8C857B]">PHILOSOPHY & SCALE</span>
        </div>

        {/* Large Editorial Headline */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-[#FAF8F5] leading-[1.08] tracking-tight">
            We design spaces with a sense of <span className="italic font-normal text-[#EAE5DE]">belonging</span>.
          </h2>
        </div>

        {/* Asymmetric Composition: Large Image + Narrative + Small Supporting Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Hero Interior Image with slower speed */}
          <div className="lg:col-span-7" data-speed="0.93">
            <div className="relative group">
              <ArchitecturalImage
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                alt="FORMA Atelier studio architectural study"
                aspectRatio="aspect-[4/3] md:aspect-[16/11]"
                containerClassName="shadow-2xl"
              />
              <div className="mt-4 flex items-baseline justify-between text-[11px] uppercase tracking-[0.2em] text-[#8C857B] font-sans">
                <span>Fig. 01 — Daylight study across honed limestone</span>
                <span className="font-mono text-[#B39775]">2026.04</span>
              </div>
            </div>

            {/* In-depth Narrative */}
            <div className="mt-12 max-w-xl">
              <p className="text-base md:text-lg font-sans font-light text-[#C4BDB5] leading-relaxed">
                FORMA creates residential and hospitality interiors focused on materiality, light, proportion and human experience. Rather than adhering to fleeting decorative trends, our work is grounded in architectural permanence.
              </p>
              <p className="mt-6 text-sm md:text-base font-sans font-light text-[#8C857B] leading-relaxed">
                Every commission begins with an intensive dialogue about living rituals: where morning sunlight falls while coffee brews, how sound travels across open living volumes, and the tactile warmth of touching honest wood and stone at dusk.
              </p>
            </div>
          </div>

          {/* Right Column: Smaller Offset Imagery + Statistics Area with faster floating speed */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12 lg:pt-12">
            {/* Supporting Close-up Material Image with offset */}
            <div className="relative group self-end w-full max-w-sm" data-speed="1.15">
              <ArchitecturalImage
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
                alt="Tactile timber joinery and raw stone corner detail"
                aspectRatio="aspect-[3/4]"
                containerClassName="shadow-xl"
              />
              <div className="mt-3 flex items-baseline justify-between text-[11px] uppercase tracking-[0.2em] text-[#8C857B] font-sans">
                <span>Fig. 02 — Bespoke joinery detail</span>
                <span className="text-[#B39775]">1:1 SCALE</span>
              </div>
            </div>

            {/* Statistics Section with clean hairline borders & unboxed numbers */}
            <div className="border-t border-[#2A2622] pt-8" data-speed="1.04">
              <div className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#8C857B] mb-8">
                PRACTICE BENCHMARKS
              </div>

              <div className="grid grid-cols-3 gap-6">
                {/* Metric 1 */}
                <div className="flex flex-col">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#FAF8F5] tracking-tight tabular-nums">
                    {counts.years}+
                  </div>
                  <div className="mt-2 text-xs font-sans text-[#B39775] uppercase tracking-wider font-medium">
                    Years
                  </div>
                  <div className="text-[11px] font-sans text-[#8C857B] leading-tight mt-1">
                    Designing spaces
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex flex-col border-l border-[#2A2622] pl-6">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#FAF8F5] tracking-tight tabular-nums">
                    {counts.projects}
                  </div>
                  <div className="mt-2 text-xs font-sans text-[#B39775] uppercase tracking-wider font-medium">
                    Projects
                  </div>
                  <div className="text-[11px] font-sans text-[#8C857B] leading-tight mt-1">
                    Completed worldwide
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex flex-col border-l border-[#2A2622] pl-6">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#FAF8F5] tracking-tight tabular-nums">
                    {counts.cities}
                  </div>
                  <div className="mt-2 text-xs font-sans text-[#B39775] uppercase tracking-wider font-medium">
                    Cities
                  </div>
                  <div className="text-[11px] font-sans text-[#8C857B] leading-tight mt-1">
                    Global commissions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
