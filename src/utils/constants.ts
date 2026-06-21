export const COLORS = {
  sand: '#E7D8BE',
  dune: '#C8A97E',
  terracotta: '#B56A44',
  stone: '#F5F1EA',
  oasisGreen: '#4B7F67',
  charcoal: '#1A1A1A',
  white: '#FEFDFB',
  black: '#0A0A0A',
} as const;

export const NAV_LINKS = [
  { label: 'Our Story', href: '#story' },
  { label: 'Signature', href: '#signature' },
  { label: 'Garden', href: '#garden' },
  { label: 'Journey', href: '#journey' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reserve', href: '#reservation' },
] as const;

export const SIGNATURE_DRINKS = [
  {
    name: 'Sahara Espresso',
    description: 'Double-shot espresso infused with cardamom and served over a sphere of frozen date syrup. A bold journey through North African flavors.',
    price: '$8.50',
    ingredients: ['Single-origin Ethiopian beans', 'Green cardamom', 'Date syrup sphere', 'Orange zest'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=800&q=80',
  },
  {
    name: 'Mirage Latte',
    description: 'Oat milk latte with saffron threads and a whisper of rose water. The taste of a desert oasis at golden hour.',
    price: '$9.00',
    ingredients: ['Premium saffron threads', 'Persian rose water', 'Oat milk', 'Raw honey'],
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80',
  },
  {
    name: 'Dune Cold Brew',
    description: '24-hour steeped cold brew with coconut foam and a dusting of cinnamon sand. Refreshing as a desert breeze.',
    price: '$7.50',
    ingredients: ['Colombian cold brew', 'Coconut cream foam', 'Ceylon cinnamon', 'Vanilla bean'],
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80',
  },
  {
    name: 'Oasis Matcha',
    description: 'Ceremonial grade matcha whisked with pistachio milk and topped with a crystallized honeycomb shard.',
    price: '$10.00',
    ingredients: ['Uji matcha', 'Pistachio milk', 'Honeycomb shard', 'Edible gold leaf'],
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&q=80',
  },
] as const;

export const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80', alt: 'Golden hour through travertine arches', category: 'Architecture' },
  { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=80', alt: 'Pour-over coffee ritual', category: 'Coffee' },
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80', alt: 'Latte art in ceramic cup', category: 'Coffee' },
  { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80', alt: 'Desert-inspired interior', category: 'Interior' },
  { src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80', alt: 'Sunlight on sand texture', category: 'Texture' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80', alt: 'Artisan pastry display', category: 'Food' },
  { src: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=1200&q=80', alt: 'Palm shadows on wall', category: 'Nature' },
  { src: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1200&q=80', alt: 'Morning coffee ritual', category: 'Coffee' },
  { src: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=1200&q=80', alt: 'Travertine wall detail', category: 'Architecture' },
  { src: 'https://images.unsplash.com/photo-1513267048331-5611cad62e8f?w=1200&q=80', alt: 'Desert landscape panorama', category: 'Nature' },
  { src: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=1200&q=80', alt: 'Minimalist cafe seating', category: 'Interior' },
  { src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80', alt: 'Tent at golden hour', category: 'Nature' },
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80', alt: 'Coffee beans close-up', category: 'Coffee' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80', alt: 'Dining atmosphere', category: 'Interior' },
  { src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1200&q=80', alt: 'Gourmet dish plating', category: 'Food' },
] as const;

export const COFFEE_JOURNEY_STEPS = [
  {
    title: 'Seed',
    subtitle: 'Origin',
    description: 'Hand-selected heirloom varietals from Ethiopia\'s birthplace of coffee. Each seed carries millennia of flavor potential.',
    icon: '🌱',
  },
  {
    title: 'Farm',
    subtitle: 'Cultivation',
    description: 'Grown in volcanic soil at 1,800m elevation, nurtured by equatorial sun and mountain mist in shade-grown forests.',
    icon: '🏔️',
  },
  {
    title: 'Roast',
    subtitle: 'Transformation',
    description: 'Small-batch roasted in our cast-iron drum roaster. Each profile developed over 200 test batches to unlock peak flavor.',
    icon: '🔥',
  },
  {
    title: 'Brew',
    subtitle: 'Ritual',
    description: 'Precise extraction at 93°C with mineral-balanced water. Every cup brewed to order with ceremonial attention.',
    icon: '☕',
  },
  {
    title: 'Cup',
    subtitle: 'Experience',
    description: 'Served in handmade ceramic vessels. The final moment where earth, craft, and intention unite in your hands.',
    icon: '🏺',
  },
] as const;

export const RESERVATION_TIME_SLOTS = [
  '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM',
] as const;

export const RESERVATION_GUESTS = [1, 2, 3, 4, 5, 6, 7, 8] as const;
