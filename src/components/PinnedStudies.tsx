import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem, PROJECTS_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

interface PinnedStudiesProps {
  onSelectProject: (project: ProjectItem) => void;
}

const PINNED_ITEMS = [
  {
    project: PROJECTS_DATA[0], // Casa Nera
    studyNumber: '01',
    theme: 'Shadow & Volumetric Monoliths',
    quote: 'Manipulating sea breezes and tropical glare into deep contemplative silence.',
    detail: 'Fluted Deccan basalt wall with recessed 2400K architectural graze.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
  },
  {
    project: PROJECTS_DATA[1], // The Quiet House
    studyNumber: '02',
    theme: 'Rammed Earth & Forest Dissolution',
    quote: 'Erasing the threshold between living shelter and ancient cashew grove.',
    detail: 'On-site laterite and clay walls paired with reclaimed teak louvers.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
  },
  {
    project: PROJECTS_DATA[2], // Atelier 27
    studyNumber: '03',
    theme: 'Tectonic Marble & Light Wells',
    quote: 'Proportion as the highest luxury, eliminating visual noise for living art.',
    detail: 'Monolithic Arabescato marble counter with patinated metal pivot partitions.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
  },
  {
    project: PROJECTS_DATA[4], // Sora
    studyNumber: '04',
    theme: 'Desert Diurnal Light Sculpting',
    quote: 'Vaulted northern light scoops drawing cool serenity across dunes.',
    detail: 'Hand-applied lime plaster surfaces meeting pale travertine colonnades.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
  },
];

export const PinnedStudies: React.FC<PinnedStudiesProps> = ({ onSelectProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPinnedRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the left panel while right items scroll through on desktop
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top+=80',
          end: 'bottom bottom-=80',
          pin: leftPinnedRef.current,
          pinSpacing: false,
        });

        // Trigger index changes for each card
        PINNED_ITEMS.forEach((_, idx) => {
          ScrollTrigger.create({
            trigger: `#pinned-item-${idx}`,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => setActiveIndex(idx),
            onEnterBack: () => setActiveIndex(idx),
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const active = PINNED_ITEMS[activeIndex];

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 md:py-36 bg-[#121110] text-[#FAF8F5] overflow-hidden border-t border-[#221F1C]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Intro Tag */}
        <div className="flex items-center gap-3 text-[11px] font-sans tracking-[0.28em] uppercase text-[#B39775] mb-16">
          <span>03 / PINNED SPATIAL STUDIES</span>
          <span className="w-12 h-[1px] bg-[#B39775]/40" />
          <span className="text-[#8C857B]">CURATED COMPOSITIONS</span>
        </div>

        {/* Dual Layout: Pinned Left Column + Flowing Right Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          {/* Pinned Left Information Hub */}
          <div
            ref={leftPinnedRef}
            className="lg:col-span-5 lg:h-[75vh] flex flex-col justify-between py-4"
          >
            <div>
              {/* Active Monograph Index Indicator */}
              <div className="flex items-center gap-4 text-xs font-mono text-[#B39775] mb-6">
                <span className="text-2xl font-serif text-[#FAF8F5] tracking-normal">
                  {active.studyNumber}
                </span>
                <span className="text-[#8C857B]">/ 04</span>
                <span className="w-12 h-[1px] bg-[#2E2A25]" />
                <span className="text-[11px] tracking-widest uppercase text-[#8C857B]">
                  {active.project.location}
                </span>
              </div>

              {/* Dynamic Title with transition */}
              <h3 className="text-3xl sm:text-5xl font-serif font-light text-[#FAF8F5] tracking-tight leading-[1.08] transition-all duration-500">
                {active.project.title}
              </h3>

              <div className="mt-4 text-xs font-sans uppercase tracking-[0.2em] text-[#B39775]">
                {active.theme}
              </div>

              <blockquote className="mt-8 text-base md:text-lg font-serif italic text-[#C4BDB5] leading-relaxed border-l-2 border-[#B39775]/50 pl-5 transition-all duration-500">
                “{active.quote}”
              </blockquote>

              <p className="mt-6 text-xs md:text-sm font-sans font-light text-[#8C857B] leading-relaxed">
                {active.detail}
              </p>
            </div>

            {/* Bottom Monograph Action */}
            <div className="pt-8 border-t border-[#24211D] flex items-center justify-between">
              <button
                onClick={() => onSelectProject(active.project)}
                className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#FAF8F5] hover:text-[#B39775] transition-colors cursor-pointer"
              >
                <span>View Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 text-[#B39775] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <span className="text-[11px] font-mono text-[#5C564E]">
                {active.project.year} · {active.project.area}
              </span>
            </div>
          </div>

          {/* Right Scrollable Visual Cards with Parallax Feel */}
          <div className="lg:col-span-7 space-y-24 md:space-y-40">
            {PINNED_ITEMS.map((item, idx) => (
              <div
                key={item.studyNumber}
                id={`pinned-item-${idx}`}
                onClick={() => onSelectProject(item.project)}
                data-cursor="project"
                className="group cursor-pointer relative"
              >
                {/* Large Visual Card */}
                <div className="relative overflow-hidden bg-[#1A1816] aspect-[16/10] md:aspect-[16/11] border border-[#24211D] shadow-2xl transition-all duration-700 group-hover:border-[#B39775]/60">
                  <img
                    src={item.image}
                    alt={item.project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105 filter brightness-[0.9] contrast-[1.05]"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/80 via-transparent to-transparent opacity-80" />

                  {/* Card Overlay Metadata */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-baseline justify-between text-xs font-sans text-[#FAF8F5]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#B39775]" />
                      <span className="uppercase tracking-widest font-mono text-[11px]">
                        STUDY {item.studyNumber}
                      </span>
                    </div>
                    <span className="uppercase tracking-widest text-[#B39775] text-[11px]">
                      {item.project.category}
                    </span>
                  </div>
                </div>

                {/* Mobile Meta info displayed underneath on small screens */}
                <div className="mt-4 flex lg:hidden items-baseline justify-between text-xs text-[#8C857B]">
                  <span className="font-serif text-lg text-[#FAF8F5]">
                    {item.project.title}
                  </span>
                  <span>{item.project.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
