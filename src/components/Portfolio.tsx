import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';
import { ArchitecturalImage } from './ArchitecturalImage';

interface PortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Residential', 'Private Residence', 'Luxury Apartment', 'Hospitality'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section
      id="work"
      className="relative w-full py-28 md:py-40 bg-[#141312] text-[#FAF8F5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Editorial Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#2A2622]">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-sans tracking-[0.25em] uppercase text-[#B39775] mb-4">
              <span>02 / PORTFOLIO</span>
              <span className="w-8 h-[1px] bg-[#B39775]/40" />
              <span className="text-[#8C857B]">2024 — 2026 ARCHIVE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-[#FAF8F5] tracking-tight">
              Selected Work
            </h2>
          </div>

          {/* Interactive Category Filter Tabs (Single-line controls with clean state) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-sans tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeFilter === cat
                    ? 'text-[#141312] bg-[#FAF8F5] font-medium'
                    : 'text-[#8C857B] hover:text-[#FAF8F5] border border-transparent hover:border-[#2E2A25]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Composition: Asymmetric Rhythm */}
        <div className="mt-16 md:mt-24 space-y-24 md:space-y-36">
          {/* Project 1: Full-Width Dominant Hero Composition (Casa Nera) */}
          {filteredProjects.find((p) => p.id === 'casa-nera') && (
            <div
              onClick={() => onSelectProject(filteredProjects.find((p) => p.id === 'casa-nera')!)}
              data-cursor="project"
              className="group cursor-pointer block"
            >
              <div className="relative overflow-hidden">
                <ArchitecturalImage
                  src={filteredProjects.find((p) => p.id === 'casa-nera')!.coverImage}
                  alt="Casa Nera, Mumbai by FORMA Atelier"
                  aspectRatio="aspect-[16/9] md:aspect-[21/9]"
                  className="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
                
                {/* Floating Architectural Badge */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-[#141312]/80 backdrop-blur-md px-3.5 py-1.5 border border-[#2E2A25] text-[10px] uppercase tracking-[0.2em] text-[#B39775]">
                  Featured Monograph
                </div>
              </div>

              {/* Project Meta Bar */}
              <div className="mt-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-[#221F1C] pb-6">
                <div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#8C857B] mb-1 font-sans">
                    <span>Mumbai, India</span>
                    <span>·</span>
                    <span className="text-[#B39775]">Residential</span>
                    <span>·</span>
                    <span className="font-mono">2026</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif font-light text-[#FAF8F5] group-hover:text-[#B39775] transition-colors">
                    Casa Nera
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-[#8C857B] group-hover:text-[#FAF8F5] transition-colors">
                  <span className="hidden sm:inline italic font-serif text-sm">“A study in shadow, stone and silence”</span>
                  <div className="flex items-center gap-1 text-[#B39775]">
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Dual Staggered Project Duo (The Quiet House + Atelier 27) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* The Quiet House: 7-column wide with gentle lag */}
            {filteredProjects.find((p) => p.id === 'the-quiet-house') && (
              <div
                onClick={() => onSelectProject(filteredProjects.find((p) => p.id === 'the-quiet-house')!)}
                data-cursor="project"
                data-speed="0.95"
                className="lg:col-span-7 group cursor-pointer"
              >
                <div className="overflow-hidden">
                  <ArchitecturalImage
                    src={filteredProjects.find((p) => p.id === 'the-quiet-house')!.coverImage}
                    alt="The Quiet House, Goa"
                    aspectRatio="aspect-[4/3]"
                    className="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C857B] mb-1">
                    <span>Goa, India</span>
                    <span>·</span>
                    <span className="text-[#B39775]">Private Residence</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl md:text-4xl font-serif font-light text-[#FAF8F5] group-hover:text-[#B39775] transition-colors">
                      The Quiet House
                    </h3>
                    <div className="flex items-center gap-1 text-xs uppercase tracking-wider text-[#8C857B] group-hover:text-[#FAF8F5] transition-colors">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-[#8C857B] font-light max-w-md line-clamp-2">
                    Rammed earth volumes and ancient timber screens dissolved within a coastal forest grove.
                  </p>
                </div>
              </div>
            )}

            {/* Atelier 27: 5-column tall with top offset and faster float speed */}
            {filteredProjects.find((p) => p.id === 'atelier-27') && (
              <div
                onClick={() => onSelectProject(filteredProjects.find((p) => p.id === 'atelier-27')!)}
                data-cursor="project"
                data-speed="1.12"
                className="lg:col-span-5 lg:pt-20 group cursor-pointer"
              >
                <div className="overflow-hidden">
                  <ArchitecturalImage
                    src={filteredProjects.find((p) => p.id === 'atelier-27')!.coverImage}
                    alt="Atelier 27, Delhi"
                    aspectRatio="aspect-[3/4]"
                    className="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C857B] mb-1">
                    <span>Delhi, India</span>
                    <span>·</span>
                    <span className="text-[#B39775]">Luxury Apartment</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[#FAF8F5] group-hover:text-[#B39775] transition-colors">
                      Atelier 27
                    </h3>
                    <div className="flex items-center gap-1 text-xs uppercase tracking-wider text-[#8C857B] group-hover:text-[#FAF8F5] transition-colors">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-[#8C857B] font-light max-w-sm line-clamp-2">
                    Monolithic Arabescato marble counters and patinated brass partitions.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Secondary Duo (Terra House + Sora) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Terra House: 5-column wide with faster float speed */}
            {filteredProjects.find((p) => p.id === 'terra-house') && (
              <div
                onClick={() => onSelectProject(filteredProjects.find((p) => p.id === 'terra-house')!)}
                data-cursor="project"
                data-speed="1.1"
                className="lg:col-span-5 group cursor-pointer"
              >
                <div className="overflow-hidden">
                  <ArchitecturalImage
                    src={filteredProjects.find((p) => p.id === 'terra-house')!.coverImage}
                    alt="Terra House, Bangalore"
                    aspectRatio="aspect-[4/3]"
                    className="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C857B] mb-1">
                    <span>Bangalore, India</span>
                    <span>·</span>
                    <span className="text-[#B39775]">Residential</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[#FAF8F5] group-hover:text-[#B39775] transition-colors">
                      Terra House
                    </h3>
                    <div className="flex items-center gap-1 text-xs uppercase tracking-wider text-[#8C857B] group-hover:text-[#FAF8F5] transition-colors">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-[#8C857B] font-light max-w-sm line-clamp-2">
                    Courtyard architecture bathed in micro-cement textures and dappled courtyard light.
                  </p>
                </div>
              </div>
            )}

            {/* Sora: 7-column wide with gentle lag */}
            {filteredProjects.find((p) => p.id === 'sora') && (
              <div
                onClick={() => onSelectProject(filteredProjects.find((p) => p.id === 'sora')!)}
                data-cursor="project"
                data-speed="0.94"
                className="lg:col-span-7 lg:-mt-12 group cursor-pointer"
              >
                <div className="overflow-hidden">
                  <ArchitecturalImage
                    src={filteredProjects.find((p) => p.id === 'sora')!.coverImage}
                    alt="Sora, Dubai"
                    aspectRatio="aspect-[16/10]"
                    className="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C857B] mb-1">
                    <span>Dubai, UAE</span>
                    <span>·</span>
                    <span className="text-[#B39775]">Hospitality</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl md:text-4xl font-serif font-light text-[#FAF8F5] group-hover:text-[#B39775] transition-colors">
                      Sora
                    </h3>
                    <div className="flex items-center gap-1 text-xs uppercase tracking-wider text-[#8C857B] group-hover:text-[#FAF8F5] transition-colors">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-[#8C857B] font-light max-w-md line-clamp-2">
                    A twelve-suite desert sanctuary sculpted in pale travertine and vaulted skylight scoops.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
