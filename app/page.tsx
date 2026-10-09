import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import AskButton from '@/components/AskButton';
import Icon from '@/components/Icons';

const promises = [
  ['gem', 'One of a kind', 'Natural stone, no two alike'],
  ['truck', 'Local delivery', 'Albany and Saratoga Springs'],
  ['gift', 'Gift-ready', 'Boxed and wrapped on request'],
  ['store', 'For retailers', 'Wholesale for stores'],
];
const local = [
  ['truck', 'Delivered locally', 'Across Albany, Saratoga Springs and the Capital Region. The owner confirms timing with you.'],
  ['store', 'In local shops', 'We partner with wine shops and gift boutiques so you can see the stone in person.'],
  ['gift', 'Wrapped to give', 'Gift boxing and engraving on request, for one gift or a hundred.'],
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
        <Image src="/images/products/wine-glasses-1.jpg" alt="Elegant glasses in warm window light" fill priority sizes="100vw" className="hero-bg" />
        <div className="hero-copy">
          <p className="hero-kicker">The holiday edit</p>
          <h1>Natural onyx, made to be given.</h1>
          <p className="hero-text">Wine glasses, chillers, shot sets and mugs, each cut from stone with its own banding. No two are ever the same.</p>
          <div className="hero-actions">
            <Link href="/collections" className="btn btn-light">Shop the collection</Link>
            <Link href="/gift-guide" className="btn btn-ghost">Find a gift</Link>
          </div>
          <ul className="hero-points"><li>Hand-finished</li><li>Local delivery</li><li>Gift-ready</li></ul>
        </div>
        <span className="hero-caption">Sample photo</span>
      </section>

      <ul className="promises" data-reveal>{promises.map(([i, t, d]) => <li key={t}><span className="promise-icon"><Icon name={i} size={26} /></span><span><strong>{t}</strong><span>{d}</span></span></li>)}</ul>

      <section id="shop" className="shop" data-reveal>
        <div className="section-head"><div><p className="eyebrow">The collection</p><h2>Shop by piece</h2></div><Link href="/collections" className="text-link">View all pieces</Link></div>
        <div className="card-grid">{products.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
      </section>

      <section id="our-stone" className="statement" data-reveal>
        <p className="eyebrow">Our stone</p>
        <blockquote>Onyx forms in slow layers over thousands of years. Hold a thin wall to the light and it glows from within.</blockquote>
        <div className="stats">
          <div><strong>1 of 1</strong><span>No two pieces share a pattern</span></div>
          <div><strong>By hand</strong><span>Every piece is polished by hand</span></div>
          <div><strong>Holds the cold</strong><span>Stone keeps its temperature</span></div>
        </div>
        <AskButton label="Ask our assistant about the stone" prompt="What makes onyx special?" />
      </section>

      <section className="holiday" data-reveal>
        <Image src="/images/products/tequila-shot-set-4.jpg" alt="Engraved glasses on black marble" fill sizes="100vw" />
        <div className="holiday-copy">
          <p className="eyebrow light">Gift guide</p>
          <h2>The gift that is never the same twice</h2>
          <p>From anniversaries to the host who has everything, each piece matched to the occasion.</p>
          <Link href="/gift-guide" className="btn btn-light">Open the gift guide</Link>
        </div>
      </section>

      <section className="local" data-reveal>
        <div className="section-head center-head"><div><p className="eyebrow">Close to home</p><h2>Serving the Capital Region</h2></div></div>
        <div className="local-grid">{local.map(([i, t, d]) => <div key={t} className="local-card"><span className="promise-icon"><Icon name={i} size={28} /></span><h3>{t}</h3><p>{d}</p></div>)}</div>
      </section>

      <section className="retail-band" data-reveal>
        <div><p className="eyebrow light">Wholesale</p><h2>Stock onyx in your store</h2><p>Request our line sheet, minimum order, and samples delivered to your shop.</p></div>
        <Link href="/retailers" className="btn btn-light">Request wholesale details</Link>
      </section>

      <section id="faq" className="faq" data-reveal>
        <p className="eyebrow center">Help</p>
        <h2>Questions, answered</h2>
        {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        <p className="faq-more">Still curious? <AskButton label="Ask our product assistant" /></p>
      </section>
    </>
  );
}
