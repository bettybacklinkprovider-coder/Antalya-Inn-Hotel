import { Room, GalleryItem, Attraction } from '../types/hotel';
import featureRoomsImg from '../assets/images/feature_rooms_1791353513117.jpg';
import featureLocationImg from '../assets/images/feature_location_1791353532295.jpg';
import featureComfortImg from '../assets/images/feature_comfort_1791353548271.jpg';
import featureHospitalityImg from '../assets/images/feature_hospitality_1791353564211.jpg';
import featureCourtyardImg from '../assets/images/feature_courtyard_1791353579837.jpg';
import featureBookingImg from '../assets/images/feature_booking_1791353595828.jpg';

export const HOTEL_INFO = {
  name: 'ANTALYA INN HOTEL',
  tagline: 'A Refined Stay in the Heart of Antalya',
  phone: '+90 543 281 0768',
  phoneClean: '+905432810768',
  email: 'info@antalyainnhotel.com',
  address: 'Kılıçaslan Mah, Hıdırlık Sk. No:41, 07710 Muratpaşa/Antalya, Türkiye',
  coordinates: {
    lat: 36.8841,
    lng: 30.7056,
  },
  googleMapsUrl: 'https://maps.google.com/?q=K%C4%B1l%C4%B1%C3%A7aslan+Mah,+H%C4%B1d%C4%B1rl%C4%B1k+Sk.+No:41,+07710+Muratpa%C5%9Fa/Antalya,+T%C3%BCrkiye',
};

