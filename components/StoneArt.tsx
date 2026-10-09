import type { ReactElement } from 'react';
import { tones, type Product } from '@/lib/products';

function bands(seed: number, w: number, h: number, count: number) {
  const paths: string[] = [];
  for (let i = 0; i < count; i++) {
    const y0 = (h / count) * i - h * 0.1;
    const amp = 10 + ((seed * (i + 3)) % 23);
    const f = 0.006 + (((seed + i) % 5) * 0.0018);
    let d = `M -20 ${y0}`;
    for (let x = -20; x <= w + 20; x += 20) {
      const y = y0 + Math.sin(x * f + seed + i) * amp + Math.cos(x * f * 0.6 + i) * amp * 0.5;
      d += ` L ${x} ${y.toFixed(1)}`;
    }
    d += ` L ${w + 20} ${h + 40} L -20 ${h + 40} Z`;
    paths.push(d);
  }
  return paths;
}

export function StonePattern({ id, tone, seed = 7, w = 400, h = 400 }:
  { id: string; tone: Product['tone']; seed?: number; w?: number; h?: number }) {
  const c = tones[tone];
  const p = bands(seed, w, h, 9);
  return (
    <pattern id={id} patternUnits="userSpaceOnUse" width={w} height={h}>
      <rect width={w} height={h} fill={c[0]} />
      {p.map((d, i) => (
        <path key={i} d={d} fill={c[(i % 4)]} opacity={0.22 + (i % 3) * 0.12} />
      ))}
      {p.slice(0, 5).map((d, i) => (
        <path key={'v' + i} d={d} fill="none" stroke={c[4]} strokeWidth={1.2} opacity={0.7} />
      ))}
    </pattern>
  );
}

const shapes: Record<string, (fill: string) => ReactElement> = {
  'wine-glasses': (fill) => (<g>
    <path d="M110 70 h70 c0 70 -10 105 -35 115 v70 h30 v12 h-74 v-12 h30 v-70 c-25 -10 -35 -45 -35 -115z" fill={fill} />
    <path d="M220 90 h70 c0 70 -10 105 -35 115 v60 h30 v12 h-74 v-12 h30 v-60 c-25 -10 -35 -45 -35 -115z" fill={fill} />
  </g>),
  'wine-chiller': (fill) => (<g>
    <path d="M185 40 h30 v60 h-30z" fill="#2E3A33" opacity="0.85" />
    <rect x="140" y="95" width="120" height="200" rx="16" fill={fill} />
    <rect x="132" y="290" width="136" height="16" rx="6" fill={fill} />
  </g>),
  'tequila-shot-set': (fill) => (<g>
    <rect x="70" y="245" width="260" height="30" rx="10" fill={fill} />
    {[95, 160, 225, 290].map((x) => <path key={x} d={`M${x - 22} 165 h44 l-6 78 h-32z`} fill={fill} />)}
  </g>),
  'beer-mug': (fill) => (<g>
    <path d="M250 125 c55 0 55 110 0 110" fill="none" stroke={fill} strokeWidth="22" />
    <rect x="120" y="90" width="140" height="200" rx="14" fill={fill} />
  </g>),
};

export function ProductArt({ slug, tone, seed = 5 }: { slug: string; tone: Product['tone']; seed?: number }) {
  const id = `stone-${slug}`;
  return (
    <svg viewBox="0 0 400 340" role="img" aria-label={`Illustration of ${slug.replace(/-/g, ' ')}`} className="product-art">
      <defs>
        <StonePattern id={id} tone={tone} seed={seed} />
        <radialGradient id={`glow-${slug}`} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="170" rx="170" ry="140" fill={`url(#glow-${slug})`} />
      <ellipse cx="200" cy="312" rx="130" ry="10" fill="#1D2621" opacity="0.12" />
      {shapes[slug](`url(#${id})`)}
    </svg>
  );
}

export function HeroSlab() {
  return (
    <svg viewBox="0 0 520 620" className="hero-slab" role="img" aria-label="A slab of honey onyx with light glowing through it">
      <defs>
        <StonePattern id="hero-stone" tone="honey" seed={11} w={520} h={620} />
        <radialGradient id="hero-light" cx="55%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFF6DF" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#FFF6DF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFF6DF" stopOpacity="0" />
        </radialGradient>
        <clipPath id="slab-clip"><path d="M60 30 L470 10 L500 590 L30 610 Z" /></clipPath>
      </defs>
      <g clipPath="url(#slab-clip)">
        <rect width="520" height="620" fill="url(#hero-stone)" />
        <rect width="520" height="620" fill="url(#hero-light)" className="hero-light" />
      </g>
      <path d="M60 30 L470 10 L500 590 L30 610 Z" fill="none" stroke="#9C6E2E" strokeOpacity="0.35" strokeWidth="2" />
    </svg>
  );
}
