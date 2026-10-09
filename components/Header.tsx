'use client';
import Link from 'next/link';
import { BRAND } from '@/lib/products';

const Icon = ({ d }: { d: string }) => (<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d={d} /></svg>);

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <nav className="nav-left" aria-label="Main">
          <Link href="/#shop">Shop</Link>
          <Link href="/gift-guide">Gifts</Link>
          <Link href="/retailers">For Retailers</Link>
          <Link href="/#our-stone">Our Stone</Link>
        </nav>
        <Link href="/" className="logo" aria-label={`${BRAND} home`}>{BRAND}</Link>
        <div className="nav-right">
          <button className="icon-btn" aria-label="Ask our assistant" onClick={() => window.dispatchEvent(new CustomEvent('onyx-ask', { detail: '' }))}>
            <Icon d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Zm5.3-2.2L21 21" />
          </button>
          <Link href="/behind-this-demo" className="icon-btn" aria-label="About this demo"><Icon d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7.5 8.5a7.5 7.5 0 0 1 15 0" /></Link>
        </div>
      </div>
    </header>
  );
}