export const ROOMS: Room[] = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    category: 'Deluxe',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85',
    description: 'Elegant, comfortable accommodation with refined boutique interiors, warm lighting, and stone architectural accents.',
    bedInfo: '1 King Size Bed or 2 Twin Beds',
    maxGuests: 2,
    sizeSqm: 28,
    popularTag: 'Most Popular',
    features: [
      'High-Speed Wi-Fi',
      'Independent Air Conditioning',
      'En-Suite Rainfall Shower',
      'Smart HD TV',
      'Safe Deposit Box',
      'Electric Tea & Coffee Kettle',
      'Luxury Ottoman Toiletries',
      'Hairdryer & Slippers'
    ]
  },
  {
    id: 'superior-room',
    name: 'Superior Room',
    category: 'Superior',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85',
    description: 'A spacious and relaxing room designed for a memorable stay with classic wooden beams and courtyard views.',
    bedInfo: '1 Large Double Bed + Seating Area',
    maxGuests: 3,
    sizeSqm: 35,
    features: [
      'Courtyard or Garden View',
      'High-Speed Wi-Fi',
      'Air Conditioning & Heating',
      'Spacious Marble Bathroom',
      'Mini Refreshment Bar',
      'Complimentary Bottled Water',
      'Smart TV & Satellite Channels',
      'In-room Safe'
    ]
  },
  {
    id: 'premium-suite',
    name: 'Premium Suite',
    category: 'Suite',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
    description: 'A luxurious accommodation option with an elevated boutique experience, separate lounge space, and premium finishes.',
    bedInfo: '1 Emperor King Bed + Sofa Bed',
    maxGuests: 3,
    sizeSqm: 48,
    popularTag: 'Luxury Choice',
    features: [
      'Private Balcony Option',
      'Separate Living Room Area',
      'Bespoke Espresso Machine',
      'Luxurious Rainfall Shower & Bath',
      'Deep Velvet Lounge Seating',
      'High-Speed Wi-Fi',
      'Dual HD Smart TVs',
      'Premium Turn-down Service'
    ]
  },
  {
    id: 'standard-room',
    name: 'Standard Room',
    category: 'Standard',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85',
    description: 'A cozy and stylish room offering modern amenities and serene comfort in the heart of Old Town Antalya.',
    bedInfo: '1 Queen Size Bed',
    maxGuests: 2,
    sizeSqm: 22,
    features: [
      'High-Speed Wi-Fi',
      'Quiet Inner View',
      'Climate Control',
      'Modern Shower Room',
      'Flat-screen TV',
      'Work Desk & Chair'
    ]
  },
  {
    id: 'family-room',
    name: 'Family Suite',
    category: 'Family',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=85',
    description: 'Thoughtfully designed double-room suite providing comfort and privacy for families traveling together.',
    bedInfo: '1 King Bed + 2 Single Beds',
    maxGuests: 4,
    sizeSqm: 55,
    features: [
      'Two Interconnected Bedrooms',
      'Spacious En-suite Bathroom',
      'High-Speed Wi-Fi',
      'Dual Air Conditioning Units',
      'Mini Refrigerator & Kettle',
      'Family Seating Area'
    ]
  },
  {
    id: 'honeymoon-suite',
    name: 'Honeymoon Ottoman Suite',
    category: 'Suite',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
    description: 'An enchanting, romantic suite featuring historical stone archways, warm golden accents, and luxury bathtub.',
    bedInfo: '1 Royal Four-Poster King Bed',
    maxGuests: 2,
    sizeSqm: 50,
    popularTag: 'Romantic',
    features: [
      'Freestanding Soaking Tub',
      'Complimentary Turkish Welcome Treats',
      'Romantic Ambient Lighting',
      'High-Speed Wi-Fi',
      'Soft Plush Bathrobes & Slippers',
      'Express Room Service'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Historic Boutique Exterior',
    category: 'Hotel',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
    description: 'Restored Ottoman-Mediterranean architecture nestled in Muratpaşa, Kaleiçi.'
  },
  {
    id: 'g2',
    title: 'Deluxe Suite Bedroom',
    category: 'Rooms',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
    description: 'Refined interiors with plush bedding and warm golden illumination.'
  },
  {
    id: 'g3',
    title: 'Peaceful Courtyard Lounge',
    category: 'Dining & Relaxation',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80',
    description: 'Quiet outdoor garden patio surrounded by stone walls and flowering greenery.'
  },
  {
    id: 'g4',
    title: 'Antalya Sunset Coastline',
    category: 'Antalya',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    description: 'Breathtaking cliffs overlooking the turquoise Mediterranean Sea near the hotel.'
  },
  {
    id: 'g5',
    title: 'Superior Room Bathroom Detail',
    category: 'Rooms',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    description: 'Sleek marble finishes, rainfall shower head, and artisanal toiletries.'
  },
  {
    id: 'g6',
    title: 'Authentic Turkish Tea & Breakfast',
    category: 'Dining & Relaxation',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1000&q=80',
    description: 'Traditional morning spread with fresh Turkish pastries, olives, and tea.'
  },
  {
    id: 'g7',
    title: 'Kaleiçi Old Town Cobblestone Streets',
    category: 'Antalya',
    image: 'https://images.unsplash.com/photo-1527838832700-54595d042457?auto=format&fit=crop&w=1000&q=80',
    description: 'Historic narrow streets lined with boutique houses right outside the hotel.'
  },
  {
    id: 'g8',
    title: 'Lobby & Reception Evening Glow',
    category: 'Hotel',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80',
    description: 'Warm, welcoming lobby ambiance with gold accents and boutique lounge seating.'
  },
  {
    id: 'g9',
    title: 'Premium Suite Lounge Area',
    category: 'Rooms',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    description: 'Expansive suite featuring rich velvet seating and custom wooden craftwork.'
  },
  {
    id: 'g10',
    title: 'Hıdırlık Tower at Dusk',
    category: 'Antalya',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80',
    description: 'Historic Roman tower located just 150 meters from Antalya Inn Hotel.'
  },
  {
    id: 'g11',
    title: 'Evening Terrace Ambient Lighting',
    category: 'Dining & Relaxation',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    description: 'Atmospheric evening lighting for relaxing after a day of Antalya exploration.'
  },
  {
    id: 'g12',
    title: 'Honeymoon Ottoman Suite',
    category: 'Rooms',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80',
    description: 'Enchanting romantic suite with historical stone textures and luxury amenities.'
  },
  {
    id: 'g13',
    title: 'Old Harbor & Marina',
    category: 'Antalya',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    description: 'Scenic yacht harbor tucked underneath the ancient city walls of Kaleiçi.'
  },
  {
    id: 'g14',
    title: 'Boutique Hotel Garden Pathway',
    category: 'Hotel',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80',
    description: 'Lush green pathway and stone steps leading to private guest chambers.'
  },
  {
    id: 'g15',
    title: 'Turkish Coffee Experience',
    category: 'Dining & Relaxation',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
    description: 'Traditional Turkish coffee brewed over sand and served in brass fincan cups.'
  },
  {
    id: 'g16',
    title: 'Hadrian’s Gate Historic Entrance',
    category: 'Antalya',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
    description: 'Magnificent 2nd-century Roman triumphal arch at the entrance of Old Town.'
  }
];

