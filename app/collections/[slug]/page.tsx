import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/products';
import ProductRender from '@/components/ProductRender';
import ProductCard from '@/components/ProductCard';
import { AddToList } from '@/components/GiftList';
import AskButton from '@/components/AskButton';

export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const others = products.filter((x) => x.slug !== slug).slice(0, 3);
  const stone = p.tone === 'snow' || p.tone === 'smoke' ? '/images/onyx-pale.jpg' : '/images/onyx-honey.jpg';
  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#shop">Shop</Link><span>/</span><span>{p.name}</span></nav>
      <article className="pdp">
        <div className="pdp-gallery">
          <div className="pdp-main"><span className="badge">{p.badge}</span><ProductRender product={p} /></div>
          <div className="pdp-thumbs">
            <div className="pdp-thumb"><ProductRender product={p} variant={1} /></div>
            <div className="pdp-thumb pdp-stone"><Image src={stone} alt="Close-up of the onyx stone" fill sizes="200px" /></div>
          </div>
        </div>
        <div className="pdp-info">
          <h1>{p.name}</h1>
          <p className="price price-lg">Price on request</p>
          <p className="pdp-story">{p.story}</p>
          <AddToList slug={p.slug} qtySelect />
          <div className="pdp-ask">
            <AskButton label="Ask about this piece" prompt={`Tell me about the ${p.name}.`} />
          </div>
          <details open><summary>Details</summary><ul>{p.details.map((d) => <li key={d}>{d}</li>)}</ul></details>
          <details><summary>Care</summary><p>Hand wash with mild soap and warm water and dry right away. No dishwasher. Rinse after citrus or acidic drinks.</p></details>
          <details><summary>Delivery and gifting</summary><p>Local delivery across Albany and Saratoga Springs. Gift boxing and engraving on request. A good gift for {p.gift.toLowerCase()}.</p></details>
          <p className="sample-note">Sample details. Final sizes and materials are confirmed before launch. Image is an illustration.</p>
        </div>
      </article>
      <section className="shop related"><div className="section-head"><h2>Pairs well with</h2></div><div className="card-grid card-grid-3">{others.map((o) => <ProductCard key={o.slug} p={o} />)}</div></section>
    </>
  );
}
