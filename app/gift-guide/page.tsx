import Link from 'next/link';
import { products } from '@/lib/products';
import { ProductArt } from '@/components/StoneArt';

const picks = [
  { who: 'For an anniversary', slug: 'wine-glasses', why: 'A matched pair that is still one of a kind.' },
  { who: 'For the dinner-party host', slug: 'wine-chiller', why: 'Keeps the bottle cold without an ice bucket on the table.' },
  { who: 'For a birthday or celebration', slug: 'tequila-shot-set', why: 'Looks like a sculpture on the bar cart between uses.' },
  { who: "For Father's Day", slug: 'beer-mug', why: 'Heavy, cool to hold, and built to last.' },
];

export default function GiftGuide() {
  return (
    <section className="page">
      <h1>Gift guide</h1>
      <p className="lede">Four pieces, four occasions. Ask the owner about gift boxes and engraving.</p>
      <div className="gift-list">
        {picks.map((g, i) => {
          const p = products.find((x) => x.slug === g.slug)!;
          return (
            <Link key={g.slug} href={`/collections/${p.slug}`} className="gift">
              <ProductArt slug={p.slug} tone={p.tone} seed={i * 5 + 2} />
              <div>
                <h2>{g.who}</h2>
                <p className="gift-name">{p.name}</p>
                <p>{g.why}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
