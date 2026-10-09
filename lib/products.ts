export type Product = {
  slug: string; name: string; short: string; story: string;
  details: string[]; gift: string; tone: 'honey' | 'sea' | 'snow' | 'smoke';
};
export const BRAND = 'Onyx Atelier';
export const products: Product[] = [
  { slug: 'wine-glasses', name: 'Onyx wine glasses', tone: 'honey',
    short: 'A pair of hand-finished glasses, each with its own banding.',
    story: 'Cut from natural onyx and polished by hand, so light glows through the thinner walls when you hold them to a window.',
    details: ['Sold as a pair in a gift box', 'Natural stone, so every pair is unique', 'Hand wash only'],
    gift: 'Anniversaries and housewarmings' },
  { slug: 'wine-chiller', name: 'Onyx wine chiller', tone: 'sea',
    short: 'A solid stone sleeve that keeps a chilled bottle cool at the table.',
    story: 'Rest it in the refrigerator, slide in a chilled bottle, and skip the bucket of ice water on the table.',
    details: ['Chill the sleeve for about an hour first', 'No dripping, no ice bucket', 'Heavy, stable base'],
    gift: 'Hosts who love dinner parties' },
  { slug: 'tequila-shot-set', name: 'Onyx tequila shot set', tone: 'snow',
    short: 'Shot glasses on a matching onyx tray.',
    story: 'A set that stays out on the bar cart because it looks like a sculpture when it is not in use.',
    details: ['Matching onyx tray', 'Gift box included', 'Each set varies in color'],
    gift: 'Birthdays and celebrations' },
  { slug: 'beer-mug', name: 'Onyx beer mug', tone: 'smoke',
    short: 'A weighty, hand-finished mug with a comfortable handle.',
    story: 'Stone keeps its temperature, so a chilled mug holds the cold longer than glass.',
    details: ['Comfortable handle', 'Chill before use', 'Hand wash only'],
    gift: "Father's Day and groomsmen" },
];
export const tones: Record<Product['tone'], string[]> = {
  honey: ['#F3E2BE', '#E2B86E', '#C4954A', '#9C6E2E', '#F8EFD9'],
  sea:   ['#DCE9DF', '#A9C9B5', '#5C8A74', '#3F6B57', '#EEF5EF'],
  snow:  ['#F6F4EE', '#E3DED2', '#C9C0AE', '#A39880', '#FBFAF6'],
  smoke: ['#E6E3DC', '#B9B3A6', '#7C776C', '#4E4A43', '#F2F0EA'],
};
