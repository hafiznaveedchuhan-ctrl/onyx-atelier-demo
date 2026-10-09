'use client';
import { useEffect, useRef, useState } from 'react';
type Msg = { role: 'user' | 'assistant'; content: string };
const starters = ['How do I care for onyx glasses?', 'Do you offer wholesale for stores?', 'What makes a good anniversary gift?', 'Do you sell wine?'];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ role: 'assistant', content: 'Hi! I can answer questions about our onyx pieces, care, gifting and wholesale.' }]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function send(text: string) {
    const q = text.trim(); if (!q || busy) return;
    const next: Msg[] = [...msgs, { role: 'user', content: q }];
    setMsgs(next); setInput(''); setBusy(true);
    try {
      const r = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: next.slice(1) }) });
      const d = await r.json();
      setMsgs([...next, { role: 'assistant', content: d.reply ?? 'The assistant could not reply. Try again in a moment.' }]);
    } catch {
      setMsgs([...next, { role: 'assistant', content: 'Connection lost. Check your internet and send the message again.' }]);
    } finally { setBusy(false); }
  }

  useEffect(() => {
    const h = (e: Event) => { setOpen(true); const p = (e as CustomEvent<string>).detail; if (p) send(p); else setTimeout(() => inputRef.current?.focus(), 50); };
    window.addEventListener('onyx-ask', h); return () => window.removeEventListener('onyx-ask', h);
  });
  useEffect(() => { listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' }); }, [msgs, busy]);

  return (
    <div className={`chat ${open ? 'chat-open' : ''}`}>
      {open && (
        <section className="chat-panel" aria-label="Product assistant">
          <header className="chat-head">
            <div><p className="chat-title">Product assistant</p><p className="chat-sub">Answers from our product record</p></div>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close assistant">×</button>
          </header>
          <div className="chat-list" ref={listRef} aria-live="polite">
            {msgs.map((m, i) => <p key={i} className={`bubble bubble-${m.role}`}>{m.content}</p>)}
            {busy && <p className="bubble bubble-assistant typing" aria-label="Assistant is typing"><span /><span /><span /></p>}
            {msgs.length === 1 && (
              <div className="starters">{starters.map((s) => <button key={s} onClick={() => send(s)}>{s}</button>)}</div>
            )}
          </div>
          <form className="chat-form" onSubmit={(e) => { e.preventDefault(); send(input); }}>
            <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about a piece, care or wholesale" aria-label="Your question" maxLength={600} />
            <button type="submit" disabled={busy || !input.trim()}>Send</button>
          </form>
        </section>
      )}
      {!open && <button className="chat-launch" onClick={() => setOpen(true)}>Ask about our onyx</button>}
    </div>
  );
}
