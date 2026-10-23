import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { ambientSound } from '../utils/ambientAudio';

interface NavigationProps {
  onOpenInquiry: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenInquiry, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const active = ambientSound.toggle();
    setIsAudioActive(active);
  };

  const navItems = [
    { label: 'Work', id: 'work' },
    { label: 'Studio', id: 'studio' },
    { label: 'Services', id: 'services' },
    { label: 'Materials', id: 'materials' },
    { label: 'Journal', id: 'journal' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-[#141312]/90 backdrop-blur-md py-4 border-b border-[#2A2622]/60 shadow-lg'
            : 'bg-gradient-to-b from-[#141312]/80 via-[#141312]/30 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="group flex items-baseline gap-2 cursor-pointer focus-visible:outline-none"
          >
            <span className="text-xl md:text-2xl font-serif tracking-[0.2em] font-light text-[#FAF8F5] transition-colors group-hover:text-[#B39775]">
              FORMA
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs tracking-[0.2em] uppercase font-sans font-normal text-[#8C857B]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="relative py-1 transition-colors hover:text-[#FAF8F5] focus-visible:outline-none focus-visible:text-[#FAF8F5] whitespace-nowrap cursor-pointer group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B39775] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Ambient Room Sound Generator */}
            <button
              onClick={handleAudioToggle}
              className={`hidden sm:flex items-center gap-2 text-[11px] tracking-wider uppercase px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                isAudioActive
                  ? 'border-[#B39775] text-[#B39775] bg-[#B39775]/10'
                  : 'border-[#2E2A25] text-[#8C857B] hover:text-[#FAF8F5] hover:border-[#8C857B]'
              }`}
              title={isAudioActive ? 'Mute room tone' : 'Enable ambient architecture soundscape'}
            >
              {isAudioActive ? <Volume2 className="w-3.5 h-3.5 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden lg:inline">{isAudioActive ? 'Sound On' : 'Sound'}</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenInquiry}
              data-primary="true"
              className="px-4 py-2 md:px-5 md:py-2.5 text-[11px] md:text-xs font-sans tracking-[0.18em] uppercase text-[#141312] bg-[#EAE5DE] hover:bg-white hover:shadow-[0_0_20px_rgba(234,229,222,0.25)] transition-all duration-300 cursor-pointer whitespace-nowrap font-medium"
            >
              Start a Project
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#EAE5DE] hover:text-[#B39775] transition-colors focus-visible:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Editorial Menu */}
      <div
        className={`fixed inset-0 z-30 bg-[#141312] md:hidden flex flex-col justify-between p-8 pt-28 transition-all duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6">
          <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#8C857B]">
            Navigation Index
          </span>
          <nav className="flex flex-col gap-5">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="flex items-baseline justify-between text-left text-2xl font-serif text-[#FAF8F5] hover:text-[#B39775] transition-colors border-b border-[#221F1C] pb-3"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-[#8C857B]">0{idx + 1}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#221F1C] pt-6">
          <button
            onClick={handleAudioToggle}
            className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#8C857B] py-2"
          >
            {isAudioActive ? <Volume2 className="w-4 h-4 text-[#B39775]" /> : <VolumeX className="w-4 h-4" />}
            <span>Atmospheric Ambience: {isAudioActive ? 'Active' : 'Off'}</span>
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="w-full py-3.5 bg-[#FAF8F5] text-[#141312] text-xs font-sans tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};
