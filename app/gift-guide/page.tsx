import Image from 'next/image';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
const picks = [['For an anniversary', 'wine-glasses'], ['For the dinner-party host', 'wine-chiller'], ['For a birthday', 'tequila-shot-set'], ["For Father's Day", 'beer-mug']];
export default function GiftGuide() {
  return (
    <>
      <section className="page-hero">
        <Image src="/images/products/wine-glasses-2.jpg" alt="Wine glasses with grapes on a wooden table" fill priority sizes="100vw" />
        <div className="page-hero-copy"><h1>The gift guide</h1><p>Four pieces, four occasions. Gift boxing and engraving on request.</p></div>
      </section>
      <section className="shop">
        <div className="card-grid">{picks.map(([who, slug]) => { const p = products.find((x) => x.slug === slug)!; return (
          <div key={slug} className="gift-pick" data-reveal><h2>{who}</h2><ProductCard p={p} /></div>); })}</div>
      </section>
    </>
  );
}
