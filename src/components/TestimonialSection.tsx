import React, { useState } from 'react';

const TESTIMONIALS = [
  {
    quote: 'FORMA transformed our house into something we didn’t know it could become.',
    client: 'Aarav Mehta',
    location: 'Mumbai, India',
    project: 'Casa Nera Private Residence',
  },
  {
    quote: 'There is a profound stillness to their work. Two years later, coming home still feels like stepping into a serene monastic temple.',
    client: 'Kavita & Rohit Singhania',
    location: 'Delhi, India',
    project: 'Atelier 27 Penthouse',
  },
  {
    quote: 'Their obsession with natural light and raw stone is unmatched. Every single room changes with the sun in ways we constantly marvel at.',
    client: 'David Lindqvist',
    location: 'Dubai, UAE',
    project: 'Sora Private Estate',
  },
];

export const TestimonialSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#161413] text-[#FAF8F5] overflow-hidden border-t border-[#221F1C]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Subtle Marker */}
        <div className="inline-flex items-center gap-3 text-[11px] font-sans tracking-[0.25em] uppercase text-[#B39775] mb-12">
          <span>CLIENT VOICES</span>
        </div>

        {/* Large Clean Quote */}
        <div className="min-h-[220px] flex flex-col justify-center">
          <blockquote className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#FAF8F5] leading-tight transition-opacity duration-500">
            “{TESTIMONIALS[activeIdx].quote}”
          </blockquote>

          {/* Client Attribution */}
          <div className="mt-8 flex flex-col items-center">
            <span className="text-sm md:text-base font-sans tracking-wide text-[#EAE5DE] font-medium">
              — {TESTIMONIALS[activeIdx].client}
            </span>
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#8C857B] mt-1">
              {TESTIMONIALS[activeIdx].location} · {TESTIMONIALS[activeIdx].project}
            </span>
          </div>
        </div>

        {/* Minimal Subtle Selectors */}
        <div className="mt-12 flex justify-center items-center gap-3">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-1.5 transition-all duration-300 cursor-pointer ${
                activeIdx === idx ? 'w-8 bg-[#B39775]' : 'w-2 bg-[#2E2A25] hover:bg-[#8C857B]'
              }`}
              aria-label={`View testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
