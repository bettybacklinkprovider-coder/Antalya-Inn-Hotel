import React, { useEffect } from 'react';
import { GalleryItem } from '../types/hotel';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIdx]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % items.length;
    onSelect(items[nextIdx]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prevIdx = (currentIndex - 1 + items.length) % items.length;
        onSelect(items[prevIdx]);
      }
      if (e.key === 'ArrowRight') {
        const nextIdx = (currentIndex + 1) % items.length;
        onSelect(items[nextIdx]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items, onClose, onSelect]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Top Bar with Counter & Close */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between px-4 py-2">
        <span className="text-xs font-mono text-[#d4af37] bg-black/50 px-3 py-1 rounded-full border border-amber-500/20">
          {currentIndex + 1} / {items.length} · {item.category}
        </span>
        <button
          onClick={onClose}
          className="p-2 text-white bg-white/10 hover:bg-[#d4af37] hover:text-[#0d0714] rounded-full transition-all cursor-pointer"
          aria-label="Close image lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 z-20 p-3 text-white bg-black/60 hover:bg-[#d4af37] hover:text-[#0d0714] rounded-full transition-all border border-amber-500/20 cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 z-20 p-3 text-white bg-black/60 hover:bg-[#d4af37] hover:text-[#0d0714] rounded-full transition-all border border-amber-500/20 cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.title}
          className="max-w-full max-h-[75vh] object-contain rounded-lg border border-[#d4af37]/30 shadow-2xl"
          referrerPolicy="no-referrer"
        />

        <div className="mt-4 text-center max-w-xl">
          <h3 className="font-luxury-serif text-lg sm:text-xl font-bold text-white mb-1">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};
