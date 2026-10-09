import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import AskButton from '@/components/AskButton';

const promises = [
  ['One of a kind', 'Natural stone, so no two pieces match'],
  ['Local delivery', 'Albany, Saratoga Springs and the Capital Region'],
  ['Gift-ready', 'Boxed and wrapped on request'],
  ['For retailers', 'Wholesale for stores and boutiques'],
];
const faqs = [
  ['How do I care for onyx?', 'Hand wash with mild soap and warm water and dry right away. Skip the dishwasher, and rinse after citrus or other acidic drinks.'],
  ['Do you deliver locally?', 'Yes, across Albany, Saratoga Springs and the Capital Region. The owner confirms timing and cost with your order.'],
  ['Can I order engraving or bulk gifts?', 'Ask the product assistant or contact the owner, who shares options and lead times.'],
  ['I own a store. Can I stock your pieces?', 'Yes. Request the wholesale line sheet and samples on the For Retailers page.'],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="hero-kicker">The holiday edit</p>
          <h1>Natural onyx, made to be given.</h1>
          <p className="hero-text">Wine glasses, chillers, shot sets and mugs, each cut from stone with its own banding. No two are ever the same.</p>
          <div className="hero-actions">
            <Link href="#shop" className="btn btn-dark">Shop the collection</Link>
            <Link href="/gift-guide" className="btn btn-outline">Find a gift</Link>
          </div>
        </div>
        <div className="hero-media">
          <Image src="/images/products/wine-glasses-1.jpg" alt="Wine glasses in warm window light" fill priority sizes="(max-width: 860px) 100vw, 50vw" />
          <span className="hero-caption">Sample photo</span>
        </div>
      </section>

      <ul className="promises">{promises.map(([t, d]) => <li key={t}><strong>{t}</strong><span>{d}</span></li>)}</ul>

      <section id="shop" className="shop">
        <div className="section-head"><h2>Shop by piece</h2><p>Every piece is hand-finished. Photos are samples until the store’s own photography is ready.</p></div>
        <div className="card-grid">{products.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
      </section>

      <section id="our-stone" className="editorial">
        <div className="editorial-media"><Image src="/images/products/tequila-shot-set-3.jpg" alt="A set of shot glasses with gold rims on a dark stone counter" fill sizes="(max-width: 860px) 100vw, 50vw" /></div>
        <div className="editorial-copy">
          <h2>Why onyx</h2>
          <p>Onyx forms in slow layers, which is where its bands of honey, cream and green come from. Hold a thin wall up to a window and it glows from inside.</p>
          <p>It is heavier than glass and cool to the touch, and it holds its temperature. That is why a chilled onyx sleeve keeps a bottle cold right at the table.</p>
          <AskButton label="Ask our assistant about the stone" prompt="What makes onyx special?" />
        </div>
      </section>

      <section className="holiday">
        <Image src="/images/products/tequila-shot-set-4.jpg" alt="Engraved shot glasses on black marble" fill sizes="100vw" />
        <div className="holiday-copy">
          <h2>The gift that is never the same twice</h2>
          <p>From anniversaries to the host who has everything, our gift guide matches each piece to the occasion.</p>
          <Link href="/gift-guide" className="btn btn-light">Open the gift guide</Link>
        </div>
      </section>

      <section className="local">
        <div className="local-copy">
          <h2>Serving the Capital Region</h2>
          <p>We deliver across Albany and Saratoga Springs, and we partner with local wine shops and gift boutiques so you can see the stone in person.</p>
          <Link href="/retailers" className="text-link">Own a store? Stock our pieces</Link>
        </div>
        <div className="local-media"><Image src="/images/products/wine-chiller-3.jpg" alt="A modern kitchen with a built-in wine cooler" fill sizes="(max-width: 860px) 100vw, 50vw" /></div>
      </section>

      <section className="retail-band">
        <div>
          <h2>Wholesale for stores and boutiques</h2>
          <p>Request our line sheet, minimum order, and samples delivered to your store.</p>
        </div>
        <Link href="/retailers" className="btn btn-light">Request wholesale details</Link>
      </section>

      <section id="faq" className="faq">
        <h2>Questions, answered</h2>
        {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        <p className="faq-more">Still curious? <AskButton label="Ask our product assistant" /></p>
      </section>
    </>
  );
}
