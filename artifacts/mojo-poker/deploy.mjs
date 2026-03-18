import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, 'dist/public');

const OWNER = 'mojopokerclub';
const REPO = 'mojopokerclub.github.io';

function getGitHubToken() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN env var not set');
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

  const script = `
set -e
REPO_DIR="${repoDir}"

# Clone fresh
rm -rf "$REPO_DIR"
git clone "https://${token}@github.com/${OWNER}/${REPO}.git" "$REPO_DIR" --depth 1

# Remove old files (keep .git)
find "$REPO_DIR" -mindepth 1 -not -path "$REPO_DIR/.git/*" -not -name ".git" -delete

# Copy built files
cp -r ${SRC}/. "$REPO_DIR/"

# Ensure .nojekyll
touch "$REPO_DIR/.nojekyll"

# Git config
cd "$REPO_DIR"
git config user.email "deploy@mojopokerclub.com"
git config user.name "MOJO Deploy Bot"

# Commit and push
git add -A
git commit -m "Deploy $(date +%Y-%m-%d) — MOJO Poker Club"
git push origin main --force

echo "✅ Done: https://${OWNER}.github.io/"
`;

  const out = execSync(`bash -c '${script.replace(/'/g, "'\\''")}'`, {
    timeout: 180000,
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe']
  });

  console.log(out.split('\n').filter(l => l.trim()).slice(-10).join('\n'));
  console.log('\n🎉 Site live at: https://mojopokerclub.github.io/');
}

main().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
