import React, { useState } from 'react';
import { PageRoute, Room } from '../types/hotel';
import { ROOMS } from '../data/hotelData';
import { BedDouble, Users, Maximize2, Check, Calendar, ArrowRight } from 'lucide-react';

interface RoomsPageProps {
  onNavigate: (page: PageRoute) => void;
  onSelectRoom: (room: Room) => void;
  onBookRoomDirect: (roomName: string) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({
  onNavigate,
  onSelectRoom,
  onBookRoomDirect,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Deluxe', 'Superior', 'Suite', 'Standard', 'Family'];

  const filteredRooms = selectedCategory === 'All'
    ? ROOMS
    : ROOMS.filter((r) => r.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 bg-transparent">
      {/* HERO SECTION */}
      <section className="relative py-16 bg-purple-gradient border-b border-purple-900/40 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
            ACCOMMODATION & SUITES
          </span>
          <h1 className="font-luxury-serif text-4xl sm:text-6xl font-extrabold text-white">
            ROOMS & SUITES
          </h1>
          <p className="text-neutral-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Elegant spaces designed for comfort, relaxation and a memorable Antalya stay.
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
                {cat} {cat === 'All' ? `(${ROOMS.length})` : ''}
              </button>
            );
          })}
        </div>
      </div>

      {/* ROOM LISTINGS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-[#170c26] border border-amber-500/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/60 gold-glow-hover transition-all group flex flex-col md:flex-row"
            >
              {/* Image */}
              <div className="md:w-5/12 h-64 md:h-auto relative overflow-hidden shrink-0 bg-[#211038]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#0d0714]/80 text-[#d4af37] rounded-md border border-[#d4af37]/30">
                  {room.category}
                </span>
              </div>

              {/* Info */}
              <div className="p-6 md:w-7/12 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-luxury-serif text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      {room.name}
                    </h2>
                    <span className="text-xs font-mono text-[#d4af37] bg-[#220d3a] px-2 py-0.5 rounded border border-[#d4af37]/20">
                      {room.sizeSqm} m²
                    </span>
                  </div>

                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {room.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300 mb-4 bg-[#11071f] p-3 rounded-lg border border-purple-900/40">
                    <div className="flex items-center gap-1.5">
                      <BedDouble className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span className="truncate">{room.bedInfo}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Up to {room.maxGuests} Guests</span>
                    </div>
                  </div>

                  {/* Amenities Highlights */}
                  <div className="space-y-1.5 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                      Room Amenities
                    </span>
                    <div className="grid grid-cols-2 gap-1 text-[11px] text-neutral-400">
                      {room.features.slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-[#d4af37]" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2 border-t border-purple-900/40">
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="flex-1 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#d4af37] bg-[#211038] hover:bg-[#2c154a] border border-[#d4af37]/40 rounded-lg transition-all"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onBookRoomDirect(room.name)}
                    className="flex-1 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0d0714] bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] hover:brightness-110 rounded-lg shadow-md transition-all flex items-center justify-center gap-1"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM BOOKING CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-[#180c28] border border-[#d4af37]/40 rounded-2xl p-8 sm:p-10 text-center space-y-4">
          <h2 className="font-luxury-serif text-2xl sm:text-3xl font-bold text-white">
            Find Your Perfect Stay
          </h2>
          <p className="text-neutral-300 text-sm max-w-xl mx-auto">
            Need assistance selecting the ideal room for your travel dates or special occasion? Our front desk is ready to help.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0d0714] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] hover:brightness-110 rounded-xl shadow-lg cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Stay Today</span>
          </button>
        </div>
      </section>
    </div>
  );
};
