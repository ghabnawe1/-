import { build } from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const entryPoint = path.join(__dirname, '../server/index.ts');
const outfile = path.join(__dirname, '../dist/index.cjs');

build({
  entryPoints: [entryPoint],
  bundle: true,
  outfile,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  external: ['pg', 'pg-native', 'better-sqlite3'],
  outExtension: { '.js': '.cjs' },
}).catch(() => process.exit(1));
