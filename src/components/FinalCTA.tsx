import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FinalCTAProps {
  onStartProject: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProject }) => {
  return (
    <section id="contact" className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-[#121110] text-[#FAF8F5] py-28 px-6 md:px-12">
      {/* Background Architectural Canvas with subtle cinematic drift */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#141312] via-[#141312]/80 to-[#141312]/70" />
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85"
          alt="FORMA Atelier architectural atmosphere"
          referrerPolicy="no-referrer"
          data-speed="0.82"
          className="w-full h-full object-cover filter brightness-[0.4] scale-110 will-change-transform"
        />
        <div className="absolute inset-0 z-10 opacity-20 bg-[radial-gradient(#B39775_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Dramatic Content Center */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center" data-speed="1.08">
        <div className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.3em] uppercase text-[#B39775] mb-6">
          <span className="w-1.5 h-1.5 bg-[#B39775]" />
          <span>COMMISSIONS & DIALOGUES</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-[#FAF8F5] tracking-tight leading-[1.05] max-w-3xl">
          Let’s create a space worth <span className="italic font-normal text-[#EAE5DE]">coming home to</span>.
        </h2>

        <p className="mt-8 text-lg sm:text-xl font-sans font-light text-[#C4BDB5] max-w-xl">
          “Tell us about your next project.”
        </p>

        <div className="mt-10">
          <button
            onClick={onStartProject}
            data-cursor="cta"
            className="group relative inline-flex items-center gap-4 px-9 py-4 bg-[#FAF8F5] text-[#141312] text-xs font-sans tracking-[0.25em] uppercase font-medium hover:bg-white hover:shadow-[0_0_40px_rgba(250,248,245,0.3)] transition-all duration-300 cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#141312]" />
          </button>
        </div>

        {/* Global Atelier Contact Details */}
        <div className="mt-20 pt-12 border-t border-[#2A2622]/60 w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <span className="text-[11px] font-sans uppercase tracking-widest text-[#8C857B] block mb-1">
              Mumbai Atelier
            </span>
            <p className="text-xs text-[#EAE5DE] font-light leading-relaxed">
              Dr. E. Moses Road, Worli<br />Mumbai 400018
            </p>
          </div>
          <div>
            <span className="text-[11px] font-sans uppercase tracking-widest text-[#8C857B] block mb-1">
              Dubai Studio
            </span>
            <p className="text-xs text-[#EAE5DE] font-light leading-relaxed">
              Alserkal Avenue, Al Quoz 1<br />Dubai, UAE
            </p>
          </div>
          <div>
            <span className="text-[11px] font-sans uppercase tracking-widest text-[#8C857B] block mb-1">
              Direct Inquiries
            </span>
            <p className="text-xs text-[#EAE5DE] font-light leading-relaxed">
              inquiries@formaatelier.com<br />+91 (0) 22 4910 8800
            </p>
          </div>
          <div>
            <span className="text-[11px] font-sans uppercase tracking-widest text-[#8C857B] block mb-1">
              Press & Archive
            </span>
            <p className="text-xs text-[#EAE5DE] font-light leading-relaxed">
              press@formaatelier.com<br />monographs@formaatelier.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
