import Link from 'next/link';
import { products } from '@/lib/products';
import { HeroSlab, ProductArt } from '@/components/StoneArt';
import AskButton from '@/components/AskButton';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>Stone that holds the light.</h1>
          <p className="lede">Wine glasses, chillers, shot sets and mugs cut from natural onyx. Every piece carries its own banding, so no two gifts are the same.</p>
          <div className="hero-actions">
            <Link href="#collections" className="btn btn-solid">See the collection</Link>
            <AskButton label="Ask our product assistant" />
          </div>
          <p className="hero-place">Delivered across Albany and Saratoga Springs</p>
        </div>
        <div className="hero-art"><HeroSlab /></div>
      </section>

      <section id="collections" className="collections">
        <h2>The collection</h2>
        <div className="collection-grid">
          {products.map((p, i) => (
            <Link key={p.slug} href={`/collections/${p.slug}`} className={`piece piece-${i}`}>
              <ProductArt slug={p.slug} tone={p.tone} seed={i * 4 + 3} />
              <h3>{p.name}</h3>
              <p>{p.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="why">
        <div className="why-text">
          <h2>Why onyx</h2>
          <p>Onyx forms in slow layers, which is where its bands of honey, green and white come from. Held up to a window, thinner walls glow from inside. It is heavier than glass, cool to the touch, and holds its temperature, which is why a chilled onyx sleeve keeps wine cold at the table.</p>
        </div>
        <ul className="why-facts">
          <li><strong>One of one</strong><span>Natural stone, so every piece is unique.</span></li>
          <li><strong>Holds the cold</strong><span>Chill it once and it keeps drinks cool longer.</span></li>
          <li><strong>Made to keep</strong><span>Hand-finished pieces meant to be displayed, not stored.</span></li>
        </ul>
      </section>

      <section className="split-band">
        <Link href="/gift-guide" className="band band-gift">
          <h2>Gifts that start a conversation</h2>
          <p>A short guide for anniversaries, hosts, and the person who has everything.</p>
          <span className="band-link">Open the gift guide</span>
        </Link>
        <Link href="/retailers" className="band band-retail">
          <h2>Stock onyx in your store</h2>
          <p>Wine and liquor stores and gift boutiques in the Capital Region can request our wholesale line sheet and samples.</p>
          <span className="band-link">Request wholesale details</span>
        </Link>
      </section>
    </>
  );
}
