import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const OWNER = 'LILSUFFER';
const REPO = 'mojo-poker-club';
const SRC = path.resolve(__dirname, 'dist/public');
const BASE_PATH = '/mojo-poker-club/';

// =====================
// GITHUB PAGES DEPLOY
// =====================
async function deployToGitHubPages(allFiles) {
  console.log('\n🐙 Deploying to GitHub Pages...');

  const { ReplitConnectors } = await import('@replit/connectors-sdk');
  const connectors = new ReplitConnectors();

  async function createBlob(fp) {
    const buf = fs.readFileSync(fp);
    const resp = await connectors.proxy('github', `/repos/${OWNER}/${REPO}/git/blobs`, {
      method: 'POST',
      body: JSON.stringify({ content: buf.toString('base64'), encoding: 'base64' }),
      headers: { 'Content-Type': 'application/json' }
    });
    const text = await resp.text();
    const d = JSON.parse(text);
    if (!d.sha) throw new Error('No SHA for ' + path.basename(fp));
    return d.sha;
  }

  // Create blobs in batches (skip CNAME file)
  const filteredFiles = allFiles.filter(f => f.rel !== 'CNAME');
  const treeItems = [];
  let done = 0, errors = 0;
  for (let i = 0; i < filteredFiles.length; i += 3) {
    const batch = filteredFiles.slice(i, i + 3);
    try {
      const results = await Promise.all(batch.map(async ({ fp, rel }) => {
        const sha = await createBlob(fp);
        return { path: rel, mode: '100644', type: 'blob', sha };
      }));
      treeItems.push(...results);
    } catch (e) { errors++; }
    done += batch.length;
    if (done % 90 === 0) process.stdout.write(`   ${done}/${filteredFiles.length} blobs...\n`);
  }

  // Always add .nojekyll to disable Jekyll processing
  const nojekyllResp = await connectors.proxy('github', `/repos/${OWNER}/${REPO}/git/blobs`, {
    method: 'POST',
    body: JSON.stringify({ content: '', encoding: 'utf-8' }),
    headers: { 'Content-Type': 'application/json' }
  });
  const nojekyll = await nojekyllResp.json();
  treeItems.push({ path: '.nojekyll', mode: '100644', type: 'blob', sha: nojekyll.sha });

  console.log(`   Blobs: ${treeItems.length} (${errors} errors)`);

  async function ghPost(endpoint, body) {
    const resp = await connectors.proxy('github', endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });
    return resp.json();
  }

  // Create tree
  const tree = await ghPost(`/repos/${OWNER}/${REPO}/git/trees`, { tree: treeItems });
  console.log('   Tree:', tree.sha?.slice(0, 7));

  // Create commit (orphan — no parents)
  const commit = await ghPost(`/repos/${OWNER}/${REPO}/git/commits`, {
    message: `Deploy ${new Date().toISOString().slice(0, 10)} — MOJO Poker Club`,
    tree: tree.sha,
    parents: []
  });
  console.log('   Commit:', commit.sha?.slice(0, 7));

  // Force-update gh-pages branch
  const refResp = await connectors.proxy('github', `/repos/${OWNER}/${REPO}/git/refs/heads/gh-pages`, {
    method: 'PATCH',
    body: JSON.stringify({ sha: commit.sha, force: true }),
    headers: { 'Content-Type': 'application/json' }
  });
  const refData = await refResp.json();
  if (refData.object?.sha) {
    console.log('   ✅ GitHub Pages: https://lilsuffer.github.io/mojo-poker-club/');
  } else {
    console.log('   ⚠️  Ref update:', JSON.stringify(refData).slice(0, 100));
  }
}

// =====================
// HELPERS
// =====================
function collectFiles(srcDir) {
  const allFiles = [];
  function walk(dir) {
    for (const f of fs.readdirSync(dir)) {
      const fp = path.join(dir, f);
      if (fs.statSync(fp).isDirectory()) walk(fp);
      else {
        const rel = path.relative(srcDir, fp).replace(/\\/g, '/');
        allFiles.push({ fp, rel });
      }
    }
  }
  walk(srcDir);
  return allFiles;
}

// =====================
// MAIN
// =====================
async function main() {
  console.log(`🔨 Building for GitHub Pages (base=${BASE_PATH})...`);
  execSync('pnpm run build', {
    stdio: 'inherit',
    cwd: __dirname,
    env: { ...process.env, BASE_PATH }
  });

  const allFiles = collectFiles(SRC);
  console.log(`📦 ${allFiles.length} files collected`);

  await deployToGitHubPages(allFiles);

  console.log('\n🎉 Done! Site is live at: https://lilsuffer.github.io/mojo-poker-club/');
}

main().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
