# Plan 000 — Client demo website

## Stack (ADR-001)
Next.js (App Router, TypeScript), plain CSS (no UI kit, distinct look), Vercel.
Chat: Route Handler /api/chat -> OpenAI Chat Completions via fetch (no SDK dep).
Knowledge: knowledge/*.md compiled at build into lib/knowledge.generated.ts
(scripts/build-knowledge.mjs) so serverless functions never read the filesystem.

## Design tokens
- Ink stone #1D2621 · Alabaster #EDEFEA · Vein white #FAFAF7 · Honey onyx #C4954A · Sea onyx #5C8A74
- Display: Gloock (serif). Body: Instrument Sans.
- Signature element: hand-drawn SVG onyx slab with translucent bands and a glow,
  standing in for product photography until client photos arrive.
- Left-aligned text, generous whitespace, one orchestrated hero reveal only.

## Chat guardrails
- System prompt: answer only from KNOWLEDGE; otherwise hand off; never invent prices.
- Last 8 messages only; max_tokens 350; temperature 0.3.
- In-memory IP limiter: 25 requests / 10 min (best effort on serverless).

## Deployment
GitHub repo -> Vercel project; env: OPENAI_API_KEY, OPENAI_MODEL=gpt-4o-mini.
