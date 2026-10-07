export type PageRoute = 'home' | 'rooms' | 'gallery' | 'contact';

export interface Room {
  id: string;
  name: string;
  category: 'Standard' | 'Deluxe' | 'Superior' | 'Premium' | 'Family' | 'Suite';
  image: string;
  description: string;
  bedInfo: string;
  maxGuests: number;
  sizeSqm: number;
  features: string[];
  popularTag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Hotel' | 'Rooms' | 'Dining & Relaxation' | 'Antalya';
  image: string;
  description: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  message: string;
}

export interface Attraction {
  id: string;
  title: string;
  category: string;
  distance: string;
  description: string;
  image: string;
}
