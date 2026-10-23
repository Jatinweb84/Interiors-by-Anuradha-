import React, { useEffect } from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { JournalArticle } from '../data/portfolioData';
import { ArchitecturalImage } from './ArchitecturalImage';

interface ArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#141312] text-[#FAF8F5] overflow-y-auto">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-[#141312]/95 backdrop-blur-md border-b border-[#24211D] px-6 md:px-12 py-5 flex items-center justify-between">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#8C857B] hover:text-[#FAF8F5] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#B39775]" />
          <span>Back to Journal</span>
        </button>

        <span className="text-xs font-mono text-[#8C857B] hidden sm:inline">
          FORMA MONOGRAPH ARCHIVE
        </span>

        <button
          onClick={onClose}
          className="p-2 text-[#8C857B] hover:text-[#FAF8F5] border border-[#2E2A25] hover:border-[#B39775] transition-colors cursor-pointer"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      {/* Editorial Essay Article */}
      <article className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Header Metadata */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-sans text-[#B39775] mb-4">
          <span>{article.category}</span>
          <span>·</span>
          <span className="text-[#8C857B]">{article.date}</span>
          <span>·</span>
          <span className="text-[#8C857B]">{article.readTime}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#FAF8F5] tracking-tight leading-[1.08] mb-6">
          {article.title}
        </h1>

        <p className="text-xl sm:text-2xl font-serif italic text-[#C4BDB5] font-light mb-12 border-b border-[#24211D] pb-10">
          “{article.subtitle}”
        </p>

        {/* Feature Image */}
        <div className="mb-12 overflow-hidden shadow-2xl border border-[#24211D]">
          <ArchitecturalImage
            src={article.image}
            alt={article.title}
            aspectRatio="aspect-[16/9]"
          />
        </div>

        {/* Essay Text with Drop Cap and Editorial Reading Flow */}
        <div className="space-y-8 text-base md:text-lg font-sans font-light text-[#D1C9BE] leading-[1.85]">
          {article.fullText.map((paragraph, pIdx) => {
            if (pIdx === 0) {
              return (
                <p
                  key={pIdx}
                  className="first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:text-[#B39775] first-letter:leading-none"
                >
                  {paragraph}
                </p>
              );
            }
            if (pIdx === 2) {
              return (
                <React.Fragment key={pIdx}>
                  <blockquote className="my-10 pl-6 border-l-2 border-[#B39775] text-xl sm:text-2xl font-serif italic text-[#FAF8F5] leading-relaxed">
                    “In a room stripped of trivial visual clutter, the gentle grain of smoked oak becomes captivating.”
                  </blockquote>
                  <p>{paragraph}</p>
                </React.Fragment>
              );
            }
            return <p key={pIdx}>{paragraph}</p>;
          })}
        </div>

        {/* Author / Curatorial Signature */}
        <div className="mt-16 pt-10 border-t border-[#24211D] flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B39775] font-sans block mb-1">
              Curatorial Direction
            </span>
            <span className="text-sm font-serif text-[#FAF8F5]">
              FORMA Atelier Research & Publications Group
            </span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#FAF8F5] text-[#141312] text-xs uppercase tracking-widest font-medium cursor-pointer"
          >
            Close Essay
          </button>
        </div>
      </article>
    </div>
  );
};
