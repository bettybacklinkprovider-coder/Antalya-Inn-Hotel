import React, { useState } from 'react';
import { GalleryItem } from '../types/hotel';
import { GALLERY_ITEMS } from '../data/hotelData';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { Maximize2, Sparkles } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Hotel', 'Rooms', 'Dining & Relaxation', 'Antalya'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 bg-[#0d0714]">
      {/* HERO SECTION */}
      <section className="relative py-16 bg-purple-gradient border-b border-purple-900/40 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b0d2d] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VISUAL PORTFOLIO</span>
          </div>
          <h1 className="font-luxury-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            ANTALYA INN HOTEL GALLERY
          </h1>
          <p className="text-neutral-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore the atmosphere, elegance and Antalya experience of our hotel.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-center flex-wrap gap-2 p-1.5 bg-[#170a26] border border-amber-500/20 rounded-2xl max-w-2xl mx-auto">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#d4af37] text-[#0d0714] shadow-md font-bold'
                    : 'text-neutral-300 hover:text-white hover:bg-[#200e38]'
                }`}
              >
                {cat} {cat === 'All' ? `(${GALLERY_ITEMS.length})` : ''}
              </button>
            );
          })}
        </div>
      </div>

      {/* GALLERY GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative h-72 rounded-2xl overflow-hidden border border-amber-500/20 bg-[#160a24] cursor-pointer hover:border-[#d4af37] gold-glow-hover transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0714] via-[#0d0714]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* Zoom Icon Button */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-[#d4af37] opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                  {item.category}
                </span>
                <h3 className="font-luxury-serif text-sm font-bold text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-neutral-300 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeLightboxItem && (
        <GalleryLightbox
          item={activeLightboxItem}
          items={filteredItems}
          onClose={() => setActiveLightboxItem(null)}
          onSelect={(newItem) => setActiveLightboxItem(newItem)}
        />
      )}
    </div>
  );
};
