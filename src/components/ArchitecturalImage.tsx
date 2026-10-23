import React, { useState } from 'react';

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio = 'aspect-[16/10]',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#1E1B18] ${aspectRatio} ${containerClassName}`}
    >
      {/* Fallback & Loading Background with subtle architectural grain */}
      <div
        className={`absolute inset-0 bg-[#1A1816] transition-opacity duration-1000 ${
          isLoaded && !hasError ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#B39775_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-8 h-8 mb-2 border border-[#B39775]/40 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#B39775]" />
          </div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#8C857B] font-sans font-light">
            FORMA · ATELIER
          </p>
        </div>
      </div>

      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${className}`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1A1816] p-4 text-center">
          <div className="w-12 h-12 border border-[#B39775]/30 mb-3 flex items-center justify-center">
            <span className="text-xs font-serif italic text-[#B39775]">Forma</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#8C857B] font-mono">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
};
