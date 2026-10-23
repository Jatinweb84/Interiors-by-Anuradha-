import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#100F0E] text-[#8C857B] border-t border-[#221F1C] pt-16 pb-12 px-6 md:px-12 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#1E1B18]">
          {/* Brand Monograph */}
          <div className="md:col-span-4">
            <span className="text-2xl font-serif tracking-[0.2em] font-light text-[#FAF8F5] block mb-4">
              FORMA
            </span>
            <p className="text-xs font-light text-[#8C857B] leading-relaxed max-w-sm">
              Interior architecture and bespoke spaces designed around the way you live. Residential and hospitality atelier focusing on materiality, light, and proportion.
            </p>
            <div className="mt-6 text-[11px] font-mono text-[#B39775]">
              ATELIER EST. 2014 // MUMBAI · DUBAI
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FAF8F5] block mb-4">
              Index
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('studio')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  The Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Disciplines
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('materials')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Materiality
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journal')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Monographs
                </button>
              </li>
            </ul>
          </div>

          {/* Typologies */}
          <div className="md:col-span-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FAF8F5] block mb-4">
              Typologies
            </span>
            <ul className="space-y-2 text-xs text-[#8C857B]">
              <li>Private Residential Estates</li>
              <li>High-Rise Penthouse Architecture</li>
              <li>Coastal & Tropical Sanctuaries</li>
              <li>Boutique Experiential Hospitality</li>
              <li>Commissioned Artisanal Millwork</li>
            </ul>
          </div>

          {/* Monograph Dispatch */}
          <div className="md:col-span-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FAF8F5] block mb-4">
              Publications Dispatch
            </span>
            <p className="text-xs text-[#8C857B] mb-4 font-light">
              Receive our seasonal architectural monographs and material retrospectives directly.
            </p>
            <div className="flex items-center border border-[#2E2A25] bg-[#161413]">
              <input
                type="email"
                placeholder="architectural@inquiry.com"
                className="w-full bg-transparent px-3 py-2 text-xs text-[#FAF8F5] placeholder-[#57524A] focus:outline-none"
              />
              <button
                onClick={onOpenInquiry}
                className="px-3 py-2 bg-[#FAF8F5] text-[#141312] text-[11px] uppercase tracking-wider font-medium hover:bg-white transition-colors cursor-pointer whitespace-nowrap"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Baseline Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#5C564E]">
          <div className="flex items-center gap-4">
            <span>© 2026 FORMA Atelier. All rights reserved.</span>
            <span>·</span>
            <span>Architecture & Interior Design</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#FAF8F5] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B39775]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
