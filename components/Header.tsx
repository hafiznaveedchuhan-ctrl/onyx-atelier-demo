import Link from 'next/link';
import { BRAND } from '@/lib/products';
export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark">{BRAND}</Link>
      <nav aria-label="Main">
        <Link href="/#collections">Collections</Link>
        <Link href="/gift-guide">Gift guide</Link>
        <Link href="/retailers">For retailers</Link>
        <Link href="/behind-this-demo" className="nav-quiet">Behind this demo</Link>
      </nav>
    </header>
  );
}
