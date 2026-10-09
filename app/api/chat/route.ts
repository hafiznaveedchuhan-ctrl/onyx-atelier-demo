import { KNOWLEDGE } from '@/lib/knowledge.generated';

export const runtime = 'nodejs';
type Msg = { role: 'user' | 'assistant'; content: string };

const SYSTEM = `You are the product assistant for "Onyx Atelier" (a demo name), a business selling natural onyx drinkware in Albany and Saratoga Springs, New York.
Rules:
- Answer ONLY using the KNOWLEDGE below (the governed KSOR record). Mention the source document title when helpful. Keep answers short (2-4 sentences), warm and plain.
- If the answer is not in KNOWLEDGE, say you will pass the question to the owner and suggest the contact or "For Retailers" page. Do not guess.
- Never invent prices, stock, delivery dates, discounts or sizes. Prices: say the owner will share them.
- The business sells drinkware, not alcohol.
- Never describe pouring or drinking alcohol in detail.
- If asked, explain this is a demo with sample product details.

KNOWLEDGE:
${KNOWLEDGE}`;

const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now(), win = 10 * 60 * 1000;
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < win);
  arr.push(now); hits.set(ip, arr);
  return arr.length > 25;
}

function fallback(q: string): string {
  const s = q.toLowerCase();
  if (/(care|clean|wash|dishwasher)/.test(s)) return 'Hand wash with mild soap and warm water, dry right away, and skip the dishwasher. Natural stone can react to acids, so rinse after citrus drinks. (Demo answer from the sample product record.)';
  if (/(price|cost|how much)/.test(s)) return 'The owner shares current prices directly, including wholesale pricing for stores. I can pass your question along.';
  if (/(wholesale|retail|store|boutique|stock)/.test(s)) return 'Stores and boutiques can request the wholesale line sheet, minimum order and samples on the For Retailers page.';
  if (/(wine|liquor|tequila|beer)/.test(s) && /(sell|buy)/.test(s)) return 'We sell onyx drinkware, not beverages. Our onyx wine glasses and chiller make a great gift for wine lovers.';
  return "That's outside what I know. I'll pass your question to the owner, who can reply directly.";
}

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'local';
  if (limited(ip)) return Response.json({ reply: 'You have reached the demo message limit. Please try again in a few minutes.' }, { status: 429 });

  let messages: Msg[] = [];
  try { messages = ((await req.json()).messages ?? []) as Msg[]; } catch { /* ignore */ }
  messages = messages
    .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-8).map((m) => ({ role: m.role, content: m.content.slice(0, 600) }));
  const last = messages.filter((m) => m.role === 'user').pop()?.content ?? '';
  if (!last) return Response.json({ reply: 'Ask me anything about our onyx glasses, chiller, shot sets or mugs.' });

  const key = process.env.OPENAI_API_KEY;
  if (!key) return Response.json({ reply: fallback(last), mode: 'fallback' });

  try {
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        temperature: 0.3, max_tokens: 350,
        messages: [{ role: 'system', content: SYSTEM }, ...messages],
      }),
    });
    if (!r.ok) return Response.json({ reply: fallback(last), mode: 'fallback' });
    const data = await r.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();
    return Response.json({ reply: reply || fallback(last), mode: 'live' });
  } catch {
    return Response.json({ reply: fallback(last), mode: 'fallback' });
  }
}
