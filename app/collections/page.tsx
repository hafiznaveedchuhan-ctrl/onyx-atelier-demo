import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { products } from '@/lib/products';
export const metadata: Metadata = { title: 'Shop All | Onyx Atelier (Demo)' };
export default function ShopAll() {
  return (
    <>
      <section className="page-intro"><h1>Shop the collection</h1><p className="lede">Four pieces, each cut from natural onyx and finished by hand. Choose a piece to see photos, details, care and gift ideas.</p></section>
      <div className="shop-rows">
        {products.map((p, i) => (
          <section key={p.slug} className={`shop-row ${i % 2 ? 'is-flipped' : ''}`} data-reveal>
            <Link href={`/collections/${p.slug}`} className="shop-row-media">
              <Image src={p.images[0]} alt={p.name} fill sizes="(max-width: 860px) 100vw, 50vw" />
              <span className="sample-tag">Sample photo</span>
            </Link>
            <div className="shop-row-copy">
              <p className="pdp-tagline">{p.tagline}</p>
              <h2>{p.name}</h2>
              <p>{p.overview[0]}</p>
              <ul className="pdp-perks">{p.highlights.slice(0, 3).map((h) => <li key={h.title}>{h.title}</li>)}</ul>
              <Link href={`/collections/${p.slug}`} className="btn btn-dark">Explore the {p.navLabel.toLowerCase()}</Link>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
