export type Faq = { q: string; a: string };
export type Product = {
  slug: string; name: string; badge: string; short: string; tagline: string;
  images: string[]; overview: string[]; highlights: { title: string; text: string }[];
  specs: [string, string][]; howTo: string[]; gifting: string; care: string[]; faqs: Faq[];
};
export const BRAND = 'Onyx Atelier';
const img = (slug: string, n: number) => Array.from({ length: n }, (_, i) => `/images/products/${slug}-${i + 1}.jpg`);
const careBase = ['Hand wash with mild soap and warm water.', 'Dry right away with a soft cloth.', 'No dishwasher and no microwave.', 'Rinse after citrus or other acidic drinks.', 'Avoid sudden temperature shocks.'];

export const products: Product[] = [
  {
    slug: 'wine-glasses', name: 'Onyx Wine Glasses, Set of 2', badge: 'Best for anniversaries', images: img('wine-glasses', 2),
    short: 'A hand-finished pair, each glass with its own banding.',
    tagline: 'A matched pair that is still one of a kind.',
    overview: [
      'Each glass is cut from natural onyx and polished by hand. Because onyx forms in slow layers, every glass carries its own bands of honey, cream and green, so no two pairs look the same.',
      'Hold one up to a window and the thinner walls glow from inside. On the table, they are heavy, steady and cool to the touch, the kind of glasses guests pick up and ask about.',
    ],
    highlights: [
      { title: 'One of a kind', text: 'Natural stone, so the banding on your pair is never repeated.' },
      { title: 'Hand-finished', text: 'Polished by hand for a smooth rim and a soft sheen.' },
      { title: 'Gift-ready', text: 'Sold as a pair, with gift boxing on request.' },
      { title: 'Made to display', text: 'Beautiful on an open shelf between dinners.' },
    ],
    specs: [['Material', 'Natural onyx'], ['Set', 'Pair of 2'], ['Finish', 'Hand-polished'], ['Care', 'Hand wash only'], ['Sizes', 'Confirmed by the owner'], ['Gift box', 'On request']],
    howTo: ['Rinse before first use.', 'Serve at the table and set on a coaster or cloth to protect the stone.', 'Wash by hand soon after use and dry right away.'],
    gifting: 'A favorite for anniversaries, weddings and housewarmings. Ask about engraving initials or a date on the base.',
    care: careBase,
    faqs: [
      { q: 'Will my glasses look exactly like the photos?', a: 'No two pieces are identical. Color and banding vary because onyx is natural stone, and that is part of what makes each pair special.' },
      { q: 'Can they go in the dishwasher?', a: 'No. Hand wash with mild soap and warm water, then dry right away.' },
      { q: 'Can I have them engraved?', a: 'Engraving is available on request. The owner confirms options, cost and lead time.' },
      { q: 'How much do they cost?', a: 'Add the pair to your gift list and request pricing. The owner replies with current prices and delivery options.' },
    ],
  },
  {
    slug: 'wine-chiller', name: 'Onyx Wine Chiller', badge: 'Host favorite', images: img('wine-chiller', 4),
    short: 'A stone sleeve that keeps a chilled bottle cool at the table.',
    tagline: 'Cold wine at the table, without the ice bucket.',
    overview: [
      'Stone holds its temperature. Chill the onyx sleeve in the refrigerator, slide in a bottle that is already cold, and set it on the table. There is no dripping, no melting ice, and no wet tablecloth.',
      'Heavy and stable, it doubles as a centerpiece. Every chiller shows its own banding, so it never looks like anyone else\u2019s.',
    ],
    highlights: [
      { title: 'No ice, no drips', text: 'A chilled stone sleeve keeps a cold bottle cool.' },
      { title: 'Stable base', text: 'Heavy enough to stay put on a busy table.' },
      { title: 'A centerpiece', text: 'Natural banding makes it look like sculpture.' },
      { title: 'Host gift', text: 'A memorable thank-you for the dinner-party host.' },
    ],
    specs: [['Material', 'Natural onyx'], ['Fits', 'Standard bottles (owner confirms)'], ['Prep', 'Chill about 1 hour'], ['Finish', 'Hand-polished'], ['Care', 'Hand wash only'], ['Gift box', 'On request']],
    howTo: ['Place the empty sleeve in the refrigerator for about an hour.', 'Slide in a bottle that is already chilled.', 'Set it on the table. Wipe dry after use.'],
    gifting: 'Ideal for hosts who love dinner parties, housewarmings and holiday tables.',
    care: careBase,
    faqs: [
      { q: 'Does it chill a warm bottle?', a: 'It keeps an already chilled bottle cool at the table. Start with a cold bottle and a chilled sleeve.' },
      { q: 'How long should I chill the sleeve?', a: 'About an hour in the refrigerator (sample guidance; the owner confirms).' },
      { q: 'Will it fit my bottle?', a: 'It is designed for standard bottles. The owner confirms exact dimensions.' },
      { q: 'How much does it cost?', a: 'Add it to your gift list and request pricing.' },
    ],
  },
  {
    slug: 'tequila-shot-set', name: 'Onyx Shot Glass Set with Tray', badge: 'Giftable set', images: img('tequila-shot-set', 4),
    short: 'Shot glasses on a matching onyx tray.',
    tagline: 'A bar-cart set that looks like sculpture.',
    overview: [
      'A set of shot glasses with a matching onyx tray. Between uses it stays out on the bar cart or shelf, because it looks like a small stone sculpture rather than barware.',
      'Each glass is hand-finished, and the set varies in color from one to the next.',
    ],
    highlights: [
      { title: 'Complete set', text: 'Glasses and a matching tray in one gift.' },
      { title: 'Display-worthy', text: 'Looks good on a bar cart between uses.' },
      { title: 'Unique color', text: 'Every set carries its own banding.' },
      { title: 'Celebration gift', text: 'A favorite for birthdays and milestones.' },
    ],
    specs: [['Material', 'Natural onyx'], ['Set', 'Glasses + tray (owner confirms count)'], ['Finish', 'Hand-polished'], ['Care', 'Hand wash only'], ['Gift box', 'On request'], ['Engraving', 'On request']],
    howTo: ['Rinse before first use.', 'Serve on the matching tray to protect surfaces.', 'Hand wash and dry each piece right away.'],
    gifting: 'Great for birthdays, celebrations and groomsmen gifts. Bulk orders welcome.',
    care: careBase,
    faqs: [
      { q: 'How many glasses come in a set?', a: 'The owner confirms the set configuration before launch.' },
      { q: 'Can I order several sets for an event?', a: 'Yes. Ask about bulk and corporate gift orders.' },
      { q: 'Dishwasher safe?', a: 'No. Hand wash only.' },
      { q: 'How much does it cost?', a: 'Add it to your gift list and request pricing.' },
    ],
  },
  {
    slug: 'beer-mug', name: 'Onyx Beer Mug', badge: 'One of a kind', images: img('beer-mug', 3),
    short: 'A weighty, hand-finished mug with a comfortable handle.',
    tagline: 'Heavy in the hand, cool to the touch.',
    overview: [
      'A substantial onyx mug with a comfortable handle. Stone holds its temperature, so a mug chilled in advance stays cool longer than glass.',
      'Hand-finished and naturally banded, it is the kind of gift that gets used and kept.',
    ],
    highlights: [
      { title: 'Holds the cold', text: 'Chill it first and it stays cool longer.' },
      { title: 'Solid feel', text: 'Weighty, steady and built to last.' },
      { title: 'Comfortable handle', text: 'Shaped for an easy grip.' },
      { title: 'Personal gift', text: 'Engraving available on request.' },
    ],
    specs: [['Material', 'Natural onyx'], ['Handle', 'Yes'], ['Finish', 'Hand-polished'], ['Prep', 'Chill before use'], ['Care', 'Hand wash only'], ['Engraving', 'On request']],
    howTo: ['Chill the mug in the refrigerator before serving.', 'Set it on a coaster to protect the stone.', 'Hand wash and dry right away.'],
    gifting: "A favorite for Father's Day, birthdays and groomsmen.",
    care: careBase,
    faqs: [
      { q: 'Can I put it in the freezer?', a: 'The refrigerator is best. Avoid sudden temperature shocks, such as freezer to hot water.' },
      { q: 'Is each mug different?', a: 'Yes. Natural banding makes every mug unique.' },
      { q: 'Can it be engraved?', a: 'Yes, on request. The owner confirms options and lead time.' },
      { q: 'How much does it cost?', a: 'Add it to your gift list and request pricing.' },
    ],
  },
];
