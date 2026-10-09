import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/products';
import Icon from './Icons';
export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/collections/${p.slug}`} className="card">
      <span className="card-media">
        <span className="badge">{p.badge}</span>
        <Image src={p.images[0]} alt={p.name} fill sizes="(max-width: 520px) 100vw, (max-width: 1000px) 50vw, 25vw" className="img-main" />
        {p.images[1] && <Image src={p.images[1]} alt="" fill sizes="25vw" className="img-alt" aria-hidden="true" />}
        <span className="card-cta">View details <Icon name="arrow" size={16} /></span>
      </span>
      <span className="card-body">
        <span className="card-title">{p.name}</span>
        <span className="card-short">{p.short}</span>
        <span className="card-price">Ask for pricing</span>
      </span>
    </Link>
  );
}
