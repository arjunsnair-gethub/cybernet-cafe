import React, { useState, useEffect, useCallback } from 'react';
import { BUSINESS_CONFIG } from '../data/config';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = BUSINESS_CONFIG.gallery;
  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  const openLightbox = (index) => {
    // find index in the full list
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  }, [lightboxIndex, images.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  }, [lightboxIndex, images.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-cyber-purple-900 text-xs font-bold uppercase tracking-wider mb-3">
            Real Photographs
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Shop &amp; Facilities
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Real photos of our premises, workstations, service banners, and signage at H.S. Junction, Adoor.
          </p>

          {/* Filter tabs */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {['All', 'Interior', 'Banner', 'Signboard', 'Business Card'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors min-h-[38px] ${
                  activeFilter === filter
                    ? 'bg-cyber-purple-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (Uncropped natural aspect ratios with hover zoom) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {filteredImages.map((img, idx) => {
            const actualIndex = images.findIndex(item => item.id === img.id);

            return (
              <div
                key={img.id}
                onClick={() => openLightbox(actualIndex)}
                className="group relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/90 shadow-soft-sm hover:shadow-soft-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Photo container without awkward cropping */}
                <div className="relative w-full overflow-hidden bg-slate-100 flex items-center justify-center p-2 sm:p-4">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="max-h-[380px] w-auto max-w-full object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-cyber-purple-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                    <div className="bg-white/90 text-cyber-purple-900 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg backdrop-blur-sm">
                      <Eye className="w-4 h-4" />
                      <span>View Full Image</span>
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white/90 text-cyber-purple-900 shadow-sm border border-slate-200/60 backdrop-blur-sm">
                      {img.category}
                    </span>
                  </div>
                </div>

                {/* Caption Bar */}
                <div className="p-4 sm:p-5 bg-white border-t border-slate-100 text-left">
                  <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base group-hover:text-cyber-purple-900 transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {img.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal (Full-screen, uncropped, keyboard & touch support) */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar: Title & Close Button */}
          <div 
            className="w-full max-w-6xl flex items-center justify-between text-white z-10 pt-2 pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="font-display font-bold text-base sm:text-lg">
                {images[lightboxIndex].title}
              </p>
              <p className="text-xs text-slate-300">
                Photo {lightboxIndex + 1} of {images.length} . {images[lightboxIndex].category}
              </p>
            </div>

            <button
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image Container: Centered, original aspect ratio preserved */}
          <div 
            className="relative flex-1 w-full max-w-6xl flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev button */}
            <button
              onClick={showPrev}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-colors border border-white/20 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Lightbox Image */}
            <div className="max-h-[75vh] max-w-[90vw] flex items-center justify-center">
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                className="max-h-[75vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Next button */}
            <button
              onClick={showNext}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-colors border border-white/20 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div 
            className="w-full max-w-3xl text-center text-slate-300 text-xs sm:text-sm py-2"
            onClick={(e) => e.stopPropagation()}
          >
            <p>{images[lightboxIndex].caption}</p>
            <p className="text-[11px] text-slate-400 mt-1">Press Esc to close . Arrow keys to navigate</p>
          </div>
        </div>
      )}
    </section>
  );
}
