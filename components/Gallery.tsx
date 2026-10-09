'use client';
import Image from 'next/image';
import { useState } from 'react';
export default function Gallery({ images, name, badge }: { images: string[]; name: string; badge: string }) {
  const [i, setI] = useState(0);
  return (
    <div className="gallery">
      <div className="gallery-main">
        <span className="badge">{badge}</span>
        <Image key={images[i]} src={images[i]} alt={`${name}, photo ${i + 1}`} fill priority sizes="(max-width: 860px) 100vw, 55vw" />
        <span className="sample-tag">Sample photo</span>
      </div>
      <div className="gallery-thumbs" role="tablist" aria-label="Product photos">
        {images.map((src, n) => (
          <button key={src} role="tab" aria-selected={n === i} aria-label={`Show photo ${n + 1}`} className={n === i ? 'is-active' : ''} onClick={() => setI(n)}>
            <Image src={src} alt="" fill sizes="120px" />
          </button>
        ))}
      </div>
    </div>
  );
}
