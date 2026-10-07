import React from 'react';
import { ANTALYA_ATTRACTIONS } from '../data/hotelData';
import { X, MapPin, Compass } from 'lucide-react';

interface AttractionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookClick: () => void;
}

export const AttractionsModal: React.FC<AttractionsModalProps> = ({
  isOpen,
  onClose,
  onBookClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-[#130821] border border-[#d4af37]/40 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-purple-900/40 flex items-center justify-between bg-[#190a2c]">
          <div className="flex items-center gap-3">
            <Compass className="w-6 h-6 text-[#d4af37]" />
            <div>
              <h2 className="font-luxury-serif text-xl sm:text-2xl font-bold text-white">
                Antalya Attractions & Heritage
              </h2>
              <p className="text-xs text-[#d4af37]">
                Located near Antalya Inn Hotel in Muratpaşa (Kaleiçi)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white bg-black/40 hover:bg-[#d4af37] hover:text-[#0d0714] rounded-full transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ANTALYA_ATTRACTIONS.map((attraction) => (
              <div
                key={attraction.id}
                className="bg-[#1a0c2e] border border-amber-500/20 rounded-xl overflow-hidden hover:border-[#d4af37]/50 transition-all group"
              >
                <div className="h-44 w-full overflow-hidden relative">
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-3 left-3 bg-[#0d0714]/90 text-[#d4af37] text-[11px] font-semibold px-2.5 py-1 rounded-md border border-[#d4af37]/30 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    <span>{attraction.distance}</span>
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold block">
                    {attraction.category}
                  </span>
                  <h3 className="font-luxury-serif text-base font-bold text-white group-hover:text-[#d4af37] transition-colors">
                    {attraction.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#1f0f38] border border-[#d4af37]/30 rounded-xl text-center space-y-3">
            <h3 className="font-luxury-serif text-lg font-bold text-white">
              Stay Close to Every Historic Landmark
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto">
              Antalya Inn Hotel places you in the heart of Kaleiçi, allowing you to explore ancient monuments, seaside harbor cafes, and crystal waters on foot.
            </p>
            <button
              onClick={() => {
                onClose();
                onBookClick();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0d0714] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] hover:brightness-110 rounded-lg shadow-lg cursor-pointer"
            >
              <span>Plan Your Stay At Antalya Inn</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
