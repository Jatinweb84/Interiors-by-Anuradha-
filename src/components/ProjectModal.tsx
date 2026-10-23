import React, { useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { ProjectItem, PROJECTS_DATA } from '../data/portfolioData';
import { ArchitecturalImage } from './ArchitecturalImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onOpenInquiry: (projectName?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onOpenInquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];
  const prevProject = PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];

  return (
    <div className="fixed inset-0 z-50 bg-[#121110] text-[#FAF8F5] overflow-y-auto">
      {/* Top Floating Control Bar */}
      <header className="sticky top-0 z-40 bg-[#121110]/95 backdrop-blur-md border-b border-[#24211D] px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-sans text-[#8C857B]">
          <span className="text-[#B39775]">FORMA ATELIER</span>
          <span>/</span>
          <span>MONOGRAPH ARCHIVE</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => onOpenInquiry(project.title)}
            className="hidden sm:inline-block px-4 py-2 bg-[#FAF8F5] text-[#141312] text-xs font-sans uppercase tracking-widest font-medium cursor-pointer hover:bg-white"
          >
            Commission Inquiry
          </button>
          <button
            onClick={onClose}
            className="p-2.5 text-[#FAF8F5] hover:text-[#B39775] border border-[#2E2A25] hover:border-[#B39775] transition-colors cursor-pointer"
            aria-label="Close project view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Monograph Body */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Title Block */}
        <div className="border-b border-[#24211D] pb-10">
          <div className="flex flex-wrap items-center gap-4 text-xs font-sans uppercase tracking-[0.25em] text-[#8C857B] mb-4">
            <span>{project.location}</span>
            <span>·</span>
            <span className="text-[#B39775]">{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.area}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-[#FAF8F5] tracking-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-serif italic text-[#B39775] font-light">
            “{project.leadQuote}”
          </p>
        </div>

        {/* Hero Fullbleed Image */}
        <div className="my-12 overflow-hidden shadow-2xl border border-[#24211D]">
          <ArchitecturalImage
            src={project.coverImage}
            alt={project.title}
            aspectRatio="aspect-[16/9]"
          />
        </div>

        {/* Two-Column Monograph Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start my-16">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-sans uppercase tracking-[0.25em] text-[#B39775]">
              Spatial Intent & Philosophy
            </h3>
            <p className="text-base md:text-lg font-sans font-light text-[#EAE5DE] leading-relaxed">
              {project.description}
            </p>
            <p className="text-sm md:text-base font-sans font-light text-[#8C857B] leading-relaxed">
              {project.philosophy}
            </p>
          </div>

          {/* Project Specifications definition table */}
          <div className="lg:col-span-5 bg-[#161413] border border-[#24211D] p-6 md:p-8">
            <h3 className="text-xs font-sans uppercase tracking-[0.25em] text-[#B39775] mb-6">
              Curatorial Index
            </h3>

            <dl className="divide-y divide-[#24211D] text-xs font-sans">
              <div className="py-3 flex justify-between">
                <dt className="text-[#8C857B] uppercase tracking-wider">Location</dt>
                <dd className="text-[#FAF8F5] font-medium">{project.location}</dd>
              </div>
              <div className="py-3 flex justify-between">
                <dt className="text-[#8C857B] uppercase tracking-wider">Typology</dt>
                <dd className="text-[#FAF8F5] font-medium">{project.category}</dd>
              </div>
              <div className="py-3 flex justify-between">
                <dt className="text-[#8C857B] uppercase tracking-wider">Completed</dt>
                <dd className="text-[#FAF8F5] font-mono">{project.year}</dd>
              </div>
              <div className="py-3 flex justify-between">
                <dt className="text-[#8C857B] uppercase tracking-wider">Gross Area</dt>
                <dd className="text-[#FAF8F5] font-mono">{project.area}</dd>
              </div>

              {project.specs.map((spec, sIdx) => (
                <div key={sIdx} className="py-3 flex justify-between gap-4">
                  <dt className="text-[#8C857B] uppercase tracking-wider shrink-0">{spec.label}</dt>
                  <dd className="text-[#FAF8F5] font-light text-right">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Tactile Material Palette for this Project */}
        <div className="my-16 border-t border-[#24211D] pt-12">
          <h3 className="text-xs font-sans uppercase tracking-[0.25em] text-[#B39775] mb-8">
            Material Palette & Tectonic Sourcing
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.materials.map((mat, mIdx) => (
              <div key={mIdx} className="p-5 bg-[#161413] border border-[#24211D]">
                <span className="text-[10px] font-mono text-[#B39775] block mb-1">
                  SPEC. 0{mIdx + 1}
                </span>
                <h4 className="text-base font-serif text-[#FAF8F5] mb-1">{mat.name}</h4>
                <p className="text-xs text-[#8C857B] mb-2">{mat.origin}</p>
                <p className="text-[11px] text-[#A69E94] font-light italic">“{mat.texture}”</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Detail Photography Masonry */}
        {project.detailImages && project.detailImages.length > 0 && (
          <div className="my-16 border-t border-[#24211D] pt-12">
            <h3 className="text-xs font-sans uppercase tracking-[0.25em] text-[#B39775] mb-8">
              Architectural Vignettes
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.detailImages.map((img, iIdx) => (
                <div key={iIdx} className="overflow-hidden border border-[#24211D]">
                  <ArchitecturalImage
                    src={img}
                    alt={`${project.title} detail view 0${iIdx + 1}`}
                    aspectRatio="aspect-[4/3]"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Monograph Footer / Project Pagination */}
        <div className="mt-20 pt-12 border-t border-[#24211D] flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#8C857B] hover:text-[#FAF8F5] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#B39775]" />
            <span>Prev: {prevProject.title}</span>
          </button>

          <button
            onClick={() => onOpenInquiry(project.title)}
            className="px-6 py-3.5 bg-[#FAF8F5] text-[#141312] text-xs font-sans uppercase tracking-[0.2em] font-medium hover:bg-white transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Commission Similar Residence</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#8C857B] hover:text-[#FAF8F5] transition-colors cursor-pointer"
          >
            <span>Next: {nextProject.title}</span>
            <ArrowRight className="w-4 h-4 text-[#B39775]" />
          </button>
        </div>
      </div>
    </div>
  );
};
