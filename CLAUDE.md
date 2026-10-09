# Constitution — onyx-demo

Demo website for an onyx drinkware client (Albany + Saratoga Springs, NY).
Built by Ibrahim Digital Solutions. Spec-Driven Development: specs/ governs code.

## Must-never rules
- Never commit secrets. OPENAI_API_KEY lives only in Vercel env vars / local .env.local.
- The chat assistant answers ONLY from the governed KSOR record in onyx-ksor/knowledge (public audience). Out of scope -> hand off to the owner.
- Every product fact on the site is labeled sample content until the client confirms it.
- No imagery or copy showing alcohol being poured or consumed (Meta ad-policy alignment).
- Site is noindex (demo only).

## Workflow
- If a task reveals the spec is silent, update specs/000-demo/spec.md first.
- Commit after each completed task. A pre-commit hook (scripts/check-secrets.mjs, install with `npm run hooks`) blocks API keys and tokens.
- onyx-ksor/ is the KSOR (scaffolded with @panaversity/ksor). Edit knowledge there, run its format checker, then rebuild.
