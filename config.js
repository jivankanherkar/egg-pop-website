// Central website configuration. Replace placeholders when the final details are ready.
export const CONFIG = {
  GAME_NAME: 'Egg Pop Parade',
  PLAY_STORE_URL: 'https://buildegg.netlify.app/',
  SUPPORT_EMAIL: '', // e.g. support@yourdomain.com
  INSTAGRAM_URL: 'https://instagram.com/',
  YOUTUBE_URL: 'https://www.youtube.com/',
  FACEBOOK_URL: 'https://www.facebook.com/',
  X_URL: 'https://x.com/',
  TIKTOK_URL: 'https://www.tiktok.com/',
  ANALYTICS_ENABLED: false,
  ANALYTICS_PROVIDER: '',
  CANONICAL_URL: 'https://example.com/',
};
export const WORLDS = [
  { id: 1, name: 'Happy Garden', range: '1–20', desc: 'Sunny meadows, flower paths, a cozy cottage, windmill and sparkling stream.', theme: 'garden', image: '/assets/gameplay-garden.png', emoji: '🌼' },
  { id: 2, name: 'Egg Beach', range: '21–40', desc: 'Tropical shores, turquoise water, palms, a pier and seaside treasures.', theme: 'beach', image: '/assets/gameplay-beach.png', emoji: '🏝️' },
  { id: 3, name: 'Snow Egg Land', range: '41–60', desc: 'A winter wonderland of snow, icy rivers, pine trees and frozen falls.', theme: 'snow', image: '/assets/gameplay-castle.png', emoji: '❄️' },
  { id: 4, name: 'Dino Valley', range: '61–80', desc: 'Prehistoric trails with dinosaurs, lush plants, cliffs and waterfalls.', theme: 'dino', image: '/assets/gameplay-garden.png', emoji: '🦕' },
  { id: 5, name: 'Space Eggs', range: '81–100', desc: 'A cosmic adventure among stars, planets, crystals and rocket structures.', theme: 'space', image: '/assets/gameplay-castle.png', emoji: '🚀' },
  { id: 6, name: 'Rainbow Kingdom', range: '101–120', desc: 'A colorful fantasy realm with floating islands, clouds and a magical castle.', theme: 'rainbow', image: '/assets/gameplay-castle.png', emoji: '🌈' },
  { id: 7, name: 'Sunset Village', range: '121–140', desc: 'Warm lantern streets, cozy rooftops, and glowing evening pathways.', theme: 'sunset', image: '/assets/gameplay-beach.png', emoji: '🌇' },
  { id: 8, name: 'Crystal Caves', range: '141–160', desc: 'Shimmering caverns filled with glowing gems, stone arches, and hidden tunnels.', theme: 'crystal', image: '/assets/gameplay-garden.png', emoji: '💎' },
  { id: 9, name: 'Jungle Jamboree', range: '161–180', desc: 'Lush vines, tropical foliage, playful creatures, and bustling jungle rhythms.', theme: 'jungle', image: '/assets/gameplay-castle.png', emoji: '🌿' },
  { id: 10, name: 'Neon Moon Park', range: '181–200', desc: 'A dreamy nighttime park of glowing lights, moon paths, and festive fun.', theme: 'moon', image: '/assets/gameplay-castle.png', emoji: '🌙' }
];
export const SOCIALS = [{ name: 'Instagram', key: 'INSTAGRAM_URL', icon: '◎' }, { name: 'YouTube', key: 'YOUTUBE_URL', icon: '▶' }, { name: 'Facebook', key: 'FACEBOOK_URL', icon: 'f' }, { name: 'X', key: 'X_URL', icon: '𝕏' }, { name: 'TikTok', key: 'TIKTOK_URL', icon: '♪' }];