export const WHY_CHOOSE_FEATURES = [
  {
    title: 'ELEGANT ROOMS',
    subtitle: 'Boutique Mediterranean Aesthetics',
    description: 'Meticulously restored boutique rooms blending historical Mediterranean charm with high-end modern comforts.',
    image: featureRoomsImg,
    badge: 'Luxury Comfort'
  },
  {
    title: 'CENTRAL ANTALYA LOCATION',
    subtitle: 'Historic Kaleiçi District',
    description: 'Nestled in historic Muratpaşa (Kaleiçi), steps away from Hıdırlık Tower, Mermerli Beach, and the Mediterranean Sea.',
    image: featureLocationImg,
    badge: 'Old Town Heart'
  },
  {
    title: 'COMFORTABLE STAY',
    subtitle: 'Serene Suite Climate',
    description: 'Climate-controlled quiet suites, premium anatomical mattresses, and rainfall showers for total rejuvenation.',
    image: featureComfortImg,
    badge: 'Pure Relaxation'
  },
  {
    title: 'WARM TURKISH HOSPITALITY',
    subtitle: '24/7 Dedicated Care',
    description: 'Attentive, friendly 24/7 personalized service ensuring every guest feels truly welcomed and cared for.',
    image: featureHospitalityImg,
    badge: 'Authentic Welcome'
  },
  {
    title: 'RELAXING ATMOSPHERE',
    subtitle: 'Garden Courtyard Haven',
    description: 'A serene courtyard sanctuary away from city bustle, ideal for evening relaxation and morning coffee.',
    image: featureCourtyardImg,
    badge: 'Courtyard Oasis'
  },
  {
    title: 'EASY BOOKING',
    subtitle: 'Direct Online & Phone Support',
    description: 'Direct phone and online reservation support with transparent service and prompt confirmation.',
    image: featureBookingImg,
    badge: 'Instant Support'
  }
];

export const ANTALYA_ATTRACTIONS: Attraction[] = [
  {
    id: 'a1',
    title: 'Hıdırlık Tower (Hıdırlık Kulesi)',
    category: 'Historic Monument',
    distance: '150 meters (2 min walk)',
    description: 'An ancient Roman landmark constructed in the 2nd century AD, offering panoramic sea views over the Gulf of Antalya.',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a2',
    title: 'Kaleiçi Old Town',
    category: 'Historic District',
    distance: 'At hotel doorstep',
    description: 'Charming pedestrian quarter with Ottoman-era mansions, flowering bougainvillea, boutique cafes, and artisan shops.',
    image: 'https://images.unsplash.com/photo-1527838832700-54595d042457?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a3',
    title: 'Old Harbor & Marina',
    category: 'Scenic Harbor',
    distance: '300 meters (4 min walk)',
    description: 'Picturesque Roman harbor surrounded by ancient fortress walls, yacht excursions, and seaside seafood dining.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a4',
    title: 'Mermerli Beach',
    category: 'Beach & Swimming',
    distance: '250 meters (3 min walk)',
    description: 'Historic cliffside beach with crystal-clear turquoise Mediterranean waters located right below the Old Town harbor.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a5',
    title: 'Hadrian’s Gate (Üçkapılar)',
    category: 'Roman Arch',
    distance: '500 meters (6 min walk)',
    description: 'Monumental 130 AD Roman triumphal arch built to honor Emperor Hadrian’s visit to ancient Attaleia.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a6',
    title: 'Düden Waterfalls',
    category: 'Natural Wonder',
    distance: '8 km (15 min drive)',
    description: 'Spectacular coastal waterfall cascading off 40-meter cliffs directly into the Mediterranean sea.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
  }
];
