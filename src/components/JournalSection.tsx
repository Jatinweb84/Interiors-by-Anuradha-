import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { JOURNAL_ARTICLES, JournalArticle } from '../data/portfolioData';
import { ArchitecturalImage } from './ArchitecturalImage';

interface JournalSectionProps {
  onOpenArticle: (article: JournalArticle) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onOpenArticle }) => {
  return (
    <section id="journal" className="relative w-full py-28 md:py-40 bg-[#141312] text-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#2A2622]">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-sans tracking-[0.25em] uppercase text-[#B39775] mb-4">
              <span>08 / MONOGRAPHS & ESSAYS</span>
              <span className="w-8 h-[1px] bg-[#B39775]/40" />
              <span className="text-[#8C857B]">THE JOURNAL</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-[#FAF8F5] tracking-tight">
              Publications
            </h2>
          </div>

          <p className="text-sm font-sans font-light text-[#8C857B] max-w-xs">
            Reflections on spatial anthropology, tactile materiality, and the dialogue between light and shadow.
          </p>
        </div>

        {/* Editorial Broadsheet List (Anti-generic card layout) */}
        <div className="mt-16 divide-y divide-[#24211D]">
          {JOURNAL_ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              onClick={() => onOpenArticle(article)}
              data-cursor="project"
              className="group py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center cursor-pointer transition-colors hover:bg-[#181614]/50"
            >
              {/* Index & Category */}
              <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start justify-between text-xs font-sans">
                <span className="font-mono text-[#B39775] tracking-widest">
                  VOL. 0{idx + 1}
                </span>
                <span className="text-[#8C857B] uppercase tracking-wider text-[11px] lg:mt-2">
                  {article.category}
                </span>
              </div>

              {/* Title & Deck */}
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#8C857B]">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[#FAF8F5] group-hover:text-[#B39775] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm font-sans font-light text-[#8C857B] leading-relaxed max-w-xl">
                  {article.excerpt}
                </p>
              </div>

              {/* Editorial Image Crop */}
              <div className="lg:col-span-3">
                <div className="overflow-hidden aspect-[16/10] bg-[#1E1B18] border border-[#26231F]">
                  <ArchitecturalImage
                    src={article.image}
                    alt={article.title}
                    aspectRatio="aspect-[16/10]"
                    className="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Read Action Indicator */}
              <div className="lg:col-span-1 flex justify-end">
                <div className="w-10 h-10 rounded-full border border-[#2E2A25] group-hover:border-[#B39775] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[#8C857B] group-hover:text-[#B39775] transition-colors" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
