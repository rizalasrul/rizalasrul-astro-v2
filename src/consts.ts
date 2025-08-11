// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import hokkaido1 from '/src/assets/japan/hokkaido-1.png';
import hokkaido2 from '/src/assets/japan/hokkaido-2.png';
import hokkaido3 from '/src/assets/japan/hokkaido-3.png';
import hokkaido4 from '/src/assets/japan/hokkaido-4.png';
import hokkaido5 from '/src/assets/japan/hokkaido-5.png';
import hokkaido6 from '/src/assets/japan/hokkaido-6.png';
import hokkaido7 from '/src/assets/japan/hokkaido-7.png';
import hokkaido8 from '/src/assets/japan/hokkaido-8.png';
import hokkaido9 from '/src/assets/japan/hokkaido-9.png';
import tochigi1 from '/src/assets/japan/tochigi-1.jpg';
import tochigi2 from '/src/assets/japan/tochigi-2.jpg';
import tochigi3 from '/src/assets/japan/tochigi-3.jpg';
import tochigi4 from '/src/assets/japan/tochigi-4.jpg';

export const SITE_TITLE = 'Rizal Asrul Pambudi';
export const SITE_DESCRIPTION = 'Welcome to my website!';
export const HOMEBLOG_TITLE = 'Documenting the journey';
export const HOMEBLOG_DESCRIPTION = 'Tech insights & life reflections';
export const BLOGLIST_TITLE = 'Writing along the way';
export const BLOGLIST_DESCRIPTION = 'From tech to life lessons';
export const PREFECTURES = {
  '01': {
    jp: '北海道',
    en: 'Hokkaido',
    subtitle: 'The northernmost prefecture',
    lastVisit: '2025-02-15',
    experience: `
      ❄️ Sapporo hit -4°C and it's even colder up north!<br />
      🚄 Riding the Hayabusa Shinkansen to Tokyo? Totally unforgettable!<br />
      🦀 Seafood here? Pure heaven, every bite!
    `,
    rating: 5,
    tips: [
      'Dress in layers.',
      "Carry cash.",
      'Book accommodations early. Popular areas like Niseko and Furano fill up fast, especially during ski season.',
      "Try local specialties. Don't miss fresh seafood, soup curry, and Hokkaido dairy treats!",
    ],
    photos: [
      hokkaido1.src,
      hokkaido2.src,
      hokkaido3.src,
      hokkaido4.src,
      hokkaido5.src,
      hokkaido6.src,
      hokkaido7.src,
      hokkaido8.src,
      hokkaido9.src,
    ],
  },
  '02': { jp: '青森', en: 'Aomori' },
  '03': { jp: '岩手', en: 'Iwate' },
  '04': { jp: '宮城', en: 'Miyagi' },
  '05': { jp: '秋田', en: 'Akita' },
  '06': { jp: '山形', en: 'Yamagata' },
  '07': { jp: '福島', en: 'Fukushima' },
  '08': { jp: '茨城', en: 'Ibaraki' },
  '09': {
    jp: '栃木',
    en: 'Tochigi',
    subtitle: 'Home of Nikko',
    lastVisit: '2024-11-21',
    rating: 5,
    experience: `
      🍁 Went to Nikko during autumn, perfect timing! Everything was covered in beautiful shades of brown and gold.<br />
      🚌 Got myself a Nikko Pass.<br />
      🚄 Took the Spacia X train from Tokyo to Tochigi. A bit on the expensive side, but super comfy and absolutely worth it!
    `,
    tips: [
      "Grab a Nikko Pass.",
      "Visit in Autumn.",
      "Ride the Spacia X or Limited Express.",
    ],
    photos: [
      tochigi1.src,
      tochigi2.src,
      tochigi3.src,
      tochigi4.src,
    ],
  },
  '10': { jp: '群馬', en: 'Gunma' },
  '11': {
    jp: '埼玉',
    en: 'Saitama',
    subtitle: 'Gateway to Tokyo',
    lastVisit: '2025-02-26',
    photos: ['/photos/saitama-1.jpg', '/photos/saitama-2.jpg'],
  },
  '12': {
    jp: '千葉',
    en: 'Chiba',
    subtitle: 'Home of Tokyo Disneyland',
    lastVisit: '2025-02-25',
    photos: ['/photos/chiba-1.jpg', '/photos/chiba-2.jpg'],
  },
  '13': {
    jp: '東京',
    en: 'Tokyo',
    subtitle: 'The Capital City',
    lastVisit: '2025-03-01',
    photos: ['/photos/tokyo-1.jpg', '/photos/tokyo-2.jpg'],
  },
  '14': {
    jp: '神奈川',
    en: 'Kanagawa',
    subtitle: 'Home of Yokohama',
    lastVisit: '2025-02-27',
    photos: ['/photos/kanagawa-1.jpg', '/photos/kanagawa-2.jpg'],
  },
  '15': { jp: '新潟',
    en: 'Niigata',
    subtitle: 'Famous for Rice and Sake',
    lastVisit: '2024-02-12',
    photos: ['/photos/niigata-1.jpg', '/photos/niigata-2.jpg'],
  },
  '16': { jp: '富山', en: 'Toyama' },
  '17': { jp: '石川', en: 'Ishikawa' },
  '18': { jp: '福井', en: 'Fukui' },
  '19': {
    jp: '山梨',
    en: 'Yamanashi',
    subtitle: 'View of Mt. Fuji',
    lastVisit: '2024-11-17',
    photos: ['/photos/yamanashi-1.jpg', '/photos/yamanashi-2.jpg'],
  },
  '20': { jp: '長野', en: 'Nagano' },
  '21': { jp: '岐阜', en: 'Gifu' },
  '22': { jp: '静岡', en: 'Shizuoka' },
  '23': { jp: '愛知',
    en: 'Aichi',
    subtitle: 'Industrial Powerhouse',
    lastVisit: '2024-11-16',
    photos: ['/photos/aichi-1.jpg', '/photos/aichi-2.jpg'],
  },
  '24': { jp: '三重', en: 'Mie' },
  '25': { jp: '滋賀', en: 'Shiga' },
  '26': { jp: '京都',
    en: 'Kyoto',
    subtitle: 'The Cultural Capital',
    lastVisit: '2024-02-10',
    photos: ['/photos/kyoto-1.jpg', '/photos/kyoto-2.jpg'],
  },
  '27': {
    jp: '大阪',
    en: 'Osaka',
    subtitle: 'The Kitchen of Japan',
    lastVisit: '2024-11-14',
    photos: ['/photos/osaka-1.jpg', '/photos/osaka-2.jpg'],
  },
  '28': { jp: '兵庫',
    en: 'Hyogo',
    subtitle: 'Port City of Kobe',
    lastVisit: '2024-11-10',
    photos: ['/photos/hyogo-1.jpg', '/photos/hyogo-2.jpg'],
  },
  '29': { jp: '奈良',
    en: 'Nara',
    subtitle: 'Ancient Capital',
    lastVisit: '2024-11-13',
    photos: ['/photos/nara-1.jpg', '/photos/nara-2.jpg'],
  },
  '30': { jp: '和歌山', en: 'Wakayama' },
  '31': { jp: '鳥取', en: 'Tottori' },
  '32': { jp: '島根', en: 'Shimane' },
  '33': { jp: '岡山', en: 'Okayama' },
  '34': { jp: '広島', en: 'Hiroshima' },
  '35': { jp: '山口', en: 'Yamaguchi' },
  '36': { jp: '徳島', en: 'Tokushima' },
  '37': { jp: '香川', en: 'Kagawa' },
  '38': { jp: '愛媛', en: 'Ehime' },
  '39': { jp: '高知', en: 'Kochi' },
  '40': { jp: '福岡', en: 'Fukuoka' },
  '41': { jp: '佐賀', en: 'Saga' },
  '42': { jp: '長崎', en: 'Nagasaki' },
  '43': { jp: '熊本', en: 'Kumamoto' },
  '44': { jp: '大分', en: 'Oita' },
  '45': { jp: '宮崎', en: 'Miyazaki' },
  '46': { jp: '鹿児島', en: 'Kagoshima' },
  '47': { jp: '沖縄', en: 'Okinawa' }
};
