import Link from 'next/link';
import type { Product } from '@/lib/products';
import ProductRender from './ProductRender';
import { AddToList } from './GiftList';
export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="card">
      <Link href={`/collections/${p.slug}`} className="card-media">
        <span className="badge">{p.badge}</span>
        <ProductRender product={p} />
      </Link>
      <div className="card-body">
        <h3><Link href={`/collections/${p.slug}`}>{p.name}</Link></h3>
        <p className="card-short">{p.short}</p>
        <p className="price">Price on request</p>
        <AddToList slug={p.slug} />
      </div>
    </article>
  );
}
