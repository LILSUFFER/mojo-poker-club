import https from 'https';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TOKEN = process.env.NETLIFY_AUTH_TOKEN || 'nfp_T2HCgX6BNT46zDxRZoxKuvcaxGRGYpqne5c7';
const SITE_ID = '589a55c4-139e-4470-aa34-c5118c9ae815';
const SRC = path.resolve(__dirname, 'dist/public');

function apiRequest(opts, body) {
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

function uploadFile(deployId, hash, filePath) {
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
      path: '/api/v1/deploys/' + deployId + '/files/' + encodeURIComponent(hash),
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer ' + TOKEN,
        'Content-Type': ct,
        'Content-Length': content.length
      }
    };
    const req = https.request(opts, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        if (res.statusCode < 300) resolve();
        else reject(new Error('HTTP ' + res.statusCode + ' for ' + hash));
      });
    });
    req.on('error', reject);
    req.write(content);
    req.end();
  });
}

async function main() {
  console.log('🔨 Building...');
  execSync('pnpm run build', { stdio: 'inherit', cwd: __dirname });

  console.log('\n📦 Collecting files...');
  const files = {};
  const hashMap = {};

  function walk(dir) {
    for (const f of fs.readdirSync(dir)) {
      const fp = path.join(dir, f);
      if (fs.statSync(fp).isDirectory()) walk(fp);
      else {
        const rel = '/' + path.relative(SRC, fp).replace(/\\/g, '/');
        const hash = crypto.createHash('sha1').update(fs.readFileSync(fp)).digest('hex');
        files[rel] = hash;
        hashMap[hash] = fp;
      }
    }
  }
  walk(SRC);
  console.log('Total files:', Object.keys(files).length);

  const bodyStr = JSON.stringify({ files });
  const r = await apiRequest({
    hostname: 'api.netlify.com',
    path: '/api/v1/sites/' + SITE_ID + '/deploys',
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + TOKEN,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(bodyStr)
    }
  }, bodyStr);

  if (!r.body.id) {
    console.error('Deploy creation failed:', JSON.stringify(r.body));
    process.exit(1);
  }

  const deployId = r.body.id;
  const required = r.body.required || [];
  console.log('Deploy ID:', deployId, '| Files to upload:', required.length);

  let done = 0;
  for (let i = 0; i < required.length; i += 5) {
    const batch = required.slice(i, i + 5);
    await Promise.all(batch.map(async hash => {
      const fp = hashMap[hash];
      if (!fp) { console.warn('⚠️  Missing file for hash:', hash); return; }
      await uploadFile(deployId, hash, fp);
      done++;
      if (done % 25 === 0) process.stdout.write(`  ${done}/${required.length}...\n`);
    }));
  }
  console.log(`Uploaded: ${done} files`);

  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 2000));
    const s = await apiRequest({
      hostname: 'api.netlify.com',
      path: '/api/v1/deploys/' + deployId,
      headers: { 'Authorization': 'Bearer ' + TOKEN }
    });
    if (s.body.state === 'ready') {
      console.log('\n✅ Live at:', s.body.ssl_url);
      break;
    }
    if (s.body.state === 'error') {
      console.error('Deploy error:', s.body.error_message);
      process.exit(1);
    }
    process.stdout.write('.');
  }
}

main().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
