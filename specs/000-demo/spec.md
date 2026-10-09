# Spec 000 — Client demo website

## Problem
An onyx drinkware seller wants a website, local ads, and B2B + B2C reach in the
Capital Region of New York. Before ordering, the client wants a free demo.

## Goal (one sentence)
Show the client, in under 10 minutes, what their future website and AI product
assistant will feel like, using their own product categories.

## Audience
1. The client (decision-maker) watching the demo.
2. Their future customers: women 30+ buying gifts; boutique and liquor-store buyers.

## In scope
- Home: hero, four collections, why onyx, gift guide teaser, retailer call to action.
- Collection pages: wine glasses, wine chiller, tequila shot set, beer mug.
- Gift guide page.
- "For Retailers" page with a wholesale inquiry form (demo: no data stored).
- "Behind this demo" page: what the client gets (setup, AI team, approvals).
- AI product assistant (chat) on every page:
  - Answers only from onyx-ksor/knowledge (governed KSOR, public audience).
  - Out-of-scope questions -> polite hand-off to the owner.
  - Model from OPENAI_MODEL env, default gpt-4o-mini (client request).
  - Cost guards: short history, max tokens, per-IP rate limit.
  - If no API key: scripted fallback so the demo never breaks.
- Persistent demo notice; noindex.

## Out of scope
- Real checkout, real data storage, real client photos (added after client sends them).

## Acceptance criteria
- `npm run build` passes; Lighthouse-friendly, responsive to 360px.
- Chat answers "How do I care for onyx glasses?" from knowledge.
- Chat hands off "Do you sell wine?" and "What's the weather?" to the owner.
- No secret in the repo (`git grep sk-` empty).
- Deployed on Vercel with OPENAI_API_KEY set as an env var.

## Clarifications (resolved)
- Prices: not shown in demo ("Ask for pricing") until client confirms.
- Brand name: unknown -> placeholder "Your Brand" style name "Onyx Atelier (demo name)".
