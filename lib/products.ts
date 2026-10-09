export type Product = {
  slug: string; name: string; short: string; story: string;
  details: string[]; gift: string; tone: 'honey' | 'sea' | 'snow' | 'smoke'; badge: string;
};
export const BRAND = 'Onyx Atelier';
export const products: Product[] = [
  { slug: 'wine-glasses', name: 'Onyx Wine Glasses, Set of 2', tone: 'honey', badge: 'Best for anniversaries',
    short: 'Hand-finished honey onyx, each glass with its own banding.',
    story: 'Cut from natural onyx and polished by hand, so light glows through the thinner walls when you hold them to a window.',
    details: ['Sold as a pair in a gift box', 'Natural stone, so every pair is unique', 'Hand wash only'],
    gift: 'Anniversaries and housewarmings' },
  { slug: 'wine-chiller', name: 'Onyx Wine Chiller', tone: 'sea', badge: 'Host favorite',
    short: 'A solid stone sleeve that keeps a chilled bottle cool at the table.',
    story: 'Rest it in the refrigerator, slide in a chilled bottle, and skip the bucket of ice water on the table.',
    details: ['Chill the sleeve for about an hour first', 'No dripping, no ice bucket', 'Heavy, stable base'],
    gift: 'Hosts who love dinner parties' },
  { slug: 'tequila-shot-set', name: 'Onyx Shot Glass Set with Tray', tone: 'snow', badge: 'Giftable set',
    short: 'Four shot glasses on a matching onyx tray.',
    story: 'A set that stays out on the bar cart because it looks like a sculpture when it is not in use.',
    details: ['Matching onyx tray', 'Gift box available', 'Each set varies in color'],
    gift: 'Birthdays and celebrations' },
  { slug: 'beer-mug', name: 'Onyx Beer Mug', tone: 'smoke', badge: 'One of a kind',
    short: 'A weighty, hand-finished mug with a comfortable handle.',
    story: 'Stone keeps its temperature, so a chilled mug holds the cold longer than glass.',
    details: ['Comfortable handle', 'Chill before use', 'Hand wash only'],
    gift: "Father's Day and groomsmen" },
];
