import React from 'react';
import { PageRoute, Room } from '../types/hotel';
import { HOTEL_INFO, ROOMS, WHY_CHOOSE_FEATURES } from '../data/hotelData';
import {
  Calendar,
  Compass,
  ChevronDown,
  BedDouble,
  MapPin,
  HeartHandshake,
  ShieldCheck,
  Coffee,
  PhoneCall,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onSelectRoom: (room: Room) => void;
  onOpenAttractions: () => void;
  onShowToast: (msg: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectRoom,
  onOpenAttractions,
  onShowToast,
}) => {
  const featuredRooms = ROOMS.slice(0, 3); // Deluxe, Superior, Premium Suite

  // Icon mapping for Why Choose features
  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BedDouble className="w-6 h-6 text-[#d4af37]" />;
      case 1:
        return <MapPin className="w-6 h-6 text-[#d4af37]" />;
      case 2:
        return <Sparkles className="w-6 h-6 text-[#d4af37]" />;
      case 3:
        return <HeartHandshake className="w-6 h-6 text-[#d4af37]" />;
      case 4:
        return <Coffee className="w-6 h-6 text-[#d4af37]" />;
      case 5:
        return <ShieldCheck className="w-6 h-6 text-[#d4af37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  return (
    <div className="space-y-0">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Dark Purple Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=90"
            alt="Antalya Inn Hotel Twilight View"
            className="w-full h-full object-cover scale-105 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0714] via-[#0d0714]/80 to-[#1a0833]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b0d2d]/80 border border-[#d4af37]/40 text-[#d4af37] text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-md shadow-xl animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ANTALYA INN HOTEL</span>
          </div>

          <h1 className="font-luxury-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            A Refined Stay in the <br />
            <span className="text-gold-gradient">Heart of Antalya</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-200 font-light leading-relaxed">
            Experience comfort, elegance and authentic Antalya hospitality in a beautiful boutique setting.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0d0714] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] hover:brightness-110 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>

            <button
              onClick={() => onNavigate('rooms')}
              className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#1a0e2e]/80 hover:bg-[#281447] border border-[#d4af37]/50 rounded-xl backdrop-blur-md transition-all transform hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2"
            >
              <BedDouble className="w-4 h-4 text-[#d4af37]" />
              <span>Explore Rooms</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center animate-bounce">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1 text-xs text-[#d4af37]/80 hover:text-[#d4af37] transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest">Scroll Down</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* SECTION 2 — WELCOME / ABOUT THE HOTEL */}
      <section id="about" className="py-24 bg-[#0d0714] relative overflow-hidden border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Photo with Gold Border Accent */}
            <div className="relative group">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#d4af37]/30 to-purple-600/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 bg-[#160b24] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85"
                  alt="Antalya Inn Hotel Lounge Interior"
                  className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0714] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0d0714]/85 backdrop-blur-md rounded-xl border border-[#d4af37]/30">
                  <p className="text-xs font-serif text-[#d4af37] tracking-wider uppercase">Authentic Boutique Comfort</p>
                  <p className="text-sm text-white font-medium">Located in Muratpaşa (Kaleiçi), Antalya</p>
                </div>
              </div>
            </div>

            {/* Right Side: Text & Story */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                  WELCOME TO ANTALYA INN HOTEL
                </span>
                <h2 className="font-luxury-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Where Comfort Meets <br />
                  <span className="text-gold-gradient">Antalya Elegance</span>
                </h2>
              </div>

              <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Antalya Inn Hotel offers guests a comfortable, stylish and memorable stay in the heart of historic Muratpaşa, Antalya. Tucked away in the enchanting narrow streets of Kaleiçi, our boutique hotel bridges centuries-old Mediterranean architecture with refined modern luxury.
                </p>
                <p>
                  From the moment you arrive, you will be embraced by authentic Turkish hospitality, quiet garden courtyard ambiance, and air-conditioned suites crafted for complete tranquility.
                </p>
              </div>

              {/* Location Callout Badge */}
              <div className="p-4 bg-[#180c2b] border border-[#d4af37]/30 rounded-xl flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div className="text-xs text-neutral-300">
                  <span className="font-semibold text-white block mb-0.5">Prime Old Town Location:</span>
                  Steps away from Hıdırlık Tower, Old Harbor marina, and picturesque Mediterranean beach view points.
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('rooms')}
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#d4af37] bg-[#1a0e2d] hover:bg-[#251340] border border-[#d4af37]/50 rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Discover Our Hotel</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — ROOMS & COMFORT */}
      <section className="py-24 bg-[#12091f] relative border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
              LUXURY ACCOMMODATION
            </span>
            <h2 className="font-luxury-serif text-3xl sm:text-5xl font-bold text-white">
              Stay in Comfort & Style
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base">
              Thoughtfully decorated suites offering high-speed Wi-Fi, rainfall showers, and climate-controlled elegance.
            </p>
          </div>

          {/* 3 Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-[#180c28] border border-amber-500/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/60 gold-glow-hover transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Room Image */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {room.popularTag && (
                      <span className="absolute top-3 right-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#d4af37] text-[#0d0714] rounded-full shadow-md">
                        {room.popularTag}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#180c28] via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Room Body */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-luxury-serif text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors">
                        {room.name}
                      </h3>
                      <span className="text-xs font-mono text-[#d4af37]">
                        {room.sizeSqm} m²
                      </span>
                    </div>

                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {room.description}
                    </p>

                    <div className="pt-2 border-t border-purple-900/40 flex items-center justify-between text-xs text-neutral-400">
                      <span>{room.bedInfo}</span>
                      <span>Up to {room.maxGuests} Guests</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#d4af37] bg-[#221138] hover:bg-[#d4af37] hover:text-[#0d0714] border border-[#d4af37]/40 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Room Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-12">
            <button
              onClick={() => onNavigate('rooms')}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0d0714] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] hover:brightness-110 rounded-xl shadow-lg cursor-pointer"
            >
              <span>View All Rooms & Suites</span>
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 4 — WHY CHOOSE ANTALYA INN HOTEL */}
      <section className="py-24 bg-[#0d0714] relative border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
              EXCEPTIONAL SERVICE
            </span>
            <h2 className="font-luxury-serif text-3xl sm:text-5xl font-bold text-white">
              A Stay Designed Around You
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base">
              Every detail is thoughtfully curated to provide an unforgettable Mediterranean boutique experience.
            </p>
          </div>

          {/* 6 Feature Cards with Rich Imagery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#160b24] border border-amber-500/30 rounded-2xl overflow-hidden hover:border-[#d4af37] gold-glow-hover transition-all duration-300 transform hover:-translate-y-1.5 group flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Feature Image Banner */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gradient-to-br from-[#251142] to-[#120721]">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#160b24] via-[#160b24]/40 to-transparent" />
                    
                    {/* Floating Badge */}
                    {feature.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#0d0714]/90 text-[#d4af37] rounded-full border border-[#d4af37]/40 backdrop-blur-md shadow-md">
                        {feature.badge}
                      </span>
                    )}

                    {/* Floating Feature Icon */}
                    <div className="absolute bottom-3 right-4 w-11 h-11 rounded-xl bg-[#0d0714]/90 border border-[#d4af37]/60 flex items-center justify-center text-[#d4af37] backdrop-blur-md shadow-lg group-hover:bg-[#d4af37] group-hover:text-[#0d0714] transition-all duration-300">
                      {getFeatureIcon(idx)}
                    </div>
                  </div>

                  {/* Feature Content */}
                  <div className="p-6 space-y-2.5">
                    {feature.subtitle && (
                      <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase block">
                        {feature.subtitle}
                      </span>
                    )}
                    <h3 className="font-luxury-serif text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — ANTALYA EXPERIENCE */}
      <section className="relative py-28 overflow-hidden border-t border-purple-900/30">
        {/* Cinematic Coastal Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=90"
            alt="Antalya Coastline Sunset"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0714] via-[#0d0714]/90 to-[#1d0a36]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37] block">
              ANTALYA EXPERIENCE
            </span>

            <h2 className="font-luxury-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Discover <span className="text-gold-gradient">Antalya</span>
            </h2>

            <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">
              Step outside our doors directly into Kaleiçi, Antalya’s historic Old Town. Stroll down cobblestone avenues framed by ancient Roman gates, savor authentic Turkish tea by the sea, and watch the sun set over dramatic Mediterranean cliffs near Hıdırlık Tower.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3 bg-[#130724]/90 border border-[#d4af37]/30 rounded-xl">
                <span className="text-xs font-bold text-[#d4af37] block">Kaleiçi Old Town</span>
                <span className="text-[11px] text-neutral-300">Right at your doorstep</span>
              </div>
              <div className="p-3 bg-[#130724]/90 border border-[#d4af37]/30 rounded-xl">
                <span className="text-xs font-bold text-[#d4af37] block">Hıdırlık Tower</span>
                <span className="text-[11px] text-neutral-300">150 meters away</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenAttractions}
                className="px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0d0714] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] hover:brightness-110 rounded-xl shadow-xl transition-all cursor-pointer flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Antalya Highlights</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — BOOK YOUR STAY / CONTACT CTA */}
      <section className="py-20 bg-[#0d0714] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1a0c2e] to-[#251040] border-2 border-[#d4af37]/50 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
            {/* Ambient gold glow badge */}
            <div className="w-16 h-16 rounded-full bg-[#2a1347] border border-[#d4af37]/50 flex items-center justify-center mx-auto text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <Calendar className="w-8 h-8" />
            </div>

            <h2 className="font-luxury-serif text-3xl sm:text-4xl font-extrabold text-white">
              Your Antalya Escape Starts Here
            </h2>

            <p className="text-neutral-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Enjoy a comfortable and elegant stay at Antalya Inn Hotel. Contact us today to plan your visit or inquire about availability.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0d0714] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] hover:brightness-110 rounded-xl shadow-xl transition-all cursor-pointer"
              >
                Book Your Stay
              </button>

              <a
                href={`tel:${HOTEL_INFO.phoneClean}`}
                onClick={() => onShowToast(`Calling ${HOTEL_INFO.phone}`)}
                className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider text-white bg-[#150a26] hover:bg-[#200e38] border border-[#d4af37]/50 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#d4af37]" />
                <span>Call {HOTEL_INFO.phone}</span>
              </a>
            </div>

            <div className="pt-6 border-t border-purple-900/50 text-xs text-neutral-400 flex flex-col sm:flex-row items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span>{HOTEL_INFO.address}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
