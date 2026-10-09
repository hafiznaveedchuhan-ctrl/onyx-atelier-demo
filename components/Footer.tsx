import Link from 'next/link';
import { BRAND } from '@/lib/products';
import Newsletter from './Newsletter';
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <p className="logo logo-light">{BRAND}</p>
          <p>Natural onyx drinkware for the Capital Region of New York.</p>
          <Newsletter />
        </div>
        <div><h3>Shop</h3><Link href="/collections/wine-glasses">Wine glasses</Link><Link href="/collections/wine-chiller">Wine chiller</Link><Link href="/collections/tequila-shot-set">Shot glass set</Link><Link href="/collections/beer-mug">Beer mug</Link></div>
        <div><h3>Help</h3><Link href="/#faq">Care and FAQ</Link><Link href="/gift-guide">Gift guide</Link><Link href="/retailers">Wholesale</Link></div>
        <div><h3>About</h3><Link href="/behind-this-demo">About this demo</Link><Link href="/credits">Image credits</Link></div>
      </div>
      <p className="footer-note">Demo store with a sample brand name and sample product details. Built by Ibrahim Digital Solutions.</p>
    </footer>
  );
}
