// Blocks a commit if a likely secret appears in staged files.
import { execSync } from 'node:child_process';
const files = execSync('git diff --cached --name-only --diff-filter=ACM', { encoding: 'utf8' }).split('\n').filter(Boolean);
const patterns = [/sk-proj-[A-Za-z0-9_-]{20,}/, /sk-[A-Za-z0-9]{32,}/, /ghp_[A-Za-z0-9]{30,}/, /github_pat_[A-Za-z0-9_]{30,}/, /postgres(ql)?:\/\/[^\s'"]+:[^\s'"]+@/];
let bad = [];
for (const f of files) {
  let txt = ''; try { txt = execSync(`git show :"${f}"`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }); } catch { continue; }
  if (patterns.some((p) => p.test(txt))) bad.push(f);
}
if (bad.length) { console.error('Commit blocked: possible secret in ' + bad.join(', ') + '. Move it to .env.local or Vercel env vars.'); process.exit(1); }
