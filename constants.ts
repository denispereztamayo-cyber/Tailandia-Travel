import { Destination, Review } from './types';

export const APP_NAME = "ThaiVoyage";

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Wat Arun (Temple of Dawn)',
    location: 'Bangkok',
    description: 'A stunning Buddhist temple on the west bank of the Chao Phraya River, known for its colorful spires and intricate mosaics.',
    imageUrl: 'https://lcwtfqxnlmsmouvtdhfk.supabase.co/storage/v1/object/public/Imagenes/4600_t8afNwa2.jpg',
    rating: 4.8,
    tags: ['Culture', 'History', 'Landmark'],
    priceRange: 'Low'
  },
  {
    id: '2',
    name: 'Maya Bay',
    location: 'Ko Phi Phi Leh',
    description: 'The iconic beach made famous by "The Beach" movie. Crystal clear turquoise waters surrounded by towering limestone cliffs.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    rating: 4.9,
    tags: ['Nature', 'Beach', 'Swimming'],
    priceRange: 'Medium'
  },
  {
    id: '3',
    name: 'Chiang Mai Night Bazaar',
    location: 'Chiang Mai',
    description: 'A vibrant night market stretching for several blocks, offering handicrafts, street food, clothes, and local entertainment.',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    rating: 4.6,
    tags: ['Shopping', 'Food', 'Nightlife'],
    priceRange: 'Low'
  },
  {
    id: '4',
    name: 'Elephant Nature Park',
    location: 'Chiang Mai',
    description: 'An ethical sanctuary and rescue center for elephants. Visitors can observe and help bathe these majestic creatures.',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    rating: 4.9,
    tags: ['Wildlife', 'Ethical', 'Family'],
    priceRange: 'High'
  },
  {
    id: '5',
    name: 'Railay Beach',
    location: 'Krabi',
    description: 'Accessible only by boat, this peninsula features stunning beaches, rock climbing spots, and a relaxed hippie vibe.',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    rating: 4.7,
    tags: ['Adventure', 'Climbing', 'Beach'],
    priceRange: 'Medium'
  },
  {
    id: '6',
    name: 'Ayutthaya Historical Park',
    location: 'Ayutthaya',
    description: 'Ruins of the second capital of the Siamese Kingdom. A UNESCO World Heritage site full of ancient prangs and giant monasteries.',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    rating: 4.7,
    tags: ['History', 'Ruins', 'Culture'],
    priceRange: 'Low'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sarah Jenkins',
    avatarUrl: 'https://picsum.photos/100/100?random=10',
    rating: 5,
    comment: 'The AI assistant helped me plan a 3-day itinerary in Bangkok perfectly. Wat Arun at sunset was magical!',
    date: '2 weeks ago'
  },
  {
    id: 'r2',
    author: 'Marcus Chen',
    avatarUrl: 'https://picsum.photos/100/100?random=11',
    rating: 5,
    comment: 'Incredible food recommendations. I would have never found the street food stall in Chiang Mai without this site.',
    date: '1 month ago'
  },
  {
    id: 'r3',
    author: 'Elena Rodriguez',
    avatarUrl: 'https://picsum.photos/100/100?random=12',
    rating: 4,
    comment: 'Great interface and very responsive on mobile. Loved the ethical elephant sanctuary suggestion.',
    date: '3 weeks ago'
  }
];

export const SYSTEM_INSTRUCTION = `
You are 'Chang', an expert AI Travel Guide for Thailand, embedded within the 'ThaiVoyage' website.
Your goal is to assist users in planning their trips to Thailand, providing cultural insights, and answering questions about the destinations featured on the website.

Context about the website content:
The website features top destinations including: Wat Arun (Bangkok), Maya Bay (Ko Phi Phi), Chiang Mai Night Bazaar, Elephant Nature Park, Railay Beach, and Ayutthaya Historical Park.

Guidelines:
1. Tone: Friendly, welcoming, knowledgeable, and respectful (Polite Thai hospitality style).
2. Recommendations: Prioritize places mentioned in the context, but feel free to suggest other famous Thai spots if relevant.
3. Culture: Briefly mention cultural etiquette (e.g., dress codes for temples) when relevant.
4. Conciseness: Keep responses easy to read on a chat widget (short paragraphs, bullet points).
5. If asked about prices, give estimates in Thai Baht (THB) and rough USD conversion.
6. Always encourage responsible and sustainable tourism.

Do not make up facts. If you don't know, suggest checking local resources.
`;