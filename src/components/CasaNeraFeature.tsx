import React, { useState } from 'react';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';
import { ProjectItem } from '../data/portfolioData';

interface CasaNeraFeatureProps {
  onOpenProject: (project: ProjectItem) => void;
  project: ProjectItem;
}

export const CasaNeraFeature: React.FC<CasaNeraFeatureProps> = ({ onOpenProject, project }) => {
  const [lightingMode, setLightingMode] = useState<'day' | 'evening'>('day');

  return (
    <section className="relative w-full py-28 md:py-40 bg-[#121110] text-[#FAF8F5] overflow-hidden border-t border-[#221F1C]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Marker */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-[#2A2622]">
          <div className="flex items-center gap-3 text-[11px] font-sans tracking-[0.25em] uppercase text-[#B39775]">
            <span>04 / MONOGRAPH STUDY</span>
            <span className="w-8 h-[1px] bg-[#B39775]/40" />
            <span className="text-[#8C857B]">RESIDENTIAL / MUMBAI / 2026</span>
          </div>

          {/* Interactive Diurnal Lighting Switcher */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-sans tracking-widest uppercase text-[#8C857B]">
              Atmosphere:
            </span>
            <div className="flex items-center p-1 bg-[#1A1816] border border-[#2E2A25]">
              <button
                onClick={() => setLightingMode('day')}
                className={`flex items-center gap-1.5 px-3 py-1 text-[11px] tracking-wider uppercase transition-all cursor-pointer ${
                  lightingMode === 'day'
                    ? 'bg-[#EAE5DE] text-[#141312] font-medium shadow-sm'
                    : 'text-[#8C857B] hover:text-[#FAF8F5]'
                }`}
              >
                <Sun className="w-3 h-3" />
                <span>Daylight</span>
              </button>
              <button
                onClick={() => setLightingMode('evening')}
                className={`flex items-center gap-1.5 px-3 py-1 text-[11px] tracking-wider uppercase transition-all cursor-pointer ${
                  lightingMode === 'evening'
                    ? 'bg-[#B39775] text-[#141312] font-medium shadow-sm'
                    : 'text-[#8C857B] hover:text-[#FAF8F5]'
                }`}
              >
                <Moon className="w-3 h-3" />
                <span>Evening</span>
              </button>
            </div>
          </div>
        </div>

        {/* Lead Case Study Headline */}
        <div className="mt-16 md:mt-20 max-w-4xl">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-[#FAF8F5] tracking-tight">
            Casa Nera
          </h2>
          <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-serif italic text-[#B39775] font-light">
            “A study in shadow, stone and silence.”
          </p>
          <p className="mt-6 text-base md:text-lg font-sans font-light text-[#C4BDB5] leading-relaxed max-w-2xl">
            Overlooking the Arabian Sea in Mumbai, Casa Nera rejects decorative ostentation.
            Instead, forty-foot fluted basalt walls modulate tropical glare into contemplative, monastic light.
          </p>
        </div>

        {/* Dynamic Dual-Lighting Main Hero Image */}
        <div className="mt-12 md:mt-16 relative overflow-hidden group">
          <div className="transition-all duration-1000">
            <ArchitecturalImage
              src={lightingMode === 'day' ? project.coverImage : project.eveningImage}
              alt="Casa Nera main living volume"
              aspectRatio="aspect-[16/9] md:aspect-[21/9]"
              className="transition-all duration-1000"
            />
          </div>
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-[#141312]/85 backdrop-blur-md px-4 py-2 border border-[#2E2A25] text-xs font-sans text-[#FAF8F5] flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#B39775]" />
            <span className="tracking-widest uppercase">
              {lightingMode === 'day' ? 'Natural 5400K Afternoon Sun' : 'Recessed 2400K Warm Grazing Cove'}
            </span>
          </div>
        </div>

        {/* Multi-angle Editorial Storytelling Composition with Differential Speeds */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Tile A: Close-up Material (Fluted Basalt + Bronze Seam) with gentle lag */}
          <div className="md:col-span-4 space-y-4" data-speed="0.94">
            <ArchitecturalImage
              src={project.detailImages[0]}
              alt="Casa Nera architectural detail"
              aspectRatio="aspect-[4/5]"
            />
            <div className="border-t border-[#221F1C] pt-3">
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#B39775] block">
                01. Materiality
              </span>
              <p className="text-xs font-sans text-[#8C857B] mt-1">
                Hand-chiseled basalt relief paired with recessed bronze shadow gaps.
              </p>
            </div>
          </div>

          {/* Tile B: Kitchen / Dining Monolith with elevated float speed */}
          <div className="md:col-span-4 space-y-4 md:pt-12" data-speed="1.12">
            <ArchitecturalImage
              src={project.detailImages[1]}
              alt="Casa Nera kitchen monolithic stone island"
              aspectRatio="aspect-[4/5]"
            />
            <div className="border-t border-[#221F1C] pt-3">
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#B39775] block">
                02. Culinary Hearth
              </span>
              <p className="text-xs font-sans text-[#8C857B] mt-1">
                Monolithic smoked granite counter anchored beneath custom suspended brass louvers.
              </p>
            </div>
          </div>

          {/* Tile C: Master Suite Sanctuary with gentle lag */}
          <div className="md:col-span-4 space-y-4 md:pt-24" data-speed="0.95">
            <ArchitecturalImage
              src={project.detailImages[2]}
              alt="Casa Nera master suite bedroom"
              aspectRatio="aspect-[4/5]"
            />
            <div className="border-t border-[#221F1C] pt-3">
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#B39775] block">
                03. Private Sanctuary
              </span>
              <p className="text-xs font-sans text-[#8C857B] mt-1">
                Acoustic Belgian linen wall panels and low-slung blackened teak platform bed.
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Quote & Action */}
        <div className="mt-20 md:mt-28 flex flex-col md:flex-row items-baseline justify-between gap-8 border-t border-[#2A2622] pt-12">
          <blockquote className="max-w-2xl font-serif text-xl sm:text-2xl md:text-3xl font-light text-[#EAE5DE] italic" data-speed="1.06">
            “The house does not fight Mumbai’s vibrancy; it provides the deep stillness required to celebrate it.”
          </blockquote>

          <button
            onClick={() => onOpenProject(project)}
            data-cursor="cta"
            className="flex items-center gap-3 px-6 py-3.5 bg-[#1F1C19] border border-[#2E2A25] hover:border-[#B39775] text-xs font-sans uppercase tracking-[0.2em] text-[#FAF8F5] transition-all cursor-pointer whitespace-nowrap group"
          >
            <span>Explore Full Monograph</span>
            <ArrowUpRight className="w-4 h-4 text-[#B39775] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
