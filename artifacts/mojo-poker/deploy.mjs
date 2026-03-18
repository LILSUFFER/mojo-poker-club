import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, 'dist/public');

const OWNER = 'mojopokerclub';
const REPO = 'mojopokerclub.github.io';

function getGitHubToken() {
  const token = process.env.GITHUB_PAT || process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_PAT secret not set — add it in Replit Secrets');
  return token;
}

async function main() {
  // 1. Build
  console.log('🔨 Building...');
  execSync('pnpm run build', {
    stdio: 'inherit',
    cwd: __dirname,
    env: { ...process.env, BASE_PATH: '/' }
  });

  // 2. Get token
  const token = await getGitHubToken();

  // 3. Deploy via git
  console.log('\n🐙 Deploying via git...');
  const repoDir = '/tmp/mojopokerclub-deploy';

  const gitEnv = {
    ...process.env,
    GIT_TERMINAL_PROMPT: '0',
    GIT_ASKPASS: 'echo',
    GIT_CONFIG_NOSYSTEM: '1',
  };

  const run = (cmd) => execSync(cmd, {
    encoding: 'utf8',
    timeout: 120000,
    env: gitEnv,
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  const cloneUrl = `https://oauth2:${token}@github.com/${OWNER}/${REPO}.git`;

  run(`rm -rf "${repoDir}"`);
  run(`git -c credential.helper= clone "${cloneUrl}" "${repoDir}" --depth 1`);
  run(`find "${repoDir}" -mindepth 1 -not -path "${repoDir}/.git/*" -not -name ".git" -delete`);
  run(`cp -r "${SRC}/." "${repoDir}/"`);
  run(`touch "${repoDir}/.nojekyll"`);
  // Always ensure CNAME for custom domain
  writeFileSync(`${repoDir}/CNAME`, 'mojopokerclub.com\n');

  const git = (cmd) => execSync(`git -C "${repoDir}" ${cmd}`, {
    encoding: 'utf8', timeout: 60000, env: gitEnv, stdio: ['pipe', 'pipe', 'pipe'],
  });

  git('config user.email "deploy@mojopokerclub.com"');
  git('config user.name "MOJO Deploy Bot"');
  git('add -A');
  try { git(`commit -m "Deploy ${new Date().toISOString().slice(0,10)} — MOJO Poker Club"`); }
  catch { console.log('Nothing to commit, site already up to date.'); }
  git(`-c credential.helper= push "${cloneUrl}" main --force`);

  console.log('✅ Done');
  console.log('\n🎉 Site live at: https://mojopokerclub.github.io/');
}

main().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
