import Link from 'next/link';
import { BRAND } from '@/lib/products';
export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="wordmark">{BRAND}</p>
        <p>Natural onyx drinkware for the Capital Region of New York.</p>
        <p>Albany and Saratoga Springs</p>
      </div>
      <div className="footer-links">
        <Link href="/gift-guide">Gift guide</Link>
        <Link href="/retailers">Wholesale for stores and boutiques</Link>
        <Link href="/behind-this-demo">What this demo includes</Link>
      </div>
      <p className="footer-note">Demo name and sample content. Built by Ibrahim Digital Solutions.</p>
    </footer>
  );
}
