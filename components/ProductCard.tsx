import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/products';
export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="card">
      <Link href={`/collections/${p.slug}`} className="card-media">
        <span className="badge">{p.badge}</span>
        <Image src={p.images[0]} alt={p.name} fill sizes="(max-width: 520px) 100vw, (max-width: 1000px) 50vw, 25vw" className="img-main" />
        {p.images[1] && <Image src={p.images[1]} alt="" fill sizes="25vw" className="img-alt" aria-hidden="true" />}
      </Link>
      <div className="card-body">
        <h3><Link href={`/collections/${p.slug}`}>{p.name}</Link></h3>
        <p className="card-short">{p.short}</p>
        <p className="price">Price on request</p>
        <Link href={`/collections/${p.slug}`} className="btn btn-dark">View details</Link>
      </div>
    </article>
  );
}
