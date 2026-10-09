import type { ReactElement } from 'react';
import type { Product } from '@/lib/products';

const tex: Record<Product['tone'], { href: string; filter?: string }> = {
  honey: { href: '/images/onyx-honey.jpg' },
  sea: { href: '/images/onyx-honey.jpg', filter: 'sea' },
  snow: { href: '/images/onyx-pale.jpg' },
  smoke: { href: '/images/onyx-pale.jpg', filter: 'smoke' },
};

const shapes: Record<string, ReactElement> = {
  'wine-glasses': (<>
    <path d="M118 62 h72 c2 74 -10 112 -36 122 v74 h32 v10 h-80 v-10 h32 v-74 c-26 -10 -22 -48 -20 -122z" />
    <path d="M226 82 h72 c2 74 -10 112 -36 122 v62 h32 v10 h-80 v-10 h32 v-62 c-26 -10 -22 -48 -20 -122z" />
  </>),
  'wine-chiller': (<>
    <rect x="140" y="92" width="120" height="196" rx="18" />
    <rect x="130" y="284" width="140" height="14" rx="6" />
  </>),
  'tequila-shot-set': (<>
    <rect x="66" y="242" width="268" height="30" rx="12" />
    {[96, 162, 228, 294].map((x) => <path key={x} d={`M${x - 23} 160 h46 l-6 80 h-34z`} />)}
  </>),
  'beer-mug': (<>
    <path d="M258 120 c62 0 62 120 0 120 v-24 c30 0 30 -72 0 -72z" />
    <rect x="118" y="84" width="146" height="206" rx="16" />
  </>),
};

export default function ProductRender({ product, variant = 0 }: { product: Product; variant?: number }) {
  const t = tex[product.tone];
  const id = `${product.slug}-${variant}`;
  return (
    <svg viewBox="0 0 400 340" className="render" role="img" aria-label={`${product.name} (illustration)`}>
      <defs>
        <filter id={`sea-${id}`}><feColorMatrix type="matrix" values="0.45 0.35 0 0 0  0.30 0.75 0.10 0 0.05  0.25 0.40 0.30 0 0.02  0 0 0 1 0" /></filter>
        <filter id={`smoke-${id}`}><feColorMatrix type="matrix" values="0.55 0.2 0.1 0 0  0.5 0.25 0.1 0 0  0.45 0.25 0.15 0 0  0 0 0 1 0" /></filter>
        <clipPath id={`clip-${id}`}>{shapes[product.slug]}</clipPath>
        <linearGradient id={`shade-${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".38" />
          <stop offset=".35" stopColor="#fff" stopOpacity=".05" />
          <stop offset=".75" stopColor="#000" stopOpacity=".05" />
          <stop offset="1" stopColor="#000" stopOpacity=".32" />
        </linearGradient>
        <radialGradient id={`floor-${id}`}><stop offset="0" stopColor="#000" stopOpacity=".22" /><stop offset="1" stopColor="#000" stopOpacity="0" /></radialGradient>
      </defs>
      <ellipse cx="200" cy="300" rx="150" ry="14" fill={`url(#floor-${id})`} />
      <g clipPath={`url(#clip-${id})`}>
        <image href={t.href} x={variant ? -160 : -40} y={variant ? -260 : -120} width="560" height="735" preserveAspectRatio="xMidYMid slice"
          filter={t.filter ? `url(#${t.filter}-${id})` : undefined} />
        <rect width="400" height="340" fill={`url(#shade-${id})`} />
      </g>
    </svg>
  );
}
