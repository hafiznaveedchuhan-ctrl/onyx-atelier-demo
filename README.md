# Onyx Atelier — client demo (Ibrahim Digital Solutions)

Demo website + AI product assistant for an onyx drinkware client (Albany / Saratoga Springs, NY).
Built with Spec-Driven Development: see CLAUDE.md and specs/000-demo/.

## Run locally
    npm install
    cp .env.example .env.local   # add OPENAI_API_KEY
    npm run dev

## Deploy (Vercel)
Set env vars in Vercel > Project > Settings > Environment Variables:
- OPENAI_API_KEY (required for live AI answers; without it the chat uses scripted demo answers)
- OPENAI_MODEL = gpt-4o-mini (default)

## Knowledge
onyx-ksor/ is the Knowledge System of Record (scaffolded with npx @panaversity/ksor init). Its public documents are compiled into the chat assistant at build time. The served MCP rung (Neon + embeddings) needs KSOR_DB_URL and a provider key; see onyx-ksor/README.md.
