'use client';
import { useState } from 'react';
export default function Newsletter() {
  const [done, setDone] = useState(false);
  if (done) return <p className="news-done">You are on the list. (Demo: nothing was saved.)</p>;
  return (
    <form className="news" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <label htmlFor="news-email">Get first look at new pieces</label>
      <div><input id="news-email" type="email" required placeholder="Email address" /><button type="submit">Sign up</button></div>
    </form>
  );
}
