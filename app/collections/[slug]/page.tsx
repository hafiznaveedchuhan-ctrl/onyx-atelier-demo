import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import Gallery from '@/components/Gallery';
import { AddToList } from '@/components/GiftList';
import AskButton from '@/components/AskButton';

export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  return { title: p ? `${p.name} | Onyx Atelier (Demo)` : 'Onyx Atelier', description: p?.short };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const others = products.filter((x) => x.slug !== slug).slice(0, 3);
  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#shop">Shop</Link><span>/</span><span>{p.name}</span></nav>
      <article className="pdp">
        <Gallery images={p.images} name={p.name} badge={p.badge} />
        <div className="pdp-info">
          <p className="pdp-tagline">{p.tagline}</p>
          <h1>{p.name}</h1>
          <p className="price price-lg">Price on request</p>
          <p className="pdp-story">{p.overview[0]}</p>
          <AddToList slug={p.slug} qtySelect />
          <div className="pdp-ask"><AskButton label="Ask about this piece" prompt={`Tell me about the ${p.name}.`} /></div>
          <ul className="pdp-perks">
            <li>Local delivery in Albany and Saratoga Springs</li>
            <li>Gift boxing and engraving on request</li>
            <li>Natural stone, every piece unique</li>
          </ul>
          <details open><summary>Specifications</summary>
            <table className="spec-table"><tbody>{p.specs.map(([k, v]) => <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>)}</tbody></table>
          </details>
          <details><summary>Care</summary><ul>{p.care.map((c) => <li key={c}>{c}</li>)}</ul></details>
          <details><summary>Delivery and gifting</summary><p>{p.gifting} Local delivery across Albany, Saratoga Springs and the Capital Region; the owner confirms timing and cost.</p></details>
        </div>
      </article>

      <section className="pdp-story-band">
        <div className="pdp-story-inner">
          <h2>The story of this piece</h2>
          {p.overview.map((t) => <p key={t}>{t}</p>)}
        </div>
      </section>

      <section className="pdp-highlights">
        {p.highlights.map((h) => <div key={h.title}><h3>{h.title}</h3><p>{h.text}</p></div>)}
      </section>

      <section className="pdp-split">
        <div><h2>How to use it</h2><ol>{p.howTo.map((t) => <li key={t}>{t}</li>)}</ol></div>
        <div><h2>A thoughtful gift</h2><p>{p.gifting}</p><Link href="/gift-guide" className="text-link">See the gift guide</Link></div>
      </section>

      <section className="faq">
        <h2>Questions about this piece</h2>
        {p.faqs.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
        <p className="faq-more">More questions? <AskButton label="Ask our product assistant" prompt={`I have a question about the ${p.name}.`} /></p>
      </section>

      <p className="sample-note center">Sample photos and sample details for a client demo. Final photography, sizes and materials come from the owner.</p>

      <section className="shop related"><div className="section-head"><h2>Pairs well with</h2></div><div className="card-grid card-grid-3">{others.map((o) => <ProductCard key={o.slug} p={o} />)}</div></section>
    </>
  );
}
