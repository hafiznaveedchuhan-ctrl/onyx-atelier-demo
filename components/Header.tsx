'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { BRAND, products } from '@/lib/products';
import Icon from './Icons';

export default function Header() {
  const [shop, setShop] = useState(false);
  const [menu, setMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const path = usePathname();
  useEffect(() => { setShop(false); setMenu(false); }, [path]);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setShop(false); };
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') { setShop(false); setMenu(false); } };
    document.addEventListener('mousedown', h); document.addEventListener('keydown', k);
    return () => { document.removeEventListener('mousedown', h); document.removeEventListener('keydown', k); };
  }, []);
  const ask = () => window.dispatchEvent(new CustomEvent('onyx-ask', { detail: '' }));
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="nav-left">
          <button className="icon-btn menu-btn" aria-label="Open menu" aria-expanded={menu} onClick={() => setMenu(true)}><Icon name="menu" /></button>
          <div className="shop-menu" ref={ref}>
            <button className="nav-link" aria-expanded={shop} aria-haspopup="true" onClick={() => setShop(!shop)}>Shop <Icon name="down" size={16} /></button>
            <div className={`mega ${shop ? 'is-open' : ''}`}>
              <div className="mega-inner">
                {products.map((p) => (
                  <Link key={p.slug} href={`/collections/${p.slug}`} className="mega-item">
                    <span className="mega-img"><Image src={p.images[0]} alt="" fill sizes="200px" /></span>
                    <span className="mega-name">{p.navLabel}</span>
                  </Link>
                ))}
                <Link href="/collections" className="mega-all">Shop all pieces <Icon name="arrow" size={18} /></Link>
              </div>
            </div>
          </div>
          <Link href="/gift-guide" className="nav-link hide-sm">Gifts</Link>
        </div>
        <Link href="/" className="logo" aria-label={`${BRAND} home`}>{BRAND}</Link>
        <div className="nav-right">
          <Link href="/#our-stone" className="nav-link hide-sm">Our Stone</Link>
          <Link href="/retailers" className="nav-link hide-sm">For Retailers</Link>
          <button className="icon-btn" aria-label="Ask our product assistant" onClick={ask}><Icon name="search" size={21} /></button>
        </div>
      </div>
      <div className={`mobile-menu ${menu ? 'is-open' : ''}`} aria-hidden={!menu}>
        <div className="mobile-head"><span className="logo">{BRAND}</span><button className="icon-btn" aria-label="Close menu" onClick={() => setMenu(false)}><Icon name="close" /></button></div>
        <nav aria-label="Mobile">
          <Link href="/collections">Shop all</Link>
          {products.map((p) => <Link key={p.slug} href={`/collections/${p.slug}`}>{p.navLabel}</Link>)}
          <Link href="/gift-guide">Gift guide</Link>
          <Link href="/#our-stone">Our stone</Link>
          <Link href="/retailers">For retailers</Link>
        </nav>
      </div>
    </header>
  );
}
