import React from 'react';
import { Room } from '../types/hotel';
import { HOTEL_INFO } from '../data/hotelData';
import { X, Users, Bed, Maximize2, Check, Phone, Calendar } from 'lucide-react';

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomName: string) => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({ room, onClose, onBookRoom }) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-[#140a21] border border-[#d4af37]/40 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white bg-black/60 hover:bg-[#d4af37] hover:text-[#0d0714] rounded-full transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 space-y-6">
          {/* Room Image Container */}
          <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-amber-500/20">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback styling if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            {room.popularTag && (
              <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-[#0d0714] rounded-full shadow-lg">
                {room.popularTag}
              </span>
            )}
          </div>

          {/* Title & Quick Stats */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h2 className="font-luxury-serif text-2xl sm:text-3xl font-bold text-white">
                {room.name}
              </h2>
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#d4af37] bg-[#221238] border border-[#d4af37]/30 rounded-full">
                {room.category} Category
              </span>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              {room.description}
            </p>

            {/* Quick Specs Bar */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-[#1b0d2d] border border-amber-500/20 rounded-xl text-center mb-6">
              <div className="flex flex-col items-center justify-center p-2">
                <Bed className="w-5 h-5 text-[#d4af37] mb-1" />
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider">Bed Setup</span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-0.5">{room.bedInfo}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 border-x border-purple-900/40">
                <Users className="w-5 h-5 text-[#d4af37] mb-1" />
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider">Capacity</span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-0.5">Up to {room.maxGuests} Guests</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <Maximize2 className="w-5 h-5 text-[#d4af37] mb-1" />
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider">Room Area</span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-0.5">{room.sizeSqm} m²</span>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              <h3 className="font-luxury-serif text-sm font-bold uppercase tracking-wider text-[#d4af37]">
                Included Comfort Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {room.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-[#271342] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-purple-900/40">
              <button
                onClick={() => {
                  onBookRoom(room.name);
                  onClose();
                }}
                className="w-full sm:flex-1 py-3 px-6 text-sm font-bold uppercase tracking-wider text-[#0d0714] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] hover:brightness-110 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve {room.name}</span>
              </button>

              <a
                href={`tel:${HOTEL_INFO.phoneClean}`}
                className="w-full sm:w-auto py-3 px-6 text-sm font-semibold text-[#f5f0e6] bg-[#1a0e2e] hover:bg-[#251342] border border-[#d4af37]/40 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
