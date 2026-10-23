import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  image: string;
  quote: string;
  palette: string;
}

const SERVICES_LIST: ServiceItem[] = [
  {
    number: '01',
    title: 'Interior Architecture',
    summary: 'Spatial planning, volume articulation, structural alterations, sightlines and daylight choreography.',
    deliverables: ['Volumetric Realignment', 'Structural Openings', 'Circulation & Sightlines', 'Climatic Solar Modeling'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    quote: 'Manipulating structural mass to carve calm, proportional volumes.',
    palette: 'Raw Travertine / Shadow Reveals',
  },
  {
    number: '02',
    title: 'Interior Design',
    summary: 'Materiality, bespoke furniture, vintage acquisitions, tactile lighting design and sensory identity.',
    deliverables: ['Tactile Material Curations', 'Bespoke Lighting Schemes', 'Curated Art & Vintage Acquisitions', 'Acoustic Balancing'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
    quote: 'Every surface responds to touch, acoustic resonance, and natural light.',
    palette: 'Smoked Oak / Patinated Bronze',
  },
  {
    number: '03',
    title: 'Bespoke Interiors',
    summary: 'Custom commissioned elements crafted specifically for each residence by master stone and timber artisans.',
    deliverables: ['Architectural Millwork', 'Monolithic Stone Countertops', 'Hand-turned Bronze Hardware', 'Custom Hand-loomed Rugs'],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85',
    quote: 'Crafted without standard catalogues—engineered solely for your life.',
    palette: 'Chiseled Basalt / Raw Belgian Flax',
  },
  {
    number: '04',
    title: 'Hospitality & Culture',
    summary: 'Boutique hotels, private members clubs, tasting rooms and experiential destinations.',
    deliverables: ['Experiential Brand Narrative', 'Operational Flow Optimization', 'Sensory Journey Mapping', 'Turnkey Construction Oversight'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
    quote: 'Atmospheric destinations that leave unforgettable emotional memory.',
    palette: 'Lime Plaster / Vaulted Light Scoops',
  },
];

interface ServicesSectionProps {
  onStartProject: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onStartProject }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const containerRef = useRef<HTMLElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Step triggers as user scrolls through each service block
      SERVICES_LIST.forEach((_, idx) => {
        ScrollTrigger.create({
          trigger: `#service-block-${idx}`,
          start: 'top center+=120',
          end: 'bottom center',
          onEnter: () => {
            setActiveIdx(idx);
            updateProgress(idx);
          },
          onEnterBack: () => {
            setActiveIdx(idx);
            updateProgress(idx);
          },
        });
      });

      function updateProgress(idx: number) {
        if (progressLineRef.current) {
          const pct = ((idx + 1) / SERVICES_LIST.length) * 100;
          gsap.to(progressLineRef.current, {
            width: `${pct}%`,
            duration: 0.4,
            ease: 'power2.out',
          });
        }
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative w-full py-28 md:py-40 bg-[#151312] text-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="pb-10 border-b border-[#2A2622]">
          <div className="flex items-center gap-3 text-[11px] font-sans tracking-[0.25em] uppercase text-[#B39775] mb-4">
            <span>05 / SPATIAL DISCIPLINES</span>
            <span className="w-8 h-[1px] bg-[#B39775]/40" />
            <span className="text-[#8C857B]">PINNED STUDIO SCOPE</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-[#FAF8F5] tracking-tight">
              Spatial Services
            </h2>

            {/* Pinned Stage Indicator */}
            <div className="flex flex-col items-start md:items-end gap-2">
              <div className="flex items-center gap-3 text-xs font-mono text-[#B39775] tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-[#B39775] animate-pulse" />
                <span>PINNED DISCIPLINE 0{activeIdx + 1} / 04</span>
              </div>
              <div className="w-48 h-[2px] bg-[#2A2622] overflow-hidden">
                <div
                  ref={progressLineRef}
                  className="h-full bg-[#B39775]"
                  style={{ width: `${((activeIdx + 1) / 4) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dual Split-Screen: Left Scrolling Stories + Right Pinned Showcase (Sticky Pinning) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          {/* Left Column: Sequential Scrollable Discipline Stories */}
          <div className="lg:col-span-7 space-y-28 md:space-y-44">
            {SERVICES_LIST.map((service, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={service.number}
                  id={`service-block-${idx}`}
                  onClick={() => setActiveIdx(idx)}
                  className={`group transition-all duration-500 cursor-pointer pt-8 border-t ${
                    isActive
                      ? 'border-[#B39775] opacity-100 pl-4'
                      : 'border-[#2A2622] opacity-40 hover:opacity-80'
                  }`}
                >
                  {/* Step Number and Header */}
                  <div className="flex items-baseline justify-between gap-4 mb-4">
                    <div className="flex items-baseline gap-4 md:gap-6">
                      <span className="text-base font-mono tracking-widest text-[#B39775] font-semibold">
                        {service.number}
                      </span>
                      <h3 className="text-3xl sm:text-5xl font-serif font-light text-[#FAF8F5] group-hover:text-[#B39775] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <ArrowUpRight
                      className={`w-6 h-6 text-[#B39775] transition-transform duration-300 ${
                        isActive ? 'translate-x-1 -translate-y-1 opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    />
                  </div>

                  {/* Philosophy Quote */}
                  <p className="text-lg sm:text-xl font-serif italic text-[#EAE5DE] mb-4">
                    “{service.quote}”
                  </p>

                  {/* Narrative Deck */}
                  <p className="text-sm md:text-base font-sans font-light text-[#A8A199] leading-relaxed max-w-xl mb-6">
                    {service.summary}
                  </p>

                  {/* Deliverables Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className={`text-[11px] font-sans tracking-wider uppercase px-3 py-1.5 border transition-colors ${
                          isActive
                            ? 'text-[#FAF8F5] bg-[#1E1B18] border-[#B39775]'
                            : 'text-[#8C857B] bg-[#1A1816] border-[#2A2622]'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#8C857B] mt-4">
                    <span className="text-[#B39775]">TONAL PALETTE:</span>
                    <span>{service.palette}</span>
                  </div>

                  {/* Mobile Preview Image on small screens */}
                  <div className="mt-6 lg:hidden aspect-[16/10] overflow-hidden border border-[#2A2622]">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Pinned Dynamic Visual Showcase */}
          <div className="lg:col-span-5 hidden lg:block sticky top-28 self-start">
            <div className="h-[75vh] flex flex-col justify-between py-2">
              {/* Image Frame with Cross-fade Layering */}
              <div className="relative overflow-hidden bg-[#1E1B18] aspect-[4/5] shadow-2xl border border-[#2E2A25]">
                {SERVICES_LIST.map((srv, idx) => (
                  <img
                    key={srv.number}
                    src={srv.image}
                    alt={srv.title}
                    referrerPolicy="no-referrer"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out will-change-transform ${
                      activeIdx === idx
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-105 pointer-events-none z-0'
                    }`}
                  />
                ))}

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-transparent opacity-85 z-20" />

                {/* Live Pinned Badge & Monogram */}
                <div className="absolute top-6 left-6 z-30 bg-[#141312]/80 backdrop-blur-md px-3.5 py-1.5 border border-[#2E2A25] text-[10px] font-mono tracking-widest text-[#B39775] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B39775]" />
                  <span>PINNED STUDY // {SERVICES_LIST[activeIdx].number}</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-30 flex items-baseline justify-between text-xs font-sans tracking-widest uppercase text-[#FAF8F5]">
                  <span className="font-serif text-lg text-[#FAF8F5] normal-case tracking-normal">
                    {SERVICES_LIST[activeIdx].title}
                  </span>
                  <span className="text-[#B39775] text-[11px] font-mono">
                    STAGE {SERVICES_LIST[activeIdx].number}
                  </span>
                </div>
              </div>

              {/* Pinned Bottom Detail Bar */}
              <div className="pt-6 border-t border-[#24211D] flex items-center justify-between">
                <span className="text-xs text-[#8C857B] uppercase tracking-widest">
                  Tailored Spatial Commissions
                </span>
                <button
                  onClick={onStartProject}
                  data-cursor="cta"
                  className="text-xs font-sans uppercase tracking-widest text-[#B39775] hover:text-[#FAF8F5] transition-colors underline underline-offset-4 cursor-pointer"
                >
                  Inquire for your space →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
