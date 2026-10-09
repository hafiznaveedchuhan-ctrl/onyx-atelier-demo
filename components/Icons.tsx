const P: Record<string, string> = {
  gem: 'M6 3h12l3 6-9 12L3 9l3-6Zm-3 6h18M9 3l3 18 3-18',
  truck: 'M3 6h11v10H3zM14 10h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  gift: 'M4 11h16v9H4zM3 7h18v4H3zM12 7v13M12 7c-2-4-6-3-5 0m5 0c2-4 6-3 5 0',
  store: 'M4 10v10h16V10M3 10l2-6h14l2 6M3 10c0 2 4 2 4 0 0 2 5 2 5 0 0 2 5 2 5 0 0 2 4 2 4 0',
  hand: 'M7 11V5a1.5 1.5 0 0 1 3 0v5m0-1V4a1.5 1.5 0 0 1 3 0v6m0-1V5.5a1.5 1.5 0 0 1 3 0V13c0 4-3 7-6 7-3 0-5-2-6-4l-2-4a1.5 1.5 0 0 1 2.5-1.5L7 13',
  chat: 'M4 5h16v11H8l-4 4V5Z',
  search: 'M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Zm5.3-2.2L21 21',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7.5 8.5a7.5 7.5 0 0 1 15 0',
  menu: 'M3 7h18M3 12h18M3 17h18',
  close: 'M5 5l14 14M19 5L5 19',
  down: 'M6 9l6 6 6-6',
  arrow: 'M5 12h14m-5-5 5 5-5 5',
};
export default function Icon({ name, size = 22 }: { name: keyof typeof P | string; size?: number }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={P[name]} /></svg>;
}
