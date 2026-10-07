import React from 'react';
import { PageRoute } from '../types/hotel';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MapPin, Mail, Instagram, Facebook, Compass, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08040d] text-neutral-300 border-t border-[#d4af37]/25 relative overflow-hidden">
      {/* Decorative ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-purple-900/30">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#d4af37] to-[#8a6e12] p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#08040d] rounded-[3px] flex items-center justify-center text-[#d4af37] font-serif font-bold text-sm">
                  A
                </div>
              </div>
              <h3 className="font-luxury-serif text-lg font-bold text-white tracking-wider">
                ANTALYA INN HOTEL
              </h3>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              A refined boutique stay in Antalya, combining comfort, elegance and warm Turkish hospitality in historic Muratpaşa.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${HOTEL_INFO.phoneClean.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#150a24] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#201038] hover:scale-105 transition-all"
                title="WhatsApp Us"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#150a24] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#201038] hover:scale-105 transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#150a24] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#201038] hover:scale-105 transition-all"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#150a24] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#201038] hover:scale-105 transition-all"
                title="TripAdvisor"
              >
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-luxury-serif text-sm font-semibold uppercase tracking-widest text-[#d4af37] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('rooms')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Rooms & Suites
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('gallery')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Contact & Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-3">
            <h4 className="font-luxury-serif text-sm font-semibold uppercase tracking-widest text-[#d4af37] mb-4">
              Direct Contact
            </h4>
            <div className="flex items-start gap-3 text-sm">
              <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <div>
                <a
                  href={`tel:${HOTEL_INFO.phoneClean}`}
                  className="hover:text-[#d4af37] transition-colors font-mono"
                >
                  {HOTEL_INFO.phone}
                </a>
                <p className="text-xs text-neutral-500">24/7 Front Desk Support</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <Mail className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <a
                href={`mailto:${HOTEL_INFO.email}`}
                className="hover:text-[#d4af37] transition-colors"
              >
                {HOTEL_INFO.email}
              </a>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <span className="text-neutral-400">
                {HOTEL_INFO.address}
              </span>
            </div>
          </div>

          {/* Column 4: Location Highlights */}
          <div className="space-y-3">
            <h4 className="font-luxury-serif text-sm font-semibold uppercase tracking-widest text-[#d4af37] mb-4">
              Boutique Location
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Located in the heart of Kaleiçi (Old Town Antalya). Walking distance to Hıdırlık Tower (150m), Old Harbor (300m), and Mermerli Beach (250m).
            </p>
            <a
              href={HOTEL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] hover:text-[#f3e5ab] underline pt-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>View on Google Maps</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 Antalya Inn Hotel. All Rights Reserved.</p>
          <p className="text-neutral-600">
            Kılıçaslan Mah, Hıdırlık Sk. No:41, 07710 Muratpaşa/Antalya, Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
};
