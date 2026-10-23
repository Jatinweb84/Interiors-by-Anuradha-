import React, { useState } from 'react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Understanding the people, architecture and possibilities.',
    narrative:
      'We begin with deep immersion into the site and your daily rituals: solar trajectories, natural airflow, acoustic conditions, and how your household moves through time. No drawings are created until the emotional brief is deeply understood.',
    focus: ['Site Diurnal Orientation', 'Circulation Rituals', 'Sensory Preferences', 'Acoustic Baseline'],
  },
  {
    step: '02',
    title: 'Define',
    tagline: 'Developing the concept, palette and spatial language.',
    narrative:
      'We curate the architectural DNA: volumetric alterations, physical material sample trays, custom 1:1 scale mockups, and natural lighting simulations that establish a coherent philosophy before a single wall is touched.',
    focus: ['Volumetric Realignment', 'Physical Material Trays', 'Daylight Raytracing', 'Schematic Zoning'],
  },
  {
    step: '03',
    title: 'Create',
    tagline: 'Turning ideas into materials, details and spaces.',
    narrative:
      'Craftsmen and artisan foundries execute bespoke stone masonry, hand-smoked joinery, and specialized finishes under our direct on-site architectural supervision. Every shadow reveal and junction is resolved with millimeter precision.',
    focus: ['Artisanal Fabrication', 'Monolithic Stone Cutting', 'Bespoke Millwork', 'On-Site Oversight'],
  },
  {
    step: '04',
    title: 'Refine',
    tagline: 'Perfecting every proportion and finishing detail.',
    narrative:
      'The final layer involves sensory tuning: calibrating 2700K lighting scenes for different hours of the night, positioning acquired artworks, adjusting acoustic drapery, and handing over a living sanctuary ready for decades of life.',
    focus: ['Lighting Scene Programming', 'Art & Curio Curation', 'Acoustic Calibration', 'Comprehensive Archive Handover'],
  },
];

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative w-full py-28 md:py-40 bg-[#141312] text-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="pb-12 border-b border-[#2A2622]">
          <div className="flex items-center gap-3 text-[11px] font-sans tracking-[0.25em] uppercase text-[#B39775] mb-4">
            <span>07 / METHODOLOGY</span>
            <span className="w-8 h-[1px] bg-[#B39775]/40" />
            <span className="text-[#8C857B]">HOW WE WORK</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-[#FAF8F5] tracking-tight">
            The Process
          </h2>
        </div>

        {/* Step Indicator Navigation */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-b border-[#2A2622] pb-6">
          {PROCESS_STEPS.map((s, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 transition-all duration-300 cursor-pointer border-t-2 ${
                  isCurrent
                    ? 'border-[#B39775] bg-[#1A1816]'
                    : 'border-transparent hover:border-[#2E2A25] opacity-60 hover:opacity-100'
                }`}
              >
                <div className="text-xs font-mono text-[#B39775] mb-1">
                  STAGE {s.step}
                </div>
                <div className="text-lg md:text-xl font-serif text-[#FAF8F5]">
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Display */}
        <div className="mt-12 md:mt-16 bg-[#161413] border border-[#24211D] p-8 md:p-14 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
            <div className="lg:col-span-8">
              <div className="text-xs font-mono tracking-widest text-[#B39775] uppercase mb-3">
                {PROCESS_STEPS[activeStep].step} — {PROCESS_STEPS[activeStep].title.toUpperCase()}
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-light text-[#FAF8F5] leading-snug mb-6">
                “{PROCESS_STEPS[activeStep].tagline}”
              </h3>
              <p className="text-base md:text-lg font-sans font-light text-[#C4BDB5] leading-relaxed">
                {PROCESS_STEPS[activeStep].narrative}
              </p>
            </div>

            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#26231F] pt-6 lg:pt-0 lg:pl-8">
              <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#8C857B] mb-4">
                Milestones & Focus
              </div>
              <ul className="space-y-3">
                {PROCESS_STEPS[activeStep].focus.map((item, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2.5 text-xs text-[#EAE5DE] font-sans">
                    <span className="w-1.5 h-1.5 bg-[#B39775] rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
