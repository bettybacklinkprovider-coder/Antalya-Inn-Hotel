import React, { useState, useEffect } from 'react';
import { BookingFormData } from '../types/hotel';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  User,
  Users,
  MessageSquare,
  CheckCircle2,
  PhoneCall,
  Clock,
  Compass,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

interface ContactPageProps {
  preselectedRoom?: string;
  onShowToast: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  preselectedRoom,
  onShowToast,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    roomType: preselectedRoom || 'Deluxe Room',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedRoom) {
      setFormData((prev) => ({ ...prev, roomType: preselectedRoom }));
    }
  }, [preselectedRoom]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast('Booking request sent successfully!');
    }, 800);
  };

  return (
    <div className="pt-24 pb-20 bg-transparent">
      {/* HERO SECTION */}
      <section className="relative py-16 bg-purple-gradient border-b border-purple-900/40 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
            RESERVATIONS & ENQUIRIES
          </span>
          <h1 className="font-luxury-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            CONTACT & BOOK YOUR STAY
          </h1>
          <p className="text-neutral-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Planning your Antalya getaway? We would be delighted to welcome you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* FORM COLUMN (7 Cols) */}
          <div className="lg:col-span-7 bg-[#170a26] border border-[#d4af37]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            <div className="mb-8">
              <h2 className="font-luxury-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                Send a Reservation Request
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300">
                Fill in your travel details below and our reservations team will confirm availability promptly.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#1c0e33] border border-[#d4af37] rounded-2xl p-8 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#2a134a] border border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-luxury-serif text-2xl font-bold text-white">
                  Booking Request Received
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong className="text-[#d4af37]">{formData.fullName}</strong>. We have received your request for <strong className="text-white">{formData.roomType}</strong>. Our front desk will contact you via phone/email shortly.
                </p>

                <div className="p-4 bg-[#120721] rounded-xl text-xs text-left text-neutral-300 space-y-1.5 font-mono max-w-md mx-auto border border-purple-900/50">
                  <div><strong>Guest:</strong> {formData.fullName} ({formData.phone})</div>
                  <div><strong>Room:</strong> {formData.roomType} ({formData.guests} Guests)</div>
                  {formData.checkIn && <div><strong>Dates:</strong> {formData.checkIn} to {formData.checkOut}</div>}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${HOTEL_INFO.phoneClean.replace('+', '')}?text=${encodeURIComponent(
                      `Hello Antalya Inn Hotel, I submitted a booking request for ${formData.roomType}. My name is ${formData.fullName}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0d0714] bg-[#d4af37] hover:bg-[#e6c253] rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirm via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-neutral-300 hover:text-white border border-purple-800 rounded-xl"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Alexander Wright"
                        className="w-full pl-10 pr-4 py-3 bg-[#11061c] border border-amber-500/30 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alexander@example.com"
                        className="w-full pl-10 pr-4 py-3 bg-[#11061c] border border-amber-500/30 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+90 5XX XXX XX XX"
                        className="w-full pl-10 pr-4 py-3 bg-[#11061c] border border-amber-500/30 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-3.5" />
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-[#11061c] border border-amber-500/30 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37] transition-all"
                      >
                        <option value={1} className="bg-[#11061c]">1 Guest</option>
                        <option value={2} className="bg-[#11061c]">2 Guests</option>
                        <option value={3} className="bg-[#11061c]">3 Guests</option>
                        <option value={4} className="bg-[#11061c]">4+ Family / Group</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Check-in & Check-out Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                      Check-in Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-3.5" />
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-[#11061c] border border-amber-500/30 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                      Check-out Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-3.5" />
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-[#11061c] border border-amber-500/30 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Room Type */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                    Room Category Selection
                  </label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#11061c] border border-amber-500/30 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37] transition-all"
                  >
                    {ROOMS.map((r) => (
                      <option key={r.id} value={r.name} className="bg-[#11061c]">
                        {r.name} ({r.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message / Requests */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                    Special Requests / Flight Details
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-3.5" />
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Let us know if you require airport transfer, early check-in, or honeymoon setup..."
                      className="w-full pl-10 pr-4 py-3 bg-[#11061c] border border-amber-500/30 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37] transition-all"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 text-sm font-bold uppercase tracking-wider text-[#0d0714] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] hover:brightness-110 rounded-xl shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Send Booking Request'}</span>
                </button>
              </form>
            )}
          </div>

          {/* CONTACT INFO COLUMN (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Contact Card */}
            <div className="bg-[#170a26] border border-[#d4af37]/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h2 className="font-luxury-serif text-2xl font-bold text-white border-b border-purple-900/40 pb-4">
                ANTALYA INN HOTEL
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#25123d] border border-[#d4af37]/30 text-[#d4af37] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-[#d4af37] font-semibold block">Phone Reservation</span>
                    <a
                      href={`tel:${HOTEL_INFO.phoneClean}`}
                      className="text-white hover:text-[#d4af37] font-mono text-base font-bold transition-colors"
                    >
                      {HOTEL_INFO.phone}
                    </a>
                    <p className="text-xs text-neutral-400 mt-0.5">Available 24 hours daily</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#25123d] border border-[#d4af37]/30 text-[#d4af37] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-[#d4af37] font-semibold block">Email Desk</span>
                    <a
                      href={`mailto:${HOTEL_INFO.email}`}
                      className="text-white hover:text-[#d4af37] transition-colors"
                    >
                      {HOTEL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#25123d] border border-[#d4af37]/30 text-[#d4af37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-[#d4af37] font-semibold block">Hotel Address</span>
                    <p className="text-neutral-200 leading-relaxed">
                      {HOTEL_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#25123d] border border-[#d4af37]/30 text-[#d4af37] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-[#d4af37] font-semibold block">Check-In / Out</span>
                    <p className="text-neutral-200">
                      Check-in: 14:00 · Check-out: 12:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-4 border-t border-purple-900/40 flex flex-col gap-2.5">
                <a
                  href={`tel:${HOTEL_INFO.phoneClean}`}
                  onClick={() => onShowToast(`Dialing ${HOTEL_INFO.phone}`)}
                  className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#0d0714] bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] hover:brightness-110 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Now (+90 543 281 0768)</span>
                </a>

                <a
                  href={`https://wa.me/${HOTEL_INFO.phoneClean.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-[#1e0d38] hover:bg-[#2b134f] border border-[#d4af37]/40 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#d4af37]" />
                  <span>WhatsApp Reservation Support</span>
                </a>
              </div>
            </div>

            {/* Embedded Map Visual Container */}
            <div className="bg-[#170a26] border border-[#d4af37]/40 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-luxury-serif text-lg font-bold text-white flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#d4af37]" />
                  <span>Hotel Location</span>
                </h3>
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Dark Purple Stylized Map Canvas */}
              <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-amber-500/20 bg-[#0d0517] flex flex-col justify-between p-4 group">
                {/* Background Map Graphic Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#160a26] via-transparent to-[#2c134d]/40" />

                <div className="relative z-10 flex items-center justify-between text-xs text-[#d4af37]">
                  <span className="font-mono bg-black/60 px-2.5 py-1 rounded border border-[#d4af37]/30">
                    Kaleiçi, Muratpaşa
                  </span>
                  <span className="font-mono bg-black/60 px-2.5 py-1 rounded border border-[#d4af37]/30">
                    Antalya, TR
                  </span>
                </div>

                {/* Pin marker center */}
                <div className="relative z-10 my-auto text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37] text-[#0d0714] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(212,175,55,0.6)] animate-pulse">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-luxury-serif text-base font-bold text-white">
                      ANTALYA INN HOTEL
                    </h4>
                    <p className="text-[11px] text-[#d4af37]">
                      Hıdırlık Sk. No:41, 07710
                    </p>
                  </div>
                </div>

                <div className="relative z-10 text-[11px] text-neutral-300 flex items-center justify-between border-t border-purple-900/60 pt-2">
                  <span>Hıdırlık Tower: 150m</span>
                  <span>Antalya Airport: 14 km</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
