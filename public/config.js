// Central website configuration. Replace placeholders when the final details are ready.
export const CONFIG = {
  GAME_NAME: 'Egg Pop Parade',
  PLAY_STORE_URL: 'https://buildegg.netlify.app/',
  SUPPORT_EMAIL: '', // e.g. support@yourdomain.com
  INSTAGRAM_URL: 'https://instagram.com/',
  YOUTUBE_URL: 'https://www.youtube.com/',
  FACEBOOK_URL: 'https://www.facebook.com/',
  ANALYTICS_ENABLED: false,
  ANALYTICS_PROVIDER: '',
  CANONICAL_URL: 'https://example.com/',
};
export const WORLDS = [
 {id:1,name:'Happy Garden',range:'1–20',desc:'Sunny meadows, flower paths, a cozy cottage, windmill and sparkling stream.',theme:'garden',image:'/assets/gameplay-garden.png',emoji:'🌼'},
 {id:2,name:'Egg Beach',range:'21–40',desc:'Tropical shores, turquoise water, palms, a pier and seaside treasures.',theme:'beach',image:'/assets/gameplay-beach.png',emoji:'🏝️'},
 {id:3,name:'Snow Egg Land',range:'41–60',desc:'A winter wonderland of snow, icy rivers, pine trees and frozen falls.',theme:'snow',image:'/assets/gameplay-castle.png',emoji:'❄️'},
 {id:4,name:'Dino Valley',range:'61–80',desc:'Prehistoric trails with dinosaurs, lush plants, cliffs and waterfalls.',theme:'dino',image:'/assets/gameplay-garden.png',emoji:'🦕'},
 {id:5,name:'Space Eggs',range:'81–100',desc:'A cosmic adventure among stars, planets, crystals and rocket structures.',theme:'space',image:'/assets/gameplay-castle.png',emoji:'🚀'},
 {id:6,name:'Rainbow Kingdom',range:'101–120',desc:'A colorful fantasy realm with floating islands, clouds and a magical castle.',theme:'rainbow',image:'/assets/gameplay-castle.png',emoji:'🌈'},
 {id:7,name:'Sunset Village',range:'121–140',desc:'Warm lantern streets, cozy rooftops, and glowing evening pathways.',theme:'sunset',image:'/assets/gameplay-beach.png',emoji:'🌇'},
 {id:8,name:'Crystal Caves',range:'141–160',desc:'Shimmering caverns filled with glowing gems, stone arches, and hidden tunnels.',theme:'crystal',image:'/assets/gameplay-garden.png',emoji:'💎'},
 {id:9,name:'Jungle Jamboree',range:'161–180',desc:'Lush vines, tropical foliage, playful creatures, and bustling jungle rhythms.',theme:'jungle',image:'/assets/gameplay-castle.png',emoji:'🌿'},
 {id:10,name:'Neon Moon Park',range:'181–200',desc:'A dreamy nighttime park of glowing lights, moon paths, and festive fun.',theme:'moon',image:'/assets/gameplay-castle.png',emoji:'🌙'}
];
export const SOCIALS = [
  { name: 'Instagram', key: 'INSTAGRAM_URL', icon: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="1" fill="currentColor" stroke="none"/></svg>' },
  { name: 'YouTube', key: 'YOUTUBE_URL', icon: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>' },
  { name: 'Play Store', key: 'PLAY_STORE_URL', icon: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path fill="#00a0ff" d="M3.5 2.2 14 12 3.5 21.8A2 2 0 0 1 3 20V4a2 2 0 0 1 .5-1.8Z"/><path fill="#00d66f" d="m3.5 2.2 13.2 7.4L14 12 3.5 2.2Z"/><path fill="#ffca28" d="M3.5 21.8 14 12l2.7 2.4-13.2 7.4Z"/><path fill="#f44336" d="m16.7 9.6 4 2.2a.3.3 0 0 1 0 .5l-4 2.2L14 12l2.7-2.4Z"/></svg>' },
  { name: 'Facebook', key: 'FACEBOOK_URL', icon: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true" focusable="false"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.4v3h2.7v8z"/></svg>' },
];
