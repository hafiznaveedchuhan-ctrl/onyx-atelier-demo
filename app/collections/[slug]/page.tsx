import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/lib/products';
import { ProductArt } from '@/components/StoneArt';
import AskButton from '@/components/AskButton';

export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = products.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = products[i];
  return (
    <article className="product">
      <div className="product-art-wrap"><ProductArt slug={p.slug} tone={p.tone} seed={i * 4 + 3} /></div>
      <div className="product-copy">
        <Link href="/#collections" className="back">All pieces</Link>
        <h1>{p.name}</h1>
        <p className="lede">{p.story}</p>
        <ul className="detail-list">{p.details.map((d) => <li key={d}>{d}</li>)}</ul>
        <p className="gift-line">A good gift for: {p.gift}</p>
        <div className="hero-actions">
          <AskButton label="Ask about pricing" prompt={`What is the price of the ${p.name.toLowerCase()}?`} solid />
          <AskButton label="How do I care for it?" prompt={`How do I care for the ${p.name.toLowerCase()}?`} />
        </div>
        <p className="sample-note">Sample details. Final sizes and materials are confirmed with the owner before launch.</p>
      </div>
    </article>
  );
}
