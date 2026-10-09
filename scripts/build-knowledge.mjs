// Compiles the governed KSOR record (onyx-ksor/knowledge) into the chat assistant's context.
// Only `audience: [public]` documents are included; internal rules never reach customers.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
const root = join(process.cwd(), 'onyx-ksor', 'knowledge');
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const docs = [];
for (const file of walk(root).filter((f) => f.endsWith('.md') && !f.endsWith('index.md') && !f.endsWith('.summary.md')).sort()) {
  const raw = readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) continue;
  const fm = m[1];
  if (!/status:\s*stable/.test(fm)) continue;
  if (!/audience:\s*\[public\]/.test(fm)) continue;
  const title = (fm.match(/^title:\s*(.+)$/m) || [])[1] || relative(root, file);
  docs.push(`### ${title} (source: ${relative(root, file)})\n${m[2].trim()}`);
}
writeFileSync(join(process.cwd(), 'lib', 'knowledge.generated.ts'),
  `// Generated from onyx-ksor/knowledge by scripts/build-knowledge.mjs. Do not edit.\nexport const KNOWLEDGE = ${JSON.stringify(docs.join('\n\n'))};\nexport const KNOWLEDGE_DOCS = ${docs.length};\n`);
console.log(`knowledge: ${docs.length} public KSOR documents compiled`);
