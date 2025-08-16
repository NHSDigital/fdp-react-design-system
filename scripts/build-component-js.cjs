#!/usr/bin/env node
// Builds per-component ESM entry points (index.js) into dist/src/components/** using esbuild.
// These correspond to the package.json component export entries.
const path = require('path');
const fs = require('fs');
const { build } = require('esbuild');

const root = path.join(__dirname, '..');
const srcComponentsDir = path.join(root, 'src', 'components');
const outRoot = path.join(root, 'dist', 'src', 'components');

if (!fs.existsSync(srcComponentsDir)) {
  console.error('[build-component-js] components directory missing');
  process.exit(1);
}

const entries = fs.readdirSync(srcComponentsDir)
  .filter(name => !name.startsWith('.') && fs.statSync(path.join(srcComponentsDir, name)).isDirectory())
  .map(name => ({ name, indexPath: path.join(srcComponentsDir, name, 'index.ts') }))
  .filter(e => fs.existsSync(e.indexPath));

if (!entries.length) {
  console.warn('[build-component-js] No component index.ts files found');
  process.exit(0);
}

const ignoreScssPlugin = {
  name: 'ignore-scss',
  setup(buildApi) {
    buildApi.onLoad({ filter: /\.scss$/ }, () => ({ contents: '', loader: 'js' }));
  }
};

async function run() {
  let built = 0;
  for (const e of entries) {
    const outdir = path.join(outRoot, e.name);
    fs.mkdirSync(outdir, { recursive: true });
    try {
      await build({
        entryPoints: [e.indexPath],
        bundle: true,
        format: 'esm',
        platform: 'browser',
        sourcemap: true,
        target: 'es2019',
        treeShaking: true,
        outfile: path.join(outdir, 'index.js'),
        logLevel: 'silent',
        external: ['react', 'react-dom'],
        plugins: [ignoreScssPlugin]
      });
      built++;
    } catch (err) {
      console.error(`[build-component-js] Failed to build ${e.name}:`, err.message);
      process.exitCode = 1;
    }
  }
  console.log(`[build-component-js] Built ${built} component JS entry files.`);
  if (process.exitCode) process.exit(process.exitCode);
}

run();
