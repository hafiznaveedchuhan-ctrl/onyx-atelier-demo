'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { products } from '@/lib/products';
import ProductRender from './ProductRender';

type Item = { slug: string; qty: number };
type Ctx = { items: Item[]; add: (slug: string, qty?: number) => void; remove: (slug: string) => void; open: boolean; setOpen: (o: boolean) => void; count: number };
const C = createContext<Ctx | null>(null);
export const useGiftList = () => useContext(C)!;

export function GiftListProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  useEffect(() => { try { const s = localStorage.getItem('onyx-list'); if (s) setItems(JSON.parse(s)); } catch {} }, []);
  useEffect(() => { try { localStorage.setItem('onyx-list', JSON.stringify(items)); } catch {} }, [items]);
  const add = (slug: string, qty = 1) => { setSent(false); setItems((xs) => xs.some((x) => x.slug === slug) ? xs.map((x) => x.slug === slug ? { ...x, qty: x.qty + qty } : x) : [...xs, { slug, qty }]); setOpen(true); };
  const remove = (slug: string) => setItems((xs) => xs.filter((x) => x.slug !== slug));
  const count = items.reduce((n, x) => n + x.qty, 0);
  return (
    <C.Provider value={{ items, add, remove, open, setOpen, count }}>
      {children}
      <div className={`drawer-scrim ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`drawer ${open ? 'is-open' : ''}`} aria-label="Gift list" aria-hidden={!open}>
        <header className="drawer-head"><h2>Your gift list</h2><button onClick={() => setOpen(false)} aria-label="Close gift list">×</button></header>
        {sent ? (
          <div className="drawer-empty"><h3>Pricing request sent</h3><p>In the live store, the owner replies with prices and delivery options. This demo does not store any data.</p></div>
        ) : items.length === 0 ? (
          <div className="drawer-empty"><p>Your gift list is empty.</p><Link href="/#shop" className="btn btn-dark" onClick={() => setOpen(false)}>Browse the collection</Link></div>
        ) : (<>
          <ul className="drawer-items">
            {items.map((it) => { const p = products.find((x) => x.slug === it.slug)!; return (
              <li key={it.slug}><div className="drawer-thumb"><ProductRender product={p} /></div>
                <div><p className="drawer-name">{p.name}</p><p className="drawer-meta">Qty {it.qty} · Price on request</p>
                  <button className="link-btn" onClick={() => remove(it.slug)}>Remove</button></div></li>); })}
          </ul>
          <div className="drawer-foot">
            <p>Prices and local delivery are confirmed by the owner.</p>
            <button className="btn btn-dark btn-block" onClick={() => { setSent(true); setItems([]); }}>Request pricing</button>
          </div>
        </>)}
      </aside>
    </C.Provider>
  );
}

export function AddToList({ slug, qtySelect }: { slug: string; qtySelect?: boolean }) {
  const { add } = useGiftList();
  const [qty, setQty] = useState(1);
  return (
    <div className="add-row">
      {qtySelect && (
        <div className="qty" aria-label="Quantity">
          <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity">−</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)} aria-label="Increase quantity">+</button>
        </div>
      )}
      <button className="btn btn-dark btn-grow" onClick={() => add(slug, qty)}>Add to gift list</button>
    </div>
  );
}
