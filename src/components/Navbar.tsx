import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types/hotel';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Rooms & Suites', page: 'rooms' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact & Booking', page: 'contact' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0714]/95 backdrop-blur-md py-3.5 border-b border-[#d4af37]/25 shadow-2xl'
          : 'bg-gradient-to-b from-[#0d0714]/90 via-[#0d0714]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* ZONE 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#8a6e12] p-[1px] flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-[#0d0714] rounded-[7px] flex items-center justify-center text-[#d4af37] font-serif font-bold text-lg">
                A
              </div>
            </div>
            <div>
              <span className="font-luxury-serif text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#d4af37] transition-colors block leading-tight">
                ANTALYA INN HOTEL
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37]/80 block font-sans font-medium">
                Muratpaşa · Antalya
              </span>
            </div>
          </button>

          {/* ZONE 2: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative py-1 text-sm font-medium transition-colors cursor-pointer ${
                    isActive ? 'text-[#d4af37]' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d4af37] via-[#fff2be] to-[#d4af37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                  )}
                  {!isActive && (
                    <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-[#d4af37]/60 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* ZONE 3: Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Phone Call Link */}
            <a
              href={`tel:${HOTEL_INFO.phoneClean}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wide text-neutral-200 hover:text-[#d4af37] border border-amber-500/20 hover:border-[#d4af37]/60 rounded-lg bg-[#180d29]/60 hover:bg-[#201038] transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Call Now</span>
              <span className="text-neutral-400 font-mono font-normal ml-0.5">{HOTEL_INFO.phone}</span>
            </a>

            {/* Book Your Stay Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wider uppercase text-[#0d0714] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] hover:brightness-110 rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Your Stay</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${HOTEL_INFO.phoneClean}`}
              className="p-2 text-[#d4af37] bg-[#1a0e2e] border border-[#d4af37]/30 rounded-lg hover:bg-[#24133f]"
              aria-label="Call Hotel"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white bg-[#1a0e2e] border border-[#d4af37]/30 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#d4af37]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0714] border-b border-[#d4af37]/30 px-4 pt-4 pb-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#1e0f36] text-[#d4af37] border-l-4 border-[#d4af37]'
                      : 'text-neutral-300 hover:bg-[#180d29] hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="pt-3 mt-2 border-t border-purple-900/40 flex flex-col gap-2.5">
              <a
                href={`tel:${HOTEL_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-[#f5f0e6] bg-[#1a0d2e] border border-[#d4af37]/40 rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call {HOTEL_INFO.phone}</span>
              </a>

              <button
                onClick={() => handleNavClick('contact')}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold tracking-wider uppercase text-[#0d0714] bg-gradient-to-r from-[#d4af37] to-[#e8c86b] rounded-lg shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Stay</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
