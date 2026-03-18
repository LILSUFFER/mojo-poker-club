import https from 'https';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { createRequire } from 'module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const OWNER = 'LILSUFFER';
const REPO = 'mojo-poker-club';
const SRC = path.resolve(__dirname, 'dist/public');

// --- Netlify config ---
const NETLIFY_TOKEN = 'nfp_T2HCgX6BNT46zDxRZoxKuvcaxGRGYpqne5c7';
const NETLIFY_SITE_ID = '589a55c4-139e-4470-aa34-c5118c9ae815';

// =====================
// NETLIFY DEPLOY
// =====================
async function netlifyRequest(opts, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(opts, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(d) }); }
        catch (e) { resolve({ status: res.statusCode, body: d }); }
      });
    });
    req.on('error', reject);
    if (body) req.write(typeof body === 'string' ? body : JSON.stringify(body));
    req.end();
  });
}

async function uploadNetlifyFile(deployId, hash, filePath) {
  return new Promise((resolve, reject) => {
    const content = fs.readFileSync(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const mimeMap = {
      '.js': 'application/javascript', '.css': 'text/css', '.html': 'text/html',
      '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
      '.ico': 'image/x-icon', '.json': 'application/json', '.xml': 'application/xml',
      '.txt': 'text/plain', '.webp': 'image/webp', '.woff2': 'font/woff2',
      '.woff': 'font/woff', '.ttf': 'font/ttf'
    };
    const ct = mimeMap[ext] || 'application/octet-stream';
    const opts = {
      hostname: 'api.netlify.com',
      path: `/api/v1/deploys/${deployId}/files/${encodeURIComponent(hash)}`,
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer ' + NETLIFY_TOKEN,
        'Content-Type': ct,
        'Content-Length': content.length
      }
    };
    const req = https.request(opts, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => res.statusCode < 300 ? resolve() : reject(new Error('HTTP ' + res.statusCode)));
    });
    req.on('error', reject);
    req.write(content);
    req.end();
  });
}

async function deployToNetlify(files, hashMap) {
  console.log('\n🌐 Deploying to Netlify...');
  const bodyStr = JSON.stringify({ files });
  const r = await netlifyRequest({
    hostname: 'api.netlify.com',
    path: `/api/v1/sites/${NETLIFY_SITE_ID}/deploys`,
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + NETLIFY_TOKEN,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(bodyStr)
    }
  }, bodyStr);

  const deployId = r.body.id;
  const required = r.body.required || [];
  console.log(`   Deploy ID: ${deployId} | Uploading: ${required.length} files`);

  let done = 0;
  for (let i = 0; i < required.length; i += 5) {
    await Promise.all(required.slice(i, i + 5).map(async hash => {
      const fp = hashMap[hash];
      if (fp) await uploadNetlifyFile(deployId, hash, fp);
      done++;
    }));
    if (done % 50 === 0) process.stdout.write(`   ${done}/${required.length}...\n`);
  }

  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 2000));
    const s = await netlifyRequest({
      hostname: 'api.netlify.com',
      path: `/api/v1/deploys/${deployId}`,
      headers: { 'Authorization': 'Bearer ' + NETLIFY_TOKEN }
    });
    if (s.body.state === 'ready') {
      console.log('   ✅ Netlify: ' + s.body.ssl_url);
      return;
    }
    process.stdout.write('.');
  }
}

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

  // Create commit (orphan)
  const commit = await ghPost(`/repos/${OWNER}/${REPO}/git/commits`, {
    message: `Deploy ${new Date().toISOString().slice(0, 10)} — MOJO Poker Club`,
    tree: tree.sha,
    parents: []
  });
  console.log('   Commit:', commit.sha?.slice(0, 7));

  // Force-update gh-pages ref
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
// MAIN
// =====================
async function main() {
  // 1. Build
  console.log('🔨 Building...');
  execSync('pnpm run build', { stdio: 'inherit', cwd: __dirname });

  // 2. Collect files
  const allFiles = [];
  const files = {};
  const hashMap = {};

  function walk(dir) {
    for (const f of fs.readdirSync(dir)) {
      const fp = path.join(dir, f);
      if (fs.statSync(fp).isDirectory()) walk(fp);
      else {
        const rel = '/' + path.relative(SRC, fp).replace(/\\/g, '/');
        const relNoSlash = rel.slice(1);
        const hash = crypto.createHash('sha1').update(fs.readFileSync(fp)).digest('hex');
        files[rel] = hash;
        hashMap[hash] = fp;
        allFiles.push({ fp, rel: relNoSlash });
      }
    }
  }
  walk(SRC);
  console.log(`📦 ${allFiles.length} files collected`);

  // 3. Deploy to both
  await deployToNetlify(files, hashMap);
  await deployToGitHubPages(allFiles);

  console.log('\n🎉 Done! Both deployments updated.');
}

main().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
