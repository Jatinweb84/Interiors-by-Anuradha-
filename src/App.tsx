import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { StudioAbout } from './components/StudioAbout';
import { Portfolio } from './components/Portfolio';
import { PinnedStudies } from './components/PinnedStudies';
import { CasaNeraFeature } from './components/CasaNeraFeature';
import { ServicesSection } from './components/ServicesSection';
import { MaterialsSection } from './components/MaterialsSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialSection } from './components/TestimonialSection';
import { JournalSection } from './components/JournalSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ArticleModal } from './components/ArticleModal';
import { ProjectInquiryDrawer } from './components/ProjectInquiryDrawer';
import { ProjectItem, JournalArticle, PROJECTS_DATA } from './data/portfolioData';
import { initSmoothScroll, refreshScrollTrigger } from './utils/scrollSetup';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryProject, setInquiryProject] = useState<string>('');

  // Initialize Lenis smooth inertia scrolling integrated with GSAP ScrollTrigger
  useEffect(() => {
    const { destroy } = initSmoothScroll();
    return () => destroy();
  }, []);

  const handleOpenInquiry = (projectName?: string) => {
    setInquiryProject(projectName || '');
    setInquiryOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const casaNeraProject = PROJECTS_DATA.find((p) => p.id === 'casa-nera') || PROJECTS_DATA[0];

  return (
    <div className="min-h-screen bg-[#141312] text-[#EBE6DF] relative selection:bg-[#B39775] selection:text-[#141312]">
      {/* Precision Trailing Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Branded Loading Sequence (smoothly paced) */}
      {isLoading && (
        <LoadingScreen
          onComplete={() => {
            setIsLoading(false);
            refreshScrollTrigger();
          }}
        />
      )}

      {/* Main Luxury Navigation Bar */}
      <Navigation
        onOpenInquiry={() => handleOpenInquiry()}
        onNavigate={handleNavigate}
      />

      <main>
        {/* Full-screen Cinematic Hero with GSAP Parallax */}
        <Hero
          isReady={!isLoading}
          onExploreWork={() => handleNavigate('work')}
          onStartProject={() => handleOpenInquiry()}
        />

        {/* Studio / About Section with Asymmetric Layout & Animated Benchmarks */}
        <StudioAbout />

        {/* Featured Projects Portfolio Section */}
        <Portfolio
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Pinned Spatial Studies (Left column pinned, right imagery flowing with GSAP ScrollTrigger) */}
        <PinnedStudies
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Immersive Project Detail Preview: Casa Nera with Diurnal Lighting Switcher */}
        <CasaNeraFeature
          project={casaNeraProject}
          onOpenProject={(project) => setSelectedProject(project)}
        />

        {/* Spatial Disciplines / Services Section */}
        <ServicesSection
          onStartProject={() => handleOpenInquiry()}
        />

        {/* Material / Light / Form Tactile Pinned Horizontal Exhibition */}
        <MaterialsSection />

        {/* Sequential 4-Stage Architectural Process */}
        <ProcessSection />

        {/* Editorial Testimonial */}
        <TestimonialSection />

        {/* Monographs & Essays Journal */}
        <JournalSection
          onOpenArticle={(article) => setSelectedArticle(article)}
        />

        {/* Final Dramatic Closing CTA */}
        <FinalCTA
          onStartProject={() => handleOpenInquiry()}
        />
      </main>

      {/* Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Detailed Project Monograph Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onOpenInquiry={(pName) => handleOpenInquiry(pName)}
      />

      {/* Journal Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Bespoke Project Commission Inquiry Drawer */}
      <ProjectInquiryDrawer
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        initialProject={inquiryProject}
      />
    </div>
  );
}
